"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Statement() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const items = [
    { text: "Connect the platforms you already use." },
    { text: "Build your hiring strategy once. Run it across multiple roles." },
    { text: "Never lose a candidate to a missed follow-up." }
  ];

  return (
    <div className="w-full bg-[#FAFAFA] py-24 md:py-32 px-4 md:px-12 z-10 flex flex-col justify-center items-center">
      <div className="w-full max-w-6xl mx-auto flex flex-col relative" onMouseLeave={() => setHoveredIndex(null)}>
        
        {/* Headline */}
        <div className="w-full text-center mb-16 md:mb-24">
          <h2 className="text-[40px] md:text-6xl lg:text-[80px] font-serif font-medium text-gray-900 leading-[1.1]">
            Hiring, Simplified.
          </h2>
        </div>

        {/* Top Border for first item */}
        <div className="w-full h-px bg-gray-200" />

        {items.map((item, i) => (
          <div 
            key={i}
            onMouseEnter={() => setHoveredIndex(i)}
            className="relative w-full py-10 md:py-14 cursor-pointer group"
          >
            {/* Bottom Border for every item */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200 z-0" />

            {/* The Animated Hover Pill Background - slides fluidly between hovered rows */}
            {hoveredIndex === i && (
              <motion.div
                layoutId="statementHoverPill"
                className="absolute inset-x-0 top-1 bottom-1 bg-[#1A1513] rounded-[24px] md:rounded-[32px] z-0"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}

            <div className={`relative z-10 flex items-center justify-center px-4 md:px-10 transition-colors duration-300 ${hoveredIndex === i ? 'text-white' : 'text-gray-400'}`}>
              
              {/* Sentence */}
              <h3 className={`text-base sm:text-xl md:text-[26px] lg:text-[32px] xl:text-[36px] font-medium whitespace-nowrap tracking-tight w-full max-w-full transition-colors duration-300 ${hoveredIndex === i ? 'text-white' : 'text-[#A3A3A3]'}`}>
                {item.text}
              </h3>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
