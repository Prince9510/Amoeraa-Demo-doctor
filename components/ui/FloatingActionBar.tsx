"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone, Calendar, MessageCircle, ArrowUp } from "lucide-react";
import { clinicData } from "@/data/clinic";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingActionBar() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Mobile Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/80 px-4 py-2.5 shadow-floating">
        <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
          <a
            href={`tel:${clinicData.contact.phone.replace(/\s+/g, "")}`}
            className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl text-slate-700 hover:text-teal-600 hover:bg-slate-50 transition-colors"
          >
            <Phone className="w-4 h-4 text-teal-600 mb-0.5" />
            <span className="text-[11px] font-medium tracking-wide">Call</span>
          </a>

          <a
            href={clinicData.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl text-slate-700 hover:text-teal-600 hover:bg-slate-50 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-teal-600 mb-0.5" />
            <span className="text-[11px] font-medium tracking-wide">WhatsApp</span>
          </a>

          <Link
            href="/appointment"
            className="flex-[1.5] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-medium text-xs shadow-sm transition-all"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Visit</span>
          </Link>
        </div>
      </div>

      {/* Desktop Floating Action / Scroll-to-Top Indicator */}
      <div className="hidden md:flex fixed bottom-8 right-8 z-40 items-center gap-3">
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="w-10 h-10 rounded-full bg-white text-slate-600 hover:text-teal-600 shadow-soft border border-slate-200/80 flex items-center justify-center hover:bg-slate-50 transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showScrollTop && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href="/appointment"
                data-cursor="book"
                className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-teal-500 hover:bg-teal-600 text-white font-semibold text-xs tracking-wider uppercase shadow-floating hover:shadow-lg transition-all"
              >
                <Calendar className="w-4 h-4 text-teal-200" />
                <span>Book Appointment</span>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
