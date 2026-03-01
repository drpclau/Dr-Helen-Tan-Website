import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, GraduationCap, Activity, Users, Globe } from 'lucide-react';

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
    <div className="pt-24 bg-eye-dark min-h-screen">

      {/* Page header */}
      <div className="max-w-7xl mx-auto px-6 py-16 border-b border-white/5">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="text-eye-cyan font-bold tracking-widest uppercase text-xs mb-4 block">
            Consultant Ophthalmologist
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
            About <span className="italic">Dr. Helen Tan</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            A career defined by clinical precision, a commitment to education, and a deep belief
            that quality eye care should reach everyone.
          </p>
        </motion.div>
      </div>

      {/* Main bio + qualifications */}
      <section className="py-20 bg-eye-dark relative overflow-hidden">
        <div className="absolute -left-40 top-20 w-80 h-80 bg-eye-blue/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6 text-gray-300 font-light leading-relaxed text-lg mb-10">
                <p>
                  Dr. Helen Tan is a distinguished Consultant Ophthalmologist with a career defined by
                  clinical precision and a passion for education. She earned her medical degree from USM
                  in 2001 and her Master of Ophthalmology from UM in 2009.
                </p>
                <p>
                  Her extensive service within the Ministry of Health Malaysia has been recognised with
                  the Excellent Service Award. Beyond her clinical practice, she is a dedicated educator,
                  having served as an Honorary Lecturer, and remains actively involved in community eye
                  health initiatives.
                </p>
                <p>
                  {/* PLACEHOLDER — Add more biographical content here */}
                  Dr. Tan brings subspecialty expertise in cataract and refractive surgery, with
                  particular interest in SMILE Pro, premium IOL implantation, and paediatric myopia management.
                  She practices at KPJ Centre For Sight (KL and Rawang) and The Tun Hussein Onn National
                  Eye Hospital in Petaling Jaya.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <Award className="w-6 h-6 text-eye-cyan shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Recognition</h4>
                    <p className="text-sm text-gray-400">MOH Excellent Service Award recipient.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <BookOpen className="w-6 h-6 text-eye-cyan shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Education</h4>
                    <p className="text-sm text-gray-400">Former Honorary Lecturer & Community Health Advocate.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <Users className="w-6 h-6 text-eye-cyan shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Community</h4>
                    <p className="text-sm text-gray-400">Volunteer surgeon with Tzu Chi TIMA missions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <Globe className="w-6 h-6 text-eye-cyan shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Outreach</h4>
                    <p className="text-sm text-gray-400">Cambodia and Miri international missions.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Qualifications */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative bg-gradient-to-br from-white/5 to-transparent p-8 md:p-10 rounded-3xl border border-white/10 backdrop-blur-sm mb-8">
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
                      transition={{ delay: 0.3 + index * 0.1 }}
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
                  <div className="mt-2 flex gap-4 text-sm text-gray-500">
                    <span>MMC No: 38094</span>
                    <span>·</span>
                    <span>NSR No: 128327</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-eye-mid">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif mb-16 text-center"
          >
            Career Milestones
          </motion.h2>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-eye-cyan/50 via-eye-cyan/20 to-transparent" />
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-8 mb-8 relative"
              >
                <div className="w-16 shrink-0 flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-eye-cyan mt-1.5 relative z-10" />
                  <span className="text-xs text-eye-cyan font-bold mt-2 text-center">{item.year}</span>
                </div>
                <div className="pb-8 border-b border-white/5 flex-1">
                  <p className="text-gray-300">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
