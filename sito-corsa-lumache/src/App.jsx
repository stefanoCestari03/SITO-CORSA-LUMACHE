// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'; // Se hai un footer
import HomePage from './pages/HomePage';
import RaceDetailsPage from './pages/RaceDetailsPage';
import RegistrationPage from './pages/RegistrationPage';

function App() {
  return (
    <>
      <Header /> {/* L'header è sempre visibile */}
      <main> {/* Questo è il tag <main> a cui si applica flex-grow: 1 */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/races" element={<RaceDetailsPage />} />
          <Route path="/register" element={<RegistrationPage />} />
        </Routes>
      </main>
      {/* Se hai un footer, mettilo qui dopo <main> */}
       <Footer  /> {/* Il footer è opzionale, ma se lo hai, dovrebbe essere qui */}
      {/* Il footer sarà sempre visibile in fondo alla pagina */}
    </>
  );
}

export default App;