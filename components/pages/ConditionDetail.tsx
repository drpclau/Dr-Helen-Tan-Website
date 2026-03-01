import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, AlertCircle, CheckCircle, Calendar } from 'lucide-react';
import { Page } from '../../App';

interface ConditionDetailProps {
  slug: 'cataracts' | 'refractive-errors' | 'glaucoma';
  onNavigate: (page: Page) => void;
}

// ── CONTENT DATA ─────────────────────────────────────────────────────────
const CONDITIONS_DATA = {
  cataracts: {
    title: 'Cataracts',
    subtitle: 'Understanding & Treating Cloudy Vision',
    metaDesc: 'Dr. Helen Tan explains cataracts — clouding of the eye\'s lens, symptoms, causes, and advanced surgical treatment in Kuala Lumpur.',
    heroLabel: 'Cataract Surgery KL',
    intro: `A cataract is a clouding of the natural lens inside the eye, which sits behind the iris and the pupil. The lens works much like a camera lens — it focuses light onto the retina at the back of the eye and adjusts the eye's focus. The lens is made of mostly water and protein, and the protein can clump together and start to cloud a small area of the lens. This is a cataract, and over time it may grow larger and cloud more of the lens, making it harder to see.`,
    sections: [
      {
        title: 'Who Gets Cataracts?',
        content: `Cataracts are most commonly an age-related condition — the majority of people over 60 have some degree of cataract. However, they can also develop earlier due to diabetes, prolonged steroid use, eye injury, or as a congenital condition present from birth. In Malaysia, with a rapidly ageing population, cataracts are the leading cause of reversible blindness.`,
        bullets: [
          'Age-related: most common after age 60',
          'Diabetic cataracts: associated with poorly controlled blood sugar',
          'Steroid-induced: from long-term corticosteroid use',
          'Traumatic: following eye injury',
          'Congenital: present from birth or developing in early childhood',
        ],
      },
      {
        title: 'Symptoms to Watch For',
        content: `Cataracts develop slowly and often without pain. Many people do not realise they have a cataract until their vision has deteriorated significantly. Common symptoms include:`,
        bullets: [
          'Cloudy, blurry, or dim vision — like looking through a frosted window',
          'Increasing difficulty seeing at night',
          'Sensitivity to light and glare, especially from headlights while driving',
          'Seeing halos around lights',
          'Frequent changes in eyeglass or contact lens prescription',
          'Fading or yellowing of colours',
          'Double vision in a single eye',
        ],
      },
      {
        title: 'Diagnosis',
        content: `Cataracts are diagnosed through a comprehensive eye examination, which Dr. Helen Tan performs as a standard part of any ophthalmic consultation. The examination includes visual acuity testing, slit-lamp examination, and retinal assessment to confirm the diagnosis and plan the appropriate surgical approach.`,
        bullets: null,
      },
      {
        title: 'Treatment: Phacoemulsification Surgery',
        content: `The only effective treatment for cataracts is surgery. Dr. Helen Tan performs phacoemulsification — the gold standard for cataract removal. In this procedure, a small incision is made in the eye, an ultrasonic probe breaks up the cloudy lens into tiny pieces, and the fragments are gently suctioned away. A clear, artificial intraocular lens (IOL) is then implanted to restore vision.`,
        bullets: [
          'Procedure takes approximately 15–20 minutes per eye',
          'Performed under local anaesthesia — no general anaesthetic required',
          'Day surgery — patients go home the same day',
          'Recovery is rapid — most patients see improvement within 24–48 hours',
          'Premium IOL options available: monofocal, multifocal, toric (for astigmatism)',
        ],
      },
      {
        title: 'Premium Intraocular Lens (IOL) Options',
        content: `One of the most significant decisions in cataract surgery is the choice of replacement lens. Dr. Helen Tan offers a full range of premium IOLs tailored to each patient's lifestyle and visual needs:`,
        bullets: [
          'Monofocal IOLs — excellent distance vision; reading glasses may still be needed',
          'Multifocal IOLs — designed to reduce or eliminate dependence on glasses for most distances',
          'Extended Depth of Focus (EDOF) IOLs — continuous range of clear vision with fewer halos',
          'Toric IOLs — correct pre-existing astigmatism at the same time as cataract removal',
        ],
      },
    ],
    faq: [
      { q: 'How do I know if I need cataract surgery?', a: 'Surgery is recommended when cataracts begin to interfere with daily activities — driving, reading, watching television. There is no medical requirement to wait until the cataract is "ripe". The best time is when your vision impairs your quality of life.' },
      { q: 'Is cataract surgery safe?', a: 'Phacoemulsification is one of the safest and most commonly performed surgical procedures in the world. As with any surgery, risks exist but serious complications are rare in experienced hands.' },
      { q: 'Will I still need glasses after cataract surgery?', a: 'This depends largely on the IOL chosen. With premium multifocal or EDOF IOLs, many patients achieve good uncorrected vision at multiple distances. Your surgeon will discuss the best option based on your eyes and lifestyle.' },
      { q: 'Can both eyes be done at the same time?', a: 'Typically eyes are done separately, one to two weeks apart, to allow the first eye to recover and assess the outcome before proceeding with the second eye.' },
    ],
    bookCTA: 'Book a Cataract Consultation',
  },

  'refractive-errors': {
    title: 'Refractive Errors',
    subtitle: 'Myopia, Hyperopia & Astigmatism — and How to Correct Them',
    metaDesc: 'Dr. Helen Tan explains refractive errors including myopia, hyperopia, and astigmatism, and the surgical correction options available in Kuala Lumpur including SMILE Pro and LASIK.',
    heroLabel: 'Refractive Surgery KL',
    intro: `Refractive errors are the most common cause of visual impairment worldwide and the most common reason people wear glasses or contact lenses. A refractive error occurs when the shape of the eye prevents light from focusing correctly on the retina, resulting in blurred or distorted vision. Malaysia has one of the highest rates of myopia (shortsightedness) in the world — studies suggest over 70% of young Malaysians are affected.`,
    sections: [
      {
        title: 'Types of Refractive Error',
        content: `There are four main types of refractive error, each affecting vision in a different way:`,
        bullets: [
          'Myopia (nearsightedness): distant objects appear blurry; close objects are clear. The eye is longer than normal or the cornea is too curved.',
          'Hyperopia (farsightedness): close objects appear blurry; some patients see distance poorly too. The eye is shorter than normal.',
          'Astigmatism: blurry or distorted vision at all distances due to an irregularly shaped cornea or lens.',
          'Presbyopia: age-related loss of near focusing ability, typically beginning in the 40s.',
        ],
      },
      {
        title: 'Myopia in Malaysia — A Growing Concern',
        content: `Malaysia has a significant myopia epidemic, particularly among children and young adults. Progressive myopia — where prescription increases year after year — increases the risk of serious eye conditions in later life including retinal detachment, glaucoma, and macular degeneration. Dr. Helen Tan offers myopia management strategies for children to slow progression.`,
        bullets: [
          'Orthokeratology (Ortho-K) contact lenses worn overnight',
          'Low-dose atropine eye drops (evidence-based myopia control)',
          'Regular monitoring and prescription management',
          'Lifestyle advice including outdoor time and screen hygiene',
        ],
      },
      {
        title: 'Surgical Correction Options',
        content: `For adults with stable prescriptions who wish to reduce or eliminate their dependence on glasses or contact lenses, Dr. Helen Tan offers several surgical options:`,
        bullets: [
          'SMILE Pro: the latest generation of refractive surgery — bladeless, flapless, minimally invasive. Suitable for myopia and astigmatism.',
          'LASIK: the most widely performed refractive procedure worldwide. Uses a laser to reshape the cornea.',
          'ICL (Implantable Collamer Lens): a small lens implanted inside the eye. Ideal for high prescriptions or thin corneas not suitable for laser surgery.',
          'Refractive Lens Exchange (RLE): replaces the eye\'s natural lens with a premium IOL — combines refractive correction with cataract prevention.',
        ],
      },
      {
        title: 'Who Is a Good Candidate?',
        content: `Not everyone is suitable for every procedure. A thorough pre-operative assessment is essential. Generally, good candidates for laser refractive surgery:`,
        bullets: [
          'Are 21 years or older with a stable prescription for at least 12 months',
          'Have adequate corneal thickness',
          'Have no significant dry eye or corneal disease',
          'Have a prescription within the treatable range for the chosen procedure',
          'Have realistic expectations about the outcomes',
        ],
      },
    ],
    faq: [
      { q: 'What is the difference between SMILE Pro and LASIK?', a: 'LASIK involves creating a flap in the cornea, lifting it, then reshaping the corneal tissue underneath with a laser. SMILE Pro removes a small lenticule through a tiny incision without creating a flap — making it less disruptive to the corneal structure. Both achieve similar visual outcomes; SMILE Pro tends to have less dry eye post-operatively.' },
      { q: 'At what age can I have laser eye surgery?', a: 'Most surgeons require the prescription to be stable for at least 12 months, and patients are typically 21 or older. There is no strict upper age limit, though patients over 40 should be counselled about presbyopia.' },
      { q: 'Is refractive surgery permanent?', a: 'The corneal reshaping is permanent. However, some patients — particularly those treated for hyperopia — may experience some regression over time. Age-related vision changes such as presbyopia will still occur normally.' },
      { q: 'Can I have ICL if I\'m not suitable for LASIK?', a: 'Yes. ICL is an excellent option for patients with high prescriptions, thin corneas, or significant dry eye who are not candidates for laser surgery. It is also reversible, unlike corneal laser procedures.' },
    ],
    bookCTA: 'Book a Refractive Consultation',
  },

  glaucoma: {
    title: 'Glaucoma',
    subtitle: 'The Silent Thief of Sight — Early Detection Saves Vision',
    metaDesc: 'Dr. Helen Tan explains glaucoma — what it is, how it damages the optic nerve, symptoms, risk factors, and treatment options in Kuala Lumpur.',
    heroLabel: 'Glaucoma Care KL',
    intro: `Glaucoma is a group of eye conditions that damage the optic nerve — the vital connection between the eye and the brain. It is often associated with elevated pressure inside the eye (intraocular pressure or IOP), though it can occur with normal pressure too. Glaucoma is one of the leading causes of irreversible blindness worldwide, and in Malaysia, it is significantly underdiagnosed because it causes no symptoms in its early stages.`,
    sections: [
      {
        title: 'Types of Glaucoma',
        content: `There are several types of glaucoma, with two main categories:`,
        bullets: [
          'Primary Open-Angle Glaucoma (POAG): the most common type. Fluid drains too slowly, causing gradual pressure build-up. No pain, no early symptoms. Peripheral vision is lost first.',
          'Angle-Closure Glaucoma: fluid suddenly cannot drain. Can cause sudden, severe pain, blurred vision, halos, nausea. Medical emergency.',
          'Normal-Tension Glaucoma: optic nerve damage occurs despite normal IOP. The optic nerve is unusually susceptible to damage.',
          'Secondary Glaucoma: caused by another condition such as eye injury, inflammation, or as a complication of cataract or other eye surgery.',
          'Congenital Glaucoma: rare; present from birth due to abnormal drainage angle development.',
        ],
      },
      {
        title: 'Who Is at Risk?',
        content: `Glaucoma can affect anyone, but certain factors significantly increase risk:`,
        bullets: [
          'Age over 60 (risk increases significantly with age)',
          'Family history of glaucoma',
          'High intraocular pressure',
          'Thin corneas (central corneal thickness less than 520 microns)',
          'High myopia (particularly for open-angle glaucoma)',
          'Diabetes or high blood pressure',
          'Long-term corticosteroid use (eye drops, tablets, or inhalers)',
          'Previous eye injury',
        ],
      },
      {
        title: 'Why Early Detection Matters',
        content: `Glaucoma causes permanent vision loss — damage to the optic nerve cannot be reversed. This is why the disease is called "the silent thief of sight." By the time a patient notices visual changes, significant irreversible damage has already occurred. Regular eye examinations — even without symptoms — are the only way to detect glaucoma early when treatment is most effective.`,
        bullets: null,
      },
      {
        title: 'Treatment Options',
        content: `While there is no cure for glaucoma and lost vision cannot be restored, treatment can effectively halt or slow progression when started early. The goal is to lower intraocular pressure to a level that prevents further optic nerve damage.`,
        bullets: [
          'Eye drops: the first-line treatment for most patients. Various classes including prostaglandin analogues, beta-blockers, and carbonic anhydrase inhibitors.',
          'Laser therapy (SLT — Selective Laser Trabeculoplasty): improves drainage to lower IOP. Can be used as first-line treatment or alongside drops.',
          'Surgery (Trabeculectomy or tube shunt): creates a new drainage pathway when drops and laser are insufficient to control pressure.',
          'Monitoring: regular visual field tests, optic nerve imaging (OCT), and IOP measurements to ensure treatment is working.',
        ],
      },
    ],
    faq: [
      { q: 'Can glaucoma be cured?', a: 'There is currently no cure for glaucoma, and vision already lost to the disease cannot be restored. However, with early detection and appropriate treatment, the vast majority of patients can preserve their useful vision for life.' },
      { q: 'How often should I be checked for glaucoma?', a: 'Anyone over 40, and anyone with risk factors at any age, should have a comprehensive eye examination that includes IOP measurement and optic nerve assessment at least every two years. High-risk individuals should be checked annually.' },
      { q: 'Is glaucoma hereditary?', a: 'Yes. Having a first-degree relative (parent or sibling) with glaucoma increases your risk 4–9 times. If glaucoma runs in your family, screening is strongly recommended.' },
      { q: 'Do I have to take eye drops forever?', a: 'For most patients with chronic glaucoma, treatment is lifelong. However, laser therapy or surgery can sometimes reduce or eliminate the need for drops. The goal of all treatment is the same: to preserve the vision you have.' },
    ],
    bookCTA: 'Book a Glaucoma Screening',
  },
};

