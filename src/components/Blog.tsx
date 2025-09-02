import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: '10 Morning Rituals for Inner Peace',
      excerpt: 'Start your day with intention and create a foundation for mindful living through these simple yet powerful practices.',
      image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '5 min read',
      category: 'Mindfulness'
    },
    {
      title: 'The Science of Meditation',
      excerpt: 'Explore the latest research on how meditation affects the brain and discover the measurable benefits of regular practice.',
      image: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '8 min read',
      category: 'Research'
    },
    {
      title: 'Breathing Techniques for Stress Relief',
      excerpt: 'Master simple breathing exercises that can instantly calm your nervous system and reduce anxiety.',
      image: 'https://images.pexels.com/photos/3759816/pexels-photo-3759816.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '4 min read',
      category: 'Techniques'
    },
    {
      title: 'Creating Sacred Spaces at Home',
      excerpt: 'Transform any corner of your home into a peaceful sanctuary for meditation and self-reflection.',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '6 min read',
      category: 'Lifestyle'
    },
    {
      title: 'Mindful Eating for Better Health',
      excerpt: 'Discover how mindful eating practices can improve digestion, enhance satisfaction, and deepen your relationship with food.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '7 min read',
      category: 'Nutrition'
    },
    {
      title: 'Digital Detox and Mental Clarity',
      excerpt: 'Learn effective strategies to reduce screen time and create healthy boundaries with technology for improved focus.',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '5 min read',
      category: 'Balance'
    }
  ];

  return (
    <section id="blog" className="py-20 lg:py-32 bg-gradient-to-b from-rose-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 section-title" 
              style={{ fontFamily: 'Playfair Display, serif' }}>
            Wellness Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed section-subtitle">
            Explore our collection of articles, guides, and insights to deepen your understanding 
            of wellness and mindful living.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="blog-card group cursor-pointer bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Clock size={16} className="mr-2" />
                  {post.readTime}
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-rose-500 transition-colors duration-300" 
                    style={{ fontFamily: 'Playfair Display, serif' }}>
                  {post.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                
                <button className="flex items-center gap-2 text-rose-500 font-medium group-hover:gap-3 transition-all duration-300">
                  Read More
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-rose-400 to-orange-400 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;