import { useState } from "react";

export default function EventsCarousel() {
  const images = [
    "https://placehold.co/1200x500?text=Event+1",
    "https://placehold.co/1200x500?text=Event+2",
    "https://placehold.co/1200x500?text=Event+3",
    "https://placehold.co/1200x500?text=Event+4",
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section className="bg-[#F8F7FC] py-12">
      <h2 className="text-center text-2xl md:text-5xl font-bold text-[#BC1EB0] mb-8">
        Explore Our Events
      </h2>

      <div className="relative max-w-7xl mx-auto overflow-hidden rounded-lg shadow-lg">
        {/* Slides */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Event ${idx + 1}`}
              className="w-full flex-shrink-0 h-64 md:h-[450px] object-cover"
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-[#BC1EB0] text-white p-2 rounded-full shadow hover:bg-[#9c1892]"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#BC1EB0] text-white p-2 rounded-full shadow hover:bg-[#9c1892]"
        >
          ❯
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-4 w-full flex justify-center space-x-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full ${
                idx === current ? "bg-[#BC1EB0]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
