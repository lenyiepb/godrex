import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ArrowLeft, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions governing the use of Godrex Capital brokerage and trading services.",
};

export default function TermsOfServicePage() {
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
          <div className="badge-gold inline-flex mb-4">Legal Agreement</div>
          <h1 className="section-heading text-cream mb-4">Terms of Service</h1>
          <p className="text-navy-200 text-sm">
            Last Updated: October 2026 | Effective Date: October 1, 2026
          </p>
        </div>
      </section>

      <section className="py-16 bg-cream dark:bg-navy">
        <div className="section-container max-w-4xl space-y-10 text-navy-600 dark:text-navy-200 text-sm leading-relaxed">
          <div className="card p-6 bg-navy/5 dark:bg-navy-mid/60 border border-gold/20">
            <h2 className="font-semibold text-navy dark:text-cream text-base mb-2 flex items-center gap-2">
              <Shield size={18} className="text-gold" /> Notice of Binding Arbitration & Risk
            </h2>
            <p>
              Please read these Terms of Service carefully before opening an account or utilizing any services provided by Godrex Capital. By registering, accessing, or trading on our platforms, you agree to be bound by these terms, our Risk Disclosure, and all referenced policies.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold text-navy dark:text-cream">1. General Overview & Eligibility</h2>
            <p>
              Godrex Capital provides electronic execution-only trading facilities in Contracts for Difference (CFDs), foreign exchange, indices, commodities, and digital asset derivatives. Services are strictly unavailable to residents of the United States, Canada, North Korea, Iran, and jurisdictions subject to international sanctions or regional restrictions.
            </p>
            <p>
              Clients must be at least 18 years of age (or legal age of majority in their jurisdiction) and legally authorized to enter binding financial contracts.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold text-navy dark:text-cream">2. Account Registration & Verification</h2>
            <p>
              To access live trading features, you must undergo mandatory identity verification (KYC/AML) under international regulatory requirements. You agree to provide true, accurate, and complete information, and promptly update any changes.
            </p>
            <p>
              Godrex Capital reserves the right to suspend or restrict account operations at any time if provided information is suspected of being fraudulent, inaccurate, or non-compliant.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold text-navy dark:text-cream">3. Execution, Margin & Orders</h2>
            <p>
              All orders are executed on an STP/NDD (Straight Through Processing / No Dealing Desk) basis via our tier-1 liquidity providers. Godrex Capital does not guarantee specific prices during periods of extreme market volatility, slippage, or liquidity gaps.
            </p>
            <p>
              Clients are responsible for monitoring their margin level. Accounts reaching a margin level below the liquidation threshold (stop-out) are subject to automated position closure without prior notice.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold text-navy dark:text-cream">4. Client Funds & Segregation</h2>
            <p>
              All retail client funds are deposited into segregated bank accounts held with tier-1 international banking institutions, distinct from Godrex Capital’s operational capital. Client money is never used to cover operational corporate obligations or hedging counterparties.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold text-navy dark:text-cream">5. Deposits, Withdrawals & Fees</h2>
            <p>
              Deposits and withdrawals must be processed to and from accounts bearing the exact legal name matching the client’s verified identity. Third-party transfers are strictly prohibited under Anti-Money Laundering legislation.
            </p>
            <p>
              Standard spreads, overnight rollover financing (swap charges), and account inactivity fees are applied in accordance with our transparent Pricing & Fees schedule.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold text-navy dark:text-cream">6. Prohibited Trading Practices</h2>
            <p>
              Godrex Capital prohibits abusive strategies, including latency arbitrage, manipulation of platform latency, quotation errors, or unauthorized algorithmic exploitation. Accounts engaged in abusive practices may experience order cancellation and account termination.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold text-navy dark:text-cream">7. Limitation of Liability</h2>
            <p>
              Godrex Capital shall not be held liable for losses resulting from internet disruptions, hardware malfunctions, telecommunication errors, power failures, or unforeseen force majeure events impacting market continuity.
            </p>
          </div>

          <div className="pt-6 border-t border-navy-100 dark:border-navy-700/50 flex flex-col sm:flex-row gap-4 justify-between items-center text-xs text-navy-400">
            <span>Questions regarding our Terms? Contact <a href="mailto:legal@godrexcapital.com" className="text-gold underline">legal@godrexcapital.com</a></span>
            <Link href="/legal/risk-disclosure" className="text-gold hover:underline">
              Read Risk Disclosure &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
