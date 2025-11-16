import React from 'react';
import { Network } from 'lucide-react';
import { projectsData as importedProjects } from '../data/projects.ts'; // changed code

const Projects: React.FC = () => {
  const gradientMap: Record<string, string> = {
    Backend: 'from-blue-500 to-cyan-500',
    DevOps: 'from-indigo-500 to-purple-500',
    'Full Stack': 'from-cyan-500 to-blue-500',
    Backend2: 'from-purple-500 to-pink-500' // example fallback / custom
  };

  const projects = importedProjects.map((p, i) => ({
    ...p,
    gradient: (gradientMap[p.category] || `from-violet-500 to-purple-500`)
  }));

  return (
    <section id="projects" className="py-24 px-4 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Featured Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-slate-800/50 rounded-2xl p-6 border border-slate-700 hover:border-transparent transition-all duration-500 backdrop-blur-sm overflow-hidden"
              style={{
                animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all">
                    {project.title}
                  </h3>
                  <span className={`text-xs px-3 py-1 bg-gradient-to-r ${project.gradient} bg-opacity-20 text-white rounded-full border border-white/20 whitespace-nowrap`}>
                    {project.category}
                  </span>
                </div>
                
                <p className="text-slate-400 mb-4 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                  {project.description}
                </p>
                
                <div className="mb-4 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                  <div className="text-xs font-semibold text-green-400 mb-1 flex items-center gap-1">
                    <Network size={12} />
                    Impact:
                  </div>
                  <div className="text-sm text-slate-300">{project.impact}</div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="text-xs px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full hover:bg-slate-600 transition-colors border border-slate-600 hover:border-slate-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;