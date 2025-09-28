"use client";

import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/alexandre',
      icon: <Github size={20} />
    },
    {
      name: 'LinkedIn', 
      url: 'https://linkedin.com/in/alexandre',
      icon: <Linkedin size={20} />
    },
    {
      name: 'Email',
      url: 'mailto:alexandre.dubois@example.com',
      icon: <Mail size={20} />
    }
  ];

  const quickLinks = [
    { name: 'Accueil', href: '#hero' },
    { name: 'Projets', href: '#projects' },
    { name: 'À propos', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleScrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-slate-800 bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand and description */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Alexandre.dev
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Développeur Web3 fullstack passionné par l'innovation blockchain 
              et l'architecture logicielle moderne.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : undefined}
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-2 rounded-lg border border-slate-600 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-200 text-gray-400 hover:text-blue-400"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleScrollToSection(link.href)}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact
            </h4>
            <div className="space-y-3 text-gray-400">
              <p>alexandre.dubois@example.com</p>
              <p>Paris, France</p>
              <p className="text-sm">
                Ouvert aux opportunités en développement Web3
              </p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © {currentYear} Alexandre Dubois. Tous droits réservés.
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Développé avec</span>
            <Heart size={16} className="text-red-400" />
            <span>et Next.js</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;