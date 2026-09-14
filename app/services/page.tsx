"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Check, Sparkles, Stethoscope, ArrowUpRight } from "lucide-react";
import { servicesData } from "@/data/services";
import FadeUp from "@/components/motion/FadeUp";
import QuickBookingCTA from "@/components/home/QuickBookingCTA";

const categories = ["All Programs", "Preventive Care", "Metabolic Health", "Diagnostics", "Executive Medicine"];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Programs");

  const filteredServices = selectedCategory === "All Programs"
    ? servicesData
    : servicesData.filter((s) => s.category.includes(selectedCategory.split(" ")[0]));

  return (
    <div className="pt-28 sm:pt-36 pb-20 bg-warm-bg">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <FadeUp distance={20}>
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-teal-600 font-semibold">
              Clinical Programs & Diagnostic Panels
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-normal text-slate-900 tracking-tight leading-[1.15]">
              Diagnostic Depth,{" "}
              <span className="italic text-teal-600">Personalized Protocols</span>
            </h1>
            <p className="text-lg text-slate-600 font-sans leading-relaxed pt-2">
              Every clinical program at Aura Medical Pavilion is built upon comprehensive laboratory biomarker mapping, continuous physician oversight, and lifestyle architecture.
            </p>
          </div>
        </FadeUp>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pt-8 pb-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-teal-500 text-white shadow-subtle"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <FadeUp key={service.slug} distance={25} delay={0.08 * index}>
              <div className="h-full flex flex-col justify-between rounded-[32px] overflow-hidden bg-white border border-slate-200/80 shadow-soft hover:shadow-floating transition-all duration-500 group">
                
                {/* Card Top: Image & Highlight Badge */}
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-teal-700 font-bold border border-slate-200/60 shadow-sm">
                        {service.number} &bull; {service.category}
                      </span>
                    </div>

                    {service.highlightBadge && (
                      <div className="absolute top-4 right-4">
                        <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-teal-500 text-white font-medium shadow-sm">
                          {service.highlightBadge}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="p-8 space-y-4">
                    <div className="space-y-1.5">
                      <h2 className="font-serif text-2xl font-normal text-slate-900 tracking-tight leading-snug group-hover:text-teal-700 transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-xs font-mono text-slate-400">
                        {service.deliveryMode} &bull; {service.duration}
                      </p>
                    </div>

                    <p className="text-sm text-slate-500 font-sans leading-relaxed line-clamp-3">
                      {service.shortDescription}
                    </p>

                    {/* Objectives snippets */}
                    <div className="pt-2 space-y-2">
                      {service.clinicalObjectives.slice(0, 2).map((obj) => (
                        <div key={obj} className="flex items-start gap-2 text-xs text-slate-600">
                          <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{obj}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Detail Link */}
                <div className="px-8 pb-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    data-cursor="explore"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-teal-600 group-hover:text-teal-700 transition-colors"
                  >
                    <span>View Protocol Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-teal-500 group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white" />
                  </div>
                </div>

              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <QuickBookingCTA />
    </div>
  );
}
