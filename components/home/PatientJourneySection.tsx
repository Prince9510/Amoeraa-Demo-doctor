"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { clinicData } from "@/data/clinic";
import FadeUp from "@/components/motion/FadeUp";

export default function PatientJourneySection() {
  const [selectedPillar, setSelectedPillar] = useState<number>(0);

  return (
    <section className="py-24 sm:py-32 bg-warm-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4 text-center mx-auto">
          <FadeUp distance={20}>
            <span className="font-mono text-xs uppercase tracking-widest text-teal-600 font-semibold">
              The Consultation Framework
            </span>
          </FadeUp>
          <FadeUp distance={20} delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight">
              A Deliberate Process of Discovery
            </h2>
          </FadeUp>
          <FadeUp distance={20} delay={0.2}>
            <p className="text-base text-slate-500 font-sans leading-relaxed">
              Every therapeutic relationship at Aura Medical Pavilion unfolds through four intentional phases designed to uncover the complete biological picture.
            </p>
          </FadeUp>
        </div>

        {/* 4 Pillars Interactive Progression: LISTEN -> UNDERSTAND -> PLAN -> CARE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: 4 Words Vertical Navigation */}
          <div className="lg:col-span-5 space-y-3">
            {clinicData.pillars.map((pillar, idx) => {
              const isActive = selectedPillar === idx;

              return (
                <button
                  key={pillar.word}
                  onClick={() => setSelectedPillar(idx)}
                  className={`w-full text-left p-6 sm:p-7 rounded-[28px] transition-all duration-300 border ${
                    isActive
                      ? "bg-white border-teal-500/40 shadow-floating"
                      : "bg-white/50 hover:bg-white border-transparent hover:border-slate-200/80"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-4">
                      <span
                        className={`font-mono text-xs font-bold transition-colors ${
                          isActive ? "text-teal-600" : "text-slate-400"
                        }`}
                      >
                        {pillar.step}
                      </span>
                      <span
                        className={`font-serif text-2xl sm:text-3xl font-normal tracking-tight transition-colors ${
                          isActive ? "text-slate-900 font-semibold" : "text-slate-400"
                        }`}
                      >
                        {pillar.word}
                      </span>
                    </div>

                    <span
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        isActive ? "bg-teal-500 scale-100" : "bg-slate-200 scale-75"
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Active Pillar Narrative Card */}
          <div className="lg:col-span-7">
            <motion.div
              key={selectedPillar}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 sm:p-12 rounded-[36px] bg-white border border-slate-200/80 shadow-soft space-y-6 relative overflow-hidden"
            >
              {/* Subtle background step number watermark */}
              <span
                aria-hidden="true"
                className="absolute right-6 -bottom-8 font-serif text-9xl font-bold text-slate-100 select-none pointer-events-none -z-0"
              >
                {clinicData.pillars[selectedPillar].step}
              </span>

              <div className="relative z-10 space-y-4">
                <span className="font-mono text-xs uppercase tracking-widest text-teal-600 font-semibold">
                  Phase {clinicData.pillars[selectedPillar].step} &bull; Clinical Method
                </span>

                <h3 className="font-serif text-2xl sm:text-4xl font-normal text-slate-900 tracking-tight">
                  {clinicData.pillars[selectedPillar].title}
                </h3>

                <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
                  {clinicData.pillars[selectedPillar].description}
                </p>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Aura Medical Pavilion Protocol</span>
                  <span className="text-teal-600 font-semibold">
                    Dr. Julian Vance Clinical Supervision
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
