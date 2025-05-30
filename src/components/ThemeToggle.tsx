'use client'

import {useState} from 'react';
import {Sun, Moon} from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <button
      onClick={()=>setIsDark(!isDark)}
      className="p-2 rounded-full text-slate-700 cursor-pointer hover:bg-slate-200/70 hover:scale-105 transition-transform duration-200"
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {isDark ? (
        <Sun className="w-6 h-6"/>
      ) : (
        <Moon className="w-6 h-6"/>
      )}
    </button>
  );
};

export default ThemeToggle;
