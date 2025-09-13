import { useState } from 'react';

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Mock testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Senthil Velan",
      text: "Fantastic job Guys children are so sweet and intelligent and had a great time with you guys",
      avatar: "https://placehold.co/80x80/9d178c/ffffff?text=SV",
    },
    {
      id: 2,
      name: "Anitha Rani",
      text: "The program is very well organized and the staff are extremely dedicated. My child has grown so much!",
      avatar: "https://placehold.co/80x80/9d178c/ffffff?text=AR",
    },
    {
      id: 3,
      name: "Rajesh Kumar",
      text: "I'm impressed with the quality of education and care provided. The children are happy and engaged every day.",
      avatar: "https://placehold.co/80x80/9d178c/ffffff?text=RK",
    },
    {
      id: 4,
      name: "Priya Devi",
      text: "Excellent work! The teaching methods are innovative and effective. My child loves coming to school.",
      avatar: "https://placehold.co/80x80/9d178c/ffffff?text=PD",
    },
    {
      id: 5,
      name: "Vijay Shankar",
      text: "Outstanding service and commitment to children's development. Highly recommended for any parent.",
      avatar: "https://placehold.co/80x80/9d178c/ffffff?text=VS",
    },
  ];

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-[#fefbff] h-auto py-16 px-4">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-800">Testimonials</h2>
      </div>

      {/* Testimonial Card */}
      <div className="flex flex-col items-center justify-center max-w-3xl mx-auto">
        {/* Avatar */}
        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-pink-200 mb-8">
          <img
            src={testimonials[currentIndex].avatar}
            alt={testimonials[currentIndex].name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Quote */}
        <div className="text-center text-gray-700 text-lg md:text-xl mb-6 leading-relaxed">
          "{testimonials[currentIndex].text}"
        </div>

        {/* Author */}
        <div className="text-center text-pink-700 font-medium">
          – {testimonials[currentIndex].name}
        </div>

        {/* Navigation Dots */}
        <div className="flex mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-pink-700' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;