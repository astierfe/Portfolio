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
      skills: ["Solidity", "Web3.js", "Ethers.js", "Ethereum", "DeFi", "Smart Contracts", "IPFS", "OpenZeppelin"]
    },
    {
      title: "Frontend",
      icon: <Code size={24} />,
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Responsive Design"]
    },
    {
      title: "Backend",
      icon: <Server size={24} />,
      skills: ["Node.js", "Express", "Python", "Java", "REST APIs", "GraphQL", "Microservices", "TIBCO BW"]
    },
    {
      title: "Databases",
      icon: <Database size={24} />,
      skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Oracle", "Database Design", "Query Optimization"]
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud size={24} />,
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Jenkins", "Git", "Linux", "Monitoring"]
    },
    {
      title: "Architecture",
      icon: <Layers size={24} />,
      skills: ["System Design", "Microservices", "SOA", "Design Patterns", "Integration", "Performance", "Security"]
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
            Une expertise complète couvrant l'écosystème Web3 moderne 
            et 15 années d'expérience en architecture système.
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
              Ethereum Developer Course (2023)
            </Badge>
            <Badge variant="outline" className="text-lg px-4 py-2 border-cyan-500/30 text-cyan-300">
              DeFi Specialist Certification
            </Badge>
            <Badge variant="outline" className="text-lg px-4 py-2 border-blue-500/30 text-blue-300">
              TIBCO Certified Professional
            </Badge>
            <Badge variant="outline" className="text-lg px-4 py-2 border-green-500/30 text-green-300">
              AWS Solutions Architect
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;