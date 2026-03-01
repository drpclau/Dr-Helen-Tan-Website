import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ConditionsPage from './components/pages/ConditionsPage';
import ConditionDetail from './components/pages/ConditionDetail';
import ProceduresPage from './components/pages/ProceduresPage';
import MediaPage from './components/pages/MediaPage';
import ContactPage from './components/pages/ContactPage';
import LegalPage from './components/pages/LegalPage';

export type Page =
  | 'home'
  | 'about'
  | 'conditions'
  | 'condition-cataracts'
  | 'condition-refractive-errors'
  | 'condition-glaucoma'
  | 'procedures'
  | 'media'
  | 'contact'
  | 'legal';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [legalTarget, setLegalTarget] = useState<string | undefined>();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: Page, target?: string) => {
    setCurrentPage(page);
    if (page === 'legal') setLegalTarget(target);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':        return <HomePage onNavigate={handleNavigate} />;
      case 'about':       return <AboutPage />;
      case 'conditions':  return <ConditionsPage onNavigate={handleNavigate} />;
      case 'condition-cataracts':        return <ConditionDetail slug="cataracts" onNavigate={handleNavigate} />;
      case 'condition-refractive-errors': return <ConditionDetail slug="refractive-errors" onNavigate={handleNavigate} />;
      case 'condition-glaucoma':         return <ConditionDetail slug="glaucoma" onNavigate={handleNavigate} />;
      case 'procedures':  return <ProceduresPage onNavigate={handleNavigate} />;
      case 'media':       return <MediaPage />;
      case 'contact':     return <ContactPage />;
      case 'legal':       return <LegalPage target={legalTarget} />;
      default:            return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="bg-eye-dark min-h-screen text-slate-200 selection:bg-eye-cyan selection:text-black flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
