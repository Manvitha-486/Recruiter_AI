"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Design your workflow",
    description: "Define the constraints, key attributes, and milestones for your talent acquisition pipeline with our intuitive interface."
  },
  {
    title: "Agents go to work",
    description: "Our specialized AI agents scan millions of profiles and engage candidates across multiple platforms simultaneously."
  },
  {
    title: "You get a shortlist, not a pile",
    description: "RecruiterAI filters out the noise, presenting only the top 3% of candidates who perfectly match your requirements."
  },
  {
    title: "Replicate for every new role",
    description: "Scale your hiring velocity with reusable workflow templates that learn and improve with every hire."
  }
];

function TimelineNode({ step, index, totalSteps, scrollYProgress }) {
  // Calculate individual thresholds for each step node to light up
  const start = index * 0.33 - 0.1;
  const end = index * 0.33 + 0.1;

  // Box Style Transformations
  const boxBg = useTransform(scrollYProgress, [start, end], ["#171717", "rgba(208, 188, 255, 0.1)"]);
  const boxBorder = useTransform(scrollYProgress, [start, end], ["#333333", "rgba(208, 188, 255, 0.8)"]);
  const boxShadow = useTransform(scrollYProgress, [start, end], ["0px 0px 0px rgba(0,0,0,0)", "0px 0px 20px rgba(208, 188, 255, 0.4)"]);
  
  // Text Opacity Transformations
  const titleOpacity = useTransform(scrollYProgress, [start, end], [0.6, 1]);
  const descOpacity = useTransform(scrollYProgress, [start, end], [0.3, 0.8]);
  
  // Timeline Line Segment Transformations
  const lineStart = index * 0.33;
  const lineEnd = (index + 1) * 0.33;
  const segmentHeight = useTransform(scrollYProgress, [lineStart, lineEnd], ["0%", "100%"]);

  return (
    <div className="flex items-start gap-6 relative z-10 w-full">
      
      {/* Connecting Line Segment (hidden for the last item) */}
      {index < totalSteps - 1 && (
        <div className="absolute left-[23px] top-[48px] w-[2px] bg-white/10" style={{ bottom: "-56px" }}>
          <motion.div 
            className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[#A5D8FF] to-[#D0BCFF] origin-top"
            style={{ height: segmentHeight }}
          />
        </div>
      )}

      {/* Step Node Box */}
      <motion.div 
        className="w-12 h-12 rounded-xl border flex items-center justify-center text-lg font-bold shrink-0 text-white transition-colors duration-300"
        style={{ 
          backgroundColor: boxBg, 
          borderColor: boxBorder, 
          boxShadow: boxShadow
        }}
      >
        {index + 1}
      </motion.div>
      
      {/* Text Content */}
      <div className="flex flex-col pt-2 pb-6">
        <motion.h3 
          className="text-xl md:text-2xl font-bold text-gray-100 tracking-tight mb-2"
          style={{ opacity: titleOpacity }}
        >
          {step.title}
        </motion.h3>
        <motion.p 
          className="text-[15px] leading-relaxed text-gray-400"
          style={{ opacity: descOpacity }}
        >
          {step.description}
        </motion.p>
      </div>
      
    </div>
  );
}

export default function HowItWorks() {
  const containerRef = useRef(null);
  
  // Track scroll position of the entire container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 60%", "end 60%"]
  });

  return (
    <section className="w-full max-w-7xl mx-auto py-8 px-6 relative z-10 flex flex-col md:flex-row items-stretch justify-between gap-16 lg:gap-24">
      
      {/* Left Side: Timeline */}
      <div className="flex flex-col w-full md:w-1/2 justify-center max-w-lg">
        
        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tight leading-[1.1]"
        >
          How Our <span className="text-[#D0BCFF]">RecruiterAI</span> Works
        </motion.h2>

        {/* Timeline Container */}
        <div 
          ref={containerRef} 
          className="relative w-full flex flex-col gap-14"
        >
          {steps.map((step, index) => (
            <TimelineNode 
              key={index} 
              step={step} 
              index={index} 
              totalSteps={steps.length} 
              scrollYProgress={scrollYProgress} 
            />
          ))}
        </div>
      </div>

      {/* Right Side: Mockup Illustration */}
      <div className="hidden md:flex flex-col w-full md:w-1/2 justify-center pt-24 lg:pt-0">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full max-w-xl aspect-[4/3] bg-[#111111] rounded-[24px] border border-gray-800 shadow-2xl relative p-6 flex flex-col gap-6 overflow-hidden"
        >
          {/* Top Bar Fake UI */}
          <div className="flex justify-end gap-2 absolute top-5 right-5">
             <div className="w-8 h-2 rounded-full bg-blue-900/40" />
             <div className="w-4 h-2 rounded-full bg-gray-800" />
          </div>

          {/* Dark inner panels */}
          <div className="flex-1 mt-6 flex gap-4">
            
            {/* Left large panel */}
            <div className="flex-1 bg-[#1A1A1A] rounded-xl flex flex-col p-4 gap-4 border border-white/5">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-lg bg-blue-900/30 flex items-center justify-center">
                    <div className="w-5 h-5 rounded-sm border-2 border-blue-400/50" />
                 </div>
                 <div className="flex flex-col gap-2">
                   <div className="w-24 h-3 rounded-full bg-gray-700/50" />
                   <div className="w-16 h-2 rounded-full bg-gray-800" />
                 </div>
               </div>
               
               <div className="flex-1 rounded-lg border border-dashed border-gray-700/30 relative flex flex-col justify-end p-3 gap-2">
                  <div className="w-full h-8 bg-gray-800/20 rounded-md" />
                  <div className="w-full h-8 bg-gray-800/20 rounded-md" />
                  <div className="w-full h-8 bg-gray-800/20 rounded-md" />
               </div>
            </div>

            {/* Right side stacked panels */}
            <div className="w-1/3 flex flex-col gap-4">
              
              <div className="flex-1 bg-blue-950/40 rounded-xl border border-blue-900/20 flex items-end justify-center pb-4 p-2 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-[#3B82F6]/20 rounded-sm" />
                </div>
                <div className="w-16 h-2 rounded-full bg-[#A5D8FF]/30" />
              </div>

              <div className="flex-1 bg-[#1A1A1A] rounded-xl border border-white/5 flex items-center justify-center p-3 relative">
                 <div className="w-full aspect-square border border-dashed border-gray-700 rounded-lg opacity-50 flex items-center justify-center">
                    <div className="w-1/2 h-4 rounded-full bg-gray-800/50" />
                 </div>
              </div>

            </div>
          </div>

          {/* Notification popup overlay */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute bottom-6 right-6 px-4 py-3 bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex items-center gap-3 border border-gray-100"
          >
            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
              <CheckCircle2 size={14} className="text-green-600" />
            </div>
            <span className="text-xs font-semibold text-gray-800 whitespace-nowrap hidden sm:block">
              Processing with Recruiter Mag.
            </span>
          </motion.div>

        </motion.div>
      </div>

    </section>
  );
}
