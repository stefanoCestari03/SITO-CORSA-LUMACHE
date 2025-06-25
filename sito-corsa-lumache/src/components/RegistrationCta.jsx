import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import './RegistrationCta.css';

function RegistrationCta() {
  return (
    <section id="register" className="section registration-cta">
      <div className="container">
        <div className='textContainerRegistration'>
          <h2>Non perdere l'occasione!</h2>
          <p>Le iscrizioni sono aperte! Assicurati il tuo posto e preparati a vivere un'esperienza unica.</p>
          {/* Cambia il bottone in un Link */}
          <p> Iscriviti Ora! </p>
          <p className="deadline">Termine iscrizioni: 31 Agosto 2025</p>
        </div>
      </div>
    </section>
  );
}

export default RegistrationCta;