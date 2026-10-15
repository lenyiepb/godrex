import type { Metadata } from "next";
import Link from "next/link";
import { Cookie, ArrowLeft, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Explanation of cookies, trackers, and telemetry utilized by Godrex Capital platforms.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <section className="hero-bg grid-pattern pt-24 pb-16">
        <div className="section-container max-w-4xl">
          <Link
            href="/legal"
            className="inline-flex items-center gap-2 text-sm text-gold hover:text-gold-light transition-colors mb-6"
          >
            <ArrowLeft size={16} /> Back to Legal Documents
          </Link>
          <div className="badge-gold inline-flex mb-4">Cookie Compliance</div>
          <h1 className="section-heading text-cream mb-4">Cookie Policy</h1>
          <p className="text-navy-200 text-sm">
            Last Updated: October 2026 | Transparency & Consent
          </p>
        </div>
      </section>

      <section className="py-16 bg-cream dark:bg-navy">
        <div className="section-container max-w-4xl space-y-10 text-navy-600 dark:text-navy-200 text-sm leading-relaxed">
          <div className="card p-6 bg-navy/5 dark:bg-navy-mid/60 border border-gold/20">
            <h2 className="font-semibold text-navy dark:text-cream text-base mb-2 flex items-center gap-2">
              <Cookie size={18} className="text-gold" /> Why We Use Cookies
            </h2>
            <p>
              Godrex Capital utilizes cookies, session tokens, and local web storage to deliver reliable platform navigation, maintain secure authenticated sessions, monitor fraud vectors, and analyze site performance.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold text-navy dark:text-cream">1. Categories of Cookies We Deploy</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="card p-5 border border-navy-100 dark:border-navy-700">
                <h3 className="font-bold text-navy dark:text-cream mb-2 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-500" /> Strictly Necessary (Essential)
                </h3>
                <p className="text-xs text-navy-400">
                  Required for core platform functionality, security authentication tokens, cross-site request forgery (CSRF) protection, and regional compliance enforcement. These cannot be disabled.
                </p>
              </div>

              <div className="card p-5 border border-navy-100 dark:border-navy-700">
                <h3 className="font-bold text-navy dark:text-cream mb-2 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-gold" /> Preferences & Themes
                </h3>
                <p className="text-xs text-navy-400">
                  Stores user display choices such as dark/light mode preference, language settings, and market ticker customization to provide an optimized user experience.
                </p>
              </div>

              <div className="card p-5 border border-navy-100 dark:border-navy-700">
                <h3 className="font-bold text-navy dark:text-cream mb-2 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-blue-500" /> Analytics & Performance
                </h3>
                <p className="text-xs text-navy-400">
                  Collects aggregated, anonymized metrics on page load speeds, error rates, and navigational paths to assist in engineering resilience and interface improvements.
                </p>
              </div>

              <div className="card p-5 border border-navy-100 dark:border-navy-700">
                <h3 className="font-bold text-navy dark:text-cream mb-2 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-purple-500" /> Security & Fraud Prevention
                </h3>
                <p className="text-xs text-navy-400">
                  Monitors suspicious session takeovers, unusual IP changes, and credential stuffing attempts to shield client financial assets from unauthorized intrusion.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold text-navy dark:text-cream">2. Managing Cookie Preferences</h2>
            <p>
              You can adjust your cookie choices at any time through our interactive Cookie Consent banner or directly via your web browser settings. Please note that disabling essential cookies will disable access to the secure client portal and trading terminal.
            </p>
          </div>

          <div className="pt-6 border-t border-navy-100 dark:border-navy-700/50 flex flex-col sm:flex-row gap-4 justify-between items-center text-xs text-navy-400">
            <span>Manage preferences anytime in your browser settings.</span>
            <Link href="/legal/privacy" className="text-gold hover:underline">
              Read Privacy Policy &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
