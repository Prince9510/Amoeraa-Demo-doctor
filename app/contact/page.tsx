import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle, AlertCircle, Compass, Car, Train, Calendar, ArrowRight } from "lucide-react";
import { contactData } from "@/data/contact";
import { clinicData } from "@/data/clinic";
import FadeUp from "@/components/motion/FadeUp";

export const metadata = {
  title: "Contact & Visit Clinic | Aura Medical Pavilion",
  description:
    "Visit Aura Medical Pavilion in Demo City. Practice address, hours, valet arrival, and direct concierge contact.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-warm-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <section className="mb-16">
          <FadeUp distance={20}>
            <div className="max-w-3xl space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-teal-600 font-semibold">
                Visit Aura Medical Pavilion
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl font-normal text-slate-900 tracking-tight leading-[1.15]">
                Concierge Contact &{" "}
                <span className="italic text-teal-600">Location Guide</span>
              </h1>
              <p className="text-lg text-slate-600 font-sans leading-relaxed pt-2">
                Located in the heart of the Parkway Medical District, our private pavilion provides an unhurried, discrete environment for your health assessments.
              </p>
            </div>
          </FadeUp>
        </section>

        {/* Contact Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Phone */}
          <div className="p-8 rounded-[32px] bg-white border border-slate-200/80 shadow-soft space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="font-serif text-xl font-normal text-slate-900">Direct Telephone</p>
              <p className="text-xs text-slate-500 font-sans mt-1">
                Direct dialogue with patient concierge
              </p>
            </div>
            <a
              href={`tel:${contactData.communication.phone.replace(/\s+/g, "")}`}
              className="inline-block font-mono text-base font-semibold text-teal-600 hover:text-teal-700 transition-colors"
            >
              {contactData.communication.displayPhone}
            </a>
          </div>

          {/* Email */}
          <div className="p-8 rounded-[32px] bg-white border border-slate-200/80 shadow-soft space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="font-serif text-xl font-normal text-slate-900">Concierge Desk</p>
              <p className="text-xs text-slate-500 font-sans mt-1">
                Inquiries, medical records & scheduling
              </p>
            </div>
            <a
              href={`mailto:${contactData.communication.email}`}
              className="inline-block font-mono text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors"
            >
              {contactData.communication.email}
            </a>
          </div>

          {/* WhatsApp */}
          <div className="p-8 rounded-[32px] bg-white border border-slate-200/80 shadow-soft space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="font-serif text-xl font-normal text-slate-900">WhatsApp Concierge</p>
              <p className="text-xs text-slate-500 font-sans mt-1">
                Real-time appointment coordination
              </p>
            </div>
            <a
              href={contactData.communication.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider font-semibold text-teal-600 hover:text-teal-700"
            >
              <span>{contactData.communication.whatsappText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Location & Practice Hours */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          {/* Left Column: Address, Hours, Valet */}
          <div className="lg:col-span-6 space-y-8">
            <div className="p-8 sm:p-10 rounded-[36px] bg-white border border-slate-200/80 shadow-soft space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-widest text-teal-600 font-semibold">
                  Pavilion Address
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-slate-900 tracking-tight">
                  {contactData.clinicName}
                </h2>
                <div className="space-y-1 text-sm text-slate-600 font-sans pt-2 leading-relaxed">
                  <p className="font-medium text-slate-800">{contactData.address.line1}</p>
                  <p>{contactData.address.line2}</p>
                  <p>{contactData.address.landmark}</p>
                  <p>{contactData.address.city}, {contactData.address.postalCode}</p>
                  <p className="font-mono text-xs text-slate-400">{contactData.address.country}</p>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 space-y-3">
                <div className="flex items-center gap-2 text-teal-600 font-mono text-xs font-semibold uppercase tracking-wider">
                  <Clock className="w-4 h-4" />
                  <span>Consultation & Facility Hours</span>
                </div>
                <div className="space-y-2">
                  {contactData.schedule.map((item) => (
                    <div key={item.days} className="flex justify-between text-xs py-1 border-b border-slate-50 last:border-none">
                      <span className="text-slate-600 font-medium">{item.days}</span>
                      <span className="font-mono text-slate-800 font-semibold">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Transit & Arrival Guide */}
              <div className="pt-6 border-t border-slate-100 space-y-4">
                <span className="font-mono text-xs uppercase tracking-widest text-slate-400 font-semibold">
                  Arrival & Valet Instructions
                </span>
                <div className="space-y-3">
                  {contactData.transitGuide.map((transit) => (
                    <div key={transit.title} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                      <p className="font-serif text-sm font-semibold text-slate-800">
                        {transit.title}
                      </p>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {transit.instructions}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Stylized Minimalist Map Placeholder & Book Box */}
          <div className="lg:col-span-6 space-y-8">
            {/* Interactive Stylized Map Visual */}
            <div className="relative aspect-[4/3] rounded-[36px] overflow-hidden bg-slate-900 border-4 border-white shadow-floating flex items-center justify-center p-8 text-center text-white">
              {/* Map grid lines simulation */}
              <div aria-hidden="true" className="absolute inset-0 opacity-15 pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2DD4BF" strokeWidth="0.8" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#map-grid)" />
                </svg>
              </div>

              <div className="relative z-10 space-y-4 max-w-sm">
                <div className="w-14 h-14 rounded-full bg-teal-500 flex items-center justify-center text-white mx-auto shadow-floating animate-bounce">
                  <MapPin className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <p className="font-serif text-2xl font-bold">Aura Medical Pavilion</p>
                  <p className="text-xs text-teal-200 font-mono tracking-wider">
                    123 Demo Medical Avenue, Pavilion 4B
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Opposite Central Botanic Gardens &bull; Demo City
                  </p>
                </div>
                <div className="pt-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-slate-800 text-teal-300 border border-slate-700 font-mono text-[10px] tracking-wider uppercase">
                    Valet Attendants at Gate 2
                  </span>
                </div>
              </div>
            </div>

            {/* Book Box */}
            <div className="p-8 rounded-[36px] bg-teal-900 text-white space-y-6 shadow-soft">
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-widest text-teal-300 font-semibold">
                  Online Scheduling Portal
                </span>
                <h3 className="font-serif text-2xl font-normal text-white">
                  Reserve an Unhurried Consultation
                </h3>
                <p className="text-xs text-teal-100/80 leading-relaxed font-sans">
                  Select your preferred time slot and consultation modality through our four-step booking interface.
                </p>
              </div>

              <Link
                href="/appointment"
                data-cursor="book"
                className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-white hover:bg-teal-50 text-teal-900 text-xs font-semibold tracking-wider uppercase shadow-subtle transition-all"
              >
                <Calendar className="w-4 h-4 text-teal-700" />
                <span>Open Appointment Interface</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Emergency Notice Box */}
        <div id="emergency" className="p-6 sm:p-8 rounded-[28px] bg-amber-50/90 border border-amber-200/80 flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h3 className="font-serif text-base font-semibold text-amber-900">
              {contactData.emergencyNotice.title}
            </h3>
            <p className="text-xs sm:text-sm text-amber-800 leading-relaxed font-sans">
              {contactData.emergencyNotice.content}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
