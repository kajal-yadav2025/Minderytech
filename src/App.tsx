import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import About from './components/About';
import Features from './components/Features';
import Statistics from './components/Statistics';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import VideoSection from './components/VideoSection';
import Blog from './components/Blog';
import Newsletter from './components/Newsletter';
import Partners from './components/Partners';
import Footer from './components/Footer';
import { initializeAnimations } from './utils/animations';

function App() {
  useEffect(() => {
    initializeAnimations();
  }, []);

  return (
    <div className="relative">
      <Navigation />
      <Hero />
      <About />
      <Features />
      <Statistics />
      <Services />
      <Testimonials />
      <VideoSection />
      <Blog />
      <Newsletter />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;