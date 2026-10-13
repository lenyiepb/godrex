"use client";

import { useState, useEffect } from "react";
import { TrendingUp, TrendingDown, RefreshCw } from "lucide-react";
import type { Metadata } from "next";

// ── Instrument definitions ──────────────────────────────────────────────────
const MARKETS: Record<string, Instrument[]> = {
  Forex: [
    { symbol: "EUR/USD", name: "Euro / US Dollar",        price: 1.0845, bid: 1.0843, ask: 1.0847, spread: "0.4", category: "Major" },
    { symbol: "GBP/USD", name: "British Pound / US Dollar", price: 1.2743, bid: 1.2741, ask: 1.2746, spread: "0.5", category: "Major" },
    { symbol: "USD/JPY", name: "US Dollar / Japanese Yen",  price: 148.32, bid: 148.30, ask: 148.34, spread: "0.4", category: "Major" },
    { symbol: "USD/CHF", name: "US Dollar / Swiss Franc",  price: 0.9021, bid: 0.9019, ask: 0.9023, spread: "0.5", category: "Major" },
    { symbol: "AUD/USD", name: "Australian Dollar / US Dollar", price: 0.6478, bid: 0.6476, ask: 0.6480, spread: "0.6", category: "Major" },
    { symbol: "USD/CAD", name: "US Dollar / Canadian Dollar",   price: 1.3654, bid: 1.3652, ask: 1.3656, spread: "0.7", category: "Major" },
    { symbol: "NZD/USD", name: "New Zealand Dollar / US Dollar", price: 0.5923, bid: 0.5921, ask: 0.5925, spread: "0.8", category: "Major" },
    { symbol: "EUR/GBP", name: "Euro / British Pound",     price: 0.8512, bid: 0.8510, ask: 0.8514, spread: "0.6", category: "Minor" },
    { symbol: "EUR/JPY", name: "Euro / Japanese Yen",      price: 160.82, bid: 160.80, ask: 160.85, spread: "0.8", category: "Minor" },
    { symbol: "GBP/JPY", name: "British Pound / Japanese Yen", price: 189.24, bid: 189.21, ask: 189.27, spread: "1.2", category: "Minor" },
  ],
  Stocks: [
    { symbol: "AAPL",  name: "Apple Inc.",            price: 189.34, bid: 189.30, ask: 189.38, spread: "0.1%", category: "Tech" },
    { symbol: "MSFT",  name: "Microsoft Corporation", price: 378.92, bid: 378.85, ask: 378.99, spread: "0.1%", category: "Tech" },
    { symbol: "AMZN",  name: "Amazon.com Inc.",       price: 178.65, bid: 178.58, ask: 178.72, spread: "0.1%", category: "Tech" },
    { symbol: "TSLA",  name: "Tesla Inc.",            price: 248.12, bid: 248.00, ask: 248.24, spread: "0.1%", category: "Auto" },
    { symbol: "GOOGL", name: "Alphabet Inc. Class A", price: 173.54, bid: 173.48, ask: 173.60, spread: "0.1%", category: "Tech" },
    { symbol: "NVDA",  name: "NVIDIA Corporation",   price: 875.40, bid: 875.20, ask: 875.60, spread: "0.1%", category: "Tech" },
    { symbol: "META",  name: "Meta Platforms Inc.",  price: 492.18, bid: 492.00, ask: 492.36, spread: "0.1%", category: "Tech" },
    { symbol: "JPM",   name: "JPMorgan Chase & Co.", price: 198.76, bid: 198.65, ask: 198.87, spread: "0.1%", category: "Finance" },
  ],
  Indices: [
    { symbol: "US30",   name: "Dow Jones Industrial Average", price: 39124, bid: 39119, ask: 39129, spread: "5.0", category: "US" },
    { symbol: "SPX500", name: "S&P 500 Index",                price: 5218,  bid: 5217,  ask: 5219,  spread: "0.4", category: "US" },
    { symbol: "NAS100", name: "Nasdaq 100",                   price: 18342, bid: 18338, ask: 18346, spread: "1.0", category: "US" },
    { symbol: "UK100",  name: "FTSE 100",                     price: 8248,  bid: 8245,  ask: 8251,  spread: "1.0", category: "EU" },
    { symbol: "GER40",  name: "DAX 40",                       price: 18124, bid: 18120, ask: 18128, spread: "1.5", category: "EU" },
    { symbol: "FRA40",  name: "CAC 40",                       price: 7842,  bid: 7839,  ask: 7845,  spread: "1.5", category: "EU" },
    { symbol: "JPN225", name: "Nikkei 225",                   price: 38420, bid: 38415, ask: 38425, spread: "5.0", category: "Asia" },
  ],
  Commodities: [
    { symbol: "XAU/USD", name: "Gold",           price: 2312.50, bid: 2312.00, ask: 2313.00, spread: "0.50", category: "Metals" },
    { symbol: "XAG/USD", name: "Silver",         price: 27.14,   bid: 27.12,   ask: 27.16,   spread: "0.03", category: "Metals" },
    { symbol: "XPT/USD", name: "Platinum",       price: 1048.00, bid: 1047.00, ask: 1049.00, spread: "1.50", category: "Metals" },
    { symbol: "WTI",     name: "Crude Oil WTI",  price: 82.45,   bid: 82.43,   ask: 82.47,   spread: "0.04", category: "Energy" },
    { symbol: "BRENT",   name: "Crude Oil Brent",price: 85.12,   bid: 85.10,   ask: 85.14,   spread: "0.04", category: "Energy" },
    { symbol: "NGAS",    name: "Natural Gas",    price: 2.384,   bid: 2.382,   ask: 2.386,   spread: "0.003", category: "Energy" },
    { symbol: "CORN",    name: "Corn",           price: 448.50,  bid: 448.00,  ask: 449.00,  spread: "0.50", category: "Soft" },
  ],
  Crypto: [
    { symbol: "BTC/USD", name: "Bitcoin",           price: 68240, bid: 68200, ask: 68280, spread: "40",  category: "Layer 1" },
    { symbol: "ETH/USD", name: "Ethereum",          price: 3482,  bid: 3479,  ask: 3485,  spread: "3.0", category: "Layer 1" },
    { symbol: "SOL/USD", name: "Solana",            price: 182.40,bid: 182.20,ask: 182.60,spread: "0.20",category: "Layer 1" },
    { symbol: "BNB/USD", name: "BNB",               price: 596.80,bid: 596.60,ask: 597.00,spread: "0.40",category: "Exchange" },
    { symbol: "XRP/USD", name: "Ripple",            price: 0.5824,bid: 0.5821,ask: 0.5827,spread: "0.0003",category: "Payments" },
    { symbol: "ADA/USD", name: "Cardano",           price: 0.4512,bid: 0.4510,ask: 0.4514,spread: "0.0002",category: "Layer 1" },
    { symbol: "DOGE/USD",name: "Dogecoin",          price: 0.1624,bid: 0.1622,ask: 0.1626,spread: "0.0002",category: "Meme" },
    { symbol: "LINK/USD",name: "Chainlink",         price: 18.42, bid: 18.40, ask: 18.44, spread: "0.02", category: "Oracle" },
  ],
};

