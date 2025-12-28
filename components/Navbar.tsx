import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-display font-bold italic tracking-tighter text-white">
          SOLVE<span className="text-acid-green">X</span> 2026
        </div>
        
        <div className="hidden md:flex gap-8 font-semibold text-sm uppercase tracking-widest text-gray-300">
          <a href="#about" className="hover:text-neon-pink transition-colors">About</a>
          <a href="#objectives" className="hover:text-neon-pink transition-colors">Objectives</a>
          <a href="#schedule" className="hover:text-neon-pink transition-colors">Schedule</a>
          <a href="#prizes" className="hover:text-neon-pink transition-colors">Prizes</a>
        </div>

        <button className="bg-neon-pink hover:bg-pink-600 text-white font-display font-bold uppercase px-6 py-2 clip-button transition-transform hover:scale-105">
          Join Waitlist
        </button>
      </div>
    </nav>
  );
};