"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function RobotAnimation() {
  const containerRef = useRef(null);

  // We make the section 300vh so user has to scroll down significantly 
  // to finish the entire stack animation.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth out the scroll timeline slightly
  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 100,
    damping: 20
  });

  // Phase 1 (Front/Red) peels off from 0.0 to 0.33
  const card1Y = useTransform(smoothProgress, [0, 0.33], ["0vh", "-100vh"]);
  const card1Opacity = useTransform(smoothProgress, [0.15, 0.33], [1, 0]);

  // Phase 2 (Middle/Green) peels off from 0.33 to 0.66
  const card2Y = useTransform(smoothProgress, [0.33, 0.66], ["0vh", "-100vh"]);
  const card2Opacity = useTransform(smoothProgress, [0.48, 0.66], [1, 0]);

  // Phase 3 (Back/White) stays in place 

  return (
    <section 
      ref={containerRef}
      className="w-full relative h-[300vh] bg-[#1a1a1a] "
    >
      {/* Sticky container that locks into view */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        

        {/* Central wrapper for the stacked cards */}
        <div className="relative w-full max-w-4xl aspect-[4/3] md:aspect-video mx-auto -mt-10 px-4 md:px-0">
          
          {/* Card 3: Back/White (Phase 3) */}
          <motion.div 
            className="absolute left-0 right-0 mx-auto w-full h-full bg-white rounded shadow-2xl p-8 md:p-12 text-black"
          >
            <h3 className="text-2xl md:text-4xl font-bold mb-4">Phase 3: Seamless Integration</h3>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl">This is the final backing foundation. The workflow is complete.</p>
          </motion.div>

          {/* Card 2: Middle/Green border (Phase 2) */}
          <motion.div 
            style={{ y: card2Y, opacity: card2Opacity }}
            className="absolute left-0 right-0 mx-auto top-[24px] w-[96%] md:w-[94%] h-full bg-white border-2 border-green-500 rounded shadow-2xl p-8 md:p-12 text-black overflow-hidden"
          >
            <h3 className="text-2xl md:text-4xl font-bold mb-4">Phase 2: Intelligent Screening</h3>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl">This card was hidden under the Red card. Now that the red card peeled away, you can read this.</p>
          </motion.div>

          {/* Card 1: Front/Red border (Phase 1) */}
          <motion.div 
            style={{ y: card1Y, opacity: card1Opacity }}
            className="absolute left-0 right-0 mx-auto top-[48px] w-[92%] md:w-[88%] h-full bg-white border-2 border-red-500 rounded shadow-2xl p-8 md:p-12 text-black overflow-hidden"
          >
            <h3 className="text-2xl md:text-4xl font-bold mb-4">Phase 1: Automated Sourcing</h3>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl">You see this card first because it is stacked on top. As you scroll, this card will peel off upwards to reveal the next phase underneath.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
