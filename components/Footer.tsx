import React from 'react';
import { PROFILE, NAV_LINKS, RESUME_URLS } from '../constants';
import ResumeDropdown from './ResumeDropdown';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

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
    <footer className="w-full bg-[#F3FDFF] dark:bg-midnight-950 border-t border-[#CBD5E1] dark:border-midnight-800 pt-20 pb-10 transition-colors duration-150">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Brand Column */}
            <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-mono tracking-tighter">
                    DEV_PERSONA
                </h3>
                <p className="text-slate-600 dark:text-slate-400 max-w-xs font-sans text-sm leading-relaxed">
                    Crafting intelligent systems and robust data architectures for the future.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                    <a 
                      href={RESUME_URLS.AI_ML} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-horizon-sky text-white rounded-lg text-xs font-bold font-mono transition-all hover:opacity-90 shadow-md"
                    >
                      <Download className="w-4 h-4" />
                      AI_RESUME.PDF
                    </a>
                   <ResumeDropdown direction="up" label="Others" variant="secondary" />
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
                                className="text-slate-600 dark:text-slate-400 hover:text-horizon-sky transition-colors flex items-center gap-3 font-sans text-sm"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-midnight-700"></span>
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
                     <a href={`mailto:${PROFILE.email}`} className="text-slate-600 dark:text-slate-400 hover:text-horizon-sky transition-colors flex items-center gap-3 font-sans text-sm">
                        <Mail className="h-4 w-4" />
                        {PROFILE.email}
                    </a>
                    <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-[#0A66C2] transition-colors flex items-center gap-3 font-sans text-sm">
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                    </a>
                    <a href={PROFILE.github} target="_blank" rel="noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-3 font-sans text-sm">
                        <Github className="h-4 w-4" />
                        GitHub
                    </a>
                </div>
            </div>
        </div>
        
        <div className="border-t border-slate-200 dark:border-midnight-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 dark:text-slate-500 font-sans">
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