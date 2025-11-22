"use client";

import Image from 'next/image';
import { Code, Zap, Users, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: "15 ans d'expérience",
      description: "Architecture logicielle et développement full-stack"
    },
    {
      icon: <Zap size={24} />,
      title: "Expert TIBCO BW",
      description: "Spécialiste intégration et microservices"
    },
    {
      icon: <Users size={24} />,
      title: "Leadership technique",
      description: "Gestion d'équipes et mentoring développeurs"
    },
    {
      icon: <Target size={24} />,
      title: "Transition Web3",
      description: "Focus blockchain Ethereum et DeFi"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            À <span className="gradient-text">Propos</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo et présentation */}
          <div className="animate-fade-in-left">
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden border-4 border-blue-500/30 shadow-2xl">
                <Image
                  src="/og-image.png"
                  alt="Félicien Astier"
                  className="w-full h-full object-cover"
                  width={320}
                  height={320}
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl -z-10"></div>
            </div>
          </div>

          <div className="animate-fade-in-right">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Développeur passionné en transition vers Web3
            </h3>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Avec 15 années d'expérience en architecture logicielle, j'ai évolué 
                des systèmes d'intégration traditionnels vers l'écosystème blockchain révolutionnaire.
              </p>
              <p>
                Expert TIBCO BusinessWorks 5.x, j'ai dirigé des équipes techniques 
                et conçu des architectures microservices complexes pour des entreprises 
                internationales.
              </p>
              <p>
                Aujourd'hui, je me spécialise dans le développement Web3 fullstack, 
                avec un focus particulier sur Ethereum, les smart contracts Solidity, 
                et les applications DeFi.
              </p>
              <p>
                Ma solide expérience en architecture système me permet d'aborder 
                la blockchain avec une vision technique mature et une approche 
                méthodique de la sécurité.
              </p>
            </div>
          </div>
        </div>

        {/* Points forts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {highlights.map((item, index) => (
            <Card 
              key={index} 
              className={`project-card text-center p-6 animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="pt-6">
                <div className="text-blue-400 mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;