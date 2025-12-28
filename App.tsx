import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HeroImage } from './components/HeroImage';
import { About } from './components/About';
import { Timeline } from './components/Timeline';
import { Prizes } from './components/Prizes';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-deep-purple text-white font-sans selection:bg-neon-pink selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Prizes />
      <Footer />
    </div>
  );
}

export default App;