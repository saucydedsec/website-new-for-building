import React, { useState } from 'react';
import { Fingerprint, Users, Target, ArrowRight, CheckCircle2 } from 'lucide-react';

export const BuiltAroundYouSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number>(0);

  const CARDS = [
    {
      num: '01',
      title: 'Your Brand',
      subtitle: 'Colors, logo, typography and visual identity',
      summary: 'We do not squeeze your identity into a predefined theme. We distill your philosophy into proprietary design tokens, bespoke type scales, and unmistakable atmosphere.',
      icon: Fingerprint,
      accent: '#06B6D4',
      details: [
        'Proprietary typography pairings calibrated for high visual authority',
        'Custom chromatic token systems engineered for light and dark environments',
        'Distinctive micro-interactions and motion curves echoing your brand character',
        'Zero generic AI templates or repetitive off-the-shelf component packs'
      ]
    },
    {
      num: '02',
      title: 'Your Audience',
      subtitle: 'Layouts and interactions designed around the people visiting your website',
      summary: 'Every demographic navigates differently. We map high-friction bottlenecks and orchestrate intuitive, frictionless pathways that turn casual browsers into committed advocates.',
      icon: Users,
      accent: '#D4AF37',
      details: [
        'Cognitive load reduction with focused spatial hierarchy',
        'WCAG AA accessible contrast, fluid typography, and touch ergonomics',
        'Zero-latency interaction loops with instant client-side transitions',
        'Context-aware device adaptations crafted by hand for phone, tablet, and desktop'
      ]
    },
    {
      num: '03',
      title: 'Your Goals',
      subtitle: 'Websites designed for sales, bookings, portfolios, leads, or communities',
      summary: 'A website should achieve real outcomes. We work directly with you to craft deliberate conversion funnels, transparent trust anchors, and clear calls to action.',
      icon: Target,
      accent: '#10B981',
      details: [
        'High-ticket checkout workflows with sub-second payment completions',
        'Executive discovery scheduler with automated qualification questions',
        'Direct human communication with your dedicated design engineer',
        'Complete ownership with clean, maintainable source code handed to you'
      ]
    }
  ];

  return (
    <section id="philosophy" className="py-24 md:py-32 bg-[#06080e] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300">
            <span>Human Craftsmanship · Direct Collaboration</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 font-display uppercase">
            Built Around You
          </h2>

          <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
            Three principles that govern how we personally craft every digital project from scratch.
          </p>
        </div>

        {/* 3 Large Interactive Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CARDS.map((card, idx) => {
            const Icon = card.icon;
            const isSelected = activeCard === idx;

            return (
              <div
                key={card.num}
                onClick={() => setActiveCard(idx)}
                className={`rounded-2xl p-8 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#101422] border-white/20 shadow-2xl ring-1 ring-cyan-500/30'
                    : 'bg-[#0c0e17] border-white/10 hover:border-white/15 hover:bg-[#0e111d]'
                }`}
              >
                <div>
                  {/* Card Index & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-2xl font-bold font-mono text-slate-500">{card.num}</span>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors"
                      style={{ backgroundColor: `${card.accent}15`, color: card.accent }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 font-display">{card.title}</h3>
                  <div className="text-xs text-slate-400 font-medium mb-4">{card.subtitle}</div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-6 font-light">
                    {card.summary}
                  </p>
                </div>

                {/* Details Checklist */}
                <div className="pt-6 border-t border-white/10">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-3">
                    Bespoke Deliverables
                  </div>
                  <div className="space-y-2.5">
                    {card.details.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2
                          className="w-4 h-4 shrink-0 mt-0.5"
                          style={{ color: card.accent }}
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
