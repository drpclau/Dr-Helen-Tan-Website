import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { PROCEDURES } from '../../constants';
import { Page } from '../../App';

interface ProceduresPageProps {
  onNavigate: (page: Page) => void;
}

const ProceduresPage: React.FC<ProceduresPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 bg-eye-dark min-h-screen">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 py-16 border-b border-white/5">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-eye-cyan font-bold tracking-widest uppercase text-xs mb-4 block">
            Surgical & Non-Surgical
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
            Procedures <span className="italic">& Treatments</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Dr. Helen Tan offers a full range of evidence-based ophthalmic procedures,
            from the latest laser vision correction to advanced cataract surgery.
          </p>
        </motion.div>
      </div>

      {/* SMILE Pro — featured */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-eye-blue/5 blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-10 md:p-16 rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-eye-blue/20 to-eye-cyan/10" />
            <div className="absolute inset-0 bg-eye-dark/60 backdrop-blur-3xl" />
            <img
              src="https://picsum.photos/1200/600?grayscale&blur=2"
              alt="SMILE Pro procedure"
              className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
            />
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block py-1 px-3 rounded text-xs font-bold bg-eye-cyan/20 text-eye-cyan mb-6 tracking-widest uppercase">
                  Signature Procedure
                </span>
                <h2 className="text-5xl md:text-6xl font-serif mb-4 text-white">SMILE Pro</h2>
                <p className="text-gray-400 text-sm italic mb-6">Small Incision Lenticule Extraction</p>
                <p className="text-gray-200 leading-relaxed mb-8">
                  The latest evolution in laser vision correction. SMILE Pro is a minimally invasive,
                  flapless procedure that corrects myopia and astigmatism through a tiny incision.
                  No flap, less disruption to the corneal biomechanics, and a fast, comfortable recovery.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { label: 'Procedure time', value: '~10 min / eye' },
                    { label: 'Flap', value: 'None — flapless' },
                    { label: 'Recovery', value: 'Fast (days)' },
                    { label: 'Dry Eye Risk', value: 'Minimal' },
                  ].map((stat, i) => (
                    <div key={i} className="p-3 rounded-lg bg-white/5 border border-white/10">
                      <div className="text-xs text-gray-500 mb-1">{stat.label}</div>
                      <div className="text-white font-semibold text-sm">{stat.value}</div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => onNavigate('contact')}
                  className="flex items-center gap-2 text-white border-b border-white pb-1 hover:gap-4 transition-all"
                >
                  Book SMILE Pro Consultation <ChevronRight size={18} />
                </button>
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">How It Works</h3>
                {[
                  { step: '01', title: 'Laser maps the cornea', desc: 'The VISUMAX laser system creates a precise 3D map of your corneal tissue.' },
                  { step: '02', title: 'Lenticule created', desc: 'A tiny, precise disc of corneal tissue (lenticule) is created within the cornea.' },
                  { step: '03', title: 'Extraction through micro-incision', desc: 'The lenticule is removed through a 2–3mm incision — no flap required.' },
                  { step: '04', title: 'Vision correction complete', desc: 'Removing the lenticule reshapes the cornea, correcting your prescription.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-eye-cyan font-bold font-serif text-lg shrink-0">{item.step}</span>
                    <div>
                      <h4 className="text-white text-sm font-semibold mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All other procedures */}
      <section className="py-20 bg-eye-dark">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif mb-12"
          >
            All Procedures
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROCEDURES.map((proc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`p-8 rounded-2xl border transition-all duration-300 ${
                  proc.isSpecialInterest
                    ? 'border-eye-cyan/30 bg-eye-cyan/5 hover:bg-eye-cyan/10'
                    : 'border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20'
                }`}
              >
                {proc.isSpecialInterest && (
                  <span className="inline-block text-xs font-bold bg-eye-cyan/20 text-eye-cyan px-2 py-0.5 rounded mb-4 uppercase tracking-widest">
                    Specialist Procedure
                  </span>
                )}
                <h3 className="text-2xl font-serif text-white mb-3">{proc.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{proc.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-op assessment info */}
      <section className="py-16 bg-eye-mid border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-serif mb-6">Pre-Operative Assessment</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Before any surgical procedure, Dr. Helen Tan performs a comprehensive pre-operative assessment
                to ensure you are a suitable candidate and to plan the procedure precisely for your eyes.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Assessments typically include visual acuity testing, corneal topography and pachymetry,
                pupil measurement, intraocular pressure measurement, and a full dilated fundus examination.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">What to Expect</h3>
              <ul className="space-y-3">
                {[
                  'Assessment appointment: allow 1–2 hours',
                  'Contact lens wearers: stop wearing soft lenses 1 week before, rigid lenses 2 weeks before',
                  'Bring your current spectacles prescription',
                  'Arrange transport — your pupils may be dilated after assessment',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ChevronRight size={14} className="text-eye-cyan shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-400">{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => onNavigate('contact')}
                className="mt-6 w-full py-3 bg-eye-cyan text-black font-bold rounded-xl hover:bg-cyan-300 transition-colors text-sm"
              >
                Schedule Assessment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="bg-black py-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs text-gray-600 leading-relaxed max-w-3xl">
            <strong className="text-gray-500">Medical Disclaimer:</strong> Procedure suitability varies by individual. Information on this page is for general informational purposes only and does not constitute medical advice. Surgical outcomes cannot be guaranteed. Always consult a qualified medical professional. Compliant with MMC Ethical Code and PDPA 2010.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProceduresPage;
