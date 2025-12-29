import React from 'react';
import { SPEAKERS } from '../constants';
import { motion } from 'framer-motion';

export const Speakers: React.FC = () => {
  return (
    <section className="py-24 bg-deep-purple relative overflow-hidden">
      {/* Decorative Cylinder Graphic (Top Right) */}
      <motion.div 
        animate={{ opacity: [0.6, 0.8, 0.6] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 translate-x-1/3 -translate-y-1/3 opacity-80 pointer-events-none"
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <ellipse cx="100" cy="50" rx="80" ry="30" stroke="#ccff00" strokeWidth="2" />
            <path d="M20 50v100c0 16.569 35.817 30 80 30s80-13.431 80-30V50" stroke="#ccff00" strokeWidth="2" />
            <ellipse cx="100" cy="50" rx="40" ry="15" fill="#2e0249" stroke="#ff00cc" strokeWidth="2" />
        </svg>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="leading-[0.85]"
          >
            <span 
              className="block text-6xl md:text-8xl font-display font-bold uppercase text-transparent tracking-tighter"
              style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.5)' }}
            >
              Our
            </span>
            <span className="block text-6xl md:text-8xl font-display font-bold uppercase text-white tracking-tighter">Speakers</span>
          </motion.h2>
        </div>

        {/* Speakers List - Scrollable */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
        >
            {/* Inline styles for hiding scrollbar across browsers */}
            <style>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
            
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 hide-scrollbar">
            {SPEAKERS.map((speaker, idx) => {
                const firstName = speaker.name.split(' ')[0];
                const lastName = speaker.name.split(' ').slice(1).join(' ');
                
                return (
                <div key={speaker.id} className="group relative snap-start shrink-0 w-[85vw] md:w-[45vw] lg:w-[28vw]">
                    {/* Image Card */}
                    <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-gray-900 border border-white/10 group-hover:border-neon-pink/50 transition-colors">
                        {/* Pink/Gradient Overlay on Hover */}
                        <div className="absolute inset-0 bg-neon-pink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-overlay" />
                        
                        <img 
                          src={speaker.image} 
                          alt={speaker.name} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        />
                    </div>

                    {/* Info */}
                    <div className="relative z-20">
                        <h3 className="text-4xl font-display font-bold uppercase text-white leading-[0.9] mb-2">
                        <span className="block">{firstName}</span>
                        <span className="block">{lastName}</span>
                        </h3>
                        <p className="text-neon-pink font-bold uppercase text-sm tracking-widest font-sans">
                        {speaker.role}
                        </p>
                    </div>
                </div>
                );
            })}
            </div>
        </motion.div>

        {/* Carousel Dots (Visual) */}
        <div className="flex justify-center gap-4 mt-8 mb-12">
           {[0, 1, 2, 3].map((dot, idx) => (
             <div 
               key={idx} 
               className={`w-2 h-2 rotate-45 transform ${idx === 0 ? 'bg-neon-pink scale-125' : 'bg-gray-600'}`} 
             />
           ))}
        </div>

        {/* View All Button */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
        >
            <button className="bg-neon-pink text-white font-display font-bold text-lg uppercase px-10 py-4 tracking-widest hover:bg-white hover:text-neon-pink transition-colors clip-button">
                View All Speakers
            </button>
        </motion.div>

      </div>
    </section>
  );
};