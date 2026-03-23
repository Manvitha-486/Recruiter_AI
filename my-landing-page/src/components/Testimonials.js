"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "RecruiterAI completely eliminated our screening backlog. We're now interviewing top-tier candidates within hours of them applying, rather than weeks.",
    name: "Sarah Jenkins",
    role: "VP of Talent at TechFlow",
    initials: "SJ"
  },
  {
    quote: "The automated background verification is practically magic. It cuts out endless email chains and lets my team focus purely on relationship building.",
    name: "Marcus Chen",
    role: "Lead Recruiter at ScaleUp",
    initials: "MC"
  },
  {
    quote: "A game-changer for high-volume roles. The ability to seamlessly auto-screen across multiple platforms has tripled our overall candidate quality.",
    name: "Elena Rodriguez",
    role: "HR Director at GlobalRetail",
    initials: "ER"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000); // Wait 6 seconds per quote
    
    // Ensure the interval resets if the user clicks a specific index manually
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="w-full max-w-5xl mx-auto py-8 px-6 relative z-10 flex flex-col items-center justify-center min-h-[550px] overflow-hidden">
      
      {/* Decorative Quote Icon */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-6"
      >
        <div className="w-16 h-16 rounded-full bg-[#1A1A1A] border border-white/5 flex items-center justify-center shadow-xl">
          <Quote className="text-[#A5D8FF] w-8 h-8" strokeWidth={1.5} />
        </div>
      </motion.div>

      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="text-3xl md:text-5xl font-bold text-white text-center tracking-tight mb-16 leading-tight max-w-3xl"
      >
        Built for people doing the work. <br className="hidden md:block" />
        <span className="text-gray-400">Used by those who move fast.</span>
      </motion.h2>

      {/* Floating Typography Carousel Container (No Cards!) */}
      <div className="relative w-full h-[280px] md:h-[220px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute flex flex-col items-center text-center w-full px-4"
          >
            {/* The Quote itself */}
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-relaxed md:leading-snug mb-10 max-w-4xl tracking-tight">
              "{testimonials[currentIndex].quote}"
            </h3>
            
            {/* Author Block */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#A5D8FF] to-[#D0BCFF] flex items-center justify-center text-black font-bold text-lg shadow-[0_0_20px_rgba(208,188,255,0.3)]">
                {testimonials[currentIndex].initials}
              </div>
              <div className="flex flex-col items-start">
                <span className="text-white font-bold tracking-wide">{testimonials[currentIndex].name}</span>
                <span className="text-gray-400 text-sm">{testimonials[currentIndex].role}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Animated Navigation Bars */}
      <div className="flex items-center gap-3 mt-12 z-20 relative">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className="relative h-1.5 w-16 md:w-24 bg-white/10 rounded-full overflow-hidden hover:bg-white/20 transition-colors"
            aria-label={`Go to testimonial ${idx + 1}`}
          >
            {/* The filling progress bar for the active slide */}
            {currentIndex === idx && (
              <motion.div
                key={`progress-${idx}`}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 6, ease: "linear" }}
                className="absolute top-0 left-0 h-full bg-[#D0BCFF] shadow-[0_0_10px_rgba(208,188,255,0.8)] rounded-full"
              />
            )}
            
            {/* Keep previously viewed bars dimly filled for context */}
            {idx < currentIndex && (
              <div className="absolute top-0 left-0 h-full w-full bg-white/40 rounded-full" />
            )}
          </button>
        ))}
      </div>

    </section>
  );
}
