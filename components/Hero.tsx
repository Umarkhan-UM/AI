
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-12 px-4 overflow-hidden">
      <div className="max-w-4xl text-center z-10">
        <h2 className="text-indigo-500 font-bold tracking-[0.3em] uppercase mb-4 animate-pulse">Experience the Future</h2>
        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight leading-none">
          Haris <span className="gradient-text">Jani Jani</span>
        </h1>
        
        <div className="glass-panel p-8 rounded-3xl mt-12 transform hover:scale-105 transition-transform duration-500 border-indigo-500/20 shadow-2xl shadow-indigo-900/10">
          <p className="text-2xl md:text-4xl font-light italic tracking-wide text-slate-100 uppercase leading-relaxed">
            "WALI ALKA STUDY SANGA <br/> 
            <span className="font-extrabold text-indigo-400">RWANA DA TAT SHA"</span>
          </p>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-4 text-slate-400">
            <span className="h-[1px] w-12 bg-slate-700"></span>
            <span className="text-sm font-semibold tracking-widest">STYLISH & MODERN</span>
            <span className="h-[1px] w-12 bg-slate-700"></span>
          </div>
        </div>
      </div>

      <div className="absolute -z-10 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[100px] floating opacity-50"></div>
    </section>
  );
};

export default Hero;
