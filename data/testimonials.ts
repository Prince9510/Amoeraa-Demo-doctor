export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  context: string;
  programType: string;
  verifiedDemoNote: string;
  timeframe: string;
}

export const testimonialsData: {
  sectionTag: string;
  sectionTitle: string;
  demoNotice: string;
  items: TestimonialItem[];
} = {
  sectionTag: "SAMPLE PATIENT FEEDBACK",
  sectionTitle: "Experiences in Thoughtful, Unhurried Medicine",
  demoNotice:
    "Demonstration patient feedback. Illustrative fictional examples created solely for portfolio evaluation.",
  items: [
    {
      id: "feedback-1",
      quote:
        "For years I was told my basic lab numbers were completely normal, yet I felt chronically drained. Dr. Vance took 60 uninterrupted minutes to actually review my complete timeline, uncovered insulin resistance, and gave me a sustainable plan that restored my energy.",
      author: "Eleni M.",
      context: "Managing Director & Mother",
      programType: "Cardiometabolic & Preventive Program",
      verifiedDemoNote: "Sample Patient Experience",
      timeframe: "14 months under care"
    },
    {
      id: "feedback-2",
      quote:
        "The difference between rushed ten-minute clinic visits and the care at Aura Pavilion is extraordinary. The calm atmosphere, the thoroughness of the cardiovascular diagnostics, and the clarity of Dr. Vance's explanations gave me complete confidence.",
      author: "Marcus T.",
      context: "Architect & Endurance Cyclist",
      programType: "Executive Health & Longevity",
      verifiedDemoNote: "Sample Patient Experience",
      timeframe: "2 years under care"
    },
    {
      id: "feedback-3",
      quote:
        "What sets Dr. Vance apart is his refusal to simply prescribe a pill and move on. He looks at sleep, biochemistry, and stress physiology as an integrated whole. My inflammation markers have dropped significantly.",
      author: "Dr. Sarah K.",
      context: "University Professor",
      programType: "Biomarker Mapping & Chronic Care",
      verifiedDemoNote: "Sample Patient Experience",
      timeframe: "18 months under care"
    },
    {
      id: "feedback-4",
      quote:
        "Navigating health concerns as an executive traveling across continents is challenging. Dr. Vance's continuous guidance and proactive metabolic monitoring have kept my focus sharp and my vascular markers optimal.",
      author: "Vikram R.",
      context: "Technology Entrepreneur",
      programType: "Executive Medical Care",
      verifiedDemoNote: "Sample Patient Experience",
      timeframe: "9 months under care"
    }
  ]
};
