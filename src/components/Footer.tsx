
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Mail, Phone, Globe, MapPin, Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Über uns</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/ueber-uns" className="text-gray-400 hover:text-primary transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/ueber-uns#mission" className="text-gray-400 hover:text-primary transition-colors">
                  Mission
                </Link>
              </li>
              <li>
                <Link to="/impressum" className="text-gray-400 hover:text-primary transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="text-gray-400 hover:text-primary transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link to="/agb" className="text-gray-400 hover:text-primary transition-colors">
                  AGB
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Leistungen</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/leistungen/cloud-consulting" className="text-gray-400 hover:text-primary transition-colors">
                  Cloud Consulting
                </Link>
              </li>
              <li>
                <Link to="/leistungen/devops" className="text-gray-400 hover:text-primary transition-colors">
                  DevOps
                </Link>
              </li>
              <li>
                <Link to="/leistungen/ki-loesungen" className="text-gray-400 hover:text-primary transition-colors">
                  KI-Lösungen
                </Link>
              </li>
              <li>
                <Link to="/leistungen/webentwicklung" className="text-gray-400 hover:text-primary transition-colors">
                  Webentwicklung
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Ressourcen</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/ressourcen/case-studies" className="text-gray-400 hover:text-primary transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/ressourcen/whitepaper" className="text-gray-400 hover:text-primary transition-colors">
                  Whitepaper
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Kontakt</h3>
            <div className="space-y-4">
              <p className="flex items-center text-gray-400">
                <MapPin size={18} className="mr-2 flex-shrink-0" />
                <span>
                  Cloudhelden GmbH<br />
                  Musterstraße 123<br />
                  10115 Berlin
                </span>
              </p>
              <p>
                <a href="mailto:kontakt@cloudhelden.org" className="flex items-center text-gray-400 hover:text-primary transition-colors">
                  <Mail size={18} className="mr-2" />
                  kontakt@cloudhelden.org
                </a>
              </p>
              <p>
                <a href="tel:+491234567890" className="flex items-center text-gray-400 hover:text-primary transition-colors">
                  <Phone size={18} className="mr-2" />
                  +49 1234 567890
                </a>
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Logo />
          </div>
          <p className="text-gray-500 text-sm">
            © {currentYear} Cloudhelden. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
