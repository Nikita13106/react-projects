import React from "react";

export default function Card() {
  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
      <img
        className="w-full h-48 object-cover"
        src="https://curlytales.com/wp-content/uploads/2022/06/photo-1618661057370-7cf87dfad271.jpg"
        alt="travel-destination"
      />
      <div className="p-6">
        <span className="text-xs uppercase text-pink-600 dark:text-pink-400 font-bold">
          Hidden Gem
        </span>
        <h2 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white">
          Escape to Auli – India's Mini Switzerland 🏔️
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
          Auli is a serene Himalayan ski destination nestled in Uttarakhand. With snowy slopes, cable cars, and breathtaking views — it’s perfect for your next escape.
        </p>
        <div className="mt-4 flex items-center justify-between">
          <a
            href="#"
            className="text-pink-600 dark:text-pink-400 text-sm font-medium hover:underline"
          >
            Explore More →
          </a>
          <span className="text-xs text-gray-500 dark:text-gray-400">July 2025</span>
        </div>
      </div>
    </div>
  );
}