
import React from 'react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
}) => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Pattern (subtle) */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#smallGrid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center px-4 max-w-5xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 animate-fade-in leading-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto animate-fade-in leading-relaxed">
          {subtitle}
        </p>
        <Link
          to={buttonLink}
          className="inline-flex items-center justify-center px-8 py-4 text-base md:text-lg font-medium bg-white text-primary rounded-md shadow-lg transition-all hover:bg-opacity-90 animate-fade-in"
        >
          {buttonText}
        </Link>
      </div>

      {/* Bottom Wave Shape */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 100" 
          fill="#ffffff" 
          preserveAspectRatio="none"
        >
          <path d="M0,0 C150,90 350,60 500,75 C650,90 800,20 1000,30 C1200,40 1350,70 1440,80 L1440,100 L0,100 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
