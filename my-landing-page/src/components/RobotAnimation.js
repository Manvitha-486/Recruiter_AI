"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, UserX, CalendarX, FileWarning, Clock, ShieldAlert, CheckCircle2, ArrowRight } from "lucide-react";

const tasks = [
  {
    id: 1,
    painPoint: "300 unread resumes",
    painIcon: <FileText size={16} />,
    solution: "Top 10 shortlisted instantly",
    solutionIcon: <CheckCircle2 size={16} className="text-green-500" />,
    color: "from-rose-500",
  },
  {
    id: 2,
    painPoint: "Interview not scheduled",
    painIcon: <CalendarX size={16} />,
    solution: "Auto-scheduled",
    solutionIcon: <CheckCircle2 size={16} className="text-green-500" />,
    color: "from-orange-500",
  },
  {
    id: 3,
    painPoint: "Candidate ghosted",
    painIcon: <UserX size={16} />,
    solution: "AI followed up - replied!",
    solutionIcon: <CheckCircle2 size={16} className="text-green-500" />,
    color: "from-amber-500",
  },
  {
    id: 4,
    painPoint: "Generic JD failing",
    painIcon: <FileWarning size={16} />,
    solution: "89% more applications",
    solutionIcon: <CheckCircle2 size={16} className="text-green-500" />,
    color: "from-yellow-500",
  },
  {
    id: 5,
    painPoint: "Verification: 5 days",
    painIcon: <ShieldAlert size={16} />,
    solution: "Done in 1 day - 80% faster",
    solutionIcon: <CheckCircle2 size={16} className="text-green-500" />,
    color: "from-red-500",
  },
  {
    id: 6,
    painPoint: "No time for people",
    painIcon: <Clock size={16} />,
    solution: "Focus fully restored",
    solutionIcon: <CheckCircle2 size={16} className="text-green-500" />,
    color: "from-pink-500",
  }
];

