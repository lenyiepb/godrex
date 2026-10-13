import Link from "next/link";
import { FileText, Shield, Eye, Cookie, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal",
  description: "Godrex Capital legal documents — Terms of Service, Privacy Policy, Risk Disclosure, Cookie Policy, and AML/KYC Policy.",
};

const DOCS = [
  {
    icon: FileText,
    title: "Terms of Service",
    desc: "The complete agreement governing your use of Godrex Capital services, trading conditions, account rules, and dispute resolution.",
    href: "/legal/terms",
    updated: "October 2026",
  },
  {
    icon: Eye,
    title: "Privacy Policy",
    desc: "How we collect, use, store, and protect your personal data in compliance with GDPR and applicable data protection laws.",
    href: "/legal/privacy",
    updated: "October 2026",
  },
  {
    icon: Shield,
    title: "Risk Disclosure",
    desc: "A full explanation of the risks involved in trading leveraged products including Forex CFDs, indices, commodities, and crypto.",
    href: "/legal/risk-disclosure",
    updated: "October 2026",
  },
  {
    icon: Cookie,
    title: "Cookie Policy",
    desc: "Details on the cookies we use, their purpose, and how to manage your preferences including essential and analytics cookies.",
    href: "/legal/cookies",
    updated: "October 2026",
  },
  {
    icon: Users,
    title: "AML / KYC Policy",
    desc: "Our Anti-Money Laundering and Know Your Customer procedures, including verification requirements and transaction monitoring.",
    href: "/legal/aml-kyc",
    updated: "October 2026",
  },
];

export default function LegalIndexPage() {
  return (
    <>
      <section className="hero-bg grid-pattern pt-24 pb-20">
        <div className="section-container text-center max-w-2xl">
          <div className="badge-gold inline-flex mb-4">Legal</div>
          <h1 className="section-heading text-cream mb-4">Legal Documents</h1>
          <p className="section-sub text-navy-200 mx-auto">
            All our policies and disclosures — clear, accessible, and up to date.
          </p>
        </div>
      </section>
      <section className="py-20 bg-cream dark:bg-navy">
        <div className="section-container max-w-4xl">
          <div className="space-y-4">
            {DOCS.map(({ icon: Icon, title, desc, href, updated }) => (
              <Link
                key={href}
                href={href}
                className="card p-6 flex items-start gap-5 hover:-translate-y-0.5 hover:shadow-glow transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                  <Icon size={18} className="text-gold" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h2 className="font-semibold text-navy dark:text-cream text-sm">{title}</h2>
                    <span className="text-xs text-navy-400">Updated: {updated}</span>
                  </div>
                  <p className="text-sm text-navy-400 dark:text-navy-300 leading-relaxed">{desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
