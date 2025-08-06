import ModalImage from "react-modal-image";
import raceMapImage from "../assets/immaginePercorso.jpg";
import verticalVideo from "../assets/verticalVideo.mp4"; // CAMBIATO: da orizzontalVideo a verticalVideo
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
  height: '50px', /* AGGIORNATO: da qualsiasi valore a 50px come AboutSection */
  backgroundRepeat: 'repeat-x',
  backgroundSize: '700px 100%',
  zIndex: '0',
  pointerEvents: 'none',
  top: '0',
  marginTop: '-51px',
  backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' preserveAspectRatio='none'%3E%3Cpath class='elementor-shape-fill' fill='%23f0afcf' d='M0,0C166,5,333,100,500,100C667,100,833,5,1000,0L1000,100L0,100L0,0Z'/%3E%3C/svg%3E\")",
};

function RaceDetailsPage() {
  return (
    <div className="race-details-page">
      <div className="section-wave section-wave--top" style={topWaveStyle}></div>
      <div className="container section">
        
        {/* AGGIUNTO: Sezione Video */}
        <div className="video-hero-section">
          <div className="video-title-container">
            <h2 className="video-section-title">Scopri il Percorso</h2>
            <p className="video-section-subtitle">Guarda l'anteprima del nostro fantastico percorso di corsa</p>
          </div>
          
          <div className="video-container">
            <video 
              className="race-preview-video"
              // controls // RIMOSSO: controlli video
              autoPlay /* AGGIUNTO: avvio automatico */
              muted /* AGGIUNTO: necessario per autoplay su mobile */
              loop /* AGGIUNTO: loop infinito */
              preload="auto" /* CAMBIATO: da metadata a auto per caricamento completo */
              // poster={raceMapImage} // RIMOSSO: poster per evitare immagine gigante
              playsInline
              webkit-playsinline="true"
              style={{ borderRadius: '15px' }} /* AGGIUNTO: border radius */
            >
              <source src={verticalVideo} type="video/mp4" /> {/* CAMBIATO: verticalVideo */}
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