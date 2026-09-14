export interface FAQItem {
  question: string;
  answer: string;
  category: "General" | "Appointments" | "Diagnostics" | "Care Model";
}

export const faqsData: FAQItem[] = [
  {
    question: "How do I schedule an initial consultation?",
    answer:
      "You can submit a request through our online appointment portal, connect directly with our patient concierge via WhatsApp, or telephone our clinic during practice hours. Because we protect generous consultation time for each patient, we recommend scheduling 1 to 2 weeks in advance.",
    category: "Appointments"
  },
  {
    question: "Do you currently accept new patients?",
    answer:
      "Yes, Dr. Julian Vance is actively accepting a limited number of new patients each month to ensure our current cohort receives uncompromised attention, immediate accessibility, and thorough follow-up care.",
    category: "General"
  },
  {
    question: "How long does the first consultation take?",
    answer:
      "Initial comprehensive consultations are scheduled for a full 60 to 75 minutes. This ensures ample time to review your complete physiological history, lifestyle factors, previous medical records, and long-term health goals without haste.",
    category: "Care Model"
  },
  {
    question: "What should I bring or prepare for my first appointment?",
    answer:
      "Please bring any recent laboratory test results from the past 12 months, imaging reports, a complete list of current prescription medications and nutritional supplements, and your completed digital intake questionnaire.",
    category: "Appointments"
  },
  {
    question: "How does Aura Medical Pavilion differ from conventional clinics?",
    answer:
      "Unlike traditional practices constrained by brief 10-to-15 minute insurance appointments, our clinic operates on an unhurried, root-cause diagnostic philosophy. We measure 120+ specialized biomarkers, analyze cellular and metabolic health, and partner with you on long-term preventive architecture.",
    category: "Care Model"
  },
  {
    question: "Are diagnostic blood draws and tests conducted on-site?",
    answer:
      "Yes. Our serene in-house diagnostic suite is staffed by experienced phlebotomists. We handle advanced lipid subfractions, hormone cascades, and metabolic panels on-site, ensuring absolute comfort and sample integrity.",
    category: "Diagnostics"
  },
  {
    question: "Are follow-up consultations available virtually?",
    answer:
      "Yes. Following your initial in-person diagnostic evaluation, regular progress check-ins, lab review sessions, and lifestyle adjustments can be conducted via our encrypted, HIPAA-compliant telehealth suite.",
    category: "Appointments"
  },
  {
    question: "Do you accept health insurance?",
    answer:
      "We operate as a direct-care private practice to remain entirely free from insurance company time caps and arbitrary testing restrictions. While consultation fees are self-pay, we provide detailed superbills that you can submit to your private insurer or HSA/FSA for eligible out-of-network reimbursement.",
    category: "General"
  }
];
