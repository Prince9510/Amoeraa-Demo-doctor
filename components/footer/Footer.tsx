import Link from "next/link";
import { HeartPulse, ArrowUpRight, Phone, Mail, MapPin, Sparkles } from "lucide-react";
import { clinicData } from "@/data/clinic";
import { footerLinks, demoDisclaimer } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Editorial Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800/80">
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-300">
                <HeartPulse className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                {clinicData.name}
              </span>
            </div>

            <p className="font-serif italic text-xl text-slate-200 leading-snug max-w-md">
              &ldquo;Thoughtful care. Modern medicine. A healthier tomorrow.&rdquo;
            </p>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              A private health practice uniting deep biomarker diagnostics with unhurried clinical care, personalized to the individual.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/60 text-xs text-teal-300 font-mono">
              <Sparkles className="w-3.5 h-3.5 text-warm-accent" />
              <span>{demoDisclaimer.badge}</span>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
            {/* Practice Links */}
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-4">Practice</p>
              <ul className="space-y-2.5">
                {footerLinks.practice.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1 group"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 transition-all text-teal-400" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Clinical Services */}
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-4">Clinical Focus</p>
              <ul className="space-y-2.5">
                {footerLinks.services.slice(0, 5).map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1 group"
                    >
                      <span className="truncate">{item.label}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 transition-all text-teal-400 shrink-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Contact & Hours */}
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-4">Visit Pavilion</p>
              <div className="space-y-3 text-sm text-slate-400">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-1" />
                  <p className="leading-snug">
                    {clinicData.address.street}, {clinicData.address.suite}
                    <br />
                    {clinicData.address.city}, {clinicData.address.country}
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                  <a href={`tel:${clinicData.contact.phone}`} className="hover:text-white transition-colors font-mono text-xs">
                    {clinicData.contact.displayPhone}
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                  <a href={`mailto:${clinicData.contact.email}`} className="hover:text-white transition-colors font-mono text-xs">
                    {clinicData.contact.email}
                  </a>
                </div>

                <div className="pt-2 text-xs text-slate-400 border-t border-slate-800">
                  <p className="font-medium text-slate-300">Consultation Hours:</p>
                  <p>Mon – Fri: 8:30 AM – 6:00 PM</p>
                  <p>Sat: 9:00 AM – 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Portfolio Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Aura Medical Pavilion. All rights reserved. Fictional medical practice demo.
          </p>

          <div className="flex items-center gap-3">
            <span className="text-slate-400">
              Crafted as a demonstration by{" "}
              <span className="text-teal-300 font-semibold">Amperaa</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
