import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Importa i componenti delle pagine
import HomePage from './pages/HomePage';
import RaceDetailsPage from './pages/RaceDetailsPage';
import RegistrationPage from './pages/RegistrationPage'; // <-- Nuova importazione

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/corsa" element={<RaceDetailsPage />} />
          <Route path="/iscrizione" element={<RegistrationPage />} /> {/* <-- Nuova Route */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;