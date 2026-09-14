import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, HeartPulse, Clock, Sparkles, ArrowRight, CheckCircle2, Building, Compass } from "lucide-react";
import { clinicData } from "@/data/clinic";
import { doctorData } from "@/data/doctor";
import FadeUp from "@/components/motion/FadeUp";
import ImageReveal from "@/components/motion/ImageReveal";
import QuickBookingCTA from "@/components/home/QuickBookingCTA";

export const metadata = {
  title: "About Practice & Sanctuary",
  description: "Learn about the philosophy, clinical standards, and healing architecture of Aura Medical Pavilion.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-20 bg-warm-bg">
      {/* Editorial Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <FadeUp distance={20}>
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-teal-600 font-semibold">
              About Aura Medical Pavilion
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-normal text-slate-900 tracking-tight leading-[1.15]">
              Medicine Reimagined with{" "}
              <span className="italic text-teal-600">Patience & Precision</span>
            </h1>
            <p className="text-lg text-slate-600 font-sans leading-relaxed pt-2">
              Established in 2016 by Dr. Julian Vance, our practice exists for those seeking healthcare that listens deeply, investigates thoroughly, and protects vitality across a lifetime.
            </p>
          </div>
        </FadeUp>
      </section>

      {/* Origin Story & Image Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative">
            <ImageReveal className="aspect-[4/3] rounded-[36px] overflow-hidden shadow-floating border-4 border-white bg-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop"
                alt="Aura Medical Pavilion Consultation Suite"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover object-center"
              />
            </ImageReveal>

            <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-floating border border-slate-200/80 max-w-[240px]">
              <span className="font-mono text-[10px] uppercase tracking-widest text-teal-600 font-bold">
                Sanctuary Design
              </span>
              <p className="text-xs text-slate-600 mt-1">
                Acoustic silence, botanical light, zero sterile hospital chill.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <FadeUp distance={20}>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight">
                An Antidote to Hurried, Fragmented Healthcare
              </h2>
            </FadeUp>
            <FadeUp distance={20} delay={0.1}>
              <div className="space-y-4 text-base text-slate-600 leading-relaxed font-sans">
                <p>
                  In the contemporary medical landscape, patients are frequently rushed through 10-minute appointments, handed prescription pads for isolated symptoms, and left with lingering uncertainties about their future health.
                </p>
                <p>
                  Aura Medical Pavilion was founded on the opposite premise: that effective diagnosis demands unhurried time, intellectual rigor, and an understanding of how lifestyle, genetics, and environment intersect in the individual.
                </p>
                <p>
                  Our pavilion is intentionally limited in patient volume. By capping our active roster, Dr. Vance ensures each individual receives his personal, undivided clinical focus, continuous tracking, and responsive dialogue.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* The 4 Clinical Standards */}
      <section className="bg-white py-24 sm:py-32 border-y border-slate-200/80 mb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-teal-600 font-semibold">
              The Aura Patient Charter
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight">
              Our Commitments to Every Patient
            </h2>
            <p className="text-base text-slate-500 font-sans leading-relaxed">
              Core ethical and clinical principles that guide every interaction within our practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "60-Minute Consultations",
                desc: "Never rushed. Ample space to review complete histories, lifestyle factors, and nuance.",
                icon: Clock
              },
              {
                step: "02",
                title: "Multi-Organ Diagnostics",
                desc: "Evaluating 120+ biomarkers rather than settling for high-level routine checks.",
                icon: HeartPulse
              },
              {
                step: "03",
                title: "Direct Doctor Access",
                desc: "Prompt communication channels directly with Dr. Vance and dedicated concierge team.",
                icon: ShieldCheck
              },
              {
                step: "04",
                title: "Collaborative Dignity",
                desc: "You are the central partner in your healthcare, fully informed at every therapeutic milestone.",
                icon: Sparkles
              }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="p-8 rounded-[32px] bg-warm-bg border border-slate-200/80 space-y-4 shadow-subtle hover:shadow-soft transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-teal-600">
                      {item.step}
                    </span>
                    <Icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <h3 className="font-serif text-xl font-normal text-slate-900 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Facilities Showcase */}
      <section id="facilities" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-teal-600 font-semibold">
            Pavilion Infrastructure
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight">
            Curated Spaces for Health & Diagnostic Clarity
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clinicData.facilities.map((fac) => (
            <div
              key={fac.id}
              className="rounded-[32px] overflow-hidden bg-white border border-slate-200/80 shadow-soft group hover:shadow-floating transition-all duration-500"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <Image
                  src={fac.image}
                  alt={fac.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-700 border border-slate-200/60 font-semibold">
                    {fac.category}
                  </span>
                </div>
              </div>

              <div className="p-8 space-y-2">
                <h3 className="font-serif text-2xl font-normal text-slate-900 tracking-tight">
                  {fac.title}
                </h3>
                <p className="text-sm text-slate-500 font-sans leading-relaxed">
                  {fac.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* First Visit Guide */}
      <section id="first-visit" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
        <div className="p-8 sm:p-12 rounded-[36px] bg-teal-50 border border-teal-200/80 space-y-8">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-teal-700 font-semibold">
              First Visit Preparation
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-normal text-slate-900 tracking-tight">
              What to Expect During Your Initial Consultation
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              We want your arrival to be effortless. Here is how your first 90 minutes with us will proceed:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-white border border-teal-100 space-y-2">
              <span className="font-mono text-xs font-bold text-teal-600">Phase 01</span>
              <p className="font-serif text-lg font-normal text-slate-900">Quiet Arrival</p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Enjoy herbal tea in our lounge with zero paperwork delays; your intake is already uploaded.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-teal-100 space-y-2">
              <span className="font-mono text-xs font-bold text-teal-600">Phase 02</span>
              <p className="font-serif text-lg font-normal text-slate-900">60-Min Dialogue</p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Exhaustive conversation with Dr. Vance regarding your history, biomarkers, and vitality goals.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-teal-100 space-y-2">
              <span className="font-mono text-xs font-bold text-teal-600">Phase 03</span>
              <p className="font-serif text-lg font-normal text-slate-900">Action Blueprint</p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Immediate next steps ordered, including targeted blood diagnostics or metabolic scans.
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-teal-200/60 text-xs font-mono text-teal-800">
            <span>Complimentary valet parking included with all appointments</span>
            <Link
              href="/appointment"
              className="inline-flex items-center gap-1 font-semibold text-teal-700 hover:text-teal-900 underline"
            >
              Book Initial Consultation &rarr;
            </Link>
          </div>
        </div>
      </section>

      <QuickBookingCTA />
    </div>
  );
}
