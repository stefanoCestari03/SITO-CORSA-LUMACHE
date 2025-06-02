import React from 'react';
import './Header.css'; // Creeremo questo file CSS

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1>La Grande Corsa della Città</h1>
        <nav>
          <ul>
            <li><a href="#about">La Corsa</a></li>
            <li><a href="#details">Dettagli</a></li>
            <li><a href="#register">Iscriviti</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;