import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ChevronRight, Award, Heart, ExternalLink } from 'lucide-react';
import { Page } from '../../App';
import { CONDITIONS, PROCEDURES, SOCIAL_CONTRIBUTIONS } from '../../constants';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

// ── Custom SVG Icons (preserved from original) ──────────────────────────
const CataractIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
    <path d="M10 14L14 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M9 11L11 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M13 15L15 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const RefractiveIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M2 14C2 14 6 7 12 7C18 7 22 14 22 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M2 14C2 14 6 21 12 21C18 21 22 14 22 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="14" r="4" stroke="currentColor" strokeWidth="2"/>
    <rect x="7" y="2" width="10" height="4" rx="1" stroke="currentColor" strokeWidth="2"/>
    <path d="M11 6V8H13V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 8V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const GlaucomaIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M2 12C2 12 5 5 12 5C15 5 18 6 20 8L22 8V16L20 16C18 18 15 19 12 19C5 19 2 12 2 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11 9V7M11 7L9 8M11 7L13 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11 15V17M11 17L9 16M11 17L13 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 12H16M16 12L15 10M16 12L15 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 10C19 11 19 13 18 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const ChildrenEyeIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="7" cy="14" r="4" stroke="currentColor" strokeWidth="2"/>
    <circle cx="17" cy="14" r="4" stroke="currentColor" strokeWidth="2"/>
    <path d="M11 14C11 14 12 13 13 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M4 11L6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M20 11L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const DryEyeIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 2H16V5H8V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 5V7C10 8.10457 10.8954 9 12 9C13.1046 9 14 8.10457 14 7V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const PterygiumIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
    <path d="M22 12C20 11 18 10.5 16 11C15 11.5 14.5 12 14.5 12.5C14.5 13 15 13.5 16 14C18 14.5 20 14 22 12Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const conditionIcons = [CataractIcon, RefractiveIcon, GlaucomaIcon, ChildrenEyeIcon, DryEyeIcon, PterygiumIcon];

