import { NextResponse } from "next/server";

export const revalidate = 60; // 60-second SWR server cache

export interface StockQuotePayload {
  symbol: string;
  yahooSymbol: string;
  price: number;
  previousClose: number;
  change: number;
  changePercent: number;
  dayHigh: number;
  dayLow: number;
  currency: string;
  marketState: "LIVE" | "CLOSED" | "SNAPSHOT";
  timestamp: string;
  isLive: boolean;
  dataSource: "live" | "fallback";
  errorReason?: string;
}

export interface FallbackQuote {
  price: number;
  previousClose: number;
  change: number;
  changePercent: number;
  dayHigh: number;
  dayLow: number;
  currency: string;
}

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
  HCLTECH: "HCLTECH.NS",
};

// Built-in safe static fallback quotes dictionary for supported tickers
const FALLBACK_QUOTES: Record<string, FallbackQuote> = {
  ITC: { price: 272.50, previousClose: 272.00, change: 3.20, changePercent: 1.19, dayHigh: 275.80, dayLow: 269.50, currency: "INR" },
  HDFCBANK: { price: 728.00, previousClose: 728.00, change: -4.50, changePercent: -0.61, dayHigh: 735.00, dayLow: 722.50, currency: "INR" },
  INFY: { price: 1143.65, previousClose: 1143.65, change: 14.20, changePercent: 1.26, dayHigh: 1152.00, dayLow: 1135.00, currency: "INR" },
  RELIANCE: { price: 2980.00, previousClose: 2961.60, change: 18.40, changePercent: 0.62, dayHigh: 2995.00, dayLow: 2950.00, currency: "INR" },
  TCS: { price: 2344.00, previousClose: 2344.00, change: 18.50, changePercent: 0.80, dayHigh: 2360.00, dayLow: 2330.00, currency: "INR" },
  WIPRO: { price: 180.40, previousClose: 180.40, change: 1.80, changePercent: 1.01, dayHigh: 182.50, dayLow: 178.90, currency: "INR" },
  SBIN: { price: 1047.50, previousClose: 1047.50, change: 0.00, changePercent: 0.00, dayHigh: 1060.00, dayLow: 1040.00, currency: "INR" },
  HCLTECH: { price: 1316.00, previousClose: 1316.00, change: 0.00, changePercent: 0.00, dayHigh: 1330.00, dayLow: 1305.00, currency: "INR" },
  ICICIBANK: { price: 1422.80, previousClose: 1422.80, change: 0.00, changePercent: 0.00, dayHigh: 1440.00, dayLow: 1410.00, currency: "INR" },
  TITAN: { price: 3450.00, previousClose: 3408.00, change: 42.00, changePercent: 1.23, dayHigh: 3480.00, dayLow: 3410.00, currency: "INR" },
  AAPL: { price: 224.20, previousClose: 222.10, change: 2.10, changePercent: 0.95, dayHigh: 226.50, dayLow: 221.80, currency: "USD" },
  NVDA: { price: 128.50, previousClose: 125.10, change: 3.40, changePercent: 2.72, dayHigh: 130.20, dayLow: 124.80, currency: "USD" },
};

const DEFAULT_CACHE_HEADERS = {
  "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const rawQuery = (searchParams.get("ticker") || "ITC").trim().toUpperCase();

  // Determine Yahoo symbol
  const symbol = INDIAN_TICKERS[rawQuery] || (rawQuery.includes(".") ? rawQuery : rawQuery);

  let errorReason: string | undefined;

  // Set up 4000ms AbortController timeout for upstream fetch
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 4000);

  try {
    const yahooUrl = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?interval=1d&range=5d`;

    const res = await fetch(yahooUrl, {
      signal: controller.signal,
      headers: {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko)",
      },
      next: { revalidate: 60 },
    });

    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      const result = data?.chart?.result?.[0];
      const meta = result?.meta;

      if (meta && typeof meta.regularMarketPrice === "number") {
        const price = meta.regularMarketPrice;
        const previousClose = meta.chartPreviousClose || meta.previousClose || meta.regularMarketPreviousClose || price;
        const change = Number((price - previousClose).toFixed(2));
        const changePercent = Number(((change / previousClose) * 100).toFixed(2));
        const dayHigh = meta.regularMarketDayHigh || meta.dayHigh || price;
        const dayLow = meta.regularMarketDayLow || meta.dayLow || price;
        const currency = meta.currency || (symbol.endsWith(".NS") || symbol.endsWith(".BO") ? "INR" : "USD");

        const payload: StockQuotePayload = {
          symbol: rawQuery,
          yahooSymbol: symbol,
          price,
          previousClose,
          change,
          changePercent,
          dayHigh,
          dayLow,
          currency,
          marketState: meta.dataGranularity ? "LIVE" : "CLOSED",
          timestamp: new Date().toISOString(),
          isLive: true,
          dataSource: "live",
        };

        return NextResponse.json(payload, {
          headers: {
            ...DEFAULT_CACHE_HEADERS,
            "X-Data-Source": "live",
          },
        });
      } else {
        errorReason = "Malformed upstream payload";
      }
    } else {
      if (res.status === 429) {
        errorReason = "Upstream Rate Limit Exceeded (HTTP 429)";
      } else {
        errorReason = `Upstream HTTP Error (${res.status})`;
      }
    }
  } catch (err: unknown) {
    clearTimeout(timeoutId);
    if (err instanceof Error) {
      if (err.name === "AbortError") {
        errorReason = "Upstream Request Timeout (4000ms limit)";
      } else {
        errorReason = err.message;
      }
    } else {
      errorReason = "Network Failure";
    }
  }

  // Graceful Static Fallback Payload
  const fallback = FALLBACK_QUOTES[rawQuery] || {
    price: 1500.00,
    previousClose: 1500.00,
    change: 12.00,
    changePercent: 0.81,
    dayHigh: 1520.00,
    dayLow: 1485.00,
    currency: rawQuery.endsWith(".NS") || INDIAN_TICKERS[rawQuery] ? "INR" : "USD",
  };

  const fallbackPayload: StockQuotePayload = {
    symbol: rawQuery,
    yahooSymbol: symbol,
    price: fallback.price,
    previousClose: fallback.previousClose,
    change: fallback.change,
    changePercent: fallback.changePercent,
    dayHigh: fallback.dayHigh,
    dayLow: fallback.dayLow,
    currency: fallback.currency,
    marketState: "SNAPSHOT",
    timestamp: new Date().toISOString(),
    isLive: false,
    dataSource: "fallback",
    ...(errorReason && { errorReason }),
  };

  return NextResponse.json(fallbackPayload, {
    status: 200,
    headers: {
      ...DEFAULT_CACHE_HEADERS,
      "X-Data-Source": "fallback",
      ...(errorReason && { "X-Fallback-Reason": errorReason }),
    },
  });
}
