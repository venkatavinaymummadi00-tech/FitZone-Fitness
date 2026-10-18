import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonialsData } from '../data/testimonials';
import TestimonialCard from './TestimonialCard';

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  // Subtle auto-advance every 6 seconds if not paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, currentIndex]);

  return (
    <div 
      className="relative max-w-5xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Cards View - responsive 2 columns on desktop, 1 on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* Card 1 */}
        <TestimonialCard item={testimonialsData[currentIndex]} />
        {/* Card 2 */}
        <div className="hidden md:block">
          <TestimonialCard 
            item={testimonialsData[(currentIndex + 1) % testimonialsData.length]} 
          />
        </div>
      </div>

      {/* Slider Controls */}
      <div className="mt-8 flex items-center justify-between">
        {/* Indicators */}
        <div className="flex items-center space-x-2">
          {testimonialsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-8 bg-gym-red shadow-red-glow' : 'w-2.5 bg-neutral-800 hover:bg-neutral-700'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-3">
          <button
            onClick={prevSlide}
            className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white hover:bg-gym-red hover:border-gym-red transition shadow-sm cursor-pointer"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white hover:bg-gym-red hover:border-gym-red transition shadow-sm cursor-pointer"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
