import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Code, Database, Server } from 'lucide-react';

import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';

const Index = () => {
  // Function to handle scroll animations
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - 100) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Hero
        title="Wir machen Cloud, DevOps, KI & Webentwicklung fürs nächste Level"
        subtitle="Technische Exzellenz und strategische Weitsicht für Ihr digitales Wachstum"
        buttonText="Projekt anfragen"
        buttonLink="/kontakt"
      />

      {/* Über uns Sektion */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Willkommen bei Cloudhelden</h2>
            <p className="text-lg text-gray-700 mb-8">
              Cloudhelden ist Ihr strategischer Partner für Cloud-Transformation, DevOps Excellence, 
              KI-Integration und moderne Webentwicklung. Wir unterstützen Unternehmen dabei, 
              ihre digitale Reise erfolgreich zu gestalten und zukunftssicher aufzustellen.
            </p>
            <Link to="/ueber-uns" className="btn-primary">
              Mehr über uns
            </Link>
          </div>
        </div>
      </section>

      {/* Leistungen Sektion */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Unsere Leistungen</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Von Cloud-Infrastruktur und DevOps-Implementierung bis hin zu KI-gestützten 
              Lösungen und modernem Web-Development - wir decken das gesamte Spektrum ab.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="reveal">
              <ServiceCard
                title="Cloud Consulting"
                description="Wir beraten Sie bei der Auswahl und Implementierung der optimalen Cloud-Lösung für Ihr Unternehmen, sei es AWS, Azure, Google Cloud oder Multi-Cloud-Strategien."
                icon={Cloud}
                link="/leistungen/cloud-consulting"
              />
            </div>
            
            <div className="reveal">
              <ServiceCard
                title="DevOps"
                description="Mit unseren DevOps-Lösungen automatisieren und optimieren wir Ihre Entwicklungs- und Betriebsprozesse für mehr Effizienz und Zuverlässigkeit."
                icon={Server}
                link="/leistungen/devops"
              />
            </div>
            
            <div className="reveal">
              <ServiceCard
                title="KI-Lösungen"
                description="Wir entwickeln maßgeschneiderte KI- und Machine-Learning-Anwendungen, die Ihren Geschäftsprozessen einen echten Mehrwert bieten."
                icon={Database}
                link="/leistungen/ki-loesungen"
              />
            </div>
            
            <div className="reveal">
              <ServiceCard
                title="Webentwicklung"
                description="Von modernen Websites bis hin zu komplexen Web-Applikationen: Wir setzen Ihre digitalen Projekte mit den neuesten Technologien um."
                icon={Code}
                link="/leistungen/webentwicklung"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Sektion */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Kunden über uns</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Was unsere Kunden über die Zusammenarbeit mit uns sagen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="reveal">
              <TestimonialCard
                quote="Die Cloudhelden haben unsere Legacy-Infrastruktur erfolgreich in die Cloud migriert und dabei unsere Betriebskosten um 40% reduziert. Ein kompetentes Team, das wir jederzeit wieder beauftragen würden."
                author="Markus Schneider"
                company="CTO, TechSolutions GmbH"
              />
            </div>
            
            <div className="reveal">
              <TestimonialCard
                quote="Durch die DevOps-Implementierung konnten wir unsere Release-Zyklen von Monaten auf Tage verkürzen. Die Cloudhelden haben uns auf diesem Weg hervorragend begleitet."
                author="Lisa Wagner"
                company="Product Manager, Innovate AG"
              />
            </div>
            
            <div className="reveal">
              <TestimonialCard
                quote="Mit der von Cloudhelden entwickelten KI-Lösung zur Datenanalyse können wir jetzt in Echtzeit Entscheidungen treffen, die vorher Wochen an Auswertungen erfordert hätten."
                author="Dr. Thomas Becker"
                company="Leiter Datenanalyse, DataVision"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Sektion */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal">Bereit für Ihr nächstes Projekt?</h2>
          <p className="text-lg mb-10 max-w-3xl mx-auto reveal">
            Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch und erfahren Sie, wie wir Ihr Unternehmen auf das nächste Level bringen können.
          </p>
          <Link to="/kontakt" className="bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all reveal">
            Jetzt Projekt anfragen
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
