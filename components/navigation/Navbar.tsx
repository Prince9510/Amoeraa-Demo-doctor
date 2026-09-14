"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Phone, Calendar, HeartPulse } from "lucide-react";
import { mainNavLinks } from "@/data/navigation";
import { clinicData } from "@/data/clinic";
import MagneticButton from "@/components/motion/MagneticButton";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out ${
          isScrolled ? "py-3" : "py-5 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Main Navigation"
            className={`flex items-center justify-between transition-all duration-500 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 ${
              isScrolled
                ? "bg-white/85 backdrop-blur-md shadow-floating border border-slate-200/60"
                : "bg-white/40 backdrop-blur-sm border border-white/60"
            }`}
          >
            {/* Clinic Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded-lg p-1"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-teal-500 flex items-center justify-center text-white shadow-subtle group-hover:bg-teal-600 transition-colors">
                <HeartPulse className="w-5 h-5 text-teal-100" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-slate-800 leading-none group-hover:text-teal-600 transition-colors">
                  Aura Medical
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400 mt-0.5">
                  Pavilion &bull; Dr. Vance
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {mainNavLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-teal-600 font-semibold"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="navPill"
                        className="absolute bottom-0 left-3 right-3 h-0.5 bg-teal-500 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`tel:${clinicData.contact.phone.replace(/\s+/g, "")}`}
                className="text-xs font-mono text-slate-500 hover:text-teal-600 flex items-center gap-1.5 transition-colors px-2 py-1"
              >
                <Phone className="w-3.5 h-3.5 text-teal-500" />
                <span className="hidden lg:inline">{clinicData.contact.displayPhone}</span>
              </a>

              <MagneticButton strength={0.2}>
                <Link
                  href="/appointment"
                  data-cursor="book"
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold text-white bg-teal-500 hover:bg-teal-600 transition-all shadow-subtle hover:shadow-soft"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Appointment</span>
                </Link>
              </MagneticButton>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center gap-2 md:hidden">
              <Link
                href="/appointment"
                className="text-xs font-medium bg-teal-500 text-white px-3 py-1.5 rounded-full shadow-sm"
              >
                Book
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
                className="p-2 text-slate-700 hover:text-teal-600 transition-colors rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Fullscreen Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-warm-bg/95 backdrop-blur-xl md:hidden pt-28 pb-10 px-6 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <p className="font-mono text-xs uppercase tracking-widest text-slate-400">Navigation</p>
              <div className="flex flex-col space-y-3">
                {mainNavLinks.map((link, idx) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * idx, duration: 0.4 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`text-2xl font-serif tracking-tight flex items-center justify-between py-2 border-b border-slate-200/50 ${
                          isActive ? "text-teal-600 font-semibold" : "text-slate-800 hover:text-teal-600"
                        }`}
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="w-5 h-5 text-slate-400" />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Mobile Menu Footer Contact & Actions */}
            <div className="pt-6 border-t border-slate-200/60 space-y-4">
              <div className="space-y-1">
                <p className="text-xs font-mono uppercase tracking-wider text-slate-400">Practice Inquiries</p>
                <p className="text-sm font-semibold text-slate-800">{clinicData.contact.displayPhone}</p>
                <p className="text-xs text-slate-500">{clinicData.contact.email}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={clinicData.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold bg-white border border-slate-200 text-slate-700 shadow-sm"
                >
                  WhatsApp
                </a>
                <Link
                  href="/appointment"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold bg-teal-500 text-white shadow-soft"
                >
                  Book Visit
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
