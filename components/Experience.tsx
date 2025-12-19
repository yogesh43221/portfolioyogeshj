import React, { useState } from 'react';
import { Briefcase, GraduationCap, ArrowUpRight, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { EXPERIENCE, EDUCATION, ACHIEVEMENTS, PUBLICATIONS, CERTIFICATIONS, ALL_CERTIFICATIONS_URL, EARLY_ENGINEERING } from '../constants';
import SkillNetwork from './SkillNetwork';

const Experience: React.FC = () => {
  const [showEarlyCareer, setShowEarlyCareer] = useState(false);

  return (
    <section id="experience" className="py-32 w-full bg-white dark:bg-midnight-950 transition-colors duration-500 relative">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Architectural Header */}
        <div className="mb-20 border-b border-slate-300 dark:border-midnight-800 pb-8">
            <span className="text-horizon-sky font-mono text-sm font-bold tracking-wider uppercase mb-3 block">
                ./experience
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white font-sans tracking-tight">
                Professional Trajectory
            </h2>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 xl:gap-28">
          
          {/* Left Column: Work Experience & Education (Wider) */}
          <div className="xl:col-span-7 space-y-24">
            
            {/* Work Experience */}
            <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-12 flex items-center gap-3 font-sans">
                    <Briefcase className="h-6 w-6 text-horizon-sky" /> 
                    Experience
                </h3>
                
                <div className="relative border-l-2 border-slate-200 dark:border-midnight-800 ml-3 space-y-16">
                {EXPERIENCE.map((job) => (
                    <div key={job.id} className="relative pl-10 group">
                        {/* Timeline Dot */}
                        <div className="absolute -left-[9px] top-2.5 h-4 w-4 rounded-full bg-slate-200 dark:bg-midnight-700 ring-4 ring-white dark:ring-midnight-900 group-hover:bg-horizon-sky transition-colors"></div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-3">
                            <h4 className="text-xl font-bold text-slate-900 dark:text-white font-sans">{job.role}</h4>
                            <span className="text-xs font-mono font-bold text-slate-600 dark:text-slate-400 mt-2 sm:mt-0 bg-slate-100 dark:bg-midnight-800 px-3 py-1 rounded-full border border-slate-200 dark:border-midnight-700">
                            {job.period}
                            </span>
                        </div>
                        
                        <div className="text-horizon-sky font-bold mb-5 text-base font-sans">{job.company}</div>
                        
                        {/* Modular Card Layout for Hub9 */}
                        {job.modularAchievements ? (
                            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                                {job.modularAchievements.map((block, idx) => (
                                    <div key={idx} className="p-5 rounded-xl bg-slate-50 dark:bg-midnight-900/50 border border-slate-200 dark:border-midnight-800 transition-all hover:border-horizon-sky/30">
                                        <h5 className="text-sm font-bold text-slate-900 dark:text-white mb-3 font-mono uppercase tracking-wider flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-horizon-sky"></div>
                                            {block.title}
                                        </h5>
                                        <ul className="space-y-2">
                                            {block.points.map((pt, i) => (
                                                <li key={i} className="flex items-start text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                                                    <span className="mr-3 mt-1.5 w-1 h-1 bg-slate-400 rounded-full flex-shrink-0"></span>
                                                    {pt}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <ul className="space-y-4">
                                {job.achievements.map((point, index) => (
                                <li key={index} className="flex items-start text-slate-700 dark:text-slate-300 text-base leading-relaxed font-sans font-medium">
                                    <span className="mr-4 mt-2.5 w-1.5 h-1.5 bg-slate-400 dark:bg-slate-600 rounded-full flex-shrink-0"></span>
                                    {point}
                                </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
                </div>

                {/* Collapsible Early Career Section */}
                <div className="mt-12 pt-6 ml-3 border-l-2 border-dashed border-slate-200 dark:border-midnight-800/50 pl-10">
                    <button
                        onClick={() => setShowEarlyCareer(!showEarlyCareer)}
                        className="flex items-center gap-2 text-xs font-mono font-bold text-slate-500 hover:text-horizon-sky transition-colors uppercase tracking-widest text-left"
                    >
                        {showEarlyCareer ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        Prior Engineering Foundation
                    </button>

                    {showEarlyCareer && (
                        <div className="mt-6 animate-fadeIn bg-slate-50 dark:bg-midnight-800/20 p-6 rounded-lg border border-slate-100 dark:border-midnight-700">
                            {EARLY_ENGINEERING.map((job) => (
                                <div key={job.id} className="opacity-90">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                                        <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 font-sans">{job.role}</h4>
                                        <span className="text-[10px] font-mono text-slate-500 mt-1 sm:mt-0">{job.period}</span>
                                    </div>
                                    <div className="text-xs font-bold text-slate-600 dark:text-slate-400 mb-2">{job.company}</div>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 font-medium italic font-sans">{job.description}</p>
                                    <ul className="space-y-2">
                                        {job.achievements.map((point, i) => (
                                            <li key={i} className="flex items-start text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                                                <span className="mr-2 mt-1.5 w-1 h-1 bg-slate-400 rounded-full flex-shrink-0"></span>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

             {/* Education Section */}
             <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-12 flex items-center gap-3 font-sans">
                  <GraduationCap className="h-6 w-6 text-horizon-sky" />
                  Education
              </h3>
              <div className="relative border-l-2 border-slate-200 dark:border-midnight-800 ml-3">
                {EDUCATION.map((edu) => (
                  <div key={edu.id} className="relative pl-10 pb-2 group">
                    <div className="absolute -left-[9px] top-2.5 h-4 w-4 rounded-full bg-slate-200 dark:bg-midnight-700 ring-4 ring-white dark:ring-midnight-900 group-hover:bg-horizon-sky transition-colors"></div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-horizon-sky transition-colors font-sans">{edu.degree}</h4>
                      <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-midnight-800 px-2 py-1 rounded">
                        {edu.period}
                      </span>
                    </div>
                    <div className="text-slate-800 dark:text-slate-200 text-base font-medium mb-2 font-sans">{edu.institution}</div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm font-sans">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Research, Certs, Awards, Skills */}
          <div className="xl:col-span-5 flex flex-col gap-16">
            
            {/* 1. Skills Visualization */}
            <SkillNetwork />

            {/* 2. Research Publications */}
            <div className="p-6 bg-slate-50 dark:bg-midnight-800 rounded-xl border border-slate-200 dark:border-midnight-700">
                <h3 className="font-mono text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-6 flex items-center gap-2">
                    Research
                    <span className="h-px flex-1 bg-slate-300 dark:bg-midnight-700"></span>
                </h3>
                <div className="space-y-6">
                    {PUBLICATIONS.map((pub) => (
                        <div key={pub.id} className="group">
                             <a 
                                href={pub.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="block mb-2"
                             >
                                <div className="flex justify-between items-start gap-4">
                                    <h4 className="text-base font-bold text-slate-900 dark:text-white leading-snug group-hover:text-horizon-sky transition-colors font-sans decoration-2 underline-offset-4 group-hover:underline">
                                        {pub.title}
                                    </h4>
                                    <ArrowUpRight className="h-4 w-4 text-slate-400 flex-shrink-0" />
                                </div>
                                <div className="text-xs font-mono text-horizon-sky mt-2 font-bold">
                                    {pub.conference} <span className="text-slate-400 px-1">•</span> {pub.year}
                                </div>
                             </a>
                             <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                                {pub.summary}
                             </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* 3. Certifications */}
            <div>
                 <div className="flex items-center justify-between mb-6 border-b border-slate-200 dark:border-midnight-700 pb-3">
                    <h3 className="font-mono text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest">
                        Certifications
                    </h3>
                    <a href={ALL_CERTIFICATIONS_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[11px] font-bold text-horizon-sky hover:text-horizon-gold transition-colors font-mono bg-horizon-sky/5 dark:bg-midnight-800 px-3 py-1.5 rounded-md border border-horizon-sky/10">
                        View all certifications <ExternalLink className="w-3 h-3" />
                    </a>
                </div>
                
                <ul className="space-y-5">
                    {CERTIFICATIONS.map((cert) => (
                        <li key={cert.id} className="group flex justify-between items-start gap-4">
                            <a href={cert.link} target={cert.link !== "#" ? "_blank" : "_self"} rel="noopener noreferrer" className="flex-1">
                                <h4 className="text-base font-semibold text-slate-900 dark:text-white group-hover:text-horizon-sky transition-colors font-sans flex items-center gap-2">
                                    {cert.title}
                                    {cert.link && cert.link !== "#" && (
                                        <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity text-slate-400" />
                                    )}
                                </h4>
                                <div className="text-sm text-slate-500 mt-0.5 font-sans font-medium">
                                    {cert.issuer}
                                </div>
                            </a>
                            <span className="text-xs font-mono text-slate-400 tabular-nums bg-slate-50 dark:bg-midnight-800 px-2 py-1 rounded">
                                {cert.date}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* 4. Honors */}
            <div>
              <h3 className="font-mono text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-6 border-b border-slate-200 dark:border-midnight-700 pb-3">
                Honors
              </h3>
              <ul className="space-y-6">
                {ACHIEVEMENTS.map((ach) => (
                  <li key={ach.id} className="group">
                        <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-horizon-sky transition-colors font-sans">
                            {ach.title}
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed font-sans font-medium">
                            {ach.description}
                        </p>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Subtle Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-midnight-700 to-transparent opacity-60"></div>
    </section>
  );
};

export default Experience;