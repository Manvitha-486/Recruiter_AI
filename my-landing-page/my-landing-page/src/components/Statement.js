"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Statement() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 40%"]
  });

  // Map scroll progress to text color from a very dark grey to pure white sequentially
  const color1 = useTransform(scrollYProgress, [0, 0.25], ["#27272A", "#FFFFFF"]);
  const color2 = useTransform(scrollYProgress, [0.25, 0.5], ["#27272A", "#FFFFFF"]);
  const color3 = useTransform(scrollYProgress, [0.5, 0.75], ["#27272A", "#FFFFFF"]);

  // Map scroll progress to a blur effect for a cinematic "glowing" focus-in
  const filter1 = useTransform(scrollYProgress, [0, 0.25], ["blur(3px)", "blur(0px)"]);
  const filter2 = useTransform(scrollYProgress, [0.25, 0.5], ["blur(3px)", "blur(0px)"]);
  const filter3 = useTransform(scrollYProgress, [0.5, 0.75], ["blur(3px)", "blur(0px)"]);

  return (
    <div 
      ref={containerRef} 
      className="w-full max-w-5xl mx-auto py-24 md:py-32 px-6 md:px-12 z-10 flex flex-col justify-center items-center min-h-[50vh]"
    >
      {/* Brand Eyebrow */}
      <span className="text-[#B197FC] uppercase tracking-[0.2em] text-sm md:text-md font-bold mb-12 opacity-80">
        The Reality
      </span>

      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.3] md:leading-[1.4] tracking-tight flex flex-col gap-10 md:gap-14 w-full text-center max-w-4xl mx-auto">
        
        <motion.span style={{ color: color1, filter: filter1 }} className="transition-all duration-300">
          What if the role stayed open for 3 months not because no one was right but because the right person never saw it?
        </motion.span>
        
        <motion.span style={{ color: color2, filter: filter2 }} className="transition-all duration-300">
          What if 300 resumes sorted themselves before your coffee?
        </motion.span>
        
        <motion.span style={{ color: color3, filter: filter3 }} className="transition-all duration-300">
          What if the perfect candidate replied in seconds, instead of weeks?
        </motion.span>

      </h2>
    </div>
  );
}
