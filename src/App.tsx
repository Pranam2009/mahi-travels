import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { InstagramSection } from './components/InstagramSection';
import { ContactSection } from './components/ContactSection';
import { FloatingControls } from './components/FloatingControls';
import { Footer } from './components/Footer';
import { QuickBookingModal } from './components/QuickBookingModal';
import { SEOInfoModal } from './components/SEOInfoModal';
import { IntroVideo } from './components/IntroVideo';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [seoModalOpen, setSeoModalOpen] = useState(false);
  const [introOpen, setIntroOpen] = useState(true);

  const handleOpenBooking = (serviceTitle?: string) => {
    setSelectedService(serviceTitle);
    setBookingModalOpen(true);
  };

  const handleOpenIntro = () => {
    setIntroOpen(true);
  };

  const handleCloseIntro = () => {
    setIntroOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 flex flex-col selection:bg-[#F97316] selection:text-white font-['Poppins',sans-serif]">
      
      {/* Intro Video Overlay */}
      <IntroVideo isOpen={introOpen} onClose={handleCloseIntro} />

      {/* Navigation */}
      <Navbar onOpenBookingModal={handleOpenBooking} onOpenIntro={handleOpenIntro} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onOpenBookingModal={() => handleOpenBooking()} onOpenIntro={handleOpenIntro} />
        <AboutUs />
        <Services onOpenBookingModal={handleOpenBooking} />
        <WhyChooseUs />
        <InstagramSection />
        <ContactSection />
      </main>

      {/* Floating Call, WhatsApp, Video & Mobile Contact Bar */}
      <FloatingControls onOpenIntro={handleOpenIntro} />

      {/* Footer */}
      <Footer onOpenSEOModal={() => setSeoModalOpen(true)} />

      {/* Interactive Modals */}
      <QuickBookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        selectedServiceTitle={selectedService}
      />

      <SEOInfoModal
        isOpen={seoModalOpen}
        onClose={() => setSeoModalOpen(false)}
      />

    </div>
  );
}
