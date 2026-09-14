"use client";

import { motion } from "framer-motion";
import FadeUp from "@/components/motion/FadeUp";

export default function PhilosophySection() {
  return (
    <section className="py-28 sm:py-36 bg-slate-900 text-white relative overflow-hidden">
      {/* Delicate background ambient glows */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-teal-500/10 blur-[140px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-sage-500/10 blur-[130px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-10">
        
        {/* Eyebrow */}
        <FadeUp distance={20}>
          <span className="inline-block font-mono text-xs uppercase tracking-widest text-teal-300 font-semibold px-3 py-1 rounded-full bg-teal-900/60 border border-teal-800">
            Medical Philosophy
          </span>
        </FadeUp>

        {/* Big Editorial Statement */}
        <FadeUp distance={30} duration={0.9}>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.15] text-slate-100 max-w-5xl mx-auto">
            HEALTHCARE SHOULD FEEL{" "}
            <span className="italic font-light text-teal-300">
              PERSONAL.
            </span>
          </h2>
        </FadeUp>

        {/* Supporting Text */}
        <FadeUp distance={25} delay={0.2} duration={0.8}>
          <p className="font-serif italic text-lg sm:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            &ldquo;Every consultation begins with listening, understanding, and creating a care approach that works for the individual.&rdquo;
          </p>
        </FadeUp>

        {/* Signature Attribution */}
        <FadeUp distance={20} delay={0.35}>
          <div className="pt-4 flex flex-col items-center justify-center space-y-1">
            <span className="font-serif italic text-xl text-teal-300">
              Dr. Julian Vance
            </span>
            <span className="font-mono text-[11px] text-slate-400 uppercase tracking-widest">
              Founder & Lead Physician &bull; Aura Medical Pavilion
            </span>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
