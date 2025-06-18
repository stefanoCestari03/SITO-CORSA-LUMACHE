import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Manteniamo il tuo CSS specifico per l'header
import lumacaIcon from '/lumaca-favicon.png';

function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo-container">
          {/* L'icona rimane qui, affianco al titolo */}
          <img src={lumacaIcon} alt="Icona Lumaca" className="header-icon" />

          {/* Unisci il titolo H1 e il Link in un unico elemento cliccabile */}
          {/* Ho corretto anche il testo da "Lumaci en Fuga" a "Lumache in Fuga" per coerenza */}
          <Link to="/" className="site-title-link"> {/* Questa Link conterrà il tuo H1 */}
            <h1>Lumache in Fuga</h1> {/* Il tuo H1 è ora parte del Link e cliccabile */}
          </Link>
        </div>
        <nav className="main-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/races">La gara</Link></li>
            <li><Link to="/register">Iscrizione</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;