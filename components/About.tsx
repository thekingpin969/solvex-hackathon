import React from 'react';
import { OBJECTIVES } from '../constants';
import { Target, Lightbulb, Users, Cpu, Briefcase } from 'lucide-react';

const icons = [Lightbulb, Cpu, Users, Target, Briefcase];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-deep-purple relative">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-5xl font-display font-bold uppercase italic text-white mb-4">
            About <span className="text-acid-green">SolveX</span>
          </h2>
          <div className="w-24 h-2 bg-neon-pink mb-8" />
          <p className="text-xl text-gray-300 max-w-4xl leading-relaxed">
            SolveX 2026 is a 24-hour hackathon designed to bring together creative minds, problem solvers, and technology enthusiasts to collaboratively build innovative solutions for real-world challenges. The event focuses on ideation, design thinking, rapid prototyping, and practical implementation.
          </p>
        </div>

        {/* Objectives Grid */}
        <div id="objectives" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="col-span-1 md:col-span-2 lg:col-span-1 bg-neon-pink p-8 clip-diagonal flex items-end">
             <h3 className="text-4xl font-display font-bold uppercase leading-none text-white">
               Our<br/>Mission<br/>& Goals
             </h3>
          </div>

          {OBJECTIVES.map((obj, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div key={obj.id} className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors group">
                <div className="mb-4 text-acid-green group-hover:text-neon-pink transition-colors">
                  <Icon size={40} />
                </div>
                <h4 className="text-2xl font-display font-bold uppercase mb-2 text-white">{obj.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{obj.description}</p>
                <div className="text-6xl font-display font-bold text-white/5 absolute top-4 right-4 pointer-events-none select-none">
                  0{index + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
