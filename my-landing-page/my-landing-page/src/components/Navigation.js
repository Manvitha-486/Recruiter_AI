"use client";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="relative w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center z-50">
      
      {/* Left: Logo */}
      <div className="flex items-center gap-2 group cursor-pointer">
        {/* Typography */}
        <span className="text-xl md:text-2xl font-bold text-white tracking-tight flex items-baseline">
          Recruiter<span className="font-extrabold">AI</span>
        </span>
      </div>
      
      {/* Center: Links */}
      <div className="hidden md:flex items-center gap-10">
        <a href="#" className="text-[15px] font-semibold text-white hover:text-gray-300 transition-colors">
          How it works
        </a>
        <a href="#" className="text-[15px] font-medium text-gray-400 hover:text-gray-300 transition-colors">
          Capabilities
        </a>
      </div>

      {/* Right: Button & Mobile Menu */}
      <div className="flex items-center gap-4">
        <a 
          href="#" 
          className="bg-[#3B82F6] hover:bg-blue-600 text-white px-4 py-2 sm:px-5 rounded-sm font-medium text-xs sm:text-sm transition-colors whitespace-nowrap"
        >
          Book Demo
        </a>
        <button className="md:hidden text-white hover:text-gray-300">
           <Menu className="w-6 h-6" />
        </button>
      </div>
      
    </nav>
  );
}
