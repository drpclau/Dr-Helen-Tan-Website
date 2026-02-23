import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Conditions from './components/Conditions';
import Procedures from './components/Procedures';
import Media from './components/Media';
import SocialContributions from './components/SocialContributions';
import ContactCTA from './components/ContactCTA';
import LegalPage from './components/LegalPage';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'legal'>('home');
  const [scrollTarget, setScrollTarget] = useState<string | null>(null);

  // Handle scrolling after view change or target update
  useEffect(() => {
    if (scrollTarget) {
      // Small timeout to allow DOM to render the new view
      const timer = setTimeout(() => {
        const element = document.querySelector(scrollTarget);
        if (element) {
          const navbarHeight = 80;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - navbarHeight;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
       // If no specific target, just scroll to top when page changes
       window.scrollTo(0, 0);
    }
  }, [currentPage, scrollTarget]);

  const handleNavigate = (page: 'home' | 'legal', targetId?: string) => {
    setCurrentPage(page);
    // If we have a target ID, set it. Otherwise set to null to ensure we just scroll top
    setScrollTarget(targetId || null);
  };

  return (
    <div className="bg-eye-dark min-h-screen text-slate-200 selection:bg-eye-cyan selection:text-black flex flex-col">
      <Navbar onNavigate={handleNavigate} />
      <main className="flex-grow">
        {currentPage === 'home' ? (
          <>
            <Hero />
            <About />
            <Conditions />
            <Procedures />
            <Media />
            <SocialContributions />
            <ContactCTA />
          </>
        ) : (
          <LegalPage />
        )}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;