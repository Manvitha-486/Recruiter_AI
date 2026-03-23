"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

// FAQ Data inspired by the provided image layout and brand context
const faqs = [
  {
    question: "What is RecruiterAI, exactly?",
    answer: "RecruiterAI is an advanced autonomous sourcing and screening platform designed to find top-tier talent in seconds, not weeks. It leverages proprietary LLMs trained on millions of successful hires to identify candidates that traditional filters miss."
  },
  {
    question: "How quickly can we go live?",
    answer: "Our implementation process takes less than 48 hours. Since we integrate directly with your existing infrastructure via API, there is almost zero downtime or complex onboarding required."
  },
  {
    question: "Can it integrate with our current ATS?",
    answer: "Yes, RecruiterAI natively integrates with all major Applicant Tracking Systems including Greenhouse, Lever, Workday, and Ashby to ensure a seamless two-way sync of candidate data without forcing you to change your workflow."
  },
  {
    question: "What makes the AI matching accurate?",
    answer: "Unlike keyword-matching legacy systems, our AI understands context, career trajectories, and nuanced skills. It evaluates candidates holistically based on real-world performance indicators rather than just resume buzzwords."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // Pre-open the first FAQ

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-4xl mx-auto py-24 px-6 relative z-10 flex flex-col items-center">
      
      {/* Heading */}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-[2.2rem] md:text-5xl font-bold tracking-tight mb-16 text-center shadow-sm"
      >
        <span className="text-white">REAL ANSWERS.</span>
        <span className="text-[#D0BCFF]">NO FLUFF.</span>
      </motion.h2>

      {/* FAQ List */}
      <div className="w-full flex flex-col gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`w-full rounded-[14px] border transition-all duration-300 overflow-hidden ${
                isOpen 
                  ? "bg-[#D0BCFF]/10 border-[#D0BCFF]/40 shadow-[0_0_20px_rgba(208,188,255,0.05)]" 
                  : "bg-[#D0BCFF]/[0.03] border-[#D0BCFF]/10 hover:border-[#D0BCFF]/30 hover:bg-[#D0BCFF]/5"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 md:py-8 flex items-center justify-between focus:outline-none"
              >
                <div className="flex items-center gap-4 text-left">
                  <span className="text-[#B197FC] font-semibold text-lg md:text-xl w-8">
                    0{index + 1}.
                  </span>
                  <span className="text-gray-200 font-medium text-base md:text-[1.1rem]">
                    {faq.question}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown className="w-5 h-5 text-[#B197FC]" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-8 pt-0 pl-[4.5rem] pr-12">
                      <p className="text-gray-400 leading-relaxed text-[15px] md:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
