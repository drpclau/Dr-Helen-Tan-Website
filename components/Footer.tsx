import React from 'react';

interface FooterProps {
  onNavigate: (page: 'home' | 'legal', targetId?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-black py-12 border-t border-white/5 text-center md:text-left">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
            <span className="font-serif text-gray-400 text-lg mb-2">Dr. Helen Tan</span>
            <div className="flex flex-col md:flex-row gap-1 md:gap-3 text-xs text-gray-500 mb-3">
                <span>MMC No: 38094</span>
                <span className="hidden md:block text-gray-700">•</span>
                <span>NSR No: 128327</span>
            </div>
            <p>© {new Date().getFullYear()} Ophthalmology Practice. All rights reserved.</p>
        </div>
        <div className="flex space-x-6">
            <button 
                onClick={() => onNavigate('legal', '#privacy-policy')}
                className="hover:text-white transition-colors text-sm text-gray-600 bg-transparent border-none cursor-pointer"
            >
                Privacy Policy
            </button>
            <button 
                onClick={() => onNavigate('legal', '#terms-of-service')}
                className="hover:text-white transition-colors text-sm text-gray-600 bg-transparent border-none cursor-pointer"
            >
                Terms of Service
            </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;