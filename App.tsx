import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Conditions from './components/Conditions';
import Procedures from './components/Procedures';
import Media from './components/Media';
import SocialContributions from './components/SocialContributions';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-eye-dark min-h-screen text-slate-200 selection:bg-eye-cyan selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Conditions />
        <Procedures />
        <Media />
        <SocialContributions />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