const ConditionDetail: React.FC<ConditionDetailProps> = ({ slug, onNavigate }) => {
  const data = CONDITIONS_DATA[slug];

  if (!data) return null;

  return (
    <div className="pt-24 bg-eye-dark min-h-screen">

      {/* Page header */}
      <div className="max-w-7xl mx-auto px-6 py-16 border-b border-white/5">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <button onClick={() => onNavigate('conditions')} className="hover:text-eye-cyan transition-colors">
              Conditions
            </button>
            <ChevronRight size={14} />
            <span className="text-gray-300">{data.title}</span>
          </div>
          <span className="inline-block py-1 px-3 rounded-full bg-eye-cyan/10 border border-eye-cyan/20 text-xs font-bold tracking-widest text-eye-cyan mb-5 uppercase">
            {data.heroLabel}
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-4 leading-tight">
            {data.title}
          </h1>
          <p className="text-xl text-eye-cyan font-light italic mb-6">{data.subtitle}</p>
          <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">{data.intro}</p>
        </motion.div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* Article body */}
          <div className="lg:col-span-2 space-y-12">
            {data.sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="condition-prose"
              >
                <h2>{section.title}</h2>
                <p>{section.content}</p>
                {section.bullets && (
                  <ul className="mt-4 space-y-2">
                    {section.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="text-eye-cyan mt-0.5 shrink-0">→</span>
                        <span className="text-gray-400 text-sm leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}

            {/* Medical disclaimer */}
            <div className="flex items-start gap-3 p-5 rounded-xl bg-white/5 border border-white/10">
              <AlertCircle size={18} className="text-yellow-400 shrink-0 mt-0.5" />
              <p className="text-xs text-gray-500 leading-relaxed">
                <strong className="text-gray-400">Medical Disclaimer:</strong> The information on this page is for
                general informational purposes only. It does not constitute medical advice or replace a professional
                consultation. Always consult a qualified ophthalmologist regarding any eye condition. Compliant with
                MMC Ethical Code and the Personal Data Protection Act 2010 (PDPA).
                {/* KKLIU No: [INSERT KKLIU APPROVAL NUMBER HERE] */}
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">

            {/* Book CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="sticky top-28"
            >
              <div className="p-6 rounded-2xl bg-eye-cyan/5 border border-eye-cyan/20 mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar size={16} className="text-eye-cyan" />
                  <span className="text-xs font-bold uppercase tracking-widest text-eye-cyan">Book a Consultation</span>
                </div>
                <h3 className="text-xl font-serif text-white mb-3">{data.bookCTA}</h3>
                <p className="text-sm text-gray-400 mb-5">
                  Discuss your symptoms with Dr. Helen Tan. Consultations available at KL, Rawang, and Petaling Jaya.
                </p>
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full py-3 bg-eye-cyan text-black font-bold rounded-xl hover:bg-cyan-300 transition-colors text-sm"
                >
                  Request Appointment
                </button>
              </div>

              {/* FAQ */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400">Common Questions</h3>
                {data.faq.map((item, i) => (
                  <motion.details
                    key={i}
                    className="group p-4 rounded-xl bg-white/5 border border-white/10 cursor-pointer"
                  >
                    <summary className="text-sm text-gray-300 font-medium list-none flex items-start gap-2 cursor-pointer">
                      <ChevronRight size={14} className="shrink-0 mt-0.5 text-eye-cyan group-open:rotate-90 transition-transform" />
                      {item.q}
                    </summary>
                    <p className="mt-3 text-xs text-gray-500 leading-relaxed pl-5">{item.a}</p>
                  </motion.details>
                ))}
              </div>

              {/* Other conditions */}
              <div className="mt-8">
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Other Conditions</h3>
                <div className="space-y-2">
                  {[
                    { label: 'Cataracts', page: 'condition-cataracts' as Page },
                    { label: 'Refractive Errors', page: 'condition-refractive-errors' as Page },
                    { label: 'Glaucoma', page: 'condition-glaucoma' as Page },
                  ]
                    .filter(item => item.page !== `condition-${slug}` as Page)
                    .map(item => (
                      <button
                        key={item.label}
                        onClick={() => onNavigate(item.page)}
                        className="flex items-center gap-2 text-sm text-gray-500 hover:text-eye-cyan transition-colors w-full text-left"
                      >
                        <ChevronRight size={12} /> {item.label}
                      </button>
                    ))}
                  <button
                    onClick={() => onNavigate('conditions')}
                    className="flex items-center gap-2 text-sm text-gray-500 hover:text-eye-cyan transition-colors w-full text-left"
                  >
                    <ChevronRight size={12} /> View all conditions
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConditionDetail;
