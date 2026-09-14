import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Award, CheckCircle2, Globe, Calendar, ArrowRight, ShieldCheck, BookOpen, Clock, HeartHandshake } from "lucide-react";
import { doctorData } from "@/data/doctor";
import FadeUp from "@/components/motion/FadeUp";
import ImageReveal from "@/components/motion/ImageReveal";
import QuickBookingCTA from "@/components/home/QuickBookingCTA";

export const metadata = {
  title: "Dr. Julian Vance, MD, FACP | Lead Physician",
  description:
    "Meet Dr. Julian Vance, MD, FACP. Specialized in integrative internal medicine, preventive cardiology, and metabolic longevity.",
};

export default function DoctorProfilePage() {
  return (
    <div className="pt-28 sm:pt-36 pb-20 bg-warm-bg">
      {/* Editorial Profile Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Doctor Portrait & Quick Info */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-28 space-y-6">
              <ImageReveal className="aspect-[4/5] rounded-[36px] overflow-hidden shadow-floating border-4 border-white bg-slate-100">
                <Image
                  src={doctorData.image}
                  alt={doctorData.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                />
              </ImageReveal>

              {/* Consultation Availability Card */}
              <div className="p-6 rounded-[28px] bg-white border border-slate-200/80 shadow-soft space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-widest text-teal-600 font-semibold">
                    Consultation Status
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-700 font-mono text-[11px] font-medium border border-teal-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                    Accepting Patients
                  </span>
                </div>

                <div className="text-xs text-slate-500 space-y-1 font-sans">
                  <p className="font-medium text-slate-800">In-Person & Encrypted Telehealth</p>
                  <p>Initial Consultation: Full 60-Minute Evaluation</p>
                  <p>Direct Inquiries: concierge@auramedical-demo.com</p>
                </div>

                <Link
                  href="/appointment"
                  data-cursor="book"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-teal-500 hover:bg-teal-600 text-white text-xs font-semibold tracking-wider uppercase shadow-subtle transition-all"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Schedule Initial Visit</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Philosophy & Credentials */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Title & Headline */}
            <div className="space-y-4">
              <FadeUp distance={20}>
                <span className="font-mono text-xs uppercase tracking-widest text-teal-600 font-semibold">
                  Physician Profile
                </span>
                <h1 className="font-serif text-4xl sm:text-6xl font-normal text-slate-900 tracking-tight leading-tight mt-1">
                  {doctorData.name}
                </h1>
                <p className="font-mono text-sm text-slate-500 uppercase tracking-widest">
                  {doctorData.credentials.join(" • ")} &bull; {doctorData.specialty}
                </p>
              </FadeUp>

              <FadeUp distance={20} delay={0.1}>
                <p className="font-serif italic text-xl sm:text-2xl text-teal-700 leading-snug pt-2">
                  &ldquo;{doctorData.bio.headline}&rdquo;
                </p>
              </FadeUp>
            </div>

            {/* Stats Band */}
            <FadeUp distance={20} delay={0.15}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-[28px] bg-white border border-slate-200/80 shadow-subtle">
                {doctorData.stats.map((stat) => (
                  <div key={stat.label} className="text-center space-y-1">
                    <p className="font-serif text-3xl font-bold text-slate-900">
                      {stat.value}
                    </p>
                    <p className="font-sans text-xs font-semibold text-slate-700">
                      {stat.label}
                    </p>
                    <p className="font-mono text-[10px] text-slate-400">
                      {stat.sublabel}
                    </p>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* Narrative Bio */}
            <FadeUp distance={20} delay={0.2}>
              <div className="space-y-4 text-base text-slate-600 font-sans leading-relaxed">
                {doctorData.bio.fullBio.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </FadeUp>

            {/* Clinical Focus Areas */}
            <FadeUp distance={20} delay={0.25}>
              <div className="space-y-4 pt-4 border-t border-slate-200/80">
                <span className="font-mono text-xs uppercase tracking-widest text-teal-600 font-semibold">
                  Clinical Specializations
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {doctorData.clinicalFocus.map((focus) => (
                    <div
                      key={focus}
                      className="p-3.5 rounded-2xl bg-white border border-slate-200/70 text-xs font-medium text-slate-700 flex items-center gap-2.5 shadow-subtle"
                    >
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>{focus}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Academic & Medical Training (Clearly Fictional / Demo) */}
            <FadeUp distance={20} delay={0.3}>
              <div className="space-y-4 pt-4 border-t border-slate-200/80">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-widest text-teal-600 font-semibold">
                    Medical Education & Training
                  </span>
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">
                    Demo Credentials
                  </span>
                </div>

                <div className="space-y-4">
                  {doctorData.education.map((edu) => (
                    <div
                      key={edu.institution}
                      className="p-5 rounded-[24px] bg-white border border-slate-200/70 shadow-subtle space-y-1.5"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <p className="font-serif text-lg font-medium text-slate-900">
                          {edu.institution}
                        </p>
                        <span className="font-mono text-xs text-teal-600 font-semibold">
                          {edu.year}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-slate-700">
                        {edu.degree}
                      </p>
                      <p className="text-xs text-slate-400 font-sans">
                        {edu.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Board Certifications */}
            <FadeUp distance={20} delay={0.35}>
              <div className="space-y-4 pt-4 border-t border-slate-200/80">
                <span className="font-mono text-xs uppercase tracking-widest text-teal-600 font-semibold">
                  Board Certifications & Fellowships
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {doctorData.certifications.map((cert) => (
                    <div
                      key={cert.title}
                      className="p-4 rounded-2xl bg-white border border-slate-200/70 shadow-subtle space-y-1"
                    >
                      <Award className="w-4 h-4 text-teal-600" />
                      <p className="text-xs font-semibold text-slate-800 leading-tight pt-1">
                        {cert.title}
                      </p>
                      <p className="text-[10px] font-mono text-slate-400">
                        {cert.authority}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Signature Block */}
            <FadeUp distance={20} delay={0.4}>
              <div className="pt-6 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <p className="font-serif italic text-3xl text-teal-700 select-none">
                    {doctorData.signatureText}
                  </p>
                  <p className="font-mono text-[10px] text-slate-400 uppercase tracking-widest mt-1">
                    Julian Vance, MD &bull; Lead Physician
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-500 font-sans">Languages:</p>
                  <p className="text-xs font-semibold text-slate-800">English & French</p>
                </div>
              </div>
            </FadeUp>

          </div>

        </div>
      </section>

      <QuickBookingCTA />
    </div>
  );
}
