import cermontFirstHalfImage from '../assets/ceramontFirstHalf.jpg'; // Importa l'immagine
import './RegistrationCta.css';
import { Link } from 'react-router-dom';

const topWaveStyle = {
  position: 'relative',
  left: '0',
  width: '100%',
  height: '50px', /* AGGIORNATO: a 50px */
  backgroundRepeat: 'repeat-x',
  backgroundSize: '700px 100%',
  zIndex: '0',
  pointerEvents: 'none',
  top: '0',
  marginTop: '-50px', /* AGGIORNATO: allineato con AboutSection */
  backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' preserveAspectRatio='none'%3E%3Cpath class='elementor-shape-fill' fill='%23f0afcf' d='M0,0C166,5,333,100,500,100C667,100,833,5,1000,0L1000,100L0,100L0,0Z'/%3E%3C/svg%3E\")",
};

const bottomWaveStyle = {
  position: 'relative',
  maxWidth: '100%',
  left: '0',
  width: '100%',
  height: '50px', /* AGGIORNATO: a 50px */
  backgroundRepeat: 'repeat-x',
  backgroundSize: '700px 100%',
  zIndex: '0',
  pointerEvents: 'none',
  bottom: '0',
  marginBottom: '-52px', /* AGGIORNATO: allineato con AboutSection */
  backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' preserveAspectRatio='none'%3E%3Cpath class='elementor-shape-fill' fill='%23f0afcf' d='M0,100C166,95,333,0,500,0C667,0,833,95,1000,100L1000,0L0,0L0,100Z'/%3E%3C/svg%3E\")",
};

function RegistrationCta() {
  return (
    <section id="register" className="section registration-cta">
      <div className="container">
        <div className="registration-content-layout">
          <div className="imageContainerRegistration">
            <img 
              src={cermontFirstHalfImage} 
              alt="Prima metà del percorso Cermont" 
              className="registration-description-image"
            />
          </div>
          
          <div className='textContainerRegistration'>
            <h2>Non perdere l'occasione!</h2>
            <p>Il tracciato della nostra "Snail Trail 10K" è stato pensato per accogliere corridori di ogni livello, dai velocisti ai camminatori più tranquilli! La conformazione del percorso è talmente varia e intrigante che davvero permette a tutti di partecipare e godersi l'esperienza, senza pressioni e con tanto divertimento.</p>
            <p>Tuttavia, dobbiamo darvi un piccolo avvertimento, frutto delle nostre attente "stime sul campo": purtroppo, il percorso non è pensato per i mezzi a ruote. Quindi, carrozzelle e passeggini dovranno fare il tifo da bordo campo, perché il nostro sentiero, pur bellissimo, non è agibile per loro. La sicurezza e il divertimento vengono prima di tutto!</p>
            <p>E per concludere in bellezza... e per assicurarci che nessuno "bari" (sappiamo che ci provate! 😉), la corsa si fa rigorosamente a piedi! Niente mountain bike, monopattini, o altri "trucchetti" a due ruote (o più). La "Snail Trail 10K" è un'esperienza autentica, da vivere con le proprie gambe e con il giusto spirito di avventura. Preparate le scarpe, il percorso vi aspetta!</p>
            <p>Iscriviti subito!</p>
            <p className="deadline">Termine iscrizioni: 4 settembre 2025</p>
          </div>
        </div>
      </div>
      <nav className="main-nav">
        <ul>
          <li><Link to="/races">Scopri l'evento</Link></li>
          <li><Link to="/register#modulo-iscrizione">Iscrizione</Link></li>
        </ul>
      </nav>
    </section>
  );
}

export default RegistrationCta;