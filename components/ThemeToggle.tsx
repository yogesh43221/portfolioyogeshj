import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`
        relative inline-flex h-10 w-20 shrink-0 cursor-pointer items-center rounded-full 
        border-2 border-transparent transition-colors duration-150 ease-in-out 
        focus:outline-none focus-visible:ring-2 focus-visible:ring-horizon-sky focus-visible:ring-offset-2
        ${isDark ? 'bg-midnight-700' : 'bg-horizon-sky'}
      `}
      aria-label="Toggle dark mode"
    >
      <span className="sr-only">Toggle dark mode</span>
      
      {/* Track Icons */}
      <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
        <Sun className={`h-3.5 w-3.5 ${isDark ? 'text-slate-500' : 'text-white'}`} />
        <Moon className={`h-3.5 w-3.5 ${isDark ? 'text-white' : 'text-slate-200'}`} />
      </div>

      {/* Thumb */}
      <span
        className={`
          pointer-events-none flex h-7 w-7 items-center justify-center rounded-full 
          bg-white shadow-lg ring-0 transition-transform duration-150 ease-in-out
          ${isDark ? 'translate-x-11' : 'translate-x-1'}
        `}
      >
        {isDark ? (
          <Moon className="h-4 w-4 text-midnight-950 fill-midnight-950" />
        ) : (
          <Sun className="h-4 w-4 text-horizon-sky fill-horizon-sky" />
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;