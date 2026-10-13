import Link from "next/link";
import { MarketTicker } from "@/components/ui/MarketTicker";
import { STATS, WHY_GODREX, ACCOUNT_TYPES } from "@/lib/constants";
import {
  Zap, Shield, TrendingDown, Headphones,
  ArrowRight, ChevronRight, Star, Check, Plus, Minus
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trade with Confidence. Grow with Purpose.",
  description:
    "Godrex Capital — premium online brokerage with tight spreads, ultra-fast execution, and segregated client funds. Trade Forex, Stocks, Indices, Commodities & Crypto.",
};

/* ─── Icon map ────────────────────────────────────────────────────────────── */
const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  zap:          Zap,
  shield:       Shield,
  "trending-down": TrendingDown,
  headphones:   Headphones,
};

/* ─── Testimonials ────────────────────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    name: "Sarah M.",
    role: "Forex Trader, 4 years",
    rating: 5,
    text: "Execution is genuinely lightning-fast. I've traded with five brokers and Godrex is the tightest on spreads for EUR/USD.",
  },
  {
    name: "James K.",
    role: "Equity Investor, 2 years",
    rating: 5,
    text: "The platform is clean and intuitive. Deposits and withdrawals have always been processed same day for me.",
  },
  {
    name: "Liu W.",
    role: "Crypto & Commodity Trader",
    rating: 5,
    text: "I love the multi-asset coverage. Gold, BTC, equities — all in one place with competitive commissions.",
  },
];

/* ─── FAQ items ───────────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: "What is the minimum deposit to open an account?",
    a: "Our Standard account requires a minimum deposit of just $100. Pro accounts start at $2,500 and VIP at $25,000.",
  },
  {
    q: "How quickly are withdrawals processed?",
    a: "Withdrawal requests are typically processed within 1 business day. Bank wire transfers may take an additional 2–3 banking days.",
  },
  {
    q: "Is my money safe with Godrex Capital?",
    a: "Client funds are held in segregated accounts at top-tier banks, completely separate from company operational funds. We also employ 256-bit SSL encryption and 2FA.",
  },
  {
    q: "What trading platforms do you support?",
    a: "We offer a proprietary web trader, mobile apps for iOS and Android, and desktop platforms. MetaTrader 4/5 connectivity is available for Pro and VIP accounts.",
  },
  {
    q: "What leverage is available?",
    a: "Leverage depends on your account type and instrument. Standard accounts offer up to 1:30, Pro up to 1:100, and VIP up to 1:200. Professional client classification may offer different limits.",
  },
  {
    q: "Do you accept US clients?",
    a: "Currently, Godrex Capital does not accept clients from the United States due to regulatory requirements. Please check our list of restricted jurisdictions for full details.",
  },
];

/* ─── Platform features ──────────────────────────────────────────────────── */
const PLATFORMS = [
  {
    name: "Web Trader",
    desc: "Trade directly in your browser — no download needed. Advanced charting, one-click execution, and full portfolio management.",
    features: ["50+ technical indicators", "One-click trading", "Real-time news feed", "Custom watchlists"],
    badge: "No Download",
    href: "/platforms",
  },
  {
    name: "Mobile App",
    desc: "Full trading power in your pocket. Available for iOS and Android with biometric login and push alerts.",
    features: ["iOS & Android", "Biometric login", "Push price alerts", "Touch ID / Face ID"],
    badge: "iOS & Android",
    href: "/platforms",
  },
  {
    name: "Desktop Platform",
    desc: "Professional-grade desktop application with advanced order types, multi-monitor support, and algorithmic trading.",
    features: ["Expert Advisors (EA)", "Multi-monitor", "Advanced orders", "API access"],
    badge: "Pro & VIP",
    href: "/platforms",
  },
];

