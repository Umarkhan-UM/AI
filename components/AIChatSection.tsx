
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'ai';
  text: string;
}

const AIChatSection: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', text: 'Hello! I am Haris Gandkap AI. How can I assist you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: "You are 'Haris Gandkap AI', a sophisticated, intelligent, and highly capable AI assistant built for the personal brand 'Haris Jani Jani'. Your tone is professional, futuristic, and helpful. You are the 'best ever' AI assistant. Keep responses sleek and modern.",
          temperature: 0.9,
          topP: 0.95,
        }
      });

      const aiText = response.text || "I apologize, something went wrong. Let's try again!";
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'ai', text: "Error connecting to Haris Gandkap AI. Please check your connection." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-5xl font-black mb-2">Haris <span className="gradient-text">Gandkap AI</span></h3>
        <p className="text-slate-400 font-medium tracking-wide">THE WORLD'S MOST ADVANCED INTELLIGENCE PORTAL</p>
      </div>

      <div className="glass-panel rounded-[2.5rem] overflow-hidden flex flex-col h-[600px] border border-white/5 shadow-2xl">
        <div className="p-6 bg-white/5 border-b border-white/10 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
            <span className="text-sm font-bold tracking-widest uppercase text-slate-300">Live Status: Active</span>
          </div>
          <span className="text-xs font-mono text-slate-500">v3.0.1 PRO</span>
        </div>

        <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-6 bg-black/20">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] px-6 py-4 rounded-3xl ${
                msg.role === 'user' 
                ? 'bg-indigo-600 text-white rounded-br-none shadow-lg shadow-indigo-500/10' 
                : 'bg-white/5 border border-white/10 text-slate-200 rounded-bl-none'
              }`}>
                <p className="text-sm md:text-base leading-relaxed">{msg.text}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white/5 border border-white/10 p-4 rounded-3xl rounded-bl-none">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-150"></div>
                  <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce delay-300"></div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="p-6 bg-white/5 border-t border-white/10">
          <div className="flex gap-4 items-center relative">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask Haris Gandkap AI anything..."
              className="flex-grow bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-indigo-500/50 transition-all text-slate-200 placeholder-slate-500"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="p-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all disabled:opacity-50 disabled:grayscale"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChatSection;
