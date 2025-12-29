import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Mail, AlertTriangle, Home, MessageCircle, ExternalLink } from 'lucide-react';

interface SuccessPageProps {
  onBack: () => void;
}

export const SuccessPage: React.FC<SuccessPageProps> = ({ onBack }) => {
  const whatsappLink = "https://chat.whatsapp.com/YOUR_COMMUNITY_LINK_HERE"; // Replace with actual link

  return (
    <div className="fixed inset-0 w-full h-full bg-[#020412] text-white font-sans z-50 overflow-y-auto selection:bg-neon-pink selection:text-white">
      {/* Background Elements */}
      <div className="fixed inset-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="fixed top-1/4 right-1/4 w-96 h-96 bg-acid-green/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-1/4 left-1/4 w-96 h-96 bg-neon-pink/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="min-h-full w-full flex flex-col items-center justify-center p-6 relative z-10">
        <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:max-w-2xl w-full rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col items-center text-center"
        >
            {/* Success Icon */}
            <div className="w-24 h-24 rounded-full bg-acid-green/20 flex items-center justify-center mb-8 relative">
                <motion.div 
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1 }} 
                    transition={{ delay: 0.2, type: "spring" }}
                >
                    <CheckCircle2 className="w-12 h-12 text-acid-green" />
                </motion.div>
                <div className="absolute inset-0 border-2 border-acid-green rounded-full animate-ping opacity-20" />
            </div>

            <h1 className="text-4xl md:text-5xl font-display font-bold uppercase italic text-white mb-4 tracking-tight">
                Registration <span className="text-acid-green">Received</span>
            </h1>
            
            <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-lg">
                Your team's entry for <span className="text-white font-bold">SolveX 2026</span> has been recorded. We are currently processing your payment details.
            </p>

            {/* Status Cards */}
            <div className="w-full space-y-4 mb-8">
                
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-4 text-left hover:bg-white/10 transition-colors">
                    <div className="p-2 bg-blue-500/10 rounded-lg shrink-0">
                        <ShieldCheck className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-sm uppercase tracking-wide mb-1">Verification in Progress</h4>
                        <p className="text-xs text-gray-400 leading-relaxed">
                            Our organizers are manually verifying your transaction ID and screenshot. This usually takes a few hours.
                        </p>
                    </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-4 text-left hover:bg-white/10 transition-colors">
                    <div className="p-2 bg-neon-pink/10 rounded-lg shrink-0">
                        <Mail className="w-5 h-5 text-neon-pink" />
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-sm uppercase tracking-wide mb-1">Check Your Inbox</h4>
                        <p className="text-xs text-gray-400 leading-relaxed">
                            Once verified, a confirmation email with participation tickets will be sent to all team members.
                        </p>
                    </div>
                </div>

                <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-4 flex items-start gap-4 text-left">
                    <div className="p-2 bg-red-500/10 rounded-lg shrink-0">
                        <AlertTriangle className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                        <h4 className="font-bold text-red-400 text-sm uppercase tracking-wide mb-1">Important Note</h4>
                        <p className="text-xs text-gray-400 leading-relaxed">
                            Any discrepancies in payment or failed transactions may lead to immediate rejection of the registration. Details will be notified via email.
                        </p>
                    </div>
                </div>

            </div>

            {/* WhatsApp Community Join */}
            <div 
                onClick={() => window.open(whatsappLink, '_blank')}
                className="w-full bg-[#25D366]/10 border border-[#25D366]/30 rounded-xl p-6 mb-10 flex flex-col md:flex-row items-center justify-between gap-4 cursor-pointer group hover:bg-[#25D366]/20 transition-all duration-300"
            >
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#25D366]/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <MessageCircle className="w-6 h-6 text-[#25D366]" />
                    </div>
                    <div className="text-center md:text-left">
                        <h4 className="font-display font-bold text-white text-lg uppercase tracking-wider mb-1 group-hover:text-[#25D366] transition-colors">Join The Community</h4>
                        <p className="text-xs text-gray-300">Get real-time updates and connect with other teams on WhatsApp.</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 bg-[#25D366] text-black px-6 py-2 rounded-lg font-bold uppercase text-xs tracking-widest hover:bg-white transition-colors shadow-[0_0_15px_rgba(37,211,102,0.4)] shrink-0">
                    <span>Join Now</span>
                    <ExternalLink className="w-3 h-3" />
                </div>
            </div>

            <button 
                onClick={onBack}
                className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-display font-bold uppercase tracking-widest transition-all w-full md:w-auto"
            >
                <Home className="w-4 h-4s group-hover:-translate-y-0.5 transition-transform" />
                Return to Homepage
            </button>

        </motion.div>
      </div>
    </div>
  );
};