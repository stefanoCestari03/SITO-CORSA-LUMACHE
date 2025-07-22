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
    marginBottom: '-52px',
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
          <h2>La "Snail Trail 10K"  Un Ritorno alle Origini con Spirito Giovane!</h2>
          <p>Preparatevi, il nostro paese si rianima! La "Snail Trail 10K" non è solo una corsa, ma un vero e proprio viaggio nel tempo, che riporta in vita lo spirito della storica "Lumaci en Fuga". L'idea nasce da noi, giovani del paese, con il desiderio di rivitalizzare le nostre tradizioni e di unire la comunità attraverso lo sport e il divertimento.
Vogliamo che sia un'occasione per tutti di mettersi alla prova, godendosi il percorso che ha visto generazioni di corridori sfidarsi. Ma l'impegno sportivo è solo l'inizio: al traguardo, l'atmosfera si scalderà! Festeggeremo insieme la fatica e la gioia della gara, brindando con una meritata birretta, prima di immergerci nella festa più attesa: Sagra delle Piazze.
Unitevi a noi per correre, sorridere e divertirvi, riscoprendo il piacere di stare insieme e di celebrare le nostre radici!</p>
          
        </div>
      </div>

      {/* Bottom Wave - con stili inline per il test */}
      <div className="section-wave section-wave--bottom" style={bottomWaveStyle}></div>
    </section>
  );
}

export default AboutSection;