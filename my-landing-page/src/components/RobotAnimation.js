"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Image as ImageIcon } from "lucide-react";

export default function RobotAnimation() {
  
  // Utilize the global scroll position since the Hero section is permanently fixed at the absolute top (0px)
  const { scrollY } = useScroll();

  // MAGIC PEEK EFFECT:
  // When at the very top of the page (0px), forcefully shove the card UP by 12rem (-12rem) so it intensely overlaps the black Hero.
  // As the user scrolls down through the first 600px, smoothly pull the card DOWN (0rem) to rest safely centered inside its native white container!
  const peekY = useTransform(scrollY, [0, 600], ["-12rem", "0rem"]);

  // Expand from 85% to exactly 96% to maintain the precise Collins uniform white border thickness
  const scaleWidth = useTransform(scrollY, [0, 600], ["85%", "96%"]);
  // Subtle opacity entrance
  const fadeOpacity = useTransform(scrollY, [0, 300], [0.8, 1]);

  return (
    // A completely clean, un-hacked native white section wrapper
    <section className="w-full relative z-20 flex flex-col items-center bg-white pt-8 md:pt-16 pb-16 md:pb-32">
      <div className="w-full max-w-full mx-auto px-0">
        <div className="w-full flex justify-center">
          <motion.div 
            style={{ y: peekY, width: scaleWidth, opacity: fadeOpacity }}
            // Sharp corners, precise Collins white framed margin, no massive layout breaking shadows
            className="relative w-full aspect-video min-h-[300px] max-h-[85vh] md:max-h-[800px] bg-gray-100 overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] flex items-center justify-center transform origin-top"
          >
            {/* Directly loading the provided Cloudinary link */}
            <img 
              src="https://res.cloudinary.com/dvfowvbn8/image/upload/v1775041219/gif_optdqg.gif" 
              alt="Platform Walkthrough Demo" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
