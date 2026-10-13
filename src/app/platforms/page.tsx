import Link from "next/link";
import { Check, Monitor, Smartphone, Laptop, Zap, BarChart2, Bell, Lock, Globe } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trading Platforms",
  description: "Trade on any device — browser, mobile, or desktop. Professional charting, fast execution, and advanced order types.",
};

const PLATFORMS = [
  {
    id: "web",
    icon: Monitor,
    name: "Web Trader",
    tagline: "No download. Full power.",
    description:
      "Our browser-based platform delivers professional-grade trading directly in your browser. Access advanced charts, 50+ indicators, and one-click execution from any device with an internet connection.",
    features: [
      "50+ technical indicators",
      "One-click trading",
      "Real-time economic calendar",
      "Custom watchlists & alerts",
      "Multi-chart layouts",
      "Order management panel",
      "Risk management tools",
      "Integrated news feed",
    ],
    badge: "No Download Required",
    badgeColor: "badge-green",
    cta: "/portal/signup",
    ctaLabel: "Start Trading",
  },
  {
    id: "mobile",
    icon: Smartphone,
    name: "Mobile App",
    tagline: "Trade anywhere, anytime.",
    description:
      "Our iOS and Android apps give you full trading capability in your pocket. Monitor markets, place orders, and manage your portfolio from anywhere in the world.",
    features: [
      "iOS & Android (free download)",
      "Biometric login (Touch/Face ID)",
      "Push price & margin alerts",
      "Full charting suite",
      "One-tap trade execution",
      "Deposit & withdrawal",
      "Live chat support",
      "Dark & light modes",
    ],
    badge: "iOS & Android",
    badgeColor: "badge-gold",
    cta: "#",
    ctaLabel: "Coming Soon",
  },
  {
    id: "desktop",
    icon: Laptop,
    name: "Desktop Platform",
    tagline: "Professional-grade trading.",
    description:
      "For serious traders who demand more: multi-monitor layouts, algorithmic trading via Expert Advisors, advanced order types, and direct API access.",
    features: [
      "Windows & macOS",
      "Multi-monitor support",
      "Expert Advisors (EA)",
      "Market depth (Level II)",
      "Advanced order types (OCO, etc.)",
      "REST API access",
      "Custom scripts & indicators",
      "Historical tick data download",
    ],
    badge: "Pro & VIP Accounts",
    badgeColor: "badge-gold",
    cta: "/portal/signup",
    ctaLabel: "Unlock Desktop",
  },
];

const SHARED_FEATURES = [
  { icon: Zap,      label: "Sub-10ms Execution",    desc: "Ultra-low latency order routing" },
  { icon: BarChart2,label: "Advanced Charting",      desc: "TradingView-powered charts" },
  { icon: Bell,     label: "Smart Alerts",           desc: "Price, news & margin notifications" },
  { icon: Lock,     label: "Bank-grade Security",    desc: "256-bit SSL & 2FA on all platforms" },
  { icon: Globe,    label: "Multi-language",         desc: "Available in 12+ languages" },
];

export default function PlatformsPage() {
  return (
    <>
      {/* Header */}
      <section className="hero-bg grid-pattern pt-24 pb-20">
        <div className="section-container text-center max-w-2xl">
          <div className="badge-gold inline-flex mb-4">Trading Platforms</div>
          <h1 className="section-heading text-cream mb-4">Trade Your Way</h1>
          <p className="section-sub text-navy-200 mx-auto">
            One account. Three powerful platforms. Trade from browser, mobile, or desktop — your positions sync seamlessly across all devices.
          </p>
        </div>
      </section>

      {/* Shared features bar */}
      <section className="bg-navy-900 dark:bg-[#060D19] border-b border-white/5 py-6">
        <div className="section-container">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {SHARED_FEATURES.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-9 h-9 flex-shrink-0 rounded-lg bg-gold/10 flex items-center justify-center">
                  <Icon size={16} className="text-gold" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-cream">{label}</div>
                  <div className="text-xs text-navy-400">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform cards */}
      <section className="py-24 bg-cream dark:bg-navy">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8">
            {PLATFORMS.map(({ id, icon: Icon, name, tagline, description, features, badge, badgeColor, cta, ctaLabel }) => (
              <div key={id} className="card p-8 flex flex-col hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-5">
                  <Icon size={26} className="text-gold" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="font-display text-2xl font-semibold text-navy dark:text-cream">{name}</h2>
                </div>
                <p className="text-sm font-semibold text-gold mb-3">{tagline}</p>
                <p className="text-sm text-navy-400 dark:text-navy-300 leading-relaxed mb-6">{description}</p>
                <ul className="space-y-2 mb-8 flex-1">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-navy dark:text-cream">
                      <Check size={14} className="text-gold flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="space-y-3">
                  <span className={`${badgeColor} text-xs`}>{badge}</span>
                  <Link href={cta} className="btn-gold btn-md block text-center w-full">
                    {ctaLabel}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-16 bg-navy-900 dark:bg-[#060D19]">
        <div className="section-container text-center max-w-xl">
          <h2 className="font-display text-3xl font-semibold text-cream mb-4">Not sure which platform to choose?</h2>
          <p className="text-navy-300 mb-8">Open a free demo account and try all three platforms — no commitment required.</p>
          <Link href="/portal/demo" className="btn-gold btn-lg">Try Demo Free</Link>
        </div>
      </section>
    </>
  );
}
