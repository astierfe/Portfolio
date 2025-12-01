"use client";

import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Download, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      toast.success('Message envoyé avec succès !');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast.error('Erreur lors de l\'envoi. Réessayez.');
      console.error('EmailJS error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "astierfe@gmail.com",
      link: "mailto:astierfe@gmail.com"
    },
    {
      icon: <Phone size={24} />,
      title: "Téléphone",
      value: "+33 6 45 78 85 56",
      link: "tel:+33645788556"
    },
    {
      icon: <MapPin size={24} />,
      title: "Localisation",
      value: "Troyes, France (Remote-first)",
      link: null
    },
    {
      icon: <Github size={24} />,
      title: "GitHub",
      value: "github.com/astierfe",
      link: "https://github.com/astierfe"
    },
    {
      icon: <Linkedin size={24} />,
      title: "LinkedIn",
      value: "linkedin.com/in/Felicien-Astier",
      link: "https://www.linkedin.com/in/f%C3%A9licien-astier-87101542/"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Restons en <span className="gradient-text">Contact</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            Intéressé par mes compétences Web3 ? Discutons de vos projets blockchain 
            et d'une éventuelle collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in-left">
            <Card className="project-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">
                  <Send size={24} className="text-blue-400" />
                  Envoyez-moi un message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Votre nom"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-slate-800 border-slate-600 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Votre email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-slate-800 border-slate-600 text-white placeholder:text-gray-400"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Input
                      type="text"
                      name="subject"
                      placeholder="Sujet du message"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-800 border-slate-600 text-white placeholder:text-gray-400"
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Votre message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-slate-800 border-slate-600 text-white placeholder:text-gray-400 resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={20} className="mr-2 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Envoyer le message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-in-right">
            <Card className="project-card h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">
                  Informations de contact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="text-blue-400 mt-1">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">
                          {info.title}
                        </h4>
                        {info.link ? (
                          <a 
                            href={info.link}
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-gray-400">{info.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-slate-600">
                  <h4 className="text-white font-semibold mb-4">
                    Disponibilité
                  </h4>
                  <p className="text-gray-400 mb-4">
                    Disponible immédiatement pour missions freelance ou CDI.
                  </p>
                  <div className="flex flex-col gap-2 mb-6">
                    <div className="flex items-center gap-2 text-green-400 text-sm">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span>Remote-first</span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-400 text-sm">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>1 jour/semaine à Paris maximum</span>
                    </div>
                  </div>

                  <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <a href="/CV_FelicienAstier_Dev-Web3.pdf" download>
                      <Download size={20} className="mr-2" />
                      Télécharger mon CV
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;