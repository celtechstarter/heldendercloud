
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast({
      title: "Nachricht gesendet",
      description: "Vielen Dank! Wir werden uns in Kürze bei Ihnen melden.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-dark mb-1">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Ihr Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-dark mb-1">
            E-Mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Ihre E-Mail-Adresse"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-dark mb-1">
            Unternehmen
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Ihr Unternehmen"
            value={formData.company}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-dark mb-1">
            Betreff *
          </label>
          <select
            id="subject"
            name="subject"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white"
            value={formData.subject}
            onChange={handleChange}
          >
            <option value="" disabled>Bitte wählen Sie einen Betreff</option>
            <option value="Cloud Consulting">Cloud Consulting</option>
            <option value="DevOps">DevOps</option>
            <option value="KI-Lösungen">KI-Lösungen</option>
            <option value="Webentwicklung">Webentwicklung</option>
            <option value="Allgemeine Anfrage">Allgemeine Anfrage</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-dark mb-1">
          Nachricht *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Ihre Nachricht an uns"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="text-right">
        <button type="submit" className="btn-primary">
          Nachricht senden
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
