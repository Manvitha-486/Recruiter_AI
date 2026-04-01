"use client";

import { motion } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";
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
    <div className="min-h-screen bg-black flex flex-col overflow-hidden font-sans">
      
      {/* Mega Menu Navigation */}
      <Navigation />

      {/* Hero Section - Black */}
      <section className="relative w-full bg-black bg-grid flex flex-col items-start justify-start min-h-[75vh] pt-20 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto w-full z-10 flex flex-col gap-6">
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
            <a href="#" className="flex items-center gap-2 text-[#3B82F6] hover:text-[#3B82F6]/80 text-lg md:text-xl font-medium transition-colors">
              See it in action <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Full-width Collins style Video Expand */}
      <RobotAnimation />

      {/* High-Impact Statement Section - Black */}
      <section className="relative w-full bg-black bg-grid flex items-center justify-center overflow-hidden">
        <Statement />
      </section>

      {/* Timeline Scroll Tracking Section - Black/White Alternating (Kept Black to match internal styles) */}
      <section className="w-full bg-black bg-grid text-white">
        <HowItWorks />
      </section>

      {/* 3x2 Floating Cards Feature Grid - Light */}
      <section className="w-full bg-white text-black border-y border-gray-200 relative z-10">
        <FeaturesGrid />
      </section>

      {/* Massive Metrics Bento Grid - Black */}
      <section className="w-full bg-black bg-grid text-white">
        <MetricsBento />
      </section>

      {/* Elegant Typography Testimonials Carousel - White */}
      <section className="w-full bg-white text-black border-y border-gray-200">
        <Testimonials />
      </section>

      {/* Accordion FAQ Section - Black */}
      <section className="w-full bg-black bg-grid text-white">
        <FAQ />
      </section>

      {/* Simple Bold CTA Section */}
      <section className="w-full">
        <CTA />
      </section>

      {/* Global Page Footer - Black */}
      <section className="w-full bg-black bg-grid text-white">
        <Footer />
      </section>

    </div>
  );
}
