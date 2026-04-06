"use client";

import { motion } from "framer-motion";
import { ArrowRight, Leaf, ArrowDown } from "lucide-react";
import Navigation from "@/components/Navigation";
import RobotAnimation from "@/components/RobotAnimation";
import HowItWorks from "@/components/HowItWorks";
import FeaturesGrid from "@/components/FeaturesGrid";
import MetricsBento from "@/components/MetricsBento";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Statement from "@/components/Statement";

export default function Home() {
  return (
    <div className="min-h-screen bg-black bg-grid flex flex-col overflow-x-clip font-sans">

      {/* Hero Section with Custom Background */}
      <section className="relative w-full h-[100svh] min-h-[700px] overflow-hidden flex flex-col items-start justify-center font-sans bg-[#2C1F5D] px-6 md:px-12 lg:px-24">
        
        {/* Mega Menu Navigation Overlay */}
        <div className="absolute top-0 left-0 right-0 z-50 w-full">
          <Navigation />
        </div>
        
        {/* Grainy mixed gradient background */}
        <div className="absolute inset-0 z-0 bg-[#3c2a6e] overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] aspect-square rounded-full bg-[#18CACA]/60 blur-[130px] mix-blend-screen" />
          <div className="absolute top-[10%] left-[20%] w-[50%] aspect-square rounded-full bg-[#1A62C6]/50 blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[60%] aspect-square rounded-full bg-[#622384]/70 blur-[150px] mix-blend-screen" />
          <div className="absolute bottom-[5%] right-[5%] w-[60%] aspect-square rounded-full bg-[#B24197]/50 blur-[140px] mix-blend-screen" />
          <div className="absolute top-[-10%] right-[-10%] w-[45%] aspect-square rounded-full bg-[#3EA9CE]/60 blur-[120px] mix-blend-screen" />
          {/* Noise layer */}
          <div className="absolute inset-0 w-full h-full noise-bg opacity-50 mix-blend-overlay pointer-events-none" />
        </div>



        {/* Original Main Content restores here */}
        <div className="max-w-7xl mx-auto w-full z-20 flex flex-col gap-6 relative">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[90px] font-serif leading-[1] md:leading-[0.9] tracking-tight text-[#f4f4f5]"
          >
            Your hiring process,<br />
            minus the manual work.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-6"
          >
            <a href="#" className="flex items-center gap-2 text-white hover:text-white/80 text-lg md:text-xl font-medium transition-colors">
              See it in action <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Full-width Collins style Video Expand */}
      <RobotAnimation />

      {/* High-Impact Statement Section - Black */}
      <section className="relative w-full flex items-center justify-center overflow-hidden">
        <Statement />
      </section>

      {/* Timeline Scroll Tracking Section - Black/White Alternating (Kept Black to match internal styles) */}
      <section className="w-full text-white">
        <HowItWorks />
      </section>

      {/* 3x2 Floating Cards Feature Grid - Light */}
      <section className="w-full bg-white text-black border-y border-gray-200 relative z-10">
        <FeaturesGrid />
      </section>

      {/* Massive Metrics Bento Grid - Black */}
      <section className="w-full text-white">
        <MetricsBento />
      </section>

      {/* Elegant Typography Testimonials Carousel - White */}
      <section className="w-full bg-white text-black border-y border-gray-200">
        <Testimonials />
      </section>

      {/* Accordion FAQ Section - Black */}
      <section className="w-full text-white">
        <FAQ />
      </section>

      {/* Simple Bold CTA Section */}
      <section className="w-full">
        <CTA />
      </section>

      {/* Global Page Footer - Black */}
      <section className="w-full text-white">
        <Footer />
      </section>

    </div>
  );
}
