import React, { useState, useRef, useEffect } from 'react';
import { 
  Send, 
  Bot, 
  User, 
  Terminal as TerminalIcon, 
  MessageSquare, 
  Sparkles,
  RotateCcw,
  Code2,
  CheckCircle2,
  HelpCircle,
  CornerDownLeft
} from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';
import { PROFILE, PROJECTS } from '../constants';
import { executeTerminalCommand, CommandOutput } from './workstationCommands';

type ConsoleMode = 'assistant' | 'terminal';

export const AIChat: React.FC = () => {
  const [activeMode, setActiveMode] = useState<ConsoleMode>('assistant');

  // ==========================================
  // DIGITAL TWIN ASSISTANT STATE
  // ==========================================
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: `Hello! I am ${PROFILE.name.split(' ')[0]}'s digital portfolio guide. I can answer questions about his verified QA automation suites, clinical workflows at Hub9, backend APIs, RAG systems, and published research. What would you like to explore?`,
      timestamp: new Date()
    }
  ]);
  const [assistantInput, setAssistantInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Thoughtful, portfolio-specific suggestions
  const suggestions = [
    "How was OrbitDesk's intent routing tested?",
    "Explain clinical workflow testing at Hub9",
    "Tell me about the TinyML research publication",
    "What API testing tools does Yogesh use?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (activeMode === 'assistant') {
      scrollToBottom();
    }
  }, [messages, activeMode]);

  const processAssistantMessage = async (text: string, currentMessages: ChatMessage[]) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    // Capture recent history for conversation context
    const historyContext = currentMessages.slice(-5);

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: trimmed,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setAssistantInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(trimmed, historyContext);

      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch {
      const fallbackMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: "I experienced a temporary connection hiccup. You can view the verified project dossiers above, run commands in the CLI tab, or email Yogesh directly!",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, fallbackMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAssistantSend = (e: React.FormEvent) => {
    e.preventDefault();
    processAssistantMessage(assistantInput, messages);
  };

  // ==========================================
  // INLINE CLI TERMINAL STATE
  // ==========================================
  const [terminalHistory, setTerminalHistory] = useState<CommandOutput[]>([
    {
      cmd: 'welcome',
      output: (
        <div className="text-slate-800 dark:text-slate-300 space-y-1.5 font-mono text-xs min-w-0">
          <p className="text-sky-800 dark:text-sky-400 font-bold">
            YJ-CLI Console · Embedded Terminal Session
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-xs break-words">
            Interactive command-line interface for portfolio data. Type <code className="text-emerald-700 dark:text-emerald-400 font-bold">help</code> to list commands, or use the quick buttons below.
          </p>
        </div>
      )
    }
  ]);
  const [terminalInput, setTerminalInput] = useState('');
  const terminalBottomRef = useRef<HTMLDivElement>(null);
  const terminalInputRef = useRef<HTMLInputElement>(null);
  const terminalContainerRef = useRef<HTMLDivElement>(null);

  const scrollTerminalToBottom = () => {
    if (terminalContainerRef.current) {
      terminalContainerRef.current.scrollTop = terminalContainerRef.current.scrollHeight;
    }
  };

  const handleTerminalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const raw = terminalInput.trim();
    if (!raw) return;

    setTerminalInput('');

    const result = executeTerminalCommand(raw);

    if (result.isClear) {
      setTerminalHistory([]);
      return;
    }

    if (result.isAsk) {
      const askId = 'inline-ask-' + Date.now();
      const question = result.askQuery || raw;

      setTerminalHistory(prev => [
        ...prev,
        {
          id: askId,
          cmd: raw,
          isLoading: true,
          output: (
            <div className="flex items-center gap-2 text-xs text-sky-700 dark:text-sky-400 font-mono py-1">
              <span className="w-1.5 h-1.5 bg-sky-600 dark:bg-sky-400 rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-sky-600 dark:bg-sky-400 rounded-full animate-bounce [animation-delay:150ms]"></span>
              <span className="w-1.5 h-1.5 bg-sky-600 dark:bg-sky-400 rounded-full animate-bounce [animation-delay:300ms]"></span>
              <span className="text-slate-600 dark:text-slate-400">Consulting Digital Twin...</span>
            </div>
          )
        }
      ]);

      setTimeout(scrollTerminalToBottom, 20);

      try {
        const historyContext = messages.slice(-5);
        const reply = await sendMessageToGemini(question, historyContext);

        // Sync to assistant messages context
        setMessages(prev => [
          ...prev,
          {
            id: Date.now().toString(),
            role: 'user',
            text: question,
            timestamp: new Date()
          },
          {
            id: (Date.now() + 1).toString(),
            role: 'model',
            text: reply,
            timestamp: new Date()
          }
        ]);

        setTerminalHistory(prev => prev.map(item => {
          if (item.id === askId) {
            return {
              ...item,
              isLoading: false,
              output: (
                <div className="text-xs text-slate-800 dark:text-slate-200 font-sans leading-relaxed whitespace-pre-wrap bg-white dark:bg-midnight-900/80 p-3 rounded-xl border border-amber-900/15 dark:border-midnight-700/70 space-y-1.5 mt-1 shadow-2xs min-w-0 break-words">
                  <div className="flex items-center gap-1.5 text-sky-800 dark:text-sky-400 font-mono text-[11px] font-bold tracking-wide">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Digital Twin Intelligence</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">{reply}</p>
                </div>
              )
            };
          }
          return item;
        }));
      } catch {
        setTerminalHistory(prev => prev.map(item => {
          if (item.id === askId) {
            return {
              ...item,
              isLoading: false,
              output: (
                <div className="text-xs text-rose-800 dark:text-rose-400 font-mono p-2 bg-rose-50 dark:bg-rose-950/30 rounded border border-rose-200 dark:border-rose-900/60 mt-1 min-w-0 break-words">
                  [error] Connection to Digital Twin failed. Please run other commands or view project dossiers above.
                </div>
              )
            };
          }
          return item;
        }));
      } finally {
        setTimeout(scrollTerminalToBottom, 30);
      }
      return;
    }

    if (result.output) {
      setTerminalHistory(prev => [...prev, { cmd: raw, output: result.output }]);
      setTimeout(scrollTerminalToBottom, 20);
    }
  };

  const runQuickCommand = (cmd: string) => {
    const result = executeTerminalCommand(cmd);

    if (result.isClear) {
      setTerminalHistory([]);
      return;
    }

    if (result.output) {
      setTerminalHistory(prev => [...prev, { cmd, output: result.output }]);
      setTimeout(scrollTerminalToBottom, 20);
    }
  };

  const quickCommands = ['whoami', 'stack', 'hub9', 'projects', 'ieee', 'springer', 'contact', 'clear'];

  return (
    <section 
      id="ai-chat" 
      className="py-16 sm:py-20 lg:py-28 w-full bg-[#FAF7F2] dark:bg-[#0E1117] transition-colors duration-150 relative scroll-mt-24 sm:scroll-mt-28"
      aria-label="Engineering Workstation and Digital Twin Assistant"
    >
      <div className="section-container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-horizon-sky"></span>
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-sky-800 dark:text-sky-400">
              Interactive Systems · Knowledge Guide &amp; CLI
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white font-sans tracking-tight mb-3">
            Workstation Console &amp; Assistant
          </h2>

          <p className="text-slate-600 dark:text-slate-300 max-w-xl mx-auto text-sm sm:text-base font-sans leading-relaxed">
            Query the conversational portfolio guide regarding testing strategies and system architectures, or execute fast terminal commands directly.
          </p>
        </div>

        {/* WORKSTATION CONSOLE WINDOW */}
        <div className="bg-[#FFFDF9] dark:bg-[#121620] border border-amber-900/15 dark:border-slate-800 rounded-2xl sm:rounded-3xl shadow-sm overflow-hidden flex flex-col h-[620px] sm:h-[660px] relative transition-all">
          
          {/* Console Header Bar */}
          <div className="px-4 sm:px-6 py-3 border-b border-amber-900/10 dark:border-slate-800/80 bg-[#FAF5EC] dark:bg-[#161B26] flex flex-wrap items-center justify-between gap-3 flex-shrink-0">
            
            {/* Window Dots & Identifier */}
            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80 dark:bg-rose-500/70 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 dark:bg-amber-500/70 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 dark:bg-emerald-500/70 inline-block"></span>
              </div>
              <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 ml-1">
                yj-workstation // studio-console
              </span>
            </div>

            {/* Segmented Mode Switcher */}
            <div 
              className="flex items-center gap-1 p-1 bg-[#F5EFE6] dark:bg-slate-900 rounded-xl border border-amber-900/10 dark:border-slate-800"
              role="tablist"
              aria-label="Workstation interaction modes"
            >
              <button
                role="tab"
                aria-selected={activeMode === 'assistant'}
                onClick={() => setActiveMode('assistant')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                  activeMode === 'assistant'
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs border border-amber-900/10 dark:border-slate-700'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <Bot className="w-3.5 h-3.5 text-horizon-sky" />
                <span>AI Guide</span>
              </button>

              <button
                role="tab"
                aria-selected={activeMode === 'terminal'}
                onClick={() => setActiveMode('terminal')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                  activeMode === 'terminal'
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs border border-amber-900/10 dark:border-slate-700'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <TerminalIcon className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                <span>YJ-CLI</span>
              </button>
            </div>

          </div>

          {/* ======================================================== */}
          {/* TAB 1: CONVERSATIONAL ASSISTANT (DIGITAL TWIN)           */}
          {/* ======================================================== */}
          {activeMode === 'assistant' && (
            <div className="flex-1 flex flex-col min-h-0 bg-[#FFFDF9] dark:bg-[#121620]">
              
              {/* Messages Scroll View */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 text-sm font-sans workstation-scrollbar">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} gap-3`}>
                      
                      {/* Avatar */}
                      <div className={`flex-shrink-0 h-8 w-8 rounded-xl flex items-center justify-center ${
                        msg.role === 'user' 
                          ? 'bg-horizon-sky text-white shadow-2xs' 
                          : 'bg-[#FAF5EC] dark:bg-slate-800 text-horizon-sky border border-amber-900/10 dark:border-slate-700'
                      }`}>
                        {msg.role === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                      </div>

                      {/* Bubble */}
                      <div className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-2xs whitespace-pre-wrap ${
                        msg.role === 'user'
                          ? 'bg-horizon-sky text-white font-medium rounded-tr-none'
                          : 'bg-[#FAF5EC] dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-amber-900/10 dark:border-slate-700/80 rounded-tl-none font-normal'
                      }`}>
                        {msg.text}
                      </div>

                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex justify-start">
                    <div className="flex items-center gap-2 bg-[#FAF5EC] dark:bg-slate-800 px-4 py-3 rounded-2xl rounded-tl-none border border-amber-900/10 dark:border-slate-700 ml-11">
                      <div className="w-1.5 h-1.5 bg-horizon-sky rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-horizon-sky rounded-full animate-bounce delay-100"></div>
                      <div className="w-1.5 h-1.5 bg-horizon-sky rounded-full animate-bounce delay-200"></div>
                      <span className="text-xs font-mono text-slate-400 ml-1">Consulting portfolio knowledge...</span>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Suggestions & Input Area */}
              <div className="p-3.5 sm:p-5 border-t border-amber-900/10 dark:border-slate-800 bg-[#FAF5EC]/70 dark:bg-[#161B26]/70 flex-shrink-0">
                
                {/* Suggestions Carousel */}
                {!isLoading && messages.length <= 4 && (
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {suggestions.map((s, idx) => (
                      <button
                        key={idx}
                        onClick={() => processAssistantMessage(s, messages)}
                        className="text-[11px] font-mono px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 hover:bg-amber-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-amber-900/10 dark:border-slate-700 transition-colors flex items-center gap-1.5 text-left"
                      >
                        <MessageSquare className="w-3 h-3 text-horizon-sky shrink-0" />
                        <span>{s}</span>
                      </button>
                    ))}
                  </div>
                )}

                {/* Input Form */}
                <form onSubmit={handleAssistantSend} className="relative flex items-center">
                  <input
                    type="text"
                    value={assistantInput}
                    onChange={(e) => setAssistantInput(e.target.value)}
                    placeholder="Ask about test automation, clinical APIs, or RAG architectures..."
                    disabled={isLoading}
                    className="w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white pl-4 pr-12 py-3 rounded-xl border border-amber-900/15 dark:border-slate-700 focus:outline-none focus:border-horizon-sky focus:ring-1 focus:ring-horizon-sky text-xs sm:text-sm font-sans placeholder:text-slate-400"
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !assistantInput.trim()}
                    className="absolute right-2 p-2 bg-horizon-sky text-white rounded-lg hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-horizon-sky"
                    aria-label="Send message to portfolio assistant"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>

                <div className="mt-2 text-center text-[10px] font-mono text-slate-400 dark:text-slate-500">
                  Grounded strictly in verified portfolio records · Powered by Gemini 3.8 Flash
                </div>
              </div>

            </div>
          )}

          {/* ======================================================== */}
          {/* TAB 2: INLINE YJ-CLI TERMINAL                             */}
          {/* ======================================================== */}
          {activeMode === 'terminal' && (
            <div className="flex-1 flex flex-col min-h-0 bg-[#FAF7F2] dark:bg-midnight-950 font-mono text-slate-800 dark:text-slate-200 transition-colors duration-150">
              
              {/* Terminal Screen Body with Subtle Scrollbar */}
              <div 
                ref={terminalContainerRef}
                className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3 workstation-scrollbar"
              >
                {terminalHistory.map((item, idx) => (
                  <div key={idx} className="space-y-1 min-w-0">
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <span className="text-emerald-700 dark:text-emerald-400 font-bold">&rarr;</span>
                      <span className="text-sky-700 dark:text-sky-400 font-bold">~</span>
                      <span className="text-slate-900 dark:text-white font-semibold break-words">{item.cmd}</span>
                    </div>
                    <div className="pl-3 sm:pl-4 min-w-0">{item.output}</div>
                  </div>
                ))}
                <div ref={terminalBottomRef} />
              </div>

              {/* Terminal Input Bar & Quick Commands */}
              <div className="p-3 sm:p-4 bg-[#F0EAE1] dark:bg-midnight-900 border-t border-amber-900/15 dark:border-midnight-800 flex-shrink-0 space-y-2.5 transition-colors duration-150">
                
                {/* Quick Command Pills */}
                <div className="flex flex-wrap items-center gap-1.5 text-xs">
                  <span className="text-[10px] text-slate-600 dark:text-slate-500 mr-1 uppercase tracking-wider font-sans font-semibold">Quick:</span>
                  {quickCommands.map((cmd) => (
                    <button
                      key={cmd}
                      onClick={() => runQuickCommand(cmd)}
                      className="px-2 py-0.5 rounded text-[11px] bg-white dark:bg-midnight-800 hover:bg-amber-100 dark:hover:bg-midnight-700 text-sky-800 dark:text-sky-300 hover:text-slate-950 dark:hover:text-white border border-amber-900/15 dark:border-midnight-700 transition-colors shadow-2xs font-mono"
                    >
                      {cmd}
                    </button>
                  ))}
                </div>

                {/* Input Prompt */}
                <form onSubmit={handleTerminalSubmit} className="flex items-center gap-2">
                  <span className="text-emerald-700 dark:text-emerald-400 font-bold text-xs shrink-0 select-none">yj@studio:~$</span>
                  <input
                    ref={terminalInputRef}
                    type="text"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    placeholder="Type a command (help, whoami, stack, projects, ieee...) or 'ask <question>'"
                    className="flex-1 min-w-0 bg-transparent text-slate-900 dark:text-white focus:outline-none text-xs sm:text-sm font-mono placeholder:text-slate-500 dark:placeholder:text-slate-500"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="text-xs px-2.5 py-1.5 rounded bg-amber-200/80 hover:bg-amber-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors flex-shrink-0 font-mono font-semibold border border-amber-900/15 dark:border-slate-700 shadow-2xs"
                    aria-label="Execute command"
                  >
                    Run ↵
                  </button>
                </form>

              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default AIChat;
