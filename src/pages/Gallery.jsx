import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import GalleryLightbox from '../components/GalleryLightbox';
import { galleryImages, galleryCategories } from '../data/gallery';
import { Maximize2, Camera } from 'lucide-react';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category.toLowerCase() === selectedCategory.toLowerCase());

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-gym-dark text-white min-h-screen">
      {/* Header */}
      <div className="relative py-24 bg-gym-charcoal border-b border-neutral-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1920&auto=format&fit=crop"
            alt="FitZone Gallery"
            className="w-full h-full object-cover filter brightness-[0.22]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gym-charcoal via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-gym-red/20 text-gym-red border border-gym-red/30 mb-4">
            Visual Experience
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-white uppercase tracking-tight">
            CLUB <span className="text-gym-red">GALLERY</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Take a visual tour through our heavy lifting platforms, cardio theater, functional turf, and club amenities in Kukatpally.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-heading font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gym-red text-white shadow-red-glow'
                    : 'glass-panel text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => handleOpenLightbox(index)}
              className="group relative h-72 sm:h-80 rounded-3xl overflow-hidden glass-card cursor-pointer shadow-card-dark transition-all duration-500"
            >
              <img
                src={image.image}
                alt={image.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-black/80 backdrop-blur-md text-[10px] uppercase font-bold tracking-wider text-gym-red rounded-lg border border-gym-red/30">
                  {image.category}
                </span>
              </div>

              {/* Click to expand hint icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-neutral-900/80 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-105 border border-neutral-700">
                <Maximize2 className="w-4 h-4 text-gym-red" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-5 left-5 right-5 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg sm:text-xl font-heading font-black text-white group-hover:text-gym-red transition-colors tracking-wide">
                  {image.title}
                </h3>
                <p className="text-xs text-neutral-300 line-clamp-1 mt-0.5">
                  {image.description}
                </p>
                <span className="text-[10px] text-gym-red font-semibold uppercase tracking-wider mt-1.5 inline-block">
                  Click to view high-res →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Photography note */}
        <div className="mt-16 p-4 glass-card rounded-2xl text-center text-xs text-neutral-400 flex items-center justify-center gap-2 max-w-xl mx-auto">
          <Camera className="w-4 h-4 text-gym-red shrink-0" />
          <span>Representative sample club photography. Actual club floor photos will be showcased upon owner verification.</span>
        </div>
      </section>

      {/* Lightbox Component */}
      <GalleryLightbox
        images={filteredImages}
        currentIndex={lightboxIndex}
        onClose={handleCloseLightbox}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}
