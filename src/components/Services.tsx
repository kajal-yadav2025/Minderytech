import React from 'react';
import { User, Building2, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 section-title" 
              style={{ fontFamily: 'Playfair Display, serif' }}>
            Wellness Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed section-subtitle">
            Whether you're seeking personal transformation or building a healthier workplace, 
            we have tailored solutions for every journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="flip-card group cursor-pointer h-96 perspective-1000">
            <div className="flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
              <div className="flip-card-front absolute inset-0 bg-gradient-to-br from-rose-100 to-orange-100 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-xl backface-hidden">
                <div className="w-20 h-20 bg-gradient-to-r from-rose-400 to-orange-300 rounded-2xl flex items-center justify-center mb-6">
                  <User className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  For Individuals
                </h3>
                <p className="text-gray-600 text-lg">
                  Personal wellness journey tailored to your unique needs and goals.
                </p>
              </div>
              
              <div className="flip-card-back absolute inset-0 bg-gradient-to-br from-rose-200 to-orange-200 rounded-3xl p-8 flex flex-col justify-center text-center shadow-xl backface-hidden rotate-y-180">
                <h4 className="text-2xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                  What's Included
                </h4>
                <ul className="text-gray-700 space-y-3 mb-6">
                  <li className="flex items-center justify-center gap-2">
                    <ArrowRight size={16} className="text-rose-500" />
                    Personalized meditation plans
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <ArrowRight size={16} className="text-rose-500" />
                    Progress tracking & insights
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <ArrowRight size={16} className="text-rose-500" />
                    Community support groups
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <ArrowRight size={16} className="text-rose-500" />
                    Expert-led workshops
                  </li>
                </ul>
                <button className="bg-white text-rose-500 px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>

          <div className="flip-card group cursor-pointer h-96 perspective-1000">
            <div className="flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
              <div className="flip-card-front absolute inset-0 bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-xl backface-hidden">
                <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl flex items-center justify-center mb-6">
                  <Building2 className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  For Business
                </h3>
                <p className="text-gray-600 text-lg">
                  Corporate wellness programs that boost productivity and employee well-being.
                </p>
              </div>
              
              <div className="flip-card-back absolute inset-0 bg-gradient-to-br from-green-200 to-emerald-200 rounded-3xl p-8 flex flex-col justify-center text-center shadow-xl backface-hidden rotate-y-180">
                <h4 className="text-2xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Enterprise Features
                </h4>
                <ul className="text-gray-700 space-y-3 mb-6">
                  <li className="flex items-center justify-center gap-2">
                    <ArrowRight size={16} className="text-green-500" />
                    Team wellness dashboards
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <ArrowRight size={16} className="text-green-500" />
                    Workplace stress management
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <ArrowRight size={16} className="text-green-500" />
                    Custom corporate programs
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <ArrowRight size={16} className="text-green-500" />
                    Analytics & reporting
                  </li>
                </ul>
                <button className="bg-white text-green-500 px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
                  Get Enterprise Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;