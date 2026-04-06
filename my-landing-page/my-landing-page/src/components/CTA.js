"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Hexagon, Mail, Phone, Calendar, UserCheck, FileText, MessageSquare, Briefcase, Zap, CheckCircle, Search, Building, Clipboard, Star } from "lucide-react";

// Helper component for minimalist floating icons
const FloatingShape = ({ type, size, top, left, right, bottom, rotate, driftX, driftY, rotDrift, duration, parallaxFactor, mouseX, mouseY }) => {
  const iconMap = {
    mail: Mail, phone: Phone, calendar: Calendar, user: UserCheck, 
    file: FileText, message: MessageSquare, briefcase: Briefcase, zap: Zap,
    check: CheckCircle, search: Search, building: Building, clipboard: Clipboard, star: Star
  };

  const Icon = iconMap[type];
  if (!Icon) return null;

  // Parallax transform tied to cursor position
  const moveX = useTransform(mouseX, [-0.5, 0.5], [-parallaxFactor, parallaxFactor]);
  const moveY = useTransform(mouseY, [-0.5, 0.5], [-parallaxFactor, parallaxFactor]);

  return (
    <motion.div
      className="absolute"
      style={{ top, left, right, bottom, x: moveX, y: moveY }}
    >
      <motion.div
        animate={{
          y: [0, driftY, 0, -driftY, 0],
          x: [0, driftX, 0, -driftX, 0],
          rotate: [rotate, rotate + rotDrift, rotate - rotDrift, rotate]
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="flex items-center justify-center opacity-30 hover:opacity-70 transition-opacity">
          <Icon size={size} strokeWidth={2.5} color="#ffffff" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function CTA() {
  const baseShapes = [
    // Top Left Quadrant
    { type: 'mail', size: 32, top: '10%', left: '5%', rotate: -10, driftX: 15, driftY: 20 },
    { type: 'file', size: 28, top: '8%', left: '20%', rotate: 15, driftX: -15, driftY: 10 },
    { type: 'user', size: 36, top: '25%', left: '12%', rotate: -5, driftX: 20, driftY: -10 },
    { type: 'message', size: 24, top: '35%', left: '25%', rotate: 20, driftX: -15, driftY: -20 },
    { type: 'zap', size: 40, top: '48%', left: '6%', rotate: 8, driftX: 10, driftY: 25 },
    
    // Bottom Left Quadrant
    { type: 'calendar', size: 30, top: '65%', left: '8%', rotate: -15, driftX: -20, driftY: 15 },
    { type: 'phone', size: 38, top: '55%', left: '22%', rotate: 10, driftX: 25, driftY: -10 },
    { type: 'briefcase', size: 26, top: '85%', left: '15%', rotate: -8, driftX: -10, driftY: 20 },
    { type: 'check', size: 34, top: '75%', left: '5%', rotate: 18, driftX: 15, driftY: 15 },
    { type: 'search', size: 22, top: '80%', left: '28%', rotate: -12, driftX: -15, driftY: -15 },

    // Top Right Quadrant
    { type: 'building', size: 38, top: '10%', right: '5%', rotate: 15, driftX: 20, driftY: 10 },
    { type: 'clipboard', size: 28, top: '8%', right: '20%', rotate: -10, driftX: -10, driftY: -15 },
    { type: 'star', size: 32, top: '28%', right: '12%', rotate: 20, driftX: 15, driftY: 20 },
    { type: 'mail', size: 24, top: '20%', right: '28%', rotate: -5, driftX: -20, driftY: 10 },
    { type: 'user', size: 36, top: '45%', right: '8%', rotate: 12, driftX: 25, driftY: -20 },

    // Bottom Right Quadrant
    { type: 'message', size: 30, top: '65%', right: '10%', rotate: -18, driftX: -20, driftY: -15 },
    { type: 'zap', size: 42, top: '55%', right: '25%', rotate: 8, driftX: 15, driftY: 10 },
    { type: 'calendar', size: 26, top: '85%', right: '15%', rotate: -12, driftX: -10, driftY: 25 },
    { type: 'phone', size: 34, top: '75%', right: '5%', rotate: 15, driftX: 20, driftY: -15 },
    { type: 'file', size: 28, top: '90%', right: '28%', rotate: -8, driftX: -15, driftY: -10 },
    
    // Top/Bottom Ambient Edges
    { type: 'check', size: 24, top: '6%', left: '40%', rotate: 10, driftX: 15, driftY: 10 },
    { type: 'briefcase', size: 32, top: '12%', right: '40%', rotate: -15, driftX: -15, driftY: -10 },
    { type: 'search', size: 28, bottom: '8%', left: '45%', rotate: 20, driftX: 10, driftY: 15 },
    { type: 'building', size: 36, bottom: '15%', right: '45%', rotate: -5, driftX: -20, driftY: -15 }
  ];

  // Add deterministic randomized motion properties so they float beautifully
  const shapes = baseShapes.map((s, i) => ({
    ...s,
    duration: 15 + (i % 5) * 4, // 15, 19, 23, 27, 31 seconds long loops
    rotDrift: 15 + (i % 3) * 15, // 15, 30, 45 degree rotational sways
    parallaxFactor: (i % 2 === 0 ? 1 : -1) * (20 + (i % 4) * 20), // -80 to 80 shift factor based on index
  }));

  // Track mouse coordinates for interactive parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Apply spring physics for buttery smooth tracking
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    // Normalize coordinates so center of section is 0, edges are -0.5 and 0.5
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / width;
    const y = (e.clientY - top - height / 2) / height;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative w-full bg-[#785EED] py-24 md:py-36 flex items-center justify-center overflow-hidden border-t-2 border-[#1a1a1a]"
    >
      
      {/* Scattered background shapes */}
      <div className="absolute inset-0 z-0">
        {shapes.map((s, i) => <FloatingShape key={i} {...s} mouseX={smoothMouseX} mouseY={smoothMouseY} />)}
      </div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-[90%] max-w-[540px] bg-[#fdfdfd] rounded-[24px] shadow-[0_20px_40px_rgba(0,0,0,0.2)] md:shadow-[0_20px_60px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col mx-auto"
      >
        <div className="px-8 py-12 md:px-12 md:py-16 flex flex-col items-center text-center">
          
          {/* Decorative Logo/Icon */}
          <div className="mb-6 text-[#1a1a1a]">
            {/* Tines uses a distinct geometric logo. Using a stylized hexagon here to fit the vibe. */}
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.6 }}
            >
              <Hexagon size={48} strokeWidth={1.5} className="fill-transparent stroke-[#372b6b] drop-shadow-md" />
            </motion.div>
          </div>

          <h2 className="text-[32px] md:text-[42px] font-serif text-[#1a1a1a] mb-8 leading-[1.1] tracking-tight">
            Built for you,<br />
            powered by RecruiterAI
          </h2>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row w-full items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-[#4C3B8A] text-white px-8 py-3.5 rounded-lg font-medium text-lg hover:bg-[#34275E] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
              Book a demo
            </button>
            <button className="w-full sm:w-auto bg-transparent border border-[#d1c8f1] text-[#4C3B8A] px-8 py-3.5 rounded-lg font-medium text-lg hover:bg-[#f3f0fc] transition-all">
              Sign up free
            </button>
          </div>
        </div>
        
        {/* Card Footer Block */}
        <div className="w-full bg-[#EFEAFE] py-7 px-8 text-center mt-auto border-t border-[#d8cdfa]/50">
           <p className="text-[#5F4CA6] font-medium text-[15px]">
             Already have an account?{" "}
             <a href="#" className="font-bold underline decoration-[#5F4CA6]/40 underline-offset-4 hover:decoration-[#5F4CA6] transition-colors">
               Log in
             </a>.
           </p>
        </div>
      </motion.div>
    </section>
  );
}
