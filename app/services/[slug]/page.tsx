import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, CheckCircle2, Clock, HelpCircle, MessageCircle, ShieldCheck, Sparkles, Stethoscope } from "lucide-react";
import { servicesData, ServiceItem } from "@/data/services";
import { clinicData } from "@/data/clinic";
import FadeUp from "@/components/motion/FadeUp";
import ImageReveal from "@/components/motion/ImageReveal";

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | Aura Medical Pavilion`,
    description: service.shortDescription,
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const relatedServices = servicesData
    .filter((s) => s.slug !== service.slug)
    .slice(0, 2);

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-warm-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-500 hover:text-teal-600 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Clinical Programs</span>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="mb-16">
          <FadeUp distance={20}>
            <div className="max-w-4xl space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-200 font-semibold">
                  Program {service.number} &bull; {service.category}
                </span>
                <span className="font-mono text-xs text-slate-400">
                  {service.duration}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-slate-900 tracking-tight leading-tight">
                {service.title}
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 font-serif italic max-w-3xl leading-relaxed">
                {service.subtitle}
              </p>
            </div>
          </FadeUp>
        </section>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          
          {/* Left Column (8 cols): Deep Clinical Narrative */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Featured Hero Photography */}
            <ImageReveal className="aspect-[16/9] rounded-[36px] overflow-hidden shadow-floating border-4 border-white bg-slate-100">
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover object-center"
              />
            </ImageReveal>

            {/* In-Depth Overview */}
            <div className="space-y-6">
              <FadeUp distance={20}>
                <span className="font-mono text-xs uppercase tracking-widest text-teal-600 font-semibold">
                  Program Overview
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-slate-900 tracking-tight mt-1">
                  Clinical Rationale & Purpose
                </h2>
              </FadeUp>

              <div className="space-y-4 text-base text-slate-600 leading-relaxed font-sans">
                {service.overview.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>

            {/* Clinical Objectives & Suitability */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="p-8 rounded-[32px] bg-white border border-slate-200/80 shadow-soft space-y-4">
                <span className="font-mono text-xs uppercase tracking-widest text-teal-600 font-semibold">
                  Clinical Objectives
                </span>
                <ul className="space-y-3">
                  {service.clinicalObjectives.map((obj) => (
                    <li key={obj} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 rounded-[32px] bg-white border border-slate-200/80 shadow-soft space-y-4">
                <span className="font-mono text-xs uppercase tracking-widest text-teal-600 font-semibold">
                  Who is This For?
                </span>
                <ul className="space-y-3">
                  {service.whoIsThisFor.map((target) => (
                    <li key={target} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <Sparkles className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{target}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Multi-Phase Clinical Protocol */}
            <div className="space-y-6 pt-6 border-t border-slate-200/80">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-teal-600 font-semibold">
                  Step-by-Step Methodology
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-slate-900 tracking-tight mt-1">
                  The Clinical Pathway
                </h2>
              </div>

              <div className="space-y-4">
                {service.clinicalProtocol.map((phase) => (
                  <div
                    key={phase.stepNumber}
                    className="p-6 sm:p-7 rounded-[28px] bg-white border border-slate-200/80 shadow-subtle space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-teal-600">
                        {phase.stepNumber} &bull; {phase.phase}
                      </span>
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-slate-900">
                      {phase.title}
                    </h3>
                    <p className="text-sm text-slate-600 font-sans leading-relaxed">
                      {phase.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Diagnostic Inclusions */}
            <div className="p-8 sm:p-10 rounded-[36px] bg-teal-50/80 border border-teal-200/80 space-y-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-teal-800 font-semibold">
                  Laboratory Diagnostic Scope
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-slate-900 tracking-tight mt-1">
                  Comprehensive Biomarkers Evaluated
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Analyzed at certified specialty laboratories and personally reviewed with Dr. Vance.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.diagnosticInclusions.map((inclusion) => (
                  <div
                    key={inclusion}
                    className="p-3.5 rounded-2xl bg-white border border-teal-100/80 text-xs font-medium text-slate-700 flex items-start gap-2.5 shadow-sm"
                  >
                    <Stethoscope className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>{inclusion}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Program FAQs */}
            {service.faqs && service.faqs.length > 0 && (
              <div className="space-y-6 pt-6 border-t border-slate-200/80">
                <span className="font-mono text-xs uppercase tracking-widest text-teal-600 font-semibold">
                  Specific Questions
                </span>
                <div className="space-y-4">
                  {service.faqs.map((faq) => (
                    <div
                      key={faq.question}
                      className="p-6 rounded-[24px] bg-white border border-slate-200/80 shadow-subtle space-y-2"
                    >
                      <h3 className="font-serif text-lg font-normal text-slate-900">
                        {faq.question}
                      </h3>
                      <p className="text-sm text-slate-600 font-sans leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column (4 cols): Sticky Booking & Consultation Box */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="p-8 rounded-[36px] bg-white border border-slate-200/80 shadow-floating space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-widest text-teal-600 font-semibold">
                  Consultation Details
                </span>
                <h3 className="font-serif text-2xl font-normal text-slate-900 tracking-tight">
                  Schedule This Program
                </h3>
              </div>

              <div className="space-y-3 text-xs text-slate-600 border-y border-slate-100 py-4 font-sans">
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Duration:</span>
                  <span className="font-semibold text-slate-800">{service.duration}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Delivery Mode:</span>
                  <span className="font-semibold text-slate-800">{service.deliveryMode}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Physician:</span>
                  <span className="font-semibold text-slate-800">Dr. Julian Vance, MD</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Location:</span>
                  <span className="font-semibold text-slate-800">Aura Pavilion Suite 4B</span>
                </div>
              </div>

              <div className="space-y-3">
                <Link
                  href={`/appointment?service=${service.slug}`}
                  data-cursor="book"
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-teal-500 hover:bg-teal-600 text-white text-xs font-semibold tracking-wider uppercase shadow-soft hover:shadow-floating transition-all"
                >
                  <Calendar className="w-4 h-4 text-teal-200" />
                  <span>Request Appointment</span>
                </Link>

                <a
                  href={clinicData.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-teal-600" />
                  <span>Inquire via Concierge WhatsApp</span>
                </a>
              </div>

              <div className="text-[11px] text-slate-400 font-mono text-center leading-tight">
                No preliminary referral needed &bull; Private health practice
              </div>
            </div>

            {/* Related Services Recommendation */}
            <div className="p-6 rounded-[28px] bg-white border border-slate-200/80 shadow-subtle space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-slate-400 font-semibold">
                Explore Other Programs
              </span>

              <div className="space-y-3">
                {relatedServices.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/services/${rel.slug}`}
                    className="block p-3 rounded-2xl hover:bg-slate-50 border border-slate-100 transition-colors group"
                  >
                    <p className="font-serif text-sm font-medium text-slate-900 group-hover:text-teal-600 transition-colors">
                      {rel.title}
                    </p>
                    <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                      {rel.duration} &rarr;
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
