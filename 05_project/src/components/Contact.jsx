import React from "react";

export default function Contact() {
  return (
    <div className="relative flex items-top justify-center min-h-[700px] bg-gradient-to-br from-pink-50 via-yellow-50 to-white sm:items-center sm:pt-0">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden rounded-2xl shadow-xl border border-pink-100">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Info Panel */}
            <div className="p-6 bg-white sm:rounded-lg">
              <h1 className="text-4xl text-pink-600 font-extrabold">
                Let’s Get in Touch! 🐾
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                We'd love to hear from you — meow us a message anytime!
              </p>

              <div className="flex items-center mt-6 text-gray-700">
                <span className="text-2xl mr-3">📍</span>
                <div className="text-md font-medium">
                  221B Cat Street, Meowtown, CTC 1122
                </div>
              </div>

              <div className="flex items-center mt-4 text-gray-700">
                <span className="text-2xl mr-3">📞</span>
                <div className="text-md font-medium">+91 9876543210</div>
              </div>

              <div className="flex items-center mt-4 text-gray-700">
                <span className="text-2xl mr-3">✉️</span>
                <div className="text-md font-medium">
                  contact@catcafeexplorer.com
                </div>
              </div>
            </div>

            {/* Right Form Panel */}
            <form className="p-6 bg-yellow-50">
              <h2 className="text-2xl font-bold text-pink-500 mb-4">
                Send Us a Message 💌
              </h2>

              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg border border-gray-300 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-pink-400 hover:border-pink-300 hover:shadow-sm"
                />
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg border border-gray-300 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-pink-400 hover:border-pink-300 hover:shadow-sm"
                />
              </div>

              <div className="mb-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full p-3 rounded-lg border border-gray-300 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-pink-400 hover:border-pink-300 hover:shadow-sm"
                />
              </div>

              <div className="mb-4">
                <textarea
                  rows="4"
                  name="message"
                  placeholder="Write your message here..."
                  className="w-full p-3 rounded-lg border border-gray-300 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-pink-400 hover:border-pink-300 hover:shadow-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition duration-300"
              >
                Send Message ✨
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
