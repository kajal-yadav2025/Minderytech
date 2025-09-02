import React, { useEffect, useRef } from 'react';

const Partners: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const partners = [
    'Wellness Co.',
    'Mindful Inc.',
    'Nature Health',
    'Zen Studios',
    'Balance Labs',
    'Calm Solutions',
    'Peaceful Mind',
    'Harmony Group'
  ];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollAmount = 0;
    const scrollSpeed = 1;

    const scroll = () => {
      scrollAmount += scrollSpeed;
      if (scrollAmount >= slider.scrollWidth / 2) {
        scrollAmount = 0;
      }
      slider.scrollLeft = scrollAmount;
    };

    const interval = setInterval(scroll, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" 
              style={{ fontFamily: 'Playfair Display, serif' }}>
            Trusted by Leading Organizations
          </h2>
          <p className="text-gray-600">
            Partnering with companies who prioritize employee well-being
          </p>
        </div>

        <div 
          ref={sliderRef}
          className="flex gap-12 overflow-hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {[...partners, ...partners].map((partner, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 flex items-center justify-center h-16 px-8 bg-gray-100/50 rounded-2xl hover:bg-gray-100 transition-all duration-300"
            >
              <span className="text-gray-600 font-semibold text-lg whitespace-nowrap">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;