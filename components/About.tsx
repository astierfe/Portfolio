"use client";

import Image from 'next/image';
import { Code, Zap, Users, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: "15 ans d'expertise technique",
      description: "Intégration système et architectures distribuées"
    },
    {
      icon: <Zap size={24} />,
      title: "Spécialiste Web3",
      description: "Smart contracts Solidity, DeFi, NFT, DApps complètes"
    },
    {
      icon: <Users size={24} />,
      title: "Systèmes distribués",
      description: "De l'ESB/SOA à la blockchain décentralisée"
    },
    {
      icon: <Target size={24} />,
      title: "Stack fullstack",
      description: "Solidity, React, Next.js, TypeScript, Python, Node.js"
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
              Développeur Web3 fullstack spécialisé Ethereum et DeFi
            </h3>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Développeur Web3 fullstack spécialisé Ethereum et DeFi, avec 15 ans d'expertise
                en architecture d'intégration système pour des environnements critiques.
              </p>

              <div className="space-y-2">
                <p className="font-semibold text-blue-400">Expertise Web3</p>
                <ul className="list-disc list-inside space-y-1 text-base">
                  <li>Smart contracts Solidity avec patterns avancés (UUPS, DeFi protocols, NFT)</li>
                  <li>Développement fullstack : React, Next.js, TypeScript, Node.js, Python</li>
                  <li>Écosystème Ethereum : Foundry, Hardhat, The Graph, IPFS, OpenZeppelin</li>
                  <li>DApps complètes : staking, lending, NFT marketplace, smart contracts upgradeables</li>
                </ul>
              </div>

              <div className="space-y-2">
                <p className="font-semibold text-blue-400">Expérience Technique</p>
                <ul className="list-disc list-inside space-y-1 text-base">
                  <li>15 ans en architecture SOA/ESB (TIBCO BusinessWorks, WebMethods, Oracle Service Bus)</li>
                  <li>Conception de systèmes distribués pour BNP Paribas, EDF, Banque de France, GRDF, Accor Hotels</li>
                  <li>Expertise en sécurité applicative, patterns d'intégration et architecture événementielle</li>
                </ul>
              </div>

              <div className="space-y-2">
                <p className="font-semibold text-blue-400">Certifications</p>
                <p className="text-base">Alchemy EVM Chain • TOGAF 9.1 • TIBCO BusinessWorks</p>
              </div>

              <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <p className="text-base font-semibold text-blue-300">
                  📍 Disponible immédiatement • Remote-first • Paris 1j/semaine max • Freelance/CDI
                </p>
              </div>
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