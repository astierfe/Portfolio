"use client";

import { useState } from 'react';
import { ExternalLink, Github, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ImageCarousel from './ImageCarousel';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<{ title: string; screenshots: string[] } | null>(null);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);

  const projects = [
    {
      title: "LendForge",
      description: "Protocole de prêt décentralisé sur Ethereum avec emprunt sur-collatéralisé, liquidations automatisées et oracle Chainlink. Architecture complète avec subgraph TheGraph, bot de liquidation Python et interface Next.js. Support multi-actifs (ETH, DAI, USDC).",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400",
      tags: ["Solidity", "The Graph", "Python", "Next.js", "Chainlink", "DeFi", "Foundry"],
      demoUrl: "https://lend-forge.vercel.app/",
      codeUrl: "https://github.com/astierfe/LendForge",
      screenshots: [
        "/screenshots/lendforge/01.JPG",
        "/screenshots/lendforge/02.JPG",
        "/screenshots/lendforge/03.JPG",
        "/screenshots/lendforge/04.JPG",
        "/screenshots/lendforge/05.JPG"
      ]
    },
    {
      title: "ChainStaker",
      description: "Plateforme de staking DeFi avec système multi-tier (7/30/90 jours), rewards dynamiques et analytics avancés. Backend événementiel Python/Flask avec MongoDB, event listener temps réel et 8 tâches Celery planifiées. Interface Next.js avec auto-refresh et charts Recharts.",
      image: "https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=400",
      tags: ["Solidity", "Python", "Flask", "MongoDB", "Redis", "Celery", "Next.js", "Foundry"],
      demoUrl: "https://chainstalker.vercel.app/",
      codeUrl: "https://github.com/astierfe/ChainStalker",
      screenshots: [
        "/screenshots/chainstaker/01.JPG",
        "/screenshots/chainstaker/02.JPG",
        "/screenshots/chainstaker/03.JPG"
      ]
    },
    {
      title: "ModularNFT",
      description: "Collection NFT complète (1000 NFTs max) avec smart contract ERC-721 incluant royalties EIP-2981, batch minting et interface d'administration. Métadonnées et images IPFS via Pinata. Interface Next.js avec connexion multi-wallets RainbowKit et statistiques temps réel.",
      image: "https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=400",
      tags: ["Solidity", "Next.js", "IPFS", "Pinata", "OpenZeppelin", "Wagmi", "Foundry"],
      demoUrl: "https://modular-nft.vercel.app/",
      codeUrl: "#https://github.com/astierfe/Modular-NFT-Marketplace",
      screenshots: [
        "/screenshots/modular-nft/01.jpg",
        "/screenshots/modular-nft/02.jpg",
        "/screenshots/modular-nft/03.jpg"
      ]
    },
    {
      title: "ModularMarketplace",
      description: "Marketplace NFT peer-to-peer décentralisée pour trading de NFTs avec distribution automatique des royalties (EIP-2981). Listing/delisting, système d'achat direct, gestion des revenus par adresse. Interface Next.js avec RainbowKit et EmailJS pour le support.",
      image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=400",
      tags: ["Solidity", "Next.js", "TypeScript", "Wagmi", "RainbowKit", "OpenZeppelin"],
      demoUrl: "https://modular-marketplace.vercel.app/",
      codeUrl: "https://github.com/astierfe/Modular-Marketplace",
      screenshots: [
        "/screenshots/modular-marketplace/01.JPG",
        "/screenshots/modular-marketplace/02.JPG",
        "/screenshots/modular-marketplace/03.JPG"
      ]
    },
    {
      title: "UUPS VendingMachine",
      description: "DApp de distributeur automatique avec smart contracts upgradeables (pattern UUPS). Dashboard admin complet, analytics avancés, système de permissions. Documentation UML exhaustive (12 diagrammes). Démonstration des upgrades de contrats sans perte d'état.",
      image: "https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=400",
      tags: ["Solidity", "UUPS", "React", "Hardhat", "OpenZeppelin", "UML"],
      demoUrl: "https://astierfe.github.io/UUPS-VendingMachine",
      codeUrl: "https://github.com/astierfe/UUPS-VendingMachine",
      screenshots: [
        "/screenshots/UUPS-VendingMachine/01.JPG",
        "/screenshots/UUPS-VendingMachine/02.JPG",
        "/screenshots/UUPS-VendingMachine/03.JPG",
        "/screenshots/UUPS-VendingMachine/04.JPG"
      ]
    }
  ];

  const openCarousel = (project: { title: string; screenshots: string[] }) => {
    setSelectedProject(project);
    setIsCarouselOpen(true);
  };

  const closeCarousel = () => {
    setIsCarouselOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Projets <span className="gradient-text">Web3</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            Découvrez mes projets blockchain Ethereum : protocoles DeFi, NFT marketplace,
            staking platform et smart contracts upgradeables. Stack complète Solidity,
            Next.js, Python, The Graph.
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

              <CardFooter className="flex gap-2">
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
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  onClick={() => openCarousel({ title: project.title, screenshots: project.screenshots })}
                >
                  <ImageIcon size={16} className="mr-2" />
                  Screens
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Image Carousel Modal */}
      {selectedProject && (
        <ImageCarousel
          images={selectedProject.screenshots}
          projectTitle={selectedProject.title}
          isOpen={isCarouselOpen}
          onClose={closeCarousel}
        />
      )}
    </section>
  );
};

export default Projects;