export interface ServiceItem {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  category: "Preventive Care" | "Diagnostics" | "Metabolic Health" | "Executive Medicine" | "Specialized Consultation";
  duration: string;
  deliveryMode: "In-Clinic Only" | "In-Clinic or Telehealth" | "Comprehensive Diagnostic Series";
  image: string;
  overview: string[];
  clinicalObjectives: string[];
  whoIsThisFor: string[];
  clinicalProtocol: Array<{
    stepNumber: string;
    phase: string;
    title: string;
    details: string;
  }>;
  diagnosticInclusions: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  highlightBadge?: string;
}

export const servicesData: ServiceItem[] = [
  {
    slug: "preventive-health-mapping",
    number: "01",
    title: "Preventive Health Mapping",
    subtitle: "A proactive clinical deep-dive to forecast and intercept chronic health risks.",
    shortDescription:
      "A comprehensive, proactive evaluation analyzing over 120 biomarkers, cardiovascular metrics, and metabolic trends before symptoms ever manifest.",
    category: "Preventive Care",
    duration: "75 Minutes (Consultation + Diagnostics)",
    deliveryMode: "In-Clinic Only",
    highlightBadge: "Foundational Program",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    overview: [
      "Rather than waiting for acute symptoms to disrupt your wellbeing, Preventive Health Mapping is engineered to assess the underlying biological systems that govern longevity, energy, and organ vitality.",
      "Dr. Vance performs an exhaustive clinical evaluation that unites advanced blood panels, arterial stiffness assessments, continuous glucose monitoring insights, and inflammatory profiling.",
      "You receive a clear, personalized physiological blueprint that translates complex lab markers into an actionable health protection strategy."
    ],
    clinicalObjectives: [
      "Early detection of subclinical cardiovascular and metabolic vulnerabilities",
      "Assessment of systemic inflammation and microvascular integrity",
      "Cellular resilience and micronutrient optimization",
      "Establishment of your personal multi-year biological baseline"
    ],
    whoIsThisFor: [
      "Individuals seeking a thorough, unhurried baseline assessment of their total health",
      "Those with family histories of early cardiovascular disease, type 2 diabetes, or metabolic decline",
      "Professionals experiencing subtle vitality drops, brain fog, or erratic recovery",
      "Proactive individuals committed to healthspan optimization and longevity"
    ],
    clinicalProtocol: [
      {
        stepNumber: "Phase 1",
        phase: "Preparation",
        title: "Pre-Visit Intake & Panel Order",
        details: "Detailed digital health timeline review, dietary history intake, and fasting diagnostic lab schedule."
      },
      {
        stepNumber: "Phase 2",
        phase: "Clinical Session",
        title: "60-Minute Physician Dialogue",
        details: "Face-to-face consultation with Dr. Vance examining physiological history, lifestyle stress, and goals."
      },
      {
        stepNumber: "Phase 3",
        phase: "Biomarker Review",
        title: "Comprehensive Multi-Panel Synthesis",
        details: "In-depth visual review of 120+ lipid, metabolic, hormonal, and inflammatory biomarkers."
      },
      {
        stepNumber: "Phase 4",
        phase: "Blueprint Delivery",
        title: "Personalized Health Blueprint",
        details: "A customized medical roadmap delivered with specific nutrition, recovery, and follow-up milestones."
      }
    ],
    diagnosticInclusions: [
      "Advanced Lipid Subfractions (ApoB, Lp(a), LDL particle count)",
      "High-Sensitivity C-Reactive Protein (hs-CRP) & Homocysteine",
      "Complete Fasting Metabolic & Insulin Sensitivity Panel (HOMA-IR)",
      "Thyroid Hormone Profile (TSH, Free T3, Free T4, Antibodies)",
      "Cardiovascular Arterial Pulse Wave & Non-Invasive Vascular Screening",
      "Nutrient & Mineral Biomarkers (Serum Vitamin D3, B12, Ferritin, RBC Magnesium)"
    ],
    faqs: [
      {
        question: "How should I prepare for the morning blood panel?",
        answer: "Fasting for 10–12 hours prior to the diagnostic session is recommended. You may drink plenty of plain water to ensure proper hydration."
      },
      {
        question: "How long after the initial consultation do I receive my report?",
        answer: "A complete synthesised clinical blueprint with all lab annotations is presented during your review session, usually within 5 to 7 business days."
      }
    ]
  },
  {
    slug: "executive-consultation",
    number: "02",
    title: "Executive Medical Consultation",
    subtitle: "High-touch, time-efficient clinical care designed for demanding professional lives.",
    shortDescription:
      "A tailored medical partnership focusing on sustained executive performance, stress resilience, circadian optimization, and risk mitigation.",
    category: "Executive Medicine",
    duration: "60 Minutes",
    deliveryMode: "In-Clinic or Telehealth",
    highlightBadge: "High-Touch Care",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1200&auto=format&fit=crop",
    overview: [
      "High-performing careers place unique demands on the human autonomic nervous system, circadian rhythm, and metabolic reserve.",
      "The Executive Medical Consultation is designed specifically for leaders, founders, and professionals who cannot afford burnout, cognitive fatigue, or unexpected health derailments.",
      "We deliver clinical precision and efficiency—minimizing administrative friction while maximizing diagnostic depth."
    ],
    clinicalObjectives: [
      "Optimizing cognitive clarity, sleep architecture, and executive energy reserve",
      "Targeted mitigation of travel-induced circadian disruption and metabolic strain",
      "Comprehensive cardiovascular screening tailored to high-stress routines",
      "Direct, frictionless communication channels for ongoing medical inquiries"
    ],
    whoIsThisFor: [
      "Senior executives, entrepreneurs, and traveling professionals",
      "Individuals navigating chronic work-related cognitive fatigue or sleep disturbance",
      "Those requiring an agile, highly accessible private physician relationship"
    ],
    clinicalProtocol: [
      {
        stepNumber: "Phase 1",
        phase: "Discovery",
        title: "Executive Health Audit",
        details: "Rapid intake analyzing sleep metrics, travel frequency, work schedule, and primary complaints."
      },
      {
        stepNumber: "Phase 2",
        phase: "Assessment",
        title: "Comprehensive Executive Exam",
        details: "Direct examination with Dr. Vance covering autonomic tone, cardiovascular status, and neurological clarity."
      },
      {
        stepNumber: "Phase 3",
        phase: "Strategy",
        title: "Performance & Health Architecture",
        details: "Pragmatic medical protocol designed to integrate seamlessly into rigorous corporate schedules."
      }
    ],
    diagnosticInclusions: [
      "Continuous Glucose Monitoring (CGM) sensor placement & 14-day analysis",
      "Autonomic Nervous System & Heart Rate Variability (HRV) profiling",
      "Comprehensive Neurotransmitter & Adrenal Stress Metabolites",
      "Sleep Architecture Screening & Home Sleep Study Evaluation"
    ],
    faqs: [
      {
        question: "Can consultations be conducted virtually if I am traveling?",
        answer: "Yes. Once an initial baseline is established in person, regular executive check-ins and protocol reviews can be conducted via our secure video consultation suite."
      }
    ]
  },
  {
    slug: "cardiometabolic-risk-reduction",
    number: "03",
    title: "Cardiometabolic Optimization",
    subtitle: "Precision lipidology, arterial health assessment, and metabolic reversal.",
    shortDescription:
      "Targeted clinical intervention addressing insulin resistance, atherogenic lipoproteins, arterial stiffness, and blood pressure variability.",
    category: "Metabolic Health",
    duration: "60 Minutes",
    deliveryMode: "In-Clinic or Telehealth",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop",
    overview: [
      "Cardiovascular disease and metabolic dysfunction remain the predominant drivers of premature disability and mortality, yet both are profoundly preventable when addressed decades in advance.",
      "Dr. Vance employs advanced lipidology that goes far beyond standard cholesterol ratios, measuring particle counts, apolipoproteins, and vascular inflammatory triggers.",
      "Our treatments focus on reversing metabolic rigidity, restoring glycemic sensitivity, and stabilizing arterial linings with personalized pharmacology and lifestyle therapy."
    ],
    clinicalObjectives: [
      "Reduction of atherogenic particle concentrations (ApoB and LDL-P)",
      "Reversal of early insulin resistance and visceral adiposity accumulation",
      "Optimization of endothelial nitric oxide production and arterial compliance",
      "Restoration of mitochondrial metabolic flexibility"
    ],
    whoIsThisFor: [
      "Patients diagnosed with prediabetes, metabolic syndrome, or fatty liver",
      "Those with elevated ApoB, Lp(a), or discordant lipid panel readings",
      "Individuals seeking evidence-based guidance to reduce statin dependency or optimize cardiovascular longevity"
    ],
    clinicalProtocol: [
      {
        stepNumber: "Phase 1",
        phase: "Testing",
        title: "Advanced Lipid & Glycemic Diagnostics",
        details: "Detailed lipid subfractionation, oral glucose tolerance verification, and visceral fat mapping."
      },
      {
        stepNumber: "Phase 2",
        phase: "Analysis",
        title: "Vascular Risk Stratification",
        details: "Multi-parameter risk scoring evaluating 10-year and 30-year cardiovascular trajectories."
      },
      {
        stepNumber: "Phase 3",
        phase: "Intervention",
        title: "Metabolic Reset Protocol",
        details: "Tailored combination of medical management, targeted micronutrients, and precision nutritional timing."
      }
    ],
    diagnosticInclusions: [
      "Lipoprotein(a), Apolipoprotein B, and LDL Particle Number (NMR)",
      "High-Sensitivity Troponin I and NT-proBNP screening",
      "Visceral Adipose Tissue (VAT) calculation & Bioimpedance",
      "Endothelial function assessment and carotid intima-media evaluation"
    ],
    faqs: [
      {
        question: "Is this service suitable if I have already had a cardiac event in the past?",
        answer: "Dr. Vance collaborates seamlessly with your primary cardiologist to provide complementary metabolic and preventive lifestyle care."
      }
    ]
  },
  {
    slug: "advanced-diagnostics",
    number: "04",
    title: "Advanced Biomarker Diagnostics",
    subtitle: "State-of-the-art laboratory testing delivering cellular-level insight.",
    shortDescription:
      "A clinical-grade diagnostic suite evaluating hormone balance, methylation pathways, immune competence, and heavy metal toxicities.",
    category: "Diagnostics",
    duration: "45 Minutes Diagnostic Session",
    deliveryMode: "Comprehensive Diagnostic Series",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop",
    overview: [
      "Standard routine lab work often looks only for overt disease thresholds. Our Advanced Diagnostics investigate subclinical trends, identifying functional deficiencies years before clinical diagnosis.",
      "Utilizing leading certified specialty laboratories, we analyze deep cellular kinetics, hormone cascades, and systemic oxidative stress.",
      "Every test is ordered with clear clinical rationale and interpreted personally by Dr. Vance in an understandable, visual format."
    ],
    clinicalObjectives: [
      "Mapping neuroendocrine and hormonal rhythms throughout the diurnal cycle",
      "Identifying cellular oxidative stress and antioxidant buffer reserves",
      "Evaluating immune reactivity, gut permeability, and systemic microbiome health",
      "Providing clear baseline metrics for personalized longevity interventions"
    ],
    whoIsThisFor: [
      "Patients experiencing unexplained fatigue, diffuse joint aches, or brain fog",
      "Those who have been told their 'labs are normal' despite persistent symptoms",
      "Individuals seeking deep physiological self-knowledge"
    ],
    clinicalProtocol: [
      {
        stepNumber: "Phase 1",
        phase: "Selection",
        title: "Physician-Curated Panel Selection",
        details: "Dr. Vance specifies only the targeted diagnostic panels that answer your distinct clinical questions."
      },
      {
        stepNumber: "Phase 2",
        phase: "Collection",
        title: "Gentle On-Site Collection",
        details: "Completed in our calm, private diagnostic suite by our specialized phlebotomy team."
      },
      {
        stepNumber: "Phase 3",
        phase: "Translation",
        title: "Clinical Interpretation Session",
        details: "A dedicated session translating complex biochemical data into actionable clarity."
      }
    ],
    diagnosticInclusions: [
      "Complete Sex Hormone Panel (Free/Total Testosterone, Estradiol, DHEA-S, SHBG)",
      "Adrenal Salivary / Urinary Cortisol Awakening Response (CAR)",
      "Comprehensive Stool & GI Microbiome PCR Profile",
      "Red Blood Cell Fatty Acid Profile (Omega-3 Index)"
    ],
    faqs: [
      {
        question: "Can I choose which diagnostic panels to order?",
        answer: "During your consultation, Dr. Vance will review which panels offer the highest diagnostic value for your specific complaints and avoid redundant testing."
      }
    ]
  },
  {
    slug: "longevity-metabolic-care",
    number: "05",
    title: "Longevity & Cellular Health",
    subtitle: "Slowing biological aging and preserving physical and cognitive stamina.",
    shortDescription:
      "A structured clinical pathway combining continuous biomarker monitoring, VO2 max optimization, and biological age recalibration.",
    category: "Specialized Consultation",
    duration: "60 Minutes",
    deliveryMode: "In-Clinic or Telehealth",
    image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=1200&auto=format&fit=crop",
    overview: [
      "Longevity medicine is not about prolonging frailty—it is about expanding your healthspan so your physical, cognitive, and emotional capabilities match your lifespan.",
      "Dr. Vance builds individualized protocols that address the biological hallmarks of aging: cellular senescence, mitochondrial decline, loss of proteostasis, and chronic low-grade inflammation.",
      "We measure physiological function, musculoskeletal strength, and cardiopulmonary capacity to ensure you remain active, sharp, and independent for decades to come."
    ],
    clinicalObjectives: [
      "Measurement and optimization of cardiopulmonary capacity (VO2 Max)",
      "Preservation of skeletal muscle mass and bone mineral density",
      "Optimization of cellular autophagy and mitochondrial turnover",
      "Cognitive protection and neurodegenerative risk reduction"
    ],
    whoIsThisFor: [
      "Adults aged 35 to 75 desiring an evidence-based roadmap for long-term vitality",
      "Individuals wanting to maintain peak athletic, cognitive, and executive capacity",
      "Those who value proactive health investment over reactive crisis management"
    ],
    clinicalProtocol: [
      {
        stepNumber: "Phase 1",
        phase: "Benchmark",
        title: "Longevity Biomarker & Functional Benchmark",
        details: "Baseline assessment of biological age markers, grip strength, balance, and metabolic agility."
      },
      {
        stepNumber: "Phase 2",
        phase: "Architecture",
        title: "Longevity Protocol Design",
        details: "Prescription of individualized exercise zones, time-restricted nourishment, and targeted clinical compounds."
      },
      {
        stepNumber: "Phase 3",
        phase: "Iteration",
        title: "Semi-Annual Recalibration",
        details: "Repeat biomarker testing to objectively verify improvements in cellular resilience."
      }
    ],
    diagnosticInclusions: [
      "Epigenetic Biological Age (DNA Methylation Clock)",
      "Cardiorespiratory Fitness (Submaximal VO2 Testing)",
      "Dual-Energy X-ray Absorptiometry (DEXA) Body Composition Review",
      "Cellular Senescence and Telomere Length Analysis"
    ],
    faqs: [
      {
        question: "Is longevity medicine based on solid clinical evidence?",
        answer: "All protocols implemented at Aura Medical Pavilion are grounded in published peer-reviewed clinical research and supervised directly by Dr. Vance."
      }
    ]
  },
  {
    slug: "chronic-care-optimization",
    number: "06",
    title: "Chronic Health Architecture",
    subtitle: "Root-cause management for complex, multifactorial health conditions.",
    shortDescription:
      "A compassionate, investigative framework addressing autoimmune tendencies, chronic digestive distress, and persistent fatigue.",
    category: "Preventive Care",
    duration: "60 Minutes",
    deliveryMode: "In-Clinic or Telehealth",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1200&auto=format&fit=crop",
    overview: [
      "Managing chronic conditions requires a physician who connects the dots across disparate organ systems rather than treating individual symptoms in isolation.",
      "Dr. Vance acts as your clinical detective and advocate, integrating gastroenterology, immunology, and endocrinology into a cohesive care plan.",
      "We work collaboratively to peel back the layers of inflammation and metabolic distress, helping you regain stability and vitality."
    ],
    clinicalObjectives: [
      "Uncovering root environmental, immunologic, or metabolic triggers",
      "Decreasing chronic inflammatory burden without compromising immune defense",
      "Restoring mucosal barrier integrity and digestive absorption",
      "Achieving measurable improvements in day-to-day stamina and wellbeing"
    ],
    whoIsThisFor: [
      "Individuals struggling with multi-system symptoms that haven't responded to standard quick-visit care",
      "Those managing chronic fatigue, Hashimoto's, IBS, or systemic joint stiffness",
      "Patients seeking compassionate medical validation and a clear path forward"
    ],
    clinicalProtocol: [
      {
        stepNumber: "Phase 1",
        phase: "Chronology",
        title: "Deep Health Timeline Analysis",
        details: "Mapping lifetime exposures, infections, stressors, and symptom trajectories."
      },
      {
        stepNumber: "Phase 2",
        phase: "Immune Mapping",
        title: "Targeted Immunometabolic Diagnostics",
        details: "Assessing antibody titers, intestinal mucosal markers, and micronutrient status."
      },
      {
        stepNumber: "Phase 3",
        phase: "Rebalancing",
        title: "Multi-Phased Restorative Protocol",
        details: "Stepwise interventions prioritizing gut barrier healing, immune modulation, and gentle recovery."
      }
    ],
    diagnosticInclusions: [
      "Comprehensive Autoantibody & Immune Screen",
      "Food Sensitivity & Intestinal Permeability (Zonulin)",
      "Organic Acid & Mitochondrial Energy Metabolites",
      "Comprehensive Heavy Metals & Environmental Toxicants Panel"
    ],
    faqs: [
      {
        question: "Will Dr. Vance replace my current specialist doctors?",
        answer: "No. Dr. Vance frequently works alongside rheumatologists, endocrinologists, and gastroenterologists, serving as an integrative internal medicine coordinator."
      }
    ]
  }
];
