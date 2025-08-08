import { useEffect } from 'react'; // AGGIUNTO: import useEffect
import ModalImage from "react-modal-image";
import { useLocation } from 'react-router-dom'; // AGGIUNTO: import useLocation
import raceMapImage from "../assets/immaginePercorso.jpg";
import organizerPhoto from "../assets/organizerPhoto.jpg"; // AGGIUNTO: import della foto organizer
import verticalVideo from "../assets/verticalVideo.mp4";
import RaceDetails from "../components/RaceDetails";
import "./RaceDetailsPage.css";

const sectionBackgroundStyle = {
  backgroundSize: 'cover',
  whidth: '100%',
  padding: '60px 0',
  textAlign: 'center',
  backgroundColor: '#dd2f8a',
  position: 'relative', 
  zIndex: '1', 
  overflow: 'hidden', 
};

const topWaveStyle = {
  position: 'relative',
  left: '0',
  width: '100%',
  height: '50px',
  backgroundRepeat: 'repeat-x',
  backgroundSize: '700px 100%',
  zIndex: '0',
  pointerEvents: 'none',
  top: '0',
  marginTop: '-50px',
  backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' preserveAspectRatio='none'%3E%3Cpath class='elementor-shape-fill' fill='%23f0afcf' d='M0,0C166,5,333,100,500,100C667,100,833,5,1000,0L1000,100L0,100L0,0Z'/%3E%3C/svg%3E\")",
};

function RaceDetailsPage() {
  const location = useLocation(); // AGGIUNTO: per leggere l'hash dall'URL

  // AGGIUNTO: Effect per gestire lo scroll automatico
  useEffect(() => {
    if (location.hash === '#chi-organizza') {
      setTimeout(() => {
        const element = document.getElementById('chi-organizza');
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
    <div className="race-details-page">
      <div className="section-wave section-wave--top" style={topWaveStyle}></div>
      <div className="container section">
        
        {/* MODIFICATO: Aggiunto id per lo scroll */}
        <div id="chi-organizza" className="organizer-photo-section">
          <div className="organizer-photo-title-container">
            <h2 className="organizer-photo-section-title">Chi Organizza</h2>
            <p className="organizer-photo-section-subtitle">I nostri organizzatori:
            </p>
          </div>
          
          <div className="organizer-photo-container">
            <img 
              src={organizerPhoto}
              alt="Foto degli organizzatori"
              className="organizer-photo-image"
            />
          </div>
        </div>

        {/* MODIFICATO: Sezione Video con sfondo come la foto organizer */}
        <div className="video-hero-section">
          <div className="video-title-container">
            <h2 className="video-section-title">Scopri il Percorso</h2>
            <p className="video-section-subtitle">Guarda l'anteprima del nostro fantastico percorso di corsa</p>
          </div>
          
          <div className="video-container">
            <video 
              className="race-preview-video"
              autoPlay
              muted
              loop
              preload="auto"
              playsInline
              webkit-playsinline="true"
              style={{ borderRadius: '15px' }}
            >
              <source src={verticalVideo} type="video/mp4" />
              Il tuo browser non supporta il tag video.
            </video>
          </div>
        </div>

        <RaceDetails />
        
        <div id="mappaPercorso" className="race-map-section">
          <div id="SpaziaTitolo"><h2>Mappa Interattiva del Percorso</h2></div>
          <p>Clicca sull'immagine per ingrandire la mappa e visualizzare i dettagli del percorso.</p>
          
          <div style={{
            maxWidth: '600px',
            width: '100%',
            margin: '0 auto',
            borderRadius: '8px',
            overflow: 'hidden',
            position: 'relative',
            WebkitTransform: 'translateZ(0)',
            transform: 'translateZ(0)',
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden'
          }}>
            <ModalImage
              small={raceMapImage}
              large={raceMapImage}
              alt="Mappa del Percorso"
              hideDownload={true}
              hideZoom={false}
              className="race-map-image"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                objectFit: 'contain'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RaceDetailsPage;