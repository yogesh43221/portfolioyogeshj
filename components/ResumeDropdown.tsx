import React, { useState, useRef, useEffect } from 'react';
import { FileText, ChevronDown, BarChart, Brain, Download, ChevronUp, Shield } from 'lucide-react';
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
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const alignmentClasses = {
    left: 'left-0',
    center: 'left-1/2 -translate-x-1/2',
    right: 'right-0'
  };

  const directionClasses = direction === 'up' ? 'bottom-full mb-4' : 'top-full mt-4';

  const resumes = [
    { id: 'sde', label: "Software & QA (Backend)", url: RESUME_URLS.BACKEND, icon: <Shield className="h-4 w-4" /> },
    { id: 'data', label: "Data Analyst & BI", url: RESUME_URLS.DATA_ANALYST, icon: <BarChart className="h-4 w-4" /> },
    { id: 'ai', label: "AI & ML Engineer", url: RESUME_URLS.AI_ML, icon: <Brain className="h-4 w-4" /> }
  ];

  return (
    <div className={`relative inline-block ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn-secondary w-full md:w-auto !px-6 !py-3.5 !text-[11px] !font-mono"
      >
        <FileText className="mr-2 h-4 w-4" />
        {label}
        {direction === 'up' ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
      </button>

      {isOpen && (
        <div className={`absolute ${alignmentClasses[align]} ${directionClasses} w-72 glass-card !rounded-2xl shadow-2xl z-50 overflow-hidden animate-fadeIn`}>
          <div className="px-5 py-4 bg-slate-50 dark:bg-midnight-800 border-b border-slate-200 dark:border-midnight-700">
              <span className="accent-mono !text-[9px] block mb-1">Engineering Specializations</span>
              <p className="text-[10px] text-slate-500 leading-tight italic">Select the profile most relevant to your requirements.</p>
          </div>
          <div className="py-2">
            {resumes.map((resume) => (
              <a
                key={resume.id}
                href={resume.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center px-5 py-4 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
              >
                <div className="flex-shrink-0 mr-4 text-horizon-sky">{resume.icon}</div>
                <div className="flex-1">
                    <span className="text-xs font-bold text-slate-900 dark:text-white block">{resume.label}</span>
                    <span className="accent-mono !text-[8px] !text-slate-400">PDF Document</span>
                </div>
                <Download className="h-4 w-4 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeDropdown;