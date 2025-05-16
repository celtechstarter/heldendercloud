
import React from 'react';
import { Link } from 'react-router-dom';
import TeamMember from '@/components/TeamMember';

const UeberUns = () => {
  const team = [
    {
      name: 'Dr. Markus Weber',
      role: 'Gründer & CEO',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256',
      bio: 'Ex-Google Cloud Architekt mit über 15 Jahren Erfahrung in der IT-Branche.'
    },
    {
      name: 'Julia Schneider',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256',
      bio: 'Spezialistin für DevOps und Cloud-Infrastruktur mit Fokus auf AWS und Azure.'
    },
    {
      name: 'Michael Bauer',
      role: 'Head of AI Solutions',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256',
      bio: 'Promovierter Informatiker mit Spezialisierung auf Machine Learning und KI.'
    },
    {
      name: 'Sarah Hoffmann',
      role: 'Lead Web Developer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256',
      bio: 'Full-Stack-Entwicklerin mit Expertise in modernen JavaScript-Frameworks.'
    }
  ];

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Über uns</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Lernen Sie das Team hinter Cloudhelden kennen und erfahren Sie mehr über unsere Mission und Werte.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Unsere Geschichte</h2>
            <p className="text-lg mb-6">
              Cloudhelden wurde 2018 von Dr. Markus Weber gegründet, mit der Vision, hochwertige Cloud-Lösungen und technische Expertise für Unternehmen jeder Größe zugänglich zu machen.
            </p>
            <p className="text-lg mb-6">
              Was als spezialisiertes Cloud-Beratungsunternehmen begann, hat sich zu einem Full-Service-Anbieter entwickelt, der heute das gesamte Spektrum moderner IT-Dienstleistungen abdeckt – von Cloud-Infrastruktur über DevOps und KI-Lösungen bis hin zur Webentwicklung.
            </p>
            <p className="text-lg">
              Unser Name ist Programm: Als „Cloudhelden" verstehen wir uns als die Experten, die Ihnen helfen, die Herausforderungen der digitalen Transformation zu meistern und die Chancen der Cloud-Technologien voll auszuschöpfen.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Unsere Werte</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Exzellenz</h3>
              <p>Wir streben in allen Bereichen nach höchster Qualität und kontinuierlicher Verbesserung.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p>Wir denken voraus und nutzen neue Technologien, um echten Mehrwert für unsere Kunden zu schaffen.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Transparenz</h3>
              <p>Wir kommunizieren offen und ehrlich – bei Projekten, Kosten und Herausforderungen.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Partnerschaft</h3>
              <p>Wir verstehen uns als langfristiger Partner unserer Kunden, nicht nur als Dienstleister.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Unser Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {team.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                bio={member.bio}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Werde Teil unseres Teams</h2>
          <p className="text-lg mb-10 max-w-3xl mx-auto">
            Wir sind immer auf der Suche nach talentierten Köpfen, die unsere Leidenschaft für Technologie teilen. Schau dir unsere offenen Stellen an oder sende uns eine Initiativbewerbung!
          </p>
          <Link to="/karriere" className="bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all">
            Stellenangebote ansehen
          </Link>
        </div>
      </section>
    </>
  );
};

export default UeberUns;
