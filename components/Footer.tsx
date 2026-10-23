import React from 'react';
import { PROFILE, NAV_LINKS, RESUME_PATH } from '../constants';
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
    <footer className="w-full bg-white dark:bg-midnight-950 border-t border-slate-200 dark:border-midnight-800 pt-12 sm:pt-16 pb-10 sm:pb-12 transition-colors duration-150">
      <div className="section-container">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16">
            {/* Brand Column */}
            <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-sans tracking-tight">
                    YOGESH JADHAV
                </h3>
                <p className="text-slate-600 dark:text-slate-400 max-w-xs font-sans text-sm leading-relaxed">
                    QA Automation / Software Engineer with practical experience across Python, Playwright, API Testing, SQL, and FastAPI.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                    <a 
                      href={RESUME_PATH} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      download="Yogesh_Jadhav_QA_Resume.pdf"
                      className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-midnight-950 rounded-xl text-xs font-bold font-sans transition-all hover:opacity-90 shadow-sm"
                    >
                      <Download className="w-4 h-4 text-horizon-sky" />
                      Download Resume
                    </a>
                </div>
            </div>

            {/* Quick Links Column */}
            <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-6 font-sans">Quick Links</h4>
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
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-6 font-sans">Connect</h4>
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