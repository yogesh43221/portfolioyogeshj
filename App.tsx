import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyHireMe from './components/WhyHireMe';
import Philosophy from './components/Philosophy';
import Experience from './components/Experience';
import Projects from './components/Projects';
import AIChat from './components/AIChat';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  // Reset scroll position to top on mount/reload
  useEffect(() => {
    window.scrollTo(0, 0);
    // Also handle browser history scroll restoration behavior
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <div className="bg-horizon-light dark:bg-midnight-900 min-h-screen text-slate-900 dark:text-slate-200 font-sans selection:bg-horizon-sky selection:text-white transition-colors duration-150 bg-grain">
        <Navbar />
        <main>
            <Hero />
            <WhyHireMe />
            <Projects />
            <Experience />
            <Philosophy />
            <AIChat />
            <Contact />
        </main>
        <Footer />
        <ScrollToTop />
    </div>
  );
};

export default App;