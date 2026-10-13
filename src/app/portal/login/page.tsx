"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Shield, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [totp, setTotp] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [step, setStep] = useState<"credentials" | "2fa">("credentials");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCredentials = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    // TODO: POST /api/auth/login → check credentials, return needs2FA flag
    await new Promise((r) => setTimeout(r, 800));
    // Simulate 2FA requirement
    setStep("2fa");
    setLoading(false);
  };

  const handle2FA = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    // TODO: POST /api/auth/verify-totp → verify TOTP code → session
    await new Promise((r) => setTimeout(r, 800));
    // Redirect to dashboard
    window.location.href = "/portal/dashboard";
  };

  return (
    <div className="min-h-screen hero-bg grid-pattern flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-9 h-9 rounded-lg bg-gradient-gold flex items-center justify-center">
              <span className="font-display font-bold text-navy-900 text-lg">G</span>
            </div>
            <span className="font-display font-semibold text-lg text-cream">Godrex Capital</span>
          </Link>
          <h1 className="font-display text-3xl font-semibold text-cream mb-2">
            {step === "credentials" ? "Welcome Back" : "Two-Factor Authentication"}
          </h1>
          <p className="text-navy-300 text-sm">
            {step === "credentials"
              ? <>Don&apos;t have an account?{" "}<Link href="/portal/signup" className="text-gold hover:underline">Open one free</Link></>
              : "Enter the 6-digit code from your authenticator app."
            }
          </p>
        </div>

        <div className="glass rounded-2xl p-8">
          {error && (
            <div className="bg-red-950/50 border border-red-800/50 rounded-xl p-3 mb-5 text-sm text-red-300 text-center">
              {error}
            </div>
          )}

          {step === "credentials" ? (
            <form onSubmit={handleCredentials} className="space-y-5">
              <div>
                <label htmlFor="login-email" className="block text-xs font-medium text-navy-300 mb-1.5">Email Address</label>
                <input
                  id="login-email"
                  type="email"
                  className="input"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <div className="flex justify-between mb-1.5">
                  <label htmlFor="login-pw" className="text-xs font-medium text-navy-300">Password</label>
                  <Link href="/portal/forgot-password" className="text-xs text-gold hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <input
                    id="login-pw"
                    type={showPw ? "text" : "password"}
                    className="input pr-10"
                    placeholder="Your password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-navy-400">
                    {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
              <button type="submit" disabled={loading} className="btn-gold btn-md w-full disabled:opacity-60">
                {loading ? "Signing in..." : <>Sign In <ArrowRight size={16} /></>}
              </button>
            </form>
          ) : (
            <form onSubmit={handle2FA} className="space-y-5">
              <div className="flex items-center gap-3 bg-blue-950/40 border border-blue-800/30 rounded-xl p-4 mb-2">
                <Shield size={16} className="text-blue-400 flex-shrink-0" />
                <p className="text-xs text-blue-200">
                  Your account is protected by two-factor authentication. Open your authenticator app to retrieve your code.
                </p>
              </div>
              <div>
                <label htmlFor="totp-code" className="block text-xs font-medium text-navy-300 mb-1.5">Authentication Code</label>
                <input
                  id="totp-code"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]{6}"
                  maxLength={6}
                  className="input text-center tracking-[0.5em] text-xl font-mono"
                  placeholder="000000"
                  autoComplete="one-time-code"
                  required
                  value={totp}
                  onChange={(e) => setTotp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                />
              </div>
              <button type="submit" disabled={loading || totp.length !== 6} className="btn-gold btn-md w-full disabled:opacity-60">
                {loading ? "Verifying..." : "Verify & Sign In"}
              </button>
              <button type="button" onClick={() => setStep("credentials")} className="btn-ghost btn-md w-full">
                ← Use different account
              </button>
            </form>
          )}

          <div className="mt-6 pt-5 border-t border-border text-center">
            <Link href="/portal/demo" className="text-sm text-gold hover:underline">
              Try a free demo account instead →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
