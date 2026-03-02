import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, GraduationCap, Activity, Users, Globe, ChevronRight } from 'lucide-react';

const AboutPage: React.FC = () => {
  const qualifications = [
    'MD (Universiti Sains Malaysia)',
    'MS Ophthal (Universiti Malaya)',
    'PgDip Cataract & Refractive Surgery (Distinction, UK)',
    'AM (Academy of Medicine, Malaysia)',
  ];

  const timeline = [
    { year: '2001', event: 'Medical degree, Universiti Sains Malaysia' },
    { year: '2009', event: 'Master of Ophthalmology, Universiti Malaya' },
    { year: '2010s', event: 'Extensive MOH service — Excellent Service Award recipient' },
    { year: '2019', event: 'Volunteer surgeon, Tzu Chi TIMA missions — Cambodia & Miri' },
    { year: '2021', event: 'School Eye Health screening programmes launched' },
    { year: '2023', event: 'Vision for All — annual free cataract surgery camp' },
    { year: 'Present', event: 'Consultant Ophthalmologist, KPJ Centre For Sight & THONEH' },
  ];

  return (
    <div className="bg-eye-dark min-h-screen">
      
      {/* ── HERO SECTION WITH BLENDED IMAGE ───────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
        
        {/* Background Image Layer */}
        <div className="absolute top-0 right-0 w-full lg:w-[58%] h-full z-0">
          <div className="relative h-full w-full">
            <img 
              src="https://i.imgur.com/zknS5aN.jpeg" 
              alt="Dr. Helen Tan" 
              className="w-full h-full object-cover object-top opacity-100"
            />
            {/* Gradient Overlays for "Blending" Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-eye-dark via-eye-dark/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-eye-dark via-eye-dark/20 to-transparent" />
            <div className="absolute inset-0 bg-eye-blue/10 mix-blend-overlay" />
          </div>
        </div>

        {/* Content Layer */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:pr-12"
            >
              <span className="inline-block py-1 px-3 rounded-full bg-eye-cyan/10 border border-eye-cyan/20 text-xs font-bold tracking-widest text-eye-cyan mb-6 uppercase">
                Consultant Ophthalmologist
              </span>
              <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight">
                Dr. Helen <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 italic">Tan</span>
              </h1>
              
              <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed mb-10">
                <p>
                  A career defined by clinical precision, a commitment to education, and a deep belief
                  that quality eye care should reach everyone.
                </p>
                <p>
                  Dr. Helen Tan brings over 20 years of experience to her practice, combining subspecialty expertise 
                  in cataract and refractive surgery with a warm, patient-centered approach.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                  <Award size={16} className="text-eye-cyan" />
                  <span className="text-sm text-white">MOH Excellent Service Award</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                  <Globe size={16} className="text-eye-cyan" />
                  <span className="text-sm text-white">TIMA Volunteer Surgeon</span>
                </div>
              </div>
            </motion.div>

            {/* Empty column to push content left, allowing image to show on right */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </section>

      {/* ── QUALIFICATIONS & BIO ──────────────────────────────────────── */}
      <section className="py-20 bg-eye-mid relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Bio Text */}
            <div className="lg:col-span-7 space-y-8 text-gray-400 leading-relaxed">
              <h3 className="text-2xl font-serif text-white mb-4">Clinical Excellence & Compassion</h3>
              <p>
                Dr. Tan earned her medical degree from Universiti Sains Malaysia in 2001 and completed her 
                Master of Ophthalmology at Universiti Malaya in 2009. Her journey in ophthalmology has been 
                marked by a dedication to mastering advanced surgical techniques, particularly in the fields 
                of cataract and refractive surgery.
              </p>
              <p>
                She is a strong advocate for community health, regularly organizing and participating in 
                outreach programs. From school eye health screenings in local districts to international 
                surgical missions in Cambodia, Dr. Tan believes that vision is a fundamental right.
              </p>
              <p>
                Currently practicing at KPJ Centre For Sight (KL and Rawang) and The Tun Hussein Onn National 
                Eye Hospital, she continues to mentor junior ophthalmologists and medical staff, sharing her 
                knowledge to raise the standard of eye care in Malaysia.
              </p>
            </div>

            {/* Qualifications Card */}
            <div className="lg:col-span-5">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-eye-cyan/10 rounded-full blur-3xl -mr-10 -mt-10" />
                
                <div className="flex items-center gap-3 mb-8 relative z-10">
                  <div className="p-3 rounded-xl bg-eye-cyan/10 text-eye-cyan">
                    <GraduationCap size={24} />
                  </div>
                  <h3 className="text-xl font-serif text-white">Credentials</h3>
                </div>

                <ul className="space-y-6 relative z-10">
                  {qualifications.map((qual, index) => (
                    <li key={index} className="flex gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-eye-cyan mt-2.5 shrink-0" />
                      <span className="text-gray-300 text-sm">{qual}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-8 border-t border-white/10 flex gap-6">
                   <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">MMC No</div>
                      <div className="text-white font-mono">38094</div>
                   </div>
                   <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">NSR No</div>
                      <div className="text-white font-mono">128327</div>
                   </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ── TIMELINE ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-eye-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-eye-cyan font-bold tracking-widest uppercase text-xs mb-3 block">Journey</span>
              <h2 className="text-4xl md:text-5xl font-serif text-white">Career Milestones</h2>
            </div>
            <div className="h-px bg-white/10 flex-1 ml-8 hidden md:block mb-4" />
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-eye-cyan/50 via-white/10 to-transparent" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex flex-col md:flex-row gap-8 items-start md:items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Content Side */}
                  <div className={`pl-12 md:pl-0 md:w-1/2 ${i % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                    <div className="text-xl text-white font-serif mb-2">{item.year}</div>
                    <p className="text-gray-400 text-sm">{item.event}</p>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-[5px] w-2.5 h-2.5 rounded-full bg-eye-dark border-2 border-eye-cyan z-10" />
                  
                  {/* Empty Side for Balance */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
