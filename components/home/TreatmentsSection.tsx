"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { treatmentsData } from "@/data/treatments";
import FadeUp from "@/components/motion/FadeUp";

export default function TreatmentsSection() {
  return (
    <section id="treatments" className="py-24 sm:py-32 bg-warm-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
          <FadeUp distance={20}>
            <span className="font-mono text-xs uppercase tracking-widest text-teal-600 font-semibold">
              Specialties & Clinical Focus
            </span>
          </FadeUp>
          <FadeUp distance={20} delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight">
              Investigative Protocols,{" "}
              <span className="italic text-teal-600">Rooted in Science</span>
            </h2>
          </FadeUp>
          <FadeUp distance={20} delay={0.2}>
            <p className="text-base text-slate-600 font-sans leading-relaxed">
              Targeted clinical interventions engineered to address cardiovascular aging, bioenergetic decline, and metabolic resistance through multi-system biomarker analysis.
            </p>
          </FadeUp>
        </div>

        {/* Editorial Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {treatmentsData.map((item, index) => {
            return (
              <FadeUp key={item.code} distance={25} delay={0.1 * index}>
                <div className="group relative h-[420px] rounded-[32px] overflow-hidden bg-white border border-slate-200/80 shadow-soft hover:shadow-floating transition-all duration-500 flex flex-col justify-between p-8">
                  
                  {/* Background Image with Hover Zoom */}
                  <div className="absolute inset-0 -z-10 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-110 opacity-15 group-hover:opacity-25 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/95 group-hover:from-white/90 group-hover:via-white/70 transition-colors duration-500" />
                  </div>

                  {/* Top Block Details */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-sm font-bold text-teal-600 tracking-wider">
                        {item.number}
                      </span>
                      <span className="font-mono text-[11px] uppercase tracking-widest px-3 py-1 rounded-full bg-slate-100/90 text-slate-600 border border-slate-200/60 font-medium">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-normal text-slate-900 tracking-tight leading-snug group-hover:text-teal-700 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                      {item.summary}
                    </p>
                  </div>

                  {/* Bottom Action & Key Point */}
                  <div className="pt-6 border-t border-slate-200/60 space-y-4">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                      {item.recommendedFrequency}
                    </p>

                    <Link
                      href="/appointment"
                      data-cursor="book"
                      className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-teal-600 group-hover:text-teal-700 transition-colors"
                    >
                      <span>Inquire Protocol</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                    </Link>
                  </div>

                </div>
              </FadeUp>
            );
          })}
        </div>

      </div>
    </section>
  );
}
