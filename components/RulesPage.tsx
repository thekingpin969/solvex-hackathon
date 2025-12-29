import React from 'react';
import { ArrowLeft, Shield, Users, Code, Clock, FileCheck, AlertTriangle, MessageCircle, Mail, ChevronRight, Zap, Terminal } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

interface RulesPageProps {
  onBack: () => void;
  onRegister: () => void;
}

export const RulesPage: React.FC<RulesPageProps> = ({ onBack, onRegister }) => {
  const whatsappNumber = "919876543210"; 
  const email = "support@solvex.com";

  const handleWhatsApp = () => {
    const text = "Hi, I have a query regarding SolveX 2026 Hackathon.";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleEmail = () => {
    window.location.href = `mailto:${email}?subject=SolveX 2026 Query`;
  };

  const rules = [
    {
      id: "01",
      icon: Users,
      color: "text-neon-pink",
      borderColor: "group-hover:border-neon-pink",
      bgGradient: "from-neon-pink/20",
      title: "The Squad",
      subtitle: "Team Composition",
      content: [
        "Teams must consist of 2-4 members.",
        "Inter-college teams are allowed & encouraged.",
        "Lone wolves are welcome but teams are preferred.",
        "One person cannot be in multiple teams."
      ]
    },
    {
      id: "02",
      icon: Clock,
      color: "text-acid-green",
      borderColor: "group-hover:border-acid-green",
      bgGradient: "from-acid-green/20",
      title: "The Grind",
      subtitle: "Duration & Format",
      content: [
        "24-hour non-stop offline hackathon.",
        "Check-in starts at 08:00 AM on Day 1.",
        "Coding phase: 10:00 AM (Day 1) - 10:00 AM (Day 2).",
        "Mandatory presence at the venue."
      ]
    },
    {
      id: "03",
      icon: Code,
      color: "text-electric-blue",
      borderColor: "group-hover:border-electric-blue",
      bgGradient: "from-electric-blue/20",
      title: "The Build",
      subtitle: "Development Rules",
      content: [
        "Fresh code only. No pre-built projects.",
        "Bring your own laptops and chargers.",
        "Open-source libraries/frameworks allowed.",
        "APIs must be publicly available."
      ]
    },
    {
      id: "04",
      icon: Shield,
      color: "text-yellow-400",
      borderColor: "group-hover:border-yellow-400",
      bgGradient: "from-yellow-400/20",
      title: "The Rights",
      subtitle: "Intellectual Property",
      content: [
        "You own what you build. 100%.",
        "We reserve the right to showcase your submission.",
        "Plagiarism = Immediate Disqualification.",
        "Be original, be creative."
      ]
    },
    {
      id: "05",
      icon: FileCheck,
      color: "text-purple-400",
      borderColor: "group-hover:border-purple-400",
      bgGradient: "from-purple-400/20",
      title: "The Pitch",
      subtitle: "Submission & Demo",
      content: [
        "Submit code via GitHub & Devfolio.",
        "Working prototype is mandatory.",
        "5-minute pitch + 2-minute Q&A.",
        "Judging criteria: Innovation, Tech, UI/UX."
      ]
    },
    {
      id: "06",
      icon: AlertTriangle,
      color: "text-red-500",
      borderColor: "group-hover:border-red-500",
      bgGradient: "from-red-500/20",
      title: "The Protocol",
      subtitle: "Code of Conduct",
      content: [
        "Be respectful. No harassment strictly.",
        "Keep the venue clean.",
        "Any damage to property will be penalized.",
        "Have fun and help others!"
      ]
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", bounce: 0.4 }
    }
  };

  return (
    <div className="min-h-screen bg-deep-purple text-white font-sans selection:bg-neon-pink selection:text-white overflow-x-hidden relative">
      
      {/* Animated Background Mesh - Matched to Hero */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px]" />
        
        <motion.div 
            animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-pink/20 rounded-full blur-[100px]" 
        />
        <motion.div 
            animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-acid-green/10 rounded-full blur-[120px]" 
        />
      </div>

      <div className="container mx-auto px-6 py-8 relative z-10">
        
        {/* Top Navigation */}
        <div className="flex justify-between items-center mb-16 pt-4">
            <button 
                onClick={onBack}
                className="group flex items-center gap-3 text-white/80 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-full backdrop-blur-sm border border-white/10"
            >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform text-acid-green" />
                <span className="uppercase tracking-widest text-xs font-bold">Return Home</span>
            </button>
            <div className="hidden md:flex items-center gap-2 text-white/40 text-xs font-mono uppercase tracking-widest">
                <Terminal className="w-4 h-4 text-neon-pink" />
                <span>System.Rules.Init()</span>
            </div>
        </div>

        {/* Hero Header */}
        <div className="mb-20 text-center relative">
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-block"
            >
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold uppercase italic tracking-tighter text-white mb-2 relative z-10">
                    Rules Of <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-acid-green via-white to-electric-blue">Engagement</span>
                </h1>
                {/* Glitch Effect Copy */}
                <span className="absolute top-1 left-1 w-full h-full text-6xl md:text-8xl lg:text-9xl font-display font-bold uppercase italic tracking-tighter text-stroke opacity-30 z-0 pointer-events-none animate-pulse">
                    Rules Of <br/> Engagement
                </span>
            </motion.div>
            
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mt-6 border-b border-white/10 pb-8"
            >
                Innovation requires structure. Read carefully to ensure fair play and avoid disqualification in the <span className="text-neon-pink font-bold">SolveX Arena</span>.
            </motion.p>
        </div>

        {/* Rules Grid */}
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24"
        >
            {rules.map((rule, index) => (
                <motion.div
                    key={index}
                    variants={cardVariants}
                    className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:-translate-y-2`}
                >
                    {/* Hover Gradient Border Effect */}
                    <div className={`absolute inset-0 border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl ${rule.borderColor} pointer-events-none`} />
                    
                    {/* Background Gradient Blob */}
                    <div className={`absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br ${rule.bgGradient} to-transparent rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                    {/* Content */}
                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-6">
                            <div className={`p-3 rounded-2xl bg-deep-purple border border-white/10 ${rule.color} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                <rule.icon size={32} strokeWidth={1.5} />
                            </div>
                            <span className="text-5xl font-display font-bold text-white/5 group-hover:text-white/10 transition-colors select-none">
                                {rule.id}
                            </span>
                        </div>
                        
                        <h3 className="text-3xl font-display font-bold uppercase text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                            {rule.title}
                        </h3>
                        <p className={`text-xs font-bold uppercase tracking-widest mb-6 ${rule.color}`}>
                            {rule.subtitle}
                        </p>
                        
                        <ul className="space-y-3">
                            {rule.content.map((item, idx) => (
                                <li key={idx} className="flex gap-3 text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                    <ChevronRight className={`w-4 h-4 shrink-0 mt-0.5 ${rule.color}`} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            ))}
        </motion.div>

        {/* Bottom Command Center */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Contact Panel */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-5 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden backdrop-blur-md"
            >
                <div className="absolute top-0 right-0 w-32 h-32 bg-acid-green/5 rounded-full blur-[40px]" />
                
                <div>
                    <h3 className="text-3xl font-display font-bold uppercase text-white mb-2">Support Comms</h3>
                    <p className="text-gray-400 mb-8 text-sm leading-relaxed">
                        Stuck in a loop? Encountering a bug in the matrix? 
                        Reach out to our organizers for immediate assistance.
                    </p>
                </div>

                <div className="space-y-4">
                    <button 
                        onClick={handleWhatsApp}
                        className="w-full flex items-center justify-between bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-black border border-[#25D366]/50 hover:border-[#25D366] p-4 rounded-xl transition-all duration-300 group"
                    >
                        <div className="flex items-center gap-4">
                            <MessageCircle className="w-6 h-6" />
                            <div className="text-left">
                                <div className="font-bold text-sm uppercase tracking-wider">WhatsApp</div>
                                <div className="text-[10px] opacity-70 group-hover:opacity-100">Quick Response</div>
                            </div>
                        </div>
                        <ArrowLeft className="w-5 h-5 rotate-180 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>

                    <button 
                        onClick={handleEmail}
                        className="w-full flex items-center justify-between bg-white/5 hover:bg-white/20 text-white border border-white/10 hover:border-white/30 p-4 rounded-xl transition-all duration-300 group"
                    >
                        <div className="flex items-center gap-4">
                            <Mail className="w-6 h-6" />
                            <div className="text-left">
                                <div className="font-bold text-sm uppercase tracking-wider">Email Support</div>
                                <div className="text-[10px] text-gray-400 group-hover:text-white">Official Enquiries</div>
                            </div>
                        </div>
                        <ArrowLeft className="w-5 h-5 rotate-180 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                </div>
            </motion.div>

            {/* Registration CTA Panel */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-7 bg-acid-green relative rounded-3xl p-8 md:p-12 overflow-hidden flex flex-col items-center justify-center text-center group cursor-pointer"
                onClick={onRegister}
            >
                {/* Animated Background Pattern on Hover */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" 
                     style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
                />
                
                <div className="relative z-10 text-deep-purple">
                    <div className="mb-4 inline-flex items-center gap-2 px-4 py-1 rounded-full bg-deep-purple/10 border border-deep-purple/20">
                        <Zap className="w-4 h-4 fill-current" />
                        <span className="text-xs font-bold uppercase tracking-widest">Slots Filling Fast</span>
                    </div>
                    
                    <h3 className="text-5xl md:text-7xl font-display font-bold uppercase leading-[0.9] mb-6 group-hover:scale-105 transition-transform duration-300">
                        Ready to <br/> Deploy?
                    </h3>
                    
                    <p className="font-medium max-w-md mx-auto mb-8 opacity-80">
                        Join 500+ developers, designers, and creators in the ultimate 24-hour showdown.
                    </p>

                    <button className="bg-deep-purple text-white px-10 py-4 rounded-xl font-display font-bold text-xl uppercase tracking-wider shadow-2xl group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all flex items-center gap-3 mx-auto hover:bg-black">
                        Register Now <ArrowLeft className="w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-[80px] pointer-events-none mix-blend-overlay" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-pink/20 rounded-full blur-[80px] pointer-events-none mix-blend-overlay" />
            </motion.div>

        </div>

      </div>
    </div>
  );
};