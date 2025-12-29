import React, { useState, useRef } from 'react';
import { CheckCircle2, Copy, ArrowRight, Check, MessageCircle, Smartphone, UploadCloud, X, Image as ImageIcon, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PaymentPageProps {
  onComplete: () => void;
}

export const PaymentPage: React.FC<PaymentPageProps> = ({ onComplete }) => {
  const upiId = "hackathon@upi"; // Replace with actual UPI ID
  const amount = "250";
  const whatsappNumber = "919876543210"; 
  
  // Construct the UPI URI
  const paymentUrl = `upi://pay?pa=${upiId}&pn=SolveX&am=${amount}&cu=INR`;
  
  const [copied, setCopied] = useState(false);
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsApp = () => {
    const text = "Hello! I'm facing issues with the payment for SolveX 2026. Can you help?";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setScreenshot(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const removeFile = () => {
    setScreenshot(null);
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleFinish = () => {
    if (screenshot) {
      onComplete();
    }
  };

  return (
    <div className="min-h-screen bg-[#020412] text-white font-sans selection:bg-neon-pink selection:text-white flex flex-col p-4 lg:p-8 relative overflow-x-hidden pt-8 lg:pt-16">
        
        {/* Background Gradients */}
        <div className="fixed inset-0 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-deep-purple/40 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-acid-green/5 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl w-full mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-start">
                
                {/* LEFT COLUMN: Status & Payment Card */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col"
                >
                    {/* Status Header */}
                    <div className="mb-6 md:mb-10">
                        <h1 className="text-4xl md:text-7xl font-display font-bold italic uppercase tracking-tighter text-white mb-4 leading-[0.9]">
                            Onboarding <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffe600] to-[#33ff00]">Completed</span>
                        </h1>
                        
                        {/* Thin Gradient Line */}
                        <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: "120px" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="h-2 bg-gradient-to-r from-[#ffe600] to-[#33ff00] rounded-full mb-8 shadow-[0_0_20px_rgba(204,255,0,0.3)]" 
                        />
                        
                        <p className="text-gray-400 text-sm md:text-lg max-w-md leading-relaxed font-medium">
                            Your team spot is reserved. Please complete the payment below to confirm your participation.
                        </p>
                    </div>

                    {/* Payment Card */}
                    <div className="bg-[#0f1221] border border-white/10 rounded-3xl p-6 md:p-8 max-w-md w-full relative overflow-hidden group shadow-2xl transition-all duration-300">
                        
                        {/* Toggle Header */}
                        <div 
                            className="flex justify-between items-start relative z-10 cursor-pointer lg:cursor-default"
                            onClick={() => setIsExpanded(!isExpanded)}
                        >
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <p className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest">Amount to Pay</p>
                                    <div className="lg:hidden text-acid-green bg-acid-green/10 rounded-full p-1">
                                        {isExpanded ? <ChevronUp size={10} /> : <ChevronDown size={10} />}
                                    </div>
                                </div>
                                <p className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">₹{amount}</p>
                            </div>
                            <div className="bg-[#1a1d2e] border border-white/10 px-3 py-2 rounded-lg text-center min-w-[80px]">
                                <p className="text-[9px] text-neon-pink uppercase font-bold tracking-wider mb-1">Valid For</p>
                                <p className="text-xs md:text-sm font-bold text-white">Full Team</p>
                            </div>
                        </div>

                        {/* Collapsible Section (Collapses on Mobile, Always Visible on Desktop) */}
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            isExpanded ? 'max-h-[800px] opacity-100 mt-8' : 'max-h-0 opacity-0 mt-0 lg:max-h-[800px] lg:opacity-100 lg:mt-8'
                        }`}>
                            <div className="bg-white p-4 rounded-xl w-full aspect-square relative mb-6 shadow-lg max-w-[240px] mx-auto group-hover:scale-[1.02] transition-transform duration-300">
                                <img 
                                    src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(paymentUrl)}`}
                                    alt="QR Code" 
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            <div className="flex items-center gap-3 bg-black/40 p-3 rounded-xl border border-white/10 group-hover:border-white/20 transition-colors">
                                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                                    <Smartphone className="w-5 h-5 text-gray-400" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">UPI ID</div>
                                    <div className="font-mono text-sm text-white truncate">{upiId}</div>
                                </div>
                                <button 
                                    onClick={handleCopy}
                                    className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white"
                                    title="Copy UPI ID"
                                >
                                    {copied ? <Check className="w-4 h-4 text-acid-green" /> : <Copy className="w-4 h-4" />}
                                </button>
                            </div>

                            {/* Open UPI App Button */}
                            <a 
                                href={paymentUrl}
                                className="mt-6 w-full bg-acid-green hover:bg-[#b3e600] text-black py-4 rounded-xl font-display font-bold uppercase text-sm tracking-widest flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(204,255,0,0.3)] hover:shadow-[0_0_30px_rgba(204,255,0,0.5)] hover:scale-[1.02] group"
                            >
                                <span>Open UPI App</span>
                                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                        </div>

                        {/* Helper Hint for Mobile */}
                        {!isExpanded && (
                            <p className="lg:hidden text-center text-[10px] uppercase font-bold tracking-widest text-gray-600 mt-4 animate-pulse">
                                Tap to view QR Code
                            </p>
                        )}
                    </div>
                </motion.div>

                {/* RIGHT COLUMN: Instructions & Actions */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col justify-center lg:h-full pt-0 lg:pt-20"
                >
                    <div className="lg:pl-12 lg:border-l lg:border-white/10 h-full flex flex-col justify-center">
                        
                        <div className="flex items-center gap-4 mb-8 md:mb-10">
                            <div className="w-8 h-1 bg-neon-pink rounded-full" />
                            <h2 className="text-xl md:text-2xl font-display font-bold uppercase tracking-wider text-white">Complete Registration</h2>
                        </div>

                        <div className="space-y-8 md:space-y-10">
                            
                            {/* Step 1 */}
                            <div className="flex gap-6 group">
                                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-sans font-bold text-sm text-gray-400 shrink-0 group-hover:border-acid-green group-hover:text-acid-green transition-colors">1</div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2">Scan & Pay</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                                        Use any UPI app (Google Pay, PhonePe, Paytm) to scan the QR code on the left and complete the payment.
                                    </p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex gap-6">
                                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-sans font-bold text-sm text-gray-400 shrink-0">2</div>
                                <div className="w-full">
                                    <h3 className="text-lg font-bold text-white mb-4">Upload Payment Screenshot</h3>
                                    
                                    {/* Upload Area */}
                                    {!screenshot ? (
                                        <div 
                                            onClick={() => fileInputRef.current?.click()}
                                            className="border border-dashed border-white/10 hover:border-acid-green/50 bg-white/5 hover:bg-white/10 rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 group h-40 md:h-48 w-full max-w-md relative overflow-hidden"
                                        >
                                            <div className="p-3 rounded-full bg-white/5 group-hover:bg-acid-green/10 mb-3 transition-colors relative z-10">
                                                <UploadCloud className="w-6 h-6 text-gray-400 group-hover:text-acid-green" />
                                            </div>
                                            <p className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-1 text-center relative z-10">Click to upload screenshot</p>
                                            <p className="text-[10px] text-gray-500 relative z-10">JPG, PNG up to 5MB</p>
                                            
                                            {/* Hover Glow */}
                                            <div className="absolute inset-0 bg-gradient-to-tr from-acid-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                                        </div>
                                    ) : (
                                        <div className="relative rounded-xl overflow-hidden border border-acid-green/30 w-full max-w-md bg-black/40 group h-40 md:h-48">
                                            <div className="w-full h-full flex items-center justify-center bg-black/50">
                                                {previewUrl ? (
                                                    <img src={previewUrl} alt="Preview" className="h-full w-full object-contain opacity-80 group-hover:opacity-40 transition-opacity" />
                                                ) : (
                                                    <ImageIcon className="w-8 h-8 text-gray-600" />
                                                )}
                                            </div>
                                            
                                            {/* Hover State */}
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button 
                                                    onClick={(e) => { e.stopPropagation(); removeFile(); }}
                                                    className="bg-red-500 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-red-600 transition-colors shadow-lg"
                                                >
                                                    <X className="w-3 h-3" /> Remove File
                                                </button>
                                            </div>

                                            <div className="absolute bottom-0 left-0 w-full bg-black/80 backdrop-blur px-4 py-2 flex justify-between items-center border-t border-white/5">
                                                <span className="text-xs text-white truncate max-w-[200px]">{screenshot.name}</span>
                                                <CheckCircle2 className="w-4 h-4 text-acid-green" />
                                            </div>
                                        </div>
                                    )}
                                    <input 
                                        type="file" 
                                        ref={fileInputRef}
                                        onChange={handleFileChange}
                                        className="hidden" 
                                        accept="image/*"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="mt-12 space-y-6 w-full max-w-md mx-auto flex flex-col items-center">
                            <button 
                                onClick={handleFinish}
                                disabled={!screenshot}
                                className={`w-full py-4 rounded-xl font-display font-bold text-xl uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-300 ${
                                    screenshot 
                                    ? 'bg-[#1a1d2e] border border-acid-green/50 text-acid-green hover:bg-acid-green hover:text-black hover:border-acid-green shadow-[0_0_20px_rgba(204,255,0,0.15)] scale-[1.02]' 
                                    : 'bg-[#151515] border border-white/5 text-gray-600 cursor-not-allowed'
                                }`}
                            >
                                Finish & Enroll <ArrowRight className={`w-5 h-5 ${screenshot ? 'translate-x-0' : '-translate-x-1 opacity-50'} transition-transform`} />
                            </button>

                            <button 
                                onClick={handleWhatsApp}
                                className="w-full text-gray-500 hover:text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                            >
                                <MessageCircle className="w-4 h-4" /> Having trouble? WhatsApp Us
                            </button>
                        </div>

                    </div>
                </motion.div>

            </div>
        </div>
    </div>
  );
};