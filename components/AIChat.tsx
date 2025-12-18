import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';
import { PROFILE } from '../constants';

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: `Hi there! I'm ${PROFILE.name.split(' ')[0]}'s digital twin. You can ask me about my skills, experience, or what I'm working on lately.`,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const responseText = await sendMessageToGemini(input);

    const botMessage: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMessage]);
    setIsLoading(false);
  };

  return (
    <section id="ai-chat" className="py-24 w-full bg-slate-100 dark:bg-midnight-950/50 border-b border-slate-200 dark:border-midnight-800 transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-horizon-sky/10 text-horizon-sky text-[10px] font-bold uppercase tracking-[0.2em] mb-4 border border-horizon-sky/20">
                <Sparkles className="w-3 h-3" />
                Interactive Demo
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3 transition-colors font-sans tracking-tight">Neural Sync Interface</h2>
            <p className="text-slate-600 dark:text-slate-400 transition-colors font-sans max-w-lg mx-auto text-base">
                Ask my Gemini-powered agent about my background and research.
            </p>
        </div>

        {/* Terminal Window */}
        <div className="bg-midnight-900 border border-midnight-700 rounded-xl shadow-2xl overflow-hidden flex flex-col h-[550px] relative">
            {/* Header */}
            <div className="bg-midnight-800 px-4 py-3 border-b border-midnight-700 flex items-center justify-between">
                <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-horizon-gold/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="text-[10px] font-mono text-slate-500 font-bold tracking-widest uppercase">./agent_session</div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-5 custom-scrollbar bg-midnight-950/50">
                {messages.map((msg) => (
                <div
                    key={msg.id}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                    <div className={`flex items-start max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${msg.role === 'user' ? 'bg-horizon-sky ml-3' : 'bg-midnight-800 mr-3'}`}>
                        {msg.role === 'user' ? <User className="h-4 w-4 text-white" /> : <Bot className="h-4 w-4 text-horizon-sky" />}
                    </div>
                    <div className={`p-4 rounded-xl text-sm font-sans leading-relaxed shadow-sm ${
                        msg.role === 'user' 
                        ? 'bg-horizon-sky text-white rounded-tr-none font-medium' 
                        : 'bg-midnight-800 text-slate-200 border border-midnight-700 rounded-tl-none font-medium'
                    }`}>
                        {msg.text}
                    </div>
                    </div>
                </div>
                ))}
                {isLoading && (
                <div className="flex justify-start">
                    <div className="flex items-center space-x-2 bg-midnight-800 px-5 py-4 rounded-xl rounded-tl-none border border-midnight-700 ml-11">
                        <div className="w-1.5 h-1.5 bg-horizon-sky rounded-full animate-bounce"></div>
                        <div className="w-1.5 h-1.5 bg-horizon-sky rounded-full animate-bounce delay-100"></div>
                        <div className="w-1.5 h-1.5 bg-horizon-sky rounded-full animate-bounce delay-200"></div>
                    </div>
                </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-4 bg-midnight-900 border-t border-midnight-800">
                <div className="relative">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type a message..."
                        className="w-full bg-midnight-800 text-white pl-5 pr-14 py-3.5 rounded-lg border border-midnight-700 focus:outline-none focus:border-horizon-sky focus:ring-1 focus:ring-horizon-sky transition-all placeholder:text-slate-600 font-sans text-base"
                        disabled={isLoading}
                    />
                    <button
                        type="submit"
                        disabled={isLoading || !input.trim()}
                        className="absolute right-2 top-2 p-2 bg-horizon-sky text-white rounded-md hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        aria-label="Send"
                    >
                        <Send className="h-4 w-4" />
                    </button>
                </div>
                <div className="mt-2 text-center">
                    <p className="text-[10px] text-slate-500 flex items-center justify-center gap-1 font-mono tracking-wider opacity-60">
                         NEURAL_INTERFACE_ACTIVE // GEMINI_FLASH_2.5
                    </p>
                </div>
            </form>
        </div>
      </div>
    </section>
  );
};

export default AIChat;