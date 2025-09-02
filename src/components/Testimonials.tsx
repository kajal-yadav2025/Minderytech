import React, { useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Yoga Instructor',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'Serenity has transformed how I approach my daily wellness practice. The guided meditations are beautifully crafted and the community support is incredible.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Corporate Executive',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'As a busy executive, finding time for wellness was challenging. This platform made it possible to integrate mindfulness into my hectic schedule.',
      rating: 5
    },
    {
      name: 'Emma Rodriguez',
      role: 'Freelance Designer',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'The personalized approach and beautiful design make wellness feel accessible and enjoyable. I look forward to my daily sessions.',
      rating: 5
    },
    {
      name: 'David Thompson',
      role: 'Student',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'Studying can be stressful, but the stress-relief techniques and sleep meditations have been game-changers for my mental health.',
      rating: 5
    }
  ];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const cards = sliderRef.current.children;
        if (cards.length > 0) {
          currentIndex = (currentIndex + 1) % cards.length;
          const scrollPosition = currentIndex * (cards[0] as HTMLElement).offsetWidth;
          sliderRef.current.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
          });
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-gradient-to-b from-green-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 section-title" 
              style={{ fontFamily: 'Playfair Display, serif' }}>
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed section-subtitle">
            Real people, real transformations. Discover how Serenity has helped thousands 
            find peace, balance, and joy in their daily lives.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div 
            ref={sliderRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card flex-shrink-0 w-full md:w-96 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                
                <div className="relative">
                  <Quote className="absolute top-0 left-0 text-rose-200" size={24} />
                  <p className="text-gray-700 leading-relaxed pl-8">
                    {testimonial.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-400 to-rose-400 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
            Read More Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;