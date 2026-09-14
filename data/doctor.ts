export interface DoctorProfile {
  name: string;
  title: string;
  credentials: string[];
  role: string;
  specialty: string;
  subspecialty: string;
  experienceYears: number;
  bio: {
    headline: string;
    summary: string;
    fullBio: string[];
    philosophy: string;
    quote: string;
  };
  education: Array<{
    institution: string;
    degree: string;
    year: string;
    note: string;
  }>;
  certifications: Array<{
    title: string;
    authority: string;
    status: string;
  }>;
  languages: string[];
  stats: Array<{
    label: string;
    value: string;
    sublabel: string;
  }>;
  clinicalFocus: string[];
  signatureText: string;
  image: string;
  secondaryImage: string;
  isDemoContent: boolean;
}

export const doctorData: DoctorProfile = {
  name: "Dr. Julian Vance",
  title: "Julian Vance, MD, FACP",
  credentials: ["MD", "FACP", "ABIM Certified"],
  role: "Lead Physician & Founder",
  specialty: "Integrative Internal Medicine",
  subspecialty: "Preventive Longevity & Cardiometabolic Health",
  experienceYears: 16,
  bio: {
    headline: "Thoughtful clinical medicine designed around human individuality.",
    summary:
      "A measured, diagnostic approach to modern healthcare—combining deep clinical rigor with genuine attention to every patient's physiological context and long-term vitality.",
    fullBio: [
      "Dr. Julian Vance founded Aura Medical Pavilion with a simple conviction: medicine is at its most powerful when it is proactive, comprehensive, and deeply attuned to the individual patient.",
      "Following clinical training in internal medicine and fellowships in metabolic optimization, Dr. Vance developed an unhurried, diagnostic-first practice model. Rather than rushed 10-minute checkups, every initial consultation spans a full 60 minutes dedicated to in-depth health mapping, advanced biomarkers, and root-cause inquiry.",
      "His practice balances the best of contemporary evidence-based medicine with lifestyle architecture, sleep hygiene, and cardiometabolic risk reduction—empowering individuals to maintain peak physical and cognitive health across their lifespan."
    ],
    philosophy:
      "Every physiological symptom is a signal in a complex, interconnected system. True healthcare does not merely silence alarms; it investigates their origins and restores balance with clinical precision.",
    quote:
      "Healthcare should feel personal. When a physician truly listens, diagnosis becomes clearer, treatment becomes collaborative, and health becomes enduring."
  },
  education: [
    {
      institution: "Johns Hopkins University School of Medicine",
      degree: "Doctor of Medicine (M.D.) — Demo",
      year: "Class of 2008",
      note: "Graduated with Dean's Honors in Clinical Diagnosis"
    },
    {
      institution: "Stanford University Medical Center",
      degree: "Internal Medicine Residency & Chief Resident — Demo",
      year: "2008 – 2012",
      note: "Specialized in Cardiometabolic & Complex Multisystem Disease"
    },
    {
      institution: "Harvard T.H. Chan School of Public Health",
      degree: "Fellowship in Preventive Clinical Epidemiology — Demo",
      year: "2012 – 2014",
      note: "Focus on early cardiovascular risk stratification"
    }
  ],
  certifications: [
    {
      title: "Diplomate, American Board of Internal Medicine",
      authority: "ABIM (Fictional Demo Credential)",
      status: "Active & Board Certified"
    },
    {
      title: "Fellow, American College of Physicians (FACP)",
      authority: "ACP (Fictional Demo Credential)",
      status: "Elected Fellow"
    },
    {
      title: "Advanced Metabolic & Functional Biomarker Credential",
      authority: "Clinical Institute of Preventive Care",
      status: "Certified Practitioner"
    }
  ],
  languages: ["English (Native)", "French (Professional Fluency)"],
  stats: [
    {
      label: "Clinical Experience",
      value: "16+",
      sublabel: "Years in advanced practice"
    },
    {
      label: "Initial Consultation",
      value: "60m",
      sublabel: "Dedicated 1-on-1 assessment"
    },
    {
      label: "Patient Retention",
      value: "98%",
      sublabel: "Long-term wellness partnerships"
    },
    {
      label: "Diagnostic Precision",
      value: "120+",
      sublabel: "Comprehensive biomarker markers"
    }
  ],
  clinicalFocus: [
    "Cardiometabolic Risk Stratification",
    "Longevity & Cellular Health Optimization",
    "Precision Biomarker Mapping",
    "Hormonal Balance & Endocrine Health",
    "Neurocognitive Resilience & Stress Physiology",
    "Evidence-Based Nutritional Medicine"
  ],
  signatureText: "Dr. Julian Vance, MD",
  image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1200&auto=format&fit=crop",
  secondaryImage: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1200&auto=format&fit=crop",
  isDemoContent: true
};
