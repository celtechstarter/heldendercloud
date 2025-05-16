
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Mail, Phone, Globe, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Logo />
            <p className="mt-4 text-gray-400">
              Wir machen Cloud, DevOps, KI & Webentwicklung fürs nächste Level
            </p>
            <div className="mt-6 space-y-2">
              <a href="mailto:kontakt@cloudhelden.org" className="flex items-center text-gray-400 hover:text-primary">
                <Mail size={18} className="mr-2" />
                kontakt@cloudhelden.org
              </a>
              <a href="tel:+491234567890" className="flex items-center text-gray-400 hover:text-primary">
                <Phone size={18} className="mr-2" />
                +49 1234 567890
              </a>
              <p className="flex items-start text-gray-400">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>Cloudhelden GmbH<br />Musterstraße 123<br />10115 Berlin</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary">Home</Link>
              </li>
              <li>
                <Link to="/leistungen" className="text-gray-400 hover:text-primary">Leistungen</Link>
              </li>
              <li>
                <Link to="/ueber-uns" className="text-gray-400 hover:text-primary">Über uns</Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-gray-400 hover:text-primary">Kontakt</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Leistungen</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/leistungen/cloud-consulting" className="text-gray-400 hover:text-primary">
                  Cloud Consulting
                </Link>
              </li>
              <li>
                <Link to="/leistungen/devops" className="text-gray-400 hover:text-primary">
                  DevOps
                </Link>
              </li>
              <li>
                <Link to="/leistungen/ki-loesungen" className="text-gray-400 hover:text-primary">
                  KI-Lösungen
                </Link>
              </li>
              <li>
                <Link to="/leistungen/webentwicklung" className="text-gray-400 hover:text-primary">
                  Webentwicklung
                </Link>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Zertifizierungen</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 p-2 rounded flex items-center justify-center">
                <img 
                  src="https://cloudhelden.org/cdn/shop/files/dekra_logo.jpg?v=1744024535" 
                  alt="DEKRA Zertifiziert" 
                  className="h-12 object-contain"
                />
              </div>
              <div className="bg-white/10 p-2 rounded flex items-center justify-center">
                <img 
                  src="https://cloudhelden.org/cdn/shop/files/berufsspezialist_ihk_bachelor-678nsn678nsn678n-68271386ed351.webp?v=1747393709" 
                  alt="IHK Zertifiziert" 
                  className="h-12 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500">
            © {currentYear} Cloudhelden GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <Link to="/impressum" className="text-gray-400 hover:text-primary">Impressum</Link>
            <Link to="/datenschutz" className="text-gray-400 hover:text-primary">Datenschutz</Link>
            <Link to="/agb" className="text-gray-400 hover:text-primary">AGB</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
