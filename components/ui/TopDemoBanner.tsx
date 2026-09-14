"use client";

import { useState } from "react";
import { Sparkles, X } from "lucide-react";

export default function TopDemoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-teal-900 text-teal-100 text-xs px-4 py-2 border-b border-teal-800/60 transition-all z-50 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-teal-800 text-teal-200 font-mono text-[10px] tracking-wider uppercase">
            <Sparkles className="w-3 h-3 text-sage-300" />
            Amperaa Portfolio Demo
          </span>
          <span className="text-teal-200/80 hidden sm:inline">•</span>
          <p className="text-teal-200/90 leading-tight">
            Fictional doctor & clinic practice. Designed to showcase frontend craftsmanship, luxury healthcare UI/UX & motion design.
          </p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          aria-label="Dismiss demo notice"
          className="text-teal-300/70 hover:text-white transition-colors p-1 -mr-1 rounded-md"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
