"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check, ArrowUp, Linkedin, Twitter, MessageSquare, Globe, Zap } from "lucide-react";

export default function ContactFooter() {
  const [copied, setCopied] = useState(false);
  const [kolkataTime, setKolkataTime] = useState("");

  const email = "info@shwetranjan.com";

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setKolkataTime(new Date().toLocaleTimeString("en-US", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value || "";
    const senderEmail = (form.elements.namedItem("email") as HTMLInputElement)?.value || "";
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || "";

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email: senderEmail, message }),
      });
      setSubmitted(true);
      form.reset();
    } catch (err) {
      console.error("Form submit error:", err);
      window.location.href = `mailto:${email}?subject=Inquiry%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="pt-24 pb-12 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10 relative text-white">
      {/* Contact Section Box */}
      <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-[#121218] border border-white/10 shadow-2xl mb-16 relative overflow-hidden">
        {/* Decorative ambient glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-cobalt-600/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-3xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cobalt-500/10 border border-cobalt-500/20 text-xs font-mono text-cobalt-400 font-bold uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5" />
            <span>09. DIRECT CHANNEL DOCK</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-black tracking-tight leading-tight text-white">
            Let's build something <span className="bg-gradient-to-r from-cobalt-400 to-emerald-400 bg-clip-text text-transparent">enduring.</span>
          </h2>

          <p className="font-sans text-zinc-300 text-base sm:text-lg leading-relaxed">
            Whether you need strategic advisory on business operations & GST compliance, full-stack software development, or investment valuation insights—feel free to reach out directly.
          </p>

          {/* Interactive Email Copy Card & Direct Channels */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <div className="flex-1 p-4 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 overflow-hidden">
                <Mail className="w-5 h-5 text-cobalt-400 shrink-0" />
                <span className="font-mono text-sm sm:text-base text-zinc-200 truncate">{email}</span>
              </div>
              <button
                onClick={handleCopyEmail}
                className="px-4 py-2 rounded-xl bg-cobalt-600 hover:bg-cobalt-500 transition-colors text-xs font-mono font-bold uppercase tracking-wider text-white flex items-center gap-1.5 shrink-0 shadow-md"
                data-cursor="COPY"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* WhatsApp Direct Ping */}
            <a
              href="https://wa.me/?text=Hello%20Shwet%2C%20I%20visited%20your%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 transition-all text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30"
              data-cursor="WHATSAPP"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Ping</span>
            </a>
          </div>

          {/* Direct Message Form */}
          <div className="pt-6 border-t border-zinc-800">
            <h4 className="font-display text-lg font-bold text-white mb-3">
              Or Send a Direct Inquiry Message:
            </h4>

            {submitted ? (
              <div className="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-mono text-xs font-bold flex items-center gap-3 animate-fadeIn">
                <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <span className="block text-white font-bold text-sm">Message Dispatched!</span>
                  <span className="text-emerald-300 text-[11px]">Your message was delivered to info@shwetranjan.com. Shwet will respond directly to your email shortly.</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name / Company"
                    className="px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-cobalt-500 focus:outline-none text-xs font-mono text-white placeholder-zinc-500"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email Address"
                    className="px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-cobalt-500 focus:outline-none text-xs font-mono text-white placeholder-zinc-500"
                  />
                </div>
                <textarea
                  name="message"
                  required
                  rows={3}
                  placeholder="Brief project details, GST advice request, or collaboration inquiry..."
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-cobalt-500 focus:outline-none text-xs font-mono text-white placeholder-zinc-500 resize-none"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-6 py-3 rounded-xl bg-cobalt-600 hover:bg-cobalt-500 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-cobalt-600/30 flex items-center gap-2"
                >
                  <span>{submitting ? "Dispatching to Inbox..." : "Dispatch Message"}</span>
                  <Zap className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400 pt-6 border-t border-zinc-800">
        <div className="flex items-center gap-4">
          <span className="font-bold text-white">SHWET RANJAN © 2026</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline text-zinc-400">Interactive Tech Showcase</span>
        </div>

        {/* Live Kolkata Time Indicator */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300">
          <Globe className="w-3.5 h-3.5 text-cobalt-400" />
          <span>Kolkata, IN:</span>
          <span className="font-bold text-emerald-400">{kolkataTime || "19:50 IST"}</span>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-zinc-900 hover:bg-cobalt-600 text-white transition-all shadow-md border border-zinc-800"
          aria-label="Back to Top"
          data-cursor="TOP"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}
