import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import RaceDetails from './components/RaceDetails';
import RegistrationCta from './components/RegistrationCta';
import Footer from './components/Footer';

import './App.css'; // Stili generali dell'app (già creati)

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <RaceDetails />
        <RegistrationCta />
      </main>
      <Footer />
    </>
  );
}

export default App;