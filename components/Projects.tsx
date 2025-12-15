import React, { useState } from 'react';
import { ExternalLink, Github, Code, Brain, Database, Server, ChevronDown, ChevronUp, Network } from 'lucide-react';
import { PROJECTS } from '../constants';
import { ProjectCategory } from '../types';

const Projects: React.FC = () => {
  const categories: ProjectCategory[] = [
    'AI / LLM / NLP Systems',
    'Machine Learning Systems',
    'Backend & API Development',
    'Data Analytics & Business Intelligence'
  ];

  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('AI / LLM / NLP Systems');
  const [expandedProjectId, setExpandedProjectId] = useState<number | null>(null);

  const filteredProjects = PROJECTS.filter(p => p.category === activeCategory);

  const toggleProjectDetails = (projectId: number) => {
    setExpandedProjectId(prev => (prev === projectId ? null : projectId));
  };

  const getCategoryIcon = (cat: ProjectCategory) => {
    switch (cat) {
      case 'AI / LLM / NLP Systems': return <Brain className="w-4 h-4" />;
      case 'Machine Learning Systems': return <Network className="w-4 h-4" />;
      case 'Backend & API Development': return <Server className="w-4 h-4" />;
      case 'Data Analytics & Business Intelligence': return <Database className="w-4 h-4" />;
      default: return <Code className="w-4 h-4" />;
    }
  };

  return (
    <section id="projects" className="py-32 w-full bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Architectural Header */}
        <div className="mb-16 border-b border-slate-300 dark:border-slate-800 pb-8">
            <span className="text-blue-600 dark:text-blue-500 font-mono text-sm font-bold tracking-wider uppercase mb-3 block">
                ./portfolio
            </span>
            <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white font-sans tracking-tight mb-4">
                        Built Systems
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl font-sans">
                        A selection of production-ready architectures, RAG pipelines, and analytical tools.
                    </p>
                </div>
                
                {/* Domain Tabs */}
                <div className="flex flex-wrap gap-3">
                    {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => {
                            setActiveCategory(cat);
                            setExpandedProjectId(null); 
                        }}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-mono font-bold transition-all duration-200 border ${
                        activeCategory === cat
                            ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-slate-900 dark:border-white shadow-lg scale-105'
                            : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800'
                        }`}
                    >
                        {getCategoryIcon(cat)}
                        {cat.split(' ')[0]} {/* Show partial name for brevity on mobile */}
                        <span className="hidden sm:inline">{cat.substring(cat.split(' ')[0].length)}</span>
                    </button>
                    ))}
                </div>
            </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn items-start">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group flex flex-col bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl shadow-sm h-full"
            >
              {/* Card Header */}
              <div className="p-8 pb-0 flex-grow">
                 <div className="flex justify-between items-start mb-6">
                    <div>
                        <span className="text-xs font-mono font-bold text-slate-400 block mb-2">ID: {project.id.toString().padStart(3, '0')}</span>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors font-sans leading-tight">
                        {project.title}
                        </h3>
                    </div>
                    {project.featured && (
                         <span className="flex items-center gap-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-[10px] font-bold px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800 uppercase tracking-wide font-mono">
                           Featured
                         </span>
                    )}
                 </div>

                 <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed mb-8 font-sans font-medium">
                    {project.description}
                 </p>

                 {/* Tech Stack */}
                 <div className="flex flex-wrap gap-x-3 gap-y-2 mb-8">
                    {project.techStack.map(tech => (
                        <span key={tech} className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono font-bold border border-slate-200 dark:border-slate-700">
                            {tech}
                        </span>
                    ))}
                 </div>
              </div>

              {/* Extended Details (Accordion) */}
              {project.extendedDetails && (
                 <div className="px-8 border-t border-dashed border-slate-200 dark:border-slate-800">
                    {expandedProjectId === project.id && (
                        <div className="py-6 space-y-4 animate-fadeIn">
                            <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-lg text-sm font-mono text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 leading-relaxed">
                                <span className="text-blue-600 dark:text-blue-400 font-bold block mb-1">PROBLEM:</span> {project.extendedDetails.problem}
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-lg text-sm font-mono text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 leading-relaxed">
                                <span className="text-emerald-600 dark:text-emerald-400 font-bold block mb-1">SOLUTION:</span> {project.extendedDetails.solution}
                            </div>
                            {project.extendedDetails.architecture && (
                                <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-lg text-sm font-mono text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 leading-relaxed">
                                    <span className="text-purple-600 dark:text-purple-400 font-bold block mb-1">FLOW:</span> {project.extendedDetails.architecture}
                                </div>
                            )}
                        </div>
                    )}
                     <button
                        onClick={(e) => {
                            e.stopPropagation(); 
                            toggleProjectDetails(project.id);
                        }}
                        className="w-full py-4 flex items-center justify-between text-xs font-mono font-bold text-slate-500 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors tracking-wide"
                      >
                        {expandedProjectId === project.id ? 'CLOSE_DETAILS' : 'VIEW_CASE_STUDY'}
                        {expandedProjectId === project.id ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </button>
                 </div>
              )}

              {/* Card Footer */}
              <div className="p-5 bg-slate-50 dark:bg-slate-800/30 rounded-b-2xl border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-xs font-mono font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                        <Github className="h-4 w-4 mr-2" /> 
                        SOURCE
                    </a>
                    {project.link && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-2 text-xs font-mono font-bold text-blue-600 dark:text-blue-500 hover:text-blue-800 dark:hover:text-blue-400 transition-colors"
                        >
                            LIVE DEMO
                            <ExternalLink className="h-4 w-4" />
                        </a>
                    )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;