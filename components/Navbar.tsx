import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Page } from '../App';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const NAV_ITEMS: { label: string; page: Page }[] = [
  { label: 'About',      page: 'about' },
  { label: 'Conditions', page: 'conditions' },
  { label: 'Procedures', page: 'procedures' },
  { label: 'Media',      page: 'media' },
  { label: 'Contact',    page: 'contact' },
];

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (page: Page) => {
    setMobileOpen(false);
    onNavigate(page);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-eye-dark/90 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleClick('home')}
          className="text-2xl font-serif italic font-semibold tracking-tight text-white z-50 relative hover:text-eye-cyan transition-colors"
        >
          Dr. Helen Tan
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => {
            const isActive = currentPage === item.page ||
              (item.page === 'conditions' && currentPage.startsWith('condition-'));
            return (
              <button
                key={item.label}
                onClick={() => handleClick(item.page)}
                className={`text-sm uppercase tracking-widest transition-colors relative group ${
                  isActive ? 'text-eye-cyan' : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-eye-cyan transition-all duration-300 ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </button>
            );
          })}
          <button
            onClick={() => handleClick('contact')}
            className="ml-4 px-5 py-2 bg-eye-cyan text-black text-sm font-semibold rounded-full hover:bg-cyan-300 transition-colors"
          >
            Book Consultation
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white z-50 relative"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed inset-0 bg-eye-dark z-40 flex flex-col items-center justify-center space-y-8"
            >
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleClick(item.page)}
                  className="text-2xl font-serif text-white hover:text-eye-cyan transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleClick('contact')}
                className="mt-4 px-8 py-3 bg-eye-cyan text-black font-semibold rounded-full"
              >
                Book Consultation
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
