import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  X,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Check,
  Palette,
  Type,
  Layout,
  Sliders,
  CheckCircle2,
  Building,
  User,
  ShoppingBag,
  Utensils,
  Rocket,
  Compass
} from 'lucide-react';
import { ThemeType, TypographyType, LayoutType } from '../types';

export const WebsiteCreationWizard: React.FC = () => {
  const { isWizardOpen, closeWizard, addProject, openBuilder, showToast } = useApp();

  const [step, setStep] = useState(1);
  const [projectName, setProjectName] = useState('');
  const [category, setCategory] = useState('Startup');
  const [style, setStyle] = useState('Cyber Modern');
  const [theme, setTheme] = useState<ThemeType>('midnight');
  const [accentColor, setAccentColor] = useState('#06B6D4');
  const [typography, setTypography] = useState<TypographyType>('modern');
  const [layout, setLayout] = useState<LayoutType>('bento');

  if (!isWizardOpen) return null;

  const categories = [
    { id: 'Business', label: 'Business & Corporate', icon: Building, desc: 'Executive presence & trust' },
    { id: 'Portfolio', label: 'Creative Portfolio', icon: Compass, desc: 'Architectural & visual showcase' },
    { id: 'E-commerce', label: 'Luxury E-Commerce', icon: ShoppingBag, desc: 'High-ticket shopping experience' },
    { id: 'Restaurant', label: 'Restaurant & Dining', icon: Utensils, desc: 'Sensory menus & reservations' },
    { id: 'Personal Brand', label: 'Personal Identity', icon: User, desc: 'Founders & thought leaders' },
    { id: 'Startup', label: 'Tech & SaaS Platform', icon: Rocket, desc: 'High conversion user acquisition' }
  ];

  const styles = [
    { id: 'Minimalist Luxe', desc: 'Champagne accents, deep noir, sculptural calm' },
    { id: 'Cyber Modern', desc: 'High-tech glass, kinetic teal glow, enterprise precision' },
    { id: 'Warm Editorial', desc: 'Classic serif headlines, paper tones, rich cadence' },
    { id: 'High-Tech SaaS', desc: 'Live node graphs, telemetry metrics, self-serve flows' },
    { id: 'Bold Vanguard', desc: 'Stark brutalist typography, fearless asymmetric scale' }
  ];

  const palettes = [
    { name: 'Obsidian & Cyan', hex: '#06B6D4', bg: '#080c18', theme: 'midnight' as ThemeType },
    { name: 'Champagne & Noir', hex: '#D4AF37', bg: '#0e0c0a', theme: 'luxury' as ThemeType },
    { name: 'Emerald Matrix', hex: '#10B981', bg: '#08120e', theme: 'dark' as ThemeType },
    { name: 'Electric Violet', hex: '#8B5CF6', bg: '#0f081c', theme: 'vibrant' as ThemeType },
    { name: 'Titanium Pure', hex: '#F1F5F9', bg: '#101217', theme: 'minimal' as ThemeType }
  ];

  const fontPairs = [
    { id: 'modern' as TypographyType, name: 'Modern Grotesk', pair: 'Syne Display + Plus Jakarta Sans' },
    { id: 'elegant' as TypographyType, name: 'Editorial Serif', pair: 'Instrument Serif + Body Sans' },
    { id: 'bold' as TypographyType, name: 'Bold Vanguard', pair: 'Heavy Display + Geometric Body' },
    { id: 'minimal' as TypographyType, name: 'Technical Pure', pair: 'JetBrains Mono + Clean Grotesk' }
  ];

  const layouts = [
    { id: 'bento' as LayoutType, name: 'Bento Grid', desc: 'Asymmetric modular hierarchy with live metric tiles' },
    { id: 'split' as LayoutType, name: 'Split Screen', desc: 'Dual-column visual narrative with sticky text' },
    { id: 'fullwidth' as LayoutType, name: 'Panoramic Canvas', desc: 'Edge-to-edge cinematic presence' },
    { id: 'editorial' as LayoutType, name: 'Magazine Stagger', desc: 'Literary columns with generous whitespace' }
  ];

  const handleFinish = () => {
    const finalName = projectName.trim() || `${category} Experience`;
    addProject({
      name: finalName,
      category,
      style,
      theme,
      accentColor,
      typography,
      layout,
      status: 'Reviewing'
    });
    closeWizard();
    showToast(`Design Brief for "${finalName}" received! Our team will prepare your bespoke concept.`, 'success');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-2xl bg-[#0d101a] border border-white/10 shadow-2xl overflow-hidden p-8 flex flex-col max-h-[90vh]">
        {/* Top Header & Progress */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-cyan-400">STAGE 0{step} OF 06</span>
            <div className="h-3 w-[1px] bg-white/10" />
            <span className="text-xs text-slate-400">Custom Design Discovery Brief</span>
          </div>

          <button
            onClick={closeWizard}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Progress Line */}
        <div className="w-full bg-slate-800 h-1 rounded-full mb-6 overflow-hidden">
          <div
            className="bg-gradient-to-r from-cyan-400 to-indigo-500 h-full transition-all duration-300"
            style={{ width: `${(step / 6) * 100}%` }}
          />
        </div>

        {/* Wizard Steps Container */}
        <div className="flex-1 overflow-y-auto pr-1">
          {/* STEP 1: What are you building? */}
          {step === 1 && (
            <div>
              <h3 className="text-2xl font-bold font-display text-white mb-2">What are you building?</h3>
              <p className="text-xs text-slate-400 mb-6">
                Select your primary industry practice so we can configure optimal conversion logic.
              </p>

              <div className="mb-6">
                <label className="text-xs text-slate-300 block mb-1.5 font-medium">Project Name</label>
                <input
                  type="text"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  placeholder="e.g. Atelier Valois, Zenith AI, or The Green Table"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {categories.map((c) => {
                  const Icon = c.icon;
                  const isSelected = category === c.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() => setCategory(c.id)}
                      className={`p-4 rounded-xl border text-left transition-all flex items-start gap-3 ${
                        isSelected
                          ? 'border-cyan-400 bg-cyan-500/10 text-white ring-1 ring-cyan-400/50'
                          : 'border-white/5 bg-white/5 text-slate-400 hover:border-white/15 hover:text-white'
                      }`}
                    >
                      <Icon className={`w-5 h-5 shrink-0 mt-0.5 ${isSelected ? 'text-cyan-400' : 'text-slate-500'}`} />
                      <div>
                        <div className="text-xs font-semibold text-white">{c.label}</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">{c.desc}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: Choose Your Style */}
          {step === 2 && (
            <div>
              <h3 className="text-2xl font-bold font-display text-white mb-2">Choose Your Style</h3>
              <p className="text-xs text-slate-400 mb-6">
                Select the overarching visual direction that best embodies your brand identity.
              </p>

              <div className="space-y-3">
                {styles.map((s) => {
                  const isSelected = style === s.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setStyle(s.id)}
                      className={`w-full p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
                        isSelected
                          ? 'border-cyan-400 bg-cyan-500/10 text-white ring-1 ring-cyan-400/50'
                          : 'border-white/5 bg-white/5 text-slate-400 hover:border-white/15 hover:text-white'
                      }`}
                    >
                      <div>
                        <div className="text-sm font-semibold text-white font-display">{s.id}</div>
                        <div className="text-xs text-slate-400 mt-0.5">{s.desc}</div>
                      </div>
                      {isSelected && <Check className="w-4 h-4 text-cyan-400 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3: Choose Your Colors */}
          {step === 3 && (
            <div>
              <h3 className="text-2xl font-bold font-display text-white mb-2">Choose Your Colors</h3>
              <p className="text-xs text-slate-400 mb-6">
                Curated chromatic harmonies calibrated for atmospheric depth and readable contrast.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {palettes.map((p) => {
                  const isSelected = accentColor === p.hex;
                  return (
                    <button
                      key={p.name}
                      onClick={() => {
                        setAccentColor(p.hex);
                        setTheme(p.theme);
                      }}
                      className={`p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
                        isSelected
                          ? 'border-cyan-400 bg-cyan-500/10 text-white ring-1 ring-cyan-400/50'
                          : 'border-white/5 bg-white/5 text-slate-400 hover:border-white/15 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-7 h-7 rounded-full shrink-0 border border-white/20 shadow"
                          style={{ backgroundColor: p.hex }}
                        />
                        <div>
                          <div className="text-xs font-semibold text-white">{p.name}</div>
                          <div className="text-[10px] font-mono text-slate-400">{p.hex}</div>
                        </div>
                      </div>
                      {isSelected && <Check className="w-4 h-4 text-cyan-400 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 4: Choose Your Typography */}
          {step === 4 && (
            <div>
              <h3 className="text-2xl font-bold font-display text-white mb-2">Choose Your Typography</h3>
              <p className="text-xs text-slate-400 mb-6">
                Pairings crafted for clear typographic hierarchy, avoiding lazy font defaults.
              </p>

              <div className="space-y-3">
                {fontPairs.map((f) => {
                  const isSelected = typography === f.id;
                  return (
                    <button
                      key={f.id}
                      onClick={() => setTypography(f.id)}
                      className={`w-full p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
                        isSelected
                          ? 'border-cyan-400 bg-cyan-500/10 text-white ring-1 ring-cyan-400/50'
                          : 'border-white/5 bg-white/5 text-slate-400 hover:border-white/15 hover:text-white'
                      }`}
                    >
                      <div>
                        <div className="text-sm font-semibold text-white">{f.name}</div>
                        <div className="text-xs text-slate-400 mt-0.5">{f.pair}</div>
                      </div>
                      {isSelected && <Check className="w-4 h-4 text-cyan-400 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 5: Choose Your Layout */}
          {step === 5 && (
            <div>
              <h3 className="text-2xl font-bold font-display text-white mb-2">Choose Your Layout</h3>
              <p className="text-xs text-slate-400 mb-6">
                Structure the rhythm and spacing of your homepage hero and featured sections.
              </p>

              <div className="space-y-3">
                {layouts.map((l) => {
                  const isSelected = layout === l.id;
                  return (
                    <button
                      key={l.id}
                      onClick={() => setLayout(l.id)}
                      className={`w-full p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
                        isSelected
                          ? 'border-cyan-400 bg-cyan-500/10 text-white ring-1 ring-cyan-400/50'
                          : 'border-white/5 bg-white/5 text-slate-400 hover:border-white/15 hover:text-white'
                      }`}
                    >
                      <div>
                        <div className="text-sm font-semibold text-white font-display">{l.name}</div>
                        <div className="text-xs text-slate-400 mt-0.5">{l.desc}</div>
                      </div>
                      {isSelected && <Check className="w-4 h-4 text-cyan-400 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 6: Your Website Is Ready */}
          {step === 6 && (
            <div className="text-center py-4">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mx-auto mb-4 animate-bounce-slow">
                <Sparkles className="w-7 h-7" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-2">
                Your Design Brief Is Ready
              </h3>
              <p className="text-sm text-cyan-300 font-medium mb-6">
                “We will handcraft and engineer this bespoke digital experience for you.”
              </p>

              {/* Specification Summary Card */}
              <div className="bg-[#121524] rounded-xl border border-white/10 p-5 text-left mb-6 space-y-2 text-xs">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400">Project:</span>
                  <span className="font-semibold text-white">{projectName || `${category} Experience`}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400">Category:</span>
                  <span className="text-white">{category}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400">Visual Style:</span>
                  <span className="text-white">{style}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400">Accent Harmony:</span>
                  <span className="font-mono" style={{ color: accentColor }}>{accentColor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Spatial Layout:</span>
                  <span className="capitalize text-white">{layout}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Wizard Footer Controls */}
        <div className="pt-6 border-t border-white/10 flex items-center justify-between mt-6">
          {step > 1 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="px-4 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {step < 6 ? (
            <button
              onClick={() => setStep(step + 1)}
              className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-white text-slate-950 hover:bg-slate-100 flex items-center gap-2 transition-all shadow-md cursor-pointer"
            >
              <span>Continue</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              onClick={handleFinish}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-semibold bg-cyan-400 text-slate-950 hover:bg-cyan-300 flex items-center justify-center gap-2 transition-all shadow-xl shadow-cyan-500/20 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-950" />
              <span>Submit Design Brief</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
