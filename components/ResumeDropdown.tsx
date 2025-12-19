import React, { useState, useRef, useEffect } from 'react';
import { FileText, ChevronDown, Server, BarChart, Brain, Download, ChevronUp, Shield } from 'lucide-react';
import { RESUME_URLS } from '../constants';

interface ResumeDropdownProps {
  className?: string;
  align?: 'left' | 'center' | 'right';
  direction?: 'up' | 'down';
  label?: string;
  variant?: 'all' | 'secondary';
}

const ResumeDropdown: React.FC<ResumeDropdownProps> = ({ 
  className = '', 
  align = 'left',
  direction = 'down',
  label = 'Resume',
  variant = 'all'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const alignmentClasses = {
    left: 'left-0',
    center: 'left-1/2 -translate-x-1/2',
    right: 'right-0'
  };

  const directionClasses = direction === 'up' 
    ? 'bottom-full mb-2' 
    : 'top-full mt-2';

  const allResumes = [
    {
      id: 'sde',
      label: "📄 Software Engineer & QA (Backend Focus)",
      sub: "General SDE, Python, QA Automation",
      url: RESUME_URLS.BACKEND,
      icon: <Shield className="h-4 w-4" />,
      isPrimary: true
    },
    {
      id: 'data',
      label: "📊 Data Analyst & BI Engineer",
      sub: "SQL, Power BI, Data Engineering",
      url: RESUME_URLS.DATA_ANALYST,
      icon: <BarChart className="h-4 w-4" />,
      isPrimary: false
    },
    {
      id: 'ai',
      label: "🧠 AI & Machine Learning Engineer",
      sub: "GenAI, CV, Python ML",
      url: RESUME_URLS.AI_ML,
      icon: <Brain className="h-4 w-4" />,
      isPrimary: false
    }
  ];

  const displayedResumes = variant === 'secondary' 
    ? allResumes.filter(r => !r.isPrimary)
    : allResumes;

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`inline-flex items-center justify-center px-5 py-2.5 border text-xs font-mono font-bold rounded-lg transition-all w-full md:w-auto ${
            isOpen 
            ? 'border-horizon-sky text-horizon-sky bg-horizon-sky/5'
            : 'border-slate-200 dark:border-midnight-700 text-slate-600 dark:text-slate-400 hover:border-horizon-sky dark:hover:border-horizon-sky hover:bg-slate-50 dark:hover:bg-white/5'
        }`}
      >
        <FileText className="mr-2 h-4 w-4" />
        {label}
        {direction === 'up' ? (
             <ChevronUp className={`ml-2 h-4 w-4 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
        ) : (
             <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
        )}
      </button>

      {isOpen && (
        <div 
          className={`absolute ${alignmentClasses[align]} ${directionClasses} w-72 rounded-xl shadow-2xl bg-white dark:bg-midnight-900 ring-1 ring-black ring-opacity-5 focus:outline-none z-50 animate-fadeIn border border-slate-200 dark:border-midnight-800 overflow-hidden`}
          role="menu"
        >
            <div className="px-4 py-3 bg-slate-50 dark:bg-midnight-800 border-b border-slate-200 dark:border-midnight-700">
                <span className="text-[10px] font-mono text-slate-600 dark:text-white uppercase tracking-widest font-bold block mb-1">Tailored for Your Team</span>
                <span className="text-[9px] font-sans text-slate-400 leading-tight block italic">Select the resume version that matches the role you are hiring for:</span>
            </div>
          <div className="py-1">
            {displayedResumes.map((resume) => (
              <a
                key={resume.id}
                href={resume.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center px-4 py-3 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors relative"
                role="menuitem"
              >
                <div className={`flex-shrink-0 mr-3 ${resume.isPrimary ? 'text-horizon-sky' : 'text-slate-400'}`}>
                  {resume.icon}
                </div>
                
                <div className="flex-1 flex flex-col">
                    <span className={`text-[11px] font-sans font-bold leading-tight ${resume.isPrimary ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'}`}>
                        {resume.label}
                    </span>
                    <span className="text-[9px] text-slate-500 uppercase tracking-tighter mt-0.5">{resume.sub}</span>
                </div>

                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-400">
                    <Download className="h-3.5 w-3.5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeDropdown;