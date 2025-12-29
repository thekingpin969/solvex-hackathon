import React from 'react';
import { EVENT_DETAILS } from '../constants';
import { Calendar, MapPin, ArrowRight, Zap } from 'lucide-react';
import { HeroImage } from './HeroImage';
import { motion, Variants } from 'framer-motion';

interface HeroProps {
  onRegister: () => void;
  onViewRules: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRegister, onViewRules }) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 50 }
    }
  };

  return (
    <section className="relative pt-28 pb-16 lg:pt-32 lg:pb-20 overflow-hidden min-h-screen flex items-center bg-deep-purple">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px] pointer-events-none" />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-neon-pink/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none opacity-50" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-electric-blue/20 rounded-full blur-[80px] md:blur-[100px] pointer-events-none opacity-50" 
      />
      
      {/* Floating Code Snippets (Decorative - Hidden on mobile) */}
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute top-1/4 left-10 text-white/5 font-mono text-sm hidden xl:block pointer-events-none select-none"
      >
        &lt;Innovation /&gt;<br/>
        &lt;Hackathon mode="on" /&gt;
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-24s">
        
        {/* Left Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2"
        >
          
          <div className="font-display font-extrabold text-white leading-none mb-6 relative z-10">
            <motion.span variants={itemVariants} className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-pink-400 drop-shadow-[0_0_15px_rgba(255,0,204,0.3)]">SOLVEX</motion.span>
            <motion.span variants={itemVariants} className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-acid-green to-emerald-400 drop-shadow-[0_0_15px_rgba(204,255,0,0.3)]">HACKATHON</motion.span>
            <motion.span variants={itemVariants} className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter text-white">
              2026
            </motion.span>
            {/* Outline Text Background */}
            <span className="absolute -top-8 -left-4 md:-top-12 md:-left-4 text-[8rem] sm:text-[10rem] md:text-[16rem] font-bold text-stroke pointer-events-none select-none -z-10 font-sans opacity-20 w-full text-center lg:text-left">
              2026
            </span>
          </div>

          <motion.p variants={itemVariants} className="text-gray-400 text-base sm:text-lg md:text-xl mb-10 max-w-xl leading-relaxed lg:border-l-4 border-neon-pink lg:pl-6 bg-gradient-to-r from-white/5 to-transparent py-2 px-4 lg:px-0 rounded lg:rounded-none">
            <span className="text-white font-semibold">24 Hours.</span> Infinite Possibilities.<br/>
            Join the ultimate innovation hackathon at <span className="text-acid-green">{EVENT_DETAILS.venue.split(' ')[0]}</span>.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto justify-center lg:justify-start">
            <button 
              onClick={onRegister}
              className="group relative bg-acid-green text-deep-purple font-display font-bold text-lg uppercase px-8 py-4 clip-button overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(204,255,0,0.4)] w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Register Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/50 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            
            <button 
              onClick={onViewRules}
              className="group flex items-center justify-center gap-3 px-8 py-4 border border-white/20 hover:border-neon-pink hover:text-neon-pink bg-white/5 text-white font-display font-bold uppercase tracking-wider clip-button transition-all hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,0,204,0.3)] w-full sm:w-auto"
            >
              <Zap className="w-5 h-5 group-hover:text-neon-pink transition-colors" />
              View Rules
            </button>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10 sm:mt-12 flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-8 text-xs sm:text-sm font-mono text-gray-500 w-full">
             <div className="flex items-center gap-2 bg-black/40 px-3 py-2 rounded border border-white/10 hover:border-neon-pink/50 transition-colors">
                <Calendar className="w-4 h-4 text-neon-pink" /> 
                <span className="text-gray-300">Jan 9-10, 2026</span>
             </div>
             <div className="flex items-center gap-2 bg-black/40 px-3 py-2 rounded border border-white/10 hover:border-acid-green/50 transition-colors">
                <MapPin className="w-4 h-4 text-acid-green" /> 
                <span className="text-gray-300">Kerala, India</span>
             </div>
          </motion.div>
        </motion.div>

        {/* Right Visuals */}
        <motion.div 
          initial={{ opacity: 0, scale : 0.95 }}
          animate={{ opacity: 1 ,scale:1}}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden lg:block relative w-full lg:w-[50%] max-w-lg lg:max-w-3xl perspective-[1000px] mt-8 lg:mt-0"
        >
           <div className="relative z-10">
              <HeroImage />
           </div>
           
           {/* Background Accents for the Image */}
           <div className="absolute -top-10 -right-10 w-full h-full bg-neon-pink/10 rounded-full blur-3xl -z-10 animate-pulse" />
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-acid-green/5 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
};