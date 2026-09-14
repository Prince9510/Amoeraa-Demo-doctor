export interface TreatmentItem {
  number: string;
  code: string;
  title: string;
  tag: string;
  summary: string;
  keyAspects: string[];
  recommendedFrequency: string;
  image: string;
}

export const treatmentsData: TreatmentItem[] = [
  {
    number: "01",
    code: "PREV-01",
    title: "Cardiometabolic Risk Interception",
    tag: "Vascular Health",
    summary:
      "A proactive medical protocol identifying subclinical arterial plaque progression, microvascular resistance, and metabolic dysfunction years before clinical events.",
    keyAspects: [
      "ApoB, Lp(a) and small-dense LDL particle quantification",
      "Arterial wave velocity & microcirculation mapping",
      "Continuous glycemic trajectory optimization",
      "Personalized non-pharmacological and clinical lipid therapies"
    ],
    recommendedFrequency: "Annual baseline with bi-annual tracking",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop"
  },
  {
    number: "02",
    code: "CELL-02",
    title: "Mitochondrial & Cellular Energy",
    tag: "Bioenergetics",
    summary:
      "Diagnostic and restorative treatment targeting persistent cellular fatigue, impaired ATP synthesis, and oxidative buffer exhaustion.",
    keyAspects: [
      "Organic acids and Krebs cycle intermediate profiling",
      "Targeted co-factor and clinical micronutrient replenishment",
      "Mitochondrial biogenesis conditioning protocols",
      "Circadian light exposure and sleep architecture alignment"
    ],
    recommendedFrequency: "12-week iterative restorative cycle",
    image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=1000&auto=format&fit=crop"
  },
  {
    number: "03",
    code: "HOR-03",
    title: "Endocrine & Neuroendocrine Balance",
    tag: "Hormone Optimization",
    summary:
      "A precise physiological restoration of thyroid hormone dynamics, adrenal rhythmicity, and gonadal hormone equilibrium.",
    keyAspects: [
      "Diurnal free cortisol curve and DHEA calibration",
      "Full spectrum thyroid kinetics (Total/Free T3, Free T4, Reverse T3)",
      "Sex hormone balance and carrier protein optimization",
      "Physician-directed evidence-based supplementation"
    ],
    recommendedFrequency: "Quarterly monitoring until stabilization",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000&auto=format&fit=crop"
  },
  {
    number: "04",
    code: "MICR-04",
    title: "Intestinal Barrier & Microbiome Repair",
    tag: "Gastrointestinal",
    summary:
      "Investigating the mucosal lining integrity, dysbiosis, and systemic immune cross-talk to eliminate digestive distress and systemic inflammation.",
    keyAspects: [
      "Metagenomic gut microbiome sequencing analysis",
      "Zonulin, secretory IgA, and calprotectin markers",
      "Four-phase gut restoration protocol (Remove, Replace, Reinoculate, Repair)",
      "Individualized nutritional elimination and reintroduction"
    ],
    recommendedFrequency: "16-week structured protocol",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1000&auto=format&fit=crop"
  },
  {
    number: "05",
    code: "LONG-05",
    title: "Longevity & Healthspan Architecture",
    tag: "Preventive Longevity",
    summary:
      "An integrated clinical pathway focused on slowing biological aging, preserving muscle mass, bone density, and cognitive stamina across decades.",
    keyAspects: [
      "Epigenetic age biological clock analysis",
      "Zone 2 cardiovascular and high-output VO2 conditioning guidance",
      "Nutrient sensing pathway modulation (mTOR, AMPK, Sirtuins)",
      "Neuroprotective cognitive resilience strategies"
    ],
    recommendedFrequency: "Ongoing annual physician partnership",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop"
  }
];
