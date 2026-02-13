import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, FileText } from 'lucide-react';

const Media: React.FC = () => {
  return (
    <section id="media" className="py-24 bg-eye-dark">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 flex items-center gap-4"
        >
             <h2 className="text-3xl md:text-4xl font-serif">Media & Insights</h2>
             <div className="h-[1px] flex-1 bg-white/10" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
            >
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                    <img src="https://picsum.photos/600/400" alt="Video thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <PlayCircle size={48} className="text-white" />
                    </div>
                </div>
                <span className="text-xs text-eye-cyan font-bold tracking-wider uppercase">Video</span>
                <h3 className="text-xl font-serif mt-2 group-hover:text-eye-cyan transition-colors">Understanding Cataracts</h3>
            </motion.div>

             <motion.div 
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
            >
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-white/5 p-6 flex flex-col justify-between border border-white/10">
                    <FileText size={32} className="text-gray-500" />
                    <div className="w-full h-1 bg-gradient-to-r from-eye-blue to-transparent" />
                </div>
                <span className="text-xs text-eye-cyan font-bold tracking-wider uppercase">Article</span>
                <h3 className="text-xl font-serif mt-2 group-hover:text-eye-cyan transition-colors">Advances in Laser Surgery</h3>
            </motion.div>

            <motion.div 
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
            >
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                    <img src="https://picsum.photos/600/401" alt="Interview thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                     <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <PlayCircle size={48} className="text-white" />
                    </div>
                </div>
                <span className="text-xs text-eye-cyan font-bold tracking-wider uppercase">Interview</span>
                <h3 className="text-xl font-serif mt-2 group-hover:text-eye-cyan transition-colors">Dr. Helen Tan on CNA</h3>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Media;