// Central SVG Robot component mapping step 0-6 to expressions
const DynamicRobot = ({ step }) => {
  const isHappy = step > 3; // Shift to happy after halfway
  
  return (
    <motion.div 
      className="relative w-48 h-56 flex flex-col items-center justify-center -mt-8"
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
    >
      {/* Robot Antenna */}
      <div className="w-1.5 h-6 bg-[#60A5FA] rounded-t-full mb-1" />
      <div className="w-4 h-4 rounded-full bg-[#60A5FA] absolute top-[-4px]" />
      
      {/* Robot Head */}
      <div className="w-32 h-28 bg-[#7DD3FC] rounded-[40px] shadow-[inset_0_-8px_15px_rgba(0,0,0,0.2)] flex items-center justify-center overflow-hidden z-10 border-b-4 border-[#38BDF8]/50">
        
        {/* Face Visor */}
        <div className="w-24 h-16 bg-[#000000] rounded-[24px] shadow-[inset_0_4px_10px_rgba(255,255,255,0.2)] flex items-center justify-center gap-3 relative overflow-hidden">
          {/* Glass reflection */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-[24px]" />
          
          {/* Left Eye */}
          <motion.div 
            className="w-6 h-4 bg-cyan-400 rounded-full shadow-[0_0_12px_#22d3ee]"
            animate={isHappy ? { borderRadius: "100% 100% 20% 20%", scaleY: 1.2 } : { borderRadius: "60% 60% 80% 80%", scaleY: 0.6, rotate: 10 }}
            transition={{ type: "spring", stiffness: 100 }}
          />
          {/* Right Eye */}
          <motion.div 
            className="w-6 h-4 bg-cyan-400 rounded-full shadow-[0_0_12px_#22d3ee]"
            animate={isHappy ? { borderRadius: "100% 100% 20% 20%", scaleY: 1.2 } : { borderRadius: "60% 60% 80% 80%", scaleY: 0.6, rotate: -10 }}
            transition={{ type: "spring", stiffness: 100 }}
          />
        </div>
      </div>
      
      {/* Neck */}
      <div className="w-12 h-6 bg-[#38BDF8] shadow-[inset_0_4px_5px_rgba(0,0,0,0.3)] z-0" />
      
      {/* Robot Body */}
      <div className="w-24 h-24 bg-[#7DD3FC] rounded-b-[40px] rounded-t-[20px] shadow-[inset_0_-10px_15px_rgba(0,0,0,0.2)] z-10 -mt-2" />

      {/* Robot Arms */}
      <motion.div 
        className="absolute left-6 bottom-4 w-6 h-16 bg-[#60A5FA] rounded-full z-0 origin-top"
        animate={{ rotate: isHappy ? -20 : -10 }}
      />
      <motion.div 
        className="absolute right-6 bottom-4 w-6 h-16 bg-[#60A5FA] rounded-full z-0 origin-top"
        animate={{ rotate: isHappy ? 20 : 10 }}
      />
    </motion.div>
  );
};

export default function RobotAnimation() {
  const [step, setStep] = useState(0);

  // Auto-advance loop
  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => {
        if (prev >= 6) {
          // Pause at end for a bit, then loop back to 0
          return 0; // The prompt calls for a looped animation
        }
        return prev + 1;
      });
    }, 2800); // 2.8s per step
    return () => clearInterval(timer);
  }, []);

  const progressPercentage = (step / tasks.length) * 100;

  return (
    <motion.section 
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-7xl mx-auto py-8 px-6 md:px-12 relative z-10 border-t border-white/10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        
        {/* Left Side: Robot & Floating Nodes */}
        <div className="relative w-full h-[500px] flex items-center justify-center">
          
          {/* Subtle background glow pulsing with step */}
          <motion.div 
            className="absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-20 transition-colors duration-1000 z-0"
            animate={{ backgroundColor: step === 0 ? "#f43f5e" : step === 6 ? "#22c55e" : "#3b82f6" }}
          />

          <DynamicRobot step={step} />

          {/* Floating Nodes Orbiting the Robot */}
          {tasks.map((task, index) => {
            const isSolved = step >= task.id;
            
            // Positioning math for circular/semi-circular layout
            // index 0,1,2 on left, 3,4,5 on right.
            const isLeft = index < 3;
            const yPositions = ["15%", "50%", "85%"]; // corresponding to top, middle, bottom
            const yPos = yPositions[index % 3];
            
            return (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, y: isSolved ? -5 : 0 }}
                transition={{ type: "spring", stiffness: 50, damping: 10 }}
                className={`absolute flex items-center gap-3 px-4 py-2.5 rounded-full border shadow-lg backdrop-blur-md transition-all duration-500 ${
                  isSolved 
                    ? "bg-green-500/10 border-green-500/50 shadow-green-500/20" 
                    : "bg-[#1E1E1E]/80 border-gray-700 shadow-black/50"
                }`}
                style={{
                  top: `calc(${yPos} - 20px)`,
                  [isLeft ? "right" : "left"]: "60%",
                  minWidth: "max-content"
                }}
              >
                {/* Icon Circle */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  isSolved ? "bg-green-500/20 text-green-400" : "bg-white/5 text-gray-400"
                }`}>
                  {isSolved ? task.solutionIcon : task.painIcon}
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col items-start justify-center">
                  <span className={`text-[13px] md:text-sm font-medium transition-colors duration-300 ${isSolved ? "text-gray-400 line-through" : "text-gray-200"}`}>
                    {task.painPoint}
                  </span>
                  
                  <AnimatePresence>
                    {isSolved && (
                      <motion.span
                        initial={{ opacity: 0, height: 0, y: -5 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-xs md:text-sm font-bold text-green-400 mt-0.5 whitespace-nowrap"
                      >
                        {task.solution}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right Side: Fixed Heading */}
        <div className="flex flex-col justify-center max-w-lg mx-auto lg:ml-auto w-full px-4 lg:px-12">
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl md:text-5xl font-medium text-gray-200 leading-tight">
              Hiring was never supposed to feel <span className="text-[#D0BCFF]">this exhausting.</span>
            </h2>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
