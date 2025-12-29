import React from 'react';
import { MOCK_SCHEDULE } from '../constants';
import { motion } from 'framer-motion';

export const Timeline: React.FC = () => {
  return (
    <section id="schedule" className="py-24 bg-deep-purple relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Stats Header */}
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            className="flex flex-wrap justify-center md:justify-between max-w-5xl mx-auto mb-24 gap-8 text-center"
        >
            <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="flex flex-col items-center">
                <span className="block text-7xl md:text-9xl font-display font-bold text-[#c084fc] mb-2">4+</span>
                <span className="text-base font-bold tracking-[0.2em] uppercase text-white">Formats</span>
            </motion.div>
            <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="flex flex-col items-center">
                <span className="block text-7xl md:text-9xl font-display font-bold text-[#c084fc] mb-2">5+</span>
                <span className="text-base font-bold tracking-[0.2em] uppercase text-white">Workshops</span>
            </motion.div>
            <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="flex flex-col items-center">
                <span className="block text-7xl md:text-9xl font-display font-bold text-[#c084fc] mb-2">20+</span>
                <span className="text-base font-bold tracking-[0.2em] uppercase text-white">Speakers</span>
            </motion.div>
            <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="flex flex-col items-center">
                <span className="block text-7xl md:text-9xl font-display font-bold text-[#c084fc] mb-2">16+</span>
                <span className="text-base font-bold tracking-[0.2em] uppercase text-white">Talks</span>
            </motion.div>
        </motion.div>

        {/* Main Content Area */}
        <div className="relative">
            <div className="mb-12">
                <motion.h2 
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="font-display font-bold uppercase leading-[0.85] mb-6"
                >
                    <span className="block text-7xl md:text-9xl text-transparent text-stroke tracking-tighter">3 Days</span>
                    <span className="block text-7xl md:text-9xl text-white tracking-tighter">Hackathon</span>
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-300 text-lg max-w-2xl leading-relaxed"
                >
                    Connect with designers worldwide, celebrating world-class content and forging connections across industries, verticals, and geographical boundaries.
                </motion.p>
            </div>
            
            {/* VR Headset Graphic - Absolute positioned on desktop */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 z-20 pointer-events-none"
            >
                <img 
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/vr-glasses-5471776-4569666.png?f=webp" 
                    alt="VR Headset"
                    className="w-full h-full object-contain animate-float drop-shadow-2xl"
                />
            </motion.div>

            {/* Cards Row */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.15 } }
                }}
                className="grid grid-cols-1 md:grid-cols-3 gap-1 relative z-10 max-w-6xl"
            >
                {MOCK_SCHEDULE.map((item, idx) => (
                    <motion.div 
                        key={idx} 
                        variants={{
                            hidden: { y: 30, opacity: 0 },
                            visible: { y: 0, opacity: 1 }
                        }}
                        className="bg-neon-pink p-8 h-64 flex flex-col justify-between transition-all hover:brightness-110 group"
                    >
                        <div>
                            <div className="inline-block bg-deep-purple text-white text-xs font-bold uppercase px-3 py-1 mb-4">
                                {item.day.toUpperCase()}
                            </div>
                            <h3 className="text-3xl font-display font-bold text-white leading-[0.9] uppercase max-w-[80%]">
                                {item.title}
                            </h3>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>

      </div>
    </section>
  );
};