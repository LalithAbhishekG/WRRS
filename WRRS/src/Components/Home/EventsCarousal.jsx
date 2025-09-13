import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function EventsCarousel() {

  const images = [
    "https://placehold.co/1200x500?text=Event+1",
    "https://placehold.co/1200x500?text=Event+2",
    "https://placehold.co/1200x500?text=Event+3",
    "https://placehold.co/1200x500?text=Event+4",
  ];

  return (
    <section className="bg-[#F8F7FC] py-12">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-[#BC1EB0] mb-8">
        Explore Our Events
      </h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="max-w-6xl mx-auto"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={src}
              alt={`Event ${idx + 1}`}
              className="w-full h-64 md:h-[450px] object-cover rounded-lg shadow-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
