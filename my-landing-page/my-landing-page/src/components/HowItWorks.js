"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Sparkles, Calendar, Video, CheckCircle2, Linkedin, ArrowRight, ArrowDown } from "lucide-react";

const nodeVariants = {
  hidden: { scale: 0.6, opacity: 0, filter: "blur(4px)", y: -20 },
  visible: { scale: 1, opacity: 1, filter: "blur(0px)", y: 0 },
  exit: { scale: 0.4, opacity: 0, filter: "blur(4px)", y: 20 }
};

// Custom animated icon component for the Source box
const NaukriIcon = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <circle cx="38" cy="18" r="9" />
    <path d="M32 61 V38 L65 24 V42 L43 55 L65 80 V93 L32 61 Z" />
  </svg>
);

const IndeedIcon = ({ className }) => (
  <svg viewBox="0 0 100 30" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 18 C8 8, 16 3, 26 3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="22" cy="10" r="2.5" />
    <text x="17" y="26" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="24" letterSpacing="-1">indeed</text>
  </svg>
);

const InstahyreIcon = ({ className }) => (
  <svg viewBox="0 0 120 30" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <text x="5" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="22" letterSpacing="-0.5">Instahyre</text>
  </svg>
);

const sourcePlatforms = [
  { id: "linkedin", render: <Linkedin className="w-6 h-6 md:w-8 md:h-8 text-[#0a66c2]" fill="currentColor" strokeWidth={1} /> },
  { id: "naukri", render: <NaukriIcon className="w-6 h-6 md:w-8 md:h-8 text-[#3b82f6]" /> },
  { id: "indeed", render: <IndeedIcon className="w-12 md:w-16 h-auto text-[#003A9B]" /> },
  { id: "instahyre", render: <InstahyreIcon className="w-16 md:w-20 h-auto text-[#e2e8f0]" /> }
];

const AnimatedSourceIcon = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % sourcePlatforms.length);
    }, 2000); // Cycles every 2 seconds
    return () => clearInterval(timer);
  }, []);

  const activePlatform = sourcePlatforms[index];

  return (
    <div className="w-full h-full relative flex items-center justify-center overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={activePlatform.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4 }}
          className="absolute flex items-center justify-center text-[8px] md:text-[9px] font-bold text-[#f4f4f5] tracking-widest text-center whitespace-nowrap"
        >
          {activePlatform.render}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const VetonIcon = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(32, 12) skewX(-15)">
      <rect x="14" y="14" width="32" height="32" rx="6" fill="#1d4ed8" />
      <rect x="0" y="0" width="32" height="32" rx="6" fill="#2dd4bf" opacity="0.85" />
    </g>
    <text x="50" y="88" fill="currentColor" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="18" textAnchor="middle" letterSpacing="0.5">veton.ai</text>
  </svg>
);

// Custom text block for the Screening box
const ScreeningIcon = () => (
  <div className="w-full h-full relative flex items-center justify-center overflow-hidden px-1">
    <VetonIcon className="w-10 h-10 md:w-14 md:h-14 text-[#f4f4f5]" />
  </div>
);

const RoostedIcon = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="38" cy="30" r="9" stroke="#f59e0b" strokeWidth="7" fill="none" />
    <path d="M 24 60 A 14 14 0 0 1 52 60" stroke="#f59e0b" strokeWidth="7" fill="none" />
    <circle cx="62" cy="30" r="9" stroke="#f43f5e" strokeWidth="7" fill="none" />
    <path d="M 48 60 A 14 14 0 0 1 76 60" stroke="#f43f5e" strokeWidth="7" fill="none" />
    <text x="50" y="88" fill="currentColor" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="18" textAnchor="middle" letterSpacing="0.5">Roosted</text>
  </svg>
);

// Custom block for the Schedule box
const ScheduleIcon = () => (
  <div className="w-full h-full relative flex items-center justify-center overflow-hidden px-1">
    <RoostedIcon className="w-10 h-10 md:w-14 md:h-14 text-[#f4f4f5]" />
  </div>
);

// Custom animated icon component for the Interview box
const HireflixIcon = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <mask id="hireflix-mask">
      <rect width="100" height="100" fill="white" />
      <circle cx="50" cy="36" r="10" fill="black" />
      <circle cx="50" cy="74" r="18" fill="black" />
    </mask>
    <rect x="14" y="10" width="72" height="52" rx="14" fill="currentColor" mask="url(#hireflix-mask)" />
    <circle cx="28" cy="24" r="5" fill="#f43f5e" />
    <text x="50" y="88" fill="currentColor" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="18" textAnchor="middle" textTransform="none" letterSpacing="0.5">Hireflix</text>
  </svg>
);

const JobmaIcon = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="38" r="22" fill="none" stroke="#8dc63f" strokeWidth="4.5" />
    <polygon points="45,28 62,38 45,48" fill="none" stroke="#8dc63f" strokeWidth="4" strokeLinejoin="round" />
    <text x="50" y="88" fill="currentColor" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="20" textAnchor="middle" letterSpacing="1">JOBMA</text>
  </svg>
);

