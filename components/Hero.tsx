"use client";

import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
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
              Astier <span className="gradient-text">Felicien</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-4">
              Développeur Web3 Fullstack
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Spécialisé Blockchain Ethereum • 15 ans d'expérience en architecture logicielle
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
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-blue-500/30 hover:border-blue-500/60 transition-colors duration-200 hover:bg-blue-500/10"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-blue-500/30 hover:border-blue-500/60 transition-colors duration-200 hover:bg-blue-500/10"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:astierfe@gmail.com"
                className="p-3 rounded-full border border-blue-500/30 hover:border-blue-500/60 transition-colors duration-200 hover:bg-blue-500/10"
              >
                <Mail size={24} />
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