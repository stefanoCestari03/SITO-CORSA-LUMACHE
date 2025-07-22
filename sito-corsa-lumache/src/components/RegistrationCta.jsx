import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import './RegistrationCta.css';

function RegistrationCta() {
  return (
    <section id="register" className="section registration-cta">
      <div className="container">
        <div className='textContainerRegistration'>
          <h2>Non perdere l'occasione!</h2>
          <p>l tracciato della nostra "Snail Trail 10K" è stato pensato per accogliere corridori di ogni livello, dai velocisti ai camminatori più tranquilli! La conformazione del percorso è talmente varia e intrigante che davvero permette a tutti di partecipare e godersi l'esperienza, senza pressioni e con tanto divertimento.

Tuttavia, dobbiamo darvi un piccolo avvertimento, frutto delle nostre attente "stime sul campo": purtroppo, il percorso non è pensato per i mezzi a ruote. Quindi, carrozzelle e passeggini dovranno fare il tifo da bordo campo, perché il nostro sentiero, pur bellissimo, non è agibile per loro. La sicurezza e il divertimento di tutti vengono prima di tutto!

E per concludere in bellezza... e per assicurarci che nessuno "bara" (sappiamo che ci provate! 😉), la corsa si fa rigorosamente a piedi! Niente mountain bike, monopattini, o altri "trucchetti" a due ruote (o più). La "Snail Trail 10K" è un'esperienza autentica, da vivere con le proprie gambe e con il giusto spirito di avventura. Preparate le scarpe, il percorso vi aspetta!</p>
          {/* Cambia il bottone in un Link */}
          <p> Iscriviti subito!</p>
          <p className="deadline">Termine iscrizioni: 31 Agosto 2025</p>
        </div>
      </div>
    </section>
  );
}

export default RegistrationCta;