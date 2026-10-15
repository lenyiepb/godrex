import { Shield, Lock, Users, Award, AlertTriangle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Godrex Capital",
  description: "Learn about Godrex Capital — our story, mission, leadership team, regulatory framework, and security practices.",
};

const LEADERSHIP = [
  {
    name: "[Founder & CEO — Placeholder]",
    role: "Chief Executive Officer",
    bio: "20+ years in financial markets and fintech. Former managing director at a tier-1 investment bank. [Replace with verified bio before launch].",
    initials: "CEO",
  },
  {
    name: "[CTO — Placeholder]",
    role: "Chief Technology Officer",
    bio: "15+ years building high-frequency trading systems and financial infrastructure. [Replace with verified bio before launch].",
    initials: "CTO",
  },
  {
    name: "[CCO — Placeholder]",
    role: "Chief Compliance Officer",
    bio: "Former regulatory consultant with expertise in FCA and CySEC compliance frameworks. [Replace with verified bio before launch].",
    initials: "CCO",
  },
  {
    name: "[CFO — Placeholder]",
    role: "Chief Financial Officer",
    bio: "15+ years in financial management and reporting across regulated financial services firms. [Replace with verified bio before launch].",
    initials: "CFO",
  },
];

const SECURITY = [
  {
    icon: Lock,
    title: "256-bit SSL Encryption",
    desc: "All data transmitted between your browser and our servers is encrypted using industry-standard TLS 1.3.",
  },
  {
    icon: Shield,
    title: "Segregated Client Funds",
    desc: "Client funds are held in segregated accounts at top-tier banks, completely separate from our operational capital.",
  },
  {
    icon: Users,
    title: "Two-Factor Authentication",
    desc: "We require 2FA (TOTP or SMS) on all accounts and provide session management with automatic timeout.",
  },
  {
    icon: Award,
    title: "Regular Audits",
    desc: "Our financials and security practices are subject to independent external audits and regulatory inspections.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="hero-bg grid-pattern pt-24 pb-20">
        <div className="section-container text-center max-w-2xl">
          <div className="badge-gold inline-flex mb-4">About Us</div>
          <h1 className="section-heading text-cream mb-4">Built by Traders, for Traders</h1>
          <p className="section-sub text-navy-200 mx-auto">
            Godrex Capital was founded with a single vision: to make professional-grade trading technology accessible to everyone.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-cream dark:bg-navy">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="badge-gold inline-flex mb-4">Our Story</div>
              <h2 className="section-heading text-navy dark:text-cream mb-6">A Different Kind of Broker</h2>
              <div className="space-y-4 text-navy-400 dark:text-navy-300 leading-relaxed">
                <p>
                  Godrex Capital was born out of frustration. Our founders spent years trading with major brokers and consistently encountered the same problems: opaque fee structures, unreliable execution, and support teams that didn&apos;t understand trading.
                </p>
                <p>
                  We set out to build something better — a brokerage that treats clients as partners, not revenue lines. That means transparent pricing, genuine customer support, and technology that actually works when markets move fast.
                </p>
                <p>
                  Today, we serve over 150,000 traders across 50+ countries, offering access to 500+ instruments with the tools and conditions that serious traders demand.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "2026", label: "Founded" },
                { value: "50+", label: "Countries served" },
                { value: "150k+", label: "Active clients" },
                { value: "$2.4B+", label: "Daily volume" },
              ].map(({ value, label }) => (
                <div key={label} className="card p-6 text-center">
                  <div className="font-display text-3xl font-semibold text-gradient-gold mb-1">{value}</div>
                  <div className="text-xs text-navy-400 dark:text-navy-300 uppercase tracking-wider">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-navy-900 dark:bg-[#060D19]">
        <div className="section-container text-center max-w-3xl">
          <div className="badge-gold inline-flex mb-4">Mission</div>
          <h2 className="section-heading text-cream mb-6">Our Mission</h2>
          <p className="text-lg text-navy-200 leading-relaxed italic">
            &ldquo;To democratise access to global financial markets by providing institutional-quality trading infrastructure, complete pricing transparency, and genuine client-first service to retail traders worldwide.&rdquo;
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-20 bg-cream dark:bg-navy">
        <div className="section-container">
          <div className="text-center mb-12">
            <div className="badge-gold inline-flex mb-4">Leadership</div>
            <h2 className="section-heading text-navy dark:text-cream">Meet the Team</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP.map(({ name, role, bio, initials }) => (
              <div key={initials} className="card p-6 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center mb-4">
                  <span className="font-display font-bold text-navy-900 text-xl">{initials}</span>
                </div>
                <div className="font-semibold text-navy dark:text-cream text-sm mb-0.5">{name}</div>
                <div className="text-xs text-gold mb-3">{role}</div>
                <p className="text-xs text-navy-400 dark:text-navy-300 leading-relaxed">{bio}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-navy-400 mt-6 italic">
            * Leadership profiles are placeholders. Replace with verified biographical information before publishing.
          </p>
        </div>
      </section>

      {/* Regulatory */}
      <section className="py-20 bg-navy-800 dark:bg-navy-900">
        <div className="section-container max-w-3xl">
          <div className="text-center mb-12">
            <div className="badge-gold inline-flex mb-4">Regulatory</div>
            <h2 className="section-heading text-cream">Licensing & Regulation</h2>
          </div>
          <div className="glass rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <AlertTriangle size={20} className="text-amber-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-200">
                <strong>Important Notice:</strong> The regulatory information below is a placeholder.
                A real brokerage must obtain a valid license (e.g. FCA, CySEC, ASIC) or operate as an
                introducing broker under a licensed entity. Consult a qualified securities attorney in your
                target jurisdiction before operating. Do not publish without verified license details.
              </p>
            </div>
            <div className="space-y-4 text-sm text-navy-200">
              {[
                ["Legal Entity", "Godrex Capital Ltd"],
                ["Registration No.", "[PLACEHOLDER — insert company registration number]"],
                ["Regulator", "[PLACEHOLDER — e.g. FCA / CySEC / ASIC / FINRA]"],
                ["License Number", "[PLACEHOLDER — insert verified license number]"],
                ["Registered Address", "10 Finsbury Square, London, EC2A 1AF, United Kingdom"],
                ["Client Funds", "Segregated accounts at [PLACEHOLDER — tier-1 bank name]"],
                ["Compensation Scheme", "[PLACEHOLDER — e.g. FSCS up to £85,000]"],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-4 border-b border-white/5 pb-3 last:border-0 last:pb-0">
                  <span className="text-navy-400 w-40 flex-shrink-0">{k}</span>
                  <span>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-20 bg-cream dark:bg-navy">
        <div className="section-container">
          <div className="text-center mb-12">
            <div className="badge-gold inline-flex mb-4">Security</div>
            <h2 className="section-heading text-navy dark:text-cream">Your Security is Our Priority</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SECURITY.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card p-6">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-gold" />
                </div>
                <h3 className="font-semibold text-navy dark:text-cream text-sm mb-2">{title}</h3>
                <p className="text-xs text-navy-400 dark:text-navy-300 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
