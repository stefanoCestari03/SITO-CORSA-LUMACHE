import instagramImage from '../assets/Instagram.png';
import './Footer.css';

const topWaveStyle = {
    position: 'relative',
    left: '0',
    width: '100%',
    height: '50px',
    backgroundRepeat: 'repeat-x',
    backgroundSize: '700px 100%',
    zIndex: '0',
    pointerEvents: 'none',
    top: '0',
    marginTop: '-55px',
    backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' preserveAspectRatio='none'%3E%3Cpath class='elementor-shape-fill' fill='%23333' d='M0,0C166,5,333,100,500,100C667,100,833,5,1000,0L1000,100L0,100L0,0Z'/%3E%3C/svg%3E\")",
};

function Footer() {
  return (
    <div>
      <div className="section-wave section-wave--top" style={topWaveStyle}></div>
      <footer className="footer">
        <div className="container">
          <p id="distance">&copy; {new Date().getFullYear()} SnailTrail</p>
          
          {/* MODIFICATO: Contatti organizzati meglio */}
          <div className="contact-info">
            <p className="main-contact">
              <strong>Email:</strong> snail.trail10k@gmail.com
            </p>
            
            <div className="organizers">
              <p className="organizer">
                <strong>Stefano Cestari</strong> - Web Page Creator<br />
                <span className="phone">Tel: +39 328 474 3223</span>
              </p>
              
              <p className="organizer">
                <strong>Pietro Svaldi</strong> - Responsabile Organizzazione<br />
                <span className="phone">Tel: +39 348 377 1136</span>
              </p>

              <p className="organizer">
                <strong>Eleonora  Svaldi</strong> - Web page graphic, Video/Photo<br />
                <span className="phone">Tel: +39 348 377 1136</span>
              </p>
            </div>

            
          </div>
          
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