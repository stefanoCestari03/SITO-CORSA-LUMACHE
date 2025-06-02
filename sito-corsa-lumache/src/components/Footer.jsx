import React from 'react';
import './Footer.css'; // Creeremo questo file CSS

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} La Grande Corsa della Città. Tutti i diritti riservati.</p>
        <p>Contatti: info@grandecorsa.it | Tel: +39 0123 456789</p>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;