import React from 'react';
import { Brain, Lightbulb, Flower2, TrendingUp } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Meditate',
      description: 'Guided meditations for all levels, from beginner to advanced practitioners.',
      color: 'from-purple-400 to-purple-500',
      bgColor: 'from-purple-100 to-purple-200'
    },
    {
      icon: Lightbulb,
      title: 'Inspire',
      description: 'Daily wisdom, motivational content, and transformative insights.',
      color: 'from-yellow-400 to-orange-400',
      bgColor: 'from-yellow-100 to-orange-100'
    },
    {
      icon: Flower2,
      title: 'Nurture',
      description: 'Self-care practices and healing techniques for body and soul.',
      color: 'from-pink-400 to-rose-400',
      bgColor: 'from-pink-100 to-rose-100'
    },
    {
      icon: TrendingUp,
      title: 'Develop',
      description: 'Personal growth tools and habit tracking for continuous improvement.',
      color: 'from-green-400 to-emerald-400',
      bgColor: 'from-green-100 to-emerald-100'
    }
  ];

  return (
    <section id="features" className="py-20 lg:py-32 bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 section-title" 
              style={{ fontFamily: 'Playfair Display, serif' }}>
            Four Pillars of Wellness
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed section-subtitle">
            Our comprehensive approach focuses on four essential areas of well-being, 
            creating a balanced foundation for your wellness journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card group cursor-pointer">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl h-full">
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center`}>
                    <feature.icon className="text-white" size={24} />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4" 
                    style={{ fontFamily: 'Playfair Display, serif' }}>
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                
                <button className={`mt-6 bg-gradient-to-r ${feature.color} text-white px-6 py-2 rounded-full font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105`}>
                  Explore {feature.title}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="bg-gradient-to-r from-rose-400 via-orange-400 to-green-400 text-white px-10 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Discover All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;