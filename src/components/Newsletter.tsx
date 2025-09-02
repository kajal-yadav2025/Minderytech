import React, { useState } from 'react';
import { Mail, Send, Sparkles } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setEmail('');
  };

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-rose-100 to-orange-100"></div>
      
      <div className="floating-elements absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-8 h-8 bg-rose-300/20 rounded-full animate-float-slow"></div>
        <div className="absolute top-20 right-20 w-6 h-6 bg-purple-300/20 rounded-full animate-float-medium"></div>
        <div className="absolute bottom-20 left-1/4 w-10 h-10 bg-green-300/20 rounded-full animate-float-fast"></div>
        <div className="absolute bottom-10 right-1/3 w-12 h-12 bg-orange-300/20 rounded-full animate-float-slow"></div>
        <div className="absolute top-1/2 left-10 w-4 h-4 bg-yellow-300/20 rounded-full animate-float-medium"></div>
        <div className="absolute top-1/3 right-10 w-14 h-14 bg-indigo-300/20 rounded-full animate-float-fast"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="newsletter-content">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-rose-400 to-orange-300 rounded-2xl mb-8 newsletter-icon">
            <Mail className="text-white" size={32} />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 section-title" 
              style={{ fontFamily: 'Playfair Display, serif' }}>
            Stay Connected
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 section-subtitle">
            Receive weekly wellness tips, guided meditation updates, and exclusive content 
            delivered straight to your inbox.
          </p>

          {isSubmitted ? (
            <div className="success-message bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
              <Sparkles className="text-green-500 mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Welcome to Serenity!</h3>
              <p className="text-gray-600">Thank you for subscribing. Your first wellness tip is on its way.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="newsletter-form max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-6 py-4 rounded-full border-2 border-white/50 bg-white/80 backdrop-blur-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:border-rose-300 transition-all duration-300"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-rose-400 to-orange-300 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Subscribe
                </button>
              </div>
              
              <p className="text-gray-500 text-sm mt-4">
                Join 50,000+ wellness enthusiasts. Unsubscribe anytime.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;