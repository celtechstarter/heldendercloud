
import React from 'react';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Kontakt = () => {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Kontakt</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Haben Sie Fragen oder möchten Sie ein Projekt besprechen? Nehmen Sie Kontakt mit uns auf!
          </p>
        </div>
      </section>

      {/* Contact Details and Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-8">Kontaktinformationen</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-primary mt-1 mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">Adresse</h3>
                    <p className="text-gray-600">
                      Cloudhelden GmbH<br />
                      Musterstraße 123<br />
                      10115 Berlin<br />
                      Deutschland
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-primary mt-1 mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">E-Mail</h3>
                    <a href="mailto:kontakt@cloudhelden.org" className="text-primary hover:underline">
                      kontakt@cloudhelden.org
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-primary mt-1 mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">Telefon</h3>
                    <a href="tel:+491234567890" className="text-primary hover:underline">
                      +49 1234 567890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-primary mt-1 mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">Geschäftszeiten</h3>
                    <p className="text-gray-600">
                      Montag - Freitag: 9:00 - 18:00 Uhr
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="font-semibold mb-4">Folgen Sie uns</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-primary hover:text-primary-hover">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-primary hover:text-primary-hover">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.037 10.037 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.902 4.902 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-primary hover:text-primary-hover">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold mb-8">Schreiben Sie uns</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">So finden Sie uns</h2>
          <div className="h-96 w-full rounded-lg overflow-hidden shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.408747962644!2d13.385234776941995!3d52.51656613981251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c655908c81%3A0x9889ce2ff6e9c6c0!2sBerlin%2C%20Germany!5e0!3m2!1sen!2sus!4v1683121369319!5m2!1sen!2sus" 
              className="w-full h-full border-0" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Kontakt;
