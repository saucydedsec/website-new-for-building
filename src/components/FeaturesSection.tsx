import React from 'react';
import {
  Smartphone,
  Zap,
  Search,
  Sparkles,
  MousePointerClick,
  Moon,
  FileCode,
  BarChart3,
  Lock,
  Compass,
  Touchpad,
  TrendingUp
} from 'lucide-react';

const FEATURES = [
  {
    icon: Smartphone,
    title: 'Responsive Design',
    desc: 'Fluid layouts tested across 32 viewport breakpoints from 375px mobile to 4K ultra-wide monitors.'
  },
  {
    icon: Zap,
    title: 'Fast Performance',
    desc: 'Sub-400ms First Contentful Paint with static asset compression and tree-shaken modern JavaScript.'
  },
  {
    icon: Search,
    title: 'SEO Friendly',
    desc: 'Rich JSON-LD Schema markup, semantic HTML5 structure, and pre-rendered OpenGraph metadata.'
  },
  {
    icon: Sparkles,
    title: 'Custom Animations',
    desc: '60fps compositor-only GPU transforms with Spring physics, magnetic buttons, and parallax depth.'
  },
  {
    icon: MousePointerClick,
    title: 'Interactive UI',
    desc: 'Tactile state changes, drag-and-drop handles, live sliders, and rich interactive previews.'
  },
  {
    icon: Moon,
    title: 'Dark Mode & Themes',
    desc: 'Bespoke chromatic systems that support seamless dark, midnight, light, and luxury color modes.'
  },
  {
    icon: FileCode,
    title: 'CMS Integration',
    desc: 'Effortless client editing via modern headless systems like Sanity, Strapi, or Supabase.'
  },
  {
    icon: BarChart3,
    title: 'Edge Analytics',
    desc: 'Cookieless, privacy-first conversion tracking, heatmaps, and funnel drop-off telemetry.'
  },
  {
    icon: Lock,
    title: 'Secure Authentication',
    desc: 'Enterprise-grade auth flows, role-based permissions, and end-to-end encrypted storage.'
  },
  {
    icon: Compass,
    title: 'Custom Branding',
    desc: 'Unique typographic pairings, design tokens, and aesthetic gravity with zero generic templates.'
  },
  {
    icon: Touchpad,
    title: 'Mobile Optimization',
    desc: 'Strict 44px touch targets, thumb-friendly navigation sheets, and smooth gesture carousels.'
  },
  {
    icon: TrendingUp,
    title: 'Conversion Focused',
    desc: 'Frictionless discovery booking, high-ticket checkout pathways, and clear primary calls to action.'
  }
];

export const FeaturesSection: React.FC = () => {
  return (
    <section id="specs" className="py-24 md:py-32 bg-[#090b14] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300">
            <span>Engineering Specifications</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 font-display uppercase">
            Everything Required for <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-200 to-indigo-300 bg-clip-text text-transparent">
              Digital Eminence
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
            Every website includes enterprise-tier architecture as standard. No technical compromises or hidden upgrades.
          </p>
        </div>

        {/* 12 Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group p-6 rounded-xl bg-[#0f121e] border border-white/5 hover:border-white/15 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-cyan-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20 transition-all mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white mb-2 font-display group-hover:text-cyan-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
