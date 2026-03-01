import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface LegalPageProps {
  target?: string;
}

const LegalPage: React.FC<LegalPageProps> = ({ target }) => {
  useEffect(() => {
    if (target) {
      const el = document.getElementById(target);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [target]);

  return (
    <div className="pt-32 pb-24 bg-[#050507] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Legal Information</h1>
          <p className="text-gray-400">Transparency and trust are at the core of our practice.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">

          {/* Privacy Policy */}
          <div className="space-y-8" id="privacy-policy">
            <div className="border-b border-white/10 pb-4 mb-8">
              <h2 className="text-3xl font-serif text-slate-200">Privacy Policy</h2>
            </div>
            {[
              { title: 'Data Collection', body: 'We collect personal information that you voluntarily provide when you submit an appointment request or enquiry through this website. This may include your name, phone number, email address, and the nature of your enquiry.' },
              { title: 'PDPA Compliance', body: 'This practice complies with the Personal Data Protection Act 2010 (PDPA). All inquiry form submissions are gated by an explicit consent marker — your submit button is disabled until you actively tick consent. Each submission records a timestamped consent record, which constitutes your documented legal consent under PDPA Sections 6 & 7.' },
              { title: 'How We Use Your Data', body: 'Your personal data is used solely to respond to your enquiry and arrange your consultation with Dr. Helen Tan. We do not sell, share, or transfer your data to third parties without your explicit consent.' },
              { title: 'Data Security', body: 'We have implemented appropriate technical and organisational measures to protect your personal information. Form submissions are processed securely. However, no internet transmission is 100% secure.' },
              { title: 'Your Rights', body: 'Under PDPA, you have the right to access your personal data held by us, to correct inaccurate data, and to withdraw consent at any time. To exercise these rights, contact us at helentanservices@gmail.com.' },
              { title: 'Medical Information Disclaimer', body: 'Information on this website is for general informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified physician.' },
            ].map((section, i) => (
              <div key={i} className="space-y-2">
                <h3 className="text-eye-cyan font-medium text-sm uppercase tracking-wider">{section.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{section.body}</p>
              </div>
            ))}
          </div>

          {/* Terms of Service */}
          <div className="space-y-8" id="terms-of-service">
            <div className="border-b border-white/10 pb-4 mb-8">
              <h2 className="text-3xl font-serif text-slate-200">Terms of Service</h2>
            </div>
            {[
              { title: 'Website Use Terms', body: 'By accessing this website, you agree to be bound by these Terms and Conditions, all applicable laws and regulations, and acknowledge responsibility for compliance with applicable local laws.' },
              { title: 'Medical Information Disclaimer', body: 'All content on this website, including text, images, and other formats, is created for informational purposes only. It is not intended as a substitute for professional medical advice, diagnosis, or treatment.' },
              { title: 'No Doctor-Patient Relationship', body: 'Use of this website does not establish a doctor-patient relationship. Do not use this website for medical emergencies — if you have a medical emergency, call your doctor or emergency services immediately.' },
              { title: 'Appointment Requests', body: 'Appointment requests submitted through this website are not confirmed until you receive direct communication from our staff. We reserve the right to reschedule or decline appointments at our discretion.' },
              { title: 'KKLIU Compliance', body: 'Condition explainer pages on this website describe medical conditions and procedures for informational purposes. These pages have been prepared in accordance with Malaysian Medicine Advertisements Board (MAB) requirements. KKLIU approval numbers are displayed on applicable pages.' },
              { title: 'Liability Limitation', body: 'In no event shall Dr. Helen Tan\'s practice or its representatives be liable for any damages arising from the use or inability to use the materials on this website, including for loss of data, profit, or business interruption.' },
            ].map((section, i) => (
              <div key={i} className="space-y-2">
                <h3 className="text-eye-cyan font-medium text-sm uppercase tracking-wider">{section.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
