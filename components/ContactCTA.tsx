import React, { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Calendar } from 'lucide-react';

const ContactCTA: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: 'General Enquiry'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `Appointment Request: ${formData.interest}`;
    const body = `Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Interest: ${formData.interest}

(Sent from website request form)`;
    
    // Open default mail client
    window.location.href = `mailto:helentanservices@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
                <form className="space-y-4" onSubmit={handleSubmit}>
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
                    
                    <button type="submit" className="w-full bg-eye-cyan text-black font-bold py-4 rounded-lg mt-4 hover:bg-cyan-300 transition-colors shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                        Submit Request
                    </button>
                </form>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;