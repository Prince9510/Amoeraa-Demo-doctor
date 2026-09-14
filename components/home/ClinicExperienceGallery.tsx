"use client";

import Image from "next/image";
import { Sparkles, Compass } from "lucide-react";
import { clinicData } from "@/data/clinic";
import FadeUp from "@/components/motion/FadeUp";

export default function ClinicExperienceGallery() {
  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <FadeUp distance={20}>
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-teal-600 font-semibold">
                Clinic Experience & Architecture
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight">
                Designed for Serenity,{" "}
                <span className="italic text-teal-600">Equipped for Precision</span>
              </h2>
            </div>
          </FadeUp>

          <FadeUp distance={20} delay={0.15}>
            <p className="text-sm text-slate-500 max-w-md leading-relaxed font-sans">
              Every detail of Aura Medical Pavilion was conceived to eliminate clinical apprehension—creating an acoustic, architectural sanctuary where physician and patient focus solely on wellness.
            </p>
          </FadeUp>
        </div>

        {/* Asymmetrical Architectural Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Hero Facility Card (Large 7 cols) */}
          <div className="md:col-span-7">
            <FadeUp distance={25} duration={0.8}>
              <div
                data-cursor="explore"
                className="group relative h-[480px] sm:h-[540px] rounded-[36px] overflow-hidden bg-slate-100 shadow-soft hover:shadow-floating transition-all duration-700"
              >
                <Image
                  src={clinicData.facilities[0].image}
                  alt={clinicData.facilities[0].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

                <div className="absolute bottom-8 left-8 right-8 text-white space-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-teal-200 inline-block">
                    {clinicData.facilities[0].category}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-white">
                    {clinicData.facilities[0].title}
                  </h3>
                  <p className="text-sm text-slate-300 max-w-lg leading-relaxed">
                    {clinicData.facilities[0].description}
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Secondary Stack (5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-6 justify-between">
            {/* Facility Card 2 */}
            <FadeUp distance={25} delay={0.1} duration={0.8}>
              <div
                data-cursor="explore"
                className="group relative h-[255px] rounded-[32px] overflow-hidden bg-slate-100 shadow-soft hover:shadow-floating transition-all duration-700"
              >
                <Image
                  src={clinicData.facilities[1].image}
                  alt={clinicData.facilities[1].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-teal-200">
                    {clinicData.facilities[1].category}
                  </span>
                  <h4 className="font-serif text-xl font-normal text-white">
                    {clinicData.facilities[1].title}
                  </h4>
                  <p className="text-xs text-slate-300 line-clamp-2">
                    {clinicData.facilities[1].description}
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Facility Card 3 */}
            <FadeUp distance={25} delay={0.2} duration={0.8}>
              <div
                data-cursor="explore"
                className="group relative h-[255px] rounded-[32px] overflow-hidden bg-slate-100 shadow-soft hover:shadow-floating transition-all duration-700"
              >
                <Image
                  src={clinicData.facilities[2].image}
                  alt={clinicData.facilities[2].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-teal-200">
                    {clinicData.facilities[2].category}
                  </span>
                  <h4 className="font-serif text-xl font-normal text-white">
                    {clinicData.facilities[2].title}
                  </h4>
                  <p className="text-xs text-slate-300 line-clamp-2">
                    {clinicData.facilities[2].description}
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>

        </div>

        {/* Bottom Atmospheric Banner */}
        <div className="mt-8 p-6 sm:p-8 rounded-[28px] bg-warm-bg border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-600 shrink-0">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <p className="font-serif text-lg font-normal text-slate-900">
                A Private Sanctuary in the Medical District
              </p>
              <p className="text-xs text-slate-500 font-sans">
                Acoustic insulation, private express elevator arrival, and natural botanical filtration.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="font-mono text-xs text-slate-400">
              Demo City Pavilion 4B
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
