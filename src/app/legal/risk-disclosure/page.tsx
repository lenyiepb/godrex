import type { Metadata } from "next";
import { AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Risk Disclosure",
  description: "Full risk disclosure statement for trading leveraged products with Godrex Capital.",
};

export default function RiskDisclosurePage() {
  return (
    <>
      <section className="hero-bg grid-pattern pt-24 pb-16">
        <div className="section-container max-w-3xl">
          <div className="badge-gold inline-flex mb-4">Legal</div>
          <h1 className="section-heading text-cream mb-2">Risk Disclosure Statement</h1>
          <p className="text-navy-300 text-sm">Last updated: October 2026</p>
        </div>
      </section>
      <section className="py-16 bg-cream dark:bg-navy">
        <div className="section-container max-w-3xl">
          {/* Warning box */}
          <div className="flex items-start gap-4 bg-amber-950/60 border border-amber-800/50 rounded-2xl p-6 mb-10">
            <AlertTriangle size={22} className="text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-200 mb-1">High Risk Warning</p>
              <p className="text-sm text-amber-300 leading-relaxed">
                Trading leveraged products such as Forex and CFDs carries a high level of risk and may not be suitable for all investors.
                You may lose more than your initial deposit. Ensure you fully understand the risks involved and seek independent advice if necessary.
                Past performance is not indicative of future results.
              </p>
            </div>
          </div>

          <div className="prose prose-navy dark:prose-invert max-w-none text-navy-600 dark:text-navy-200 space-y-8 text-sm leading-relaxed">
            <section>
              <h2 className="font-display text-xl font-semibold text-navy dark:text-cream mb-3">1. Introduction</h2>
              <p>
                This Risk Disclosure Statement (&quot;Statement&quot;) is provided to you by Godrex Capital Ltd (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;)
                to inform you of the risks associated with trading financial instruments. This Statement does not purport to disclose all
                the risks and other significant aspects of trading. You should not trade with money you cannot afford to lose.
              </p>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold text-navy dark:text-cream mb-3">2. Leveraged Trading Risk</h2>
              <p>
                CFDs and Forex instruments are leveraged products. Leveraged trading means a small market movement can result in a
                proportionally larger movement in the value of your investment. This can work for or against you. A relatively small
                adverse price movement may result in the loss of your entire deposit or may require an additional payment to maintain
                your position.
              </p>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold text-navy dark:text-cream mb-3">3. Market Risk</h2>
              <p>
                The price of financial instruments can be volatile and can change quickly. Prices may be influenced by global economic
                events, political events, market sentiment, and other factors beyond our control or prediction. No representation is
                being made that any account will or is likely to achieve profits or losses similar to those shown or described.
              </p>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold text-navy dark:text-cream mb-3">4. Cryptocurrency Risk</h2>
              <p>
                Cryptocurrencies are highly speculative and volatile. They are not backed by any government or regulated asset.
                Cryptocurrency markets operate 24/7 and are subject to significant price swings, regulatory changes, and technical risks
                including exchange hacks and protocol failures.
              </p>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold text-navy dark:text-cream mb-3">5. Technology Risk</h2>
              <p>
                Online trading platforms are subject to technology risks including internet connectivity failures, system outages,
                latency, and cybersecurity incidents. While we employ best-practice infrastructure and security, we cannot guarantee
                uninterrupted access to the platform at all times.
              </p>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold text-navy dark:text-cream mb-3">6. Liquidity Risk</h2>
              <p>
                During periods of market stress or outside normal market hours, the liquidity of certain instruments may be significantly
                reduced. This may result in spreads widening considerably and execution at a price different from that quoted.
              </p>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold text-navy dark:text-cream mb-3">7. Suitability</h2>
              <p>
                You should consider carefully whether trading in leveraged products is suitable for you in light of your financial
                resources, level of experience, investment objectives, and risk appetite. You should seek independent financial advice
                if you are unsure.
              </p>
            </section>
            <section>
              <h2 className="font-display text-xl font-semibold text-navy dark:text-cream mb-3">8. Regulatory Notice</h2>
              <p>
                [PLACEHOLDER — Insert applicable regulatory notice for your licensed jurisdiction, including investor compensation scheme details, leverage limits per instrument class, and any other required disclosures mandated by your regulator.]
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
