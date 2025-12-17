import React from 'react';
import Navbar from './components/Navbar';
import UpcomingHero from './components/UpcomingHero';
import EcosystemSection from './components/EcosystemSection';
import EvidenceSection from './components/EvidenceSection';
import NarrativeSection from './components/NarrativeSection';
import TestimonialSection from './components/TestimonialSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-spark-navy min-h-screen text-white selection:bg-spark-gold selection:text-spark-navy">
      <Navbar />
      
      <main>
        {/* 1. UPCOMING */}
        <UpcomingHero />
        
        {/* 2. JOIN / ECOSYSTEM */}
        <EcosystemSection />
        
        {/* 3. EVIDENCE */}
        <EvidenceSection />

        {/* 4. THE NARRATIVE (Your Spark, Your Journey) */}
        <NarrativeSection />

        {/* 5. TESTIMONIALS */}
        <TestimonialSection />
        
        {/* 6. ACTION (Form) */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;