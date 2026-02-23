import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, GraduationCap, Activity } from 'lucide-react';

const About: React.FC = () => {
  const qualifications = [
    "MD (Universiti Sains Malaysia)",
    "MS Ophthal (Universiti Malaya)",
    "PgDip Cataract & Refractive Surgery (Distinction, UK)",
    "AM (Academy of Medicine, Malaysia)"
  ];

  return (
    <section id="about" className="py-24 bg-eye-dark relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute -left-40 top-20 w-80 h-80 bg-eye-blue/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-eye-cyan font-bold tracking-widest uppercase text-xs mb-4 block">
              About Dr. Helen Tan
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
              Dedicated to <span className="italic text-eye-blue">Comprehensive</span> Eye Care
            </h2>
            
            <div className="space-y-6 text-gray-300 font-light leading-relaxed text-lg">
              <p>
                Dr. Helen Tan is a distinguished Consultant Ophthalmologist with a career defined by clinical precision and a passion for education. She earned her medical degree from USM in 2001 and her Master of Ophthalmology from UM in 2009.
              </p>
              <p>
                Her extensive service within the Ministry of Health Malaysia has been recognized with the Excellent Service Award. Beyond her clinical practice, she is a dedicated educator, having served as an Honorary Lecturer, and remains actively involved in community eye health initiatives.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <Award className="w-6 h-6 text-eye-cyan shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Recognition</h4>
                    <p className="text-sm text-gray-400">Recipient of the Ministry of Health Excellent Service Award.</p>
                  </div>
               </div>
               <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <BookOpen className="w-6 h-6 text-eye-cyan shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Education</h4>
                    <p className="text-sm text-gray-400">Former Honorary Lecturer & Community Health Advocate.</p>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Qualifications Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-white/5 to-transparent p-8 md:p-10 rounded-3xl border border-white/10 backdrop-blur-sm">
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-eye-cyan/20 rounded-full blur-xl" />
              
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="w-8 h-8 text-eye-cyan" />
                <h3 className="text-2xl font-serif text-white">Qualifications</h3>
              </div>

              <ul className="space-y-6">
                {qualifications.map((qual, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-eye-cyan mt-2.5 group-hover:scale-150 transition-transform" />
                    <span className="text-gray-300 group-hover:text-white transition-colors text-lg font-light">
                      {qual}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-10 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3 text-eye-blue">
                  <Activity className="w-5 h-5" />
                  <span className="text-sm font-medium tracking-wide uppercase">20+ Years of Practice</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
