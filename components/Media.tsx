import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, FileText, ExternalLink } from 'lucide-react';

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
                <a 
                    href="https://www.sinardaily.my/article/216843/focus/national/younger-people-at-risk-of-losing-close-up-vision-due-to-gadget-use---doctor" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block h-full flex flex-col"
                >
                    <div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-white/10 group-hover:border-eye-cyan/30 transition-colors">
                        {/* Source Tag */}
                        <div className="absolute top-3 left-3 z-20">
                            <span className="bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded border border-white/10 uppercase tracking-widest font-bold">
                                Sinar Daily
                            </span>
                        </div>

                        <img 
                            src="https://picsum.photos/seed/tech/600/400" 
                            alt="Article Thumbnail" 
                            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
                        />
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                             <div className="flex items-center gap-2 text-white/90 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <span className="text-xs font-bold border-b border-eye-cyan pb-0.5 text-eye-cyan">READ ARTICLE</span>
                                <ExternalLink size={12} className="text-eye-cyan" />
                           </div>
                        </div>
                    </div>
                    
                    <span className="text-xs text-eye-cyan font-bold tracking-wider uppercase">In The News</span>
                    <h3 className="text-xl font-serif mt-2 mb-3 group-hover:text-eye-cyan transition-colors leading-snug">
                        Younger people at risk of losing close-up vision due to gadget use
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                        "Prolonged use of electronic devices is causing premature presbyopia symptoms in younger generations." — Dr. Helen Tan discusses digital eye strain.
                    </p>
                </a>
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