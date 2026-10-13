import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing & Fees",
  description: "Transparent, no-hidden-fee pricing. View spreads, commissions, deposit/withdrawal fees, and overnight swap rates.",
};

const SPREAD_TABLE = [
  { instrument: "EUR/USD",  type: "Forex",      standard: "1.2",   pro: "0.6",  vip: "0.0" },
  { instrument: "GBP/USD",  type: "Forex",      standard: "1.4",   pro: "0.8",  vip: "0.2" },
  { instrument: "USD/JPY",  type: "Forex",      standard: "1.3",   pro: "0.7",  vip: "0.1" },
  { instrument: "XAU/USD",  type: "Commodity",  standard: "0.50",  pro: "0.35", vip: "0.20" },
  { instrument: "WTI Oil",  type: "Commodity",  standard: "0.04",  pro: "0.03", vip: "0.02" },
  { instrument: "US30",     type: "Index",      standard: "5",     pro: "3",    vip: "2" },
  { instrument: "NAS100",   type: "Index",      standard: "1.5",   pro: "0.8",  vip: "0.5" },
  { instrument: "BTC/USD",  type: "Crypto",     standard: "50",    pro: "30",   vip: "20" },
  { instrument: "ETH/USD",  type: "Crypto",     standard: "4",     pro: "2.5",  vip: "1.5" },
  { instrument: "AAPL",     type: "Stock",      standard: "0.15%", pro: "0.10%",vip: "0.08%" },
];

const COMMISSION_TABLE = [
  { account: "Standard", perLot: "$0",     roundTurn: "$0",      notes: "Spread-only model" },
  { account: "Pro",      perLot: "$3.50",  roundTurn: "$7.00",   notes: "Tighter spreads, commission applies" },
  { account: "VIP",      perLot: "$2.00",  roundTurn: "$4.00",   notes: "Lowest overall cost for high volume" },
];

const PAYMENT_TABLE = [
  { method: "Bank Transfer (SEPA)",      deposit: "Free",     withdrawal: "Free",    time: "1–3 business days", min: "$50" },
  { method: "Bank Transfer (SWIFT)",     deposit: "Free",     withdrawal: "$20",     time: "3–5 business days", min: "$100" },
  { method: "Visa / Mastercard",         deposit: "Free",     withdrawal: "1.5%",    time: "1–5 business days", min: "$10" },
  { method: "Skrill",                    deposit: "Free",     withdrawal: "1%",      time: "24 hours",          min: "$10" },
  { method: "Neteller",                  deposit: "Free",     withdrawal: "1%",      time: "24 hours",          min: "$10" },
  { method: "Crypto (USDT/BTC/ETH)",    deposit: "Free",     withdrawal: "Network fee", time: "1–2 hours",     min: "$20" },
];

const OVERNIGHT_TABLE = [
  { instrument: "EUR/USD", long: "-0.52", short: "0.24", triple: "Wednesday" },
  { instrument: "GBP/USD", long: "-0.48", short: "0.18", triple: "Wednesday" },
  { instrument: "XAU/USD", long: "-0.35", short: "-0.10", triple: "Wednesday" },
  { instrument: "WTI Oil", long: "-0.28", short: "-0.14", triple: "Friday" },
  { instrument: "BTC/USD", long: "-0.25%", short: "-0.25%", triple: "Daily" },
];

