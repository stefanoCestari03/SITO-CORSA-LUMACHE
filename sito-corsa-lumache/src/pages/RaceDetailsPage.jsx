import React from "react"; // Assicurati di avere useState se lo usi altrove
import ModalImage from "react-modal-image"; // <--- QUESTA DEVE ESSERE LA NUOVA RIGA
import RaceDetails from "../components/RaceDetails";
// import Lightbox from "react-lightbox-component"; // <--- QUESTA DEVE ESSERE COMMENTATA O CANCELLATA
// import "react-lightbox-component/build/css/index.css"; // <--- QUESTA DEVE ESSERE COMMENTATA O CANCELLATA
import raceMapImage from "../assets/race-map.jpg";

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
    <div className="container section">
      <RaceDetails />
      <div className="race-map-section">
        <h3>Mappa Interattiva del Percorso</h3>
        <p>Clicca sull'immagine per ingrandire la mappa e visualizzare i dettagli del percorso.</p>
        {/* Utilizzo di ModalImage - assicurati che sia esattamente così */}
        <div style={{ maxWidth: '600px', margin: '0 auto', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
          <ModalImage
            small={raceMapImage}
            large={raceMapImage}
            alt="Mappa del Percorso"
            hideDownload={true}
            hideZoom={false}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}

  export default RaceDetailsPage;