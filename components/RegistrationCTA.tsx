import React from 'react';
import { EVENT_DETAILS } from '../constants';
import { motion } from 'framer-motion';

interface RegistrationCTAProps {
  onRegister: () => void;
}

export const RegistrationCTA: React.FC<RegistrationCTAProps> = ({ onRegister }) => {
  return (
    <section id="register" className="py-24 bg-deep-purple relative overflow-hidden flex items-center min-h-[600px] border-t border-white/5">
        
        {/* Background Grids/Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-neon-pink/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-acid-green/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
                
                {/* Left Character - Dynamic/Action */}
                <motion.div 
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="hidden lg:block w-1/3 relative group perspective-[1000px]"
                >
                    <div className="absolute top-10 left-10 w-full h-full border-2 border-acid-green/30 rounded-full transform rotate-6 transition-all duration-500 group-hover:rotate-12" />
                    <div className="relative w-full aspect-[3/4] max-w-sm mx-auto overflow-hidden rounded-2xl border-2 border-acid-green/50 shadow-[0_0_30px_rgba(204,255,0,0.2)] bg-black/50 transform hover:scale-105 transition-transform duration-500 hover:rotate-y-12">
                         <div className="absolute inset-0 bg-gradient-to-t from-deep-purple to-transparent z-10 opacity-60" />
                         <img 
                            src="https://images.unsplash.com/photo-1614726365723-49cfae90ecfc?q=80&w=800&auto=format&fit=crop"
                            alt="Innovation Concept" 
                            className="w-full h-full object-cover mix-blend-screen opacity-90"
                        />
                         {/* Overlay Text */}
                         <div className="absolute bottom-6 left-6 z-20">
                             <div className="text-acid-green font-mono text-xs mb-1">Subject_01</div>
                             <div className="text-white font-display font-bold text-2xl uppercase">Builder</div>
                         </div>
                    </div>
                    {/* Floating elements */}
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-neon-pink/20 blur-xl rounded-full animate-pulse" />
                </motion.div>

                {/* Center Content */}
                <div className="flex-1 text-center flex flex-col items-center max-w-2xl">
                    
                    {/* Date */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-6"
                    >
                        <span className="text-acid-green font-display font-bold text-2xl md:text-3xl tracking-widest uppercase drop-shadow-[0_0_10px_rgba(204,255,0,0.5)]">
                            {EVENT_DETAILS.date}
                        </span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h2 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="font-display font-bold uppercase leading-[0.85] mb-10 relative"
                    >
                        <span className="block text-6xl md:text-8xl lg:text-9xl text-transparent text-stroke-white mb-2 relative z-10">
                            UNLOCKING
                        </span>
                        {/* Glitch Shadow */}
                        <span className="absolute top-0 left-0 w-full block text-6xl md:text-8xl lg:text-9xl text-neon-pink opacity-50 text-stroke select-none translate-x-[3px] translate-y-[3px] -z-10">
                            UNLOCKING
                        </span>
                        
                        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 mt-2">
                             <span className="bg-neon-pink text-deep-purple px-4 py-1 text-2xl md:text-3xl font-bold -rotate-3 transform shadow-lg">
                                THE
                             </span>
                             <span className="text-6xl md:text-8xl lg:text-9xl text-white drop-shadow-xl">
                                FUTURE
                             </span>
                        </div>
                    </motion.h2>

                    {/* Button */}
                    <motion.button 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        onClick={onRegister}
                        className="group relative bg-white text-black font-display font-bold uppercase text-lg md:text-xl px-12 py-5 tracking-[0.2em] transition-all hover:bg-acid-green hover:scale-105 hover:shadow-[0_0_30px_rgba(204,255,0,0.4)] active:scale-95"
                    >
                        <span className="relative z-10">REGISTER NOW</span>
                        <div className="absolute inset-0 bg-white/50 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.button>
                </div>

                {/* Right Character - VR/Tech */}
                <motion.div 
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="hidden lg:block w-1/3 relative group perspective-[1000px]"
                >
                     <div className="absolute bottom-10 right-10 w-full h-full border-2 border-neon-pink/30 rounded-full transform -rotate-6 transition-all duration-500 group-hover:-rotate-12" />
                     <div className="relative w-full aspect-[3/4] max-w-sm mx-auto overflow-hidden rounded-2xl border-2 border-neon-pink/50 shadow-[0_0_30px_rgba(255,0,204,0.2)] bg-black/50 transform hover:scale-105 transition-transform duration-500 hover:rotate-y-[-12deg]">
                         <div className="absolute inset-0 bg-gradient-to-t from-deep-purple to-transparent z-10 opacity-60" />
                         <img 
                            src="https://images.unsplash.com/photo-1622979135225-d2ba269fb1bd?q=80&w=800&auto=format&fit=crop"
                            alt="VR Experience" 
                            className="w-full h-full object-cover mix-blend-screen opacity-90"
                        />
                         {/* Overlay Text */}
                         <div className="absolute bottom-6 left-6 z-20">
                             <div className="text-neon-pink font-mono text-xs mb-1">Subject_02</div>
                             <div className="text-white font-display font-bold text-2xl uppercase">Explorer</div>
                         </div>
                    </div>
                     {/* Floating elements */}
                     <div className="absolute -top-6 -left-6 w-24 h-24 bg-acid-green/20 blur-xl rounded-full animate-pulse" />
                </motion.div>

            </div>
        </div>
    </section>
  );
};