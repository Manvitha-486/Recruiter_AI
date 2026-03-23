"use client";

import { motion } from "framer-motion";
import { Brain } from "lucide-react";
import { useEffect, useState } from "react";

// Dictionary of simple playful SVG geometric doodles
const Shapes = {
  Triangle: ({ color, size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <polygon points="12,2 22,20 2,20" />
    </svg>
  ),
  Circle: ({ color, size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <circle cx="12" cy="12" r="10" />
    </svg>
  ),
  Square: ({ color, size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <rect x="4" y="4" width="16" height="16" rx="3" />
    </svg>
  ),
  Star: ({ color, size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" />
    </svg>
  ),
  Pill: ({ color, size }) => (
    <svg width={size * 1.5} height={size} viewBox="0 0 36 24" fill={color}>
      <rect x="2" y="6" width="32" height="12" rx="6" />
    </svg>
  ),
  Ring: ({ color, size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="5">
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
};

// Colors matching the playful 3D Tines aesthetic
const colors = ["#F472B6", "#34D399", "#FBBF24", "#B197FC", "#60A5FA"];
const shapeTypes = Object.keys(Shapes);

// Floating Animation Wrapper
const FloatingShape = ({ initialX, initialY, delay, duration, rotation, scale }) => {
  // To avoid hydration mismatch with random values, we'll hardcode the scatter via props 
  // passed from a deterministic array
  return (
    <motion.div
      initial={{ left: initialX, top: initialY, rotate: rotation, scale: scale, opacity: 0 }}
      whileInView={{ opacity: 0.8 }}
      animate={{ 
        y: [0, -30, 0],
        rotate: [rotation, rotation + 20, rotation - 10, rotation]
      }}
      transition={{ 
        duration: duration, 
        repeat: Infinity, 
        ease: "easeInOut",
        opacity: { duration: 1 } // Fade in softly when in view
      }}
      className="absolute z-0 drop-shadow-lg"
    >
      <div style={{ transform: `scale(${scale})` }}>
        {/* Render child shape safely */}
      </div>
    </motion.div>
  );
};

export default function CTA() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Hardcoded scatter data to avoid Next.js hydration random mismatch
  const doodles = [
    // Originals
    { type: "Triangle", color: "#FBBF24", size: 40, x: "10%", y: "15%", rot: 15, dur: 5, delay: 0 },
    { type: "Circle", color: "#F472B6", size: 25, x: "25%", y: "8%", rot: 0, dur: 7, delay: 1 },
    { type: "Pill", color: "#34D399", size: 35, x: "80%", y: "12%", rot: -25, dur: 6, delay: 0.5 },
    { type: "Ring", color: "#60A5FA", size: 45, x: "90%", y: "40%", rot: 45, dur: 8, delay: 2 },
    { type: "Star", color: "#B197FC", size: 30, x: "85%", y: "75%", rot: 12, dur: 5.5, delay: 1 },
    { type: "Square", color: "#FBBF24", size: 35, x: "15%", y: "80%", rot: -15, dur: 6.5, delay: 0.2 },
    { type: "Ring", color: "#F472B6", size: 30, x: "5%", y: "45%", rot: 0, dur: 7, delay: 1.5 },
    { type: "Triangle", color: "#34D399", size: 25, x: "70%", y: "85%", rot: 60, dur: 5, delay: 0.8 },
    { type: "Pill", color: "#B197FC", size: 40, x: "30%", y: "85%", rot: 25, dur: 8, delay: 0.4 },
    { type: "Star", color: "#60A5FA", size: 35, x: "65%", y: "10%", rot: -45, dur: 6, delay: 1.2 },
    // Densifying the canvas!
    { type: "Square", color: "#34D399", size: 20, x: "8%", y: "65%", rot: 35, dur: 7.5, delay: 0.7 },
    { type: "Circle", color: "#B197FC", size: 30, x: "18%", y: "30%", rot: 0, dur: 5, delay: 1.8 },
    { type: "Star", color: "#FBBF24", size: 25, x: "42%", y: "8%", rot: 80, dur: 6, delay: 0.9 },
    { type: "Pill", color: "#F472B6", size: 30, x: "55%", y: "88%", rot: -10, dur: 8, delay: 0.2 },
    { type: "Triangle", color: "#60A5FA", size: 45, x: "92%", y: "70%", rot: 105, dur: 5.5, delay: 1.1 },
    { type: "Ring", color: "#FBBF24", size: 25, x: "75%", y: "50%", rot: 20, dur: 7, delay: 0.5 },
    { type: "Square", color: "#F472B6", size: 40, x: "35%", y: "75%", rot: 45, dur: 6.5, delay: 1.3 },
    { type: "Circle", color: "#60A5FA", size: 20, x: "85%", y: "25%", rot: 0, dur: 8.5, delay: 2.1 },
    { type: "Pill", color: "#34D399", size: 45, x: "12%", y: "90%", rot: 50, dur: 6, delay: 0.6 },
    { type: "Star", color: "#F472B6", size: 35, x: "28%", y: "55%", rot: -30, dur: 5.5, delay: 1.4 },
    { type: "Triangle", color: "#B197FC", size: 25, x: "60%", y: "15%", rot: 15, dur: 7.5, delay: 0.3 },
    { type: "Ring", color: "#34D399", size: 35, x: "45%", y: "92%", rot: 0, dur: 9, delay: 1.7 },
    { type: "Square", color: "#B197FC", size: 22, x: "95%", y: "10%", rot: 75, dur: 6, delay: 0.8 },
    { type: "Pill", color: "#FBBF24", size: 28, x: "88%", y: "90%", rot: -60, dur: 7, delay: 1.9 },
    { type: "Star", color: "#34D399", size: 30, x: "50%", y: "30%", rot: 180, dur: 8, delay: 2.5 } 
  ];

  return (
    <section className="relative w-full overflow-hidden py-32 flex items-center justify-center min-h-[700px]">
      
      {/* Container specifically to restrict the absolute shapes */}
      <div className="absolute inset-0 w-full h-full max-w-[1400px] mx-auto pointer-events-none">
        {mounted && doodles.map((d, i) => {
          const ShapeComponent = Shapes[d.type];
          return (
            <motion.div
              key={i}
              className="absolute z-0 filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]"
              style={{ left: d.x, top: d.y }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 0.9, scale: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              animate={{ 
                y: [0, -25, 0],
                rotate: [d.rot, d.rot + 15, d.rot]
              }}
              transition={{ 
                y: { duration: d.dur, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: d.dur * 1.2, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 0.5, delay: d.delay * 0.3 },
                scale: { duration: 0.5, delay: d.delay * 0.3, type: "spring" }
              }}
            >
              <ShapeComponent color={d.color} size={d.size} />
            </motion.div>
          );
        })}
      </div>

      {/* Center Tines-style Card */}
      <motion.div 
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, type: "spring", damping: 20 }}
        className="relative z-10 bg-[#121218]/80 backdrop-blur-2xl border-2 border-white/5 rounded-3xl p-10 md:p-14 flex flex-col items-center text-center max-w-[480px] w-full mx-4 shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
      >
        {/* Brand Icon */}
        <div className="w-14 h-14 rounded-2xl bg-[#D0BCFF]/10 flex items-center justify-center mb-8 border border-[#D0BCFF]/20 shadow-inner">
          <Brain className="w-7 h-7 text-[#D0BCFF]" />
        </div>
        
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-serif text-white mb-10 leading-snug tracking-tight">
          Built by you, <br />powered by RecruiterAI
        </h2>
        
        {/* Button Group */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mb-10">
          <button className="flex-1 px-6 py-3.5 rounded-lg bg-[#3C3C54] hover:bg-[#4A4A68] text-white font-semibold transition-all shadow-md active:scale-95">
            Book a demo
          </button>
          <button className="flex-1 px-6 py-3.5 rounded-lg bg-transparent border border-white/20 hover:bg-white/5 text-white font-semibold transition-all active:scale-95">
            Sign up free
          </button>
        </div>
        
        {/* Footer Link */}
        <div className="pt-6 border-t border-white/10 w-full mt-2">
          <p className="text-gray-400 text-sm">
            Already have an account?{" "}
            <a href="#" className="font-semibold text-white hover:text-[#D0BCFF] transition-colors hover:underline underline-offset-4 decoration-white/30">
              Log In.
            </a>
          </p>
        </div>
      </motion.div>
      
    </section>
  );
}
