"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// Replacing standard icons with high-quality emojis ("doodles") to match cosmos.so style
const metrics = [
  {
    number: "73%",
    title: "COMPLETION RATE",
    description: "Candidates effortlessly complete our AI-driven process without friction or drop-offs.",
    emoji: "🎯",
  },
  {
    number: "66%",
    title: "FEWER BAD HIRES",
    description: "Advanced insights verify true capabilities, dramatically reducing costly turnover.",
    emoji: "🛡️",
  },
  {
    number: "80%",
    title: "FASTER VERIFICATION",
    description: "Automated checks replace days of manual reference gathering with instant approvals.",
    emoji: "⚡",
  },
  {
    number: "33%",
    title: "FASTER HIRING",
    description: "Close top talent before competitors even schedule their first screening call.",
    emoji: "🚀",
  },
  {
    number: "89%",
    title: "HIGHER APPLICATION RATES",
    description: "A candidate experience so smooth they actually want to finish submitting their profile.",
    emoji: "📈",
  },
  {
    number: "10X",
    title: "MORE RESUMES PROCESSED",
    description: "Scale your recruiting pipeline effortlessly without adding headcount to your HR team.",
    emoji: "💪",
  }
];

export default function MetricsBento() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "end 90%"]
  });

  const springProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 15,
    mass: 1,
    restDelta: 0.001
  });

  return (
    <section className="w-full max-w-7xl mx-auto py-8 px-6 relative z-10 flex flex-col items-center overflow-x-hidden">
      
      <motion.h2 
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, margin: "0px", amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-bold text-white mb-20 tracking-tight text-center"
      >
        Numbers worth knowing
      </motion.h2>

      {/* Grid Container */}
      <div 
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full auto-rows-[380px] p-4"
      >
        {metrics.map((metric, index) => {
          const isLeftColumn = index % 2 === 0;
          const row = Math.floor(index / 2);
          const start = row * 0.2;
          const end = start + 0.4;

          const xOffset = useTransform(springProgress, [start, end], [isLeftColumn ? -600 : 600, 0]);
          const yOffset = useTransform(springProgress, [start, end], [100, 0]);
          const rotateOffset = useTransform(springProgress, [start, end], [isLeftColumn ? -15 : 15, 0]);
          const scaleOffset = useTransform(springProgress, [start, end], [0.8, 1]);
          const opacityOffset = useTransform(scrollYProgress, [start, start + 0.1], [0, 1]);

          return (
            <motion.div
              key={index}
              style={{
                x: xOffset,
                y: yOffset,
                rotate: rotateOffset,
                scale: scaleOffset,
                opacity: opacityOffset,
                boxShadow: "inset 0 0 40px rgba(0,0,0,0.8)"
              }}
              className="relative bg-[#0F0F0F] rounded-[2rem] border-2 border-[#D0BCFF]/30 group-hover:border-[#B197FC] p-8 flex flex-col justify-between group transition-colors duration-500 overflow-hidden"
            >
              
              {/* Optional glowing gradient inside */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D0BCFF]/0 to-[#D0BCFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Floating Doodle Top Right */}
              <div className="absolute top-8 right-8">
                <div className="h-16 w-16 rounded-full bg-[#1A1A1A] border border-[#222222] group-hover:border-[#D0BCFF]/40 flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.6)] group-hover:shadow-[0_10px_40px_rgba(208,188,255,0.2)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ease-out z-20">
                  <span className="text-3xl filter drop-shadow-[0_0_8px_rgba(255,255,255,0.15)] saturate-[1.2] group-hover:saturate-[1.5] transition-all duration-500">
                    {metric.emoji}
                  </span>
                </div>
              </div>

              {/* Top empty space pushes text to bottom */}
              <div className="flex-1" />

              {/* Text Block: Number, Title, Description */}
              <div className="flex flex-col gap-2 relative z-10">
                <span className="text-7xl lg:text-8xl font-medium text-white tracking-tighter mb-4 drop-shadow-lg">
                  {metric.number}
                </span>
                <h3 className="text-sm md:text-base font-bold text-[#A5D8FF] tracking-widest uppercase mb-1">
                  {metric.title}
                </h3>
                <p className="text-gray-400 text-[15px] leading-relaxed max-w-sm line-clamp-2">
                  {metric.description}
                </p>
              </div>

            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
