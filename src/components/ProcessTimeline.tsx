import React, { useState } from 'react';
import { Search, Compass, Code, Sparkles, Rocket, CheckCircle } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Discover',
    tagline: 'We understand your brand and requirements',
    desc: 'Deep-dive into your competitive landscape, aesthetic aspirations, audience motivations, and conversion metrics.',
    duration: 'Week 1',
    deliverables: ['Brand Architecture Blueprint', 'Audience Flow Analysis', 'Design Token Exploration'],
    icon: Search
  },
  {
    step: '02',
    title: 'Design',
    tagline: 'We create the visual direction and user experience',
    desc: 'High-fidelity Figma prototypes with custom typography pairings, motion choreography, and tactile interactive prototypes.',
    duration: 'Week 2–3',
    deliverables: ['Complete Viewport Designs', 'Motion Physics Specs', 'Interactive Clickable Prototype'],
    icon: Compass
  },
  {
    step: '03',
    title: 'Build',
    tagline: 'We turn the design into a functional website',
    desc: 'Engineered with clean React, Tailwind, and lightweight GPU motion shaders. Zero legacy bloat, strictly production-grade code.',
    duration: 'Week 4–5',
    deliverables: ['Responsive Front-end', 'API & CMS Wiring', 'Edge Performance Optimization'],
    icon: Code
  },
  {
    step: '04',
    title: 'Refine',
    tagline: 'We polish animations, performance and responsiveness',
    desc: 'Rigorous cross-device testing, Lighthouse 99+ audits, micro-interaction tuning, and WCAG AA accessibility compliance.',
    duration: 'Week 6',
    deliverables: ['Cross-Device Device Lab Audit', 'Core Web Vitals Pass', 'Interactive Micro-Stagger Polish'],
    icon: Sparkles
  },
  {
    step: '05',
    title: 'Launch',
    tagline: 'Your website goes live',
    desc: 'Global CDN deployment, DNS cutover, edge analytics verification, and private client training with full codebase handover.',
    duration: 'Week 7',
    deliverables: ['Production DNS Propagation', 'Analytics & Event Tracking', 'Handover Video & Docs'],
    icon: Rocket
  }
];

export const ProcessTimeline: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState(0);

  return (
    <section id="process" className="py-24 md:py-32 bg-[#06080e] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300">
            <span>Methodology & Delivery</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 font-display uppercase">
            From Vision to <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-200 to-indigo-300 bg-clip-text text-transparent">
              Global Deployment
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
            A battle-tested 5-stage engineering timeline designed for predictable excellence and zero surprises.
          </p>
        </div>

        {/* Horizontal Timeline Track */}
        <div className="relative mb-12">
          {/* Progress Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-white/10 -translate-y-1/2 z-0" />
          <div
            className="hidden lg:block absolute top-1/2 left-0 h-[2px] bg-gradient-to-r from-cyan-500 to-indigo-500 -translate-y-1/2 z-0 transition-all duration-500"
            style={{ width: `${(selectedStep / (STEPS.length - 1)) * 100}%` }}
          />

          {/* Steps Horizontal Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isActive = selectedStep === idx;
              const isPast = selectedStep > idx;

              return (
                <button
                  key={step.step}
                  onClick={() => setSelectedStep(idx)}
                  className={`p-5 rounded-xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? 'bg-[#121626] border-cyan-400/50 shadow-xl ring-1 ring-cyan-400/30'
                      : 'bg-[#0b0e17] border-white/10 hover:border-white/20 hover:bg-[#0f121e]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-xl font-bold font-mono ${isActive ? 'text-cyan-400' : 'text-slate-500'}`}>
                        {step.step}
                      </span>
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                          isActive
                            ? 'bg-cyan-500/20 text-cyan-300'
                            : isPast
                            ? 'bg-emerald-500/10 text-emerald-400'
                            : 'bg-white/5 text-slate-400'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-white mb-1 font-display">{step.title}</h3>
                    <div className="text-[11px] text-slate-400 mb-3 line-clamp-2">{step.tagline}</div>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400 font-mono">{step.duration}</span>
                    {isPast && <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />}
                    {isActive && <span className="text-cyan-400 font-semibold font-mono text-[10px]">SELECTED</span>}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Expanded Detail Panel */}
        <div className="rounded-2xl bg-[#0f121e] border border-white/10 p-8 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <div className="text-xs uppercase font-mono tracking-wider text-cyan-400 mb-2">
                Phase {STEPS[selectedStep].step} Specification · {STEPS[selectedStep].duration}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mb-3">
                {STEPS[selectedStep].title}: {STEPS[selectedStep].tagline}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-light mb-6">
                {STEPS[selectedStep].desc}
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedStep((prev) => Math.min(STEPS.length - 1, prev + 1))}
                  disabled={selectedStep === STEPS.length - 1}
                  className="px-4 py-2 rounded-lg text-xs font-semibold bg-white text-slate-950 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  Next Phase
                </button>
                <button
                  onClick={() => setSelectedStep((prev) => Math.max(0, prev - 1))}
                  disabled={selectedStep === 0}
                  className="px-4 py-2 rounded-lg text-xs font-medium text-slate-300 border border-white/10 hover:bg-white/5 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  Previous Phase
                </button>
              </div>
            </div>

            <div className="md:col-span-5 bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="text-xs font-semibold text-white mb-3">Guaranteed Phase Deliverables</div>
              <div className="space-y-2">
                {STEPS[selectedStep].deliverables.map((d, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
