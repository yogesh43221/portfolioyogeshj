import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Activity } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const html = document.documentElement;
    setIsDark(html.classList.contains('dark'));

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.remove('dark');
      setIsDark(false);
    } else {
      html.classList.add('dark');
      setIsDark(true);
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/80 dark:bg-midnight-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-midnight-700' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-4">
             <div className="flex items-center gap-2">
                <Terminal className="text-horizon-sky h-5 w-5" />
                <span className="font-bold text-xl text-slate-900 dark:text-white tracking-tight font-sans">
                  Yogesh Jadhav
                </span>
             </div>
             
             {/* HUD Status Badge - Hidden on very small mobile */}
             <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-emerald-500/5 border border-emerald-500/20 rounded-md">
                <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </div>
                <span className="text-[9px] font-mono font-bold text-emerald-600 dark:text-emerald-400 tracking-widest uppercase">
                    System: Nominal
                </span>
             </div>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-slate-600 dark:text-slate-400 hover:text-horizon-sky dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 px-4 py-2 rounded-md text-sm font-medium transition-colors font-sans"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="h-5 w-px bg-slate-200 dark:bg-midnight-700 mx-2"></div>

              <div className="px-2">
                <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
              </div>

              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, '#contact')}
                className="ml-2 bg-slate-900 dark:bg-horizon-sky text-white dark:text-white hover:opacity-90 px-5 py-2.5 rounded-lg text-sm font-bold transition-all font-sans shadow-sm"
              >
                Hire Me
              </a>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden items-center gap-4">
             <ThemeToggle isDark={isDark} onToggle={toggleTheme} />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-midnight-900 border-b border-slate-200 dark:border-midnight-700 shadow-lg animate-fadeIn">
          <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-600 dark:text-slate-300 hover:text-horizon-sky dark:hover:text-white hover:bg-slate-50 dark:hover:bg-midnight-800 block px-4 py-3 rounded-md text-base font-medium transition-colors font-sans"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;