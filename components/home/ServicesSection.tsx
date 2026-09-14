"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight, Check } from "lucide-react";
import { servicesData } from "@/data/services";
import FadeUp from "@/components/motion/FadeUp";

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<number>(0);

  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <FadeUp distance={20}>
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-teal-600 font-semibold">
                Clinical Programs & Services
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight">
                Comprehensive Care,{" "}
                <span className="italic text-teal-600">Tailored to You</span>
              </h2>
            </div>
          </FadeUp>

          <FadeUp distance={20} delay={0.15}>
            <Link
              href="/services"
              data-cursor="explore"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-teal-600 transition-colors group"
            >
              <span>View All Programs & Diagnostic Panels</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeUp>
        </div>

        {/* Interactive Editorial Services Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Interactive Editorial Row List */}
          <div className="lg:col-span-7 divide-y divide-slate-200/80">
            {servicesData.map((service, index) => {
              const isHovered = activeService === index;

              return (
                <div
                  key={service.slug}
                  onMouseEnter={() => setActiveService(index)}
                  className={`group py-6 sm:py-8 transition-all duration-300 cursor-pointer ${
                    isHovered ? "bg-slate-50/70 px-4 sm:px-6 rounded-2xl" : "px-2"
                  }`}
                >
                  <Link href={`/services/${service.slug}`} className="block">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-baseline gap-4 sm:gap-6">
                        <span
                          className={`font-mono text-sm sm:text-base font-semibold transition-colors duration-300 ${
                            isHovered ? "text-teal-600 font-bold" : "text-slate-400"
                          }`}
                        >
                          {service.number}
                        </span>
                        <div>
                          <h3
                            className={`font-serif text-xl sm:text-2xl lg:text-3xl transition-all duration-300 ${
                              isHovered ? "text-teal-600 translate-x-1" : "text-slate-800"
                            }`}
                          >
                            {service.title}
                          </h3>
                          <p className="text-xs font-mono text-slate-400 mt-1 uppercase tracking-wider">
                            {service.category} &bull; {service.duration}
                          </p>
                        </div>
                      </div>

                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
                          isHovered
                            ? "bg-teal-500 text-white translate-x-1 rotate-45"
                            : "bg-slate-100 text-slate-400"
                        }`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Expandable description on hover */}
                    <AnimatePresence initial={false}>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden pt-4 pl-8 sm:pl-12"
                        >
                          <p className="text-sm text-slate-600 font-sans leading-relaxed max-w-xl">
                            {service.shortDescription}
                          </p>

                          <div className="flex flex-wrap gap-2 pt-3">
                            {service.clinicalObjectives.slice(0, 2).map((obj) => (
                              <span
                                key={obj}
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-slate-200 text-[11px] text-slate-600 font-medium"
                              >
                                <Check className="w-3 h-3 text-teal-600" />
                                {obj}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Right: Dynamic Sticky Image & Details Preview */}
          <div className="lg:col-span-5 hidden lg:block sticky top-28">
            <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden bg-slate-100 shadow-floating border-4 border-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={servicesData[activeService].slug}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={servicesData[activeService].image}
                    alt={servicesData[activeService].title}
                    fill
                    sizes="500px"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 text-white p-5 rounded-2xl bg-slate-900/70 backdrop-blur-md border border-white/10 space-y-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-teal-300">
                      {servicesData[activeService].category}
                    </span>
                    <h4 className="font-serif text-xl font-bold text-white">
                      {servicesData[activeService].title}
                    </h4>
                    <p className="text-xs text-slate-300 line-clamp-2">
                      {servicesData[activeService].subtitle}
                    </p>
                    <div className="pt-2 flex items-center justify-between text-xs text-teal-200 font-mono">
                      <span>{servicesData[activeService].duration}</span>
                      <Link
                        href={`/services/${servicesData[activeService].slug}`}
                        className="underline hover:text-white transition-colors"
                      >
                        Read Full Protocol &rarr;
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
