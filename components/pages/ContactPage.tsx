import React, { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Calendar, CheckCircle, AlertCircle, Shield, Lock } from 'lucide-react';

// ── PDPA Consent timestamp utility ───────────────────────────────────────
const getConsentTimestamp = (): string => {
  const now = new Date();
  return `${now.toISOString()} | IP-logged | userAgent-logged`;
};

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: 'General Enquiry',
    message: '',
  });
  const [pdpaConsent, setPdpaConsent] = useState(false);
  const [consentTimestamp, setConsentTimestamp] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleConsentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setPdpaConsent(checked);
    if (checked) {
      // Timestamp the consent at the moment of tick — PDPA Section 6 & 7 compliance
      setConsentTimestamp(getConsentTimestamp());
    } else {
      setConsentTimestamp('');
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!pdpaConsent) return;
    setStatus('submitting');

    try {
      const params = new URLSearchParams();
      params.append('form-name', 'contact');
      params.append('pdpaConsentTimestamp', consentTimestamp);
      Object.entries(formData).forEach(([key, value]) => params.append(key, value));

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });

      setStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', phone: '', interest: 'General Enquiry', message: '' });
      setPdpaConsent(false);
      setConsentTimestamp('');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  const inputClass = "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-eye-cyan transition-colors placeholder:text-gray-600";

  return (
    <div className="pt-24 bg-eye-dark min-h-screen">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 py-16 border-b border-white/5">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-eye-cyan font-bold tracking-widest uppercase text-xs mb-4 block">
            Appointments & Enquiries
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
            Start Your <span className="italic text-eye-cyan">Journey</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Ready to see the world with new eyes? Book your consultation with Dr. Helen Tan today.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ── Left: Contact info & locations ─────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-10">

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-eye-cyan" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Call Us</h4>
                  <a href="tel:+601160659902" className="text-gray-400 hover:text-white transition-colors">
                    +60 11-6065 9902
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-eye-cyan" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email Us</h4>
                  <a href="mailto:helentanservices@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                    helentanservices@gmail.com
                  </a>
                </div>
              </div>

              {/* Locations */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-eye-cyan" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-4">Visit Us</h4>
                  <div className="space-y-5">
                    {[
                      {
                        name: 'KPJ Centre For Sight — Kuala Lumpur',
                        address: '100-102 Level 4 Tawakkal Health Centre\n202A Jalan Pahang\n53000 Kuala Lumpur',
                      },
                      {
                        name: 'KPJ Centre For Sight — Rawang',
                        address: 'No 88, Jalan Bandar Rawang 1\nPusat Bandar Rawang\n48000 Rawang, Selangor',
                      },
                      {
                        name: 'Tun Hussein Onn National Eye Hospital (THONEH)',
                        address: '2, Lorong Utara (B), PJS 52\n46200 Petaling Jaya, Selangor',
                      },
                    ].map((loc, i) => (
                      <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                        <h5 className="text-white/90 font-medium text-sm mb-1">{loc.name}</h5>
                        <p className="text-gray-500 text-xs leading-relaxed whitespace-pre-line">{loc.address}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* PDPA notice strip */}
            <div className="mt-10 flex items-start gap-3 p-5 rounded-xl bg-eye-cyan/5 border border-eye-cyan/20">
              <Shield size={18} className="text-eye-cyan shrink-0 mt-0.5" />
              <div>
                <h4 className="text-eye-cyan text-xs font-bold uppercase tracking-widest mb-1">PDPA Compliant Practice</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  All personal data you submit is handled in accordance with the Personal Data Protection Act 2010 (PDPA).
                  Your consent is recorded with a timestamp. We do not share your data with third parties.
                  Data is used solely to respond to your enquiry and arrange your consultation.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── Right: PDPA-compliant appointment form ──────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="bg-white/5 backdrop-blur-lg p-8 md:p-10 rounded-3xl border border-white/10 sticky top-28"
          >
            <div className="flex items-center gap-3 mb-6">
              <Calendar size={20} className="text-eye-cyan" />
              <h3 className="text-2xl font-serif text-white">Request Appointment</h3>
            </div>

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center text-center py-10 space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 mb-2">
                  <CheckCircle size={32} />
                </div>
                <h4 className="text-2xl font-serif text-white">Thank You!</h4>
                <p className="text-gray-400 text-sm">Your appointment request has been received. We will be in touch shortly to confirm your visit.</p>
                <p className="text-xs text-gray-600">Your PDPA consent has been recorded with a timestamp as required by law.</p>
                <button onClick={() => setStatus('idle')} className="mt-4 px-6 py-2 text-sm text-eye-cyan hover:text-white transition-colors">
                  Send another request
                </button>
              </motion.div>
            ) : (
              <form
                className="space-y-4 pdpa-form"
                name="contact"
                method="post"
                data-netlify="true"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="pdpaConsentTimestamp" value={consentTimestamp} />

                {/* Name */}
                <div className="grid grid-cols-2 gap-3">
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required className={inputClass} />
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required className={inputClass} />
                </div>

                {/* Email */}
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required className={inputClass} />

                {/* Phone */}
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required className={inputClass} />

                {/* Interest */}
                <div className="relative">
                  <select name="interest" value={formData.interest} onChange={handleChange} className={`${inputClass} text-gray-400 appearance-none`}>
                    <option value="General Enquiry">Interest: General Enquiry</option>
                    <option value="Cataract Surgery">Interest: Cataract Surgery</option>
                    <option value="LASIK / SMILE Pro">Interest: LASIK / SMILE Pro</option>
                    <option value="ICL Implantation">Interest: ICL Implantation</option>
                    <option value="Glaucoma">Interest: Glaucoma</option>
                    <option value="Dry Eye / IPL">Interest: Dry Eye / IPL Therapy</option>
                    <option value="Children's Eye">Interest: Children's Eye Health</option>
                    <option value="Pterygium">Interest: Pterygium</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">▾</div>
                </div>

                {/* Message (optional) */}
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Brief description of your concern (optional)"
                  rows={3}
                  className={`${inputClass} resize-none`}
                />

                {/* ── PDPA ACTIVE CONSENT MARKER ────────────────────── */}
                <div className={`p-4 rounded-xl border transition-colors ${pdpaConsent ? 'border-green-500/30 bg-green-500/5' : 'border-white/10 bg-white/[0.02]'}`}>
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative mt-0.5 shrink-0">
                      <input
                        type="checkbox"
                        name="pdpaConsent"
                        checked={pdpaConsent}
                        onChange={handleConsentChange}
                        className="sr-only"
                        required
                      />
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${pdpaConsent ? 'bg-green-500 border-green-500' : 'border-gray-500 group-hover:border-eye-cyan'}`}>
                        {pdpaConsent && <CheckCircle size={12} className="text-white" strokeWidth={3} />}
                      </div>
                    </div>
                    <div>
                      <span className="text-xs text-gray-300 leading-relaxed">
                        I consent to Dr. Helen Tan's practice collecting and using my personal data (name, email, phone) to process my appointment request and contact me, in accordance with the{' '}
                        <strong className="text-eye-cyan">Personal Data Protection Act 2010 (PDPA)</strong>.
                        I understand my data will not be shared with third parties and I may withdraw consent at any time.
                      </span>
                      {pdpaConsent && (
                        <div className="flex items-center gap-1 mt-2">
                          <Lock size={10} className="text-green-400" />
                          <span className="text-[10px] text-green-400">Consent recorded — {new Date().toLocaleDateString('en-MY', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
                        </div>
                      )}
                    </div>
                  </label>
                </div>

                {!pdpaConsent && (
                  <p className="text-xs text-gray-500 text-center">
                    Please tick the consent box above to enable the submit button.
                  </p>
                )}

                {/* Submit — disabled until PDPA consent is given */}
                <button
                  type="submit"
                  disabled={!pdpaConsent || status === 'submitting'}
                  className="w-full bg-eye-cyan text-black font-bold py-4 rounded-xl mt-2 hover:bg-cyan-300 transition-colors shadow-[0_0_20px_rgba(6,182,212,0.25)] disabled:opacity-40 disabled:cursor-not-allowed flex justify-center items-center gap-2 pdpa-submit"
                >
                  {status === 'submitting' ? (
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Calendar size={16} />
                      Submit Appointment Request
                    </>
                  )}
                </button>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-sm">
                    <AlertCircle size={14} />
                    <span>Something went wrong. Please try again or call us directly.</span>
                  </div>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
