import { useState, useEffect } from "react";

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Senthil Velan",
      text: "Fantastic job Guys children are so sweet and intelligent and had a great time with you guys",
      avatar: "https://placehold.co/80x80/BC1EB0/ffffff?text=SV",
    },
    {
      id: 2,
      name: "Anitha Rani",
      text: "The program is very well organized and the staff are extremely dedicated. My child has grown so much!",
      avatar: "https://placehold.co/80x80/BC1EB0/ffffff?text=AR",
    },
    {
      id: 3,
      name: "Rajesh Kumar",
      text: "I'm impressed with the quality of education and care provided. The children are happy and engaged every day.",
      avatar: "https://placehold.co/80x80/BC1EB0/ffffff?text=RK",
    },
    {
      id: 4,
      name: "Priya Devi",
      text: "Excellent work! The teaching methods are innovative and effective. My child loves coming to school.",
      avatar: "https://placehold.co/80x80/BC1EB0/ffffff?text=PD",
    },
    {
      id: 5,
      name: "Vijay Shankar",
      text: "Outstanding service and commitment to children's development. Highly recommended for any parent.",
      avatar: "https://placehold.co/80x80/BC1EB0/ffffff?text=VS",
    },
  ];

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="bg-[#F8F7FC] py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#BC1EB0]">
          Testimonials
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center max-w-3xl mx-auto">
        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#E9C7E7] mb-8 shadow-md">
          <img
            src={testimonials[currentIndex].avatar}
            alt={testimonials[currentIndex].name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="text-center text-gray-800 text-lg md:text-xl mb-6 leading-relaxed">
          "{testimonials[currentIndex].text}"
        </div>

        <div className="text-center text-[#A21A9A] font-semibold">
          – {testimonials[currentIndex].name}
        </div>

        <div className="flex mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-[#BC1EB0]" : "bg-gray-300"
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
