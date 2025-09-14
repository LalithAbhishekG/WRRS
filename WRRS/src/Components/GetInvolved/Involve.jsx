import React from "react";

export default function Involve() {
  return (
    <div className="w-full">
      {/* Donate Section */}
      <div className="min-h-screen flex items-center justify-center bg-pink-50/20 px-6 md:px-16 py-16">
        <section className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-7xl">
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca"
              alt="Donate"
              className="rounded-2xl shadow-2xl w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>

          {/* Content + Form */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-pink-700 mb-6 text-center">
              Make a Difference – Donate Now
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center">
              Your generosity fuels change. Every contribution helps us support
              impactful initiatives and transform lives. Together, we can bring
              hope where it’s needed most.
            </p>

            {/* Donate Form */}
            <form className="bg-white border border-gray-300 shadow-md rounded-2xl p-8 w-full max-w-md">
              <label className="block text-left mb-4">
                <span className="text-pink-700 font-semibold">Full Name</span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="mt-1 block w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-pink-700 focus:outline-none"
                />
              </label>

              <label className="block text-left mb-4">
                <span className="text-pink-700 font-semibold">Email</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mt-1 block w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-pink-700 focus:outline-none"
                />
              </label>

              <label className="block text-left mb-6">
                <span className="text-pink-700 font-semibold">Amount</span>
                <input
                  type="number"
                  placeholder="Enter amount"
                  className="mt-1 block w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-pink-700 focus:outline-none"
                />
              </label>

              <button
                type="submit"
                className="w-full bg-pink-700 hover:bg-pink-800 text-white font-semibold py-3 rounded-xl shadow-lg transition"
              >
                Donate Now
              </button>
            </form>
          </div>
        </section>
      </div>

      {/* Volunteer Section */}
      <div className="min-h-screen flex items-center justify-center bg-pink-50/20 px-6 md:px-16 py-16">
        <section className="flex flex-col md:flex-row-reverse items-center justify-center gap-12 w-full max-w-7xl">
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1509099836639-18ba1795216d"
              alt="Volunteer"
              className="rounded-2xl shadow-2xl w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>

          {/* Content + Form */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-pink-700 mb-6 text-center">
              Join Hands – Volunteer With Us
            </h2>
            <p className="text-lg text-gray-700 italic mb-4 text-center">
              “The best way to find yourself is to lose yourself in the service
              of others.” – Mahatma Gandhi
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center">
              Our volunteers are the heartbeat of our mission. By giving your
              time and energy, you inspire hope and create real change in the
              community.
            </p>

            {/* Volunteer Form */}
            <form className="bg-white border border-gray-300 shadow-md rounded-2xl p-8 w-full max-w-md">
              <label className="block text-left mb-4">
                <span className="text-pink-700 font-semibold">Full Name</span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="mt-1 block w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-pink-700 focus:outline-none"
                />
              </label>

              <label className="block text-left mb-4">
                <span className="text-pink-700 font-semibold">Email</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mt-1 block w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-pink-700 focus:outline-none"
                />
              </label>

              <label className="block text-left mb-6">
                <span className="text-pink-700 font-semibold">
                  Why do you want to volunteer?
                </span>
                <textarea
                  placeholder="Share your motivation..."
                  rows="4"
                  className="mt-1 block w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-pink-700 focus:outline-none"
                />
              </label>

              <button
                type="submit"
                className="w-full bg-pink-700 hover:bg-pink-800 text-white font-semibold py-3 rounded-xl shadow-lg transition"
              >
                Join the Movement
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
