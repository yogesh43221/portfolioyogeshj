import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  Terminal as TerminalIcon, 
  Bot, 
  User, 
  Send, 
  Sparkles
} from 'lucide-react';
import { executeTerminalCommand, CommandOutput } from './workstationCommands';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';
import { PROFILE } from '../constants';

interface SystemTerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type ModalMode = 'terminal' | 'assistant';

export const SystemTerminalModal: React.FC<SystemTerminalModalProps> = ({ isOpen, onClose }) => {
  const [mode, setMode] = useState<ModalMode>('terminal');

  // Terminal history
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      cmd: 'welcome',
      output: (
        <div className="text-slate-800 dark:text-slate-300 space-y-1.5 font-mono text-xs min-w-0">
          <p className="text-sky-800 dark:text-sky-400 font-bold flex items-center gap-2">
            <span>YJ-CLI // Workstation Terminal</span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300 border border-sky-300 dark:border-sky-800/60 font-semibold">ACTIVE</span>
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans break-words">
            Welcome! Explore Yogesh&apos;s QA automation background, backend work, and peer-reviewed research.
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-400 break-words">
            Type <code className="text-emerald-700 dark:text-emerald-400 font-bold">help</code> to list commands, run <code className="text-sky-700 dark:text-sky-300 font-bold">ask &lt;question&gt;</code> for digital twin inquiries, or switch tabs above.
          </p>
        </div>
      )
    }
  ]);
  const [terminalInput, setTerminalInput] = useState('');
  const terminalScrollRef = useRef<HTMLDivElement>(null);
  const terminalInputRef = useRef<HTMLInputElement>(null);

  // Assistant messages inside modal
  const [assistantMessages, setAssistantMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: `Hello! I am ${PROFILE.name.split(' ')[0]}'s digital portfolio guide. Ask me about test automation with Playwright, clinical APIs at Hub9, or research publications.`,
      timestamp: new Date()
    }
  ]);
  const [assistantInput, setAssistantInput] = useState('');
  const [isAssistantLoading, setIsAssistantLoading] = useState(false);
  const assistantScrollRef = useRef<HTMLDivElement>(null);

  // Lock body scroll and register Escape listener
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    const focusTimer = setTimeout(() => {
      if (mode === 'terminal') {
        terminalInputRef.current?.focus();
      }
    }, 60);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(focusTimer);
    };
  }, [isOpen, onClose, mode]);

  // Terminal scroll handler (contained strictly to the internal history div)
  const scrollTerminalToBottom = () => {
    if (terminalScrollRef.current) {
      terminalScrollRef.current.scrollTop = terminalScrollRef.current.scrollHeight;
    }
  };

  // Assistant scroll handler (contained strictly to the internal messages div)
  const scrollAssistantToBottom = () => {
    if (assistantScrollRef.current) {
      assistantScrollRef.current.scrollTop = assistantScrollRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    if (mode === 'assistant') {
      scrollAssistantToBottom();
    }
  }, [assistantMessages, isAssistantLoading, mode]);

  if (!isOpen) return null;

  const handleTerminalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const raw = terminalInput.trim();
    if (!raw) return;

    setTerminalInput('');

    const result = executeTerminalCommand(raw);

    // 1. Clear command
    if (result.isClear) {
      setHistory([]);
      return;
    }

    // 2. Ask command (executed directly inside the CLI session!)
    if (result.isAsk) {
      const askId = 'cli-ask-' + Date.now();
      const question = result.askQuery || raw;

      setHistory(prev => [
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
        const historyContext = assistantMessages.slice(-5);
        const reply = await sendMessageToGemini(question, historyContext);

        // Also sync into assistant context for conversational continuity
        setAssistantMessages(prev => [
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

        setHistory(prev => prev.map(item => {
          if (item.id === askId) {
            return {
              ...item,
              isLoading: false,
              output: (
                <div className="text-xs text-slate-800 dark:text-slate-200 font-sans leading-relaxed whitespace-pre-wrap bg-white dark:bg-midnight-900/80 p-3 rounded-xl border border-amber-900/15 dark:border-midnight-700/70 space-y-2 mt-1 shadow-2xs min-w-0 break-words">
                  <div className="flex items-center gap-1.5 text-sky-800 dark:text-sky-400 font-mono text-[11px] font-bold tracking-wide">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Digital Twin Intelligence</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">{reply}</p>
                </div>
              )
            };
          }
          return item;
        }));
      } catch {
        setHistory(prev => prev.map(item => {
          if (item.id === askId) {
            return {
              ...item,
              isLoading: false,
              output: (
                <div className="text-xs text-rose-800 dark:text-rose-400 font-mono p-2.5 bg-rose-50 dark:bg-rose-950/30 rounded-lg border border-rose-200 dark:border-rose-900/60 mt-1 min-w-0 break-words">
                  [error] Connection to Digital Twin failed. Please run other commands or check the project dossiers.
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

    // 3. Regular command output
    if (result.output) {
      setHistory(prev => [...prev, { cmd: raw, output: result.output }]);
      setTimeout(scrollTerminalToBottom, 20);
    }
  };

  const runQuickCommand = (cmd: string) => {
    const result = executeTerminalCommand(cmd);

    if (result.isClear) {
      setHistory([]);
      return;
    }

    if (result.output) {
      setHistory(prev => [...prev, { cmd, output: result.output }]);
      setTimeout(scrollTerminalToBottom, 20);
    }
  };

  const processAssistantQuery = async (query: string) => {
    const trimmed = query.trim();
    if (!trimmed || isAssistantLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: trimmed,
      timestamp: new Date()
    };

    setAssistantMessages(prev => [...prev, userMessage]);
    setAssistantInput('');
    setIsAssistantLoading(true);

    try {
      const historyContext = assistantMessages.slice(-5);
      const response = await sendMessageToGemini(trimmed, historyContext);
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: response,
        timestamp: new Date()
      };
      setAssistantMessages(prev => [...prev, botMessage]);
    } catch {
      const fallback: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: "I had trouble connecting to the backend. Please try again or explore the verified project dossiers on the main page!",
        timestamp: new Date()
      };
      setAssistantMessages(prev => [...prev, fallback]);
    } finally {
      setIsAssistantLoading(false);
    }
  };

  const handleAssistantSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    processAssistantQuery(assistantInput);
  };

  const quickCommands = ['whoami', 'stack', 'hub9', 'projects', 'ieee', 'springer', 'contact', 'clear'];

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-2.5 sm:p-6 pt-20 sm:pt-6 pb-3 sm:pb-6 bg-slate-950/75 backdrop-blur-sm overflow-hidden select-none animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Yogesh Jadhav Engineering Workstation Console"
    >
      {/* Centered Modal Container with Viewport-Constrained Height & Synchronized Theme */}
      <div 
        className="relative w-full max-w-2xl h-[450px] sm:h-[470px] lg:h-[530px] max-h-[calc(100dvh-5.5rem)] sm:max-h-[calc(100vh-3.5rem)] bg-[#FAF7F2] dark:bg-midnight-950 border border-amber-900/20 dark:border-slate-700/80 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden font-mono text-sm transition-colors duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header Bar (Theme Synchronized with Deliberate Desktop Gap) */}
        <div className="bg-[#F0EAE1] dark:bg-midnight-900 border-b border-amber-900/15 dark:border-midnight-800 px-3.5 sm:px-5 py-2.5 sm:py-3 flex items-center justify-between gap-3 sm:gap-6 lg:gap-8 select-none flex-shrink-0 min-w-0 transition-colors duration-150">
          
          {/* Window Dots & Label (Anchored to the left with flex-1 on desktop) */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
            <div className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90 inline-block"></span>
            </div>
            <span className="text-xs sm:text-sm text-slate-800 dark:text-slate-300 font-bold font-mono truncate tracking-tight">
              <span className="hidden sm:inline">yj-console@studio:~</span>
              <span className="sm:hidden">yj-console</span>
            </span>
          </div>

          {/* Mode Switcher Tabs & Close Button (Grouped neatly on the right) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="flex items-center p-0.5 bg-[#E2D8CC] dark:bg-midnight-950 rounded-lg border border-amber-900/15 dark:border-midnight-700/60 text-xs transition-colors duration-150">
              <button
                type="button"
                onClick={() => setMode('terminal')}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-md transition-colors text-xs ${
                  mode === 'terminal' 
                    ? 'bg-white dark:bg-midnight-800 text-slate-900 dark:text-white font-bold shadow-xs' 
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                aria-pressed={mode === 'terminal'}
              >
                <TerminalIcon className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
                <span>CLI</span>
              </button>
              <button
                type="button"
                onClick={() => setMode('assistant')}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-md transition-colors text-xs ${
                  mode === 'assistant' 
                    ? 'bg-white dark:bg-midnight-800 text-slate-900 dark:text-white font-bold shadow-xs' 
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                aria-pressed={mode === 'assistant'}
              >
                <Bot className="w-3.5 h-3.5 text-sky-700 dark:text-sky-400" />
                <span className="hidden sm:inline">AI Guide</span>
                <span className="sm:hidden">Guide</span>
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-midnight-800 transition-colors flex items-center justify-center min-h-[38px] min-w-[38px] shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-horizon-sky"
              aria-label="Close workstation window"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* ======================================================== */}
        {/* CLI MODE                                                 */}
        {/* ======================================================== */}
        {mode === 'terminal' && (
          <div className="flex-1 min-h-0 flex flex-col bg-[#FAF7F2] dark:bg-midnight-950 text-slate-800 dark:text-slate-200 overflow-hidden transition-colors duration-150">
            
            {/* Scrollable Output History Area with Subtle Theme Scrollbar */}
            <div 
              ref={terminalScrollRef}
              className="flex-1 min-h-0 overflow-y-auto p-3.5 sm:p-5 space-y-3 font-mono text-xs workstation-scrollbar"
            >
              {history.map((item, index) => (
                <div key={item.id || index} className="space-y-1 min-w-0">
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span className="text-emerald-700 dark:text-emerald-400 font-bold">&rarr;</span>
                    <span className="text-sky-700 dark:text-sky-400 font-bold">~</span>
                    <span className="text-slate-900 dark:text-white font-semibold break-words">{item.cmd}</span>
                  </div>
                  <div className="pl-3 sm:pl-4 min-w-0">{item.output}</div>
                </div>
              ))}
            </div>

            {/* Quick Commands Bar (Pinned above input) */}
            <div className="px-3.5 sm:px-4 py-2 bg-[#F0EAE1] dark:bg-midnight-900/90 border-t border-amber-900/15 dark:border-midnight-800 flex items-center gap-1.5 overflow-x-auto flex-shrink-0 text-xs workstation-scrollbar transition-colors duration-150">
              <span className="text-[10px] text-slate-600 dark:text-slate-500 uppercase tracking-wider shrink-0 font-sans font-semibold">Quick:</span>
              {quickCommands.map((cmd) => (
                <button
                  key={cmd}
                  type="button"
                  onClick={() => runQuickCommand(cmd)}
                  className="px-2 py-0.5 rounded text-[11px] bg-white dark:bg-midnight-800 hover:bg-amber-100 dark:hover:bg-midnight-700 text-sky-800 dark:text-sky-300 hover:text-slate-950 dark:hover:text-white border border-amber-900/15 dark:border-midnight-700 transition-colors shrink-0 font-mono shadow-2xs"
                >
                  {cmd}
                </button>
              ))}
            </div>

            {/* Terminal Input Bar (Always pinned at bottom) */}
            <form onSubmit={handleTerminalSubmit} className="bg-[#F0EAE1] dark:bg-midnight-900 px-3.5 sm:px-4 py-2.5 sm:py-3 border-t border-amber-900/15 dark:border-midnight-800 flex items-center gap-2 flex-shrink-0 transition-colors duration-150">
              <span className="text-emerald-700 dark:text-emerald-400 font-bold text-xs shrink-0 select-none">yj@studio:~$</span>
              <input
                ref={terminalInputRef}
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="Type command (help, whoami, stack, projects) or 'ask <question>'"
                className="flex-1 min-w-0 bg-transparent text-slate-900 dark:text-white focus:outline-none text-xs sm:text-sm font-mono placeholder:text-slate-500 dark:placeholder:text-slate-500"
                autoComplete="off"
                spellCheck="false"
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
        )}

        {/* ======================================================== */}
        {/* ASSISTANT MODE                                           */}
        {/* ======================================================== */}
        {mode === 'assistant' && (
          <div className="flex-1 min-h-0 flex flex-col bg-[#FAF7F2] dark:bg-midnight-950 font-sans text-slate-800 dark:text-slate-200 overflow-hidden transition-colors duration-150">
            
            {/* Messages Scroll Area */}
            <div 
              ref={assistantScrollRef}
              className="flex-1 min-h-0 overflow-y-auto p-3.5 sm:p-5 space-y-3 text-xs sm:text-sm workstation-scrollbar"
            >
              {assistantMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} gap-2.5`}>
                    <div className={`h-7 w-7 rounded-lg flex items-center justify-center shrink-0 ${
                      msg.role === 'user' ? 'bg-horizon-sky text-white' : 'bg-white dark:bg-midnight-800 text-horizon-sky border border-amber-900/15 dark:border-midnight-700 shadow-2xs'
                    }`}>
                      {msg.role === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                    </div>
                    <div className={`p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-wrap shadow-2xs break-words ${
                      msg.role === 'user'
                        ? 'bg-horizon-sky text-white rounded-tr-none'
                        : 'bg-white dark:bg-midnight-900 border border-amber-900/15 dark:border-midnight-800 text-slate-800 dark:text-slate-200 rounded-tl-none'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}

              {isAssistantLoading && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-1.5 bg-white dark:bg-midnight-900 px-3.5 py-2.5 rounded-xl border border-amber-900/15 dark:border-midnight-800 ml-9 shadow-2xs">
                    <div className="w-1.5 h-1.5 bg-horizon-sky rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-horizon-sky rounded-full animate-bounce [animation-delay:150ms]"></div>
                    <div className="w-1.5 h-1.5 bg-horizon-sky rounded-full animate-bounce [animation-delay:300ms]"></div>
                    <span className="text-xs text-slate-600 dark:text-slate-400 font-mono ml-1">Thinking...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Assistant Input Bar (Always pinned at bottom) */}
            <form onSubmit={handleAssistantSubmit} className="bg-[#F0EAE1] dark:bg-midnight-900 px-3.5 sm:px-4 py-2.5 sm:py-3 border-t border-amber-900/15 dark:border-midnight-800 flex items-center gap-2 flex-shrink-0 transition-colors duration-150">
              <input
                type="text"
                value={assistantInput}
                onChange={(e) => setAssistantInput(e.target.value)}
                placeholder="Ask about test design, clinical APIs, or TinyML..."
                disabled={isAssistantLoading}
                className="flex-1 min-w-0 bg-white dark:bg-midnight-950 text-slate-900 dark:text-white px-3.5 py-2 rounded-xl border border-amber-900/15 dark:border-midnight-700 focus:outline-none focus:border-horizon-sky text-xs font-sans placeholder:text-slate-500 shadow-2xs"
              />
              <button
                type="submit"
                disabled={isAssistantLoading || !assistantInput.trim()}
                className="p-2 min-h-[38px] min-w-[38px] bg-horizon-sky text-white rounded-xl hover:opacity-90 disabled:opacity-40 transition-opacity flex-shrink-0 flex items-center justify-center shadow-2xs"
                aria-label="Send message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

          </div>
        )}

      </div>
    </div>
  );
};

export default SystemTerminalModal;
