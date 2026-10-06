import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ArrowRight, Check, Send } from 'lucide-react';

export const Footer: React.FC = () => {
  const { showToast, openWizard } = useApp();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please provide a valid email address.', 'warning');
      return;
    }
    setSubscribed(true);
    showToast('Subscribed to NOVA Journal & Design Drops!', 'success');
    setEmail('');
  };

  return (
    <footer className="bg-[#05060a] border-t border-white/10 pt-20 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          {/* Brand Col */}
          <div className="md:col-span-5">
            <a href="#" className="text-2xl font-bold font-display uppercase tracking-tight text-white mb-3 inline-block">
              NOVA
            </a>
            <p className="text-sm text-slate-300 font-light max-w-sm mb-6">
              “Digital experiences designed around you.”
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm mb-6">
              A bespoke creative studio partnering with ambitious brands to transform ordinary websites into category-defining digital monuments.
            </p>

            <button
              onClick={openWizard}
              className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-white text-slate-950 hover:bg-slate-100 transition-colors flex items-center gap-2"
            >
              <span>Initiate Client Discovery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Links Col 1: Ecosystem */}
          <div className="md:col-span-2">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-200 mb-4 font-semibold">
              Selected Work & Labs
            </div>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#showcase" className="hover:text-white transition-colors">
                  Selected Showcases
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-white transition-colors">
                  Domain Practices
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-white transition-colors">
                  Bespoke Philosophy
                </a>
              </li>
              <li>
                <a href="#specs" className="hover:text-white transition-colors">
                  Engineering Specifications
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  Interactive Canvas Demo
                </a>
              </li>
            </ul>
          </div>

          {/* Links Col 2: Studio */}
          <div className="md:col-span-2">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-200 mb-4 font-semibold">
              Studio & Agency
            </div>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Engineering Process
                </a>
              </li>
              <li>
                <a href="#showcase" className="hover:text-white transition-colors">
                  Client Monograph
                </a>
              </li>
              <li>
                <span className="cursor-pointer hover:text-white transition-colors" onClick={() => showToast('Inquiries: commissions@nova-studio.design', 'info')}>
                  Private Inquiries
                </span>
              </li>
              <li>
                <span className="cursor-pointer hover:text-white transition-colors" onClick={() => showToast('Terms: Strict NDA & Full Intellectual Property Transfer', 'info')}>
                  Terms of Practice
                </span>
              </li>
              <li>
                <span className="cursor-pointer hover:text-white transition-colors" onClick={() => showToast('Privacy: Zero 3rd party trackers, pure edge privacy', 'info')}>
                  Privacy Standard
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup Col */}
          <div className="md:col-span-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-200 mb-4 font-semibold">
              NOVA Journal
            </div>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed font-light">
              Bi-weekly essays on spatial design, typography hierarchy, and web performance engineering.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 shrink-0" />
                <span>You are subscribed to the journal.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="partner@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 pr-10"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 p-1.5 rounded-md bg-white text-slate-950 hover:bg-slate-100 transition-colors"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="text-[10px] text-slate-500">Zero spam. Unsubscribe anytime with 1 click.</div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 NOVA Studio Inc. Handcrafted in Berlin, Paris & Tokyo.
          </div>

          {/* Socials */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => showToast('Visiting @novastudio on Instagram', 'info')}
              className="hover:text-white transition-colors"
            >
              Instagram
            </button>
            <button
              onClick={() => showToast('Visiting @novadesign on X', 'info')}
              className="hover:text-white transition-colors"
            >
              X
            </button>
            <button
              onClick={() => showToast('Visiting NOVA Studio on LinkedIn', 'info')}
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </button>
            <button
              onClick={() => showToast('Viewing NOVA open source modules on GitHub', 'info')}
              className="hover:text-white transition-colors"
            >
              GitHub
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
