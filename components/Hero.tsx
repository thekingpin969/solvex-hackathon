import React from 'react';
import { EVENT_DETAILS } from '../constants';
import { Calendar, MapPin, ArrowRight, Terminal, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center bg-deep-purple">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon-pink/20 rounded-full blur-[120px] pointer-events-none opacity-50" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-electric-blue/20 rounded-full blur-[100px] pointer-events-none opacity-50" />
      
      {/* Floating Code Snippets (Decorative) */}
      <div className="absolute top-1/4 left-10 text-white/5 font-mono text-sm hidden lg:block pointer-events-none select-none">
        &lt;Innovation /&gt;<br/>
        &lt;Hackathon mode="on" /&gt;
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content - Spans 7 columns */}
        <div className="lg:col-span-7 flex flex-col items-start">
          
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

        {/* Right Visuals - Spans 5 columns */}
        <div className="lg:col-span-5 relative hidden lg:block">
           {/* Abstract Tech Card */}
           <div className="relative z-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 p-1 rounded-2xl transform rotate-3 hover:rotate-0 transition-all duration-500 shadow-2xl shadow-neon-pink/20 group">
              <div className="bg-[#120a21] rounded-xl overflow-hidden p-6 relative h-[400px] flex flex-col">
                 {/* Decorative Header */}
                 <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                    <div className="flex gap-2">
                       <div className="w-3 h-3 rounded-full bg-red-500" />
                       <div className="w-3 h-3 rounded-full bg-yellow-500" />
                       <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="font-mono text-xs text-gray-500">terminal.tsx</div>
                 </div>
                 
                 {/* Pseudo-Code Content */}
                 <div className="font-mono text-sm space-y-4 flex-grow">
                    <div className="flex gap-4">
                       <span className="text-gray-600 select-none">01</span>
                       <div>
                         <span className="text-neon-pink">const</span> <span className="text-acid-green">hackathon</span> = <span className="text-blue-400">{'{'}</span>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <span className="text-gray-600 select-none">02</span>
                       <div className="pl-4">
                          <span className="text-purple-300">name:</span> <span className="text-yellow-300">"SolveX 2026"</span>,
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <span className="text-gray-600 select-none">03</span>
                       <div className="pl-4">
                          <span className="text-purple-300">participants:</span> <span className="text-blue-400">["Innovators", "Coders"]</span>,
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <span className="text-gray-600 select-none">04</span>
                       <div className="pl-4">
                          <span className="text-purple-300">mode:</span> <span className="text-yellow-300">"Offline"</span>,
                       </div>
                    </div>
                     <div className="flex gap-4">
                       <span className="text-gray-600 select-none">05</span>
                       <div>
                         <span className="text-blue-400">{'}'}</span>;
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <span className="text-gray-600 select-none">06</span>
                       <div className="typing-effect">
                         <span className="text-acid-green">hackathon.init();</span><span className="animate-pulse text-white">_</span>
                       </div>
                    </div>
                 </div>

                 {/* Floating Icon */}
                 <div className="absolute bottom-4 right-4 text-white/5 transform group-hover:scale-110 transition-transform duration-500">
                    <Terminal size={120} />
                 </div>
              </div>
           </div>

           {/* Background Accents for the Card */}
           <div className="absolute -top-4 -right-4 w-full h-full border-2 border-acid-green/30 rounded-2xl -z-10" />
           <div className="absolute -bottom-4 -left-4 w-full h-full bg-neon-pink/20 rounded-2xl -z-10 blur-xl" />
        </div>
      </div>
    </section>
  );
};