import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import RegistrationCta from '../components/RegistrationCta'; // Solo la CTA, i dettagli vanno nella nuova pagina

function HomePage() {
  return (
    <>
      
      <AboutSection />
      <RegistrationCta />
      {/* RaceDetails non è più qui, va nella sua pagina dedicata */}
    </>
  );
}

export default HomePage;