const MetaviewIcon = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(50, 14) rotate(45)">
      <rect x="0" y="0" width="13" height="13" rx="2" fill="#4B90E2" />
      <rect x="16" y="0" width="13" height="13" rx="2" fill="currentColor" />
      <rect x="0" y="16" width="13" height="13" rx="2" fill="currentColor" />
      <rect x="32" y="0" width="13" height="13" rx="2" fill="currentColor" />
      <rect x="16" y="16" width="13" height="13" rx="2" fill="currentColor" />
      <rect x="0" y="32" width="13" height="13" rx="2" fill="currentColor" />
    </g>
    <text x="50" y="90" fill="currentColor" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="18" textAnchor="middle" letterSpacing="0.5">Metaview</text>
  </svg>
);

const PinIcon = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <mask id="pin-mask">
      <rect width="100" height="100" fill="white" />
      <circle cx="50" cy="38" r="14" fill="black" />
    </mask>
    <circle cx="50" cy="38" r="23" fill="currentColor" mask="url(#pin-mask)" />
    <polygon points="27,38 27,65 44,58" fill="currentColor" mask="url(#pin-mask)" />
    
    <path d="M 37 42 V 37 A 4.5 4.5 0 0 1 46 37 V 42 Z" fill="currentColor" />
    <path d="M 54 42 V 37 A 4.5 4.5 0 0 1 63 37 V 42 Z" fill="currentColor" />
    
    <text x="50" y="88" fill="currentColor" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="20" textAnchor="middle" letterSpacing="0.5">Pin</text>
  </svg>
);

const AsendiaIcon = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M 26 48 C 26 15, 50 20, 50 40 C 50 60, 74 65, 74 32" fill="none" stroke="currentColor" strokeWidth="15" strokeLinecap="round" />
    <text x="50" y="86" fill="currentColor" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="16" textAnchor="middle" letterSpacing="0">Asendia AI</text>
  </svg>
);

const ArrangeIcon = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <polygon points="50,15 75,60 45,60 25,45" fill="#61A171" stroke="#61A171" strokeWidth="2" strokeLinejoin="round" />
    <polygon points="25,45 45,60 48,45" fill="#EAEAEA" stroke="#EAEAEA" strokeWidth="1" strokeLinejoin="round" />
    <text x="50" y="88" fill="currentColor" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="18" textAnchor="middle" letterSpacing="0.5">Arrange</text>
  </svg>
);

const GlassdoorIcon = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="25" y="12" width="50" height="50" rx="12" fill="#0CAA41" />
    <text x="50" y="49" fill="white" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="32" textAnchor="middle" letterSpacing="-1">gd</text>
    <text x="50" y="88" fill="currentColor" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="18" textAnchor="middle" letterSpacing="0.5">Glassdoor</text>
  </svg>
);

const interviewPlatforms = [
  { id: "arrange", render: <ArrangeIcon className="w-10 h-10 md:w-14 md:h-14 text-[#f4f4f5]" /> },
  { id: "asendia", render: <AsendiaIcon className="w-10 h-10 md:w-14 md:h-14 text-[#f4f4f5]" /> },
  { id: "glassdoor", render: <GlassdoorIcon className="w-10 h-10 md:w-14 md:h-14 text-[#f4f4f5]" /> },
  { id: "hireflix", render: <HireflixIcon className="w-10 h-10 md:w-14 md:h-14 text-[#f4f4f5]" /> },
  { id: "jobma", render: <JobmaIcon className="w-10 h-10 md:w-14 md:h-14 text-[#f4f4f5]" /> },
  { id: "metaview", render: <MetaviewIcon className="w-10 h-10 md:w-14 md:h-14 text-[#f4f4f5]" /> },
  { id: "pin", render: <PinIcon className="w-10 h-10 md:w-14 md:h-14 text-[#f4f4f5]" /> },
  { id: "veton", render: <VetonIcon className="w-10 h-10 md:w-14 md:h-14 text-[#f4f4f5]" /> }
];

