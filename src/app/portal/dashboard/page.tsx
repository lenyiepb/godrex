"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard, TrendingUp, History, CreditCard, Settings,
  LogOut, Bell, ChevronUp, ChevronDown, ArrowUpRight, ArrowDownLeft,
  AlertCircle, BarChart2
} from "lucide-react";

// ── Mock data ───────────────────────────────────────────────────────────────
const MOCK_POSITIONS = [
  { symbol: "EUR/USD", type: "Buy",  lots: 0.5,  openPrice: 1.0821, currentPrice: 1.0845, pnl: 120.00, margin: 350.00 },
  { symbol: "XAU/USD", type: "Sell", lots: 0.1,  openPrice: 2325.0, currentPrice: 2312.5, pnl: 62.50,  margin: 231.25 },
  { symbol: "BTC/USD", type: "Buy",  lots: 0.01, openPrice: 67820,  currentPrice: 68240,  pnl: 42.00,  margin: 680.00 },
];

const MOCK_HISTORY = [
  { date: "2026-10-12", symbol: "GBP/USD", type: "Buy",  lots: 0.5, result: 87.50,   status: "Closed" },
  { date: "2026-10-10", symbol: "US30",    type: "Sell", lots: 0.1, result: -43.20,  status: "Closed" },
  { date: "2026-10-08", symbol: "AAPL",    type: "Buy",  lots: 1,   result: 215.00,  status: "Closed" },
  { date: "2026-10-05", symbol: "ETH/USD", type: "Sell", lots: 0.2, result: -18.40,  status: "Closed" },
];

type Tab = "overview" | "positions" | "history" | "deposit";

const NAV_ITEMS = [
  { id: "overview" as Tab,   icon: LayoutDashboard, label: "Overview" },
  { id: "positions" as Tab,  icon: TrendingUp,      label: "Open Positions" },
  { id: "history" as Tab,    icon: History,         label: "Trade History" },
  { id: "deposit" as Tab,    icon: CreditCard,      label: "Deposit / Withdraw" },
];

