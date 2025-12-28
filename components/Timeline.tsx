import React from 'react';
import { MOCK_SCHEDULE } from '../constants';

export const Timeline: React.FC = () => {
  return (
    <section id="schedule" className="py-24 bg-black relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none select-none pointer-events-none opacity-5">
        <span className="text-[20vw] font-display font-bold uppercase text-white whitespace-nowrap">Schedule</span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-display font-bold uppercase italic text-white mb-16 text-center">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-acid-green to-emerald-500">Timeline</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Day 1 Block */}
            <div className="bg-[#1a0b2e] border-2 border-neon-pink p-1 relative">
                <div className="bg-neon-pink text-white font-display font-bold uppercase text-center py-2 mb-6">
                    Day 01
                </div>
                <div className="px-6 pb-6 space-y-8">
                     {MOCK_SCHEDULE.filter(i => i.day === "Day 1").map((item, idx) => (
                         <div key={idx} className="relative pl-8 border-l-2 border-gray-700">
                             <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-acid-green"></div>
                             <h3 className="text-2xl font-display font-bold text-white uppercase mb-2">{item.title}</h3>
                             <p className="text-gray-400">{item.desc}</p>
                         </div>
                     ))}
                </div>
            </div>

            {/* Day 2 Block */}
            <div className="bg-[#1a0b2e] border-2 border-acid-green p-1 relative">
                <div className="bg-acid-green text-deep-purple font-display font-bold uppercase text-center py-2 mb-6">
                    Day 02
                </div>
                <div className="px-6 pb-6 space-y-8">
                     {MOCK_SCHEDULE.filter(i => i.day === "Day 2").map((item, idx) => (
                         <div key={idx} className="relative pl-8 border-l-2 border-gray-700">
                             <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-neon-pink"></div>
                             <h3 className="text-2xl font-display font-bold text-white uppercase mb-2">{item.title}</h3>
                             <p className="text-gray-400">{item.desc}</p>
                         </div>
                     ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
