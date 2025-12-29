import React from 'react';
import { EVENT_DETAILS } from '../constants';
import { Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            
            <div className="text-center md:text-left">
                <h3 className="text-3xl font-display font-bold italic text-white mb-2">
                    SOLVE<span className="text-acid-green">X</span> 2026
                </h3>
                <p className="text-gray-500 max-w-sm">
                    Organized by {EVENT_DETAILS.organizer} <br/>
                    {EVENT_DETAILS.venue}
                </p>
            </div>

            <div className="flex flex-col gap-4 text-gray-400 text-sm">
                <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-neon-pink" />
                    <span>MGM College of Engineering, Kerala</span>
                </div>
                <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-neon-pink" />
                    <span>Contact college officials for registration</span>
                </div>
            </div>

            <div>
                <button 
                  onClick={scrollToTop}
                  className="border border-white/20 text-white px-6 py-2 hover:bg-white hover:text-black transition-colors uppercase font-bold text-sm tracking-widest"
                >
                    Back to Top
                </button>
            </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 text-center text-gray-600 text-xs flex flex-col md:flex-row justify-between items-center">
            <span>© 2026 MIDEA Innovation Club. All rights reserved.</span>
            <span className="mt-2 md:mt-0">Designed for SolveX Hackathon</span>
        </div>
      </div>
    </footer>
  );
};