"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  // Content for the right side mimicking the "COLLINS" layout but contextual to RecruiterAI
  const highlights = [
    {
      label: "Platform",
      title: "Autonomous AI Sourcing & Matching",
      image: "bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center"
    },
    {
      label: "Case Study",
      title: "How TechFlow cut time-to-hire by 80%",
      image: "bg-[url('https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center"
    },
    {
      label: "Resource",
      title: "The 2026 Guide to Ethical AI in Hiring",
      image: "bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center"
    }
  ];

  return (
    <>
      <nav className="relative w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center z-50">
        <div className="flex items-center space-x-2">
          <span className="text-xl md:text-2xl font-bold text-[#D0BCFF] tracking-tight">
            RecruiterAI
          </span>
        </div>
        
        <button 
          onClick={() => setIsOpen(true)}
          className="p-2 -mr-2 text-white hover:text-[#D0BCFF] transition-colors relative z-50 rounded-full"
          aria-label="Open Full Screen Menu"
        >
          <Menu className="w-7 h-7" strokeWidth={1.5} />
        </button>
      </nav>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-10%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-10%", transition: { duration: 0.3 } }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-[#0E0E0E] text-white flex flex-col overflow-y-auto"
          >
            {/* Top Bar matching regular nav */}
            <div className="w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
              <span className="text-xl md:text-2xl font-bold text-white tracking-tight">
                RecruiterAI
              </span>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 -mr-2 text-white hover:text-[#D0BCFF] transition-transform hover:rotate-90 duration-300 rounded-full"
              >
                <X className="w-8 h-8" strokeWidth={1.5} />
              </button>
            </div>

            {/* Menu Content Area - Using exact COLLINS layout mapping */}
            <div className="flex-1 w-full max-w-7xl mx-auto px-6 py-6 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 min-h-min items-center">
              
              {/* Left Side: Massive Typography Navigation */}
              <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col gap-2 md:gap-4 mb-16 lg:mb-0 lg:pt-8">
                  <a href="#" className="font-serif text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] tracking-tight hover:text-[#D0BCFF] hover:translate-x-4 transition-all duration-300 leading-tight">Platform</a>
                  <a href="#" className="font-serif text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] tracking-tight hover:text-[#D0BCFF] hover:translate-x-4 transition-all duration-300 leading-tight">About Us</a>
                  <a href="#" className="font-serif text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] tracking-tight hover:text-[#D0BCFF] hover:translate-x-4 transition-all duration-300 leading-tight">Pricing</a>
                </div>

                {/* Bottom Left Links (Pill + Plain Links) */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 pb-8 mt-12 lg:mt-auto">
                  <a href="#" className="bg-white text-black px-8 py-3.5 rounded-full font-medium hover:scale-105 transition-transform text-lg">
                    Sign Up Free
                  </a>
                  <div className="flex items-center gap-6 text-xl">
                    <a href="#" className="hover:text-[#D0BCFF] transition-colors">Log In</a>
                  </div>
                </div>
              </div>

              {/* Right Side: Featured Cards */}
              <div className="flex flex-col gap-10 justify-center lg:pl-20 pb-16 lg:pb-0">
                {highlights.map((item, idx) => (
                  <motion.a 
                    href="#" 
                    key={idx}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (idx * 0.1), duration: 0.6, ease: "easeOut" }}
                    className="flex items-center gap-8 group cursor-pointer"
                  >
                    <div className={`w-28 h-36 md:w-36 md:h-44 rounded-xl ${item.image} flex-shrink-0 shadow-[0_10px_30px_rgba(0,0,0,0.5)] bg-[#1A1A24]`} />
                    
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-3">
                        <span className="text-gray-400 text-[15px]">{item.label}</span>
                        <ArrowRight className="w-4 h-4 text-white opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-serif pr-4 group-hover:text-[#D0BCFF] transition-colors leading-snug">
                        {item.title}
                      </h3>
                    </div>
                  </motion.a>
                ))}
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