const AnimatedInterviewIcon = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % interviewPlatforms.length);
    }, 2000); // Cycles every 2 seconds
    return () => clearInterval(timer);
  }, []);

  const activePlatform = interviewPlatforms[index];

  return (
    <div className="w-full h-full relative flex items-center justify-center overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={activePlatform.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4 }}
          className="absolute flex items-center justify-center text-[7px] sm:text-[8px] md:text-[9px] font-bold text-[#f4f4f5] tracking-widest text-center uppercase whitespace-nowrap"
        >
          {activePlatform.render}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const allNodes = {
  source: { 
    id: "source", 
    label: "SOURCE", 
    icon: <AnimatedSourceIcon /> 
  },
  screening: { 
    id: "screening", 
    label: "SCREENING", 
    icon: <ScreeningIcon /> 
  },
  schedule: { 
    id: "schedule", 
    label: "SCHEDULE", 
    icon: <ScheduleIcon /> 
  },
  interview: { 
    id: "interview", 
    label: "INTERVIEW", 
    icon: <AnimatedInterviewIcon /> 
  },
  offer: { id: "offer", label: "OFFER", icon: <CheckCircle2 size={22} strokeWidth={1.5} /> }
};

// Robust sequence framework with explicit, highly readable context
const sequences = [
  {
    message: "Standard end-to-end workflow.",
    nodes: ["source", "screening", "schedule", "interview", "offer"]
  },
  {
    message: "Skip screening for internal transfers.",
    nodes: ["source", "schedule", "interview", "offer"]
  },
  {
    message: "Re-order operations for executive roles.",
    nodes: ["source", "screening", "interview", "schedule", "offer"]
  }
];

export default function HowItWorks() {
  const [phase, setPhase] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Extend timer so viewers can read the label and watch the physics resolve
  useEffect(() => {
    if (!mounted) return;
    const timer = setInterval(() => {
      setPhase((prev) => (prev + 1) % sequences.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [mounted]);

  // Safeguard against Next.js HMR preserving a phase state index that no longer exists in the array
  const activeSequence = sequences[phase] || sequences[0];

  if (!mounted) {
    return <section className="w-full bg-transparent py-16 md:py-24 min-h-[500px]"></section>;
  }

  return (
    <section className="w-full bg-transparent py-16 md:py-24 px-6 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Header Content */}
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6 mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-[64px] font-serif text-[#f4f4f5] leading-[1.1] tracking-tight"
        >
          We don't ask you to change how you hire.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl"
        >
          Recruiter AI sits between the platforms you already use and runs the parts you've been doing by hand.
        </motion.p>
      </div>



      {/* Node Flow Diagram area */}
      <div className="relative w-full max-w-5xl mx-auto min-h-[220px] flex items-center justify-center">
        
        {/* The Animated Grid Nodes */}
        <div className="flex flex-col md:flex-row items-center justify-center z-10 w-full px-2 relative">
          
          <AnimatePresence mode="popLayout">
            {activeSequence.nodes.flatMap((nodeId, index) => {
              const node = allNodes[nodeId];
              const isLast = index === activeSequence.nodes.length - 1;
              const nextNodeId = !isLast ? activeSequence.nodes[index + 1] : null;
              
              const nodeEl = (
                <motion.div
                  layout
                  layoutId={nodeId} // crucial for structural reordering recognition
                  variants={nodeVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 90, damping: 16 }}
                  key={node.id}
                  className="flex flex-col items-center gap-4"
                >
                  <div className="w-14 h-14 md:w-20 md:h-20 relative flex items-center justify-center transition-colors duration-500 bg-white/10 backdrop-blur-xl border border-white/30 shadow-[0_0_25px_rgba(255,255,255,0.2),inset_0_0_15px_rgba(255,255,255,0.1)] text-white z-10 rounded-md">
                    {/* Tiny pulsing dot to visually indicate the active processing step */}
                    {nodeId === "screening" && (
                      <motion.div 
                        className="absolute -top-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-blue-500"
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      />
                    )}

                    {node.icon}
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <span className="text-[9px] md:text-[11px] font-bold text-[#888888] tracking-[0.2em] uppercase whitespace-nowrap mt-1">
                      {node.label}
                    </span>
                  </div>
                </motion.div>
              );

              const arrowEl = !isLast ? (
                <motion.div
                  layout
                  key={`arrow-${nodeId}-${nextNodeId}`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center justify-center md:-translate-y-[14px]" 
                >
                  {/* Desktop Edge-Touching Dotted Arrow */}
                  <div className="hidden md:flex w-8 lg:w-16 h-px items-center relative text-gray-500">
                    <svg width="100%" height="2" className="overflow-visible absolute left-0 right-0">
                      <line x1="0" y1="1" x2="100%" y2="1" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                    </svg>
                    <svg className="w-[10px] h-[10px] absolute right-0 fill-current" viewBox="0 0 10 10">
                      <polygon points="0,0 10,5 0,10" />
                    </svg>
                  </div>
                  
                  {/* Mobile Edge-Touching Dotted Arrow */}
                  <div className="flex md:hidden h-10 sm:h-12 w-px justify-center relative text-gray-500">
                    <svg height="100%" width="2" className="overflow-visible absolute top-0 bottom-0">
                      <line x1="1" y1="0" x2="1" y2="100%" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                    </svg>
                    <svg className="w-[10px] h-[10px] absolute bottom-0 -translate-x-[5px] fill-current" viewBox="0 0 10 10">
                      <polygon points="0,0 10,0 5,10" />
                    </svg>
                  </div>
                </motion.div>
              ) : null;

              return isLast ? [nodeEl] : [nodeEl, arrowEl];
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Footer text */}
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-12 text-[#666666] font-medium text-[13px] md:text-sm tracking-wide"
      >
        Works for any role. Any industry. Connected in minutes.
      </motion.p>
      
    </section>
  );
}
