"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { faqsData } from "@/data/faqs";
import FadeUp from "@/components/motion/FadeUp";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-warm-bg relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 sm:mb-20">
          <FadeUp distance={20}>
            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-teal-600 font-semibold px-3 py-1 rounded-full bg-teal-50 border border-teal-200">
              <HelpCircle className="w-3.5 h-3.5" />
              Frequently Asked Questions
            </span>
          </FadeUp>
          <FadeUp distance={20} delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight">
              Common Inquiries & Practice Logistics
            </h2>
          </FadeUp>
          <FadeUp distance={20} delay={0.2}>
            <p className="text-base text-slate-500 font-sans max-w-xl mx-auto leading-relaxed">
              Transparent answers regarding our consultation structure, diagnostic lab sessions, and direct patient care model.
            </p>
          </FadeUp>
        </div>

        {/* Interactive Accordion */}
        <div className="space-y-4">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <FadeUp key={faq.question} distance={15} delay={0.05 * index}>
                <div
                  className={`rounded-2xl transition-all duration-300 border ${
                    isOpen
                      ? "bg-white border-teal-500/30 shadow-soft"
                      : "bg-white/70 hover:bg-white border-slate-200/80"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-serif text-lg sm:text-xl font-normal text-slate-900 tracking-tight">
                      {faq.question}
                    </span>

                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? "bg-teal-500 text-white"
                          : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 font-sans leading-relaxed border-t border-slate-100 mt-2">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeUp>
            );
          })}
        </div>

      </div>
    </section>
  );
}
