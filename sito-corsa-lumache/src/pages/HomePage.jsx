import { useEffect } from 'react'; // AGGIUNTO: useEffect
import { useLocation } from 'react-router-dom'; // AGGIUNTO: useLocation
import AboutSection from '../components/AboutSection';
import RegistrationCta from '../components/RegistrationCta'; // Solo la CTA, i dettagli vanno nella nuova pagina

function HomePage() {
  const location = useLocation(); // AGGIUNTO: per leggere l'hash dall'URL

  // AGGIUNTO: Effect per gestire lo scroll automatico alla AboutSection
  useEffect(() => {
    if (location.hash === '#about-corsa') {
      setTimeout(() => {
        const element = document.getElementById('about-corsa');
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 300);
    }
  }, [location]);

  return (
    <>
      
      <AboutSection />
      <RegistrationCta />
      {/* RaceDetails non è più qui, va nella sua pagina dedicata */}
    </>
  );
}

export default HomePage;