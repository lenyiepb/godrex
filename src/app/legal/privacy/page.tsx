import type { Metadata } from "next";
import Link from "next/link";
import { Shield, ArrowLeft, Lock, FileCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Godrex Capital's policy on personal data protection, GDPR compliance, and client confidential information.",
};

export default function PrivacyPolicyPage() {
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
          <div className="badge-gold inline-flex mb-4">Data Privacy & Protection</div>
          <h1 className="section-heading text-cream mb-4">Privacy Policy</h1>
          <p className="text-navy-200 text-sm">
            Last Updated: October 2026 | General Data Protection Regulation (GDPR) Compliant
          </p>
        </div>
      </section>

      <section className="py-16 bg-cream dark:bg-navy">
        <div className="section-container max-w-4xl space-y-10 text-navy-600 dark:text-navy-200 text-sm leading-relaxed">
          <div className="card p-6 bg-navy/5 dark:bg-navy-mid/60 border border-gold/20">
            <h2 className="font-semibold text-navy dark:text-cream text-base mb-2 flex items-center gap-2">
              <Lock size={18} className="text-gold" /> Commitment to Client Data Confidentiality
            </h2>
            <p>
              At Godrex Capital, safeguarding personal and financial data is paramount. We adhere to rigorous data privacy frameworks, including the EU General Data Protection Regulation (GDPR), implementing industry-standard encryption, strict access controls, and zero-knowledge architectures where applicable.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold text-navy dark:text-cream">1. Information We Collect</h2>
            <p>
              To satisfy statutory anti-money laundering obligations and deliver institutional-grade brokerage operations, we collect:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Identification Data:</strong> Full legal name, date of birth, nationality, and government ID / passport copies.</li>
              <li><strong>Contact & Address Data:</strong> Residential address, email address, phone numbers, and utility bills for residency proof.</li>
              <li><strong>Financial Profile:</strong> Source of wealth, annual income, employment status, and trading experience assessments.</li>
              <li><strong>Technical & Telemetry Data:</strong> IP addresses, browser fingerprints, authentication timestamps, and session logs for fraud prevention.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold text-navy dark:text-cream">2. How Your Information Is Used</h2>
            <p>
              Personal data is processed exclusively for lawful, defined purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Facilitating account opening, identity verification, and anti-fraud screenings.</li>
              <li>Executing market transactions, margin settlement, and clearing services.</li>
              <li>Complying with statutory reporting requirements enforced by financial regulatory authorities.</li>
              <li>Providing mission-critical security notices, transaction confirmations, and 24/5 customer support.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold text-navy dark:text-cream">3. Data Sharing & Third Parties</h2>
            <p>
              Godrex Capital does <strong>never</strong> monetize or sell your personal details to third-party advertisers. Information is only shared with:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Regulated liquidity providers, clearing firms, and custodial banks strictly for trade execution.</li>
              <li>Verified third-party KYC/AML verification software providers operating under confidentiality agreements.</li>
              <li>Law enforcement or regulatory authorities when compelled by valid legal subpoenas or court orders.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold text-navy dark:text-cream">4. Security Measures & Retention</h2>
            <p>
              All sensitive customer credentials and documents are stored with AES-256 encryption at rest and protected with TLS 1.3 transport security in transit. Account data is retained for the mandatory statutory period (typically 5 to 7 years following account closure) in accordance with global financial preservation rules.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold text-navy dark:text-cream">5. Your Data Protection Rights (GDPR)</h2>
            <p>
              Subject to applicable legal constraints, you have the right to request access to your personal records, rectify inaccurate data, demand data portability, or request deletion of data not subject to statutory retention obligations.
            </p>
          </div>

          <div className="pt-6 border-t border-navy-100 dark:border-navy-700/50 flex flex-col sm:flex-row gap-4 justify-between items-center text-xs text-navy-400">
            <span>Data Protection Officer: <a href="mailto:dpo@godrexcapital.com" className="text-gold underline">dpo@godrexcapital.com</a></span>
            <Link href="/legal/cookies" className="text-gold hover:underline">
              Read Cookie Policy &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