interface Instrument {
  symbol: string;
  name: string;
  price: number;
  bid: number;
  ask: number;
  spread: string;
  category: string;
}

interface LiveRow extends Instrument {
  changePct: number;
}

function jitter(val: number) {
  const s = val * 0.0003;
  return val + (Math.random() - 0.5) * 2 * s;
}

function fmt(symbol: string, price: number) {
  if (price > 10000) return price.toLocaleString("en-US", { maximumFractionDigits: 0 });
  if (price > 100)   return price.toFixed(2);
  if (price > 1)     return price.toFixed(4);
  return price.toFixed(6);
}

const TABS = Object.keys(MARKETS) as (keyof typeof MARKETS)[];

export default function MarketsPage() {
  const [tab, setTab] = useState<string>("Forex");
  const [rows, setRows] = useState<LiveRow[]>(() =>
    MARKETS["Forex"].map((r) => ({ ...r, changePct: 0 }))
  );

  // Load new tab data
  useEffect(() => {
    const base = MARKETS[tab] ?? [];
    setRows(base.map((r) => ({ ...r, changePct: 0 })));
  }, [tab]);

  // Simulate price updates
  useEffect(() => {
    const iv = setInterval(() => {
      setRows((prev) =>
        prev.map((r) => {
          const np = jitter(r.price);
          const pct = parseFloat((((np - r.price) / r.price) * 100).toFixed(2));
          return { ...r, price: np, changePct: pct };
        })
      );
    }, 1500);
    return () => clearInterval(iv);
  }, [tab]);

  return (
    <>
      {/* Header */}
      <section className="hero-bg grid-pattern pt-24 pb-16">
        <div className="section-container text-center">
          <div className="badge-gold inline-flex mb-4">500+ Instruments</div>
          <h1 className="section-heading text-cream mb-4">Markets</h1>
          <p className="section-sub text-navy-200 mx-auto">
            Trade the world&apos;s most popular instruments — from major Forex pairs to leading cryptocurrencies.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="sticky top-[72px] z-30 bg-navy-900 border-b border-white/5">
        <div className="section-container">
          <div className="flex gap-1 overflow-x-auto py-2 no-scrollbar">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-5 py-2.5 text-sm font-semibold rounded-lg whitespace-nowrap transition-all ${
                  tab === t
                    ? "bg-gold text-navy-900"
                    : "text-navy-300 hover:text-cream hover:bg-white/5"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Table */}
      <section className="py-12 bg-cream dark:bg-navy">
        <div className="section-container">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-xl font-semibold text-navy dark:text-cream">{tab}</h2>
            <div className="flex items-center gap-1.5 text-xs text-navy-400">
              <RefreshCw size={12} className="animate-spin" />
              Live prices — simulated until API key configured
            </div>
          </div>
          <div className="card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="data-table w-full">
                <thead className="bg-navy-50 dark:bg-navy-800">
                  <tr>
                    <th>Symbol</th>
                    <th>Name</th>
                    <th className="text-right">Price</th>
                    <th className="text-right">Bid</th>
                    <th className="text-right">Ask</th>
                    <th className="text-right">Change</th>
                    <th className="text-right">Spread</th>
                    <th className="text-center">Category</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.symbol} className="transition-colors">
                      <td className="font-mono font-semibold text-navy dark:text-cream">{row.symbol}</td>
                      <td className="text-navy-400 dark:text-navy-300">{row.name}</td>
                      <td className="text-right font-mono font-medium text-navy dark:text-cream">
                        {fmt(row.symbol, row.price)}
                      </td>
                      <td className="text-right font-mono text-navy-400 dark:text-navy-300 text-xs">
                        {fmt(row.symbol, row.bid)}
                      </td>
                      <td className="text-right font-mono text-navy-400 dark:text-navy-300 text-xs">
                        {fmt(row.symbol, row.ask)}
                      </td>
                      <td className={`text-right font-mono font-semibold ${row.changePct >= 0 ? "price-up" : "price-down"}`}>
                        <span className="flex items-center justify-end gap-1">
                          {row.changePct >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                          {row.changePct >= 0 ? "+" : ""}{row.changePct}%
                        </span>
                      </td>
                      <td className="text-right font-mono text-xs text-navy-400 dark:text-navy-300">{row.spread}</td>
                      <td className="text-center">
                        <span className="badge bg-navy-100 dark:bg-navy-700 text-navy-500 dark:text-navy-300">
                          {row.category}
                        </span>
                      </td>
                      <td className="text-center">
                        <a href="/portal/login" className="btn-gold btn-sm py-1.5 px-3 text-xs">
                          Trade
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* Disclaimer */}
          <p className="mt-4 text-xs text-navy-400 text-center">
            Prices are indicative only. Actual spreads may vary based on market conditions and account type.
            Trading involves significant risk of loss.
          </p>
        </div>
      </section>
    </>
  );
}
