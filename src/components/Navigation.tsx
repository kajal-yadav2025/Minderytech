import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'Services', href: '#services' },
    { label: 'Stories', href: '#testimonials' },
    { label: 'Blog', href: '#blog' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <div className="flex items-center">
            <h1 className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`} style={{ fontFamily: 'Playfair Display, serif' }}>
              Serenity
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`relative text-sm font-medium transition-colors duration-300 hover-underline ${
                  isScrolled ? 'text-gray-700 hover:text-rose-400' : 'text-white hover:text-rose-300'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button className="bg-gradient-to-r from-rose-400 to-orange-300 text-white px-6 py-2 rounded-full font-medium hover:scale-105 transition-transform duration-300">
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 transition-colors duration-300 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-gray-700 hover:text-rose-400 transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
            <button className="w-full bg-gradient-to-r from-rose-400 to-orange-300 text-white px-6 py-3 rounded-full font-medium">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;