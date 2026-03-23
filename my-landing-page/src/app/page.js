"use client";

import { motion } from "framer-motion";
import { Menu, ArrowRight, Leaf } from "lucide-react";
import RobotAnimation from "@/components/RobotAnimation";
import HowItWorks from "@/components/HowItWorks";
import FeaturesGrid from "@/components/FeaturesGrid";
import MetricsBento from "@/components/MetricsBento";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-grid flex flex-col items-center justify-start text-foreground overflow-hidden">
      
      {/* Navigation Bar */}
      <nav className="w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center z-10">
        <div className="flex items-center space-x-2">
          {/* Logo */}
          <span className="text-xl md:text-2xl font-bold text-[#D0BCFF]">
            RecruiterAI
          </span>
        </div>
        <button className="p-2 -mr-2 text-white hover:text-gray-300 transition-colors">
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 md:px-6 z-10 w-full max-w-7xl mt-20 mb-12">
        
        {/* Animated Heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-none px-4 mx-auto mb-12"
        >
          <h1 className="text-[54px] font-medium tracking-tight text-gray-200 leading-[1.1]">
            <span className="md:whitespace-nowrap">Design Your Hiring Strategy Once.</span><br />
            Watch It Run Itself-<span className="font-extrabold text-white">Every Time</span>
          </h1>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6 w-full max-w-3xl mx-auto mb-10"
        >
          <button className="group relative overflow-hidden rounded-full px-8 py-4 bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white font-medium text-base flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all duration-300 w-full sm:w-auto">
            <span className="relative z-10 flex items-center gap-2">
              Start Hiring Smarter
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button className="relative rounded-full px-8 py-4 bg-[#404040]/20 border border-[#737373] hover:border-[#A5D8FF] hover:bg-[#404040]/40 backdrop-blur-md text-gray-200 font-medium text-base transition-all duration-300 flex items-center justify-center w-full sm:w-auto">
            Book a demo
          </button>
        </motion.div>

        {/* Labels below CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 w-full max-w-4xl mx-auto"
        >
          {/* Laurel Label 1 */}
          <div className="flex items-center gap-3">
            <Leaf className="w-5 h-5 md:w-6 md:h-6 text-[#A5D8FF] scale-x-[-1] -rotate-12 opacity-80 flex-shrink-0" />
            <span className="text-sm md:text-base font-semibold text-gray-200 tracking-wider">
              Backed by CHRO
            </span>
            <Leaf className="w-5 h-5 md:w-6 md:h-6 text-[#A5D8FF] rotate-12 opacity-80 flex-shrink-0" />
          </div>

          {/* Laurel Label 2 */}
          <div className="flex items-center gap-3">
            <Leaf className="w-5 h-5 md:w-6 md:h-6 text-[#D0BCFF] scale-x-[-1] -rotate-12 opacity-80 flex-shrink-0" />
            <span className="text-sm md:text-base font-semibold text-gray-200 tracking-wider">
              Powered by recruiting agents
            </span>
            <Leaf className="w-5 h-5 md:w-6 md:h-6 text-[#D0BCFF] rotate-12 opacity-80 flex-shrink-0" />
          </div>
        </motion.div>

      </main>

      {/* Interactive Loop Animation Section */}
      <RobotAnimation />

      {/* Timeline Scroll Tracking Section */}
      <HowItWorks />

      {/* 3x2 Floating Cards Feature Grid */}
      <FeaturesGrid />

      {/* Massive Metrics Bento Grid */}
      <MetricsBento />

      {/* Elegant Typography Testimonials Carousel */}
      <Testimonials />

      {/* Accordion FAQ Section */}
      <FAQ />

      {/* Vibrant Floating Doodles CTA Section */}
      <CTA />

      {/* Global Page Footer */}
      <Footer />

    </div>
  );
}
