import { Link } from 'react-router-dom';
import './Header.css';
import HeroSection from './HeroSection';
import lumacaIcon from '/snailtrail_fucsia.png';

function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo-container">
          {/* MODIFICATO: Logo porta alla home con scroll alla AboutSection */}
          <Link to="/#about-corsa" className="site-title-link">
            <img src={lumacaIcon} alt="Icona Lumaca" className="header-icon" />
          </Link>
        </div>
        <nav className="main-nav">
          <ul>
            <li><Link to="/races#chi-organizza">Scopri l'evento</Link></li>
            <li><Link to="/register#modulo-iscrizione">Iscrizione</Link></li>
          </ul>
        </nav>
      </div>
      <HeroSection/>
    </header>
  );
}

export default Header;