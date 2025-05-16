
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, company, image }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
      <div className="flex items-center mb-6">
        {image && (
          <div className="w-12 h-12 mr-4 rounded-full overflow-hidden">
            <img src={image} alt={author} className="w-full h-full object-cover" />
          </div>
        )}
        <div>
          <h4 className="font-semibold">{author}</h4>
          <p className="text-sm text-muted">{company}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">{quote}</p>
    </div>
  );
};

export default TestimonialCard;
