import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles, Sun, Moon, Layout, Palette, Play, Check, RotateCcw, Grid } from 'lucide-react';
import KineticGrid from '@/components/ui/kinetic-grid';

export const LivePlaygroundDemo: React.FC = () => {
  const { showToast, openWizard } = useApp();

  const [themeMode, setThemeMode] = useState<'dark' | 'light' | 'midnight'>('dark');
  const [accent, setAccent] = useState('#06B6D4');
  const [layoutStyle, setLayoutStyle] = useState<'editorial' | 'cards' | 'minimal'>('editorial');
  const [animating, setAnimating] = useState(false);
  const [kineticMode, setKineticMode] = useState(false);

  const triggerAnimation = () => {
    setAnimating(true);
    showToast('Triggered dynamic cascade animation!', 'info');
    setTimeout(() => setAnimating(false), 800);
  };

  const isLight = themeMode === 'light';

  return (
    <section className="py-24 md:py-32 bg-[#08090f] relative border-t border-white/5 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-600/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Real-time Interactive Demonstration</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 font-display uppercase">
            Don’t just view it. <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-200 to-indigo-300 bg-clip-text text-transparent">
              Play with it.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
            Click the floating prompt controls below to manipulate theme polarity, layouts, kinetic canvas physics, and motion dynamics directly on the live website.
          </p>

          {/* Floating Interaction Prompts Toolbar */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
            <button
              onClick={() => {
                const next = themeMode === 'dark' ? 'midnight' : themeMode === 'midnight' ? 'light' : 'dark';
                setThemeMode(next);
                showToast(`Switched theme to ${next.toUpperCase()}`, 'info');
              }}
              className="px-3.5 py-2 rounded-xl text-xs font-medium bg-white/10 text-white hover:bg-white/15 border border-white/15 flex items-center gap-2 transition-all cursor-pointer shadow-lg"
            >
              <Sun className="w-3.5 h-3.5 text-amber-400" />
              <span>Change Theme: {themeMode.toUpperCase()}</span>
            </button>

            <button
              onClick={() => {
                setThemeMode(themeMode === 'light' ? 'dark' : 'light');
                showToast(`Toggled ${themeMode === 'light' ? 'Dark' : 'Light'} Mode`, 'info');
              }}
              className="px-3.5 py-2 rounded-xl text-xs font-medium bg-white/10 text-white hover:bg-white/15 border border-white/15 flex items-center gap-2 transition-all cursor-pointer shadow-lg"
            >
              <Moon className="w-3.5 h-3.5 text-indigo-400" />
              <span>Try {themeMode === 'light' ? 'Dark' : 'Light'} Mode</span>
            </button>

            <button
              onClick={() => {
                const next = layoutStyle === 'editorial' ? 'cards' : layoutStyle === 'cards' ? 'minimal' : 'editorial';
                setLayoutStyle(next);
                showToast(`Layout changed to ${next.toUpperCase()}`, 'info');
              }}
              className="px-3.5 py-2 rounded-xl text-xs font-medium bg-white/10 text-white hover:bg-white/15 border border-white/15 flex items-center gap-2 transition-all cursor-pointer shadow-lg"
            >
              <Layout className="w-3.5 h-3.5 text-emerald-400" />
              <span>Change Layout: {layoutStyle.toUpperCase()}</span>
            </button>

            <button
              onClick={() => {
                const colors = ['#06B6D4', '#D4AF37', '#10B981', '#8B5CF6', '#F43F5E'];
                const next = colors[(colors.indexOf(accent) + 1) % colors.length];
                setAccent(next);
                showToast(`Accent adjusted to ${next}`, 'info');
              }}
              className="px-3.5 py-2 rounded-xl text-xs font-medium bg-white/10 text-white hover:bg-white/15 border border-white/15 flex items-center gap-2 transition-all cursor-pointer shadow-lg"
            >
              <Palette className="w-3.5 h-3.5 text-cyan-400" />
              <span className="flex items-center gap-1.5">
                Customize Colors <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ backgroundColor: accent }} />
              </span>
            </button>

            <button
              onClick={() => {
                setKineticMode(!kineticMode);
                showToast(kineticMode ? 'Disabled Kinetic Grid' : 'Enabled Kinetic Grid Canvas physics (Move mouse & click!)', 'info');
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-medium border flex items-center gap-2 transition-all cursor-pointer shadow-lg ${
                kineticMode
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400/50'
                  : 'bg-white/10 text-white hover:bg-white/15 border-white/15'
              }`}
            >
              <Grid className="w-3.5 h-3.5 text-cyan-400" />
              <span>{kineticMode ? 'Kinetic Grid: Active' : 'Try Kinetic Canvas'}</span>
            </button>

            <button
              onClick={triggerAnimation}
              className="px-3.5 py-2 rounded-xl text-xs font-medium bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 border border-cyan-500/30 flex items-center gap-2 transition-all cursor-pointer shadow-lg"
            >
              <Play className="w-3.5 h-3.5" />
              <span>Explore Animations</span>
            </button>
          </div>
        </div>

        {/* Central Realistic Live Website Demo Box */}
        <div className="max-w-4xl mx-auto rounded-2xl border border-white/15 shadow-2xl overflow-hidden transition-all duration-500 relative">
          {/* Optional Kinetic Grid Layer inside demo */}
          {kineticMode && (
            <div className="absolute inset-0 z-0 opacity-80 pointer-events-auto">
              <KineticGrid globalColor="default" className="w-full h-full min-h-full bg-transparent" />
            </div>
          )}
          {/* Top Browser Bar */}
          <div className="px-4 py-3 bg-[#111420] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-xs font-mono text-slate-400 ml-2">sandbox.studio-nova.io</span>
            </div>
            <div className="text-[11px] font-mono text-slate-400">
              Style: <span className="capitalize">{layoutStyle}</span> · <span style={{ color: accent }}>{accent}</span>
            </div>
          </div>

          {/* Interactive Live Surface */}
          <div
            className={`p-8 md:p-14 transition-all duration-500 ${
              isLight
                ? 'bg-[#fafafa] text-slate-900'
                : themeMode === 'midnight'
                ? 'bg-[#060b17] text-white'
                : 'bg-[#0c0e17] text-white'
            } ${animating ? 'scale-[0.99] opacity-90' : 'scale-100 opacity-100'}`}
          >
            {/* Live Navigation */}
            <div className="flex items-center justify-between pb-8 border-b border-current/10">
              <div className="text-xl font-bold font-display uppercase tracking-widest">
                KINETIX LAB
              </div>
              <div className="hidden sm:flex items-center gap-6 text-xs opacity-75 font-medium">
                <span>Collections</span>
                <span>Philosophy</span>
                <span>Journal</span>
              </div>
              <button
                style={{ backgroundColor: accent, color: '#000' }}
                className="px-4 py-2 rounded-lg text-xs font-bold transition-all shadow-md hover:opacity-90 cursor-pointer"
              >
                Inquire Access
              </button>
            </div>

            {/* Dynamic Content based on layout */}
            <div className="py-12">
              {layoutStyle === 'editorial' && (
                <div className="max-w-2xl">
                  <div className="text-xs font-mono uppercase tracking-widest opacity-60 mb-3" style={{ color: accent }}>
                    Edition XXVI · Autumn Commission
                  </div>
                  <h3 className="text-3xl sm:text-5xl font-bold font-display leading-[1.08] mb-6">
                    Where physical form <br />
                    meets <span style={{ color: accent }}>weightless digital clarity.</span>
                  </h3>
                  <p className="text-sm opacity-75 leading-relaxed mb-8 max-w-lg font-light">
                    Every section is custom balanced to guide visitors with confidence. Experience what happens when web design is treated as fine craft.
                  </p>
                  <div className="flex items-center gap-3">
                    <button
                      style={{ backgroundColor: accent, color: '#000' }}
                      className="px-6 py-3 rounded-xl text-xs font-bold hover:opacity-90 shadow-lg"
                    >
                      Book Atelier Tour
                    </button>
                    <button className="px-5 py-3 rounded-xl text-xs font-medium border border-current/15 hover:bg-current/5">
                      Explore Spec Sheet
                    </button>
                  </div>
                </div>
              )}

              {layoutStyle === 'cards' && (
                <div>
                  <div className="text-center max-w-md mx-auto mb-10">
                    <h3 className="text-2xl sm:text-4xl font-bold font-display mb-2">
                      Modular <span style={{ color: accent }}>Intelligence</span>
                    </h3>
                    <p className="text-xs opacity-70">Asymmetric card composition with live tactile feedback.</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { title: 'Sub-second Edge', metric: '0.2s', sub: 'Global cloud delivery' },
                      { title: 'Conversion Surge', metric: '+240%', sub: 'Qualified pipeline growth' },
                      { title: 'Design Fidelity', metric: '60 FPS', sub: 'Silky GPU micro-motion' }
                    ].map((card, i) => (
                      <div
                        key={i}
                        className="p-5 rounded-xl border border-current/10 bg-current/5 backdrop-blur-md hover:bg-current/10 transition-colors"
                      >
                        <div className="text-xs font-mono opacity-60 mb-2">0{i + 1} / METRIC</div>
                        <div className="text-3xl font-mono font-bold mb-2" style={{ color: accent }}>
                          {card.metric}
                        </div>
                        <div className="text-sm font-semibold mb-1">{card.title}</div>
                        <div className="text-xs opacity-70">{card.sub}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {layoutStyle === 'minimal' && (
                <div className="text-center max-w-lg mx-auto py-8">
                  <div className="w-12 h-12 rounded-full mx-auto mb-6 flex items-center justify-center border border-current/20 bg-current/5">
                    <Sparkles className="w-5 h-5" style={{ color: accent }} />
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold font-display mb-3">
                    Substance in <span style={{ color: accent }}>Simplicity</span>
                  </h3>
                  <p className="text-xs opacity-75 mb-6 leading-relaxed">
                    Zero distractions. Unapologetic whitespace. Your product takes center stage.
                  </p>
                  <button
                    style={{ backgroundColor: accent, color: '#000' }}
                    className="px-6 py-2.5 rounded-lg text-xs font-bold"
                  >
                    Experience Purity
                  </button>
                </div>
              )}
            </div>

            {/* Bottom Footer Ribbon in live demo */}
            <div className="pt-6 border-t border-current/10 flex items-center justify-between text-xs opacity-60">
              <span className="font-mono">Live Session ID: #8820-NX</span>
              <span>NOVA Architectural Prototype</span>
            </div>
          </div>
        </div>

        {/* Section bottom CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={openWizard}
            className="px-8 py-3.5 rounded-xl text-xs font-semibold bg-white text-slate-950 hover:bg-slate-100 shadow-xl transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <span>Ready to Elevate Your Brand? Commission A Bespoke Project</span>
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
          </button>
        </div>
      </div>
    </section>
  );
};
