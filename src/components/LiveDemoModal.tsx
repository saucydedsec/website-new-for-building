import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Monitor, Tablet, Smartphone, ExternalLink, Sparkles, Check, ArrowRight, ShieldCheck } from 'lucide-react';

export const LiveDemoModal: React.FC = () => {
  const { previewDemoProject, setPreviewDemoProject, openWizard, showToast } = useApp();
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [inquirySent, setInquirySent] = useState(false);

  if (!previewDemoProject) return null;

  const project = previewDemoProject;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-6xl h-[92vh] rounded-2xl bg-[#090b12] border border-white/15 shadow-2xl flex flex-col overflow-hidden">
        {/* Browser Mockup Top Bar */}
        <div className="px-5 py-3 bg-[#111422] border-b border-white/10 flex items-center justify-between gap-4 select-none shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <div className="h-4 w-[1px] bg-white/10" />
            <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
              <span className="text-cyan-400 font-semibold">{project.title.toLowerCase().replace(/\s+/g, '-')}.com</span>
              <span className="text-slate-500">·</span>
              <span className="text-slate-400">{project.category}</span>
            </div>
          </div>

          {/* Viewport Width & Actions */}
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-white/5 p-1 rounded-lg border border-white/5">
              <button
                onClick={() => setDevice('desktop')}
                className={`p-1.5 rounded text-xs transition-colors ${device === 'desktop' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400 hover:text-white'}`}
                title="Desktop (1440px)"
              >
                <Monitor className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setDevice('tablet')}
                className={`p-1.5 rounded text-xs transition-colors ${device === 'tablet' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400 hover:text-white'}`}
                title="Tablet (768px)"
              >
                <Tablet className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setDevice('mobile')}
                className={`p-1.5 rounded text-xs transition-colors ${device === 'mobile' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400 hover:text-white'}`}
                title="Mobile (375px)"
              >
                <Smartphone className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={() => {
                setPreviewDemoProject(null);
                openWizard();
              }}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white text-slate-950 hover:bg-slate-100 transition-colors shadow-sm cursor-pointer"
            >
              Build Site Like This
            </button>

            <button
              onClick={() => setPreviewDemoProject(null)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Close Preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Browser Content Area (Scrollable Interactive Website) */}
        <div className="flex-1 overflow-y-auto bg-[#07090f] p-4 md:p-8 flex justify-center">
          <div
            className={`transition-all duration-300 rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#0d0f19] text-white flex flex-col justify-between ${
              device === 'desktop'
                ? 'w-full max-w-5xl'
                : device === 'tablet'
                ? 'w-[720px]'
                : 'w-[375px]'
            }`}
          >
            {/* Simulated Live Site */}
            <div>
              {/* Live Site Header */}
              <div className="p-6 md:p-8 border-b border-white/10 flex items-center justify-between">
                <div className="text-xl font-bold font-display uppercase tracking-widest text-white">
                  {project.title}
                </div>
                <div className="hidden sm:flex items-center gap-6 text-xs text-slate-300">
                  <span className="hover:text-white cursor-pointer">Archive</span>
                  <span className="hover:text-white cursor-pointer">Exhibitions</span>
                  <span className="hover:text-white cursor-pointer">Inquiries</span>
                </div>
                <button
                  onClick={() => {
                    setInquirySent(true);
                    showToast('Direct commission request submitted to studio queue', 'success');
                  }}
                  style={{ backgroundColor: project.accentColor }}
                  className="px-4 py-2 rounded-lg text-xs font-bold text-slate-950 hover:opacity-90 transition-opacity cursor-pointer"
                >
                  {inquirySent ? 'Request Dispatched' : 'Commission Studio'}
                </button>
              </div>

              {/* Live Site Hero Area */}
              <div className="p-8 md:p-14">
                <div className="max-w-2xl">
                  <span className="text-xs uppercase font-mono tracking-widest block mb-3" style={{ color: project.accentColor }}>
                    {project.client} · 2026 Direct Commission
                  </span>
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display leading-[1.08] mb-6">
                    {project.tagline}
                  </h1>
                  <p className="text-sm text-slate-300 leading-relaxed font-light mb-8 max-w-xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      style={{ backgroundColor: project.accentColor }}
                      className="px-6 py-3 rounded-xl text-xs font-bold text-slate-950 hover:opacity-90 transition-opacity"
                    >
                      View Monograph
                    </button>
                    <button className="px-5 py-3 rounded-xl text-xs font-medium border border-white/20 text-slate-300 hover:bg-white/5 transition-colors">
                      Client Case Study
                    </button>
                  </div>
                </div>

                {/* Simulated Interactive Feature Tiles */}
                <div className="mt-14 pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6">
                  {project.features.map((feat, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors"
                    >
                      <div className="text-[10px] font-mono text-slate-400 mb-2">0{i + 1} / CAPABILITY</div>
                      <h4 className="text-sm font-semibold text-white mb-2">{feat}</h4>
                      <p className="text-xs text-slate-400 font-light">
                        Tailored interaction engineering with zero legacy library overhead.
                      </p>
                    </div>
                  ))}
                </div>

                {/* Key Metrics Strip */}
                <div className="mt-10 p-6 rounded-xl bg-white/5 border border-white/10 grid grid-cols-3 gap-4 text-center">
                  {project.stats.map((st, i) => (
                    <div key={i}>
                      <div className="text-2xl font-bold font-mono" style={{ color: project.accentColor }}>
                        {st.value}
                      </div>
                      <div className="text-xs text-slate-400 mt-1">{st.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="p-6 bg-[#0a0c14] border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono">Engineered by NOVA · Production Ready</span>
              <span>All Rights Reserved 2026</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
