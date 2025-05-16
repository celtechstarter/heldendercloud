
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { Button } from './ui/button';

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
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-white/0 py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="z-10">
          <Logo />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-dark-light hover:text-primary font-medium transition-colors">
            Home
          </Link>
          <Link to="/leistungen" className="text-dark-light hover:text-primary font-medium transition-colors">
            Leistungen
          </Link>
          <Link to="/ueber-uns" className="text-dark-light hover:text-primary font-medium transition-colors">
            Über uns
          </Link>
          <Link to="/kontakt" className="text-dark-light hover:text-primary font-medium transition-colors">
            Kontakt
          </Link>
          <Link to="/kontakt" className="bg-primary text-white px-4 py-2 text-sm rounded-md font-medium transition-all hover:bg-primary-hover">
            Projekt anfragen
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-dark-light z-10" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-white flex flex-col items-center justify-center">
            <nav className="flex flex-col items-center space-y-8">
              <Link 
                to="/" 
                className="text-xl text-dark-light hover:text-primary font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
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
                to="/kontakt" 
                className="text-xl text-dark-light hover:text-primary font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kontakt
              </Link>
              <Link 
                to="/kontakt" 
                className="bg-primary text-white px-4 py-2 text-sm rounded-md font-medium transition-all hover:bg-primary-hover"
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
