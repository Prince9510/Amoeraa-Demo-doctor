export interface ClinicInfo {
  name: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  establishedYear: number;
  pillars: Array<{
    step: string;
    word: string;
    title: string;
    description: string;
  }>;
  trustPoints: Array<{
    title: string;
    description: string;
    iconName: string;
  }>;
  facilities: Array<{
    id: string;
    title: string;
    description: string;
    category: string;
    image: string;
  }>;
  hours: Array<{
    days: string;
    hours: string;
    note?: string;
  }>;
  address: {
    street: string;
    suite: string;
    district: string;
    city: string;
    postal: string;
    country: string;
    mapCoordinates: { lat: number; lng: number };
  };
  contact: {
    phone: string;
    displayPhone: string;
    email: string;
    whatsapp: string;
    emergencyNote: string;
  };
  isDemoContent: boolean;
}

export const clinicData: ClinicInfo = {
  name: "Aura Medical Pavilion",
  tagline: "Thoughtful care. Modern medicine. A healthier tomorrow.",
  shortDescription:
    "A private medical practice dedicated to personalized internal medicine, advanced biomarker diagnostics, and proactive longevity care.",
  longDescription:
    "Designed from the ground up as an alternative to hurried corporate healthcare, Aura Medical Pavilion unites world-class diagnostic medicine with an atmosphere of tranquility, discretion, and human warmth.",
  establishedYear: 2016,
  pillars: [
    {
      step: "01",
      word: "LISTEN",
      title: "Comprehensive Dialogue",
      description:
        "We begin every relationship with an unhurried, exhaustive exploration of your medical history, lifestyle context, and long-term vitality aspirations."
    },
    {
      step: "02",
      word: "UNDERSTAND",
      title: "Deep Diagnostic Mapping",
      description:
        "Looking far beyond symptomatic snapshots through 120+ advanced biomarkers, metabolic profiling, and cardiovascular risk stratification."
    },
    {
      step: "03",
      word: "PLAN",
      title: "Targeted Clinical Strategy",
      description:
        "Co-designing a clear, actionable roadmap spanning preventive therapies, nutritional biochemistry, sleep restoration, and medical supervision."
    },
    {
      step: "04",
      word: "CARE",
      title: "Sustained Partnership",
      description:
        "Continuous physician-led oversight, proactive milestone reviews, and rapid direct communication ensuring your vitality remains protected."
    }
  ],
  trustPoints: [
    {
      title: "Personalized Care",
      description: "60-minute unhurried consultations centered on your individual biological needs.",
      iconName: "HeartHandshake"
    },
    {
      title: "Evidence-Based Medicine",
      description: "Rooted strictly in peer-reviewed clinical research and clinical diagnostics.",
      iconName: "ShieldCheck"
    },
    {
      title: "Patient-First Experience",
      description: "Seamless scheduling, zero waiting room congestion, and direct doctor dialogue.",
      iconName: "UserCheck"
    },
    {
      title: "Modern Diagnostic Suites",
      description: "State-of-the-art non-invasive biomarker, metabolic, and cardiovascular evaluation.",
      iconName: "Stethoscope"
    }
  ],
  facilities: [
    {
      id: "consultation-suite",
      title: "Private Consultation Suites",
      description: "Acoustically insulated suites with natural botanical light, designed for calm, focused medical conversations.",
      category: "Patient Care",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "diagnostic-lab",
      title: "Advanced Diagnostic Lab",
      description: "On-site diagnostic analysis capabilities for rapid metabolic, lipid sub-fraction, and inflammatory profiling.",
      category: "Diagnostics",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "reception-lounge",
      title: "Quiet Arrival Lounge",
      description: "A curated calming reception with zero clinical harshness, artisanal herbal infusions, and individual privacy.",
      category: "Atmosphere",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "cardio-suite",
      title: "Vascular & Metabolic Suite",
      description: "High-resolution ultrasound and cardiovascular endurance assessment technologies for non-invasive screenings.",
      category: "Assessment",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop"
    }
  ],
  hours: [
    { days: "Monday – Friday", hours: "08:30 AM – 06:00 PM", note: "Dedicated consultation hours" },
    { days: "Saturday", hours: "09:00 AM – 02:00 PM", note: "Diagnostic panels & follow-ups" },
    { days: "Sunday", hours: "Closed", note: "Direct physician on-call support for members" }
  ],
  address: {
    street: "123 Demo Medical Avenue",
    suite: "Pavilion 4B, Level 4",
    district: "Parkway Medical District",
    city: "Demo City",
    postal: "560001",
    country: "India",
    mapCoordinates: { lat: 12.9716, lng: 77.5946 }
  },
  contact: {
    phone: "+91 90000 00000",
    displayPhone: "+91 90000 00000",
    email: "concierge@auramedical-demo.com",
    whatsapp: "https://wa.me/919000000000?text=Hello%20Aura%20Medical%20Pavilion%2C%20I%20would%20like%20to%20inquire%20about%20a%20consultation.",
    emergencyNote:
      "For acute medical emergencies, please immediately call local emergency services or visit the nearest hospital emergency department."
  },
  isDemoContent: true
};