export default function PricingPage() {
  return (
    <>
      {/* Header */}
      <section className="hero-bg grid-pattern pt-24 pb-20">
        <div className="section-container text-center max-w-2xl">
          <div className="badge-gold inline-flex mb-4">Transparent Pricing</div>
          <h1 className="section-heading text-cream mb-4">No Hidden Fees</h1>
          <p className="section-sub text-navy-200 mx-auto">
            At Godrex Capital, every cost is shown upfront. No surprises, no hidden charges — just clear, competitive pricing.
          </p>
        </div>
      </section>

      <div className="py-20 bg-cream dark:bg-navy space-y-20">
        <div className="section-container space-y-20">
          {/* ── Spreads ── */}
          <section>
            <h2 className="font-display text-2xl font-semibold text-navy dark:text-cream mb-2">Spreads (in pips)</h2>
            <p className="text-sm text-navy-400 dark:text-navy-300 mb-6">Average spreads during peak liquidity hours. Spreads may widen during low liquidity or news events.</p>
            <div className="card overflow-hidden">
              <table className="data-table w-full">
                <thead className="bg-navy-50 dark:bg-navy-800">
                  <tr>
                    <th>Instrument</th>
                    <th>Type</th>
                    <th className="text-center">Standard</th>
                    <th className="text-center bg-gold/5 text-gold">Pro ⭐</th>
                    <th className="text-center">VIP</th>
                  </tr>
                </thead>
                <tbody>
                  {SPREAD_TABLE.map((r) => (
                    <tr key={r.instrument}>
                      <td className="font-mono font-semibold text-navy dark:text-cream">{r.instrument}</td>
                      <td><span className="badge bg-navy-100 dark:bg-navy-700 text-navy-500 dark:text-navy-300">{r.type}</span></td>
                      <td className="text-center">{r.standard}</td>
                      <td className="text-center bg-gold/5 font-semibold text-gold">{r.pro}</td>
                      <td className="text-center">{r.vip}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── Commissions ── */}
          <section>
            <h2 className="font-display text-2xl font-semibold text-navy dark:text-cream mb-2">Commissions</h2>
            <p className="text-sm text-navy-400 dark:text-navy-300 mb-6">Standard accounts are commission-free (spread-only). Pro and VIP accounts use raw spreads with a per-lot commission.</p>
            <div className="card overflow-hidden">
              <table className="data-table w-full">
                <thead className="bg-navy-50 dark:bg-navy-800">
                  <tr>
                    <th>Account</th>
                    <th className="text-right">Per Side / Lot</th>
                    <th className="text-right">Round Turn / Lot</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {COMMISSION_TABLE.map((r) => (
                    <tr key={r.account}>
                      <td className="font-semibold text-navy dark:text-cream">{r.account}</td>
                      <td className="text-right font-mono">{r.perLot}</td>
                      <td className="text-right font-mono">{r.roundTurn}</td>
                      <td className="text-navy-400 dark:text-navy-300 text-xs">{r.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── Deposit / Withdrawal ── */}
          <section>
            <h2 className="font-display text-2xl font-semibold text-navy dark:text-cream mb-2">Deposit & Withdrawal Fees</h2>
            <p className="text-sm text-navy-400 dark:text-navy-300 mb-6">All deposits are free. Withdrawal fees vary by payment method.</p>
            <div className="card overflow-hidden">
              <table className="data-table w-full">
                <thead className="bg-navy-50 dark:bg-navy-800">
                  <tr>
                    <th>Payment Method</th>
                    <th className="text-center">Deposit Fee</th>
                    <th className="text-center">Withdrawal Fee</th>
                    <th className="text-center">Processing Time</th>
                    <th className="text-right">Min Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {PAYMENT_TABLE.map((r) => (
                    <tr key={r.method}>
                      <td className="font-medium text-navy dark:text-cream">{r.method}</td>
                      <td className="text-center text-emerald-500">{r.deposit}</td>
                      <td className="text-center">{r.withdrawal}</td>
                      <td className="text-center text-navy-400 dark:text-navy-300">{r.time}</td>
                      <td className="text-right font-mono">{r.min}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── Overnight / Swap ── */}
          <section>
            <h2 className="font-display text-2xl font-semibold text-navy dark:text-cream mb-2">Overnight (Swap) Fees</h2>
            <p className="text-sm text-navy-400 dark:text-navy-300 mb-6">Swap rates in points per lot. Rates vary daily based on interbank rates. Triple swap is applied on the day shown.</p>
            <div className="card overflow-hidden">
              <table className="data-table w-full">
                <thead className="bg-navy-50 dark:bg-navy-800">
                  <tr>
                    <th>Instrument</th>
                    <th className="text-right">Long (Buy)</th>
                    <th className="text-right">Short (Sell)</th>
                    <th className="text-center">Triple Swap Day</th>
                  </tr>
                </thead>
                <tbody>
                  {OVERNIGHT_TABLE.map((r) => (
                    <tr key={r.instrument}>
                      <td className="font-mono font-semibold text-navy dark:text-cream">{r.instrument}</td>
                      <td className={`text-right font-mono ${parseFloat(r.long) < 0 ? "price-down" : "price-up"}`}>{r.long}</td>
                      <td className={`text-right font-mono ${parseFloat(r.short) < 0 ? "price-down" : "price-up"}`}>{r.short}</td>
                      <td className="text-center text-navy-400 dark:text-navy-300">{r.triple}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-navy-400 mt-3">
              Islamic (swap-free) accounts are available upon request for Standard and Pro accounts, and included for VIP accounts.
              Additional charges may apply for positions held over extended periods.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
