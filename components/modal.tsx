"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  category?: string;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, category, children }: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
            className="relative z-10 w-full max-w-4xl max-h-[85vh] flex flex-col bg-[#121218] rounded-3xl border border-white/10 shadow-2xl overflow-hidden text-white"
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-5 bg-[#181822]/90 backdrop-blur-md border-b border-zinc-800">
              <div>
                {category && (
                  <span className="font-mono text-xs uppercase tracking-widest text-cobalt-400 font-bold mb-1 block">
                    {category}
                  </span>
                )}
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {title}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 md:p-10 overflow-y-auto space-y-6 text-zinc-200 leading-relaxed">
              {children}
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 z-20 px-6 py-4 bg-[#181822] border-t border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-300">
              <span>SHWET RANJAN — SYSTEM SPECIFICATION</span>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-cobalt-600 text-white rounded-xl hover:bg-cobalt-500 transition-colors font-mono text-xs font-bold"
              >
                Close View
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
