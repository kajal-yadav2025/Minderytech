import React from 'react';
import { Heart, Instagram, Twitter, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  const footerLinks = {
    'Platform': ['Features', 'Pricing', 'Mobile App', 'Enterprise'],
    'Resources': ['Blog', 'Guides', 'Webinars', 'Community'],
    'Support': ['Help Center', 'Contact', 'Privacy', 'Terms']
  };

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Heart className="text-rose-400" size={32} />
              <h3 className="text-3xl font-bold text-gray-800" style={{ fontFamily: 'Playfair Display, serif' }}>
                Serenity
              </h3>
            </div>
            
            <p className="text-gray-600 leading-relaxed mb-6 max-w-md">
              Empowering individuals and organizations to cultivate wellness, mindfulness, 
              and inner peace through evidence-based practices and modern technology.
            </p>
            
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-rose-400 hover:to-orange-300 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold text-gray-800 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-600 hover:text-rose-400 transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>hello@serenity.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>San Francisco, CA</span>
              </div>
            </div>
            
            <p className="text-gray-500">
              © 2025 Serenity. All rights reserved. Made with ❤️ for wellness.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;