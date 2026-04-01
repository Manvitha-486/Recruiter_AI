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
    <section className="w-full max-w-7xl mx-auto py-16 md:py-24 px-6 relative z-10 flex flex-col items-center">
      
      <motion.h2 
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "0px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-12 md:mb-20 tracking-tight text-center"
      >
        The force behind RecruiterAI
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-6 md:p-8 flex flex-col items-start gap-6 cursor-pointer border border-gray-200 hover:border-[#5B21B6] hover:bg-[#5B21B6] shadow-sm hover:shadow-xl hover:shadow-[#5B21B6]/30 hover:-translate-y-2 transition-all duration-500 ease-out overflow-hidden"
            >
              {/* Subtle inner background gradient shift on hover to add depth */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent to-transparent group-hover:from-white/10 group-hover:to-transparent transition-colors duration-500 pointer-events-none" />

              {/* Icon Wrapper */}
              <div className="relative w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:bg-white/20 group-hover:border-white/30 transition-all duration-500">
                <Icon size={22} className="text-gray-500 group-hover:text-white transition-colors duration-500 relative z-10" />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-3 relative z-10">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/90 leading-relaxed text-[15px] transition-colors duration-300">
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
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-12 md:mt-20"
      >
        <button className="group relative bg-black text-white border border-transparent text-lg font-semibold py-4 px-10 rounded-full shadow-xl hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] flex items-center gap-3 transition-all duration-300 overflow-hidden hover:-translate-y-1">
          
          {/* Edge Glow effect */}
          <div className="absolute inset-0 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <span className="relative z-10 tracking-wide text-[15px] uppercase">Know more</span>
          
          <motion.div
            className="relative z-10"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <ArrowRight size={20} className="text-white" />
          </motion.div>
        </button>
      </motion.div>

    </section>
  );
}
