"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";
import FadeUp from "@/components/motion/FadeUp";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.items.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.items.length - 1 ? 0 : prev + 1));
  };

  const current = testimonialsData.items[currentIndex];

  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Demo Label */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
          <FadeUp distance={20}>
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200/80 font-mono text-xs uppercase tracking-widest font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                <span>{testimonialsData.sectionTag}</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight">
                {testimonialsData.sectionTitle}
              </h2>
            </div>
          </FadeUp>

          <FadeUp distance={20} delay={0.15}>
            <p className="text-xs font-mono text-slate-400 max-w-xs sm:text-right">
              {testimonialsData.demoNotice}
            </p>
          </FadeUp>
        </div>

        {/* Large Editorial Quotation Card */}
        <div className="relative p-8 sm:p-14 lg:p-16 rounded-[40px] bg-warm-bg border border-slate-200/80 shadow-soft">
          
          <Quote className="w-12 h-12 text-teal-500/20 mb-6" />

          <div className="min-h-[160px] sm:min-h-[140px] flex items-center">
            <blockquote className="font-serif text-xl sm:text-3xl lg:text-4xl text-slate-800 leading-snug tracking-tight font-normal">
              &ldquo;{current.quote}&rdquo;
            </blockquote>
          </div>

          {/* Author & Controls */}
          <div className="mt-10 pt-8 border-t border-slate-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <p className="font-serif text-lg font-bold text-slate-900">
                {current.author}
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-500 font-sans mt-0.5">
                <span>{current.context}</span>
                <span>&bull;</span>
                <span className="text-teal-600 font-mono">{current.programType}</span>
                <span>&bull;</span>
                <span className="font-mono text-slate-400">{current.timeframe}</span>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center gap-3 self-end sm:self-auto">
              <button
                onClick={prevTestimonial}
                aria-label="Previous sample feedback"
                className="w-11 h-11 rounded-full bg-white hover:bg-teal-500 hover:text-white text-slate-700 border border-slate-200 shadow-subtle flex items-center justify-center transition-all duration-200"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <span className="font-mono text-xs text-slate-400 px-2">
                0{currentIndex + 1} / 0{testimonialsData.items.length}
              </span>

              <button
                onClick={nextTestimonial}
                aria-label="Next sample feedback"
                className="w-11 h-11 rounded-full bg-white hover:bg-teal-500 hover:text-white text-slate-700 border border-slate-200 shadow-subtle flex items-center justify-center transition-all duration-200"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
