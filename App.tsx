import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyHireMe from './components/WhyHireMe';
import Philosophy from './components/Philosophy';
import Experience from './components/Experience';
import Projects from './components/Projects';
import AIChat from './components/AIChat';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-200 font-sans selection:bg-blue-500 selection:text-white transition-colors duration-300">
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
    </div>
  );
};

export default App;