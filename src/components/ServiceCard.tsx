
import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, link }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col h-full">
      <div className="text-primary mb-6">
        <Icon size={36} />
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-muted flex-grow mb-6">{description}</p>
      <Link to={link} className="text-primary hover:underline font-medium">
        Mehr erfahren
      </Link>
    </div>
  );
};

export default ServiceCard;
