import React, { useState } from 'react';
import { Play, Volume2 } from 'lucide-react';

const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-purple-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 section-title" 
              style={{ fontFamily: 'Playfair Display, serif' }}>
            Experience Serenity
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed section-subtitle">
            Take a moment to see how our platform can transform your wellness journey. 
            Watch our founders share the vision behind Serenity.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="video-container relative bg-gradient-to-br from-rose-200 via-orange-200 to-green-200 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-all duration-500">
            {!isPlaying ? (
              <div className="relative aspect-video flex items-center justify-center cursor-pointer group" onClick={handlePlayClick}>
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40"></div>
                
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Play className="text-gray-700 ml-1" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Watch Our Story
                  </h3>
                  <p className="text-white/90">3 minutes of inspiration</p>
                </div>

                <div className="absolute top-4 right-4 flex items-center gap-2 text-white/80">
                  <Volume2 size={20} />
                  <span className="text-sm">Sound on</span>
                </div>
              </div>
            ) : (
              <div className="aspect-video bg-gray-900 rounded-3xl flex items-center justify-center">
                <p className="text-white text-lg">Video would play here</p>
              </div>
            )}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="fade-up">
              <div className="text-3xl font-bold text-gray-800 mb-2">5M+</div>
              <div className="text-gray-600">Minutes Meditated</div>
            </div>
            <div className="fade-up">
              <div className="text-3xl font-bold text-gray-800 mb-2">50K+</div>
              <div className="text-gray-600">Lives Transformed</div>
            </div>
            <div className="fade-up">
              <div className="text-3xl font-bold text-gray-800 mb-2">4.9★</div>
              <div className="text-gray-600">App Store Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;