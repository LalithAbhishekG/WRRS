import { useState, useEffect } from "react";

export default function News() {
  const news = [
    {
      id: 1,
      title: "New Treasurer: Sharon Schwartz",
      description:
        "Sharon Schwartz is the founder of Live Oak Health and Wellness. As a National Board Certified...",
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      title: "2025 Grants Update: LOIs Received",
      description:
        "A letter from WE Executive Director, Sarah Adams, sharing the latest update on our new grants...",
      image:
        "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      title: "Woman of Empowerment Award 2025 Recipient: Rosette Garcia",
      description:
        "Rosette Garcia is a dedicated community leader, activist, and philanthropist with a longstanding...",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 4,
      title: "Annual Gala Announced for June 2025",
      description:
        "Join us for an inspiring evening of community, celebration, and fundraising at our annual gala...",
      image:
        "https://images.unsplash.com/photo-1531256456869-ce942a665e80?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 5,
      title: "New Partnership with Local Schools",
      description:
        "We are excited to announce a new initiative partnering with local schools to support education...",
      image:
        "https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 6,
      title: "Community Spotlight: Local Leaders",
      description:
        "Highlighting inspiring leaders from our community who are making a lasting impact...",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  // ✅ Detect screen size and set cards per slide
  useEffect(() => {
    const updateCards = () => {
      setCardsPerSlide(window.innerWidth < 768 ? 1 : 3);
    };

    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const totalSlides = Math.ceil(news.length / cardsPerSlide);

  const nextSlide = () => {
    setCurrent((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  // ✅ Prevent invalid index when resizing
  useEffect(() => {
    if (current >= totalSlides) {
      setCurrent(totalSlides - 1);
    }
  }, [cardsPerSlide, totalSlides, current]);

  // ✅ Auto-slide every 6s
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  return (
    <section className="bg-[#F8F7FC] py-16 h-auto">
      {/* Section Title */}
      <h1 className="text-3xl md:text-5xl font-bold text-center text-[#BC1EB0] mb-12">
        LATEST NEWS
      </h1>

      <div className="relative max-w-7xl mx-auto">
        {/* Carousel Wrapper */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className="w-full flex-shrink-0 flex px-2 md:px-4 space-x-4"
              >
                {news
                  .slice(
                    slideIndex * cardsPerSlide,
                    slideIndex * cardsPerSlide + cardsPerSlide
                  )
                  .map((item) => (
                    <div
                      key={item.id}
                      className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-md transition duration-300 overflow-hidden flex flex-col h-full flex-1 min-w-0"
                    >
                      {/* Image */}
                      <div className="h-48">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6 text-justify flex flex-col flex-grow">
                        <h2 className="text-lg font-bold text-gray-900 mb-2">
                          {item.title}
                        </h2>
                        <p className="text-gray-700 text-sm leading-relaxed flex-grow line-clamp-3">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation + Dots */}
        <div className="mt-6 flex justify-center items-center space-x-4">
          {/* Prev */}
          <button
            onClick={prevSlide}
            className="bg-[#BC1EB0] text-white w-12 h-12 rounded-full shadow-lg hover:bg-[#9c1892] flex items-center justify-center text-xl"
          >
            ❮
          </button>

          {/* Dots */}
          <div className="flex space-x-2">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full ${
                  idx === current ? "bg-[#BC1EB0]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={nextSlide}
            className="bg-[#BC1EB0] text-white w-12 h-12 rounded-full shadow-lg hover:bg-[#9c1892] flex items-center justify-center text-xl"
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
}
