import React from 'react';
import { motion } from 'framer-motion';
import { CONDITIONS } from '../constants';
import { Activity, Eye, Focus, Droplets, Sparkles, Sun } from 'lucide-react';

const CataractIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
    <path d="M10 14L14 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M9 11L11 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M13 15L15 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const DryEyeIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Eye shape */}
    <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
    
    {/* Dropper */}
    <path d="M8 2H16V5H8V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 5V7C10 8.10457 10.8954 9 12 9C13.1046 9 14 8.10457 14 7V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    
    {/* Teardrop */}
    <path d="M12 11C12 11 9 14 9 16C9 17.6569 10.3431 19 12 19C13.6569 19 15 17.6569 15 16C15 14 12 11 12 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChildrenEyeIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Round Lenses */}
    <circle cx="7" cy="14" r="4" stroke="currentColor" strokeWidth="2"/>
    <circle cx="17" cy="14" r="4" stroke="currentColor" strokeWidth="2"/>
    {/* Bridge */}
    <path d="M11 14C11 14 12 13 13 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    {/* Temples (Arms) */}
    <path d="M4 11L6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M20 11L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const RefractiveIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Eye shape */}
    <path d="M2 14C2 14 6 7 12 7C18 7 22 14 22 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M2 14C2 14 6 21 12 21C18 21 22 14 22 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="14" r="4" stroke="currentColor" strokeWidth="2"/>
    
    {/* Laser Device */}
    <rect x="7" y="2" width="10" height="4" rx="1" stroke="currentColor" strokeWidth="2"/>
    <path d="M11 6V8H13V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    
    {/* Laser Beam */}
    <path d="M12 8V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const GlaucomaIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Eye side profile */}
    <path d="M2 12C2 12 5 5 12 5C15 5 18 6 20 8L22 8V16L20 16C18 18 15 19 12 19C5 19 2 12 2 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    
    {/* Pressure arrows */}
    <path d="M11 9V7M11 7L9 8M11 7L13 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11 15V17M11 17L9 16M11 17L13 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 12H16M16 12L15 10M16 12L15 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    
    {/* Optic nerve area */}
    <path d="M18 10C19 11 19 13 18 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const PterygiumIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Eye shape */}
    <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Iris */}
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
    {/* Pterygium growth from the side */}
    <path d="M22 12C20 11 18 10.5 16 11C15 11.5 14.5 12 14.5 12.5C14.5 13 15 13.5 16 14C18 14.5 20 14 22 12Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const icons = [
  CataractIcon, 
  RefractiveIcon, 
  GlaucomaIcon, 
  ChildrenEyeIcon, 
  DryEyeIcon, 
  PterygiumIcon
];

const Conditions: React.FC = () => {
  return (
    <section id="conditions" className="py-24 bg-eye-dark relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Conditions Treated</h2>
          <div className="w-20 h-1 bg-eye-cyan/50 mb-6" />
          <p className="text-gray-400 max-w-xl text-lg">
            Comprehensive eye care with a special focus on restorative and corrective surgery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONDITIONS.map((condition, index) => {
            const IconOrImage = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative p-8 rounded-2xl border ${
                  condition.isMainInterest
                    ? 'border-eye-cyan/30 bg-eye-cyan/5'
                    : 'border-white/5 bg-white/[0.02]'
                } hover:bg-white/[0.05] transition-all duration-500 hover:border-white/20`}
              >
                {condition.isMainInterest && (
                  <div className="absolute top-4 right-4">
                    <span className="flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-eye-cyan opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-eye-cyan"></span>
                    </span>
                  </div>
                )}
                
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 text-eye-cyan group-hover:scale-110 transition-transform duration-300">
                    <IconOrImage size={24} />
                </div>

                <h3 className="text-2xl font-serif mb-4 text-gray-100 group-hover:text-white transition-colors">
                  {condition.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {condition.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Conditions;