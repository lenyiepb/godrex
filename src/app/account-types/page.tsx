import Link from "next/link";
import { Check, X } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account Types",
  description: "Compare Standard, Pro, and VIP trading accounts. Find the right account for your trading style and capital.",
};

const COMPARISON_ROWS = [
  { feature: "Minimum Deposit",        standard: "$100",           pro: "$2,500",          vip: "$25,000" },
  { feature: "Spread (EUR/USD)",        standard: "From 1.2 pips",  pro: "From 0.6 pips",   vip: "From 0.0 pips" },
  { feature: "Leverage (Forex)",        standard: "Up to 1:30",     pro: "Up to 1:100",     vip: "Up to 1:200" },
  { feature: "Commission",             standard: "$0 / lot",       pro: "$3.50 / lot",     vip: "$2.00 / lot" },
  { feature: "Instruments",            standard: "300+",           pro: "500+",            vip: "500+" },
  { feature: "Platforms",              standard: "Web & Mobile",   pro: "Web, Mobile & Desktop", vip: "All + API" },
  { feature: "EA / Algorithmic",       standard: false,            pro: true,              vip: true },
  { feature: "Swap-free (Islamic)",    standard: "On request",     pro: "On request",      vip: "Included" },
  { feature: "Deposit Bonus",          standard: false,            pro: false,             vip: false, note: "Bonuses may not be available in all jurisdictions" },
  { feature: "Execution Type",         standard: "Market",         pro: "Market / STP",    vip: "ECN / STP" },
  { feature: "Margin Call Level",      standard: "80%",            pro: "80%",             vip: "80%" },
  { feature: "Stop Out Level",         standard: "50%",            pro: "50%",             vip: "50%" },
  { feature: "Account Manager",        standard: false,            pro: false,             vip: true },
  { feature: "Priority Support",       standard: false,            pro: true,              vip: true },
  { feature: "Dedicated Phone Line",   standard: false,            pro: false,             vip: true },
  { feature: "VPS Hosting",            standard: false,            pro: "At cost",         vip: "Free" },
  { feature: "Weekly Market Reports",  standard: false,            pro: true,              vip: true },
  { feature: "Educational Access",     standard: "Basic",          pro: "Full",            vip: "Full + Webinars" },
];

function Cell({ val }: { val: string | boolean | undefined }) {
  if (val === true)  return <Check size={16} className="text-emerald-400 mx-auto" />;
  if (val === false) return <X    size={16} className="text-navy-400 mx-auto" />;
  return <span className="text-sm">{val}</span>;
}

export default function AccountTypesPage() {
  return (
    <>
      {/* Header */}
      <section className="hero-bg grid-pattern pt-24 pb-20">
        <div className="section-container text-center max-w-2xl">
          <div className="badge-gold inline-flex mb-4">Account Types</div>
          <h1 className="section-heading text-cream mb-4">Find Your Perfect Account</h1>
          <p className="section-sub text-navy-200 mx-auto">
            Three account tiers built for every stage of your trading journey — from first-time traders to seasoned professionals.
          </p>
        </div>
      </section>

      {/* Quick cards */}
      <section className="py-16 bg-cream dark:bg-navy">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
            {[
              {
                name: "Standard",
                deposit: "$100",
                spread: "From 1.2 pips",
                leverage: "1:30",
                for: "New traders and beginners",
                popular: false,
              },
              {
                name: "Pro",
                deposit: "$2,500",
                spread: "From 0.6 pips",
                leverage: "1:100",
                for: "Active traders seeking better conditions",
                popular: true,
              },
              {
                name: "VIP",
                deposit: "$25,000",
                spread: "From 0.0 pips",
                leverage: "1:200",
                for: "High-volume & professional traders",
                popular: false,
              },
            ].map((acc) => (
              <div
                key={acc.name}
                className={`card p-8 text-center flex flex-col relative ${acc.popular ? "border-gold shadow-glow" : ""}`}
              >
                {acc.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 badge-gold px-4 py-1 text-xs">
                    Most Popular
                  </div>
                )}
                <h2 className="font-display text-2xl font-semibold text-navy dark:text-cream mb-1">{acc.name}</h2>
                <div className="text-3xl font-bold text-gradient-gold mb-1">{acc.deposit}</div>
                <div className="text-xs text-navy-400 mb-4">minimum deposit</div>
                <div className="text-sm text-navy-400 dark:text-navy-300 italic mb-6">{acc.for}</div>
                <div className="space-y-2 text-sm mb-8">
                  <div className="flex justify-between">
                    <span className="text-navy-400">Spread</span>
                    <span className="font-medium text-navy dark:text-cream">{acc.spread}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-navy-400">Leverage</span>
                    <span className="font-medium text-navy dark:text-cream">{acc.leverage}</span>
                  </div>
                </div>
                <Link
                  href="/portal/signup"
                  className={`${acc.popular ? "btn-gold" : "btn-outline"} btn-md`}
                >
                  Open {acc.name} Account
                </Link>
              </div>
            ))}
          </div>

          {/* Full comparison table */}
          <h2 className="font-display text-3xl font-semibold text-navy dark:text-cream text-center mb-8">
            Full Feature Comparison
          </h2>
          <div className="card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="compare-table">
                <thead>
                  <tr className="bg-navy-50 dark:bg-navy-800">
                    <th className="text-left pl-6 pr-4 py-4 text-sm font-semibold text-navy-400 dark:text-navy-300 w-1/3">Feature</th>
                    <th className="py-4 text-sm font-semibold text-navy dark:text-cream">Standard</th>
                    <th className="py-4 text-sm font-semibold text-gold bg-gold/5">Pro ⭐</th>
                    <th className="py-4 text-sm font-semibold text-navy dark:text-cream">VIP</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map(({ feature, standard, pro, vip, note }) => (
                    <tr key={feature}>
                      <td className="feature-col pl-6 pr-4 py-4 text-sm">
                        {feature}
                        {note && <div className="text-xs text-navy-400 font-normal mt-0.5">* {note}</div>}
                      </td>
                      <td className="text-center py-4 text-navy dark:text-cream"><Cell val={standard} /></td>
                      <td className="text-center py-4 text-navy dark:text-cream bg-gold/5"><Cell val={pro} /></td>
                      <td className="text-center py-4 text-navy dark:text-cream"><Cell val={vip} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-xs text-center text-navy-400 mt-4">
            Leverage ratios are subject to regulatory restrictions based on your jurisdiction and classification as a retail or professional client.
          </p>
        </div>
      </section>
    </>
  );
}
