import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-slate-900/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Let's Connect</span>
        </h2>
        <p className="text-xl text-slate-300 mb-12">
          Interested in collaborating or discussing backend architecture? Feel free to reach out!
        </p>
        
        <div className="flex justify-center gap-6 flex-wrap">
          <a 
            href="https://github.com/playdead18" 
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all hover:scale-110 border border-slate-700 hover:border-slate-600"
          >
            <Github size={24} className="group-hover:rotate-12 transition-transform" />
            <span>GitHub</span>
          </a>
          <a 
            href="www.linkedin.com/in/jay-tatkondawar-30ab09210" 
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all hover:scale-110 border border-slate-700 hover:border-slate-600"
          >
            <Linkedin size={24} className="group-hover:rotate-12 transition-transform" />
            <span>LinkedIn</span>
          </a>
          <a 
            href="mailto:your.tatkondawar01@gmail.com"
            className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-xl transition-all hover:scale-110 font-semibold"
          >
            <Mail size={24} className="group-hover:rotate-12 transition-transform" />
            <span>Email Me</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;