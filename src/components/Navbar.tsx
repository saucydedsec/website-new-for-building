import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles, Menu, X, User, LayoutDashboard, LogOut } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { user, openAuthModal, openWizard, openDashboard, isDashboardOpen, closeDashboard, logout } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Showcase', href: '#showcase' },
    { name: 'Capabilities', href: '#categories' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Specifications', href: '#specs' },
    { name: 'Process', href: '#process' }
  ];

  const handleNavClick = (href: string) => {
    if (isDashboardOpen) {
      closeDashboard();
    }
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090a0f]/80 backdrop-blur-md border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (isDashboardOpen) closeDashboard();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-2xl font-bold tracking-tight text-white font-display uppercase hover:opacity-90 transition-opacity"
        >
          NOVA
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="text-slate-300 hover:text-white transition-colors cursor-pointer relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all after:duration-200"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          {user ? (
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-200 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-500 flex items-center justify-center text-[10px] text-white font-semibold">
                  {user.name.charAt(0)}
                </div>
                <span className="hidden sm:inline max-w-[120px] truncate">{user.name}</span>
              </button>

              {userMenuOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 py-1.5 bg-[#12141f] border border-white/10 rounded-xl shadow-2xl backdrop-blur-xl z-50 text-xs"
                  onClick={() => setUserMenuOpen(false)}
                >
                  <button
                    onClick={openDashboard}
                    className="w-full px-4 py-2 text-left text-slate-200 hover:bg-white/5 flex items-center gap-2"
                  >
                    <LayoutDashboard className="w-3.5 h-3.5 text-cyan-400" />
                    <span>My Dashboard</span>
                  </button>
                  <button
                    onClick={logout}
                    className="w-full px-4 py-2 text-left text-rose-300 hover:bg-rose-500/10 flex items-center gap-2"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Sign Out</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => openAuthModal('login')}
              className="px-4 py-2 text-xs font-medium text-slate-200 hover:text-white transition-colors whitespace-nowrap"
            >
              Login
            </button>
          )}

          <button
            onClick={openWizard}
            className="group px-4 py-2 text-xs font-medium text-slate-950 bg-white hover:bg-slate-100 rounded-lg transition-all duration-200 whitespace-nowrap shadow-sm hover:shadow-cyan-500/10 flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-600 group-hover:rotate-12 transition-transform duration-200" />
            <span>Commission Project</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e1019] border-b border-white/10 px-6 py-5 flex flex-col gap-4 text-sm animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="text-left py-2 text-slate-300 hover:text-white transition-colors border-b border-white/5"
            >
              {link.name}
            </button>
          ))}
          <div className="pt-2 flex flex-col gap-2.5">
            {user ? (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openDashboard();
                }}
                className="w-full py-2.5 px-4 text-xs font-medium text-center text-slate-200 bg-white/5 rounded-lg"
              >
                Open Dashboard ({user.name})
              </button>
            ) : (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openAuthModal('login');
                }}
                className="w-full py-2.5 px-4 text-xs font-medium text-center text-slate-200 bg-white/5 rounded-lg"
              >
                Sign In
              </button>
            )}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openWizard();
              }}
              className="w-full py-2.5 px-4 text-xs font-medium text-center text-slate-950 bg-white rounded-lg flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
              <span>Create My Website</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
