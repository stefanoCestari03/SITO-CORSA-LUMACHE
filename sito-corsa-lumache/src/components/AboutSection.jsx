import React from 'react';
import './AboutSection.css'; // Lascia l'import, ma ignoreremo temporaneamente queste regole per le onde

function AboutSection() {
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
    marginTop: '-51px', // Per evitare che l'onda superiore si sovrapponga al contenuto
    // L'SVG ha il 'dente' in basso. Il fill deve corrispondere al colore della sezione (#dd2f8a)
    backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' preserveAspectRatio='none'%3E%3Cpath class='elementor-shape-fill' fill='%23dd2f8a' d='M0,0C166,5,333,100,500,100C667,100,833,5,1000,0L1000,100L0,100L0,0Z'/%3E%3C/svg%3E\")",
  };

  // Stili per l'onda inferiore
  const bottomWaveStyle = {
    position: 'relative',
    maxWidth: '100%',
    left: '0',
    width: '100%',
    height: '50px', // Altezza dell'onda
    backgroundRepeat: 'repeat-x',/* Ripetizione orizzontale */
    backgroundSize: '700px 100%',

    zIndex: '0', // Mettiamo le onde sotto il contenuto della sezione
    pointerEvents: 'none',
    bottom: '0',
    marginBottom: '-50px',
    // L'SVG ha il 'dente' in alto. Il fill deve corrispondere al colore della sezione (#dd2f8a)
    backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' preserveAspectRatio='none'%3E%3Cpath class='elementor-shape-fill' fill='%23dd2f8a' d='M0,100C166,95,333,0,500,0C667,0,833,95,1000,100L1000,0L0,0L0,100Z'/%3E%3C/svg%3E\")",  
    // Assicurati che la tua .section abbia position: relative; e z-index nel suo CSS
    // Poiché stiamo testando le onde, concentriamoci solo su di esse.
  }
  return (
    <section id="about" className="section" >
      {/* Top Wave - con stili inline per il test */}
      <div className="section-wave section-wave--top" style={topWaveStyle}></div>
      
      <div className="container" style={sectionBackgroundStyle}>
        <div className='textContainerAbout'>
          <h2>Perchè lumaci</h2>
          <p>La Grande Corsa della Città è l'appuntamento annuale per gli appassionati di corsa di tutte le età e livelli. Quest'anno, ci impegniamo a offrire un'esperienza indimenticabile, combinando la sfida sportiva con la scoperta dei luoghi più suggestivi della nostra città.</p>
          <p>Il nostro obiettivo è promuovere uno stile di vita sano e attivo, creando al contempo un forte senso di comunità. Che tu voglia battere il tuo record personale o semplicemente goderti una camminata in compagnia, questa corsa è per te!</p>
        </div>
      </div>

      {/* Bottom Wave - con stili inline per il test */}
      <div className="section-wave section-wave--bottom" style={bottomWaveStyle}></div>
    </section>
  );
}

export default AboutSection;