"use client";

import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "DEX Protocol",
      description: "Plateforme d'échange décentralisée avec pools de liquidité automatisés et farming de tokens. Architecture complète avec smart contracts Solidity et interface React.",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400",
      tags: ["Solidity", "React", "Web3.js", "Ethers.js", "DeFi"],
      demoUrl: "https://demo.example.com",
      codeUrl: "https://github.com/example/dex-protocol"
    },
    {
      title: "NFT Marketplace",
      description: "Marketplace NFT avec minting, enchères et royalties automatiques. Smart contracts optimisés gas et interface utilisateur moderne.",
      image: "https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=400",
      tags: ["Solidity", "Next.js", "IPFS", "OpenZeppelin", "TypeScript"],
      demoUrl: "https://demo.example.com",
      codeUrl: "https://github.com/example/nft-marketplace"
    },
    {
      title: "DAO Governance",
      description: "Système de gouvernance décentralisée avec vote pondéré et propositions automatisées. Integration avec Snapshot et multisig.",
      image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=400",
      tags: ["Solidity", "Governance", "Multisig", "React", "Web3"],
      demoUrl: "https://demo.example.com",
      codeUrl: "https://github.com/example/dao-governance"
    },
    {
      title: "Yield Farming DApp",
      description: "Application de farming avec stratégies automatisées et calcul de rendements en temps réel. Interface intuitive pour la gestion des positions.",
      image: "https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=400",
      tags: ["DeFi", "Smart Contracts", "React", "Web3", "Compound"],
      demoUrl: "https://demo.example.com",
      codeUrl: "https://github.com/example/yield-farming"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Projets <span className="gradient-text">Web3</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            Découvrez mes dernières créations blockchain, des DeFi aux NFT, 
            développées avec les technologies les plus avancées de l'écosystème Ethereum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`project-card hover:scale-105 transition-all duration-300 animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-300">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="skill-tag">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex gap-3">
                <Button variant="outline" size="sm" asChild className="flex-1">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild className="flex-1">
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;