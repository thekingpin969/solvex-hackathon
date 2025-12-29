import React from 'react';
import { Trophy, Award, Medal } from 'lucide-react';
import { motion } from 'framer-motion';

export const Prizes: React.FC = () => {
  return (
    <section id="prizes" className="py-24 bg-deep-purple relative overflow-hidden">
      {/* Background Glows */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-electric-blue/10 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon-pink/10 rounded-full blur-[120px] pointer-events-none" 
      />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-display font-bold uppercase text-white mb-4 leading-none"
          >
            Prizes
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl border-l-4 border-electric-blue pl-4"
          >
            Get ready to launch your project! The top performers will receive awards, prizes, and recognition.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            
            {/* 1st Prize - Large Card */}
            <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-3 bg-gradient-to-br from-[#2e0249] to-[#1a0b2e] p-8 md:p-12 relative overflow-hidden group min-h-[400px] flex flex-col justify-center border border-white/10 hover:border-acid-green transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.3)]"
            >
                
                {/* Floating Ticket Graphic */}
                <div className="absolute top-8 -left-4 md:-left-8 transform -rotate-[15deg] z-20 transition-transform group-hover:rotate-0 duration-500">
                    <div className="bg-acid-green text-black font-display font-bold text-2xl md:text-4xl px-8 md:px-12 py-2 md:py-4 border-b-8 border-r-8 border-black shadow-xl relative clip-ticket">
                       1st PLACE
                       <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#2e0249] rounded-full" />
                       <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#2e0249] rounded-full" />
                    </div>
                </div>

                <div className="relative z-10 mt-16 md:mt-0 ml-0 md:ml-12">
                     <h3 className="font-display font-bold text-4xl md:text-6xl text-white uppercase tracking-wider mb-2 text-stroke-strong opacity-90 group-hover:opacity-100 transition-opacity">
                        Innovation Champion
                     </h3>
                     <div className="text-7xl md:text-9xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-acid-green to-emerald-400 mb-6 tracking-tighter drop-shadow-lg">
                        ₹60,000
                     </div>
                     <p className="text-white/80 text-lg md:text-xl max-w-md">
                        Awarded to the most outstanding project that demonstrates exceptional innovation and execution.
                     </p>
                </div>
                
                {/* Background decorative glow */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-acid-green/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-acid-green/20 transition-colors" />
            </motion.div>

            {/* Right Column */}
            <div className="lg:col-span-2 flex flex-col gap-6">
                
                {/* 2nd Prize Card */}
                <motion.div 
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex-1 bg-gradient-to-br from-[#240a3a] to-[#0f0518] p-8 relative overflow-hidden group flex flex-row items-center gap-6 border border-white/10 hover:border-neon-pink transition-all duration-300"
                >
                     <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-neon-pink group-hover:border-neon-pink transition-all duration-300">
                         <Trophy className="w-10 h-10 md:w-12 md:h-12 text-neon-pink group-hover:text-white transition-colors" />
                     </div>
                     <div>
                         <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2 tracking-tight">₹30,000</div>
                         <div className="font-display font-bold text-gray-400 group-hover:text-neon-pink uppercase tracking-widest text-sm transition-colors">Runner Up</div>
                     </div>
                </motion.div>

                {/* Participation Card */}
                <motion.div 
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex-1 bg-gradient-to-br from-[#1e0833] to-[#0a0211] p-8 relative overflow-hidden group flex flex-row items-center gap-6 border border-white/10 hover:border-electric-blue transition-all duration-300"
                >
                     <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-electric-blue group-hover:border-electric-blue transition-all duration-300">
                         <Award className="w-10 h-10 md:w-12 md:h-12 text-electric-blue group-hover:text-white transition-colors" />
                     </div>
                     <div className="relative z-10">
                         <div className="text-2xl md:text-3xl font-display font-bold text-white mb-1 leading-none">Participation<br/>Certificates</div>
                         <div className="font-display font-bold text-gray-400 group-hover:text-electric-blue uppercase tracking-widest text-xs mt-2 transition-colors">For All Participants</div>
                     </div>
                </motion.div>
            </div>

        </div>
      </div>
    </section>
  );
};