export default function DashboardPage() {
  const [tab, setTab] = useState<Tab>("overview");

  const totalPnL = MOCK_POSITIONS.reduce((s, p) => s + p.pnl, 0);
  const balance = 5000.00;
  const equity  = balance + totalPnL;
  const usedMargin = MOCK_POSITIONS.reduce((s, p) => s + p.margin, 0);
  const freeMargin = equity - usedMargin;
  const marginLevel = ((equity / usedMargin) * 100).toFixed(0);

  return (
    <div className="min-h-screen flex bg-cream dark:bg-navy pt-[72px]">
      {/* Sidebar */}
      <aside className="hidden md:flex w-60 flex-shrink-0 flex-col bg-navy-900 dark:bg-[#060D19] border-r border-white/5 fixed left-0 top-[72px] bottom-0">
        <div className="flex-1 py-6 px-3 space-y-1">
          {NAV_ITEMS.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                tab === id
                  ? "bg-gold text-navy-900"
                  : "text-navy-300 hover:text-cream hover:bg-white/5"
              }`}
            >
              <Icon size={16} /> {label}
            </button>
          ))}
        </div>
        <div className="px-3 pb-6 space-y-1">
          <Link href="/portal/settings" className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-navy-300 hover:text-cream hover:bg-white/5 transition-all">
            <Settings size={16} /> Settings
          </Link>
          <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-red-400 hover:bg-red-950/30 transition-all">
            <LogOut size={16} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 md:ml-60 min-w-0">
        {/* Top bar */}
        <div className="sticky top-[72px] z-20 bg-navy-900 dark:bg-[#060D19] border-b border-white/5 px-6 py-3 flex items-center justify-between">
          <h1 className="font-display text-lg font-semibold text-cream">Client Portal</h1>
          <div className="flex items-center gap-3">
            <div className="badge-green text-xs px-2.5">KYC Pending Review</div>
            <button className="relative w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-navy-300 hover:text-cream">
              <Bell size={14} />
              <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-gold rounded-full" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* ── Overview ── */}
          {tab === "overview" && (
            <>
              {/* Account summary cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "Balance",       value: `$${balance.toFixed(2)}`,     sub: "Account balance",       color: "" },
                  { label: "Equity",        value: `$${equity.toFixed(2)}`,      sub: "Balance + open P&L",    color: "" },
                  { label: "Open P&L",      value: `+$${totalPnL.toFixed(2)}`,   sub: "Floating profit/loss",  color: "text-emerald-400" },
                  { label: "Free Margin",   value: `$${freeMargin.toFixed(2)}`,  sub: `Margin level: ${marginLevel}%`, color: "" },
                ].map(({ label, value, sub, color }) => (
                  <div key={label} className="card p-5">
                    <div className="text-xs text-navy-400 dark:text-navy-300 mb-1">{label}</div>
                    <div className={`font-display text-2xl font-semibold ${color || "text-navy dark:text-cream"}`}>{value}</div>
                    <div className="text-xs text-navy-400 mt-1">{sub}</div>
                  </div>
                ))}
              </div>

              {/* KYC notice */}
              <div className="flex items-start gap-3 bg-amber-950/50 border border-amber-800/40 rounded-xl p-4">
                <AlertCircle size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-amber-200">KYC Verification Pending</p>
                  <p className="text-xs text-amber-300 mt-0.5">
                    Your documents are under review. Deposits, withdrawals, and live trading will be enabled once your identity is verified (typically 1–2 business days).
                  </p>
                </div>
              </div>

              {/* Open positions preview */}
              <div className="card overflow-hidden">
                <div className="flex items-center justify-between p-5 border-b border-border">
                  <h2 className="font-semibold text-navy dark:text-cream text-sm">Open Positions ({MOCK_POSITIONS.length})</h2>
                  <button onClick={() => setTab("positions")} className="text-xs text-gold hover:underline">View all →</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="data-table w-full">
                    <thead className="bg-navy-50 dark:bg-navy-800">
                      <tr>
                        <th>Symbol</th>
                        <th>Type</th>
                        <th className="text-right">Open Price</th>
                        <th className="text-right">Current</th>
                        <th className="text-right">P&L</th>
                      </tr>
                    </thead>
                    <tbody>
                      {MOCK_POSITIONS.map((p) => (
                        <tr key={p.symbol}>
                          <td className="font-mono font-semibold text-navy dark:text-cream">{p.symbol}</td>
                          <td>
                            <span className={p.type === "Buy" ? "badge-green" : "badge-red"}>{p.type}</span>
                          </td>
                          <td className="text-right font-mono">{p.openPrice}</td>
                          <td className="text-right font-mono">{p.currentPrice}</td>
                          <td className={`text-right font-mono font-semibold ${p.pnl >= 0 ? "price-up" : "price-down"}`}>
                            {p.pnl >= 0 ? "+" : ""}${p.pnl.toFixed(2)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {/* ── Positions ── */}
          {tab === "positions" && (
            <div className="card overflow-hidden">
              <div className="p-5 border-b border-border">
                <h2 className="font-semibold text-navy dark:text-cream">Open Positions</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="data-table w-full">
                  <thead className="bg-navy-50 dark:bg-navy-800">
                    <tr>
                      <th>Symbol</th>
                      <th>Type</th>
                      <th className="text-right">Lots</th>
                      <th className="text-right">Open Price</th>
                      <th className="text-right">Current</th>
                      <th className="text-right">Margin</th>
                      <th className="text-right">P&L</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {MOCK_POSITIONS.map((p) => (
                      <tr key={p.symbol}>
                        <td className="font-mono font-semibold text-navy dark:text-cream">{p.symbol}</td>
                        <td><span className={p.type === "Buy" ? "badge-green" : "badge-red"}>{p.type}</span></td>
                        <td className="text-right font-mono">{p.lots}</td>
                        <td className="text-right font-mono">{p.openPrice}</td>
                        <td className="text-right font-mono">{p.currentPrice}</td>
                        <td className="text-right font-mono">${p.margin.toFixed(2)}</td>
                        <td className={`text-right font-mono font-semibold ${p.pnl >= 0 ? "price-up" : "price-down"}`}>
                          {p.pnl >= 0 ? "+" : ""}${p.pnl.toFixed(2)}
                        </td>
                        <td className="text-center">
                          <button className="btn-outline btn-sm py-1 px-3 text-xs text-red-400 border-red-400/40 hover:bg-red-950/30">
                            Close
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-4 border-t border-border text-xs text-navy-400 text-center">
                ⚠ Closing positions is not available during KYC review. Contact support for assistance.
              </div>
            </div>
          )}

          {/* ── History ── */}
          {tab === "history" && (
            <div className="card overflow-hidden">
              <div className="p-5 border-b border-border">
                <h2 className="font-semibold text-navy dark:text-cream">Trade History</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="data-table w-full">
                  <thead className="bg-navy-50 dark:bg-navy-800">
                    <tr>
                      <th>Date</th>
                      <th>Symbol</th>
                      <th>Type</th>
                      <th className="text-right">Lots</th>
                      <th className="text-right">Result</th>
                      <th className="text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {MOCK_HISTORY.map((t, i) => (
                      <tr key={i}>
                        <td className="text-navy-400 dark:text-navy-300">{t.date}</td>
                        <td className="font-mono font-semibold text-navy dark:text-cream">{t.symbol}</td>
                        <td><span className={t.type === "Buy" ? "badge-green" : "badge-red"}>{t.type}</span></td>
                        <td className="text-right font-mono">{t.lots}</td>
                        <td className={`text-right font-mono font-semibold ${t.result >= 0 ? "price-up" : "price-down"}`}>
                          {t.result >= 0 ? "+" : ""}${t.result.toFixed(2)}
                        </td>
                        <td className="text-center"><span className="badge bg-navy-100 dark:bg-navy-700 text-navy-500 dark:text-navy-300">{t.status}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ── Deposit / Withdraw ── */}
          {tab === "deposit" && (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                    <ArrowDownLeft size={18} className="text-emerald-400" />
                  </div>
                  <h2 className="font-semibold text-navy dark:text-cream">Deposit Funds</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-navy-400 mb-1.5">Amount (USD)</label>
                    <input className="input" type="number" min="10" placeholder="100.00" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-navy-400 mb-1.5">Payment Method</label>
                    <select className="input">
                      <option>Visa / Mastercard</option>
                      <option>Bank Transfer (SEPA)</option>
                      <option>Skrill</option>
                      <option>Neteller</option>
                      <option>Crypto (USDT)</option>
                    </select>
                  </div>
                  <div className="flex items-start gap-2 bg-amber-950/40 border border-amber-800/30 rounded-xl p-3">
                    <AlertCircle size={14} className="text-amber-400 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-amber-300">Deposits are disabled until your KYC verification is approved.</p>
                  </div>
                  <button className="btn-gold btn-md w-full opacity-50 cursor-not-allowed" disabled>
                    Proceed to Deposit
                  </button>
                </div>
              </div>
              <div className="card p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-red-500/10 flex items-center justify-center">
                    <ArrowUpRight size={18} className="text-red-400" />
                  </div>
                  <h2 className="font-semibold text-navy dark:text-cream">Withdraw Funds</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-navy-400 mb-1.5">Amount (USD)</label>
                    <input className="input" type="number" min="10" placeholder="100.00" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-navy-400 mb-1.5">Withdrawal Method</label>
                    <select className="input">
                      <option>Bank Transfer (SEPA)</option>
                      <option>Visa / Mastercard</option>
                      <option>Crypto (USDT)</option>
                    </select>
                  </div>
                  <p className="text-xs text-navy-400">Available balance: <strong className="text-navy dark:text-cream">$5,000.00</strong></p>
                  <div className="flex items-start gap-2 bg-amber-950/40 border border-amber-800/30 rounded-xl p-3">
                    <AlertCircle size={14} className="text-amber-400 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-amber-300">Withdrawals are disabled until your KYC verification is approved.</p>
                  </div>
                  <button className="btn-outline btn-md w-full opacity-50 cursor-not-allowed" disabled>
                    Request Withdrawal
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
