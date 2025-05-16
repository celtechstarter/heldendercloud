
import React from 'react';
import { Award, Clock, HeartHandshake } from 'lucide-react';

const KeyMetrics: React.FC = () => {
  return (
    <section className="py-12 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center reveal">
            <Award size={48} className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Zertifizierte Expertise</h3>
            <p>Mit DEKRA- und IHK-zertifizierten Experten für Ihre Cloud- und Technologieprojekte</p>
          </div>
          
          <div className="flex flex-col items-center text-center reveal">
            <HeartHandshake size={48} className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Persönliche Betreuung</h3>
            <p>Individuelle Unterstützung und transparente Kommunikation während des gesamten Projekts</p>
          </div>
          
          <div className="flex flex-col items-center text-center reveal">
            <Clock size={48} className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Flexible Zusammenarbeit</h3>
            <p>100% von Zuhause mit flexibler Zeiteinteilung und modernen Kollaborationstools</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyMetrics;
