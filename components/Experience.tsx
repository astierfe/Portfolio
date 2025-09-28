"use client";

import { Calendar, MapPin, Building } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      period: "2020 - 2024",
      title: "Architecte Senior",
      company: "TechCorp Solutions",
      location: "Paris, France",
      achievements: [
        "Architecture et développement de solutions microservices complexes",
        "Expert technique TIBCO BusinessWorks 5.x et 6.x",
        "Gestion et mentoring d'équipes techniques (8-12 développeurs)",
        "Conception d'APIs REST haute performance et intégrations système",
        "Migration de systèmes legacy vers architectures cloud-native"
      ]
    },
    {
      period: "2015 - 2020",
      title: "Développeur Senior",
      company: "Integration Systems Ltd",
      location: "Lyon, France",
      achievements: [
        "Développement de solutions d'intégration pour clients enterprise",
        "Formation et accompagnement d'équipes sur TIBCO Suite",
        "Analyse technique et conception de systèmes distribués",
        "Optimisation performance et monitoring applications critiques",
        "Gestion de projets techniques avec méthodologie Agile"
      ]
    },
    {
      period: "2009 - 2015",
      title: "Développeur",
      company: "Software Dynamics",
      location: "Marseille, France",
      achievements: [
        "Développement d'applications métier Java/J2EE",
        "Intégration de systèmes legacy avec nouvelles technologies",
        "Maintenance évolutive et corrective applications existantes",
        "Participation à la conception d'architectures SOA",
        "Développement de connecteurs et adaptateurs personnalisés"
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
            15 années d'expertise technique, de l'intégration système 
            à l'architecture cloud, vers l'innovation blockchain.
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