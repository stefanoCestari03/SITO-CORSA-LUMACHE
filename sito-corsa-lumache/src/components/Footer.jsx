import instagramImage from '../assets/Instagram.png'; // Importa l'immagine Instagram
import './Footer.css'; // Creeremo questo file CSS

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} SnailTrail</p>
      
        <p>Contatti: snail.trail10k@gmail.com | Tel: +39 328 474 3223  Stefano Cestari - +39 348 377 1136 Pietro Svaldi </p>
        <div className="social-links">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramImage} alt="Instagram" className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;