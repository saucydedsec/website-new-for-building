import React from 'react';
import { useApp } from '../context/AppContext';
import { Building2, Sparkles, ShoppingBag, Utensils, Rocket, UserCheck, ArrowUpRight } from 'lucide-react';

interface CategoryItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  accent: string;
  deliverables: string[];
  sampleVisual: string;
}

const CATEGORIES: CategoryItem[] = [
  {
    id: 'business',
    name: 'Business',
    subtitle: 'Modern corporate websites',
    description: 'Executive web presence engineered for authority, investor trust, and institutional client acquisition.',
    icon: Building2,
    accent: '#06B6D4',
    deliverables: ['Investor Pitch Portals', 'Enterprise Governance', 'Global Office Footprint'],
    sampleVisual: 'Architectural Monolith'
  },
  {
    id: 'creators',
    name: 'Creators',
    subtitle: 'Personal brands and portfolios',
    description: 'Immersive showreels, media kits, and editorial portfolios crafted for filmmakers, directors, and artists.',
    icon: Sparkles,
    accent: '#8B5CF6',
    deliverables: ['Custom Showreel Player', 'Press & Recognition Grid', 'Direct Representation Booker'],
    sampleVisual: 'Cinematic Editorial'
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce',
    subtitle: 'Conversion-focused online stores',
    description: 'High-ticket shopping experiences with zero latency checkout, fluid product turntables, and VIP flows.',
    icon: ShoppingBag,
    accent: '#D4AF37',
    deliverables: ['Bespoke Cart Workflows', 'Dynamic Lookbooks', 'Stripe & Shopify Headless'],
    sampleVisual: 'Luxury Atelier Shop'
  },
  {
    id: 'restaurants',
    name: 'Restaurants',
    subtitle: 'Interactive menus and booking experiences',
    description: 'Sensory gastronomy portals with curated seasonal tasting menus, cellar storytelling, and concierge reservations.',
    icon: Utensils,
    accent: '#E07A5F',
    deliverables: ['Interactive Multi-Course Menus', 'Sommelier Cellar Guide', 'Real-time Table Concierge'],
    sampleVisual: 'Gastronomy Atelier'
  },
  {
    id: 'startups',
    name: 'Startups',
    subtitle: 'Modern SaaS and technology websites',
    description: 'Next-gen interfaces that turn visitors into daily active users. Interactive product tours and benchmark charts.',
    icon: Rocket,
    accent: '#10B981',
    deliverables: ['Interactive SDK Playgrounds', 'Live Node Graphs', 'Self-Serve Conversion Paths'],
    sampleVisual: 'Cloud Platform Console'
  },
  {
    id: 'personal',
    name: 'Personal',
    subtitle: 'Websites built around individual identity',
    description: 'Unique digital footprints for founders, thinkers, and architects. Minimalist typography and personal essays.',
    icon: UserCheck,
    accent: '#F43F5E',
    deliverables: ['Curated Bibliography', 'Thought Leadership Essays', 'Private Key Inquiry Channel'],
    sampleVisual: 'Minimalist Signature'
  }
];

export const CategoriesSection: React.FC = () => {
  const { openWizard, showToast } = useApp();

  return (
    <section id="categories" className="py-24 md:py-32 bg-[#080a10] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300">
            <span>Specialized Domain Practices</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 font-display uppercase">
            We design for every <br />
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              kind of brand
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
            Every category has distinct visitor motivations and conversion triggers. We architect interfaces around your domain's specific psychological gravity.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                onClick={() => {
                  showToast(`Selected category: ${cat.name}`, 'info');
                  openWizard();
                }}
                className="group relative rounded-2xl bg-[#0e111d] border border-white/10 p-7 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon and Action */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors"
                      style={{ backgroundColor: `${cat.accent}15`, color: cat.accent }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-white/10 transition-colors">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white mb-1 font-display group-hover:text-cyan-300 transition-colors">
                    {cat.name}
                  </h3>
                  <div className="text-xs text-slate-400 mb-3">{cat.subtitle}</div>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed mb-6 font-light">
                    {cat.description}
                  </p>
                </div>

                {/* Deliverables / Unboxed Text Metadata */}
                <div className="pt-4 border-t border-white/10">
                  <div className="text-[10px] font-mono uppercase text-slate-500 mb-2">Architectural Highlights</div>
                  <div className="text-xs text-slate-300 space-y-1">
                    {cat.deliverables.map((del, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full" style={{ backgroundColor: cat.accent }} />
                        <span className="truncate">{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtle Hover Gradient Rim */}
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${cat.accent}, transparent 70%)`
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
