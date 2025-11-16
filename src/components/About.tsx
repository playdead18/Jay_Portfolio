import React from 'react';
import { Code2, Database, Server, Cloud, Cpu } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center animate-slide-in-up">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">About Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a passionate backend developer with extensive experience in building scalable, 
              high-performance systems. My expertise lies in designing distributed architectures, 
              optimizing database queries, and implementing efficient APIs.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              With a strong foundation in backend technologies and cloud infrastructure, I've 
              successfully delivered projects handling millions of requests daily. I believe in 
              writing clean, maintainable code and following best practices for system design.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-6 rounded-xl border border-blue-500/20 hover:border-blue-400/50 transition-all hover:scale-105 backdrop-blur-sm">
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">5+</div>
                <div className="text-slate-400 mt-2">Years Experience</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20 hover:border-purple-400/50 transition-all hover:scale-105 backdrop-blur-sm">
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">10+</div>
                <div className="text-slate-400 mt-2">Major Projects</div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm hover:border-cyan-400/50 transition-all animate-slide-in-right">
            <h3 className="text-2xl font-bold mb-6 text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text flex items-center gap-2">
              <Cpu size={28} />
              Core Expertise
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <Code2 className="mr-3 text-blue-400 flex-shrink-0 mt-1 group-hover:scale-125 transition-transform" size={20} />
                <span className="text-slate-300 group-hover:text-white transition-colors">Microservices Architecture & API Development</span>
              </li>
              <li className="flex items-start group">
                <Database className="mr-3 text-cyan-400 flex-shrink-0 mt-1 group-hover:scale-125 transition-transform" size={20} />
                <span className="text-slate-300 group-hover:text-white transition-colors">Database Design & Performance Optimization</span>
              </li>
              <li className="flex items-start group">
                <Server className="mr-3 text-purple-400 flex-shrink-0 mt-1 group-hover:scale-125 transition-transform" size={20} />
                <span className="text-slate-300 group-hover:text-white transition-colors">Distributed Systems & Message Queues</span>
              </li>
              <li className="flex items-start group">
                <Cloud className="mr-3 text-green-400 flex-shrink-0 mt-1 group-hover:scale-125 transition-transform" size={20} />
                <span className="text-slate-300 group-hover:text-white transition-colors">Cloud Infrastructure & DevOps</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;