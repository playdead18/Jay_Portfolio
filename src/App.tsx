import React, { useState } from 'react';
import './App.css'; // changed code
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Projects from './components/Projects.tsx';
import Skills from './components/Skills.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import Experience from './components/Experience.tsx';  // Add this import

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  const scrollToSection = (id: string): void => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Projects />
      <Skills />
      <Experience />  {/* Add this line */}
      <Contact />
      <Footer />
    </div>
  );
};



export default App;

