import React from 'react';
import './RegistrationCta.css'; // Creeremo questo file CSS

function RegistrationCta() {
  return (
    <section id="register" className="section registration-cta">
      <div className="container">
        <h2>Non perdere l'occasione!</h2>
        <p>Le iscrizioni sono aperte! Assicurati il tuo posto e preparati a vivere un'esperienza unica.</p>
        <button onClick={() => alert('Reindirizza alla pagina di iscrizione!')}>
          Iscriviti Ora!
        </button>
        <p className="deadline">Termine iscrizioni: 31 Agosto 2025</p>
      </div>
    </section>
  );
}

export default RegistrationCta;