import React from 'react';
import { skillsData } from '../data/skills.ts'; // changed code

const Skills: React.FC = () => {
  const data = skillsData; // use shared data

  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Technical Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(data).map(([category, techs], idx) => (
            <div 
              key={category} 
              className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-cyan-400/50 transition-all backdrop-blur-sm hover:scale-105"
              style={{
                animation: `slideInUp 0.6s ease-out ${idx * 0.1}s both`
              }}
            >
              <h3 className="text-xl font-bold mb-4 text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-3 py-2 bg-gradient-to-r from-slate-700 to-slate-600 text-slate-300 rounded-lg text-sm hover:from-cyan-400/20 hover:to-blue-400/20 hover:text-cyan-400 hover:scale-110 transition-all cursor-default border border-slate-600 hover:border-cyan-400/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;