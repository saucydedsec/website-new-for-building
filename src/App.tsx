/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CategoriesSection } from './components/CategoriesSection';
import { ShowcaseGallery } from './components/ShowcaseGallery';
import { BuiltAroundYouSection } from './components/BuiltAroundYouSection';
import { FeaturesSection } from './components/FeaturesSection';
import { ProcessTimeline } from './components/ProcessTimeline';
import { LivePlaygroundDemo } from './components/LivePlaygroundDemo';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { DashboardView } from './components/DashboardView';
import { WebsiteCreationWizard } from './components/WebsiteCreationWizard';
import { LiveDemoModal } from './components/LiveDemoModal';
import { ToastContainer } from './components/ToastContainer';
import { CustomCursor } from './components/CustomCursor';

const MainContent: React.FC = () => {
  const { isDashboardOpen } = useApp();

  return (
    <div className="min-h-screen bg-[#090A0F] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Subtle luxury custom cursor tracking */}
      <CustomCursor />

      <Navbar />

      <main className="flex-1">
        {isDashboardOpen ? (
          <DashboardView />
        ) : (
          <>
            <HeroSection />
            <CategoriesSection />
            <ShowcaseGallery />
            <BuiltAroundYouSection />
            <FeaturesSection />
            <ProcessTimeline />
            <LivePlaygroundDemo />
          </>
        )}
      </main>

      {!isDashboardOpen && <Footer />}

      {/* Global Overlays & Modals */}
      <AuthModal />
      <WebsiteCreationWizard />
      <LiveDemoModal />
      <ToastContainer />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
