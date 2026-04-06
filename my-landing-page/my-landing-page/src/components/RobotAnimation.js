"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

export default function RobotAnimation() {
  const containerRef = useRef(null);
  const peelRef = useRef(null);

  // Track the peeling animation ONLY after the white background hits the top
  const { scrollYProgress } = useScroll({
    target: peelRef,
    offset: ["start start", "end end"]
  });

  // Smooth out the scroll timeline slightly
  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 100,
    damping: 20
  });

  // Track the first 100vh of scroll for the "expansion" effect as it peeks into the hero
  const { scrollYProgress: expandProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"]
  });

  const smoothExpand = useSpring(expandProgress, {
    mass: 0.1,
    stiffness: 100,
    damping: 20
  });

  // As expandProgress goes from 0.4 (when user is at top of page) to 1 (when scrolled down),
  // the wrapper scales up and moves into final position.
  const wrapperScale = useTransform(smoothExpand, [0.4, 1], [0.85, 1]);
  const wrapperY = useTransform(smoothExpand, [0.4, 1], ["5vh", "0vh"]);

  // Phase 1 (Front/Red) peels off from 0.0 to 0.33
  const card1Y = useTransform(smoothProgress, [0, 0.33], ["0vh", "-100vh"]);
  const card1Opacity = useTransform(smoothProgress, [0.15, 0.33], [1, 0]);

  // Phase 2 (Middle/Green) peels off from 0.33 to 0.66
  const card2Y = useTransform(smoothProgress, [0.33, 0.66], ["0vh", "-100vh"]);
  const card2Opacity = useTransform(smoothProgress, [0.48, 0.66], [1, 0]);

  // Animated Pipeline on Card 1 (sequenced 4 steps)
  const a1Scale = useTransform(smoothExpand, [0.55, 0.65], [0, 1]);
  const n2Op = useTransform(smoothExpand, [0.65, 0.70], [0, 1]);
  const n2Y = useTransform(smoothExpand, [0.65, 0.70], [20, 0]);

  const a2Scale = useTransform(smoothExpand, [0.70, 0.80], [0, 1]);
  const n3Op = useTransform(smoothExpand, [0.80, 0.85], [0, 1]);
  const n3Y = useTransform(smoothExpand, [0.80, 0.85], [20, 0]);

  const a3Scale = useTransform(smoothExpand, [0.85, 0.95], [0, 1]);
  const n4Op = useTransform(smoothExpand, [0.95, 1.0], [0, 1]);
  const n4Y = useTransform(smoothExpand, [0.95, 1.0], [20, 0]);

  return (
    <section 
      ref={containerRef}
      className="w-full relative h-[300vh] -mt-[40vh]"
    >
      {/* Background that only starts after the 40vh peeking area */}
      <div className="absolute top-[40vh] left-0 w-full h-[calc(100%-40vh)] bg-black z-0" />
      
      {/* Reference target for peeling animation so it starts perfectly when section 2 is fully visible */}
      <div ref={peelRef} className="absolute top-[40vh] w-full h-[calc(100%-40vh)] pointer-events-none" />

      {/* Sticky container that locks into view */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden z-10 pointer-events-none">
        
        

        {/* Central wrapper for the stacked cards */}
        <motion.div 
          style={{ scale: wrapperScale, y: wrapperY }}
          className="relative w-full max-w-4xl aspect-[4/3] md:aspect-video mx-auto -mt-16 px-4 md:px-0 pointer-events-auto origin-bottom"
        >
          
          {/* Card 3: Back/White (Phase 3) */}
          <motion.div 
            className="absolute left-0 right-0 mx-auto w-full h-full bg-white rounded-2xl shadow-xl p-8 md:p-12 text-gray-900 border border-gray-200"
          >
            <h3 className="text-2xl md:text-4xl font-bold mb-4">Phase 3: Seamless Integration</h3>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl">This is the final backing foundation. The workflow is complete.</p>
          </motion.div>

          {/* Card 2: Middle/Green border (Phase 2) */}
          <motion.div 
            style={{ y: card2Y, opacity: card2Opacity }}
            className="absolute left-0 right-0 mx-auto top-[24px] w-[96%] md:w-[94%] h-full bg-white border-2 border-green-500 rounded-2xl shadow-xl p-8 md:p-12 text-gray-900 overflow-hidden"
          >
            <h3 className="text-2xl md:text-4xl font-bold mb-4">Phase 2: Intelligent Screening</h3>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl">This card was hidden under the Red card. Now that the red card peeled away, you can read this.</p>
          </motion.div>

          {/* Card 1: Front/Red border (Phase 1) */}
          <motion.div 
            style={{ y: card1Y, opacity: card1Opacity }}
            className="absolute left-0 right-0 mx-auto top-[48px] w-[92%] md:w-[88%] h-full bg-white border border-gray-200 rounded-2xl shadow-xl p-8 md:p-12 text-gray-900 overflow-hidden flex flex-col"
          >
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Phase 1: Automated Sourcing</h3>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl">
              RecruiterAI instantly scans inbound applications, matches profiles, and triggers the next steps without human intervention.
            </p>

            {/* Pipeline Architecture inside Card 1 */}
            <div className="mt-8 lg:mt-10 flex-1 flex flex-col justify-center overflow-y-auto custom-scrollbar pr-2 mb-2">
              <div className="flex flex-col lg:flex-row items-center justify-start lg:justify-center w-full min-h-max space-y-2 lg:space-y-0">
                
                {/* Node 1: Application Review */}
                <motion.div 
                  className="bg-white border border-gray-100 rounded-xl p-4 md:p-5 text-center w-full max-w-[240px] lg:w-48 xl:w-56 shadow-md relative z-10 flex-shrink-0"
                >
                  <div className="w-8 h-8 mx-auto bg-blue-50 text-blue-600 font-bold rounded-full flex items-center justify-center mb-2 text-sm">1</div>
                  <p className="font-bold text-gray-900 text-sm md:text-base leading-tight">Review</p>
                  <p className="text-xs md:text-sm text-gray-500 mt-1">Resume matching</p>
                </motion.div>

                {/* Arrow 1 */}
                <motion.div style={{ scaleX: a1Scale }} className="hidden lg:flex items-center origin-left w-6 xl:w-10">
                  <div className="h-[2px] w-full border-t-2 border-dashed border-[#3B82F6]" />
                  <ArrowRight className="w-4 h-4 text-[#3B82F6] -ml-2 shrink-0" />
                </motion.div>
                <motion.div style={{ scaleY: a1Scale }} className="flex lg:hidden flex-col items-center origin-top h-6">
                  <div className="w-[2px] h-full border-l-2 border-dashed border-[#3B82F6]" />
                  <ArrowDown className="w-4 h-4 text-[#3B82F6] -mt-2 shrink-0" />
                </motion.div>

                {/* Node 2: Phone Screen */}
                <motion.div 
                  style={{ opacity: n2Op, y: n2Y }}
                  className="bg-white border border-gray-100 rounded-xl p-4 md:p-5 text-center w-full max-w-[240px] lg:w-48 xl:w-56 shadow-md relative z-10 flex-shrink-0"
                >
                  <div className="w-8 h-8 mx-auto bg-purple-50 text-purple-600 font-bold rounded-full flex items-center justify-center mb-2 text-sm">2</div>
                  <p className="font-bold text-gray-900 text-sm md:text-base leading-tight">Screening</p>
                  <p className="text-xs md:text-sm text-gray-500 mt-1">Voice interview</p>
                </motion.div>

                {/* Arrow 2 */}
                <motion.div style={{ scaleX: a2Scale }} className="hidden lg:flex items-center origin-left w-6 xl:w-10">
                  <div className="h-[2px] w-full border-t-2 border-dashed border-[#3B82F6]" />
                  <ArrowRight className="w-4 h-4 text-[#3B82F6] -ml-2 shrink-0" />
                </motion.div>
                <motion.div style={{ scaleY: a2Scale }} className="flex lg:hidden flex-col items-center origin-top h-6">
                  <div className="w-[2px] h-full border-l-2 border-dashed border-[#3B82F6]" />
                  <ArrowDown className="w-4 h-4 text-[#3B82F6] -mt-2 shrink-0" />
                </motion.div>

                {/* Node 3: Schedule */}
                <motion.div 
                  style={{ opacity: n3Op, y: n3Y }}
                  className="bg-white border border-gray-100 rounded-xl p-4 md:p-5 text-center w-full max-w-[240px] lg:w-48 xl:w-56 shadow-md relative z-10 flex-shrink-0"
                >
                  <div className="w-8 h-8 mx-auto bg-emerald-50 text-emerald-600 font-bold rounded-full flex items-center justify-center mb-2 text-sm">3</div>
                  <p className="font-bold text-gray-900 text-sm md:text-base leading-tight">Schedule</p>
                  <p className="text-xs md:text-sm text-gray-500 mt-1">Calendar sync</p>
                </motion.div>

                {/* Arrow 3 */}
                <motion.div style={{ scaleX: a3Scale }} className="hidden lg:flex items-center origin-left w-6 xl:w-10">
                  <div className="h-[2px] w-full border-t-2 border-dashed border-[#3B82F6]" />
                  <ArrowRight className="w-4 h-4 text-[#3B82F6] -ml-2 shrink-0" />
                </motion.div>
                <motion.div style={{ scaleY: a3Scale }} className="flex lg:hidden flex-col items-center origin-top h-6">
                  <div className="w-[2px] h-full border-l-2 border-dashed border-[#3B82F6]" />
                  <ArrowDown className="w-4 h-4 text-[#3B82F6] -mt-2 shrink-0" />
                </motion.div>

                {/* Node 4: Interview */}
                <motion.div 
                  style={{ opacity: n4Op, y: n4Y }}
                  className="bg-white border border-gray-100 rounded-xl p-4 md:p-5 text-center w-full max-w-[240px] lg:w-48 xl:w-56 shadow-md relative z-10 flex-shrink-0"
                >
                  <div className="w-8 h-8 mx-auto bg-rose-50 text-rose-600 font-bold rounded-full flex items-center justify-center mb-2 text-sm">4</div>
                  <p className="font-bold text-gray-900 text-sm md:text-base leading-tight">Interview</p>
                  <p className="text-xs md:text-sm text-gray-500 mt-1">Final decision</p>
                </motion.div>

              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
