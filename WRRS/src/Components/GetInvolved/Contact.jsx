import React from "react";
import { Phone, MapPin, Mail } from "lucide-react";

function Contact() {
  return (
    <section className="w-full py-20 bg-pink-50/20 flex flex-col items-center">
      <div className="w-full max-w-7xl px-6">
        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Call Us */}
          <div className="bg-white rounded-xl shadow-md p-8 text-center border border-gray-200">
            <Phone className="mx-auto text-pink-700" size={40} />
            <h3 className="mt-4 text-lg font-semibold text-pink-700">CALL US</h3>
            <p className="mt-2 text-gray-700">619-333-0026</p>
          </div>

          {/* Address */}
          <div className="bg-white rounded-xl shadow-md p-8 text-center border border-gray-200">
            <MapPin className="mx-auto text-pink-700" size={40} />
            <h3 className="mt-4 text-lg font-semibold text-pink-700">ADDRESS</h3>
            <p className="mt-2 text-gray-700">P.O. Box 501406</p>
            <p className="text-gray-700">San Diego, California</p>
            <p className="text-gray-700">92150-1406</p>
          </div>

          {/* Email */}
          <div className="bg-white rounded-xl shadow-md p-8 text-center border border-gray-200">
            <Mail className="mx-auto text-pink-700" size={40} />
            <h3 className="mt-4 text-lg font-semibold text-pink-700">EMAIL</h3>
            <p className="mt-2 text-gray-700">info@womenempowerment.org</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full max-w-3xl mx-auto p-10 bg-white rounded-2xl shadow-md border border-gray-200 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-pink-700">Contact Us</h2>
          <p className="mt-3 text-lg text-gray-700">
            We'd love to hear from you! Fill out the form below and let’s connect.
          </p>

          <form className="mt-8 space-y-6">
            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-5 py-3 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-700"
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-5 py-3 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-700"
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-5 py-3 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-700"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 px-6 bg-pink-700 hover:bg-pink-800 rounded-lg font-semibold text-white text-lg shadow-md transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
