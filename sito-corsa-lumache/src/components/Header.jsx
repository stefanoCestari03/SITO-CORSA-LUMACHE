import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Manteniamo il tuo CSS specifico per l'header
import lumacaIcon from '/snailtrailrace_bianco.png';
import HeroSection from './HeroSection';

function Header() {
  return (
    <header className="header">
      <div className="container header-content" >
        <div className="logo-container">
          {/* L'icona rimane qui, affianco al titolo */}
          <Link to="/" className="site-title-link"> {/* Questa Link conterrà il tuo H1 */}
          <img src={lumacaIcon} alt="Icona Lumaca" className="header-icon" />
             {/* Il tuo Logo è ora parte del Link e cliccabile */}
          </Link>
        </div>
        <nav className="main-nav">
          <ul>
            <li><Link to="/races">Scopri l'evento</Link></li>
            <li><Link to="/register">Iscrizione</Link></li>
          </ul>
        </nav>
      </div>
      <HeroSection/>
    </header>
  );
}

export default Header;