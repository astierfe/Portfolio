"use client";

import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleScrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-50">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Félicien <span className="gradient-text">Astier</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-4">
              Développeur Web3 Fullstack
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Spécialisé Blockchain Ethereum & DeFi • 15 ans d'expertise en intégration système
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              onClick={handleScrollToProjects}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
            >
              Découvrir mes projets
            </Button>
            <div className="flex gap-4">
              <a
                href="https://github.com/astierfe"
                className="p-3 rounded-full border border-blue-500/30 hover:border-blue-500/60 transition-colors duration-200 hover:bg-blue-500/10"
                title="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/f%C3%A9licien-astier-87101542/"
                className="p-3 rounded-full border border-blue-500/30 hover:border-blue-500/60 transition-colors duration-200 hover:bg-blue-500/10"
                title="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:astierfe@gmail.com"
                className="p-3 rounded-full border border-blue-500/30 hover:border-blue-500/60 transition-colors duration-200 hover:bg-blue-500/10"
                title="Email"
              >
                <Mail size={24} />
              </a>
              <a
                href="#cv"
                className="p-3 rounded-full border border-green-500/30 hover:border-green-500/60 transition-colors duration-200 hover:bg-green-500/10"
                title="CV / Resume"
              >
                <FileText size={24} className="text-green-400" />
              </a>
            </div>
          </div>

          <div className="animate-bounce mt-16">
            <button 
              onClick={handleScrollToProjects}
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;