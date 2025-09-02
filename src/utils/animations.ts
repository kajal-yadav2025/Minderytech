import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initializeAnimations = () => {
  // Hero animations
  gsap.set('.hero-content', { opacity: 1 });
  
  gsap.fromTo('.text-reveal', 
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', stagger: 0.2 }
  );

  gsap.fromTo('.fade-up', 
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, delay: 0.8, ease: 'power2.out' }
  );

  gsap.fromTo('.fade-up-delay', 
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, delay: 1.2, ease: 'power2.out' }
  );

  gsap.fromTo('.fade-up-delay-2', 
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, delay: 1.6, ease: 'power2.out' }
  );

  gsap.fromTo('.phone-mockup', 
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, delay: 2, ease: 'power2.out' }
  );

  // Section animations
  gsap.fromTo('.section-title', 
    { y: 50, opacity: 0 },
    { 
      y: 0, 
      opacity: 1, 
      duration: 0.8, 
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.section-title',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  gsap.fromTo('.section-subtitle', 
    { y: 30, opacity: 0 },
    { 
      y: 0, 
      opacity: 1, 
      duration: 0.8, 
      delay: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.section-subtitle',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  // Motion cards
  gsap.fromTo('.motion-card', 
    { y: 100, opacity: 0 },
    { 
      y: 0, 
      opacity: 1, 
      duration: 0.8, 
      ease: 'power2.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.motion-card',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  // Feature cards
  gsap.fromTo('.feature-card', 
    { y: 80, opacity: 0 },
    { 
      y: 0, 
      opacity: 1, 
      duration: 0.8, 
      ease: 'power2.out',
      stagger: 0.15,
      scrollTrigger: {
        trigger: '.feature-card',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  // Statistics cards
  gsap.fromTo('.stat-card', 
    { scale: 0.8, opacity: 0 },
    { 
      scale: 1, 
      opacity: 1, 
      duration: 0.6, 
      ease: 'back.out(1.7)',
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.stat-card',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  // Blog cards
  gsap.fromTo('.blog-card', 
    { y: 60, opacity: 0 },
    { 
      y: 0, 
      opacity: 1, 
      duration: 0.8, 
      ease: 'power2.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.blog-card',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  // Newsletter section
  gsap.fromTo('.newsletter-content', 
    { y: 50, opacity: 0 },
    { 
      y: 0, 
      opacity: 1, 
      duration: 0.8, 
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.newsletter-content',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  gsap.fromTo('.newsletter-icon', 
    { scale: 0, rotation: 360 },
    { 
      scale: 1, 
      rotation: 0, 
      duration: 0.8, 
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: '.newsletter-icon',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  gsap.fromTo('.newsletter-form', 
    { y: 30, opacity: 0 },
    { 
      y: 0, 
      opacity: 1, 
      duration: 0.8, 
      delay: 0.3,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.newsletter-form',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  // Slide in animations
  gsap.fromTo('.slide-in-left', 
    { x: -100, opacity: 0 },
    { 
      x: 0, 
      opacity: 1, 
      duration: 1, 
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.slide-in-left',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  gsap.fromTo('.slide-in-right', 
    { x: 100, opacity: 0 },
    { 
      x: 0, 
      opacity: 1, 
      duration: 1, 
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.slide-in-right',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  // Testimonial cards
  gsap.fromTo('.testimonial-card', 
    { y: 60, opacity: 0 },
    { 
      y: 0, 
      opacity: 1, 
      duration: 0.8, 
      ease: 'power2.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.testimonial-card',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  // Video container animation
  gsap.fromTo('.video-container', 
    { scale: 0.9, opacity: 0 },
    { 
      scale: 1, 
      opacity: 1, 
      duration: 1, 
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.video-container',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    }
  );
};