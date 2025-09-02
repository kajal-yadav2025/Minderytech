import React, { useEffect, useRef } from 'react';
import { Users, Clock, Award, Globe } from 'lucide-react';

const Statistics: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const stats = [
    {
      icon: Users,
      number: 125000,
      label: 'Active Users',
      suffix: '+'
    },
    {
      icon: Clock,
      number: 2500000,
      label: 'Meditation Minutes',
      suffix: '+'
    },
    {
      icon: Award,
      number: 98,
      label: 'Success Rate',
      suffix: '%'
    },
    {
      icon: Globe,
      number: 150,
      label: 'Countries',
      suffix: '+'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('[data-count]');
            counters.forEach((counter) => {
              const target = parseInt(counter.getAttribute('data-count') || '0');
              animateCounter(counter as HTMLElement, target);
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounter = (element: HTMLElement, target: number) => {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = Math.floor(current).toLocaleString();
    }, 20);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-r from-green-100 via-rose-100 to-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 section-title" 
              style={{ fontFamily: 'Playfair Display, serif' }}>
            Making Wellness Accessible
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto section-subtitle">
            Join millions of people worldwide who have transformed their lives through mindful wellness practices.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-200 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-gray-700" size={24} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2" data-count={stat.number}>
                0{stat.suffix}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-8">
            "The journey of a thousand miles begins with a single step. Start your wellness journey today."
          </p>
          <button className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
            Join Our Community
          </button>
        </div>
      </div>
    </section>
  );
};

export default Statistics;