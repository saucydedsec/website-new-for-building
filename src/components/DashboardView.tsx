import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Plus,
  Globe,
  FileCode,
  CheckCircle2,
  TrendingUp,
  Sliders,
  ExternalLink,
  Clock,
  ArrowUpRight,
  Eye,
  LogOut,
  Sparkles,
  ArrowLeft
} from 'lucide-react';

export const DashboardView: React.FC = () => {
  const { user, projects, openWizard, openBuilder, closeDashboard, logout, showToast } = useApp();

  const publishedCount = projects.filter((p) => p.status === 'Published').length;
  const draftCount = projects.filter((p) => p.status === 'Draft').length;
  const totalViews = projects.reduce((acc, p) => acc + p.views, 0);

  return (
    <div className="min-h-screen bg-[#080a11] text-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Back Navigation Bar */}
        <div className="flex items-center justify-between pb-8 mb-8 border-b border-white/10">
          <button
            onClick={closeDashboard}
            className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Studio Showcase</span>
          </button>

          <div className="flex items-center gap-4">
            <span className="text-xs text-slate-400 font-mono">Role: {user?.role || 'Client'}</span>
            <button
              onClick={logout}
              className="text-xs text-rose-400 hover:text-rose-300 transition-colors flex items-center gap-1.5"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* Welcome Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-medium text-cyan-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Studio Workspace</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold font-display uppercase tracking-tight">
              Welcome back, {user?.name || 'Partner'}
            </h1>
            <p className="text-base text-slate-400 font-light mt-1">
              “Let’s build something remarkable.”
            </p>
          </div>

          <button
            onClick={openWizard}
            className="px-6 py-3.5 rounded-xl text-xs font-semibold bg-white text-slate-950 hover:bg-slate-100 transition-all flex items-center gap-2 shadow-xl shadow-cyan-500/10 cursor-pointer shrink-0"
          >
            <Plus className="w-4 h-4 text-cyan-600" />
            <span>+ Create New Website</span>
          </button>
        </div>

        {/* Dashboard 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {/* 1. My Websites */}
          <div className="p-6 rounded-2xl bg-[#0f121e] border border-white/10">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
              <span className="font-mono uppercase">My Websites</span>
              <Globe className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-3xl font-bold font-mono text-white mb-1">{projects.length}</div>
            <div className="text-xs text-slate-400">Total active projects in workspace</div>
          </div>

          {/* 2. Drafts */}
          <div className="p-6 rounded-2xl bg-[#0f121e] border border-white/10">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
              <span className="font-mono uppercase">Drafts</span>
              <FileCode className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-3xl font-bold font-mono text-white mb-1">{draftCount}</div>
            <div className="text-xs text-slate-400">Saved website concepts in staging</div>
          </div>

          {/* 3. Published */}
          <div className="p-6 rounded-2xl bg-[#0f121e] border border-white/10">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
              <span className="font-mono uppercase">Published</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-3xl font-bold font-mono text-white mb-1">{publishedCount}</div>
            <div className="text-xs text-slate-400">Live on custom edge domains</div>
          </div>

          {/* 4. Analytics */}
          <div className="p-6 rounded-2xl bg-[#0f121e] border border-white/10">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
              <span className="font-mono uppercase">Analytics</span>
              <TrendingUp className="w-4 h-4 text-purple-400" />
            </div>
            <div className="text-3xl font-bold font-mono text-white mb-1">
              {(totalViews / 1000).toFixed(1)}k
            </div>
            <div className="text-xs text-emerald-400 flex items-center gap-1">
              <span>+24.8%</span>
              <span className="text-slate-400">monthly traffic surge</span>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold font-display uppercase tracking-tight">Active Projects</h2>
            <span className="text-xs text-slate-400">{projects.length} sites deployed</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj) => (
              <div
                key={proj.id}
                className="group rounded-2xl bg-[#0e111d] border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Mockup Header */}
                <div
                  className="h-44 p-5 flex flex-col justify-between border-b border-white/10 relative overflow-hidden"
                  style={{ backgroundColor: proj.theme === 'light' ? '#f4f4f5' : '#121524' }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        proj.status === 'Published'
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                      }`}
                    >
                      ● {proj.status}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">Updated {proj.updatedAt}</span>
                  </div>

                  <div>
                    <div
                      className={`text-xl font-bold font-display uppercase tracking-tight ${
                        proj.theme === 'light' ? 'text-slate-900' : 'text-white'
                      }`}
                    >
                      {proj.name}
                    </div>
                    <div
                      className={`text-xs mt-0.5 ${
                        proj.theme === 'light' ? 'text-slate-600' : 'text-slate-400'
                      }`}
                    >
                      {proj.category} · {proj.style}
                    </div>
                  </div>

                  {/* Corner Accent Glow */}
                  <div
                    className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full blur-2xl opacity-40 pointer-events-none"
                    style={{ backgroundColor: proj.accentColor }}
                  />
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div className="grid grid-cols-2 gap-4 py-2 border-b border-white/10 mb-4">
                    <div>
                      <div className="text-xs text-slate-400">Monthly Reach</div>
                      <div className="text-sm font-bold font-mono text-white">
                        {proj.views.toLocaleString()} visits
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Conversion</div>
                      <div className="text-sm font-bold font-mono text-emerald-400">
                        {proj.conversion}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        showToast(`Staging prototype for "${proj.name}" is being synchronized with design team`, 'info');
                      }}
                      className="flex-1 py-2 rounded-lg text-xs font-semibold bg-white text-slate-950 hover:bg-slate-100 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Review Scope</span>
                    </button>
                    <button
                      onClick={() => showToast(`Staged preview for ${proj.name} is active`, 'info')}
                      className="p-2 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                      title="View live preview"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Activity Stream */}
        <div className="p-6 rounded-2xl bg-[#0f121e] border border-white/10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold font-display uppercase tracking-wider text-slate-300">
              Recent Studio Milestones
            </h3>
            <span className="text-xs font-mono text-cyan-400">Live Synchronization</span>
          </div>

          <div className="space-y-3 text-xs text-slate-400">
            {[
              { time: '14 mins ago', text: 'New SSL certificate generated for aura-flagship.nova.cloud' },
              { time: '2 hours ago', text: 'Core Web Vitals achieved 100/100 on mobile viewport test' },
              { time: 'Yesterday', text: 'Typography kerning adjusted for editorial display headlines' }
            ].map((activity, idx) => (
              <div key={idx} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                <span className="text-slate-300">{activity.text}</span>
                <span className="font-mono text-slate-500 shrink-0 ml-4">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
