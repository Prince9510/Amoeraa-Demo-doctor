import HeroSection from "@/components/home/HeroSection";
import TrustStrip from "@/components/home/TrustStrip";
import DoctorPreview from "@/components/home/DoctorPreview";
import ServicesSection from "@/components/home/ServicesSection";
import PhilosophySection from "@/components/home/PhilosophySection";
import TreatmentsSection from "@/components/home/TreatmentsSection";
import ClinicExperienceGallery from "@/components/home/ClinicExperienceGallery";
import PatientJourneySection from "@/components/home/PatientJourneySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import QuickBookingCTA from "@/components/home/QuickBookingCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <DoctorPreview />
      <ServicesSection />
      <PhilosophySection />
      <TreatmentsSection />
      <ClinicExperienceGallery />
      <PatientJourneySection />
      <TestimonialsSection />
      <FAQSection />
      <QuickBookingCTA />
    </>
  );
}