// Map conditions to their detail pages
const conditionPages: Record<string, Page> = {
  'Cataracts': 'condition-cataracts',
  'Refractive Errors': 'condition-refractive-errors',
  'Glaucoma': 'condition-glaucoma',
};

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-eye-dark">
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="w-full h-full"
          >
            <img
              src="https://i.imgur.com/XyzhtGf.jpeg"
              alt="Dr. Helen Tan — Consultant Ophthalmologist"
              className="w-full h-full object-cover object-[center_20%] md:object-right"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-eye-dark via-eye-dark/70 to-transparent md:hidden" />
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-eye-dark via-eye-dark/40 to-transparent w-[80%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-eye-dark via-transparent to-transparent opacity-60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col justify-center min-h-screen">
          <div className="md:w-1/2 lg:w-[55%] text-center md:text-left pt-20 md:pt-0">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <span className="inline-block py-1 px-3 rounded-full bg-eye-cyan/10 border border-eye-cyan/20 text-xs font-bold tracking-[0.2em] text-eye-cyan mb-6 uppercase backdrop-blur-md">
                Ophthalmology · Kuala Lumpur
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-tight mb-8"
            >
              <span className="block text-white drop-shadow-lg">Clarity.</span>
              <span className="block text-white/90 italic drop-shadow-lg">Precision. Vision.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 font-light drop-shadow-md max-w-xl mx-auto md:mx-0"
            >
              Dr. Helen Tan is a Consultant Ophthalmologist with over 20 years of experience in advanced
              cataract and refractive surgery, dedicated to restoring vision through evidence-based care.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col md:flex-row gap-4 justify-center md:justify-start items-center"
            >
              <button
                onClick={() => onNavigate('conditions')}
                className="px-8 py-4 bg-white text-eye-dark font-semibold rounded-full hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] min-w-[180px]"
              >
                Conditions
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-colors backdrop-blur-sm min-w-[180px]"
              >
                Book Visit
              </button>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 animate-bounce z-10"
        >
          <ArrowDown size={24} />
        </motion.div>
      </section>

      {/* ── ABOUT STRIP ──────────────────────────────────────────────── */}
      <section className="py-20 bg-eye-mid border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '20+', label: 'Years of Practice' },
              { value: '3', label: 'Clinical Locations' },
              { value: 'SMILE Pro', label: 'Signature Procedure' },
              { value: 'MOH Award', label: 'Excellent Service' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-serif text-eye-cyan mb-2">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONDITIONS PREVIEW ───────────────────────────────────────── */}
      <section className="py-24 bg-eye-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div>
              <span className="text-eye-cyan font-bold tracking-widest uppercase text-xs mb-3 block">Comprehensive Eye Care</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-4">Conditions Treated</h2>
              <div className="w-16 h-0.5 bg-eye-cyan/50" />
            </div>
            <button
              onClick={() => onNavigate('conditions')}
              className="flex items-center gap-2 text-eye-cyan text-sm hover:gap-4 transition-all"
            >
              View all conditions <ChevronRight size={16} />
            </button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CONDITIONS.map((condition, index) => {
              const IconComp = conditionIcons[index % conditionIcons.length];
              const detailPage = conditionPages[condition.title];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  onClick={() => detailPage && onNavigate(detailPage)}
                  className={`group relative p-8 rounded-2xl border transition-all duration-500 ${
                    detailPage ? 'cursor-pointer' : 'cursor-default'
                  } ${
                    condition.isMainInterest
                      ? 'border-eye-cyan/30 bg-eye-cyan/5 hover:bg-eye-cyan/10'
                      : 'border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20'
                  }`}
                >
                  {condition.isMainInterest && (
                    <div className="absolute top-4 right-4">
                      <span className="flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-eye-cyan opacity-75" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-eye-cyan" />
                      </span>
                    </div>
                  )}
                  <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 text-eye-cyan group-hover:scale-110 transition-transform duration-300">
                    <IconComp size={24} />
                  </div>
                  <h3 className="text-2xl font-serif mb-3 text-gray-100 group-hover:text-white transition-colors">
                    {condition.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {condition.description}
                  </p>
                  {detailPage && (
                    <div className="mt-4 flex items-center gap-1 text-eye-cyan text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      Read more <ChevronRight size={12} />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROCEDURES PREVIEW ───────────────────────────────────────── */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-1/3 h-full bg-blue-900/10 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div>
              <h2 className="text-4xl md:text-6xl font-serif mb-4">Surgical Excellence</h2>
              <p className="text-gray-400">Advanced technology meets surgical precision.</p>
            </div>
            <button
              onClick={() => onNavigate('procedures')}
              className="flex items-center gap-2 text-eye-cyan text-sm hover:gap-4 transition-all"
            >
              View all procedures <ChevronRight size={16} />
            </button>
          </motion.div>

          {/* SMILE Pro hero card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-10 md:p-14 rounded-3xl overflow-hidden group mb-8 cursor-pointer"
            onClick={() => onNavigate('procedures')}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-eye-blue/20 to-eye-cyan/10" />
            <div className="absolute inset-0 bg-eye-dark/40 backdrop-blur-3xl -z-10" />
            <img
              src="https://picsum.photos/1200/600?grayscale&blur=2"
              alt="SMILE Pro laser vision correction"
              className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="relative z-10 max-w-2xl">
              <span className="inline-block py-1 px-3 rounded text-xs font-bold bg-eye-cyan/20 text-eye-cyan mb-6 tracking-widest uppercase">
                Signature Procedure
              </span>
              <h3 className="text-4xl md:text-6xl font-serif mb-6 text-white">SMILE Pro</h3>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Small Incision Lenticule Extraction. The next generation of laser vision correction —
                minimally invasive, flapless, and fast recovery.
              </p>
              <div className="flex items-center gap-2 text-white border-b border-white pb-1 w-fit hover:gap-4 transition-all">
                Learn about SMILE <ChevronRight size={18} />
              </div>
            </div>
          </motion.div>

          {/* Other procedures */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                <p className="text-gray-400 text-sm leading-relaxed">{proc.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL CONTRIBUTIONS ─────────────────────────────────────── */}
      <section className="py-24 bg-[#0d0d10] relative overflow-hidden">
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

      {/* ── MEDIA PREVIEW ────────────────────────────────────────────── */}
      <section className="py-24 bg-eye-dark">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 flex items-center gap-4"
          >
            <h2 className="text-3xl md:text-4xl font-serif whitespace-nowrap">Media & Insights</h2>
            <div className="h-px flex-1 bg-white/10" />
            <button
              onClick={() => onNavigate('media')}
              className="flex items-center gap-1 text-eye-cyan text-sm hover:gap-3 transition-all whitespace-nowrap"
            >
              View all <ChevronRight size={14} />
            </button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                source: 'Sinar Daily',
                sourceBg: 'bg-black/60',
                href: 'https://www.sinardaily.my/article/216843/focus/national/younger-people-at-risk-of-losing-close-up-vision-due-to-gadget-use---doctor',
                img: 'https://picsum.photos/seed/tech/600/400',
                label: 'In The News',
                title: 'Younger people at risk of losing close-up vision due to gadget use',
                excerpt: '"Prolonged use of electronic devices is causing premature presbyopia symptoms in younger generations." — Dr. Helen Tan discusses digital eye strain.',
              },
              {
                source: 'Bernama',
                sourceBg: 'bg-blue-600/90',
                href: 'https://www.bernama.com/bm/news.php?id=2284065',
                img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop',
                label: 'Berita Terkini',
                title: 'Rawatan Mata Moden & Penjagaan Kesihatan',
                excerpt: 'Ketahui lebih lanjut mengenai perkembangan terkini dalam bidang oftalmologi dan rawatan mata di Malaysia.',
              },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group block"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-white/10 group-hover:border-eye-cyan/30 transition-colors">
                  <span className={`absolute top-3 left-3 z-20 ${item.sourceBg} backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded border border-white/10 uppercase tracking-widest font-bold`}>
                    {item.source}
                  </span>
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <span className="text-xs text-eye-cyan font-bold tracking-wider uppercase">{item.label}</span>
                <h3 className="text-xl font-serif mt-2 mb-3 group-hover:text-eye-cyan transition-colors leading-snug">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">{item.excerpt}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ────────────────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-b from-eye-dark to-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-serif mb-6 text-white">
              Start Your <span className="text-eye-cyan italic">Journey</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-md mx-auto">
              Ready to see the world with new eyes? Book your consultation today.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="px-10 py-5 bg-eye-cyan text-black font-bold rounded-full hover:bg-cyan-300 transition-colors shadow-[0_0_30px_rgba(6,182,212,0.3)] text-lg"
            >
              Request Appointment
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
