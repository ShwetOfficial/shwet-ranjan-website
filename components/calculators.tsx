"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, ShieldAlert, TrendingUp, RefreshCw, CheckCircle2, ArrowRight, Zap } from "lucide-react";

export default function Calculators() {
  const [activeTab, setActiveTab] = useState<"gst" | "d2c" | "vpob">("gst");

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

  // VPOB Multi-State & Amazon Prime State
  const [monthlyGmv, setMonthlyGmv] = useState<number>(1500000);
  const [targetStatesCount, setTargetStatesCount] = useState<number>(2);
  const [avgOrderValue, setAvgOrderValue] = useState<number>(1200);
  const [primeUpliftPct, setPrimeUpliftPct] = useState<number>(30);

  const [copied, setCopied] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);

  // Hydrate state from incoming URL parameters and instantly clean the address bar
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    if (!params.toString()) return; // Already clean!

    const modeParam = params.get("mode");
    if (modeParam === "gst" || modeParam === "d2c" || modeParam === "vpob") {
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

    if (params.has("monthlyGmv")) setMonthlyGmv(Number(params.get("monthlyGmv")));
    if (params.has("targetStatesCount")) setTargetStatesCount(Number(params.get("targetStatesCount")));
    if (params.has("avgOrderValue")) setAvgOrderValue(Number(params.get("avgOrderValue")));
    if (params.has("primeUpliftPct")) setPrimeUpliftPct(Number(params.get("primeUpliftPct")));

    // Clean address bar back to pristine shwetranjan.com or shwetranjan.com/#calculators
    const cleanUrl = window.location.hash
      ? `${window.location.pathname}${window.location.hash}`
      : window.location.pathname;
    window.history.replaceState(null, "", cleanUrl);
  }, []);

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

  // VPOB Calculations
  const monthlyOrders = Math.max(1, Math.floor(monthlyGmv / avgOrderValue));
  const projectedSalesUplift = monthlyGmv * (primeUpliftPct / 100);
  const monthlyFreightSavings = monthlyOrders * 32;
  const annualVpobCost = targetStatesCount * 14999;
  const annualGrossGain = (projectedSalesUplift * 12 * 0.22) + (monthlyFreightSavings * 12);
  const netAnnualProfitExpansion = annualGrossGain - annualVpobCost;
  const roiMultiple = (annualGrossGain / Math.max(1, annualVpobCost)).toFixed(1);

  const handleCopyBreakdown = () => {
    let text = "";
    if (activeTab === "gst") {
      text = `GST Audit Breakdown (Taxamicus Calculator)\nGross Sales: ${formatINR(grossSales)}\nOutput Tax (${taxRate}%): ${formatINR(outputTax)}\nEligible ITC: ${formatINR(eligibleITC)}\nLocked GSTR-2B ITC: ${formatINR(lockedITC)}\nNet GST Payable: ${formatINR(netTaxPayable)}`;
    } else if (activeTab === "d2c") {
      text = `D2C Unit Economics Breakdown (Taxamicus Calculator)\nSelling Price: ${formatINR(sellingPrice)}\nCOGS: ${formatINR(cogs)}\nCAC: ${formatINR(cac)}\nCM3 Contribution: ${formatINR(cm3PerOrder)} (${cm3MarginPct.toFixed(1)}%)`;
    } else {
      text = `VPOB Prime 1-Day ROI Audit (Taxamicus Calculator)\nMonthly GMV: ${formatINR(monthlyGmv)}\nTarget Expansion States: ${targetStatesCount}\nProjected Sales Uplift: +${primeUpliftPct}% (${formatINR(projectedSalesUplift)}/mo)\nAnnual Courier Savings: ${formatINR(monthlyFreightSavings * 12)}\nNet Annual Profit Expansion: ${formatINR(netAnnualProfitExpansion)} (${roiMultiple}x ROI)`;
    }

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Generate serialized share link on click without cluttering default homepage URL
  const handleShareLink = () => {
    const params = new URLSearchParams();
    params.set("mode", activeTab);

    if (activeTab === "gst") {
      params.set("grossSales", grossSales.toString());
      params.set("taxRate", taxRate.toString());
      params.set("purchases", purchases.toString());
      params.set("delinquentVendorPct", delinquentVendorPct.toString());
    } else if (activeTab === "d2c") {
      params.set("sellingPrice", sellingPrice.toString());
      params.set("cogs", cogs.toString());
      params.set("prepaidPct", prepaidPct.toString());
      params.set("rtoPct", rtoPct.toString());
      params.set("cac", cac.toString());
      params.set("shippingCost", shippingCost.toString());
    } else {
      params.set("monthlyGmv", monthlyGmv.toString());
      params.set("targetStatesCount", targetStatesCount.toString());
      params.set("avgOrderValue", avgOrderValue.toString());
      params.set("primeUpliftPct", primeUpliftPct.toString());
    }

    const shareableUrl = `${window.location.origin}${window.location.pathname}?${params.toString()}#calculators`;
    navigator.clipboard.writeText(shareableUrl);
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
            <span>03. FINANCIAL & COMPLIANCE SIMULATORS</span>
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
                  : "text-zinc-300 hover:text-white"
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
                  : "text-zinc-300 hover:text-white"
              }`}
              data-cursor="CALCULATOR"
            >
              D2C Unit Economics
            </button>
            <button
              onClick={() => setActiveTab("vpob")}
              className={`px-5 py-2.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === "vpob"
                  ? "bg-cobalt-600 text-white shadow-lg shadow-cobalt-600/30"
                  : "text-zinc-300 hover:text-white"
              }`}
              data-cursor="CALCULATOR"
            >
              VPOB Prime ROI
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
            <p className="font-sans text-xs text-zinc-300 leading-relaxed">
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
                          : "bg-zinc-900 text-zinc-300 hover:bg-zinc-800"
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
                <div className="p-3.5 sm:p-4 rounded-xl bg-zinc-900 border border-zinc-800">
                  <span className="font-mono text-[10px] text-zinc-300 block mb-1">Output Tax Collected</span>
                  <span className="font-display text-lg sm:text-xl font-bold text-white tracking-tight whitespace-nowrap block">₹{outputTax.toLocaleString()}</span>
                </div>
                <div className="p-3.5 sm:p-4 rounded-xl bg-zinc-900 border border-zinc-800">
                  <span className="font-mono text-[10px] text-zinc-300 block mb-1">Total Eligible ITC</span>
                  <span className="font-display text-lg sm:text-xl font-bold text-emerald-400 tracking-tight whitespace-nowrap block">₹{eligibleITC.toLocaleString()}</span>
                </div>
              </div>

              {/* Locked Cash Alert Box */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-red-950/60 border border-red-800/80 mb-4 flex items-start gap-2.5">
                <ShieldAlert className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div className="text-xs font-sans text-red-200 leading-relaxed">
                  <span className="font-mono font-bold text-red-400 block mb-0.5 uppercase tracking-wider text-[11px]">
                    Blocked Working Capital Risk
                  </span>
                  <strong className="text-white font-mono font-bold">₹{lockedITC.toLocaleString()}</strong> in input tax credit is locked because {delinquentVendorPct}% of your vendors failed to file GSTR-1 on time.
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-zinc-900 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
                <span className="font-mono text-xs text-zinc-300">Monthly Tax Cash Outflow:</span>
                <span className="font-display text-xl sm:text-2xl font-black text-amber-400 tracking-tight whitespace-nowrap">₹{netTaxPayable.toLocaleString()}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-300">
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
            <p className="font-sans text-xs text-zinc-300 leading-relaxed">
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
                  <span className="text-zinc-300">Gross Selling Price:</span>
                  <span className="font-bold text-white">₹{sellingPrice}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-zinc-800">
                  <span className="text-zinc-300">Less Product COGS:</span>
                  <span className="text-red-400">-₹{cogs}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-zinc-800">
                  <span className="text-zinc-300">Freight & RTO Drag:</span>
                  <span className="text-red-400">-₹{weightedFreightPerOrder.toFixed(0)}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-zinc-800">
                  <span className="text-zinc-300">Customer Acquisition (CAC):</span>
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

            <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-300">
              <span>Shwet Ranjan D2C OS</span>
              <a href="#contact" className="text-emerald-400 hover:underline flex items-center gap-1 font-bold">
                <span>Inquire D2C Strategy</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* VPOB PRIME 1-DAY MULTI-STATE ROI CALCULATOR */}
      {activeTab === "vpob" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 rounded-3xl bg-[#121218] border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left Inputs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="border-b border-zinc-800 pb-4">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider font-semibold">
                Multi-State Hub Expansion
              </span>
              <h3 className="text-xl font-bold text-white mt-1">Amazon Prime 1-Day & VPOB Arbitrage</h3>
              <p className="text-sm text-zinc-300 mt-1">
                Calculate direct sales expansion from Prime badges in high-GMV states (MH, KA, DL, TN, HR) vs. virtual office GST compliance.
              </p>
            </div>

            {/* Input 1: Monthly GMV */}
            <div>
              <div className="flex justify-between items-center text-sm font-medium text-zinc-200 mb-2">
                <span>Current Monthly GMV</span>
                <span className="font-mono text-amber-400 font-bold">{formatINR(monthlyGmv)}</span>
              </div>
              <input
                type="range"
                min="300000"
                max="10000000"
                step="100000"
                value={monthlyGmv}
                onChange={(e) => setMonthlyGmv(Number(e.target.value))}
                className="w-full accent-amber-400 h-2 bg-zinc-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-zinc-300 mt-1 font-mono">
                <span>₹3L / mo</span>
                <span>₹50L / mo</span>
                <span>₹1 Cr / mo</span>
              </div>
            </div>

            {/* Input 2: Number of Target States */}
            <div>
              <div className="flex justify-between items-center text-sm font-medium text-zinc-200 mb-2">
                <span>Target Expansion States (VPOB Hubs)</span>
                <span className="font-mono text-amber-400 font-bold">{targetStatesCount} States</span>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    onClick={() => setTargetStatesCount(num)}
                    className={`py-2 text-xs font-mono rounded-lg border transition-all ${
                      targetStatesCount === num
                        ? "bg-amber-500/20 border-amber-500 text-amber-300 font-bold"
                        : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    {num} {num === 1 ? "State" : "States"}
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-zinc-300 mt-1.5 font-mono">
                Recommended initial hubs: Maharashtra (Bhiwandi), Karnataka (Bengaluru), Delhi NCR (Gurugram)
              </p>
            </div>

            {/* Input 3 & 4 Grid: AOV and Prime Uplift */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="flex justify-between items-center text-xs font-medium text-zinc-300 mb-2">
                  <span>Average Order Value (AOV)</span>
                  <span className="font-mono text-white font-bold">{formatINR(avgOrderValue)}</span>
                </div>
                <input
                  type="range"
                  min="400"
                  max="5000"
                  step="50"
                  value={avgOrderValue}
                  onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                  className="w-full accent-amber-400 h-1.5 bg-zinc-800 rounded-lg cursor-pointer"
                />
                <span className="text-[10px] text-zinc-300 font-mono mt-1 block">
                  Est. monthly orders: ~{monthlyOrders.toLocaleString()}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="flex justify-between items-center text-xs font-medium text-zinc-300 mb-2">
                  <span>Prime 1-Day Conversion Uplift</span>
                  <span className="font-mono text-emerald-400 font-bold">+{primeUpliftPct}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="45"
                  step="1"
                  value={primeUpliftPct}
                  onChange={(e) => setPrimeUpliftPct(Number(e.target.value))}
                  className="w-full accent-emerald-400 h-1.5 bg-zinc-800 rounded-lg cursor-pointer"
                />
                <span className="text-[10px] text-zinc-300 font-mono mt-1 block">
                  Industry avg: +25% to +35% Buy Box lift
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={handleCopyBreakdown}
                className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-xs font-mono rounded-lg border border-zinc-700 transition flex items-center gap-2"
              >
                {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <RefreshCw className="w-3.5 h-3.5" />}
                <span>{copied ? "Audit Copied!" : "Copy VPOB Breakdown"}</span>
              </button>

              <button
                onClick={handleShareLink}
                className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-xs font-mono rounded-lg border border-zinc-700 transition flex items-center gap-2"
              >
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>{shareCopied ? "Link Copied!" : "Share Calculation"}</span>
              </button>
            </div>
          </div>

          {/* Right Metrics Panel */}
          <div className="lg:col-span-5 bg-zinc-950/70 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between backdrop-blur-sm">
            <div>
              <span className="text-xs font-mono text-zinc-300 uppercase tracking-wider block">
                Net Annual Value Creation
              </span>

              {/* Primary Metric */}
              <div className="mt-3 p-4 rounded-xl bg-gradient-to-br from-amber-500/10 to-emerald-500/10 border border-amber-500/20">
                <span className="text-xs text-zinc-400 block">Annual Net Profit Expansion</span>
                <span className="text-3xl font-mono font-extrabold text-white mt-1 block">
                  {formatINR(netAnnualProfitExpansion)}
                </span>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold">
                    {roiMultiple}x Annual ROI
                  </span>
                  <span className="text-[11px] text-zinc-300">after all VPOB & compliance fees</span>
                </div>
              </div>

              {/* Breakdown List */}
              <div className="mt-4 space-y-3 font-mono text-xs">
                <div className="flex justify-between items-center py-2 border-b border-zinc-800/80">
                  <span className="text-zinc-300">Prime Sales Uplift / Month</span>
                  <span className="text-emerald-400 font-bold">+{formatINR(projectedSalesUplift)}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-zinc-800/80">
                  <span className="text-zinc-300">Local Fulfillment Savings / Yr</span>
                  <span className="text-emerald-400 font-bold">+{formatINR(monthlyFreightSavings * 12)}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-zinc-800/80">
                  <span className="text-zinc-300">Annual VPOB & Filing Cost</span>
                  <span className="text-red-400 font-bold">-{formatINR(annualVpobCost)}</span>
                </div>

                <div className="flex justify-between items-center py-2 text-zinc-300">
                  <span>Intra-state Delivery Time</span>
                  <span className="text-amber-300 font-bold">1 Day vs 4-5 Days National</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-300">
              <span>Taxamicus VPOB OS</span>
              <a href="#contact" className="text-amber-400 hover:underline flex items-center gap-1 font-bold">
                <span>Deploy VPOB Hubs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
