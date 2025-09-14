import { useState, useEffect } from 'react';

const DailyBlogsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [forceUpdate, setForceUpdate] = useState(false);

  const blogs = [
    { id: 1, title: "Empowering Young Minds with", subtitle: "Paavai Foundation", date: "2025-08-14", image: "https://placehold.co/320x200/9d178c/ffffff?text=Event+1" },
    { id: 2, title: "Caring for Mothers, Nurturing", subtitle: "Paavai Foundation", date: "2025-08-14", image: "https://placehold.co/320x200/9d178c/ffffff?text=Event+2" },
    { id: 3, title: "Special & Normal Children", subtitle: "Paavai Foundation", date: "2025-08-22", image: "https://placehold.co/320x200/9d178c/ffffff?text=Event+3" },
    { id: 4, title: "Education for All: Rural Outreach", subtitle: "Paavai Foundation", date: "2025-08-15", image: "https://placehold.co/320x200/9d178c/ffffff?text=Event+4" },
    { id: 5, title: "Building Homes for the Needy", subtitle: "Paavai Foundation", date: "2025-08-16", image: "https://placehold.co/320x200/9d178c/ffffff?text=Event+5" },
    { id: 6, title: "Health Camps Across Villages", subtitle: "Paavai Foundation", date: "2025-08-17", image: "https://placehold.co/320x200/9d178c/ffffff?text=Event+6" },
    { id: 7, title: "Women Empowerment Workshop", subtitle: "Paavai Foundation", date: "2025-08-18", image: "https://placehold.co/320x200/9d178c/ffffff?text=Event+7" },
    { id: 8, title: "Clean Water Initiative", subtitle: "Paavai Foundation", date: "2025-08-19", image: "https://placehold.co/320x200/9d178c/ffffff?text=Event+8" },
    { id: 9, title: "Tree Plantation Drive", subtitle: "Paavai Foundation", date: "2025-08-20", image: "https://placehold.co/320x200/9d178c/ffffff?text=Event+9" },
  ];

  useEffect(() => {
    const handleResize = () => setForceUpdate(prev => !prev);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const itemsPerSlide = window.innerWidth >= 768 ? 3 : 1;
  const totalSlides = Math.ceil(blogs.length / itemsPerSlide);
  const currentItems = blogs.slice(currentIndex * itemsPerSlide, (currentIndex + 1) * itemsPerSlide);

  const goToSlide = (index) => setCurrentIndex(index);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="bg-[#fffcfe] h-auto py-16 px-4">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-800">Daily Blogs</h2>
      </div>

      {/* Blogs */}
      <div className="flex flex-col items-center">
        <div className={`flex ${itemsPerSlide === 1 ? 'flex-col items-center' : 'flex-row flex-wrap justify-center gap-6'} max-w-6xl w-full`}>
          {currentItems.map((blog) => (
            <div
              key={blog.id}
              className={`flex-shrink-0 w-full ${
                itemsPerSlide === 3 ? 'md:w-1/3' : 'w-full'
              } max-w-[320px] bg-white rounded-lg shadow-md overflow-hidden mb-6 flex flex-col`}
              style={{ minHeight: '400px' }}
            >
              {/* Image */}
              <div
                className="w-full h-48 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${blog.image})` }}
              ></div>

              {/* Content */}
              <div className="p-4 flex-grow flex flex-col justify-center items-center text-center">
                <h3 className="font-semibold text-gray-800 text-sm md:text-base">{blog.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{blog.subtitle}</p>
                <p className="text-xs text-gray-500 mt-2">{blog.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots + Buttons */}
        <div className="flex items-center space-x-4 mt-8">
          <button
            onClick={prevSlide}
            className="bg-pink-700 text-white w-10 h-10 rounded-full shadow hover:bg-pink-800 flex items-center justify-center text-lg"
          >
            ❮
          </button>

          <div className="flex space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-pink-700' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="bg-pink-700 text-white w-10 h-10 rounded-full shadow hover:bg-pink-800 flex items-center justify-center text-lg"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default DailyBlogsCarousel;
  