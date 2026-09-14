"use client";

import { motion } from "framer-motion";
import { HeartHandshake, ShieldCheck, UserCheck, Stethoscope } from "lucide-react";
import FadeUp from "@/components/motion/FadeUp";

const trustItems = [
  {
    icon: HeartHandshake,
    title: "Personalized Care",
    subtitle: "60-minute unhurried consultations centered on your individual biological context."
  },
  {
    icon: ShieldCheck,
    title: "Evidence-Based Approach",
    subtitle: "Rooted strictly in peer-reviewed clinical research and objective laboratory data."
  },
  {
    icon: UserCheck,
    title: "Patient-First Experience",
    subtitle: "Direct physician dialogue, zero rushed waiting rooms, and seamless communication."
  },
  {
    icon: Stethoscope,
    title: "Modern Facilities",
    subtitle: "State-of-the-art non-invasive biomarker, vascular, and metabolic diagnostic suites."
  }
];

export default function TrustStrip() {
  return (
    <section className="border-y border-slate-200/70 bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp distance={20} duration={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {trustItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50/80 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-serif text-base font-semibold tracking-tight text-slate-800">
                      {item.title}
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed font-sans">
                      {item.subtitle}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
