
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
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Solid Background */}
      <div className="absolute inset-0 z-0 bg-primary">
        {/* Pattern overlay (optional) */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.4)_0,_rgba(255,255,255,0)_70%)]"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto animate-fade-in">
          {subtitle}
        </p>
        <Link
          to={buttonLink}
          className="btn-primary bg-white text-primary hover:bg-white/90 text-lg animate-fade-in"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
};

export default Hero;
