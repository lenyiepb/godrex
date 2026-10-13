"use client";

import { useEffect, useState } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

interface TickerItem {
  symbol: string;
  price: number;
  change: number;
  changePct: number;
}

const SYMBOLS = [
  "EUR/USD", "GBP/USD", "USD/JPY", "USD/CHF", "AUD/USD",
  "XAU/USD", "XAG/USD", "AAPL",   "TSLA",    "AMZN",
  "BTC/USD", "ETH/USD", "US30",   "SP500",   "NAS100",
];

// Seed prices for SSR consistency
const SEED: Record<string, number> = {
  "EUR/USD": 1.0845, "GBP/USD": 1.2743, "USD/JPY": 148.32, "USD/CHF": 0.9021,
  "AUD/USD": 0.6478, "XAU/USD": 2312.5, "XAG/USD": 27.14,  "AAPL": 189.34,
  "TSLA": 248.12, "AMZN": 178.65, "BTC/USD": 68240, "ETH/USD": 3482,
  "US30": 39124, "SP500": 5218, "NAS100": 18342,
};

function jitter(val: number): number {
  const spread = val * 0.0005;
  return parseFloat((val + (Math.random() - 0.5) * 2 * spread).toPrecision(6));
}

function formatPrice(symbol: string, price: number): string {
  if (symbol === "BTC/USD" || symbol === "ETH/USD" || symbol.endsWith("00")) {
    return price.toLocaleString("en-US", { maximumFractionDigits: 0 });
  }
  if (symbol === "XAU/USD" || symbol.match(/^[A-Z]{3,4}$/)) {
    return price.toFixed(2);
  }
  return price.toFixed(4);
}

export function MarketTicker() {
  const [items, setItems] = useState<TickerItem[]>(() =>
    SYMBOLS.map((s) => ({
      symbol: s,
      price: SEED[s] ?? 100,
      change: 0,
      changePct: 0,
    }))
  );

  // Simulate live price movement
  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prev) =>
        prev.map((item) => {
          const newPrice = jitter(item.price);
          const change = parseFloat((newPrice - SEED[item.symbol]).toFixed(4));
          const changePct = parseFloat(((change / SEED[item.symbol]) * 100).toFixed(2));
          return { ...item, price: newPrice, change, changePct };
        })
      );
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  // Duplicate for seamless loop
  const doubled = [...items, ...items];

  return (
    <div
      className="ticker-wrapper overflow-hidden bg-navy-900 dark:bg-[#060D19] border-b border-white/5 py-2"
      aria-label="Live market prices"
      aria-live="polite"
    >
      <div className="flex">
        <div className="ticker-track gap-0">
          {doubled.map((item, i) => (
            <div
              key={`${item.symbol}-${i}`}
              className="flex items-center gap-2 px-5 py-0.5 border-r border-white/5 last:border-0"
            >
              <span className="text-xs font-semibold text-gold/80 font-mono tracking-wide">
                {item.symbol}
              </span>
              <span className="text-xs font-mono text-cream">
                {formatPrice(item.symbol, item.price)}
              </span>
              <span
                className={`flex items-center gap-0.5 text-xs font-mono font-medium ${
                  item.changePct >= 0 ? "price-up" : "price-down"
                }`}
              >
                {item.changePct >= 0
                  ? <TrendingUp size={10} />
                  : <TrendingDown size={10} />
                }
                {item.changePct >= 0 ? "+" : ""}
                {item.changePct}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
