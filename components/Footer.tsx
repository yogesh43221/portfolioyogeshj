import React from 'react';
import { PROFILE, NAV_LINKS } from '../constants';
import ResumeDropdown from './ResumeDropdown';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // Increased visual weight: darker background in light mode (slate-100) and thicker top border
    <footer className="w-full bg-slate-100 dark:bg-slate-950 border-t-2 border-slate-200 dark:border-slate-800 pt-20 pb-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Brand Column */}
            <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-mono tracking-tighter">
                    DEV_PERSONA
                </h3>
                <p className="text-slate-600 dark:text-slate-400 max-w-xs font-sans text-sm leading-relaxed">
                    Crafting intelligent systems and robust data architectures for the future.
                </p>
                <div className="pt-2">
                   {/* Explicitly set direction="up" so the menu doesn't get cut off at bottom of page */}
                   <ResumeDropdown direction="up" />
                </div>
            </div>

            {/* Quick Links Column */}
            <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-6 font-mono">Quick Links</h4>
                <ul className="space-y-4">
                    {NAV_LINKS.map(link => (
                        <li key={link.name}>
                            <a 
                                href={link.href} 
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors flex items-center gap-3 font-sans text-sm"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></span>
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Connect Column */}
            <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-6 font-mono">Connect</h4>
                <div className="flex flex-col gap-4">
                     <a href={`mailto:${PROFILE.email}`} className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors flex items-center gap-3 font-sans text-sm">
                        <Mail className="h-4 w-4" />
                        {PROFILE.email}
                    </a>
                    <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors flex items-center gap-3 font-sans text-sm">
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                    </a>
                    <a href={PROFILE.github} target="_blank" rel="noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors flex items-center gap-3 font-sans text-sm">
                        <Github className="h-4 w-4" />
                        GitHub
                    </a>
                </div>
            </div>
        </div>
        
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 dark:text-slate-500 font-sans">
            <p>&copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
                <span className="text-xs font-mono">Designed & Built with React</span>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;