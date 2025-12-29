import React from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { About } from './About';
import { Speakers } from './Speakers';
import { Timeline } from './Timeline';
import { Prizes } from './Prizes';
import { RegistrationCTA } from './RegistrationCTA';
import { Footer } from './Footer';

interface LandingPageProps {
  onRegister: () => void;
  onViewRules: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onRegister, onViewRules }) => {
  return (
    <>
      <Navbar onRegister={onRegister} />
      <Hero onRegister={onRegister} onViewRules={onViewRules} />
      <About />
      <Speakers />
      <Timeline />
      <Prizes />
      <RegistrationCTA onRegister={onRegister} />
      <Footer />
    </>
  );
};