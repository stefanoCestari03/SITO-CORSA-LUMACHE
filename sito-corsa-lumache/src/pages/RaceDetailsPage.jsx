import React from 'react';
import RaceDetails from '../components/RaceDetails';
import Lightbox from 'react-lightbox-component'; // Importa Lightbox
import 'react-lightbox-component/build/css/index.css'; // Importa gli stili di Lightbox

import raceMapImage from '../assets/race-map.jpg'; // Importa l'immagine della mappa
import raceDroneVideo from '../assets/race-video.mp4'; // Importa il video del drone
import './RaceDetailsPage.css'; // I tuoi stili personalizzati

function RaceDetailsPage() {
  const lightboxImages = [
    {
      src: raceMapImage, // La tua immagine del percorso
      title: 'Mappa dettagliata del percorso', // Titolo mostrato nel lightbox
      description: 'Esplora ogni dettaglio del tracciato della corsa.' // Descrizione mostrata nel lightbox
    }
  ];

  return (
    <div className="race-details-page-wrapper">
      {/* Sezione video di sfondo */}
      <section className="video-background-section">
        <video autoPlay loop muted playsInline className="background-video">
          <source src={raceDroneVideo} type="video/mp4" />
          Il tuo browser non supporta il tag video.
        </video>
        <div className="video-overlay">
          <div className="container video-overlay-content">
            <h2>L'Avventura Ti Attende!</h2>
            <p>Guarda in anteprima la bellezza del percorso che ti aspetta, catturata dall'alto.</p>
          </div>
        </div>
      </section>

      {/* Sezione dettagli e mappa del percorso */}
      <section id="race-info" className="section race-details-content">
        <div className="container">
          <h2>Dettagli Completi della Corsa</h2>
          <p className="page-description">
            Esplora tutti i dettagli della nostra fantastica corsa. Qui troverai
            informazioni sul percorso, regolamento, punti di ristoro e molto altro.
          </p>

          {/* Lightbox per l'immagine del percorso */}
          <div className="race-map-container">
            <h3>Il Percorso in Dettaglio</h3>
            <p>Clicca sulla mappa per ingrandirla e vedere tutti i dettagli!</p>
            <Lightbox images={lightboxImages} thumbnailWidth="auto" thumbnailHeight="250px" />
            <p>
              La nostra corsa ti guiderà attraverso i paesaggi più suggestivi,
              combinando la sfida sportiva con la bellezza della natura.
            </p>
          </div>

          <RaceDetails /> {/* Riutilizziamo il componente esistente per i dettagli */}

          {/* Puoi aggiungere ulteriori sezioni qui sotto, specifiche per questa pagina */}
          <section className="additional-info-section">
            <h3>Regolamento Completo</h3>
            <p>
              Scarica il regolamento ufficiale per tutti i dettagli e le norme
              di partecipazione.
            </p>
            <button onClick={() => alert('Download Regolamento!')}>
              Scarica Regolamento (PDF)
            </button>
          </section>

          <section className="additional-info-section">
            <h3>Punti di Ristoro e Servizi</h3>
            <p>
              Lungo il percorso troverai diversi punti di ristoro ben forniti
              e assistenza medica per garantire la tua sicurezza.
            </p>
            {/* Qui potresti aggiungere un elenco o una tabella */}
          </section>
        </div>
      </section>
    </div>
  );
}

export default RaceDetailsPage;