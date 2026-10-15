import type { Metadata } from "next";
import Link from "next/link";
import { Users, ArrowLeft, ShieldCheck, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "AML & KYC Policy",
  description: "Anti-Money Laundering and Know Your Customer policies and verification frameworks at Godrex Capital.",
};

export default function AmlKycPolicyPage() {
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
          <div className="badge-gold inline-flex mb-4">Financial Compliance</div>
          <h1 className="section-heading text-cream mb-4">Anti-Money Laundering & KYC Policy</h1>
          <p className="text-navy-200 text-sm">
            Last Updated: October 2026 | Financial Action Task Force (FATF) Standards
          </p>
        </div>
      </section>

      <section className="py-16 bg-cream dark:bg-navy">
        <div className="section-container max-w-4xl space-y-10 text-navy-600 dark:text-navy-200 text-sm leading-relaxed">
          <div className="card p-6 bg-navy/5 dark:bg-navy-mid/60 border border-gold/20">
            <h2 className="font-semibold text-navy dark:text-cream text-base mb-2 flex items-center gap-2">
              <ShieldCheck size={18} className="text-gold" /> Zero Tolerance for Illicit Financial Activity
            </h2>
            <p>
              Godrex Capital maintains strict adherence to international Anti-Money Laundering (AML) standards, Counter-Terrorist Financing (CTF) directives, and Know Your Customer (KYC) requirements established by the Financial Action Task Force (FATF).
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold text-navy dark:text-cream">1. Customer Identification Procedure (CIP)</h2>
            <p>
              Prior to opening live accounts or enabling deposit channels, every client is subjected to identity verification:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Proof of Identity (POI):</strong> Unexpired passport, national identity card, or driving license displaying photo, birth date, and legal name.</li>
              <li><strong>Proof of Address (POA):</strong> Recent utility bill, municipality tax statement, or bank statement dated within the prior 90 days.</li>
              <li><strong>Biometric Liveness Check:</strong> Facial verification to eliminate identity theft, impersonation, or synthetic profiles.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold text-navy dark:text-cream">2. Sanctions Screening & Politically Exposed Persons (PEPs)</h2>
            <p>
              All customer names and beneficial owners are systematically matched against global sanctions lists (OFAC, UN, EU, UK HMT) and databases of Politically Exposed Persons. Any confirmed sanctions match results in immediate rejection or freezing of assets in compliance with international mandates.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold text-navy dark:text-cream">3. Funding Source & Transaction Monitoring</h2>
            <p>
              All deposits and withdrawal transactions are subjected to algorithmic and manual compliance oversight:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Strict ban on third-party deposits and withdrawals. Payment accounts must bear the exact name as registered on the trading profile.</li>
              <li>Deposits originating from anonymous payment channels, mixing services, or high-risk crypto nodes are prohibited and rejected.</li>
              <li>Suspicious patterns including rapid cyclic funding, high-frequency non-trading deposits and withdrawals, or structured transactions below reporting thresholds trigger internal Suspicious Activity Reports (SAR).</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold text-navy dark:text-cream">4. Reporting Obligations</h2>
            <p>
              Godrex Capital is bound by international financial intelligence frameworks to file Suspicious Activity Reports (SAR) with relevant financial intelligence units (FIUs) without notifying or tipping off the customer involved.
            </p>
          </div>

          <div className="pt-6 border-t border-navy-100 dark:border-navy-700/50 flex flex-col sm:flex-row gap-4 justify-between items-center text-xs text-navy-400">
            <span>Direct compliance inquiries: <a href="mailto:compliance@godrexcapital.com" className="text-gold underline">compliance@godrexcapital.com</a></span>
            <Link href="/portal/signup" className="text-gold hover:underline">
              Begin KYC Account Registration &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
