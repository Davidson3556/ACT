"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageSliderProps {
  images: string[];
  autoPlayInterval?: number;
}

export default function ImageSlider({ 
  images, 
  autoPlayInterval = 4000 
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Calculate the number of slides (pairs of images)
  const totalSlides = Math.ceil(images.length / 2);

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
      );
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [totalSlides, autoPlayInterval]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Get pairs of images for display
  const getImagePair = (slideIndex: number) => {
    const firstIndex = slideIndex * 2;
    return [
      images[firstIndex],
      images[firstIndex + 1] || null, // Handle odd number of images
    ];
  };

  return (
    <div className="relative w-full">
      {/* Main Image Container - Two images side by side, height 520px, gap 24px */}
      <div className="relative w-full h-[300px] md:h-[520px] overflow-hidden">
        {Array.from({ length: totalSlides }).map((_, slideIndex) => {
          const [image1, image2] = getImagePair(slideIndex);
          return (
            <div
              key={slideIndex}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                slideIndex === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <div className="flex gap-2 md:gap-6 h-full">
                {/* First Image */}
                <div className="relative flex-1 rounded overflow-hidden">
                  <Image
                    src={image1}
                    alt={`Outreach image ${slideIndex * 2 + 1}`}
                    fill
                    className="object-cover"
                    priority={slideIndex === 0}
                  />
                </div>
                {/* Second Image */}
                {image2 && (
                  <div className="relative flex-1 rounded overflow-hidden">
                    <Image
                      src={image2}
                      alt={`Outreach image ${slideIndex * 2 + 2}`}
                      fill
                      className="object-cover"
                      priority={slideIndex === 0}
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-[#212121]" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-[#212121]" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex 
                ? "bg-[#212121] w-6" 
                : "bg-[#D9D9D9] hover:bg-[#BDBDBD]"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
