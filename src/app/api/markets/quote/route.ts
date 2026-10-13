// src/app/api/markets/quote/route.ts
// Live market data endpoint — proxies Twelve Data API, keeps key server-side

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const TD_BASE = "https://api.twelvedata.com";

// Validated allow-list of symbols we support
const ALLOWED_SYMBOLS = new Set([
  "EUR/USD","GBP/USD","USD/JPY","USD/CHF","AUD/USD","USD/CAD","NZD/USD",
  "EUR/GBP","EUR/JPY","GBP/JPY","XAU/USD","XAG/USD","WTI","BRENT",
  "AAPL","MSFT","AMZN","TSLA","GOOGL","NVDA","META","JPM",
  "BTC/USD","ETH/USD","SOL/USD","BNB/USD","XRP/USD",
  "US30","SPX500","NAS100","UK100","GER40","FRA40","JPN225",
]);

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const symbol = (searchParams.get("symbol") ?? "").toUpperCase();

  // ── Input validation ──────────────────────────────────────────────────────
  if (!symbol || !ALLOWED_SYMBOLS.has(symbol)) {
    return NextResponse.json(
      { error: "Invalid or unsupported symbol." },
      { status: 400 }
    );
  }

  const apiKey = process.env.TWELVE_DATA_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Market data service not configured." },
      { status: 503 }
    );
  }

  try {
    const url = `${TD_BASE}/price?symbol=${encodeURIComponent(symbol)}&apikey=${apiKey}`;
    const res = await fetch(url, {
      next: { revalidate: 10 }, // cache for 10 seconds at edge
    });

    if (!res.ok) {
      throw new Error(`Upstream error: ${res.status}`);
    }

    const data = await res.json() as Record<string, unknown>;

    if (data.status === "error") {
      return NextResponse.json(
        { error: "Symbol not available from data provider." },
        { status: 404 }
      );
    }

    return NextResponse.json({ symbol, price: data.price }, { status: 200 });
  } catch (err) {
    // Log internally, return safe generic message
    console.error("[/api/markets/quote]", err);
    return NextResponse.json(
      { error: "Failed to fetch market data. Please try again." },
      { status: 502 }
    );
  }
}
