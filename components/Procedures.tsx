import React from 'react';
import { motion } from 'framer-motion';
import { PROCEDURES } from '../constants';
import { ChevronRight } from 'lucide-react';

const Procedures: React.FC = () => {
  return (
    <section id="procedures" className="py-24 bg-black relative">
       {/* Ambient Light */}
       <div className="absolute top-1/2 left-0 w-1/3 h-full bg-blue-900/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl md:text-6xl font-serif mb-4">Surgical Excellence</h2>
                <p className="text-gray-400">Advanced technology meets surgical precision.</p>
            </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Highlighted Special Procedure */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="lg:col-span-2 relative p-10 md:p-14 rounded-3xl overflow-hidden group"
            >
                 <div className="absolute inset-0 bg-gradient-to-br from-eye-blue/20 to-eye-cyan/10 group-hover:opacity-100 transition-opacity duration-700" />
                 <div className="absolute inset-0 bg-eye-dark/40 backdrop-blur-3xl -z-10" />
                 <img 
                    src="https://picsum.photos/1200/600?grayscale&blur=2" 
                    alt="SMILE Procedure" 
                    className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay group-hover:scale-105 transition-transform duration-1000"
                 />
                 
                 <div className="relative z-10 max-w-2xl">
                    <span className="inline-block py-1 px-3 rounded text-xs font-bold bg-eye-cyan/20 text-eye-cyan mb-6 tracking-widest uppercase">
                        Signature Procedure
                    </span>
                    <h3 className="text-4xl md:text-6xl font-serif mb-6 text-white">
                        SMILE Pro
                    </h3>
                    <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                        Small Incision Lenticule Extraction. Experience the next generation of laser vision correction. 
                        Minimally invasive, flapless, and fast recovery.
                    </p>
                    <button className="flex items-center gap-2 text-white border-b border-white pb-1 hover:gap-4 transition-all">
                        Learn about SMILE <ChevronRight size={18} />
                    </button>
                 </div>
            </motion.div>

            {/* Other Procedures List */}
            {PROCEDURES.slice(1).map((proc, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                >
                    <h4 className="text-2xl font-serif text-white mb-3">{proc.title}</h4>
                    <p className="text-gray-400">{proc.description}</p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Procedures;
