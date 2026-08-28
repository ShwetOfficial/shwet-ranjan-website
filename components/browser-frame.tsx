"use client";

import React from "react";
import { Lock, ExternalLink, RefreshCw, ShieldCheck } from "lucide-react";

interface BrowserFrameProps {
  url: string;
  title?: string;
  badgeText?: string;
  children: React.ReactNode;
  externalUrl?: string;
  headerRightContent?: React.ReactNode;
}

export default function BrowserFrame({
  url,
  title,
  badgeText,
  children,
  externalUrl,
  headerRightContent,
}: BrowserFrameProps) {
  return (
    <div className="rounded-2xl overflow-hidden bg-[#121218] border border-white/10 shadow-2xl shadow-black/80 transition-all duration-300 group-hover:border-cobalt-500/50">
      {/* macOS Browser Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#181822] border-b border-white/10 select-none">
        {/* macOS Control Dots */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-600/40" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80 border border-yellow-600/40" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/40" />
        </div>

        {/* Address Bar */}
        <div className="flex-1 max-w-xl mx-4 px-3 py-1.5 rounded-lg bg-black/40 border border-white/10 flex items-center justify-between text-xs font-mono text-zinc-300">
          <div className="flex items-center gap-2 truncate">
            <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
            <span className="text-emerald-400 font-semibold">https://</span>
            <span className="truncate">{url}</span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {badgeText && (
              <span className="px-2 py-0.5 rounded-full bg-cobalt-500/20 text-cobalt-400 text-[10px] font-semibold uppercase tracking-wider border border-cobalt-500/30">
                {badgeText}
              </span>
            )}
            <RefreshCw className="w-3 h-3 text-zinc-500 hover:text-zinc-300 cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Header Right Action */}
        <div className="flex items-center gap-2">
          {headerRightContent}
          {externalUrl && (
            <a
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded-md bg-cobalt-600/20 hover:bg-cobalt-600 text-cobalt-400 hover:text-white border border-cobalt-500/30 text-xs font-mono font-medium transition-all flex items-center gap-1.5"
              data-cursor="LAUNCH"
            >
              <span>Visit Site</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>

      {/* Main Browser Viewport */}
      <div className="p-5 sm:p-6 bg-[#0e0e14] relative text-zinc-100 overflow-hidden">
        {children}
      </div>
    </div>
  );
}