/* ─── Page Component ─────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="hero-bg grid-pattern min-h-screen flex flex-col">
        {/* Ticker sits right at top of page body under the fixed navbar */}
        <div className="pt-[72px]">
          <MarketTicker />
        </div>

        <div className="flex-1 flex items-center">
          <div className="section-container py-20 lg:py-32">
            <div className="max-w-3xl animate-fade-up">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 badge-gold mb-6 px-4 py-1.5 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-slow" />
                Markets are open · Live execution available
              </div>

              {/* Headline */}
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-cream leading-tight mb-6">
                Trade with{" "}
                <span className="text-gradient-gold">Confidence.</span>
                <br />
                Grow with{" "}
                <span className="text-gradient-gold">Purpose.</span>
              </h1>

              {/* Sub */}
              <p className="text-lg md:text-xl text-navy-200 max-w-2xl leading-relaxed mb-10">
                Access 500+ instruments across Forex, Stocks, Indices, Commodities, and Crypto —
                with spreads from 0.0 pips, sub-10ms execution, and bank-grade security.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4 mb-14">
                <Link href="/portal/signup" className="btn-gold btn-xl shadow-glow">
                  Open Account — Free
                  <ArrowRight size={20} />
                </Link>
                <Link href="/portal/demo" className="btn-outline btn-xl">
                  Try Demo Account
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-6 text-sm text-navy-300">
                {["Segregated Funds", "Regulated Entity", "HTTPS / 2FA", "24/5 Support"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <Check size={14} className="text-gold" /> {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center pb-8 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-gold/30 flex justify-center pt-2">
            <div className="w-1 h-3 rounded-full bg-gold/60" />
          </div>
        </div>
      </section>

      {/* ── Stats Bar ───────────────────────────────────────────────────── */}
      <section className="bg-navy-800 dark:bg-navy-900 border-y border-white/5 py-10">
        <div className="section-container">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {STATS.map(({ value, label }) => (
              <div key={label} className="group">
                <div className="font-display text-2xl md:text-3xl font-semibold text-gradient-gold mb-1">
                  {value}
                </div>
                <div className="text-xs font-medium text-navy-300 uppercase tracking-wider">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Godrex ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-cream dark:bg-navy">
        <div className="section-container">
          <div className="text-center mb-16">
            <div className="badge-gold inline-flex mb-4">Why Godrex Capital</div>
            <h2 className="section-heading text-navy dark:text-cream mb-4">
              Built for Serious Traders
            </h2>
            <p className="section-sub text-center mx-auto">
              Every feature is designed around one goal — giving you the best possible trading experience.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_GODREX.map(({ icon, title, description }) => {
              const Icon = ICON_MAP[icon] ?? Zap;
              return (
                <div
                  key={title}
                  className="group card p-8 hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 dark:bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                    <Icon size={22} className="text-gold" />
                  </div>
                  <h3 className="font-sans text-base font-semibold text-navy dark:text-cream mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-navy-400 dark:text-navy-300 leading-relaxed">
                    {description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Platform Preview ────────────────────────────────────────────── */}
      <section className="py-24 bg-navy-900 dark:bg-[#060D19]">
        <div className="section-container">
          <div className="text-center mb-16">
            <div className="badge-gold inline-flex mb-4">Trading Platforms</div>
            <h2 className="section-heading text-cream mb-4">
              Trade Your Way
            </h2>
            <p className="section-sub text-navy-200 text-center mx-auto">
              Whether you prefer browser, mobile, or desktop — we have a platform built for you.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PLATFORMS.map((p) => (
              <div key={p.name} className="glass rounded-2xl p-8 hover:border-gold/30 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display text-xl font-semibold text-cream">{p.name}</h3>
                  <span className="badge-gold text-xs">{p.badge}</span>
                </div>
                <p className="text-sm text-navy-200 leading-relaxed mb-6">{p.desc}</p>
                <ul className="space-y-2 mb-6">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-navy-200">
                      <Check size={14} className="text-gold flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={p.href}
                  className="flex items-center gap-1 text-sm font-semibold text-gold hover:text-gold-300 transition-colors"
                >
                  Learn more <ChevronRight size={14} />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/platforms" className="btn-gold btn-lg">
              View All Platforms <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Account Types ────────────────────────────────────────────────── */}
      <section className="py-24 bg-cream dark:bg-navy">
        <div className="section-container">
          <div className="text-center mb-16">
            <div className="badge-gold inline-flex mb-4">Account Types</div>
            <h2 className="section-heading text-navy dark:text-cream mb-4">
              Choose Your Account
            </h2>
            <p className="section-sub text-center mx-auto">
              Whether you&apos;re just starting out or a seasoned professional, we have an account tailored to your needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {ACCOUNT_TYPES.map((acc) => (
              <div
                key={acc.name}
                className={`card p-8 flex flex-col relative transition-all duration-300 hover:-translate-y-1 ${
                  acc.popular ? "border-gold shadow-glow" : ""
                }`}
              >
                {acc.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="badge-gold px-4 py-1 text-xs">Most Popular</span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="font-display text-2xl font-semibold text-navy dark:text-cream mb-1">{acc.name}</h3>
                  <div className="text-3xl font-bold text-gradient-gold">{acc.minDeposit}</div>
                  <div className="text-xs text-navy-400 dark:text-navy-300">minimum deposit</div>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {[
                    ["Spread", acc.spread],
                    ["Leverage", acc.leverage],
                    ["Commission", acc.commission],
                    ["Support", acc.support],
                  ].map(([k, v]) => (
                    <li key={k} className="flex items-center justify-between text-sm">
                      <span className="text-navy-400 dark:text-navy-300">{k}</span>
                      <span className="font-medium text-navy dark:text-cream">{v}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/portal/signup"
                  className={acc.popular ? "btn-gold btn-md text-center" : "btn-outline btn-md text-center"}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/account-types" className="text-sm text-gold hover:underline flex items-center gap-1 justify-center">
              Compare all features <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ────────────────────────────────────────────────── */}
      <section className="py-24 bg-navy-800 dark:bg-navy-900">
        <div className="section-container">
          <div className="text-center mb-16">
            <div className="badge-gold inline-flex mb-4">Client Stories</div>
            <h2 className="section-heading text-cream mb-4">What Traders Say</h2>
            <p className="text-sm text-navy-400 italic">
              * Testimonials are from verified clients. Individual results may vary. Trading involves risk.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({ name, role, rating, text }) => (
              <div key={name} className="glass rounded-2xl p-8">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} size={14} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-sm text-navy-200 leading-relaxed mb-6 italic">&ldquo;{text}&rdquo;</p>
                <div>
                  <div className="font-semibold text-cream text-sm">{name}</div>
                  <div className="text-xs text-navy-400">{role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-cream dark:bg-navy">
        <div className="section-container max-w-3xl">
          <div className="text-center mb-16">
            <div className="badge-gold inline-flex mb-4">FAQ</div>
            <h2 className="section-heading text-navy dark:text-cream mb-4">
              Common Questions
            </h2>
          </div>
          <div className="space-y-3">
            {FAQS.map(({ q, a }) => (
              <details
                key={q}
                className="faq-item card group overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer text-navy dark:text-cream font-medium text-sm hover:text-gold dark:hover:text-gold transition-colors select-none">
                  {q}
                  <Plus size={16} className="flex-shrink-0 group-open:hidden text-gold" />
                  <Minus size={16} className="flex-shrink-0 hidden group-open:block text-gold" />
                </summary>
                <div className="px-6 pb-6 text-sm text-navy-400 dark:text-navy-300 leading-relaxed border-t border-border pt-4">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer CTA ──────────────────────────────────────────────────── */}
      <section className="py-24 hero-bg grid-pattern">
        <div className="section-container text-center max-w-2xl">
          <h2 className="section-heading text-cream mb-6">
            Ready to Start Trading?
          </h2>
          <p className="text-lg text-navy-200 mb-10">
            Join 150,000+ traders. Open a live account in minutes or practice risk-free with a demo.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/portal/signup" className="btn-gold btn-xl shadow-glow">
              Open Live Account <ArrowRight size={20} />
            </Link>
            <Link href="/portal/demo" className="btn-outline btn-xl">
              Open Demo Account
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
