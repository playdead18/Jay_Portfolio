import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-4 border-t border-slate-800 bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto text-center text-slate-400">
        <p className="mb-2">&copy; {new Date().getFullYear()} Your Name. Built with React & Tailwind CSS</p>
        <p className="text-sm text-slate-500">Designed for backend developers who build scalable systems</p>
      </div>
    </footer>
  );
};

export default Footer;