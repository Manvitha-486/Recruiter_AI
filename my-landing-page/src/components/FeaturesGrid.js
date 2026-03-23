"use client";

import { motion } from "framer-motion";
import { FileEdit, UserCheck, CloudUpload, FileText, Search, PhoneCall, ArrowRight } from "lucide-react";

const features = [
  {
    title: "Smart JD Enhancement",
    description: "Turns a bland job post into a magnet for top talent in seconds.",
    icon: FileEdit
  },
  {
    title: "Candidate Verification",
    description: "Background, employment and references checked automatically in 24 hours, not 5 days.",
    icon: UserCheck
  },
  {
    title: "Multi-Platform Publishing",
    description: "One click publishes your job across LinkedIn, Naukri, Indeed and more simultaneously.",
    icon: CloudUpload
  },
  {
    title: "Custom Application Forms",
    description: "AI forms create smart, role-specific questions. They boost completion and reduce drop-offs.",
    icon: FileText
  },
  {
    title: "Resume-to Insight Engine",
    description: "Resume-to-Insight Engine pulls key insights from resumes. It speeds up screening and improves hiring efficiency.",
    icon: Search
  },
  {
    title: "Outreach AI",
    description: "Outreach AI screens candidates through AI-powered calls. It boosts capacity and lowers screening costs.",
    icon: PhoneCall
  }
];

export default function FeaturesGrid() {
  return (
    <section className="w-full max-w-7xl mx-auto py-8 px-6 relative z-10 flex flex-col items-center">
      
      <motion.h2 
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, margin: "0px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-bold text-white mb-20 tracking-tight text-center"
      >
        The force behind RecruiterAI
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-8 flex flex-col items-start gap-6 cursor-pointer border-2 border-transparent hover:border-[#D0BCFF] shadow-2xl shadow-black/40 hover:shadow-[0_20px_50px_-10px_rgba(208,188,255,0.4)] hover:-translate-y-2 transition-all duration-500 ease-out"
            >
              {/* Subtle inner background gradient shift on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white via-white to-white group-hover:to-[#D0BCFF]/10 transition-colors duration-500 pointer-events-none" />

              {/* Icon Wrapper */}
              <div className="relative w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center border border-gray-200 group-hover:bg-[#D0BCFF]/20 group-hover:border-[#D0BCFF]/50 transition-all duration-500">
                <Icon size={22} className="text-gray-700 group-hover:text-[#8B5CF6] transition-colors duration-500 relative z-10" />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-3 relative z-10">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-black transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  {feature.description}
                </p>
              </div>
              
            </motion.div>
          );
        })}
      </div>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-20"
      >
        <button className="group relative bg-white text-black text-xl font-bold py-4 px-12 rounded-2xl shadow-xl hover:shadow-[0_0_40px_rgba(208,188,255,0.4)] flex items-center gap-4 transition-all duration-300 overflow-hidden hover:-translate-y-1">
          
          {/* Edge Glow effect */}
          <div className="absolute inset-0 rounded-2xl border-2 border-[#D0BCFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <span className="relative z-10">Know more</span>
          
          <motion.div
            className="relative z-10"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <ArrowRight size={24} className="text-black" />
          </motion.div>
        </button>
      </motion.div>

    </section>
  );
}
