"use client";

import { 
  Code, 
  Database, 
  Cloud, 
  Cpu, 
  Layers,
  GitBranch,
  Smartphone,
  Server
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Blockchain & Web3",
      icon: <Cpu size={24} />,
      skills: ["Solidity", "Web3.js", "Ethers.js", "Viem", "Ethereum", "DeFi", "Smart Contracts", "IPFS", "OpenZeppelin", "Foundry", "Hardhat", "The Graph", "Wagmi", "RainbowKit", "Chainlink", "UniswapV3"]
    },
    {
      title: "Frontend",
      icon: <Code size={24} />,
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Chakra UI", "HTML5", "CSS3", "Recharts", "TanStack Query", "Responsive Design"]
    },
    {
      title: "Backend",
      icon: <Server size={24} />,
      skills: ["Node.js", "Python", "Flask", "Java", "Express", "REST APIs", "GraphQL", "MongoDB", "Redis", "Celery", "Event-driven architecture"]
    },
    {
      title: "Integration & ESB",
      icon: <Layers size={24} />,
      skills: ["TIBCO BusinessWorks", "WebMethods", "Oracle Service Bus", "SOA", "Microservices", "API Management", "MFT (Axway CFT)", "Message Queuing"]
    },
    {
      title: "Databases & Tools",
      icon: <Database size={24} />,
      skills: ["MongoDB", "PostgreSQL", "Oracle DB", "MySQL", "Redis", "Git", "Docker", "Docker Compose", "Foundry", "Hardhat", "VS Code"]
    },
    {
      title: "Architecture & Patterns",
      icon: <Cloud size={24} />,
      skills: ["System Design", "Distributed Systems", "Microservices", "SOA", "Event-driven", "Design Patterns", "Security", "Performance Optimization", "TOGAF", "UML", "Archimate"]
    },
    {
      title: "Cloud & Infrastructure",
      icon: <Cloud size={24} />,
      skills: ["AWS", "PaaS", "SaaS", "IaaS", "Docker", "Kubernetes", "CI/CD", "Vercel", "Render", "Railway"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Compétences <span className="gradient-text">Techniques</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            Stack technique complète couvrant l'écosystème Web3 Ethereum,
            le développement fullstack moderne et 15 années d'expertise en
            architecture d'intégration système.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`project-card hover:scale-105 transition-all duration-300 animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="text-center">
                <div className="text-blue-400 mb-4 flex justify-center">
                  {category.icon}
                </div>
                <CardTitle className="text-xl font-bold text-white">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="skill-tag hover:border-blue-400/50 transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional certifications or learning section */}
        <div className="mt-16 text-center animate-fade-in-up animate-delay-600">
          <h3 className="text-2xl font-bold mb-8 text-white">
            Formation Continue & Certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="outline" className="text-lg px-4 py-2 border-purple-500/30 text-purple-300">
              Alchemy EVM Chain Certification (2024)
            </Badge>
            <Badge variant="outline" className="text-lg px-4 py-2 border-cyan-500/30 text-cyan-300">
              TOGAF 9.1 Certified
            </Badge>
            <Badge variant="outline" className="text-lg px-4 py-2 border-blue-500/30 text-blue-300">
              TIBCO BusinessWorks Certified Professional
            </Badge>
            <Badge variant="outline" className="text-lg px-4 py-2 border-green-500/30 text-green-300">
              Microsoft BizTalk Certified (2006-2010)
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;