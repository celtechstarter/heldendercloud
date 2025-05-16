
import React from 'react';
import { Award, Check, Home } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Wir sind ausgezeichnet</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* DEKRA Zertifiziert */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <Award size={48} className="text-primary" />
            </div>
            <div className="h-20 flex items-center justify-center mb-4">
              <img 
                src="https://cloudhelden.org/cdn/shop/files/dekra_logo.jpg?v=1744024535" 
                alt="DEKRA Zertifiziert" 
                className="h-16 object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">DEKRA Zertifiziert</h3>
            <p className="text-muted">Qualität und Standards durch DEKRA bestätigt</p>
          </div>
          
          {/* 100% von Zuhause */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <Home size={48} className="text-primary" />
            </div>
            <div className="h-20 flex items-center justify-center mb-4">
              <img 
                src="https://cloudhelden.org/cdn/shop/files/online_lernen.jpg?v=1744024535" 
                alt="100% von Zuhause" 
                className="h-16 object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">100% von Zuhause</h3>
            <p className="text-muted">Remote-First Ansatz für maximale Flexibilität</p>
          </div>
          
          {/* Gefördert */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <Check size={48} className="text-primary" />
            </div>
            <div className="h-20 flex items-center justify-center mb-4">
              <img 
                src="https://cloudhelden.org/cdn/shop/files/geld.jpg?v=1744025432" 
                alt="Gefördert" 
                className="h-16 object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Gefördert</h3>
            <p className="text-muted">Förderungsmöglichkeiten für Unternehmen</p>
          </div>
          
          {/* IHK Badge */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <Award size={48} className="text-primary" />
            </div>
            <div className="h-20 flex items-center justify-center mb-4">
              <img 
                src="https://cloudhelden.org/cdn/shop/files/berufsspezialist_ihk_bachelor-678nsn678nsn678n-68271386ed351.webp?v=1747393709" 
                alt="IHK Zertifiziert" 
                className="h-16 object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">IHK Zertifiziert</h3>
            <p className="text-muted">Qualität durch IHK-Standards garantiert</p>
          </div>
        </div>
        
        {/* Trustpilot-ähnliches Rating */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center mb-4 bg-[#00B67A] text-white px-4 py-2 rounded">
            <div className="mr-2 font-bold">Trustpilot</div>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <div className="ml-2 font-bold">4.9/5</div>
          </div>
          <p className="text-muted">Basierend auf über 100 Bewertungen</p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
