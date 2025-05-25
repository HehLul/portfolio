// components/Carousel.jsx

import "./Carousel.css";

import { useState } from "react";

export default function Carousel({ media }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));

  if (!media || media.length === 0) return null;

  const current = media[currentIndex];

  return (
    <div className="carousel">
      {current.type === "image" ? (
        <img src={current.src} alt={`Slide ${currentIndex + 1}`} />
      ) : (
        <video src={current.src} controls />
      )}

      {media.length > 1 && (
        <>
          <button className="prev" onClick={prevSlide}>
            ‹
          </button>
          <button className="next" onClick={nextSlide}>
            ›
          </button>
        </>
      )}
    </div>
  );
}
