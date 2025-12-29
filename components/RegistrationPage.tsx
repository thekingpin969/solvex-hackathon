import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Phone, CheckCircle2 } from 'lucide-react';

interface RegistrationPageProps {
  onBack: () => void;
  onSuccess: () => void;
}

interface MemberData {
  name: string;
  phone: string;
  email: string;
  department: string;
  semester: string;
  college: string;
  place: string;
}

interface FormData {
  teamName: string;
  members: MemberData[];
}

const initialMemberData: MemberData = {
  name: '',
  phone: '',
  email: '',
  department: '',
  semester: '',
  college: '',
  place: ''
};

const STEP_TITLES = [
  "Basic Info",
  "Leader Academic",
  "Member 02",
  "Member 03",
  "Member 04"
];

export const RegistrationPage: React.FC<RegistrationPageProps> = ({ onBack, onSuccess }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    teamName: '',
    members: Array(4).fill(null).map(() => ({ ...initialMemberData }))
  });

  const updateMember = (index: number, field: keyof MemberData, value: string) => {
    const newMembers = [...formData.members];
    newMembers[index] = { ...newMembers[index], [field]: value };
    setFormData({ ...formData, members: newMembers });
  };

  const handleNext = () => {
    if (currentStep < STEP_TITLES.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log('Submitting Form:', formData);
      onSuccess();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      onBack();
    }
  };

  const getMemberIndex = () => {
    if (currentStep === 0 || currentStep === 1) return 0;
    return currentStep - 1;
  };

  const memberIndex = getMemberIndex();

  return (
    <div className="min-h-screen bg-black text-white flex overflow-hidden font-sans selection:bg-neon-pink selection:text-white">
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        /* Custom styles for dark mode inputs autofill */
        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus, 
        input:-webkit-autofill:active{
            -webkit-box-shadow: 0 0 0 30px #1a0b2e inset !important;
            -webkit-text-fill-color: white !important;
        }
      `}</style>

      {/* LEFT PANEL - WRAPPER with Padding */}
      <div className="w-full lg:w-2/3 h-screen relative z-10 flex flex-col p-0 lg:py-6 lg:pl-6 lg:pr-0">
        
        {/* LEFT PANEL - CARD */}
        <div className="flex-1 bg-deep-purple lg:rounded-l-3xl lg:rounded-r-none flex flex-col overflow-y-auto hide-scrollbar border-r border-white/5 lg:border-none shadow-2xl relative">
            
            {/* Navigation / Header */}
            <div className="px-6 md:px-16 py-6 md:py-8 flex justify-between items-center border-b border-white/5 sticky top-0 z-30 bg-deep-purple/95 backdrop-blur">
                <button 
                    onClick={onBack}
                    className="text-gray-400 hover:text-acid-green flex items-center gap-2 font-semibold transition-colors uppercase tracking-wider text-sm"
                >
                    <ArrowLeft className="w-5 h-5" /> 
                    <span className="hidden sm:inline">Back</span>
                    <span className="sm:hidden">Exit</span>
                </button>
                <div className="font-display font-bold text-xl md:text-2xl italic tracking-tighter text-white">
                    SOLVE<span className="text-acid-green">X</span>
                </div>
            </div>

            <div className="flex-1 px-6 md:px-16 pb-12 pt-8 max-w-5xl mx-auto w-full flex flex-col justify-start md:justify-center">
                
                {/* Title Section */}
                <div className="mb-8">
                    <h1 className="text-3xl md:text-5xl font-display font-bold text-white uppercase mb-2">
                        {currentStep === 0 ? 'Team Registration' : `Member ${memberIndex + 1} Details`}
                    </h1>
                    <p className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-widest">
                        Step <span className="text-neon-pink">{currentStep + 1}</span> of {STEP_TITLES.length}
                    </p>
                </div>

                {/* Step Indicator & Main Content */}
                <div className="flex flex-col sm:flex-row gap-6 mb-8">
                    <div className="shrink-0 flex items-center justify-between sm:block">
                        <div className="w-14 h-14 md:w-16 md:h-16 bg-acid-green rounded-2xl flex items-center justify-center text-2xl md:text-3xl font-display font-bold text-deep-purple shadow-[0_0_15px_rgba(204,255,0,0.4)]">
                            {currentStep + 1}
                        </div>
                    </div>
                    
                    {/* Leader Summary (Only visible after step 0) */}
                    {currentStep > 0 && (
                        <div className="flex-1 bg-white/5 rounded-2xl p-4 flex items-center justify-between border border-white/10 backdrop-blur-sm min-w-0">
                            <div className="flex items-center gap-4 overflow-hidden">
                                <div className="w-10 h-10 rounded-full bg-neon-pink flex items-center justify-center text-white font-bold font-display shrink-0">
                                    {formData.members[0].name.charAt(0) || "L"}
                                </div>
                                <div className="min-w-0">
                                    <div className="text-xs text-gray-400 font-bold uppercase tracking-wider truncate">Team Leader</div>
                                    <div className="font-bold text-white font-display uppercase tracking-wide truncate">{formData.members[0].name || "Leader Name"}</div>
                                </div>
                            </div>
                            <div className="text-xs text-acid-green font-bold flex items-center gap-1 uppercase tracking-wider shrink-0 ml-2">
                                <span className="w-2 h-2 rounded-full bg-acid-green animate-pulse shadow-[0_0_10px_#ccff00] hidden sm:block"/> <span className="hidden sm:inline">Active</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Fields Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {/* Step 0: Basic Info */}
                        {currentStep === 0 && (
                            <>
                                <div className="lg:col-span-3">
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-1 focus-within:bg-white/10 transition-all duration-300">
                                        <label className="block text-xs font-bold text-gray-400 uppercase px-4 pt-3 tracking-wider">Team Name</label>
                                        <input 
                                            type="text" 
                                            value={formData.teamName}
                                            onChange={(e) => setFormData({...formData, teamName: e.target.value})}
                                            className="w-full bg-transparent border-none p-4 text-white font-display font-bold text-xl focus:ring-0 focus:outline-none placeholder-white/20 uppercase tracking-wide"
                                            placeholder="CODE MARAUDERS"
                                        />
                                    </div>
                                    <div className="px-4 mt-1 text-xs text-gray-500 font-mono">Unique identifier for your squad</div>
                                </div>

                                <div className="md:col-span-1 lg:col-span-1">
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-1 h-full flex flex-col justify-center transition-all duration-300">
                                        <label className="block text-xs font-bold text-gray-400 uppercase px-4 pt-2 tracking-wider">Leader Name</label>
                                        <input 
                                            type="text" 
                                            value={formData.members[0].name}
                                            onChange={(e) => updateMember(0, 'name', e.target.value)}
                                            className="w-full bg-transparent border-none px-4 pb-2 text-white font-medium focus:ring-0 focus:outline-none placeholder-white/20"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                </div>

                                <div className="md:col-span-1 lg:col-span-1">
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-1 h-full flex flex-col justify-center transition-all duration-300">
                                        <label className="block text-xs font-bold text-gray-400 uppercase px-4 pt-2 tracking-wider">Email</label>
                                        <input 
                                            type="email" 
                                            value={formData.members[0].email}
                                            onChange={(e) => updateMember(0, 'email', e.target.value)}
                                            className="w-full bg-transparent border-none px-4 pb-2 text-white font-medium focus:ring-0 focus:outline-none placeholder-white/20"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="md:col-span-1 lg:col-span-1">
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-1 h-full flex flex-col justify-center transition-all duration-300">
                                        <label className="block text-xs font-bold text-gray-400 uppercase px-4 pt-2 tracking-wider">Phone</label>
                                        <input 
                                            type="tel" 
                                            value={formData.members[0].phone}
                                            onChange={(e) => updateMember(0, 'phone', e.target.value)}
                                            className="w-full bg-transparent border-none px-4 pb-2 text-white font-medium focus:ring-0 focus:outline-none placeholder-white/20"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                </div>
                                
                                <div className="md:col-span-1 lg:col-span-1">
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-1 h-full flex flex-col justify-center transition-all duration-300">
                                        <label className="block text-xs font-bold text-gray-400 uppercase px-4 pt-2 tracking-wider">Place</label>
                                        <input 
                                            type="text" 
                                            value={formData.members[0].place}
                                            onChange={(e) => updateMember(0, 'place', e.target.value)}
                                            className="w-full bg-transparent border-none px-4 pb-2 text-white font-medium focus:ring-0 focus:outline-none placeholder-white/20"
                                            placeholder="City / Town"
                                        />
                                    </div>
                                </div>
                            </>
                        )}

                        {/* Step 1: Leader Academic Info */}
                        {currentStep === 1 && (
                            <>
                                <div className="lg:col-span-2">
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-1 h-full flex flex-col justify-center transition-all duration-300">
                                        <label className="block text-xs font-bold text-gray-400 uppercase px-4 pt-2 tracking-wider">College Name</label>
                                        <input 
                                            type="text" 
                                            value={formData.members[0].college}
                                            onChange={(e) => updateMember(0, 'college', e.target.value)}
                                            className="w-full bg-transparent border-none px-4 pb-2 text-white font-medium focus:ring-0 focus:outline-none placeholder-white/20"
                                            placeholder="University / Institute"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-1 h-full flex flex-col justify-center transition-all duration-300">
                                        <label className="block text-xs font-bold text-gray-400 uppercase px-4 pt-2 tracking-wider">Semester</label>
                                        <input 
                                            type="text" 
                                            value={formData.members[0].semester}
                                            onChange={(e) => updateMember(0, 'semester', e.target.value)}
                                            className="w-full bg-transparent border-none px-4 pb-2 text-white font-medium focus:ring-0 focus:outline-none placeholder-white/20"
                                            placeholder="S6"
                                        />
                                    </div>
                                </div>

                                <div className="lg:col-span-3">
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-1 h-full flex flex-col justify-center transition-all duration-300">
                                        <label className="block text-xs font-bold text-gray-400 uppercase px-4 pt-2 tracking-wider">Department</label>
                                        <input 
                                            type="text"
                                            value={formData.members[0].department}
                                            onChange={(e) => updateMember(0, 'department', e.target.value)}
                                            className="w-full bg-transparent border-none px-4 pb-2 text-white font-medium focus:ring-0 focus:outline-none placeholder-white/20"
                                            placeholder="e.g. Computer Science Engineering"
                                        />
                                    </div>
                                </div>
                            </>
                        )}

                        {/* Steps 2-4: Other Members */}
                        {currentStep >= 2 && (
                            <>
                                <div className="md:col-span-1">
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-1 h-full flex flex-col justify-center transition-all duration-300">
                                        <label className="block text-xs font-bold text-gray-400 uppercase px-4 pt-2 tracking-wider">Full Name</label>
                                        <input 
                                            type="text" 
                                            value={formData.members[memberIndex].name}
                                            onChange={(e) => updateMember(memberIndex, 'name', e.target.value)}
                                            className="w-full bg-transparent border-none px-4 pb-2 text-white font-medium focus:ring-0 focus:outline-none placeholder-white/20"
                                            placeholder="Name"
                                        />
                                    </div>
                                </div>

                                <div className="md:col-span-1">
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-1 h-full flex flex-col justify-center transition-all duration-300">
                                        <label className="block text-xs font-bold text-gray-400 uppercase px-4 pt-2 tracking-wider">Email</label>
                                        <input 
                                            type="email" 
                                            value={formData.members[memberIndex].email}
                                            onChange={(e) => updateMember(memberIndex, 'email', e.target.value)}
                                            className="w-full bg-transparent border-none px-4 pb-2 text-white font-medium focus:ring-0 focus:outline-none placeholder-white/20"
                                            placeholder="Email"
                                        />
                                    </div>
                                </div>

                                <div className="md:col-span-1">
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-1 h-full flex flex-col justify-center transition-all duration-300">
                                        <label className="block text-xs font-bold text-gray-400 uppercase px-4 pt-2 tracking-wider">Phone</label>
                                        <input 
                                            type="tel" 
                                            value={formData.members[memberIndex].phone}
                                            onChange={(e) => updateMember(memberIndex, 'phone', e.target.value)}
                                            className="w-full bg-transparent border-none px-4 pb-2 text-white font-medium focus:ring-0 focus:outline-none placeholder-white/20"
                                            placeholder="Phone"
                                        />
                                    </div>
                                </div>

                                <div className="md:col-span-1">
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-1 h-full flex flex-col justify-center transition-all duration-300">
                                        <label className="block text-xs font-bold text-gray-400 uppercase px-4 pt-2 tracking-wider">Place</label>
                                        <input 
                                            type="text" 
                                            value={formData.members[memberIndex].place}
                                            onChange={(e) => updateMember(memberIndex, 'place', e.target.value)}
                                            className="w-full bg-transparent border-none px-4 pb-2 text-white font-medium focus:ring-0 focus:outline-none placeholder-white/20"
                                            placeholder="City"
                                        />
                                    </div>
                                </div>

                                <div className="md:col-span-2">
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-1 h-full flex flex-col justify-center transition-all duration-300">
                                        <label className="block text-xs font-bold text-gray-400 uppercase px-4 pt-2 tracking-wider">College</label>
                                        <input 
                                            type="text" 
                                            value={formData.members[memberIndex].college}
                                            onChange={(e) => updateMember(memberIndex, 'college', e.target.value)}
                                            className="w-full bg-transparent border-none px-4 pb-2 text-white font-medium focus:ring-0 focus:outline-none placeholder-white/20"
                                            placeholder="College Name"
                                        />
                                    </div>
                                </div>

                                <div className="md:col-span-2">
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-1 h-full flex flex-col justify-center transition-all duration-300">
                                        <label className="block text-xs font-bold text-gray-400 uppercase px-4 pt-2 tracking-wider">Department</label>
                                        <input 
                                            type="text" 
                                            value={formData.members[memberIndex].department}
                                            onChange={(e) => updateMember(memberIndex, 'department', e.target.value)}
                                            className="w-full bg-transparent border-none px-4 pb-2 text-white font-medium focus:ring-0 focus:outline-none placeholder-white/20"
                                            placeholder="Department"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-1 h-full flex flex-col justify-center transition-all duration-300">
                                        <label className="block text-xs font-bold text-gray-400 uppercase px-4 pt-2 tracking-wider">Semester</label>
                                        <input 
                                            type="text" 
                                            value={formData.members[memberIndex].semester}
                                            onChange={(e) => updateMember(memberIndex, 'semester', e.target.value)}
                                            className="w-full bg-transparent border-none px-4 pb-2 text-white font-medium focus:ring-0 focus:outline-none placeholder-white/20"
                                            placeholder="Sem"
                                        />
                                    </div>
                                </div>
                            </>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Footer Buttons */}
                <div className="mt-8 md:mt-16 flex flex-col-reverse md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 hover:text-white text-sm font-semibold cursor-pointer transition-colors group">
                        <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-neon-pink flex items-center justify-center transition-colors">
                            <Phone className="w-4 h-4" />
                        </div>
                        <span>Any questions? Call us.</span>
                    </div>

                    <div className="flex items-center justify-end gap-4 w-full md:w-auto">
                        <button 
                            onClick={handlePrev}
                            className={`px-6 py-3 font-bold text-gray-500 hover:text-white transition-colors uppercase tracking-wider text-sm ${currentStep === 0 ? 'hidden' : 'block'}`}
                        >
                            Back
                        </button>
                        <button 
                            onClick={handleNext}
                            className="flex-1 md:flex-none bg-acid-green hover:bg-[#b3e600] text-deep-purple px-8 py-4 rounded-full font-display font-bold text-lg uppercase tracking-wider shadow-[0_0_20px_rgba(204,255,0,0.3)] hover:shadow-[0_0_30px_rgba(204,255,0,0.5)] transition-all hover:scale-105 active:scale-95 text-center"
                        >
                            {currentStep === STEP_TITLES.length - 1 ? 'Submit' : 'Continue'}
                        </button>
                    </div>
                </div>

            </div>
        </div>
      </div>

      {/* RIGHT PANEL - DECORATIVE */}
      <div className="hidden lg:flex lg:w-1/3 bg-[#020412] relative overflow-hidden items-center justify-center">
         
         {/* Background Elements */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-deep-purple/50 to-[#020412] z-0" />
         <div className="absolute top-0 right-0 w-64 h-64 bg-neon-pink/10 rounded-full blur-[80px] mix-blend-screen pointer-events-none" />
         <div className="absolute bottom-0 left-0 w-64 h-64 bg-acid-green/10 rounded-full blur-[80px] mix-blend-screen pointer-events-none" />

         {/* Center Image Card */}
         <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 w-[70%] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group"
         >
            {/* The Image */}
            <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop"
                alt="Future Technology"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            
            {/* Text Overlay */}
            <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 text-white/80 mb-2">
                    <div className="w-8 h-1 bg-acid-green rounded-full" />
                    <span className="text-xs font-mono uppercase tracking-widest text-acid-green">Build</span>
                </div>
                <h3 className="text-3xl font-display font-bold text-white uppercase leading-none">
                    Create<br/>The Future
                </h3>
            </div>
         </motion.div>
      </div>

    </div>
  );
};