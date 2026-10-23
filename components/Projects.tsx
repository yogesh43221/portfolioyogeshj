import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  ArrowUpRight, 
  ShieldCheck,
  Server,
  Brain,
  Network,
  Code,
  X,
  FileText,
  Layers,
  Sparkles,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { PROJECTS } from '../constants';
import { ProjectCategory, Project } from '../types';
import { ProjectDossierIllustration } from './ProjectDossierIllustration';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const projectNumber = String(project.id).padStart(2, '0');

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-2.5 sm:p-6 pt-20 sm:pt-6 pb-3 sm:pb-6 bg-slate-950/85 backdrop-blur-sm overflow-hidden select-none animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`modal-title-${project.id}`}
      onClick={onClose}
    >
      <div 
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="bg-[#FFFDF9] dark:bg-[#121620] border border-amber-900/20 dark:border-slate-800 rounded-2xl sm:rounded-3xl max-w-3xl w-full max-h-[calc(100dvh-5.5rem)] sm:max-h-[calc(100vh-3.5rem)] flex flex-col shadow-2xl relative overflow-hidden"
      >
        {/* Modal Dossier Header Strip */}
        <div className="px-4 py-3 sm:px-8 sm:py-4 border-b border-amber-900/10 dark:border-slate-800/80 bg-[#FAF5EC] dark:bg-[#161B26] flex items-center justify-between gap-3 flex-shrink-0 min-w-0">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-shrink">
            <span className="font-mono text-xs font-bold text-amber-800 dark:text-amber-400 shrink-0">
              CASE FILE #{projectNumber}
            </span>
            <span className="text-slate-300 dark:text-slate-700 font-mono hidden xs:inline" aria-hidden="true">·</span>
            <span className="text-xs font-mono text-slate-600 dark:text-slate-400 truncate">
              {project.category}
            </span>
            {project.deployed && project.link && (
              <>
                <span className="text-slate-300 dark:text-slate-700 font-mono hidden sm:inline" aria-hidden="true">·</span>
                <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-bold shrink-0 hidden sm:inline">
                  Deployed App
                </span>
              </>
            )}
          </div>

          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="p-2 min-h-[44px] min-w-[44px] rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800 transition-colors flex items-center justify-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-horizon-sky"
            aria-label="Close case file modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-8 overflow-y-auto space-y-6 flex-1 min-h-0 text-slate-800 dark:text-slate-200 font-sans">
          
          {/* Project Header */}
          <div>
            <h3 
              id={`modal-title-${project.id}`}
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug mb-3"
            >
              {project.title}
            </h3>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              {project.description}
            </p>
          </div>

          {/* Technical Schematic Blueprint */}
          <div className="rounded-xl overflow-hidden border border-amber-900/15 dark:border-slate-800">
            <ProjectDossierIllustration projectId={project.id} className="w-full h-52 sm:h-64" />
          </div>

          {/* Tech Stack Unboxed Metadata */}
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
              Technologies &amp; Architecture
            </span>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span 
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono bg-amber-500/10 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 rounded-md border border-amber-900/10 dark:border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Extended Details / Case Study Sections */}
          {project.extendedDetails && (
            <div className="space-y-6 pt-2 border-t border-amber-900/10 dark:border-slate-800">
              
              {/* Problem Statement */}
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 mb-2">
                  01. Problem &amp; Context
                </h4>
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.extendedDetails.problem}
                </p>
              </div>

              {/* Approach & Solution */}
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-800 dark:text-sky-400 mb-2">
                  02. System Design &amp; Architecture
                </h4>
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.extendedDetails.solution}
                </p>
              </div>

              {/* Key Contributions */}
              {project.extendedDetails.contributions && project.extendedDetails.contributions.length > 0 && (
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">
                    03. Key Engineering Contributions
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {project.extendedDetails.contributions.map((c, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-amber-600 dark:text-amber-400 font-bold mt-1 text-xs">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Testing & QA Verification */}
              {project.extendedDetails.testing && (
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 mb-2">
                    04. Testing &amp; QA Verification
                  </h4>
                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                    {project.extendedDetails.testing}
                  </p>
                </div>
              )}

              {/* Results */}
              {project.extendedDetails.results && (
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">
                    05. Verified Results
                  </h4>
                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                    {project.extendedDetails.results}
                  </p>
                </div>
              )}

              {/* Scope & Boundaries */}
              {project.extendedDetails.limitations && (
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    Scope &amp; Operating Boundaries
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 italic leading-relaxed">
                    {project.extendedDetails.limitations}
                  </p>
                </div>
              )}

            </div>
          )}

        </div>

        {/* Modal Action Footer */}
        <div className="px-6 py-4 sm:px-8 border-t border-amber-900/10 dark:border-slate-800 bg-[#FAF5EC] dark:bg-[#161B26] flex items-center justify-between gap-4 flex-shrink-0">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-800 dark:text-slate-200 hover:text-horizon-sky dark:hover:text-horizon-sky transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-horizon-sky"
          >
            <Github className="w-4 h-4" />
            <span>Open GitHub Repository</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {project.deployed && project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-white bg-emerald-600 hover:bg-emerald-500 px-3.5 py-2 rounded-xl transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <span>Live Application</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
              Repository Implementation Only
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export const Projects: React.FC = () => {
  const categories: ('All' | ProjectCategory)[] = [
    'All',
    'QA Automation',
    'Backend / API',
    'AI / LLM',
    'Machine Learning'
  ];

  const [activeCategory, setActiveCategory] = useState<'All' | ProjectCategory>('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  // Identify whether OrbitDesk (Project 1) is in the current filtered view for lead showcase presentation
  const leadProject = activeCategory === 'All' || activeCategory === 'QA Automation' 
    ? PROJECTS.find(p => p.id === 1) 
    : null;

  const standardProjects = leadProject 
    ? filteredProjects.filter(p => p.id !== leadProject.id)
    : filteredProjects;

  return (
    <section 
      id="projects" 
      className="py-16 sm:py-20 lg:py-28 w-full bg-[#FAF7F2] dark:bg-[#0E1117] transition-colors duration-150 relative scroll-mt-24 sm:scroll-mt-28"
      aria-label="Engineering Projects Portfolio"
    >
      <div className="section-container max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="border-b border-amber-900/15 dark:border-slate-800 pb-8 mb-10 sm:mb-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-horizon-sky"></span>
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-sky-800 dark:text-sky-400">
                  Engineering Case Files · Public Codebases
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white font-sans tracking-tight leading-tight">
                Selected Software &amp; QA Systems
              </h2>
            </div>

            <p className="text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed text-sm sm:text-base md:text-lg font-sans font-medium">
              Seven verified systems spanning test automation suites, backend API services, RAG retrieval pipelines, and machine learning models with open source code.
            </p>
          </div>

          {/* Segmented Filter Control */}
          <div 
            className="mt-8 flex flex-wrap gap-2 p-1.5 bg-[#FAF5EC] dark:bg-[#161B26] rounded-2xl w-fit border border-amber-900/10 dark:border-slate-800"
            role="tablist"
            aria-label="Filter projects by discipline"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              const count = cat === 'All' 
                ? PROJECTS.length 
                : PROJECTS.filter(p => p.category === cat).length;

              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all min-h-[36px] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-horizon-sky ${
                    isActive
                      ? 'bg-white dark:bg-[#202736] text-slate-900 dark:text-white shadow-xs border border-amber-900/10 dark:border-slate-700'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                >
                  <span>{cat === 'All' ? 'All Projects' : cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive 
                      ? 'bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300' 
                      : 'bg-slate-200/60 dark:bg-slate-800 text-slate-500'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* LEAD PROJECT SHOWCASE (OrbitDesk Support Agent) */}
        {leadProject && (
          <div className="mb-12">
            <article className="rounded-2xl sm:rounded-3xl border border-amber-900/15 dark:border-slate-800 bg-[#FFFDF9] dark:bg-[#121620] shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                
                {/* Left: Schematic Illustration */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 lg:border-r border-amber-900/10 dark:border-slate-800 flex flex-col justify-center bg-[#FAF5EC]/50 dark:bg-[#161B26]/50">
                  <div className="flex items-center justify-between mb-4 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <span className="font-bold text-amber-800 dark:text-amber-400">
                      LEAD CASE STUDY · 01
                    </span>
                    <span>AUTOMATION MATRIX</span>
                  </div>
                  <ProjectDossierIllustration projectId={leadProject.id} className="w-full h-56 sm:h-72" />
                </div>

                {/* Right: Editorial Narrative */}
                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    {/* Unboxed Metadata Header */}
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 mb-3">
                      <span className="text-emerald-700 dark:text-emerald-400 font-bold">{leadProject.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>Python &amp; Pytest</span>
                      <span aria-hidden="true">·</span>
                      <span>FastAPI</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-sans tracking-tight mb-3">
                      {leadProject.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-sans mb-6 text-sm sm:text-base">
                      {leadProject.description}
                    </p>

                    {/* Architectural Highlights */}
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-700 dark:text-slate-300">
                        <span className="text-amber-600 dark:text-amber-400">→</span>
                        <span>Multi-turn intent routing &amp; fallback branches</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-700 dark:text-slate-300">
                        <span className="text-amber-600 dark:text-amber-400">→</span>
                        <span>Pydantic v2 request schema validation</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-700 dark:text-slate-300">
                        <span className="text-amber-600 dark:text-amber-400">→</span>
                        <span>Pytest automation covering tool failures &amp; edge cases</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-6 border-t border-amber-900/10 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
                    <button
                      onClick={() => setSelectedCaseStudy(leadProject)}
                      className="px-4 py-2 text-xs font-mono font-bold text-amber-900 dark:text-amber-200 bg-amber-500/15 hover:bg-amber-500/25 dark:bg-amber-500/10 dark:hover:bg-amber-500/20 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 min-h-[40px] flex items-center gap-2"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Inspect Case Study</span>
                    </button>

                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                        Repo Only
                      </span>
                      <a
                        href={leadProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono font-bold text-slate-800 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-horizon-sky min-h-[40px]"
                        title={`View repository for ${leadProject.title}`}
                      >
                        <Github className="w-4 h-4" />
                        <span>Source</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </article>
          </div>
        )}

        {/* EDITORIAL GRID (Remaining Projects) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {standardProjects.map((project) => {
            const projectNumber = String(project.id).padStart(2, '0');

            return (
              <article 
                key={project.id}
                className="rounded-2xl sm:rounded-3xl border border-amber-900/15 dark:border-slate-800 bg-[#FFFDF9] dark:bg-[#121620] shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Card Header Strip */}
                  <div className="px-6 py-3.5 border-b border-amber-900/10 dark:border-slate-800 bg-[#FAF5EC]/60 dark:bg-[#161B26]/60 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-amber-800 dark:text-amber-400">
                        #{projectNumber}
                      </span>
                      <span className="text-slate-300 dark:text-slate-700 font-mono" aria-hidden="true">·</span>
                      <span className="text-slate-600 dark:text-slate-400">
                        {project.category}
                      </span>
                    </div>

                    {project.deployed && project.link ? (
                      <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        <span>Deployed</span>
                      </span>
                    ) : (
                      <span className="text-slate-400 dark:text-slate-500">
                        Prototype
                      </span>
                    )}
                  </div>

                  {/* Schematic Illustration */}
                  <div className="p-6 pb-2">
                    <ProjectDossierIllustration projectId={project.id} className="w-full h-48 sm:h-52" />
                  </div>

                  {/* Text Content */}
                  <div className="p-6 pt-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-sans tracking-tight mb-2 leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans mb-4">
                      {project.description}
                    </p>

                    {/* Unboxed Tech Stack */}
                    <div className="text-xs font-mono text-slate-500 dark:text-slate-400 flex flex-wrap gap-x-2 gap-y-1">
                      {project.techStack.map((tech, i) => (
                        <span key={tech} className="inline-flex items-center">
                          <span className="text-slate-700 dark:text-slate-300 font-medium">{tech}</span>
                          {i < project.techStack.length - 1 && (
                            <span className="text-slate-300 dark:text-slate-700 ml-2" aria-hidden="true">·</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-6 py-4 border-t border-amber-900/10 dark:border-slate-800 bg-[#FAF5EC]/40 dark:bg-[#161B26]/40 flex flex-wrap items-center justify-between gap-3 mt-4">
                  <button
                    onClick={() => setSelectedCaseStudy(project)}
                    className="text-xs font-mono font-bold text-amber-900 dark:text-amber-300 hover:text-amber-700 dark:hover:text-amber-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-horizon-sky py-1"
                  >
                    Inspect Case File →
                  </button>

                  <div className="flex items-center gap-3">
                    {project.deployed && project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono font-bold text-white bg-emerald-600 hover:bg-emerald-500 px-3 py-1.5 rounded-lg transition-colors shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                        title={`Open live deployed application for ${project.title}`}
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                        Repo Only
                      </span>
                    )}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-700 dark:text-slate-300 hover:text-horizon-sky dark:hover:text-horizon-sky transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-horizon-sky px-2 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                      title={`View source repository for ${project.title}`}
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Source</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

              </article>
            );
          })}
        </div>

      </div>

      {/* Case Study Modal Dialog */}
      <CaseStudyModal 
        project={selectedCaseStudy} 
        onClose={() => setSelectedCaseStudy(null)} 
      />
    </section>
  );
};

export default Projects;
