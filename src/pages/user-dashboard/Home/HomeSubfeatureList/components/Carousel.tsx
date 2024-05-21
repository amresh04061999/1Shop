import { useState, useEffect } from 'react';

const slides = [
  { id: 1, image: 'https://via.placeholder.com/800x400', alt: 'Slide 1' },
  { id: 2, image: 'https://via.placeholder.com/800x400/ff7f7f', alt: 'Slide 2' },
  { id: 3, image: 'https://via.placeholder.com/800x400/7f7fff', alt: 'Slide 3' },
];
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative w-full h-100">
      <div className="overflow-hidden relative">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
          {slides.map((slide) => (
            <div key={slide.id} className="carousel-item w-full flex-none">
              <img src={slide.image} alt={slide.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 text-[25px] ms-3 bg-gray-700 text-white rounded-full hover:bg-gray-800"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3  me-3 text-[25px] bg-gray-700 text-white rounded-full hover:bg-gray-800"
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
