"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, ShieldCheck, Clock, Sparkles } from "lucide-react";
import { doctorData } from "@/data/doctor";
import MagneticButton from "@/components/motion/MagneticButton";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden bg-warm-bg">
      {/* Calm Ambient Organic Background Effect */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Radial Mint Glow */}
        <div className="absolute top-1/4 -left-32 w-[550px] h-[550px] rounded-full bg-sage-200/40 blur-[130px] -z-10" />
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full bg-teal-100/50 blur-[150px] -z-10" />
        
        {/* Delicate Medical Geometry Lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.035]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="medical-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#0F5C5E" strokeWidth="1" />
              <circle cx="24" cy="24" r="1.5" fill="#0F5C5E" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#medical-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-700"
            >
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest font-medium">
                Private Medical Practice
              </span>
            </motion.div>

            {/* Main Editorial Headline */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-slate-900 tracking-tight leading-[1.1]"
              >
                Compassionate care.{" "}
                <span className="italic font-light block text-teal-600">
                  Backed by expertise.
                </span>
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-slate-500 max-w-xl font-sans leading-relaxed"
            >
              Personalized medical care designed around your health, comfort, and long-term wellbeing. Unhurried diagnostic evaluations and proactive longevity architecture.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <MagneticButton strength={0.15}>
                <Link
                  href="/appointment"
                  data-cursor="book"
                  className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-teal-500 hover:bg-teal-600 text-white font-medium text-sm sm:text-base tracking-wide shadow-soft hover:shadow-floating transition-all duration-300 group"
                >
                  <Calendar className="w-4 h-4 text-teal-200" />
                  <span>Book an Appointment</span>
                  <ArrowRight className="w-4 h-4 -translate-x-1 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </MagneticButton>

              <MagneticButton strength={0.15}>
                <Link
                  href="/services"
                  data-cursor="explore"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-700 hover:text-teal-600 font-medium text-sm sm:text-base border border-slate-200/80 shadow-subtle hover:border-slate-300 transition-all duration-300"
                >
                  <span>Explore Services</span>
                </Link>
              </MagneticButton>
            </motion.div>

            {/* Quick Credentials / Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.55 }}
              className="pt-4 sm:pt-6 flex items-center gap-6 text-xs text-slate-500 border-t border-slate-200/60 font-sans"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-500" />
                <span>ABIM Certified Lead Physician</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal-500" />
                <span>60-Min In-Depth Consultations</span>
              </div>
            </motion.div>
          </div>

          {/* Right Hero Visual (Doctor Portrait & Floating Cards) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Organic Soft Shape Container */}
              <div className="relative aspect-[4/5] rounded-[36px] overflow-hidden bg-slate-100 shadow-floating border-4 border-white">
                <Image
                  src={doctorData.image}
                  alt="Dr. Julian Vance - Lead Physician"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />

                {/* Doctor Name Card at Bottom of Portrait */}
                <div className="absolute bottom-6 left-6 right-6 text-white p-4 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-white/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-serif text-lg font-bold tracking-tight text-white">
                        {doctorData.name}
                      </p>
                      <p className="text-xs text-teal-200 font-mono tracking-wide">
                        {doctorData.specialty}
                      </p>
                    </div>
                    <span className="text-[11px] px-2.5 py-1 rounded-full bg-teal-500/80 text-white font-medium">
                      Founder
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Accepting New Patients */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="absolute -top-4 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-floating border border-slate-200/80 flex items-center gap-3"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
                </span>
                <div>
                  <p className="text-xs font-semibold text-slate-800 leading-tight">
                    Accepting Patients
                  </p>
                  <p className="text-[10px] text-slate-400 font-mono">
                    Limited intake each month
                  </p>
                </div>
              </motion.div>

              {/* Floating Badge 2: Experience */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.75, ease: "easeOut" }}
                className="absolute -bottom-6 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-floating border border-slate-200/80 flex items-center gap-3 max-w-[200px]"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 font-bold font-serif text-lg shrink-0">
                  16+
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-800 leading-tight">
                    Years Clinical Care
                  </p>
                  <p className="text-[10px] text-slate-400 font-mono">
                    Hospital & Private Practice
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
