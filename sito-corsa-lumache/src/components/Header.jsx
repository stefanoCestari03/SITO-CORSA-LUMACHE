import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1>La Grande Corsa della Città</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/corsa">La Corsa</Link></li>
            <li><Link to="/iscrizione">Iscriviti</Link></li> {/* <-- Modificato qui! */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;