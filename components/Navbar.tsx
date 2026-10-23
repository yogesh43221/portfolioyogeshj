import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { PROFILE } from '../constants';
import ThemeToggle from './ThemeToggle';
import DeveloperMascot, { MascotState } from './DeveloperMascot';

interface NavItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'Projects', href: '#projects' },
  { name: 'Manifesto', href: '#why_hire_me' },
  { name: 'Experience', href: '#experience' },
  { name: 'Story', href: '#about' },
  { name: 'Assistant', href: '#ai-chat' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return false;
    }
    return false;
  });

  // Mascot interaction state
  const [mascotState, setMascotState] = useState<MascotState>('idle');
  const mascotTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isClickedActiveRef = useRef<boolean>(false);

  useEffect(() => {
    return () => {
      if (mascotTimerRef.current) {
        clearTimeout(mascotTimerRef.current);
      }
    };
  }, []);

  const handleBrandMouseEnter = () => {
    if (isClickedActiveRef.current) return;
    if (mascotTimerRef.current) clearTimeout(mascotTimerRef.current);
    setMascotState('hover');
  };

  const handleBrandMouseLeave = () => {
    if (isClickedActiveRef.current) return;
    if (mascotTimerRef.current) clearTimeout(mascotTimerRef.current);
    setMascotState('leave');
    mascotTimerRef.current = setTimeout(() => {
      if (!isClickedActiveRef.current) {
        setMascotState('idle');
      }
    }, 1200);
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleNavClick(e, '#contact');

    if (mascotTimerRef.current) clearTimeout(mascotTimerRef.current);
    isClickedActiveRef.current = true;
    setMascotState('clicked');

    mascotTimerRef.current = setTimeout(() => {
      isClickedActiveRef.current = false;
      setMascotState('idle');
    }, 3000);
  };

  useEffect(() => {
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('theme');
    const shouldBeDark = savedTheme === 'dark';

    if (shouldBeDark) {
      html.classList.add('dark');
      setIsDark(true);
    } else {
      html.classList.remove('dark');
      setIsDark(false);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const nextDark = !isDark;
    if (nextDark) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    setIsDark(nextDark);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    if (targetId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsOpen(false);
      return;
    }
    const element = document.getElementById(targetId);
    if (element) {
      // Offset by floating navbar height (84px) so section headings are never obscured
      const navbarOffset = 84;
      const elementTop = element.getBoundingClientRect().top;
      const targetPosition = elementTop + window.pageYOffset - navbarOffset;
      window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-2 sm:pt-3 px-3 sm:px-6 pointer-events-none transition-all duration-200">
      <nav 
        className={`pointer-events-auto max-w-5xl mx-auto rounded-2xl transition-all duration-200 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 dark:bg-[#0E1117]/95 backdrop-blur-md border border-amber-900/15 dark:border-slate-800 shadow-sm py-1.5 sm:py-2 px-3.5 sm:px-5'
            : 'bg-[#FAF7F2]/85 dark:bg-[#0E1117]/85 backdrop-blur-sm border border-amber-900/10 dark:border-slate-800/60 py-2 px-3.5 sm:px-5'
        }`}
        aria-label="Main Navigation"
      >
        <div className="flex items-center justify-between gap-3">
          
          {/* Brand Identity with Mascot */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            onMouseEnter={handleBrandMouseEnter}
            onMouseLeave={handleBrandMouseLeave}
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-xl flex-shrink-0"
            aria-label={`${PROFILE.name} - Back to top`}
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 transition-transform duration-200 group-hover:scale-110">
              <DeveloperMascot 
                state={mascotState} 
                className="w-full h-full select-none filter drop-shadow-xs"
                title="Yogesh's developer mascot"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-white tracking-tight font-sans group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors leading-none whitespace-nowrap">
                {PROFILE.name}
              </span>
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 tracking-tight hidden xl:inline-block mt-0.5 whitespace-nowrap">
                QA Automation / SDET
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links - Switches to compact menu below lg (1024px) to prevent collisions */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 flex-shrink-0">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors font-sans hover:bg-black/5 dark:hover:bg-white/5 whitespace-nowrap"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Actions: Theme Toggle + Contact CTA */}
          <div className="hidden lg:flex items-center gap-2.5 pl-2 border-l border-amber-900/10 dark:border-slate-800 flex-shrink-0">
            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
            
            <a
              href="#contact"
              onClick={handleContactClick}
              className="inline-flex items-center justify-center px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 rounded-xl text-xs font-bold font-sans transition-all shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 whitespace-nowrap"
              aria-label="Get in touch"
            >
              Get in Touch
            </a>
          </div>

          {/* Tablet & Mobile Right Controls (active below lg / 1024px, including 950px, 768px, 390px) */}
          <div className="flex lg:hidden items-center gap-2 flex-shrink-0">
            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>

        {/* Tablet & Mobile Dropdown Menu Sheet */}
        {isOpen && (
          <div className="lg:hidden mt-2 pt-3 pb-4 border-t border-amber-900/10 dark:border-slate-800 space-y-1 animate-fadeIn">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-3.5 py-2.5 rounded-xl text-base font-medium text-slate-800 dark:text-slate-200 hover:bg-black/5 dark:hover:bg-white/5 transition-colors font-sans"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-2.5 mt-2 border-t border-amber-900/10 dark:border-slate-800/80">
              <a
                href="#contact"
                onClick={handleContactClick}
                className="block text-center w-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 px-4 py-2.5 rounded-xl text-sm font-bold shadow-xs min-h-[44px] flex items-center justify-center"
              >
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;