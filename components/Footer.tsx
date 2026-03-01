import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Page } from '../App';

interface FooterProps {
  onNavigate: (page: Page, target?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="font-serif italic text-2xl text-white mb-3">Dr. Helen Tan</div>
            <div className="text-xs text-gray-500 space-y-1 mb-4">
              <div>MMC No: 38094</div>
              <div>NSR No: 128327</div>
              <div>AM (Academy of Medicine, Malaysia)</div>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              The information on this site is for general informational purposes only and does not constitute medical advice. Always consult a qualified physician.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: 'About', page: 'about' as Page },
                { label: 'Conditions', page: 'conditions' as Page },
                { label: 'Procedures', page: 'procedures' as Page },
                { label: 'Media', page: 'media' as Page },
                { label: 'Contact', page: 'contact' as Page },
              ].map(item => (
                <li key={item.label}>
                  <button
                    onClick={() => onNavigate(item.page)}
                    className="text-sm text-gray-500 hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Conditions */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">Conditions</h4>
            <ul className="space-y-3">
              {[
                { label: 'Cataracts', page: 'condition-cataracts' as Page },
                { label: 'Refractive Errors', page: 'condition-refractive-errors' as Page },
                { label: 'Glaucoma', page: 'condition-glaucoma' as Page },
              ].map(item => (
                <li key={item.label}>
                  <button
                    onClick={() => onNavigate(item.page)}
                    className="text-sm text-gray-500 hover:text-eye-cyan transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-eye-cyan mt-0.5 shrink-0" />
                <a href="tel:+601160659902" className="text-sm text-gray-500 hover:text-white transition-colors">
                  +60 11-6065 9902
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={14} className="text-eye-cyan mt-0.5 shrink-0" />
                <a href="mailto:helentanservices@gmail.com" className="text-sm text-gray-500 hover:text-white transition-colors break-all">
                  helentanservices@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-eye-cyan mt-0.5 shrink-0" />
                <span className="text-sm text-gray-500">KL · Rawang · Petaling Jaya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Dr. Helen Tan Ophthalmology Practice. All rights reserved.</p>
          <div className="flex gap-6">
            <button onClick={() => onNavigate('legal', 'privacy-policy')} className="hover:text-white transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => onNavigate('legal', 'terms-of-service')} className="hover:text-white transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
