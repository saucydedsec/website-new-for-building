import React, { useState, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { ArrowRight, Compass, ShieldCheck, Zap, Monitor, Smartphone, Tablet, Play, Check, Grid } from 'lucide-react';
import KineticGrid from '@/components/ui/kinetic-grid';

export const HeroSection: React.FC = () => {
  const { openWizard } = useApp();
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [previewTheme, setPreviewTheme] = useState<'luxe' | 'cyber' | 'minimal'>('luxe');
  const [showKineticGrid, setShowKineticGrid] = useState(false);

  // Mouse tilt tracking
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const scrollToExplore = () => {
    const el = document.querySelector('#showcase');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="experience"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-radial from-[#121626] via-[#090a0f] to-[#090a0f]"
    >
      {/* Optional Interactive Kinetic Grid Canvas */}
      {showKineticGrid && (
        <div className="absolute inset-0 z-0 pointer-events-auto">
          <KineticGrid globalColor="default" className="w-full h-full bg-transparent min-h-full" />
        </div>
      )}

      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-cyan-600/10 via-indigo-600/10 to-amber-500/5 blur-[120px] rounded-full"
        style={{
          transform: `translate(calc(-50% + ${mousePos.x * 40}px), calc(-50% + ${mousePos.y * 40}px))`
        }}
      />
      <div className="absolute inset-0 subtle-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto mb-14 md:mb-20">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Human-Crafted Digital Experiences · Direct Designer Collaboration</span>
            </div>

            <button
              onClick={() => setShowKineticGrid(!showKineticGrid)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-medium text-cyan-300 hover:bg-cyan-500/20 transition-all cursor-pointer shadow-sm"
              title="Toggle interactive canvas warping grid"
            >
              <Grid className="w-3.5 h-3.5" />
              <span>{showKineticGrid ? 'Hide Kinetic Grid' : 'Try Kinetic Canvas'}</span>
            </button>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 font-display uppercase leading-[1.08] text-balance">
            Your Website. <br />
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Your Style.
            </span>{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Your Digital Identity.
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed text-balance mb-9">
            We are real designers and creative engineers. No generic AI templates or website-builder slop — we personally handcraft immersive, bespoke websites built around you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openWizard}
              className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-slate-950 bg-white hover:bg-slate-100 rounded-xl transition-all duration-200 shadow-lg shadow-white/10 hover:shadow-cyan-500/20 flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>Build My Website</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={scrollToExplore}
              className="w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Compass className="w-4 h-4 text-cyan-400" />
              <span>Explore Our Work</span>
            </button>
          </div>

          {/* Trust markers / clean proof */}
          <div className="mt-8 flex items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-400" /> 100% Hand-Crafted Code
            </span>
            <span aria-hidden="true" className="text-white/20">·</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Zero AI Template Slop
            </span>
            <span aria-hidden="true" className="text-white/20">·</span>
            <span className="hidden sm:inline">Direct Human Designer</span>
          </div>
        </div>

        {/* Hyper-realistic Interactive Browser Mockup */}
        <div className="relative max-w-5xl mx-auto">
          {/* Floating UI Elements / Cards */}
          <div className="hidden lg:block absolute -left-12 top-20 z-20 w-56 p-4 rounded-xl bg-[#141726]/90 border border-white/10 shadow-2xl backdrop-blur-xl animate-bounce-slow">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span className="font-mono text-[10px] text-cyan-400">DESIGN TOKEN</span>
              <span className="text-emerald-400 font-medium">Active</span>
            </div>
            <div className="text-sm font-semibold text-white">Bespoke Type System</div>
            <p className="text-xs text-slate-400 mt-1">Syne + Plus Jakarta Sans calibrated optical kerning.</p>
          </div>

          <div className="hidden lg:block absolute -right-12 bottom-16 z-20 w-60 p-4 rounded-xl bg-[#141726]/90 border border-white/10 shadow-2xl backdrop-blur-xl animate-float">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-semibold text-white">Live Benchmark</span>
            </div>
            <div className="text-2xl font-bold font-mono text-cyan-400">0.38s</div>
            <div className="text-xs text-slate-400 mt-0.5">Interaction-to-Next-Paint response</div>
          </div>

          {/* Browser Frame */}
          <div className="rounded-2xl border border-white/15 bg-[#0e101a] shadow-2xl overflow-hidden transition-all duration-300">
            {/* Browser Top Navigation Bar */}
            <div className="px-4 py-3 bg-[#131622] border-b border-white/10 flex items-center justify-between gap-4 select-none">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-3 text-xs font-mono text-slate-400 hidden sm:inline">nova-studio.preview/live-demo</span>
              </div>

              {/* Viewport Width Controls */}
              <div className="flex items-center gap-1 bg-white/5 p-1 rounded-lg border border-white/5">
                <button
                  onClick={() => setDeviceMode('desktop')}
                  className={`p-1.5 rounded text-xs transition-colors ${deviceMode === 'desktop' ? 'bg-white/15 text-white' : 'text-slate-400 hover:text-white'}`}
                  title="Desktop View"
                >
                  <Monitor className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setDeviceMode('tablet')}
                  className={`p-1.5 rounded text-xs transition-colors ${deviceMode === 'tablet' ? 'bg-white/15 text-white' : 'text-slate-400 hover:text-white'}`}
                  title="Tablet View"
                >
                  <Tablet className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setDeviceMode('mobile')}
                  className={`p-1.5 rounded text-xs transition-colors ${deviceMode === 'mobile' ? 'bg-white/15 text-white' : 'text-slate-400 hover:text-white'}`}
                  title="Mobile View"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Interactive Theme Swatch */}
              <div className="flex items-center gap-1.5 text-xs">
                <span className="text-slate-400 hidden md:inline text-[11px]">Vibe:</span>
                <button
                  onClick={() => setPreviewTheme('luxe')}
                  className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${previewTheme === 'luxe' ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40' : 'text-slate-400 hover:text-white'}`}
                >
                  Gold Luxe
                </button>
                <button
                  onClick={() => setPreviewTheme('cyber')}
                  className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${previewTheme === 'cyber' ? 'bg-cyan-400/20 text-cyan-300 border border-cyan-400/40' : 'text-slate-400 hover:text-white'}`}
                >
                  Cyber Slate
                </button>
                <button
                  onClick={() => setPreviewTheme('minimal')}
                  className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${previewTheme === 'minimal' ? 'bg-white/20 text-white border border-white/30' : 'text-slate-400 hover:text-white'}`}
                >
                  Monochrome
                </button>
              </div>
            </div>

            {/* Inner Interactive Website Preview */}
            <div
              className={`mx-auto transition-all duration-300 ${
                deviceMode === 'desktop'
                  ? 'w-full'
                  : deviceMode === 'tablet'
                  ? 'max-w-[720px] border-x border-white/10'
                  : 'max-w-[380px] border-x border-white/10'
              }`}
            >
              <div
                className={`p-6 md:p-10 transition-colors duration-500 ${
                  previewTheme === 'luxe'
                    ? 'bg-[#0f0e0d] text-[#f4efe8]'
                    : previewTheme === 'cyber'
                    ? 'bg-[#0a0f1d] text-[#e2e8f0]'
                    : 'bg-[#121316] text-[#ffffff]'
                }`}
              >
                {/* Simulated Site Header */}
                <div className="flex items-center justify-between pb-8 border-b border-white/10">
                  <div className="text-lg font-bold font-display tracking-widest uppercase">
                    {previewTheme === 'luxe' ? 'VENDÔME' : previewTheme === 'cyber' ? 'KINETIX' : 'MONOLITH'}
                  </div>
                  <div className="hidden sm:flex items-center gap-6 text-xs text-slate-300">
                    <span className="hover:text-white cursor-pointer">Collection</span>
                    <span className="hover:text-white cursor-pointer">Archive</span>
                    <span className="hover:text-white cursor-pointer">Journal</span>
                  </div>
                  <div className="px-3 py-1 rounded text-xs font-medium border border-white/20 bg-white/5">
                    Private Access
                  </div>
                </div>

                {/* Simulated Site Hero Body */}
                <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-7">
                    <div className="text-xs uppercase tracking-widest text-slate-400 mb-3 font-mono">
                      {previewTheme === 'luxe'
                        ? 'Edition No. 04 / Haute Craft'
                        : previewTheme === 'cyber'
                        ? 'Distributed Neural Fabric'
                        : 'Pure Spatial Form'}
                    </div>
                    <div className="text-3xl sm:text-5xl font-bold font-display leading-[1.1] mb-5">
                      {previewTheme === 'luxe' && (
                        <span>Rare beauty, <br /><span className="text-[#d4af37]">uncompromising</span> elegance.</span>
                      )}
                      {previewTheme === 'cyber' && (
                        <span>Autonomous <br /><span className="text-cyan-400">cloud systems</span> at scale.</span>
                      )}
                      {previewTheme === 'minimal' && (
                        <span>Architecture <br /><span className="text-slate-300">distilled to</span> silence.</span>
                      )}
                    </div>
                    <p className="text-sm text-slate-400 mb-7 max-w-md leading-relaxed">
                      Every layout is custom coded to echo your brand's unique philosophy. Zero cookie-cutter templates.
                    </p>
                    <div className="flex items-center gap-3">
                      <button
                        className={`px-5 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                          previewTheme === 'luxe'
                            ? 'bg-[#d4af37] text-black hover:bg-[#e4bf47]'
                            : previewTheme === 'cyber'
                            ? 'bg-cyan-400 text-slate-950 hover:bg-cyan-300'
                            : 'bg-white text-black hover:bg-slate-200'
                        }`}
                      >
                        Explore Showpiece
                      </button>
                      <button className="px-4 py-2.5 rounded-lg text-xs font-medium text-slate-300 border border-white/10 hover:bg-white/5">
                        Read Story
                      </button>
                    </div>
                  </div>

                  {/* Simulated Visual Artifact Card */}
                  <div className="md:col-span-5">
                    <div className="relative rounded-xl overflow-hidden border border-white/15 aspect-[4/3] bg-gradient-to-br from-white/5 to-white/0 p-6 flex flex-col justify-between group">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-mono text-slate-400">01 / FEATURED</span>
                        <div className="w-2 h-2 rounded-full bg-cyan-400" />
                      </div>

                      {/* Vector Graphic Composition */}
                      <div className="my-auto py-4 flex items-center justify-center">
                        <svg className="w-28 h-28 opacity-80 group-hover:scale-105 transition-transform duration-500" viewBox="0 0 100 100" fill="none">
                          <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="text-white/20" />
                          <circle cx="50" cy="50" r="28" stroke="currentColor" strokeWidth="1.5" className={previewTheme === 'luxe' ? 'text-[#d4af37]' : previewTheme === 'cyber' ? 'text-cyan-400' : 'text-white'} />
                          <polygon points="50,26 68,62 32,62" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" className={previewTheme === 'luxe' ? 'text-[#d4af37]' : previewTheme === 'cyber' ? 'text-cyan-400' : 'text-white'} />
                        </svg>
                      </div>

                      <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                        <span className="text-white font-medium">Kinetic Interaction</span>
                        <span className="text-slate-400 font-mono">60 FPS</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Simulated Bottom Metric Banner */}
                <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-xl font-bold font-mono text-white">4.9x</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Brand Recall</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold font-mono text-white">320ms</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Cold Render</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold font-mono text-white">+180%</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Direct Inquiry</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
