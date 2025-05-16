
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Cloud, Code, Database, Server } from 'lucide-react';

interface ServiceInfo {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  icon: React.ReactNode;
}

const ServicePage = () => {
  const { service } = useParams<{ service: string }>();

  const services: Record<string, ServiceInfo> = {
    'cloud-consulting': {
      title: 'Cloud Consulting',
      description: 'Unsere Cloud-Experten helfen Ihnen, die optimale Cloud-Strategie zu entwickeln und umzusetzen. Wir begleiten Sie bei der Migration in die Cloud, optimieren Ihre bestehende Cloud-Infrastruktur oder unterstützen Sie bei der Entwicklung einer Multi-Cloud-Strategie.',
      features: [
        'Cloud-Strategie und Architekturberatung',
        'Cloud-Migration und Modernisierung',
        'Cloud-Kostenoptimierung',
        'Cloud-Security und Governance',
        'Managed Cloud Services',
      ],
      technologies: [
        'Amazon Web Services (AWS)',
        'Microsoft Azure',
        'Google Cloud Platform',
        'OpenStack',
        'Terraform, CloudFormation',
      ],
      icon: <Cloud size={48} className="text-primary" />
    },
    'devops': {
      title: 'DevOps',
      description: 'Mit unseren DevOps-Lösungen optimieren wir Ihre Entwicklungs- und Betriebsprozesse. Durch Automatisierung und Continuous Integration/Continuous Deployment steigern wir Ihre Entwicklungsgeschwindigkeit und Betriebsstabilität.',
      features: [
        'CI/CD-Pipeline-Implementierung',
        'Infrastructure as Code',
        'Containerisierung und Orchestrierung',
        'Monitoring und Alerting',
        'Site Reliability Engineering',
      ],
      technologies: [
        'Docker, Kubernetes',
        'Jenkins, GitLab CI',
        'Ansible, Puppet, Chef',
        'Prometheus, Grafana',
        'ELK-Stack, Splunk',
      ],
      icon: <Server size={48} className="text-primary" />
    },
    'ki-loesungen': {
      title: 'KI-Lösungen',
      description: 'Wir entwickeln KI- und Machine-Learning-Anwendungen, die Ihren Geschäftsprozessen einen echten Mehrwert bieten. Von der Datenanalyse bis zum Natural Language Processing – wir helfen Ihnen, die Kraft der künstlichen Intelligenz zu nutzen.',
      features: [
        'Predictive Analytics und Forecasting',
        'Computer Vision und Bilderkennung',
        'Natural Language Processing',
        'Recommendation Systems',
        'Machine Learning Operations (MLOps)',
      ],
      technologies: [
        'TensorFlow, PyTorch',
        'scikit-learn, Pandas',
        'GPT, BERT, transformers',
        'Kubeflow, MLflow',
        'AWS SageMaker, Azure ML',
      ],
      icon: <Database size={48} className="text-primary" />
    },
    'webentwicklung': {
      title: 'Webentwicklung',
      description: 'Von modernen Websites bis zu komplexen Web-Applikationen: Wir setzen Ihre digitalen Projekte mit den neuesten Technologien um. Performance, Benutzerfreundlichkeit und Skalierbarkeit stehen dabei immer im Fokus.',
      features: [
        'Responsive Webdesign',
        'Single-Page Applications',
        'Progressive Web Apps',
        'Content-Management-Systeme',
        'API-Entwicklung und -Integration',
      ],
      technologies: [
        'React, Angular, Vue.js',
        'Node.js, Express',
        'WordPress, Drupal',
        'GraphQL, REST',
        'MongoDB, PostgreSQL',
      ],
      icon: <Code size={48} className="text-primary" />
    }
  };

  const serviceData = service ? services[service] : null;

  if (!serviceData) {
    return (
      <div className="pt-32 pb-16 container mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Service nicht gefunden</h1>
        <p className="mb-8">Der gesuchte Service existiert leider nicht.</p>
        <Link to="/leistungen" className="btn-primary">
          Zurück zur Übersicht
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <div className="mb-4">{serviceData.icon}</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{serviceData.title}</h1>
              <p className="text-lg text-gray-700 max-w-2xl">
                {serviceData.description}
              </p>
            </div>
            <div className="mt-8 md:mt-0">
              <Link to="/kontakt" className="btn-primary">
                Beratungstermin vereinbaren
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Unsere Leistungen</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceData.features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-primary rounded-full p-2 mr-4 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Technologien</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceData.technologies.map((tech, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-accent rounded-full p-2 mr-4 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <p className="text-lg">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Erfolgsgeschichten</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-secondary p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Kundenprojekt 1</h3>
              <p className="mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at magna ut sem sollicitudin aliquam. Maecenas at nisl sapien. Etiam at neque eget ipsum ultricies laoreet.
              </p>
              <p className="font-medium text-primary">Ergebnis: 40% höhere Effizienz</p>
            </div>
            
            <div className="bg-secondary p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Kundenprojekt 2</h3>
              <p className="mb-6">
                Vivamus ullamcorper tristique risus, at tempor ipsum pulvinar in. Proin porttitor nisl vel bibendum tristique. Aliquam quis augue vitae nisl condimentum egestas.
              </p>
              <p className="font-medium text-primary">Ergebnis: 65% Kosteneinsparung</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Bereit für Ihr Projekt?</h2>
          <p className="text-lg mb-10 max-w-3xl mx-auto">
            Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch. Wir freuen uns darauf, mit Ihnen zusammenzuarbeiten und Ihre Anforderungen zu verstehen.
          </p>
          <Link to="/kontakt" className="bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all">
            Jetzt anfragen
          </Link>
        </div>
      </section>
    </>
  );
};

export default ServicePage;
