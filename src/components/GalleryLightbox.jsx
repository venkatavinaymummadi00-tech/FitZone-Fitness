import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GalleryLightbox({ images, currentIndex, onClose, onPrev, onNext }) {
  if (currentIndex === null || !images || images.length === 0) return null;

  const currentImage = images[currentIndex];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Top Header Controls */}
      <div 
        className="absolute top-4 inset-x-4 sm:inset-x-8 flex items-center justify-between z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-white text-xs sm:text-sm font-medium bg-neutral-900/80 px-3.5 py-1.5 rounded-full border border-neutral-800">
          Photo {currentIndex + 1} of {images.length}
        </div>
        <button
          onClick={onClose}
          className="p-2 sm:p-2.5 rounded-full bg-neutral-900/80 hover:bg-gym-red text-white border border-neutral-800 hover:border-gym-red transition"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Previous Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-neutral-900/80 hover:bg-gym-red text-white border border-neutral-800 hover:border-gym-red transition z-10"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Next Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-neutral-900/80 hover:bg-gym-red text-white border border-neutral-800 hover:border-gym-red transition z-10"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Main Image Container */}
      <div 
        className="relative max-w-5xl max-h-[82vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentImage.image}
          alt={currentImage.title}
          className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-neutral-800"
        />

        {/* Caption */}
        <div className="mt-4 text-center max-w-xl">
          <div className="inline-block px-2.5 py-0.5 bg-gym-red/20 text-gym-red text-[11px] font-semibold uppercase tracking-wider rounded border border-gym-red/30 mb-1">
            {currentImage.category}
          </div>
          <h4 className="text-white text-base sm:text-lg font-heading font-bold">
            {currentImage.title}
          </h4>
          {currentImage.description && (
            <p className="text-neutral-400 text-xs sm:text-sm mt-0.5">
              {currentImage.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
