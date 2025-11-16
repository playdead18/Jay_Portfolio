import React from 'react';
import { Server, Database, Cloud, ChevronDown, Terminal } from 'lucide-react';

interface HeroProps {
  scrollToSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
      {/* Additional animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDuration: '6s', animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{animationDuration: '5s', animationDelay: '2s'}}></div>
        
        {/* Floating code symbols */}
        <div className="absolute top-20 left-10 text-blue-500/20 text-6xl font-mono animate-float" style={{animationDuration: '8s'}}>{'{ }'}</div>
        <div className="absolute top-40 right-20 text-cyan-500/20 text-5xl font-mono animate-float" style={{animationDuration: '10s', animationDelay: '1s'}}>{'< />'}</div>
        <div className="absolute bottom-32 left-1/4 text-purple-500/20 text-7xl font-mono animate-float" style={{animationDuration: '12s', animationDelay: '2s'}}>{'[ ]'}</div>
        <div className="absolute top-1/3 right-10 text-green-500/20 text-4xl font-mono animate-float" style={{animationDuration: '9s', animationDelay: '0.5s'}}>{'=> '}</div>
        <div className="absolute bottom-20 right-1/3 text-pink-500/20 text-5xl font-mono animate-float" style={{animationDuration: '11s', animationDelay: '1.5s'}}>{'( )'}</div>
      </div>
      
      <div className="text-center max-w-5xl mx-auto relative z-10">
        <div className="mb-8 flex justify-center space-x-6 animate-fade-in">
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-500 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <Server className="relative text-blue-400 animate-pulse" size={48} />
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-cyan-500 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <Database className="relative text-cyan-400 animate-pulse" size={48} />
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-purple-500 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <Cloud className="relative text-purple-400 animate-pulse" size={48} />
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-slide-in-up" style={{animationDelay: '0.2s'}}>
          Backend Engineer
        </h1>
        
        <div className="flex items-center justify-center gap-3 mb-8 animate-slide-in-up" style={{animationDelay: '0.4s'}}>
          <Terminal className="text-green-400" size={24} />
          <p className="text-xl md:text-2xl text-slate-300 font-mono">
            Building scalable systems & robust APIs
          </p>
        </div>
        
        <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-in-up" style={{animationDelay: '0.6s'}}>
          Specialized in designing distributed systems, optimizing database performance, 
          and creating high-throughput backend solutions that scale to millions of requests.
        </p>
        
        <div className="flex justify-center gap-4 flex-wrap animate-slide-in-up" style={{animationDelay: '0.8s'}}>
          <button 
            onClick={() => scrollToSection('projects')}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105 font-semibold overflow-hidden"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 border-2 border-cyan-400 rounded-xl hover:bg-cyan-400/10 transition-all backdrop-blur-sm hover:scale-105 font-semibold"
          >
            Get In Touch
          </button>
        </div>
        
        <div className="mt-20 animate-bounce">
          <ChevronDown size={40} className="mx-auto text-cyan-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;