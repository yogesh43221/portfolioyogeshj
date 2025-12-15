import React, { useState, useRef, useEffect } from 'react';
import { FileText, ChevronDown, Server, BarChart, Brain, Download } from 'lucide-react';
import { RESUME_URLS } from '../constants';

interface ResumeDropdownProps {
  className?: string;
  align?: 'left' | 'center' | 'right';
  direction?: 'up' | 'down';
}

const ResumeDropdown: React.FC<ResumeDropdownProps> = ({ 
  className = '', 
  align = 'left',
  direction = 'down'
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

  // Calculate alignment classes
  const alignmentClasses = {
    left: 'left-0',
    center: 'left-1/2 -translate-x-1/2',
    right: 'right-0'
  };

  // Calculate direction classes
  const directionClasses = direction === 'up' 
    ? 'bottom-full mb-2' 
    : 'top-full mt-2';

  const resumes = [
    {
      id: 'ai',
      label: "AI_Engineer.pdf",
      sub: "ML & Data",
      url: RESUME_URLS.AI_ML,
      icon: <Brain className="h-4 w-4" />,
      isPrimary: true
    },
    {
      id: 'data',
      label: "Data_Analyst.pdf",
      sub: "BI & Analytics",
      url: RESUME_URLS.DATA_ANALYST,
      icon: <BarChart className="h-4 w-4" />,
      isPrimary: false
    },
    {
      id: 'backend',
      label: "Backend_Dev.pdf",
      sub: "API & Systems",
      url: RESUME_URLS.BACKEND,
      icon: <Server className="h-4 w-4" />,
      isPrimary: false
    }
  ];

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`inline-flex items-center justify-center px-6 py-3 border text-sm font-mono font-medium rounded transition-all w-full md:w-auto ${
            isOpen 
            ? 'border-blue-500 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/10'
            : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800'
        }`}
      >
        <FileText className="mr-2 h-4 w-4" />
        Resume
        <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div 
          className={`absolute ${alignmentClasses[align]} ${directionClasses} w-72 max-w-[90vw] rounded shadow-2xl bg-white dark:bg-slate-900 ring-1 ring-black ring-opacity-5 focus:outline-none z-50 animate-fadeIn border border-slate-200 dark:border-slate-700 overflow-hidden`}
          role="menu"
        >
            <div className="px-4 py-2 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
                <span className="text-[10px] font-mono text-slate-500 uppercase">Select Target Role</span>
            </div>
          <div className="py-1">
            {resumes.map((resume) => (
              <a
                key={resume.id}
                href={resume.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors relative"
                role="menuitem"
              >
                <div className={`flex-shrink-0 mr-3 ${resume.isPrimary ? 'text-blue-600 dark:text-blue-500' : 'text-slate-400 dark:text-slate-500'}`}>
                  {resume.icon}
                </div>
                
                <div className="flex-1 flex flex-col">
                    <span className={`text-sm font-mono ${resume.isPrimary ? 'text-slate-900 dark:text-white font-bold' : 'text-slate-700 dark:text-slate-300'}`}>
                        {resume.label}
                    </span>
                    <span className="text-[10px] text-slate-500">{resume.sub}</span>
                </div>

                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-400">
                    <Download className="h-4 w-4" />
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