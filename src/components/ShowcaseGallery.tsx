import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SHOWCASE_PROJECTS } from '../data/showcaseData';
import { ShowcaseProject } from '../types';
import { Eye, ExternalLink, ArrowRight, Sparkles, Code2 } from 'lucide-react';

export const ShowcaseGallery: React.FC = () => {
  const { setPreviewDemoProject, showToast } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Luxury Fashion', 'Modern Tech Startup', 'Restaurant', 'Personal Portfolio', 'Fitness Brand', 'Creative Agency'];

  const filteredProjects = activeCategory === 'All'
    ? SHOWCASE_PROJECTS
    : SHOWCASE_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="showcase" className="py-24 md:py-32 bg-[#090b12] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Commissioned Digital Portfolios</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display uppercase">
              Imagine Your Website <br />
              <span className="bg-gradient-to-r from-cyan-300 via-white to-slate-300 bg-clip-text text-transparent">
                Looking Like This.
              </span>
            </h2>
          </div>

          <p className="text-sm text-slate-400 max-w-md font-normal leading-relaxed">
            Click <strong className="text-white font-medium">View Live Demo</strong> on any project to launch an interactive live prototype in a simulated browser viewport.
          </p>
        </div>

        {/* Filter Tabs (Interactive filter control - buttons allowed per constitution) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-white text-slate-950 font-semibold shadow-md'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-[#0f121e] border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Visual Showcase Card Header / Vector Preview */}
              <div className="relative aspect-[16/10] bg-[#141724] overflow-hidden border-b border-white/10 flex items-center justify-center p-6">
                {/* Dynamic Stylized Vector Canvas representing each site */}
                <div className="absolute inset-0 opacity-40 group-hover:scale-105 group-hover:opacity-60 transition-all duration-500 flex items-center justify-center pointer-events-none">
                  {project.id === 'luxury-fashion' && (
                    <div className="w-full h-full bg-gradient-to-tr from-amber-950/40 via-stone-900 to-black p-6 flex flex-col justify-between">
                      <div className="font-serif-display text-2xl tracking-widest text-[#d4af37]">VENDÔME</div>
                      <div className="h-0.5 w-16 bg-[#d4af37]" />
                      <div className="text-[10px] tracking-widest uppercase text-amber-200/60 font-mono">HAUTE CRAFT 2026</div>
                    </div>
                  )}

                  {project.id === 'tech-startup' && (
                    <div className="w-full h-full bg-gradient-to-tr from-cyan-950/40 via-slate-900 to-[#070b14] p-6 flex flex-col justify-between font-mono">
                      <div className="text-cyan-400 text-sm font-bold flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                        <span>NEXUS NODE GRAPH</span>
                      </div>
                      <div className="text-3xl font-bold text-white tracking-wider">0.12ms</div>
                      <div className="text-[10px] text-cyan-300/70">DISTRIBUTED AI CLUSTER</div>
                    </div>
                  )}

                  {project.id === 'restaurant' && (
                    <div className="w-full h-full bg-gradient-to-tr from-orange-950/40 via-[#18110e] to-black p-6 flex flex-col justify-between">
                      <div className="font-serif-display text-2xl italic text-[#e07a5f]">L'Arpège Atelier</div>
                      <div className="text-xs text-orange-200/80">Menu Dégustation en 7 Temps</div>
                      <div className="text-[10px] text-stone-400 font-mono">PARIS 7ÈME · MICHELIN 2026</div>
                    </div>
                  )}

                  {project.id === 'portfolio' && (
                    <div className="w-full h-full bg-[#16181f] p-6 flex flex-col justify-between">
                      <div className="text-xl font-display font-light text-slate-200">ROSTOVA MONOGRAPH</div>
                      <div className="text-xs text-slate-400">Architectural Pavilions, Venice Biennale</div>
                      <div className="text-[10px] text-slate-500 font-mono">EDITION VII</div>
                    </div>
                  )}

                  {project.id === 'fitness-brand' && (
                    <div className="w-full h-full bg-gradient-to-tr from-emerald-950/40 via-neutral-900 to-black p-6 flex flex-col justify-between">
                      <div className="text-xl font-display font-extrabold text-emerald-400 tracking-tight">KINETIC MOVE LAB</div>
                      <div className="text-3xl font-mono font-bold text-white">400g / m²</div>
                      <div className="text-[10px] text-emerald-300/70 font-mono">COMPRESSION COMPOSITE</div>
                    </div>
                  )}

                  {project.id === 'creative-agency' && (
                    <div className="w-full h-full bg-gradient-to-tr from-purple-950/40 via-[#120e20] to-black p-6 flex flex-col justify-between">
                      <div className="text-xl font-display font-bold text-purple-300 tracking-wider">ATELIER V</div>
                      <div className="font-serif-display text-lg italic text-white">"Spatial cinematic tension"</div>
                      <div className="text-[10px] text-purple-300/60 font-mono">AWARD SITE OF THE YEAR</div>
                    </div>
                  )}
                </div>

                {/* Hover Overlay with Live Demo CTA */}
                <div className="absolute inset-0 bg-[#090b12]/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <button
                    onClick={() => {
                      setPreviewDemoProject(project);
                      showToast(`Launching live prototype: ${project.title}`, 'info');
                    }}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-white text-slate-950 hover:bg-slate-100 transition-all flex items-center gap-2 shadow-xl scale-95 group-hover:scale-100"
                  >
                    <Eye className="w-3.5 h-3.5 text-cyan-600" />
                    <span>View Live Demo</span>
                  </button>
                </div>

                {/* Top Category Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-medium bg-black/60 text-white backdrop-blur-md border border-white/10">
                  {project.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-[11px] font-mono" style={{ color: project.accentColor }}>
                      ● Active
                    </span>
                  </div>
                  <div className="text-xs text-slate-300 font-medium mb-3">{project.tagline}</div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-5 font-light line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Proof Metrics (Claim to proof adjacency) */}
                  <div className="py-3 border-y border-white/10 grid grid-cols-3 gap-2 text-center mb-4">
                    {project.stats.map((st, i) => (
                      <div key={i}>
                        <div className="text-sm font-bold font-mono text-white">{st.value}</div>
                        <div className="text-[10px] text-slate-400 truncate">{st.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Clean unboxed tags with typographic separators */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <React.Fragment key={tag}>
                          {idx > 0 && <span aria-hidden="true">·</span>}
                          <span>{tag}</span>
                        </React.Fragment>
                      ))}
                    </div>

                    <button
                      onClick={() => setPreviewDemoProject(project)}
                      className="text-xs text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1 transition-colors"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
