import Header from "../Components/Shared/Header";
import Homehero from "../Components/Home/Herohome";
import EventsCarousel from "../Components/Home/EventsCarousal";
import { Heart, Gift, Megaphone } from "lucide-react";
import DailyBlogsCarousel from "../Components/Home/DailyBlogCarousal"; 
import TestimonialsCarousel from "../Components/Home/TestimonialCarousal";
import Footer from "../Components/Shared/Footer";

export default function Home() {
  // Define blog data here (or move to a data file later)


  return (
    <div>
      <Header />
      <Homehero />
      <EventsCarousel />

      {/* Who We Are */}
      <section className="bg-[#fdf8ff] py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center flex-col">
            <h2 className="text-center md:text-left text-2xl md:text-3xl font-bold text-[#BC1EB0] mb-4">
              Who We Are
            </h2>
            <p className="font-semibold mb-4 text-gray-800">
              The "Paavai Foundation": Empowering Lives Since 2021
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-justify">
              In 2021, Paavai was a small space for some young personals to meet,
              greet, and spread the happiest moments with their communities. The
              team developed into a responsible outreach team that started to
              consider the needs of communities and act accordingly.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-justify">
              After two years of journeying with pure human communities,
              addressing their needs through many outreach programs and
              partnerships, the team took Paavai to the next level of being a
              foundation, which can lead Paavai to be more professional with the
              participation of many supporters.
            </p>
            <button className="mt-4 bg-gradient-to-r from-[#BC1EB0] to-pink-500 text-white px-6 py-2 rounded shadow hover:opacity-90 transition items-center flex justify-center">
              Know more
            </button>
          </div>

          <div className="flex justify-center md:justify-end relative">
            <img
              src="https://placehold.co/300x200?text=Image+1"
              alt="Paavai Team"
              className="w-96 md:w-[400px] h-76 md:h-[300px] object-cover rounded-lg border-2 border-pink-900 shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-[#FFF5F7] py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <img
              src="https://placehold.co/500x400?text=Mission+Image"
              alt="Mission Illustration"
              className="w-full max-w-sm md:max-w-md rounded-lg object-contain border-2 border-pink-900 shadow-lg"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-[#BC1EB0] mb-6">
              Our Mission is to Provide
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The primary mission of PAAVAI Foundation is to foster women's
              empowerment by providing them with the necessary tools,
              opportunities, and support to lead fulfilling lives, both personally
              and professionally. The foundation seeks to address gender
              disparities, promote gender equality, and create a society where
              women can thrive.
            </p>
            <button className="bg-gradient-to-r from-[#BC1EB0] to-pink-500 text-white px-6 py-3 rounded shadow hover:opacity-90 transition">
              Support a Child
            </button>
          </div>
        </div>
      </section>

      {/* Ways to Volunteer */}
      <section className="py-16 bg-[#f9f5f8]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#BC1EB0] mb-12">
            Ways to Volunteer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-24 h-24 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                <Heart size={48} color="#BC1EB0" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Hands-On</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Support our day to day operations, work at in-person events, and care for staff on the field.
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-24 h-24 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                <Gift size={48} color="#BC1EB0" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Give</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                As a regular donor or sponsor, you can further the fight against female gendercide by funding our vital work.
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-24 h-24 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                <Megaphone size={48} color="#BC1EB0" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Speak Out</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Use your influence to speak out on social media and to your representatives in congress.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <button className="bg-gradient-to-r from-[#BC1EB0] to-pink-500 text-white px-8 py-3 rounded-full shadow hover:opacity-90 transition font-medium">
              Be a Volunteer
            </button>
          </div>
        </div>
      </section>


      <DailyBlogsCarousel /> 
      <TestimonialsCarousel />
      <Footer />
    </div>
  );
}