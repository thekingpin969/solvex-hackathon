import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onRegister: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRegister }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-deep-purple/90 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center relative z-50">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-2xl font-display font-bold italic tracking-tighter text-white hover:opacity-80 transition-opacity z-50 relative"
        >
          SOLVE<span className="text-acid-green">X</span> 2026
        </button>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-semibold text-sm uppercase tracking-widest text-gray-300 items-center">
          <button onClick={() => scrollToSection('about')} className="hover:text-neon-pink transition-colors">About</button>
          <button onClick={() => scrollToSection('objectives')} className="hover:text-neon-pink transition-colors">Objectives</button>
          <button onClick={() => scrollToSection('schedule')} className="hover:text-neon-pink transition-colors">Schedule</button>
          <button onClick={() => scrollToSection('prizes')} className="hover:text-neon-pink transition-colors">Prizes</button>
          <button 
            onClick={onRegister}
            className="bg-neon-pink hover:bg-pink-600 text-white font-display font-bold uppercase px-6 py-2 clip-button transition-transform hover:scale-105"
          >
            Register Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
            className="md:hidden text-white p-2 z-50 relative focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
        >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="absolute top-0 left-0 w-full bg-deep-purple/95 backdrop-blur-xl border-b border-white/10 md:hidden pt-24 pb-10 px-6 shadow-2xl flex flex-col gap-6"
            >
                <button onClick={() => scrollToSection('about')} className="text-xl font-display uppercase tracking-widest text-white hover:text-neon-pink text-left py-2 border-b border-white/5">About</button>
                <button onClick={() => scrollToSection('objectives')} className="text-xl font-display uppercase tracking-widest text-white hover:text-neon-pink text-left py-2 border-b border-white/5">Objectives</button>
                <button onClick={() => scrollToSection('schedule')} className="text-xl font-display uppercase tracking-widest text-white hover:text-neon-pink text-left py-2 border-b border-white/5">Schedule</button>
                <button onClick={() => scrollToSection('prizes')} className="text-xl font-display uppercase tracking-widest text-white hover:text-neon-pink text-left py-2 border-b border-white/5">Prizes</button>
                <button 
                    onClick={() => {
                        setIsOpen(false);
                        onRegister();
                    }}
                    className="bg-neon-pink text-white font-display font-bold uppercase px-6 py-4 clip-button text-center mt-4 active:scale-95 transition-transform"
                >
                    Register Now
                </button>
            </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};