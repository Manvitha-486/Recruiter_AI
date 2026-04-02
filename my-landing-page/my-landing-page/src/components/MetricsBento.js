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

function MetricCard({ metric, index, scrollYProgress, springProgress }) {
  const isLeftColumn = index % 2 === 0;
  const row = Math.floor(index / 2);
  const start = row * 0.2;
  const end = start + 0.4;

  const xOffset = useTransform(springProgress, [start, end], [isLeftColumn ? -600 : 600, 0]);
  const yOffset = useTransform(springProgress, [start, end], [100, 0]);
  const rotateOffset = useTransform(springProgress, [start, end], [isLeftColumn ? -15 : 15, 0]);
  const scaleOffset = useTransform(springProgress, [start, end], [0.8, 1]);
  const opacityOffset = useTransform(scrollYProgress, [start, start + 0.15], [0, 1]);

  return (
    <motion.div
      style={{
        x: xOffset,
        y: yOffset,
        rotate: rotateOffset,
        scale: scaleOffset,
        opacity: opacityOffset,
        boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
      }}
      className="relative bg-[#0F0F0F] rounded-[2rem] md:rounded-[2.5rem] border border-white/5 hover:border-[#B197FC]/30 hover:bg-[#15121A] p-8 md:p-12 flex flex-col justify-between group transition-all duration-500 overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(177,151,252,0.1)]"
    >
      
      {/* Optional glowing gradient inside - subtle purple */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#B197FC]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Floating Doodle Top Right */}
      <div className="absolute top-8 right-8">
        <div className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-gradient-to-b from-[#222222] to-[#111111] border border-[#333333] flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-all duration-500 ease-out z-20">
          <span className="text-2xl md:text-3xl filter drop-shadow-[0_0_8px_rgba(255,255,255,0.15)] saturate-[1.2] transition-all duration-500">
            {metric.emoji}
          </span>
        </div>
      </div>

      {/* Top empty space pushes text to bottom */}
      <div className="flex-1" />

      {/* Text Block: Number, Title, Description */}
      <div className="flex flex-col gap-2 relative z-10">
        <span className="text-7xl sm:text-8xl lg:text-[110px] font-semibold text-white tracking-tight mb-2 md:mb-4 drop-shadow-sm leading-none">
          {metric.number}
        </span>
        <h3 className="text-sm md:text-[15px] font-bold text-[#B197FC] tracking-[0.15em] uppercase mb-1 drop-shadow-sm">
          {metric.title}
        </h3>
        <p className="text-[#9CA3AF] text-base md:text-[17px] leading-relaxed max-w-sm mt-2">
          {metric.description}
        </p>
      </div>

    </motion.div>
  );
}

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
    <section className="w-full max-w-7xl mx-auto py-24 md:py-32 px-6 md:px-12 relative z-10 flex flex-col items-center overflow-x-hidden">
      
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
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 w-full auto-rows-[320px] md:auto-rows-[420px] p-4 md:p-8"
      >
        {metrics.map((metric, index) => (
          <MetricCard 
            key={index}
            metric={metric}
            index={index}
            scrollYProgress={scrollYProgress}
            springProgress={springProgress}
          />
        ))}
      </div>
    </section>
  );
}
