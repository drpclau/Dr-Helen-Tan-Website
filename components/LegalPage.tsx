import React from 'react';

const LegalPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#050507] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Legal Information</h1>
            <p className="text-gray-400">Transparency and trust are at the core of our practice.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            
          {/* Privacy Policy */}
          <div className="space-y-8" id="privacy-policy">
            <div className="border-b border-white/10 pb-4 mb-8">
                <h2 className="text-3xl font-serif text-slate-200">Privacy Policy</h2>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-eye-cyan font-medium text-sm uppercase tracking-wider">Data Collection</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website or otherwise when you contact us. This may include names, phone numbers, and email addresses.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-eye-cyan font-medium text-sm uppercase tracking-wider">Cookies</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-eye-cyan font-medium text-sm uppercase tracking-wider">Contact Forms</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                Information submitted through the contact forms on our site is sent to our company email. This information is kept private and is stored securely. We do not share your information with third parties.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-eye-cyan font-medium text-sm uppercase tracking-wider">Medical Information Disclaimer</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                The information provided on this website is for general informational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-eye-cyan font-medium text-sm uppercase tracking-wider">Data Security</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
              </p>
            </div>
          </div>

          {/* Terms of Service */}
          <div className="space-y-8" id="terms-of-service">
            <div className="border-b border-white/10 pb-4 mb-8">
                <h2 className="text-3xl font-serif text-slate-200">Terms of Service</h2>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-eye-cyan font-medium text-sm uppercase tracking-wider">Website Use Terms</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-eye-cyan font-medium text-sm uppercase tracking-wider">Medical Information Disclaimer</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                All content found on the website, including: text, images, audio, or other formats were created for informational purposes only. The Content is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-eye-cyan font-medium text-sm uppercase tracking-wider">No Doctor-Patient Relationship</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                Use of this website does not establish a doctor-patient relationship. Do not use this website for medical emergencies. If you have a medical emergency, call your doctor or emergency services immediately.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-eye-cyan font-medium text-sm uppercase tracking-wider">Appointment Booking</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                Appointment requests made through this website are not confirmed until you receive a direct communication from our staff. We reserve the right to reschedule or cancel appointments at our discretion.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-eye-cyan font-medium text-sm uppercase tracking-wider">Liability Limitation</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                In no event shall Dr. Helen Tan's practice or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LegalPage;