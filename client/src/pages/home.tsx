import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import TestimonialsSection from "@/components/testimonials-section";
import ResourcesSection from "@/components/resources-section";
import ContactSection from "@/components/contact-section";
import BuiltSuiteModal from "@/components/built-suite-modal";
import Footer from "@/components/footer";
import { useState } from "react";

export default function Home() {
  const [showBuiltSuite, setShowBuiltSuite] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <TestimonialsSection />
        <ResourcesSection onShowBuiltSuite={() => setShowBuiltSuite(true)} />
        <ContactSection />
      </main>
      <Footer />
      
      <BuiltSuiteModal 
        isOpen={showBuiltSuite}
        onClose={() => setShowBuiltSuite(false)}
        showLogin={showLogin}
        onShowLogin={() => setShowLogin(true)}
        onHideLogin={() => setShowLogin(false)}
      />
    </div>
  );
}
