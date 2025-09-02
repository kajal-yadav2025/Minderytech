import React from 'react';
import { Heart, Leaf, Sun, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Mindful Living',
      description: 'Embrace each moment with intention and presence, cultivating awareness in your daily life.'
    },
    {
      icon: Leaf,
      title: 'Natural Harmony',
      description: 'Connect with nature and find balance through organic, sustainable wellness practices.'
    },
    {
      icon: Sun,
      title: 'Positive Energy',
      description: 'Radiate positivity and attract abundance through gratitude and mindful thinking.'
    },
    {
      icon: Sparkles,
      title: 'Inner Growth',
      description: 'Discover your authentic self and unlock your potential for continuous transformation.'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 section-title" 
              style={{ fontFamily: 'Playfair Display, serif' }}>
            About Serenity
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed section-subtitle">
            We believe wellness is a journey, not a destination. Our platform combines ancient wisdom 
            with modern technology to help you cultivate lasting peace and vitality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="motion-card bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-200 to-orange-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="text-gray-700" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 slide-in-left">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6" 
                style={{ fontFamily: 'Playfair Display, serif' }}>
              Your Wellness Journey Starts Here
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over 500 guided meditations, personalized wellness plans, and a supportive 
              community, Serenity provides everything you need to transform your well-being.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From stress reduction to improved sleep, increased focus to emotional balance, 
              our evidence-based approaches help you create sustainable positive changes.
            </p>
            <button className="bg-gradient-to-r from-green-400 to-green-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
              Learn More About Us
            </button>
          </div>
          
          <div className="order-1 lg:order-2 slide-in-right">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-rose-100 via-orange-100 to-green-100 rounded-3xl flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-rose-400 to-orange-300 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="text-white" size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Wellness Redefined
                  </h4>
                  <p className="text-gray-600">Modern tools for ancient wisdom</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;