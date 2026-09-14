export interface ContactDetails {
  clinicName: string;
  doctorName: string;
  tagline: string;
  address: {
    line1: string;
    line2: string;
    landmark: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    parkingInstructions: string;
  };
  communication: {
    phone: string;
    displayPhone: string;
    email: string;
    whatsappText: string;
    whatsappUrl: string;
  };
  schedule: Array<{
    days: string;
    hours: string;
    badge?: string;
  }>;
  transitGuide: Array<{
    mode: string;
    title: string;
    instructions: string;
  }>;
  emergencyNotice: {
    title: string;
    content: string;
  };
}

export const contactData: ContactDetails = {
  clinicName: "Aura Medical Pavilion",
  doctorName: "Dr. Julian Vance, MD",
  tagline: "Thoughtful care. Modern medicine. A healthier tomorrow.",
  address: {
    line1: "123 Demo Medical Avenue",
    line2: "Pavilion 4B, Level 4 (West Atrium)",
    landmark: "Directly opposite Central Botanic Gardens",
    city: "Demo City",
    state: "Karnataka",
    postalCode: "560001",
    country: "India",
    parkingInstructions: "Complimentary valet parking is available at the West Pavilion entrance for all scheduled patients."
  },
  communication: {
    phone: "+91 90000 00000",
    displayPhone: "+91 90000 00000",
    email: "concierge@auramedical-demo.com",
    whatsappText: "Chat with Patient Concierge",
    whatsappUrl: "https://wa.me/919000000000?text=Hello%20Aura%20Medical%20Pavilion%2C%20I%20would%20like%20to%20inquire%20about%20a%20consultation."
  },
  schedule: [
    { days: "Monday – Friday", hours: "08:30 AM – 06:00 PM", badge: "Consultations & Lab" },
    { days: "Saturday", hours: "09:00 AM – 02:00 PM", badge: "Diagnostic Reviews" },
    { days: "Sunday", hours: "Closed", badge: "Member Urgent On-Call" }
  ],
  transitGuide: [
    {
      mode: "Private Vehicle / Valet",
      title: "Valet Arrival",
      instructions: "Enter via Gate 2 on Demo Medical Avenue. Valet attendants will secure your vehicle and direct you to the private Level 4 express elevator."
    },
    {
      mode: "Metro & Rapid Transit",
      title: "Botanical Station",
      instructions: "Located 250 meters from the station's North Exit. Covered pedestrian walkway leads directly to the medical pavilion foyer."
    }
  ],
  emergencyNotice: {
    title: "Urgent Medical Care Protocol",
    content:
      "Aura Medical Pavilion is an outpatient private practice designed for scheduled consultations, preventive health planning, and diagnostic reviews. If you are experiencing chest pain, severe shortness of breath, sudden acute weakness, or any life-threatening emergency, please dial 112 (or your local emergency services) or proceed immediately to the nearest hospital emergency room."
  }
};
