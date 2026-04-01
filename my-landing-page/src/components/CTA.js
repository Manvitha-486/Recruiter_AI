"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <div className="w-full bg-[#B197FC] py-16 md:py-24 px-6 md:px-12 flex items-center justify-start border-y border-[#9C7AFB]">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-start gap-8 md:gap-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-[70px] lg:text-[85px] font-bold text-white uppercase leading-[1.05] tracking-tight"
        >
          Schedule A<br />
          Personalised Demo
        </motion.h2>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <button className="bg-white text-[#B197FC] hover:text-[#9C7AFB] font-bold text-lg py-4 px-8 rounded flex items-center shadow hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
            Get Demo
          </button>
        </motion.div>
      </div>
    </div>
  );
}
