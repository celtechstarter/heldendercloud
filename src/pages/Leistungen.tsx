
import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Code, Database, Server } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';

const Leistungen = () => {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Unsere Leistungen</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Entdecken Sie unser umfassendes Angebot an IT-Dienstleistungen und -Lösungen, maßgeschneidert für Ihre Bedürfnisse.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <ServiceCard
              title="Cloud Consulting"
              description="Unsere Cloud-Experten begleiten Sie bei Ihrer Cloud-Journey – von der Strategieentwicklung über die Migration bis hin zur Optimierung. Wir helfen Ihnen, die Vorteile der Cloud voll auszuschöpfen und Ihre IT-Infrastruktur zukunftssicher zu gestalten."
              icon={Cloud}
              link="/leistungen/cloud-consulting"
            />
            
            <ServiceCard
              title="DevOps"
              description="Mit unseren DevOps-Lösungen überbrücken wir die Kluft zwischen Entwicklung und Betrieb. Durch Automatisierung, Continuous Integration/Continuous Deployment und Infrastructure as Code steigern wir Ihre Entwicklungsgeschwindigkeit und Betriebsstabilität."
              icon={Server}
              link="/leistungen/devops"
            />
            
            <ServiceCard
              title="KI-Lösungen"
              description="Nutzen Sie die Kraft der künstlichen Intelligenz für Ihr Unternehmen. Wir entwickeln KI-Lösungen, die Ihre Daten in wertvolle Erkenntnisse verwandeln und Geschäftsprozesse automatisieren – vom Machine Learning bis zur Natural Language Processing."
              icon={Database}
              link="/leistungen/ki-loesungen"
            />
            
            <ServiceCard
              title="Webentwicklung"
              description="Von ansprechenden Unternehmenswebsites bis zu komplexen Webanwendungen – unser Entwicklungsteam setzt Ihre Projekte mit modernen Technologien und Methoden um. Performance, UX und Skalierbarkeit stehen dabei immer im Fokus."
              icon={Code}
              link="/leistungen/webentwicklung"
            />
          </div>
        </div>
      </section>

      {/* Full-service Approach */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Unser Full-Service-Ansatz</h2>
            <p className="text-lg mb-8">
              Bei Cloudhelden bieten wir Ihnen ein ganzheitliches Leistungsspektrum, das alle Aspekte Ihrer IT-Anforderungen abdeckt. Wir begleiten Sie von der ersten Beratung über die Konzeption und Umsetzung bis hin zum langfristigen Support und Betrieb Ihrer Systeme.
            </p>
            <p className="text-lg mb-8">
              Durch die enge Verzahnung unserer Kompetenzbereiche können wir integrierte Lösungen entwickeln, die optimal aufeinander abgestimmt sind und maximalen Mehrwert für Ihr Unternehmen schaffen.
            </p>

            <div className="mt-10 text-center">
              <Link to="/kontakt" className="btn-primary">
                Jetzt Beratungstermin vereinbaren
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Unsere Technologien</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70">
            <div className="h-16 w-32 flex items-center justify-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" 
                alt="AWS" 
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="h-16 w-32 flex items-center justify-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" 
                alt="Microsoft Azure" 
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="h-16 w-32 flex items-center justify-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" 
                alt="Google Cloud" 
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="h-16 w-32 flex items-center justify-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg" 
                alt="Kubernetes" 
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="h-16 w-32 flex items-center justify-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Docker-logo.svg" 
                alt="Docker" 
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="h-16 w-32 flex items-center justify-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg" 
                alt="Apache Spark" 
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Leistungen;
