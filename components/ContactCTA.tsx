import React, { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Calendar, CheckCircle, AlertCircle } from 'lucide-react';

const ContactCTA: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: 'General Enquiry'
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Create x-www-form-urlencoded body
      const params = new URLSearchParams();
      params.append('form-name', 'contact');
      Object.entries(formData).forEach(([key, value]) => {
        params.append(key, value as string);
      });

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });

      setStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        interest: 'General Enquiry'
      });
    } catch (error) {
      console.error(error);
      setStatus('error');
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-eye-dark to-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Content */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-5xl md:text-7xl font-serif mb-8 text-white leading-none">
                    Start Your <br />
                    <span className="text-eye-cyan italic">Journey</span>
                </h2>
                <p className="text-xl text-gray-400 mb-10 max-w-md">
                    Ready to see the world with new eyes? Book your consultation with Dr. Helen Tan today.
                </p>

                <div className="space-y-8">
                    <div className="flex items-start gap-4">
                        <MapPin className="text-eye-cyan mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="text-white font-semibold mb-3 text-lg">Visit Us</h4>
                            <div className="space-y-5">
                                {/* Location 1 */}
                                <div>
                                    <h5 className="text-white/90 font-medium text-sm mb-1">KPJ Centre For Sight - KL</h5>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        100-102 Level 4 Tawakkal Health Centre<br />
                                        202A Jalan Pahang<br />
                                        53000 Kuala Lumpur
                                    </p>
                                </div>
                                
                                {/* Location 2 */}
                                <div>
                                    <h5 className="text-white/90 font-medium text-sm mb-1">KPJ Centre For Sight - Rawang</h5>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        No 88, Jalan Bandar Rawang 1<br />
                                        Pusat Bandar Rawang<br />
                                        48000 Rawang, Selangor
                                    </p>
                                </div>

                                {/* Location 3 */}
                                <div>
                                    <h5 className="text-white/90 font-medium text-sm mb-1">The Tun Hussein Onn National Eye Hospital (THONEH)</h5>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        2, Lorong Utara (B), PJS 52<br />
                                        46200 Petaling Jaya, Selangor
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                     <div className="flex items-start gap-4">
                        <Phone className="text-eye-cyan mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="text-white font-semibold text-lg">Call Us</h4>
                            <p className="text-gray-500 hover:text-white transition-colors">
                                <a href="tel:+601160659902">+60 11-6065 9902</a>
                            </p>
                        </div>
                    </div>

                     <div className="flex items-start gap-4">
                        <Mail className="text-eye-cyan mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="text-white font-semibold text-lg">Email Us</h4>
                            <p className="text-gray-500 hover:text-white transition-colors">
                                <a href="mailto:helentanservices@gmail.com">helentanservices@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Right Form */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg p-8 md:p-12 rounded-3xl border border-white/10 sticky top-24"
            >
                <h3 className="text-2xl font-serif text-white mb-6">Request Appointment</h3>
                
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
                    <p className="text-gray-400">Your appointment request has been received. We will be in touch shortly to confirm your visit.</p>
                    <button 
                        onClick={() => setStatus('idle')}
                        className="mt-4 px-6 py-2 text-sm text-eye-cyan hover:text-white transition-colors"
                    >
                        Send another request
                    </button>
                  </motion.div>
                ) : (
                  <form 
                    className="space-y-4" 
                    name="contact" 
                    method="post" 
                    data-netlify="true" 
                    onSubmit={handleSubmit}
                  >
                      {/* Hidden Netlify Inputs */}
                      <input type="hidden" name="form-name" value="contact" />
                      <input type="hidden" name="bot-field" />

                      <div className="grid grid-cols-2 gap-4">
                          <input 
                              type="text" 
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              placeholder="First Name" 
                              required
                              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-eye-cyan transition-colors placeholder:text-gray-600" 
                          />
                          <input 
                              type="text" 
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                              placeholder="Last Name" 
                              required
                              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-eye-cyan transition-colors placeholder:text-gray-600" 
                          />
                      </div>
                      <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email Address" 
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-eye-cyan transition-colors placeholder:text-gray-600" 
                      />
                      <input 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone Number" 
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-eye-cyan transition-colors placeholder:text-gray-600" 
                      />
                      
                      <div className="relative">
                          <select 
                              name="interest"
                              value={formData.interest}
                              onChange={handleChange}
                              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-gray-400 focus:outline-none focus:border-eye-cyan transition-colors appearance-none"
                          >
                              <option value="General Enquiry">Interest: General Enquiry</option>
                              <option value="Cataract Surgery">Interest: Cataract Surgery</option>
                              <option value="LASIK / SMILE">Interest: LASIK / SMILE</option>
                              <option value="Children's Eye">Interest: Children's Eye</option>
                          </select>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                             <Calendar size={16} /> 
                          </div>
                      </div>
                      
                      <button 
                          type="submit" 
                          disabled={status === 'submitting'}
                          className="w-full bg-eye-cyan text-black font-bold py-4 rounded-lg mt-4 hover:bg-cyan-300 transition-colors shadow-[0_0_20px_rgba(6,182,212,0.3)] disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
                      >
                          {status === 'submitting' ? (
                              <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          ) : (
                              'Submit Request'
                          )}
                      </button>
                      
                      {status === 'error' && (
                          <div className="flex items-center gap-2 text-red-400 text-sm mt-2">
                              <AlertCircle size={16} />
                              <span>Something went wrong. Please try again.</span>
                          </div>
                      )}
                  </form>
                )}
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;