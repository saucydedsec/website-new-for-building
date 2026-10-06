import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Component as SignInCard2 } from '@/components/ui/sign-in-card-2';
import { X, Lock, Mail, User, Eye, EyeOff, Check, AlertCircle, Sparkles, ArrowRight } from 'lucide-react';

export const AuthModal: React.FC = () => {
  const { isAuthModalOpen, closeAuthModal, authModalTab, login, showToast } = useApp();

  const [isLogin, setIsLogin] = useState(authModalTab === 'login');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);
  const [resetEmailSent, setResetEmailSent] = useState(false);

  // Sign up Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isAuthModalOpen) return null;

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email || !email.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }

    if (!password || password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    if (!name.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (!termsAccepted) {
      setError('Please agree to the Terms & Conditions.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      login(name, email);
    }, 900);
  };

  const handleQuickDemoLogin = () => {
    login('Alex Chen', 'alex.chen@studio.design');
    showToast('Logged in as Alex Chen (Creative Partner)', 'success');
  };

  // If in Login mode, show the 3D sign-in card with traveling light beams and interactive physics
  if (isLogin && !forgotPasswordOpen) {
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <SignInCard2
          onLoginSuccess={(userEmail) => {
            login(userEmail.split('@')[0] || 'Studio Client', userEmail);
          }}
          onClose={closeAuthModal}
        />
        {/* Floating Quick Action Overlays for Studio Demo */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-[#0d0f1a]/90 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 shadow-2xl">
          <button
            onClick={handleQuickDemoLogin}
            className="text-xs font-medium text-cyan-300 hover:text-cyan-200 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>1-Click Test Login as Alex Chen</span>
          </button>
          <span className="text-white/20">·</span>
          <button
            onClick={() => setIsLogin(false)}
            className="text-xs text-white/70 hover:text-white transition-colors cursor-pointer"
          >
            Create New Account
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-2xl bg-[#0e111d] border border-white/10 shadow-2xl overflow-hidden p-8">
        {/* Close Button */}
        <button
          onClick={closeAuthModal}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {forgotPasswordOpen ? (
          <div>
            <h3 className="text-xl font-bold font-display text-white mb-2">Reset Password</h3>
            <p className="text-xs text-slate-400 mb-6 leading-relaxed">
              Enter your registered email address and we'll transmit a secure reset link.
            </p>

            {resetEmailSent ? (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center mb-6">
                <Check className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                <div className="text-xs font-semibold text-emerald-300">Reset Link Sent</div>
                <div className="text-[11px] text-slate-400 mt-1">Check your inbox for instructions.</div>
              </div>
            ) : (
              <div className="space-y-4 mb-6">
                <div>
                  <label className="text-xs text-slate-300 block mb-1.5 font-medium">Email Address</label>
                  <input
                    type="email"
                    placeholder="you@domain.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <button
                  onClick={() => setResetEmailSent(true)}
                  className="w-full py-2.5 rounded-lg text-xs font-semibold bg-white text-slate-950 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  Send Recovery Link
                </button>
              </div>
            )}

            <button
              onClick={() => {
                setForgotPasswordOpen(false);
                setResetEmailSent(false);
                setIsLogin(true);
              }}
              className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              ← Back to Sign In
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="text-center mb-6">
              <span className="text-xs font-bold font-display tracking-widest text-cyan-400 uppercase">
                NOVA STUDIO
              </span>
              <h3 className="text-2xl font-bold font-display text-white mt-1">Create Account</h3>
              <p className="text-xs text-slate-400 mt-1">
                Start collaborating with our human designers and engineers.
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSignUp} className="space-y-3.5">
              <div>
                <label className="text-xs text-slate-300 block mb-1 font-medium">Full Name</label>
                <div className="relative">
                  <User className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Alex Chen"
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-300 block mb-1 font-medium">Email Address</label>
                <div className="relative">
                  <Mail className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@studio.design"
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-300 block mb-1 font-medium">Password</label>
                <div className="relative">
                  <Lock className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-3" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-9 pr-10 py-2.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2.5 text-slate-500 hover:text-slate-300"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-300 block mb-1 font-medium">Confirm Password</label>
                <div className="relative">
                  <Lock className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-3" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div className="pt-1">
                <label className="flex items-center gap-2 text-slate-400 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    className="rounded border-white/20 bg-white/5 text-cyan-400 focus:ring-0"
                  />
                  <span className="text-[11px]">I agree to the Terms of Service & Privacy Policy</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 rounded-xl text-xs font-semibold bg-white text-slate-950 hover:bg-slate-100 transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer mt-4"
              >
                {loading ? (
                  <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                ) : (
                  <span>Create Account</span>
                )}
              </button>
            </form>

            <div className="mt-5 text-center text-xs text-slate-400">
              Already have an account?{' '}
              <button
                onClick={() => {
                  setIsLogin(true);
                  setError(null);
                }}
                className="text-white font-medium hover:underline ml-1 cursor-pointer"
              >
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
