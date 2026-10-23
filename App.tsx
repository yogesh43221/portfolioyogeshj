import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import WorkspaceHero from './components/WorkspaceHero';
import QualityManifesto from './components/QualityManifesto';
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
    <div className="bg-[#FAF7F2] dark:bg-[#0E1117] min-h-screen text-slate-800 dark:text-slate-200 font-sans selection:bg-amber-400/80 selection:text-slate-900 transition-colors duration-150 bg-grain">
        <Navbar />
        <main>
            <WorkspaceHero />
            <QualityManifesto />
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