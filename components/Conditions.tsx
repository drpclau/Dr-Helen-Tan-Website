import React from 'react';
import { motion } from 'framer-motion';
import { CONDITIONS } from '../constants';
import { Activity, Eye, Focus, ShieldAlert, Sparkles, Sun } from 'lucide-react';

const icons = [Sun, Focus, Activity, Sparkles, ShieldAlert, Eye];

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
            const Icon = icons[index % icons.length];
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
                    <Icon size={24} />
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
