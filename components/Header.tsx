
import React from 'react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass-panel' : 'py-8 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20">
            H
          </div>
          <span className="text-xl font-extrabold tracking-tighter gradient-text">HARIS JANI JANI</span>
        </div>
        
        <nav className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-slate-300">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#ai-section" className="hover:text-white transition-colors">Haris Gandkap AI</a>
          <a href="#" className="hover:text-white transition-colors">Projects</a>
        </nav>

        <button 
          onClick={() => document.getElementById('ai-section')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-5 py-2 rounded-full border border-indigo-500/30 text-indigo-400 text-sm font-bold hover:bg-indigo-500 hover:text-white transition-all duration-300"
        >
          Chat with AI
        </button>
      </div>
    </header>
  );
};

export default Header;
