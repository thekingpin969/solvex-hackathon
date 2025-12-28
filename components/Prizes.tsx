import React from 'react';
import { BENEFITS } from '../constants';
import { Trophy, CheckCircle } from 'lucide-react';

export const Prizes: React.FC = () => {
  return (
    <section id="prizes" className="py-24 bg-deep-purple">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row gap-12">
            
            {/* Left: What Participants Gain */}
            <div className="flex-1">
                 <h2 className="text-4xl font-display font-bold uppercase text-white mb-8">
                    What You <span className="text-neon-pink">Gain</span>
                 </h2>
                 <ul className="space-y-6">
                    {BENEFITS.map((b) => (
                        <li key={b.id} className="flex items-start gap-4 p-4 border border-white/10 hover:border-acid-green transition-colors bg-white/5">
                            <CheckCircle className="text-acid-green shrink-0 mt-1" />
                            <span className="text-lg text-gray-200">{b.text}</span>
                        </li>
                    ))}
                 </ul>
            </div>

            {/* Right: Evaluation & Featured Prize Graphic */}
            <div className="flex-1">
                 <h2 className="text-4xl font-display font-bold uppercase text-white mb-8">
                    Evaluation <span className="text-acid-green">Criteria</span>
                 </h2>
                 
                 {/* Main "Prize" Card style for Evaluation */}
                 <div className="bg-indigo-900/50 border-2 border-white/20 p-8 relative overflow-hidden group">
                     <div className="absolute top-0 right-0 bg-neon-pink text-white font-bold px-4 py-1 text-sm uppercase">Focus Areas</div>
                     
                     <div className="grid grid-cols-2 gap-4 mt-6">
                         {['Innovation', 'Feasibility', 'Tech Stack', 'Presentation'].map((crit, idx) => (
                             <div key={idx} className="bg-deep-purple p-4 text-center border border-white/10 hover:border-neon-pink transition-colors">
                                 <div className="text-acid-green mb-2">
                                     <Trophy className="w-8 h-8 mx-auto" />
                                 </div>
                                 <span className="font-display font-bold uppercase text-white tracking-wider">{crit}</span>
                             </div>
                         ))}
                     </div>

                     <div className="mt-8 text-center p-6 bg-gradient-to-r from-neon-pink to-purple-600">
                         <h3 className="text-2xl font-display font-bold uppercase text-white mb-2">Top Performers</h3>
                         <p className="text-white/90 text-sm">Receive certificates, recognition, and potential development opportunities.</p>
                     </div>
                 </div>
            </div>

        </div>
      </div>
    </section>
  );
};
