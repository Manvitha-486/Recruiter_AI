"use client";

import { Share2, Globe, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-transparent border-t border-white/5 pt-20 pb-10 px-6 relative z-10">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Description */}
          <div className="flex flex-col gap-5 lg:pr-8">
            <span className="text-2xl font-bold text-white tracking-tight">
              RecruiterAI
            </span>
            <p className="text-[#888899] text-[15px] leading-relaxed max-w-sm">
              Revolutionizing the way talent meets opportunity. Our AI-driven platform empowers recruitment teams to find the perfect match with speed, precision, and ethical intelligence.
            </p>
            {/* Social / Action Icons */}
            <div className="flex items-center gap-3 mt-2">
              <a href="#" aria-label="Share" className="w-10 h-10 rounded-full bg-[#181424] hover:bg-[#D0BCFF]/20 flex items-center justify-center transition-all">
                <Share2 className="w-4 h-4 text-[#B197FC]" />
              </a>
              <a href="#" aria-label="Website" className="w-10 h-10 rounded-full bg-[#181424] hover:bg-[#D0BCFF]/20 flex items-center justify-center transition-all">
                <Globe className="w-4 h-4 text-[#B197FC]" />
              </a>
              <a href="#" aria-label="Community" className="w-10 h-10 rounded-full bg-[#181424] hover:bg-[#D0BCFF]/20 flex items-center justify-center transition-all">
                <MessageSquare className="w-4 h-4 text-[#B197FC]" />
              </a>
            </div>
          </div>

          {/* Column 2: Product */}
          <div className="flex flex-col gap-4 lg:ml-8">
            <h4 className="text-white font-semibold mb-2">Product</h4>
            <a href="#" className="text-[#888899] hover:text-[#D0BCFF] text-[15px] transition-colors w-fit">AI Sourcing</a>
            <a href="#" className="text-[#888899] hover:text-[#D0BCFF] text-[15px] transition-colors w-fit">Applicant Tracking</a>
            <a href="#" className="text-[#888899] hover:text-[#D0BCFF] text-[15px] transition-colors w-fit">Diversity Insights</a>
            <a href="#" className="text-[#888899] hover:text-[#D0BCFF] text-[15px] transition-colors w-fit">Automated Scheduling</a>
            <a href="#" className="text-[#888899] hover:text-[#D0BCFF] text-[15px] transition-colors w-fit">Integrations</a>
          </div>

          {/* Column 3: Company */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold mb-2">Company</h4>
            <a href="#" className="text-[#888899] hover:text-[#D0BCFF] text-[15px] transition-colors w-fit">About Us</a>
            <a href="#" className="text-[#888899] hover:text-[#D0BCFF] text-[15px] transition-colors w-fit">Careers</a>
            <a href="#" className="text-[#888899] hover:text-[#D0BCFF] text-[15px] transition-colors w-fit">Press Kit</a>
            <a href="#" className="text-[#888899] hover:text-[#D0BCFF] text-[15px] transition-colors w-fit">Trust Center</a>
            <a href="#" className="text-[#888899] hover:text-[#D0BCFF] text-[15px] transition-colors w-fit">Contact</a>
          </div>

          {/* Column 4: Resources */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold mb-2">Resources</h4>
            <a href="#" className="text-[#888899] hover:text-[#D0BCFF] text-[15px] transition-colors w-fit">Recruitment Blog</a>
            <a href="#" className="text-[#888899] hover:text-[#D0BCFF] text-[15px] transition-colors w-fit">E-books & Guides</a>
            <a href="#" className="text-[#888899] hover:text-[#D0BCFF] text-[15px] transition-colors w-fit">Webinars</a>
            <a href="#" className="text-[#888899] hover:text-[#D0BCFF] text-[15px] transition-colors w-fit">API Documentation</a>
            <a href="#" className="text-[#888899] hover:text-[#D0BCFF] text-[15px] transition-colors w-fit">Help Center</a>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/[0.06] mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-[#666677] text-sm">
          <p className="text-center lg:text-left">
            © {new Date().getFullYear()} RecruiterAI Inc. All rights reserved. Built with precision for the modern workforce.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Cookie Settings</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Security</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
