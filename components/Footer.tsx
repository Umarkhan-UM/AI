
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-indigo-500 rounded-md"></div>
              <span className="text-lg font-bold gradient-text">HARIS JANI JANI</span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs">
              Redefining the digital frontier with style, luxury, and advanced artificial intelligence.
            </p>
          </div>

          <div className="flex gap-12 text-sm text-slate-400">
            <div className="flex flex-col gap-3">
              <span className="text-white font-bold uppercase tracking-widest text-xs">Navigation</span>
              <a href="#" className="hover:text-indigo-400 transition-colors">Hero</a>
              <a href="#ai-section" className="hover:text-indigo-400 transition-colors">AI Portal</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-white font-bold uppercase tracking-widest text-xs">Support</span>
              <a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-indigo-400 transition-colors">API Status</a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600 uppercase tracking-[0.2em] font-bold">
          <p>© 2024 HARIS JANI JANI & HARIS GANDKAP AI. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-slate-400 transition-colors">DESIGN BY HARIS</span>
            <span className="cursor-pointer hover:text-slate-400 transition-colors">POWERED BY GEMINI</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
