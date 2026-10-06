import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile, UserProject, ShowcaseProject, ThemeType, TypographyType, LayoutType } from '../types';
import { INITIAL_USER_PROJECTS } from '../data/showcaseData';

interface Toast {
  id: string;
  message: string;
  type?: 'success' | 'info' | 'warning';
}

interface AppContextType {
  user: UserProfile | null;
  login: (name: string, email: string) => void;
  logout: () => void;
  projects: UserProject[];
  addProject: (project: Omit<UserProject, 'id' | 'updatedAt' | 'views' | 'conversion'>) => UserProject;
  activeProject: UserProject | null;
  setActiveProject: (proj: UserProject | null) => void;
  
  // Modals & Navigation
  isAuthModalOpen: boolean;
  authModalTab: 'login' | 'signup';
  openAuthModal: (tab?: 'login' | 'signup') => void;
  closeAuthModal: () => void;

  isWizardOpen: boolean;
  openWizard: () => void;
  closeWizard: () => void;

  isBuilderOpen: boolean;
  openBuilder: (project?: UserProject) => void;
  closeBuilder: () => void;

  isDashboardOpen: boolean;
  openDashboard: () => void;
  closeDashboard: () => void;

  previewDemoProject: ShowcaseProject | null;
  setPreviewDemoProject: (proj: ShowcaseProject | null) => void;

  toasts: Toast[];
  showToast: (message: string, type?: 'success' | 'info' | 'warning') => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEY_USER = 'nova_studio_user';
const STORAGE_KEY_PROJECTS = 'nova_studio_projects';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_USER);
      if (stored) return JSON.parse(stored);
    } catch {
      // fallback
    }
    // Default demo user so the visitor can immediately experience either logged-in or guest
    return {
      id: 'usr-1',
      name: 'Alex Chen',
      email: 'alex.chen@studio.design',
      role: 'Creative Director',
      joinedDate: 'October 2026'
    };
  });

  const [projects, setProjects] = useState<UserProject[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_PROJECTS);
      if (stored) return JSON.parse(stored);
    } catch {
      // fallback
    }
    return INITIAL_USER_PROJECTS;
  });

  const [activeProject, setActiveProject] = useState<UserProject | null>(INITIAL_USER_PROJECTS[0]);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState<'login' | 'signup'>('login');
  const [isWizardOpen, setIsWizardOpen] = useState(false);
  const [isBuilderOpen, setIsBuilderOpen] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [previewDemoProject, setPreviewDemoProject] = useState<ShowcaseProject | null>(null);
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(user));
      } else {
        localStorage.removeItem(STORAGE_KEY_USER);
      }
    } catch {}
  }, [user]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_PROJECTS, JSON.stringify(projects));
    } catch {}
  }, [projects]);

  const showToast = (message: string, type: 'success' | 'info' | 'warning' = 'info') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3200);
  };

  const login = (name: string, email: string) => {
    const newUser: UserProfile = {
      id: 'usr-' + Date.now().toString(36),
      name: name.trim() || 'Creative Director',
      email: email.trim() || 'user@studio.design',
      role: 'Founding Member',
      joinedDate: 'October 2026'
    };
    setUser(newUser);
    setIsAuthModalOpen(false);
    showToast(`Welcome back, ${newUser.name}!`, 'success');
  };

  const logout = () => {
    setUser(null);
    setIsDashboardOpen(false);
    showToast('Signed out successfully.', 'info');
  };

  const addProject = (projectData: Omit<UserProject, 'id' | 'updatedAt' | 'views' | 'conversion'>) => {
    const newProject: UserProject = {
      ...projectData,
      id: 'proj-' + Date.now().toString(36),
      updatedAt: 'Just now',
      views: 1,
      conversion: '0%'
    };
    setProjects((prev) => [newProject, ...prev]);
    setActiveProject(newProject);
    showToast(`Project "${newProject.name}" created!`, 'success');
    return newProject;
  };

  const openAuthModal = (tab: 'login' | 'signup' = 'login') => {
    setAuthModalTab(tab);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => setIsAuthModalOpen(false);

  const openWizard = () => setIsWizardOpen(true);
  const closeWizard = () => setIsWizardOpen(false);

  const openBuilder = (project?: UserProject) => {
    if (project) {
      setActiveProject(project);
    }
    setIsBuilderOpen(true);
  };

  const closeBuilder = () => setIsBuilderOpen(false);

  const openDashboard = () => setIsDashboardOpen(true);
  const closeDashboard = () => setIsDashboardOpen(false);

  return (
    <AppContext.Provider
      value={{
        user,
        login,
        logout,
        projects,
        addProject,
        activeProject,
        setActiveProject,
        isAuthModalOpen,
        authModalTab,
        openAuthModal,
        closeAuthModal,
        isWizardOpen,
        openWizard,
        closeWizard,
        isBuilderOpen,
        openBuilder,
        closeBuilder,
        isDashboardOpen,
        openDashboard,
        closeDashboard,
        previewDemoProject,
        setPreviewDemoProject,
        toasts,
        showToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
};
