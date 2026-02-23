import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
        const navbarHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navbarHeight;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-eye-dark">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
         {/* The image itself */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src="https://i.imgur.com/XyzhtGf.jpeg" 
            alt="Dr. Helen Tan"
            className="w-full h-full object-cover object-[center_20%] md:object-right"
          />
        </motion.div>
        
        {/* Layered Gradient Overlay */}
        {/* Mobile: darker to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-eye-dark via-eye-dark/70 to-transparent md:hidden" />
        
        {/* Desktop: Gentle fade from left (solid) to transparent (right) to reveal image */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-eye-dark via-eye-dark/40 to-transparent w-[80%]" />
        
        {/* Bottom fade for smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-eye-dark via-transparent to-transparent opacity-60" />
      </div>

      {/* Decorative Tints for 'Layered' feel */}
      <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-eye-blue/5 mix-blend-overlay opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full h-full flex flex-col justify-center min-h-screen">
        <div className="md:w-1/2 lg:w-[55%] text-center md:text-left pt-20 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-eye-cyan/10 border border-eye-cyan/20 text-xs font-bold tracking-[0.2em] text-eye-cyan mb-6 uppercase backdrop-blur-md">
              Ophthalmology Redefined
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-tight mb-8"
          >
            <span className="block text-white drop-shadow-lg">
              Clarity.
            </span>
            <span className="block text-white/90 italic drop-shadow-lg">Precision. Vision.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 font-light drop-shadow-md max-w-xl mx-auto md:mx-0"
          >
            Dr. Helen Tan is a Consultant Ophthalmologist with over 20 years of experience in advanced cataract and refractive surgery, dedicated to restoring vision through evidence-based care.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col md:flex-row gap-6 justify-center md:justify-start items-center"
          >
            <a
              href="#conditions"
              onClick={(e) => handleScrollTo(e, '#conditions')}
              className="px-8 py-4 bg-white text-eye-dark font-semibold rounded-full hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] min-w-[180px] text-center cursor-pointer"
            >
              Treatments
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-colors backdrop-blur-sm min-w-[180px] text-center cursor-pointer"
            >
              Book Visit
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 animate-bounce z-10"
      >
        <a href="#conditions" onClick={(e) => handleScrollTo(e, '#conditions')} className="cursor-pointer block p-2">
            <ArrowDown size={24} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;