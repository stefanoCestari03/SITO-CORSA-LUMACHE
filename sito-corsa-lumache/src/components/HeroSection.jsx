import React from 'react';
import './HeroSection.css'; // Creeremo questo file CSS
// Puoi scaricare un'immagine di corsa e metterla in src/assets/race-bg.jpg
// Ad esempio: https://unsplash.com/photos/a-man-is-running-on-a-track-J4vHh14_E2k
// Rinominala e salva in src/assets/race-bg.jpg
import backgroundImage from '../assets/LumacaHero.jpg';

function HeroSection() {
  return (
    <section className="hero-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-overlay">
        <div className="container">
          <h2>Metti alla prova i tuoi limiti!</h2>
          <p>Unisciti a noi per l'evento di corsa più emozionante dell'anno. Sia che tu sia un corridore esperto o un principiante, c'è un percorso per te!</p>
          <a href="#register" className="button">Iscriviti Ora!</a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;