import React from 'react';
import { EVENT_DETAILS } from '../constants';
import { Calendar, MapPin, ArrowRight, Zap } from 'lucide-react';
import { HeroImage } from './HeroImage';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden flex items-center bg-deep-purple">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon-pink/20 rounded-full blur-[120px] pointer-events-none opacity-50" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-electric-blue/20 rounded-full blur-[100px] pointer-events-none opacity-50" />
      
      <div className="w-full flex justify-around gap-12w px-12w items-center">
        
        {/* Left Content - Spans 12 columns since image is moved below */}
        <div className="lg:col-span-12 flex flex-col items-start">
          
          <div className="flex items-center gap-3 mb-6 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-acid-green animate-pulse" />
            <span className="text-acid-green font-mono text-xs tracking-widest uppercase">
              Registrations Open
            </span>
          </div>

          <h1 className="font-display font-bold text-white leading-nones mb-6 relative z-10">
            <span className="block text-7xl md:text-9xl tracking-tighters text-transparent bg-clip-text bg-gradient-to-r from-acid-green to-emerald-400">SOLVEX</span>
            <span className="block text-7xl md:text-9xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-pink-400">
              2026
            </span>
            <span className="block text-7xl md:text-9xl tracking-tighters">HACKATHON</span>
            {/* Outline Text Background */}
            <span className="absolute -top-12 -left-4 text-[10rem] md:text-[16rem] font-bold text-stroke pointer-events-none select-none -z-10 font-sans opacity-20">
              2026
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl leading-relaxed border-l-4 border-neon-pink pl-6 bg-gradient-to-r from-white/5 to-transparent py-2">
            <span className="text-white font-semibold">24 Hours.</span> Infinite Possibilities.<br/>
            Join the ultimate innovation hackathon at <span className="text-acid-green">{EVENT_DETAILS.venue.split(' ')[0]}</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <button className="group relative bg-acid-green text-deep-purple font-display font-bold text-lg uppercase px-8 py-4 clip-button overflow-hidden transition-transform hover:scale-105 active:scale-95">
              <span className="relative z-10 flex items-center gap-2">
                Register Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/50 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            
            <button className="group flex items-center gap-3 px-8 py-4 border border-white/20 hover:border-white/50 bg-white/5 text-white font-display font-bold uppercase tracking-wider clip-button transition-all hover:bg-white/10">
              <Zap className="w-5 h-5 text-neon-pink group-hover:text-white transition-colors" />
              View Rules
            </button>
          </div>

          <div className="mt-12 flex flex-wrap gap-8 text-sm font-mono text-gray-500">
             <div className="flex items-center gap-2 bg-black/20 px-3 py-1 rounded border border-white/5">
                <Calendar className="w-4 h-4 text-neon-pink" /> 
                <span className="text-gray-300">Jan 9-10, 2026</span>
             </div>
             <div className="flex items-center gap-2 bg-black/20 px-3 py-1 rounded border border-white/5">
                <MapPin className="w-4 h-4 text-acid-green" /> 
                <span className="text-gray-300">Kerala, India</span>
             </div>
          </div>
        </div>

        <div className="w-[35%] leading-none">
        <HeroImage />
         </div>
              
      </div>
    </section>
  );
};