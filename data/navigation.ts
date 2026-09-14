export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export const mainNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Doctor", href: "/doctor" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" }
];

export const footerLinks = {
  practice: [
    { label: "About Practice", href: "/about" },
    { label: "Meet Dr. Vance", href: "/doctor" },
    { label: "Clinical Philosophy", href: "/about#philosophy" },
    { label: "Clinic Facilities", href: "/about#facilities" },
    { label: "Patient Charter", href: "/about#charter" }
  ],
  services: [
    { label: "Preventive Health Mapping", href: "/services/preventive-health-mapping" },
    { label: "Executive Consultation", href: "/services/executive-consultation" },
    { label: "Cardiometabolic Optimization", href: "/services/cardiometabolic-risk-reduction" },
    { label: "Advanced Biomarker Diagnostics", href: "/services/advanced-diagnostics" },
    { label: "Longevity & Cellular Care", href: "/services/longevity-metabolic-care" },
    { label: "Chronic Care Architecture", href: "/services/chronic-care-optimization" }
  ],
  patientCare: [
    { label: "Book Consultation", href: "/appointment" },
    { label: "First Visit Guide", href: "/about#first-visit" },
    { label: "Frequently Asked Questions", href: "/#faq" },
    { label: "Contact & Directions", href: "/contact" },
    { label: "Emergency Guidance", href: "/contact#emergency" }
  ]
};

export const demoDisclaimer = {
  badge: "AMPERAA PORTFOLIO DEMO",
  text: "This is a demonstration website showcasing digital healthcare UI/UX, motion design, and frontend architecture by Amperaa. All doctor credentials, patient testimonials, and clinic data are fictional.",
  author: "Amperaa Creative Studio",
  year: "2026"
};
