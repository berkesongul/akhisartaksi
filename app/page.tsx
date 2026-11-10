import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import ServiceZones from "@/components/ServiceZones";
import VehicleOptions from "@/components/VehicleOptions";
import RouteEstimator from "@/components/RouteEstimator";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import WelcomeModal from "@/components/WelcomeModal";
import FloatingCallWidget from "@/components/FloatingCallWidget";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0e0e0e] overflow-x-hidden pb-28 md:pb-0">
      <Navbar />
      <Hero />
      <TrustBadges />
      <ServiceZones />
      <VehicleOptions />
      <RouteEstimator />
      <Testimonials />
      <FAQSection />
      <ContactSection />
      <Footer />
      <StickyMobileCTA />
      <WelcomeModal />
      <FloatingCallWidget />
      <WhatsAppWidget />
    </main>
  );
}
