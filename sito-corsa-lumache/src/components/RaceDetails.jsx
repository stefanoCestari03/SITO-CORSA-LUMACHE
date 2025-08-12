import './RaceDetails.css'; // Creeremo questo file CSS




function RaceDetails() {
  return (
      
      <section id="details" className="section">
        {/* Top Wave - con stili inline per il test */}
        
        <div className="container">
          <h2 id="spazioDettagli">Dettagli della Corsa</h2>
          <div className="details-grid">
            <div className="detail-item">
              <h3>Data</h3>
              <p>13 Settembre 2025</p>
            </div>
            <div className="detail-item">
              <h3>Ora</h3>
              <p>Partenza ore 15:30</p>
              <p>Ritrovo dalle 14:30</p>
            </div>
            <a href='https://maps.app.goo.gl/niQPtwqxNosNHhqM7'><div className="detail-item">
              <h3>Luogo</h3>
              <p id="luogo">Piazze di Bedollo (TN)</p>
              <p>Parcheggio disponibile nelle vicinanze <br/> <strong>cliccami per vedere la posizione</strong></p>
            </div></a>
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