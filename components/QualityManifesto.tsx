import React from 'react';
import { ShieldCheck, Layers, Database, Code, CheckCircle, Terminal, Cpu, FileCheck } from 'lucide-react';

export const QualityManifesto: React.FC = () => {
  return (
    <section 
      id="why_hire_me" 
      className="py-16 sm:py-20 lg:py-24 w-full bg-[#FAF7F2] dark:bg-[#0E1117] transition-colors duration-200 relative overflow-hidden scroll-mt-24 sm:scroll-mt-28"
      aria-label="Quality Manifesto and Engineering Philosophy"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute left-1/4 top-1/3 w-96 h-96 rounded-full bg-amber-200/20 dark:bg-amber-500/5 blur-[120px]"></div>
        <div className="absolute right-1/4 bottom-1/4 w-96 h-96 rounded-full bg-sky-200/20 dark:bg-sky-500/5 blur-[120px]"></div>
      </div>

      <div className="section-container max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-amber-700 dark:text-amber-400">
              Engineering Manifesto • Studio Notes
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            Quality is an engineering discipline.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Reliable software is not an accident. It comes from deterministic test design, strict schema validation, and verifying edge cases before code reaches production.
          </p>
        </div>

        {/* The Illustrated Open Notebook Spread */}
        <div className="relative rounded-2xl sm:rounded-3xl border border-amber-900/15 dark:border-slate-800 bg-[#FFFDF9] dark:bg-[#121620] shadow-md shadow-amber-950/5 dark:shadow-black/40 overflow-hidden">
          
          {/* Notebook Paper Top Header Strip */}
          <div className="px-6 sm:px-10 py-3.5 border-b border-amber-900/10 dark:border-slate-800/80 bg-[#FAF5EC] dark:bg-[#161B26] flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-400/80"></span>
              <span className="ml-2 font-bold text-slate-700 dark:text-slate-300">LAB NOTEBOOK // QA &amp; SDET PRACTICE</span>
            </div>
            <div className="hidden sm:flex items-center gap-4">
              <span>VOL. 02</span>
              <span>•</span>
              <span>PUNE STUDIO</span>
            </div>
          </div>

          {/* Two-Page Spread Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 relative">
            
            {/* Center Spine Divider Line (visible on desktop) */}
            <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-amber-900/10 via-amber-900/20 to-amber-900/10 dark:from-slate-800/40 dark:via-slate-700/60 dark:to-slate-800/40 pointer-events-none"></div>

            {/* PAGE 1 (Left 6 Cols): Engineering Tenets */}
            <div className="lg:col-span-6 p-6 sm:p-10 lg:pr-12 lg:border-r border-amber-900/10 dark:border-slate-800/80">
              
              <div className="flex items-center justify-between mb-8 pb-3 border-b border-amber-900/10 dark:border-slate-800">
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-sky-700 dark:text-sky-400">
                  Page 01 // Core Philosophy
                </span>
                <span className="text-xs font-mono text-slate-400">§ Principles</span>
              </div>

              <div className="space-y-8">
                
                {/* Tenet 1 */}
                <div className="group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-950/60 border border-sky-300/60 dark:border-sky-800/60 flex items-center justify-center flex-shrink-0 text-sky-700 dark:text-sky-400 mt-1">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1.5 font-sans flex items-center gap-2">
                        <span>1. Deterministic by Design</span>
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                        Test flakiness is treated as a critical defect. Automation suites must produce reproducible, consistent results using resilient locator strategies, explicit wait conditions, and clean test fixtures.
                      </p>
                      <div className="mt-2 text-xs font-mono text-sky-700 dark:text-sky-400">
                        Focus: Playwright · Pytest · Multi-browser consistency
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tenet 2 */}
                <div className="group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/60 border border-amber-300/60 dark:border-amber-800/60 flex items-center justify-center flex-shrink-0 text-amber-700 dark:text-amber-400 mt-1">
                      <Code className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1.5 font-sans flex items-center gap-2">
                        <span>2. Contract-First API Resilience</span>
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                        Backends and frontends succeed when contracts are firm. Using FastAPI and Pydantic models to validate schemas, boundary payloads, and status codes catches breaking regressions early.
                      </p>
                      <div className="mt-2 text-xs font-mono text-amber-700 dark:text-amber-400">
                        Focus: FastAPI · REST contracts · Postman validation
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tenet 3 */}
                <div className="group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300/60 dark:border-emerald-800/60 flex items-center justify-center flex-shrink-0 text-emerald-700 dark:text-emerald-400 mt-1">
                      <Database className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1.5 font-sans flex items-center gap-2">
                        <span>3. Continuous Data Integrity</span>
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                        Models and applications are only as trustworthy as the database beneath them. Strict foreign key constraints, clean SQL queries, and transactional safety guard data from corruption.
                      </p>
                      <div className="mt-2 text-xs font-mono text-emerald-700 dark:text-emerald-400">
                        Focus: PostgreSQL · SQL queries · Schema constraints
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* PAGE 2 (Right 6 Cols): The Practical Engineering Workbench */}
            <div className="lg:col-span-6 p-6 sm:p-10 lg:pl-12 bg-[#FAF6EE]/50 dark:bg-[#10141D]/50">
              
              <div className="flex items-center justify-between mb-8 pb-3 border-b border-amber-900/10 dark:border-slate-800">
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-amber-700 dark:text-amber-400">
                  Page 02 // Engineering Workbench
                </span>
                <span className="text-xs font-mono text-slate-400">§ Verified Tools</span>
              </div>

              {/* Verified Tooling Grid with Tactile Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Tool 1 */}
                <div className="p-4 rounded-xl border border-amber-900/10 dark:border-slate-800 bg-white/90 dark:bg-[#161B26] shadow-2xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-sm text-slate-900 dark:text-white font-sans">
                      Playwright &amp; Pytest
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300">
                      QA Core
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Automated UI flows, multi-browser execution (Chromium, Firefox, WebKit), and regression suites.
                  </p>
                </div>

                {/* Tool 2 */}
                <div className="p-4 rounded-xl border border-amber-900/10 dark:border-slate-800 bg-white/90 dark:bg-[#161B26] shadow-2xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-sm text-slate-900 dark:text-white font-sans">
                      Python &amp; FastAPI
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300">
                      Backend
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    RESTful endpoints, asynchronous request pipelines, and Pydantic schema validation.
                  </p>
                </div>

                {/* Tool 3 */}
                <div className="p-4 rounded-xl border border-amber-900/10 dark:border-slate-800 bg-white/90 dark:bg-[#161B26] shadow-2xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-sm text-slate-900 dark:text-white font-sans">
                      PostgreSQL &amp; SQL
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                      Data
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Relational schema design, multi-table queries, index tuning, and integrity constraints.
                  </p>
                </div>

                {/* Tool 4 */}
                <div className="p-4 rounded-xl border border-amber-900/10 dark:border-slate-800 bg-white/90 dark:bg-[#161B26] shadow-2xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-sm text-slate-900 dark:text-white font-sans">
                      Docker &amp; Isolation
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                      DevOps
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Containerized development environments, reproducible builds, and isolated test runs.
                  </p>
                </div>

                {/* Tool 5 */}
                <div className="p-4 rounded-xl border border-amber-900/10 dark:border-slate-800 bg-white/90 dark:bg-[#161B26] shadow-2xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-sm text-slate-900 dark:text-white font-sans">
                      Postman &amp; API Tests
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-300">
                      Validation
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    API collection test runs, status assertions, payload contracts, and error boundary testing.
                  </p>
                </div>

                {/* Tool 6 */}
                <div className="p-4 rounded-xl border border-amber-900/10 dark:border-slate-800 bg-white/90 dark:bg-[#161B26] shadow-2xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-sm text-slate-900 dark:text-white font-sans">
                      Jira &amp; Confluence
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                      QA Process
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Defect lifecycle reporting, structured test case authoring, and regression plans.
                  </p>
                </div>

              </div>

              {/* Practical Quality Quote Footer */}
              <div className="mt-6 p-4 rounded-xl bg-amber-500/10 dark:bg-amber-500/5 border border-amber-500/20 text-xs font-mono text-slate-700 dark:text-slate-300">
                <span className="font-bold text-amber-800 dark:text-amber-400">Engineering Principle: </span>
                Validating schemas, contracts, and edge cases during test development catches regressions before code reaches staging or production.
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default QualityManifesto;
