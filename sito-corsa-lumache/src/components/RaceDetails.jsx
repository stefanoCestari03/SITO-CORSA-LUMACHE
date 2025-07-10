import './RaceDetails.css'; // Creeremo questo file CSS



function RaceDetails() {
  return (
      
      <section id="details" className="section">
        {/* Top Wave - con stili inline per il test */}
        
        <div className="container">
          <h2>Dettagli della Corsa</h2>
          <div className="details-grid">
            <div className="detail-item">
              <h3>Data</h3>
              <p>15 Settembre 2025</p>
            </div>
            <div className="detail-item">
              <h3>Ora</h3>
              <p>Partenza ore 09:00</p>
              <p>Ritrovo dalle 08:00</p>
            </div>
            <div className="detail-item">
              <h3>Luogo</h3>
              <p>Piazza del Duomo, [Nome Città]</p>
              <p>Parcheggio disponibile nelle vicinanze</p>
            </div>
            <div className="detail-item">
              <h3>Percorso</h3>
              <p>10 km (agonistica e non agonistica)</p>
              <p>Dislivello (250D+)</p>
            </div>
          </div>
        </div>
      </section>
  );
}

export default RaceDetails;