"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, GraduationCap, Globe, CheckCircle2 } from "lucide-react";
import { doctorData } from "@/data/doctor";
import FadeUp from "@/components/motion/FadeUp";
import ImageReveal from "@/components/motion/ImageReveal";

export default function DoctorPreview() {
  return (
    <section className="py-24 sm:py-32 bg-warm-bg overflow-hidden relative">
      {/* Background soft ambient decoration */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Doctor Editorial Visual */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <FadeUp distance={30} duration={0.8}>
              <div className="relative mx-auto max-w-md">
                {/* Secondary Background Architectural Shape */}
                <div className="absolute -top-6 -left-6 w-full h-full rounded-[40px] bg-teal-100/60 -z-10 transform -rotate-2" />

                {/* Layered Primary Frame */}
                <ImageReveal className="aspect-[3/4] rounded-[36px] shadow-floating border-4 border-white bg-slate-100">
                  <Image
                    src={doctorData.secondaryImage}
                    alt={`${doctorData.name} - Consultation`}
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </ImageReveal>

                {/* Floating Philosophy Card */}
                <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-floating border border-slate-200/80 max-w-[260px]">
                  <p className="font-serif italic text-xs text-slate-700 leading-relaxed">
                    &ldquo;When a physician truly listens, diagnosis becomes clearer and health becomes enduring.&rdquo;
                  </p>
                  <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                    <span className="font-mono text-[10px] text-teal-600 font-semibold tracking-wider uppercase">
                      Clinical Ethos
                    </span>
                    <span className="text-[10px] text-slate-400 font-serif italic">
                      — Dr. Vance
                    </span>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Right Column: Narrative & Credentials */}
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
            <FadeUp distance={25}>
              <div className="space-y-3">
                <span className="font-mono text-xs uppercase tracking-widest text-teal-600 font-semibold">
                  Meet Your Doctor
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-tight">
                  {doctorData.name}
                  <span className="block text-xl sm:text-2xl text-slate-400 font-light font-serif mt-1">
                    Specialist in {doctorData.specialty}
                  </span>
                </h2>
              </div>
            </FadeUp>

            <FadeUp distance={25} delay={0.15}>
              <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
                {doctorData.bio.summary}
              </p>
            </FadeUp>

            {/* Structured Credentials Grid */}
            <FadeUp distance={25} delay={0.25}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-slate-200/70 shadow-subtle space-y-1.5">
                  <div className="flex items-center gap-2 text-teal-600 font-mono text-xs font-semibold">
                    <GraduationCap className="w-4 h-4" />
                    <span>Education (Demo)</span>
                  </div>
                  <p className="text-sm font-medium text-slate-800">
                    Johns Hopkins School of Medicine
                  </p>
                  <p className="text-xs text-slate-500">
                    Doctor of Medicine (M.D.) with Honors
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/70 shadow-subtle space-y-1.5">
                  <div className="flex items-center gap-2 text-teal-600 font-mono text-xs font-semibold">
                    <Award className="w-4 h-4" />
                    <span>Residency & Fellowship</span>
                  </div>
                  <p className="text-sm font-medium text-slate-800">
                    Stanford Medical Center
                  </p>
                  <p className="text-xs text-slate-500">
                    Chief Resident, Internal Medicine
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/70 shadow-subtle space-y-1.5">
                  <div className="flex items-center gap-2 text-teal-600 font-mono text-xs font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Board Certifications</span>
                  </div>
                  <p className="text-sm font-medium text-slate-800">
                    ABIM Internal Medicine & FACP
                  </p>
                  <p className="text-xs text-slate-500">
                    Metabolic & Cardiovascular Focus
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/70 shadow-subtle space-y-1.5">
                  <div className="flex items-center gap-2 text-teal-600 font-mono text-xs font-semibold">
                    <Globe className="w-4 h-4" />
                    <span>Consultation Languages</span>
                  </div>
                  <p className="text-sm font-medium text-slate-800">
                    English & French
                  </p>
                  <p className="text-xs text-slate-500">
                    Full clinical fluency
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Signature & Link to Full Profile */}
            <FadeUp distance={25} delay={0.35}>
              <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-slate-200/80">
                <div>
                  <p className="font-serif italic text-2xl text-teal-700 tracking-wide select-none">
                    {doctorData.signatureText}
                  </p>
                  <p className="text-[11px] font-mono text-slate-400 uppercase tracking-widest mt-0.5">
                    Founding Physician &bull; Aura Pavilion
                  </p>
                </div>

                <Link
                  href="/doctor"
                  data-cursor="view"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700 group transition-colors"
                >
                  <span>Explore Full Physician Profile & Research</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeUp>

          </div>

        </div>
      </div>
    </section>
  );
}
