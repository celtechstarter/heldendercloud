
import React from 'react';
import { Calendar, ClipboardCheck, FileText, GraduationCap, Users } from 'lucide-react';

const ProcessSteps: React.FC = () => {
  const steps = [
    {
      icon: FileText,
      title: "Anfrage ausfüllen",
      description: "Starten Sie Ihren Weg mit Cloudhelden, indem Sie das Kontaktformular ausfüllen und uns Ihre Projektanforderungen mitteilen."
    },
    {
      icon: Calendar,
      title: "Termin vereinbaren",
      description: "Wir setzen uns zeitnah mit Ihnen in Verbindung, um einen ersten Beratungstermin zu vereinbaren und Ihre Bedürfnisse zu verstehen."
    },
    {
      icon: Users,
      title: "Mit Cloudhelden starten",
      description: "Nach dem initialen Gespräch entwickeln wir einen maßgeschneiderten Plan für Ihr Projekt und beginnen mit der Umsetzung."
    },
    {
      icon: ClipboardCheck,
      title: "Erfolgreiche Projektumsetzung",
      description: "Wir begleiten Sie während der gesamten Umsetzungsphase und stellen sicher, dass alle Anforderungen erfüllt werden."
    },
    {
      icon: GraduationCap,
      title: "Kontinuierliche Optimierung",
      description: "Nach Projektabschluss bieten wir Ihnen fortlaufende Unterstützung und helfen Ihnen, Ihre digitale Lösung stetig zu verbessern."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">So funktioniert's</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            In wenigen Schritten zu Ihrer maßgeschneiderten Cloud- und Technologielösung
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 -translate-x-1/2 hidden md:block"></div>
          
          {/* Steps */}
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`reveal flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Step number and icon */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-4">
                    {index + 1}
                  </div>
                  <div className="text-primary">
                    <step.icon size={28} />
                  </div>
                </div>

                {/* Step content */}
                <div className={`md:w-1/2 text-center md:text-left ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center reveal">
          <p className="text-lg text-gray-700 mb-8">
            Bereit, Ihr Projekt mit uns zu starten?
          </p>
          <a href="/kontakt" className="btn-primary">
            Jetzt anfragen
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
