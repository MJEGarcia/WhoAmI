import { useState } from "react";

function Carousel({ images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeImage = (newDirection) => {
    setCurrentIndex(
      (prev) => (prev + newDirection + images.length) % images.length
    );
  };

  const handleTouchStart = (e) => {
    e.target.startX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = e.target.startX - endX;

    if (diff > 50) changeImage(1);
    if (diff < -50) changeImage(-1);
  };

  return (
    <div className="relative flex items-center justify-center overflow-hidden w-full max-w-4xl mx-auto">
      <div
        className="w-full flex justify-center items-center"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}>
        {images[currentIndex]?.type === "video" ? (
          <video
            src={images[currentIndex].src}
            controls
            autoPlay
            muted
            loop
            className="rounded-lg object-contain max-h-[60vh] w-full"/>
        ) : (
          <img
            src={images[currentIndex]?.src || images[currentIndex]}
            alt={`${title} ${currentIndex + 1}`}
            className="rounded-lg object-contain max-h-[60vh] w-full"/>
        )}
      </div>

      <button
        onClick={() => changeImage(-1)}
        className="absolute left-2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black/70 transition">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
      </button>
      <button
        onClick={() => changeImage(1)}
        className="absolute right-2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black/70 transition">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </button>

      <div className="absolute bottom-2 flex gap-2">
        {images.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              idx === currentIndex ? "bg-[var(--accent)]" : "bg-gray-400"
            }`}></span>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
