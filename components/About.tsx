import React from 'react';
import { OBJECTIVES } from '../constants';
import { Target, Lightbulb, Users, Cpu, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const icons = [Lightbulb, Cpu, Users, Target, Briefcase];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-deep-purple relative border-t border-white/5">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-display font-bold uppercase italic text-white mb-4"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-acid-green to-emerald-400">SolveX</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-2 bg-neon-pink mb-8 shadow-[0_0_15px_rgba(255,0,204,0.5)]" 
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-300 max-w-4xl leading-relaxed"
          >
            SolveX 2026 is a 24-hour hackathon designed to bring together creative minds, problem solvers, and technology enthusiasts to collaboratively build innovative solutions for real-world challenges. The event focuses on ideation, design thinking, rapid prototyping, and practical implementation.
          </motion.p>
        </div>

        {/* Objectives Grid */}
        <motion.div 
          id="objectives" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <motion.div 
            variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 }
            }}
            transition={{ duration: 0.5 }}
            className="col-span-1 md:col-span-2 lg:col-span-1 bg-neon-pink p-8 clip-diagonal flex items-end relative overflow-hidden group"
          >
             <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
             <h3 className="relative z-10 text-5xl font-display font-bold uppercase leading-none text-white drop-shadow-md">
               Our<br/>Mission<br/>& Goals
             </h3>
             <div className="absolute top-0 right-0 p-4 opacity-50">
                <Target size={64} className="text-white" />
             </div>
          </motion.div>

          {OBJECTIVES.map((obj, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div 
                key={obj.id} 
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
                className="relative bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors group overflow-hidden"
              >
                <div className="absolute -right-4 -top-4 text-9xl font-display font-bold text-white/5 select-none transition-transform group-hover:scale-110 group-hover:text-white/10">
                  0{index + 1}
                </div>
                
                <div className="relative z-10">
                  <div className="mb-6 inline-flex p-3 rounded-lg bg-deep-purple border border-white/10 text-acid-green group-hover:text-neon-pink group-hover:border-neon-pink transition-all duration-300 shadow-lg">
                    <Icon size={32} />
                  </div>
                  <h4 className="text-3xl font-display font-bold uppercase mb-3 text-white group-hover:text-acid-green transition-colors">{obj.title}</h4>
                  <p className="text-gray-400 text-base leading-relaxed">{obj.description}</p>
                </div>
                
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-acid-green group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};