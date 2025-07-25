import instagramImage from '../assets/Instagram.png'; // Importa l'immagine Instagram
import './Footer.css'; // Creeremo questo file CSS


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
    marginTop: '-69px', // Per evitare che l'onda superiore si sovrapponga al contenuto
    // L'SVG ha il 'dente' in basso. Il fill deve corrispondere al colore della sezione (#dd2f8a)
    backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' preserveAspectRatio='none'%3E%3Cpath class='elementor-shape-fill' fill='%23333' d='M0,0C166,5,333,100,500,100C667,100,833,5,1000,0L1000,100L0,100L0,0Z'/%3E%3C/svg%3E\")",
  };

function Footer() {
  return (
    <div >
      <div className="section-wave section-wave--top" style={topWaveStyle}></div>
        <footer className="footer">
          
          <div className="container">
            <p id="distance">&copy; {new Date().getFullYear()} SnailTrail</p>
          
            <p>Contatti: snail.trail10k@gmail.com | Tel: +39 328 474 3223  Stefano Cestari - +39 348 377 1136 Pietro Svaldi </p>
            <div className="social-links">
              <a href="https://www.instagram.com/sagradellepiazze/" target="_blank" rel="noopener noreferrer">
                <img src={instagramImage} alt="Instagram" className="social-icon" />
              </a>
            </div>
          </div>
        </footer>
    </div>
  );
}

export default Footer;