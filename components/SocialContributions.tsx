import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_CONTRIBUTIONS } from '../constants';
import { Heart } from 'lucide-react';

const SocialContributions: React.FC = () => {
  return (
    <section id="social" className="py-24 bg-[#0d0d10] relative overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute -right-20 top-20 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
             <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-eye-accent/10 text-eye-accent mb-6"
             >
                <Heart size={28} fill="currentColor" className="opacity-80" />
             </motion.div>
            <h2 className="text-3xl md:text-5xl font-serif mb-4">Giving Back</h2>
            <p className="text-gray-400">Vision is a gift everyone deserves.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SOCIAL_CONTRIBUTIONS.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="bg-white/[0.03] p-8 rounded-2xl border border-white/5 hover:border-eye-accent/30 transition-colors"
                >
                    <div className="text-sm font-bold text-eye-accent mb-2">{item.date}</div>
                    <h3 className="text-xl font-serif text-white mb-3">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default SocialContributions;
