"use client";

import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';

interface ImageCarouselProps {
  images: string[];
  projectTitle: string;
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

const ImageCarousel = ({ images, projectTitle, isOpen, onClose, initialIndex = 0 }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  if (!isOpen) return null;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in"
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        aria-label="Close"
      >
        <X size={24} className="text-white" />
      </button>

      {/* Previous button */}
      {images.length > 1 && (
        <button
          onClick={goToPrevious}
          className="absolute left-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft size={32} className="text-white" />
        </button>
      )}

      {/* Image container */}
      <div className="relative w-full h-full flex items-center justify-center px-16 py-20">
        <div className="relative max-w-7xl max-h-full">
          <Image
            src={images[currentIndex]}
            alt={`${projectTitle} - Screenshot ${currentIndex + 1}`}
            width={1920}
            height={1080}
            className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
            quality={90}
            priority
          />

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black/60 rounded-full text-white text-sm">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Project title */}
          <div className="absolute top-4 left-4 px-4 py-2 bg-black/60 rounded-lg text-white">
            <h3 className="text-lg font-semibold">{projectTitle}</h3>
          </div>
        </div>
      </div>

      {/* Next button */}
      {images.length > 1 && (
        <button
          onClick={goToNext}
          className="absolute right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Next image"
        >
          <ChevronRight size={32} className="text-white" />
        </button>
      )}

      {/* Thumbnail navigation */}
      {images.length > 1 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 max-w-full overflow-x-auto px-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative w-16 h-16 rounded-md overflow-hidden transition-all ${
                index === currentIndex
                  ? 'ring-2 ring-primary scale-110'
                  : 'opacity-50 hover:opacity-100'
              }`}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="64px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
