"use client";

import Link from "next/link";
import { Calendar, Phone, ArrowRight, ShieldCheck, HeartPulse } from "lucide-react";
import { clinicData } from "@/data/clinic";
import FadeUp from "@/components/motion/FadeUp";
import MagneticButton from "@/components/motion/MagneticButton";

export default function QuickBookingCTA() {
  return (
    <section className="py-24 sm:py-32 bg-teal-900 text-white relative overflow-hidden">
      {/* Ambient background light */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-teal-800/40 blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full bg-sage-500/15 blur-[130px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <FadeUp distance={20}>
          <div className="w-14 h-14 rounded-2xl bg-teal-800/80 border border-teal-700 flex items-center justify-center text-teal-300 mx-auto shadow-subtle">
            <HeartPulse className="w-7 h-7" />
          </div>
        </FadeUp>

        <FadeUp distance={20} delay={0.1}>
          <div className="space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-teal-300 font-semibold">
              Begin Your Patient Partnership
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white max-w-3xl mx-auto leading-tight">
              Invest in Your Long-Term Health with Thoughtful Care
            </h2>
            <p className="text-base sm:text-lg text-teal-100/80 max-w-xl mx-auto font-sans leading-relaxed">
              Experience the difference of an unhurried, 60-minute diagnostic consultation with Dr. Julian Vance at Aura Medical Pavilion.
            </p>
          </div>
        </FadeUp>

        <FadeUp distance={20} delay={0.25}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <MagneticButton strength={0.2}>
              <Link
                href="/appointment"
                data-cursor="book"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white hover:bg-teal-50 text-teal-900 font-semibold text-sm sm:text-base shadow-soft hover:shadow-floating transition-all group"
              >
                <Calendar className="w-4 h-4 text-teal-700" />
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-4 h-4 text-teal-700 -translate-x-1 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </MagneticButton>

            <a
              href={`tel:${clinicData.contact.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-teal-800/80 hover:bg-teal-800 text-teal-100 font-medium text-sm sm:text-base border border-teal-700 transition-colors"
            >
              <Phone className="w-4 h-4 text-teal-300" />
              <span>Call Concierge: {clinicData.contact.displayPhone}</span>
            </a>
          </div>
        </FadeUp>

        <FadeUp distance={20} delay={0.35}>
          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-teal-200/70 border-t border-teal-800/80 font-mono">
            <span>● Accepting New Patients</span>
            <span>● In-Clinic or Secure Telehealth</span>
            <span>● 120+ Biomarker Capabilities</span>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
