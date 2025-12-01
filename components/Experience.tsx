"use client";

import { Calendar, MapPin, Building } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      "period": "2021 - maintenant",
      "title": "Développeur Web3 Fullstack / Formation Blockchain",
      "company": "Projets personnels | Transition carrière",
      "location": "Remote",
      "achievements": [
        "Développement 5 projets blockchain Ethereum Sepolia : LendForge (protocole DeFi), ChainStaker (staking multi-tier), ModularNFT (collection ERC-721), ModularMarketplace (trading NFT), UUPSVendingMachine (smart contracts upgradeables)",
        "Maîtrise Solidity, Foundry, Hardhat, Web3.js, Ethers.js, The Graph, Chainlink oracles et patterns avancés (UUPS, DeFi, ERC-721)",
        "Stack fullstack : React/Next.js/TypeScript frontend, Python/Flask/MongoDB/Redis/Celery backend, IPFS via Pinata",
        "Certifications : Alchemy EVM Chain (2024), mise en pratique architecture décentralisée et design patterns blockchain",
        "Transition naturelle de 15 ans architecture SI/ESB vers systèmes décentralisés peer-to-peer"
      ]
    },
    {
      period: "2017 - 2021",
      title: "Architecte SI / Urbaniste d'Échanges",
      company: "GRDF",
      location: "Paris, France",
      achievements: [
        "Architecture et modélisation des échanges inter-applicatifs (programme EPOD)",
        "Conception de pivots d'échanges et génération XSD/WSDL",
        "Mise en place d'une supervision des échanges (architecture ELK + Dynatrace)",
        "Étude d'opportunité architecture Microservices",
        "Management équipe échanges (3 personnes)"
      ]
    },
    {
      period: "2014 - 2017",
      title: "Architecte SI / Urbaniste d'Échanges",
      company: "Banque de France",
      location: "Paris, France",
      achievements: [
        "Définition de la politique des échanges inter-applicatifs (ESB, API Management, MFT)",
        "Modélisation des patterns d'échanges (Building Blocks) dans ARIS (Archimate)",
        "Chef de projet MOA pour mise en place solution MFT (Axway CFT)",
        "Support aux architectes et projets sur problématiques d'intégration",
        "Cartographie du SI et modélisation des processus métier (BPMN)"
      ]
    },
    {
      period: "2005 - 2014",
      title: "Architecte Applicatif / Consultant ESB",
      company: "Diverses missions (EDF, BNP Paribas Assurance, Dalkia)",
      location: "France",
      achievements: [
        "Conception et développement de plateformes d'échanges centralisées (ESB)",
        "Architecture SOA avec TIBCO BusinessWorks, WebMethods, Oracle Service Bus",
        "Intégration de systèmes complexes pour secteurs finance et énergie",
        "Développement Java/J2EE, PL/SQL pour applications critiques",
        "Expert technique ESB sur projets d'urbanisation SI"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Expériences <span className="gradient-text">Professionnelles</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            15 années d'expertise technique en architecture d'intégration système
            et développement ESB/SOA pour des acteurs majeurs de la finance et de l'énergie.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 z-10"></div>

                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card 
                    className={`experience-card animate-fade-in-up transition-all duration-300 hover:scale-105`}
                    style={{ animationDelay: `${index * 0.3}s` }}
                  >
                    <CardHeader>
                      <div className="flex items-center gap-2 text-blue-400 text-sm mb-2">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <CardTitle className="text-xl font-bold text-white">
                        {exp.title}
                      </CardTitle>
                      <div className="flex items-center gap-4 text-gray-400 text-sm">
                        <div className="flex items-center gap-1">
                          <Building size={14} />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li 
                            key={achievementIndex} 
                            className="text-gray-300 text-sm flex items-start gap-2"
                          >
                            <span className="text-blue-400 mt-1.5">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Empty space for timeline balance */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;