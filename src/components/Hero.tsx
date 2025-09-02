import React from 'react';
import { Play, Download, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-orange-50 to-green-100 animate-gradient-shift"></div>
      
      <div className="floating-elements absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-rose-200/30 rounded-full animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-green-200/30 rounded-full animate-float-medium"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-orange-200/30 rounded-full animate-float-fast"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-200/30 rounded-full animate-float-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="hero-content opacity-0">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-800 mb-6 leading-tight" 
              style={{ fontFamily: 'Playfair Display, serif' }}>
            <span className="block text-reveal">Find Your</span>
            <span className="block">
              Inner Peace
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed fade-up">
            Transform your daily routine with mindful wellness practices designed to nurture your mind, body, and spirit.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 fade-up-delay">
            <button className="group bg-gradient-to-r from-rose-400 to-orange-300 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <span className="flex items-center gap-2">
                <Play size={20} className="group-hover:scale-110 transition-transform duration-300" />
                Start Your Journey
              </span>
            </button>
            
            <button className="group bg-white/80 backdrop-blur-sm text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl">
              <span className="flex items-center gap-2">
                <Download size={20} className="group-hover:scale-110 transition-transform duration-300" />
                Download App
              </span>
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center fade-up-delay-2">
            <div className="stat-item">
              <div className="text-3xl font-bold text-gray-800 mb-2" data-count="10000">0</div>
              <div className="text-gray-600">Happy Users</div>
            </div>
            <div className="stat-item">
              <div className="text-3xl font-bold text-gray-800 mb-2" data-count="50000">0</div>
              <div className="text-gray-600">Sessions</div>
            </div>
            <div className="stat-item">
              <div className="flex items-center justify-center gap-1 mb-2">
                <span className="text-3xl font-bold text-gray-800">4.9</span>
                <Star className="text-yellow-400 fill-current" size={20} />
              </div>
              <div className="text-gray-600">Rating</div>
            </div>
            <div className="stat-item">
              <div className="text-3xl font-bold text-gray-800 mb-2" data-count="99">0</div>
              <div className="text-gray-600">Countries</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 phone-mockup opacity-0">
         
        </div>
      </div>
    </section>
  );
};

export default Hero;