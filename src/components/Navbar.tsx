
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="z-10">
          <Logo />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/leistungen" 
            className={`font-medium transition-colors ${isScrolled ? 'text-dark-light' : 'text-white'} hover:text-primary`}
          >
            Leistungen
          </Link>
          <Link 
            to="/ueber-uns" 
            className={`font-medium transition-colors ${isScrolled ? 'text-dark-light' : 'text-white'} hover:text-primary`}
          >
            Über uns
          </Link>
          <Link 
            to="/blog" 
            className={`font-medium transition-colors ${isScrolled ? 'text-dark-light' : 'text-white'} hover:text-primary`}
          >
            Blog
          </Link>
          <Link 
            to="/kontakt" 
            className={`font-medium transition-colors ${isScrolled ? 'text-dark-light' : 'text-white'} hover:text-primary`}
          >
            Kontakt
          </Link>
          <Link 
            to="/kontakt" 
            className={`${
              isScrolled 
                ? 'bg-primary text-white hover:bg-primary-hover' 
                : 'bg-white text-primary hover:bg-white/90'
            } px-6 py-3 rounded-md transition-colors font-medium`}
          >
            Projekt anfragen
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-10" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X size={24} className="text-dark" />
          ) : (
            <Menu size={24} className={isScrolled ? 'text-dark' : 'text-white'} />
          )}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-white flex flex-col items-center justify-center">
            <nav className="flex flex-col items-center space-y-8">
              <Link 
                to="/leistungen" 
                className="text-xl text-dark-light hover:text-primary font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Leistungen
              </Link>
              <Link 
                to="/ueber-uns" 
                className="text-xl text-dark-light hover:text-primary font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Über uns
              </Link>
              <Link 
                to="/blog" 
                className="text-xl text-dark-light hover:text-primary font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/kontakt" 
                className="text-xl text-dark-light hover:text-primary font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kontakt
              </Link>
              <Link 
                to="/kontakt" 
                className="bg-primary text-white px-6 py-3 rounded-md text-xl"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projekt anfragen
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
