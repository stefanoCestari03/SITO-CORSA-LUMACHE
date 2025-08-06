import ModalImage from "react-modal-image"; // <--- QUESTA DEVE ESSERE LA NUOVA RIGA
import RaceDetails from "../components/RaceDetails";
import "./RaceDetailsPage.css"; // Importa il CSS
// import Lightbox from "react-lightbox-component"; // <--- QUESTA DEVE ESSERE COMMENTATA O CANCELLATA
// import "react-lightbox-component/build/css/index.css"; // <--- QUESTA DEVE ESSERE COMMENTATA O CANCELLATA
import raceMapImage from "../assets/immaginePercorso.jpg"; // Assicurati che il percorso dell'immagine sia corretto

const sectionBackgroundStyle = {
      backgroundSize: 'cover',
      whidth: '100%', // Copertura completa dello sfondo
      padding: '60px 0',          // Padding interno sopra e sotto
      textAlign: 'center',        // Allineamento testo al centro
      backgroundColor: '#dd2f8a', // Il colore di sfondo della tua sezione
      
      // Cruciale per il posizionamento delle onde interne
      position: 'relative', 
      zIndex: '1', 
      overflow: 'hidden', 
    };
  // Stili per l'onda superiore

  const topWaveStyle = {
    position: 'relative',
    left: '0',

    width: '100%',
    height: '50px', // Altezza dell'onda
    backgroundRepeat: 'repeat-x',/* Ripetizione orizzontale */
    backgroundSize: '700px 100%',
    zIndex: '0', // Mettiamo le onde sotto il contenuto della sezione
    pointerEvents: 'none',
    top: '0',
    marginTop: '-50px', // Per evitare che l'onda superiore si sovrapponga al contenuto
    // L'SVG ha il 'dente' in basso. Il fill deve corrispondere al colore della sezione (#dd2f8a)
    backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' preserveAspectRatio='none'%3E%3Cpath class='elementor-shape-fill' fill='%23f0afcf' d='M0,0C166,5,333,100,500,100C667,100,833,5,1000,0L1000,100L0,100L0,0Z'/%3E%3C/svg%3E\")",
  };

function RaceDetailsPage() {
  // Se avevi un array lightboxImages in questo formato specifico, puoi rimuoverlo o commentarlo
  // perché react-modal-image funziona in modo diverso
  // const lightboxImages = [
  //   {
  //     src: raceMapImage,
  //     title: "Mappa del Percorso",
  //     description: "Clicca per ingrandire la mappa interattiva della corsa."
  //   }
  // ];

  return (
    <div className="race-details-page">
      <div className="section-wave section-wave--top" style={topWaveStyle}></div>
      <div className="container section">
        
        <RaceDetails />
        <div id="mappaPercorso" className="race-map-section">
        <div id="SpaziaTitolo"><h2>Mappa Interattiva del Percorso</h2></div>
        <p>Clicca sull'immagine per ingrandire la mappa e visualizzare i dettagli del percorso.</p>
        {/* Utilizzo di ModalImage - container ottimizzato per iOS */}
        <div style={{
          maxWidth: '600px',
          width: '100%',
          margin: '0 auto',
          borderRadius: '8px',
          overflow: 'hidden',
          position: 'relative',
          /* Fix per iOS */
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