"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, ShieldAlert, TrendingUp, RefreshCw, CheckCircle2, ArrowRight, Zap } from "lucide-react";

export default function Calculators() {
  const [activeTab, setActiveTab] = useState<"gst" | "d2c">("gst");

  // GST State
  const [grossSales, setGrossSales] = useState<number>(2500000);
  const [taxRate, setTaxRate] = useState<number>(18);
  const [purchases, setPurchases] = useState<number>(1600000);
  const [delinquentVendorPct, setDelinquentVendorPct] = useState<number>(15);

  // D2C State
  const [sellingPrice, setSellingPrice] = useState<number>(1800);
  const [cogs, setCogs] = useState<number>(450);
  const [prepaidPct, setPrepaidPct] = useState<number>(40);
  const [rtoPct, setRtoPct] = useState<number>(20);
  const [cac, setCac] = useState<number>(400);
  const [shippingCost, setShippingCost] = useState<number>(120);

  const [copied, setCopied] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);

  // 1. Hydrate state from URL query parameters on mount
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);

    const modeParam = params.get("mode");
    if (modeParam === "gst" || modeParam === "d2c") {
      setActiveTab(modeParam);
    }

    if (params.has("grossSales")) setGrossSales(Number(params.get("grossSales")));
    if (params.has("taxRate")) setTaxRate(Number(params.get("taxRate")));
    if (params.has("purchases")) setPurchases(Number(params.get("purchases")));
    if (params.has("delinquentVendorPct")) setDelinquentVendorPct(Number(params.get("delinquentVendorPct")));

    if (params.has("sellingPrice")) setSellingPrice(Number(params.get("sellingPrice")));
    if (params.has("cogs")) setCogs(Number(params.get("cogs")));
    if (params.has("prepaidPct")) setPrepaidPct(Number(params.get("prepaidPct")));
    if (params.has("rtoPct")) setRtoPct(Number(params.get("rtoPct")));
    if (params.has("cac")) setCac(Number(params.get("cac")));
    if (params.has("shippingCost")) setShippingCost(Number(params.get("shippingCost")));
  }, []);

  // 2. Sync state back to URL query parameters on change
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams();
    params.set("mode", activeTab);

    if (activeTab === "gst") {
      params.set("grossSales", grossSales.toString());
      params.set("taxRate", taxRate.toString());
      params.set("purchases", purchases.toString());
      params.set("delinquentVendorPct", delinquentVendorPct.toString());
    } else {
      params.set("sellingPrice", sellingPrice.toString());
      params.set("cogs", cogs.toString());
      params.set("prepaidPct", prepaidPct.toString());
      params.set("rtoPct", rtoPct.toString());
      params.set("cac", cac.toString());
      params.set("shippingCost", shippingCost.toString());
    }

    const newUrl = `${window.location.pathname}?${params.toString()}#calculators`;
    window.history.replaceState(null, "", newUrl);
  }, [activeTab, grossSales, taxRate, purchases, delinquentVendorPct, sellingPrice, cogs, prepaidPct, rtoPct, cac, shippingCost]);

  // INR Formatting Helper
  const formatINR = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  // GST Calculations
  const outputTax = (grossSales * taxRate) / 100;
  const rawITC = (purchases * taxRate) / 100;
  const lockedITC = (rawITC * delinquentVendorPct) / 100;
  const eligibleITC = rawITC - lockedITC;
  const netTaxPayable = Math.max(0, outputTax - eligibleITC);

  // D2C Calculations
  const codPct = 100 - prepaidPct;
  const rtoFreightCost = shippingCost * 1.6;
  const weightedFreightPerOrder = (shippingCost * (1 - rtoPct / 100)) + (rtoFreightCost * (rtoPct / 100));
  const gatewayFee = (sellingPrice * 0.02);
  const cm3PerOrder = sellingPrice - cogs - weightedFreightPerOrder - gatewayFee - cac;
  const cm3MarginPct = (cm3PerOrder / sellingPrice) * 100;

  const handleCopyBreakdown = () => {
    const text = activeTab === "gst"
      ? `GST Audit Breakdown (Taxamicus Calculator)\nGross Sales: ${formatINR(grossSales)}\nOutput Tax (${taxRate}%): ${formatINR(outputTax)}\nEligible ITC: ${formatINR(eligibleITC)}\nLocked GSTR-2B ITC: ${formatINR(lockedITC)}\nNet GST Payable: ${formatINR(netTaxPayable)}`
      : `D2C Unit Economics Breakdown (Taxamicus Calculator)\nSelling Price: ${formatINR(sellingPrice)}\nCOGS: ${formatINR(cogs)}\nCAC: ${formatINR(cac)}\nCM3 Contribution: ${formatINR(cm3PerOrder)} (${cm3MarginPct.toFixed(1)}%)`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setShareCopied(true);
    setTimeout(() => setShareCopied(false), 2000);
  };

  return (
    <section id="calculators" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10 relative text-white">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cobalt-500/10 border border-cobalt-500/20 text-xs font-mono text-cobalt-400 font-bold uppercase tracking-widest mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>02. LIVE INTERACTIVE SIMULATORS</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight">
            Financial & Tax Calculators
          </h2>
        </div>

        {/* Tab Selector & Copy Button */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex p-1.5 rounded-full bg-zinc-900 border border-zinc-800">
            <button
              onClick={() => setActiveTab("gst")}
              className={`px-5 py-2.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === "gst"
                  ? "bg-cobalt-600 text-white shadow-lg shadow-cobalt-600/30"
                  : "text-zinc-400 hover:text-white"
              }`}
              data-cursor="CALCULATOR"
            >
              GST Cash Lock Simulator
            </button>
            <button
              onClick={() => setActiveTab("d2c")}
              className={`px-5 py-2.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === "d2c"
                  ? "bg-cobalt-600 text-white shadow-lg shadow-cobalt-600/30"
                  : "text-zinc-400 hover:text-white"
              }`}
              data-cursor="CALCULATOR"
            >
              D2C Unit Economics
            </button>
          </div>

          <button
            onClick={handleCopyBreakdown}
            className="px-4 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white font-mono text-xs font-bold transition-all flex items-center gap-2"
          >
            {copied ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied Summary!</span>
              </>
            ) : (
              <>
                <RefreshCw className="w-3.5 h-3.5 text-cobalt-400" />
                <span>Copy Summary</span>
              </>
            )}
          </button>

          <button
            onClick={handleShareLink}
            className="px-4 py-2.5 rounded-full bg-cobalt-600/20 hover:bg-cobalt-600/30 border border-cobalt-500/30 text-cobalt-300 hover:text-white font-mono text-xs font-bold transition-all flex items-center gap-2"
            title="Share direct link with serialized calculator inputs"
          >
            {shareCopied ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied Link!</span>
              </>
            ) : (
              <>
                <Zap className="w-3.5 h-3.5 text-cobalt-400" />
                <span>Share Simulation Link</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Simulator 1: GST & ITC Cash Lock */}
      {activeTab === "gst" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 rounded-3xl bg-[#121218] border border-white/10 shadow-2xl">
          {/* Inputs Column */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-display text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <Calculator className="w-5 h-5 text-cobalt-400" />
              <span>GST Input Tax Credit (ITC) Cash Lock Engine</span>
            </h3>
            <p className="font-sans text-xs text-zinc-400 leading-relaxed">
              Simulate how supplier filing delays in GSTR-2B directly freeze working capital and increase monthly tax cash outflows.
            </p>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-mono text-zinc-300 mb-1">
                  <span>Monthly Gross Revenue (₹)</span>
                  <span className="font-bold text-cobalt-400">₹{grossSales.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min={500000}
                  max={10000000}
                  step={250000}
                  value={grossSales}
                  onChange={(e) => setGrossSales(Number(e.target.value))}
                  className="w-full accent-cobalt-500"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono text-zinc-300 mb-1">
                  <span>Applicable GST Rate (%)</span>
                  <span className="font-bold text-cobalt-400">{taxRate}%</span>
                </div>
                <div className="flex gap-2">
                  {[5, 12, 18, 28].map((r) => (
                    <button
                      key={r}
                      onClick={() => setTaxRate(r)}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                        taxRate === r
                          ? "bg-cobalt-600 text-white"
                          : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800"
                      }`}
                    >
                      {r}%
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono text-zinc-300 mb-1">
                  <span>Monthly Vendor Purchases / OpEx (₹)</span>
                  <span className="font-bold text-cobalt-400">₹{purchases.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min={200000}
                  max={8000000}
                  step={100000}
                  value={purchases}
                  onChange={(e) => setPurchases(Number(e.target.value))}
                  className="w-full accent-cobalt-500"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono text-zinc-300 mb-1">
                  <span>Delinquent Vendor Filing Risk (%)</span>
                  <span className="font-bold text-red-400">{delinquentVendorPct}%</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={50}
                  step={5}
                  value={delinquentVendorPct}
                  onChange={(e) => setDelinquentVendorPct(Number(e.target.value))}
                  className="w-full accent-red-500"
                />
              </div>
            </div>
          </div>

          {/* Outputs Column */}
          <div className="lg:col-span-6 p-6 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col justify-between space-y-6">
            <div>
              <span className="font-mono text-xs text-cobalt-400 font-bold uppercase tracking-widest block mb-4">
                SIMULATION RESULTS
              </span>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800">
                  <span className="font-mono text-[10px] text-zinc-400 block mb-1">Output Tax Collected</span>
                  <span className="font-display text-xl font-bold text-white">₹{outputTax.toLocaleString()}</span>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800">
                  <span className="font-mono text-[10px] text-zinc-400 block mb-1">Total Eligible ITC</span>
                  <span className="font-display text-xl font-bold text-emerald-400">₹{eligibleITC.toLocaleString()}</span>
                </div>
              </div>

              {/* Locked Cash Alert Box */}
              <div className="p-4 rounded-xl bg-red-950/60 border border-red-800/80 mb-4 flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-mono text-xs font-bold text-red-300 block">Blocked Working Capital Risk</span>
                  <p className="font-sans text-xs text-red-200 mt-1">
                    <strong className="text-white font-mono text-sm">₹{lockedITC.toLocaleString()}</strong> in input tax credit is locked because {delinquentVendorPct}% of your vendors failed to file GSTR-1 on time.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-between">
                <span className="font-mono text-xs text-zinc-300">Monthly Tax Cash Outflow:</span>
                <span className="font-display text-2xl font-black text-amber-400">₹{netTaxPayable.toLocaleString()}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>Shwet Ranjan GST Audit Engine</span>
              <a href="#contact" className="text-cobalt-400 hover:underline flex items-center gap-1 font-bold">
                <span>Request GST Audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Simulator 2: D2C Net Realization */}
      {activeTab === "d2c" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 rounded-3xl bg-[#121218] border border-white/10 shadow-2xl">
          {/* Inputs Column */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-display text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
              <span>D2C E-Commerce Net Realization & CM3 Engine</span>
            </h3>
            <p className="font-sans text-xs text-zinc-400 leading-relaxed">
              Calculate unit-level contribution margin (CM3) after accounting for COD Return-To-Origin (RTO) friction, shipping, and payment fees.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="font-mono text-xs text-zinc-300 block mb-1">Selling Price (₹)</span>
                <input
                  type="number"
                  value={sellingPrice}
                  onChange={(e) => setSellingPrice(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-700 font-mono text-sm text-white focus:outline-none"
                />
              </div>
              <div>
                <span className="font-mono text-xs text-zinc-300 block mb-1">Product COGS (₹)</span>
                <input
                  type="number"
                  value={cogs}
                  onChange={(e) => setCogs(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-700 font-mono text-sm text-white focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-mono text-zinc-300 mb-1">
                  <span>Prepaid Order Mix (%)</span>
                  <span className="font-bold text-cobalt-400">{prepaidPct}% Prepaid / {codPct}% COD</span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={90}
                  step={5}
                  value={prepaidPct}
                  onChange={(e) => setPrepaidPct(Number(e.target.value))}
                  className="w-full accent-cobalt-500"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono text-zinc-300 mb-1">
                  <span>RTO (Return-to-Origin) Rate (%)</span>
                  <span className="font-bold text-red-400">{rtoPct}%</span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={45}
                  step={1}
                  value={rtoPct}
                  onChange={(e) => setRtoPct(Number(e.target.value))}
                  className="w-full accent-red-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="font-mono text-xs text-zinc-300 block mb-1">CAC (₹)</span>
                  <input
                    type="number"
                    value={cac}
                    onChange={(e) => setCac(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-700 font-mono text-sm text-white focus:outline-none"
                  />
                </div>
                <div>
                  <span className="font-mono text-xs text-zinc-300 block mb-1">Shipping Cost (₹)</span>
                  <input
                    type="number"
                    value={shippingCost}
                    onChange={(e) => setShippingCost(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-700 font-mono text-sm text-white focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Outputs Column */}
          <div className="lg:col-span-6 p-6 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col justify-between space-y-6">
            <div>
              <span className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-widest block mb-4">
                UNIT ECONOMICS WATERFALL
              </span>

              <div className="space-y-3 mb-6 font-mono text-xs">
                <div className="flex justify-between pb-2 border-b border-zinc-800">
                  <span className="text-zinc-400">Gross Selling Price:</span>
                  <span className="font-bold text-white">₹{sellingPrice}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-zinc-800">
                  <span className="text-zinc-400">Less Product COGS:</span>
                  <span className="text-red-400">-₹{cogs}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-zinc-800">
                  <span className="text-zinc-400">Freight & RTO Drag:</span>
                  <span className="text-red-400">-₹{weightedFreightPerOrder.toFixed(0)}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-zinc-800">
                  <span className="text-zinc-400">Customer Acquisition (CAC):</span>
                  <span className="text-red-400">-₹{cac}</span>
                </div>
              </div>

              {/* CM3 Result Box */}
              <div className={`p-5 rounded-xl border ${cm3PerOrder > 0 ? "bg-emerald-950/60 border-emerald-800" : "bg-red-950/60 border-red-800"}`}>
                <span className="font-mono text-xs text-zinc-300 block mb-1">Contribution Margin 3 (CM3):</span>
                <div className="flex items-baseline justify-between">
                  <span className={`font-display text-3xl font-black ${cm3PerOrder > 0 ? "text-emerald-400" : "text-red-400"}`}>
                    ₹{cm3PerOrder.toFixed(0)} / order
                  </span>
                  <span className="font-mono text-sm font-bold text-zinc-200">
                    ({cm3MarginPct.toFixed(1)}%)
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>Shwet Ranjan D2C OS</span>
              <a href="#contact" className="text-emerald-400 hover:underline flex items-center gap-1 font-bold">
                <span>Inquire D2C Strategy</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
