import { NextResponse } from "next/server";

export const revalidate = 60; // 60-second SWR server cache

// Known Indian tickers mapping to NSE symbols
const INDIAN_TICKERS: Record<string, string> = {
  ITC: "ITC.NS",
  HDFCBANK: "HDFCBANK.NS",
  RELIANCE: "RELIANCE.NS",
  TCS: "TCS.NS",
  TITAN: "TITAN.NS",
  INFY: "INFY.NS",
  TATAMOTORS: "TATAMOTORS.NS",
  BHARTIARTL: "BHARTIARTL.NS",
  WIPRO: "WIPRO.NS",
  ICICIBANK: "ICICIBANK.NS",
  LT: "LT.NS",
  ASIANPAINT: "ASIANPAINT.NS",
  SBIN: "SBIN.NS",
};

// Fallback mock prices if upstream API is unreachable
const FALLBACK_QUOTES: Record<string, { price: number; previousClose: number; change: number; changePercent: number; currency: string }> = {
  ITC: { price: 272.50, previousClose: 272.00, change: 3.20, changePercent: 1.19, currency: "INR" },
  HDFCBANK: { price: 728.00, previousClose: 728.00, change: -4.50, changePercent: -0.61, currency: "INR" },
  RELIANCE: { price: 2980.00, previousClose: 2961.60, change: 18.40, changePercent: 0.62, currency: "INR" },
  TCS: { price: 4120.00, previousClose: 4095.00, change: 25.00, changePercent: 0.61, currency: "INR" },
  TITAN: { price: 3450.00, previousClose: 3408.00, change: 42.00, changePercent: 1.23, currency: "INR" },
  AAPL: { price: 224.20, previousClose: 222.10, change: 2.10, changePercent: 0.95, currency: "USD" },
  NVDA: { price: 128.50, previousClose: 125.10, change: 3.40, changePercent: 2.72, currency: "USD" },
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const rawQuery = (searchParams.get("ticker") || "ITC").trim().toUpperCase();

  // Determine Yahoo symbol
  const symbol = INDIAN_TICKERS[rawQuery] || (rawQuery.includes(".") ? rawQuery : rawQuery);

  try {
    const yahooUrl = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?interval=1d&range=5d`;
    
    const res = await fetch(yahooUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko)",
      },
      next: { revalidate: 60 },
    });

    if (res.ok) {
      const data = await res.json();
      const result = data?.chart?.result?.[0];
      const meta = result?.meta;

      if (meta && typeof meta.regularMarketPrice === "number") {
        const price = meta.regularMarketPrice;
        const previousClose = meta.chartPreviousClose || meta.previousClose || meta.regularMarketPreviousClose || price;
        const change = Number((price - previousClose).toFixed(2));
        const changePercent = Number(((change / previousClose) * 100).toFixed(2));
        const currency = meta.currency || (symbol.endsWith(".NS") || symbol.endsWith(".BO") ? "INR" : "USD");

        return NextResponse.json({
          symbol: rawQuery,
          yahooSymbol: symbol,
          price,
          previousClose,
          change,
          changePercent,
          currency,
          marketState: meta.dataGranularity ? "LIVE" : "CLOSED",
          timestamp: new Date().toISOString(),
          isLive: true,
        });
      }
    }
  } catch (err) {
    console.error("Live stock quote fetch failed, serving fallback:", err);
  }

  // Return fallback quote if API fails or rate-limited
  const fallback = FALLBACK_QUOTES[rawQuery] || {
    price: 1500.00,
    previousClose: 1500.00,
    change: 12.00,
    changePercent: 0.81,
    currency: rawQuery.endsWith(".NS") || INDIAN_TICKERS[rawQuery] ? "INR" : "USD",
  };

  return NextResponse.json({
    symbol: rawQuery,
    yahooSymbol: symbol,
    price: fallback.price,
    previousClose: fallback.previousClose,
    change: fallback.change,
    changePercent: fallback.changePercent,
    currency: fallback.currency,
    marketState: "SNAPSHOT",
    timestamp: new Date().toISOString(),
    isLive: false,
  });
}
