import React from "react";

export default function About() {
  return (
    <div className="py-20 bg-gradient-to-br from-yellow-50 via-pink-50 to-white text-gray-800">
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* 📝 Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-pink-600 mb-2">
            Welcome to Our Cozy Cat Café! 🐾☕
          </h2>
          <p className="text-md italic text-gray-500 mb-4">
            “All you need is love… and a cat with a latte.” ☁️
          </p>

          <p className="text-lg leading-relaxed">
            At{" "}
            <span className="font-semibold text-orange-500">
              Cat Café Explorer
            </span>
            , we blend the love of cats with the joy of a warm cup of coffee.
            This is your safe little digital café where you can discover
            cat-friendly hangouts, explore different breeds, and fall in love
            with every furry face you meet. 😻
          </p>

          <p className="mt-4 text-base">
            Whether you're looking for peaceful meow-ments or just need a paws
            from life, our café-inspired platform is here to relax and delight
            you. Come explore the charm, the cuddles, and the cuteness! 💕
          </p>

          {/* ✨ Why People Love Us Box */}
          <div className="mt-8 bg-white p-5 rounded-xl shadow-lg border-l-4 border-pink-300">
            <h3 className="text-xl font-semibold text-pink-500 mb-2">
              Why People Love Us 💗
            </h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2 text-sm">
              <li>Cute and calming cat café atmosphere</li>
              <li>Perfect blend of coffee + cats 🐱☕</li>
              <li>Breed info, cat care, and cozy galleries</li>
              <li>Built with love and lots of cat puns 😸</li>
            </ul>
          </div>
        </div>

        {/* 📸 Image Section */}
        <div className="md:w-1/2">
          <img
            src="https://i.pinimg.com/originals/60/c3/9e/60c39e8dd446877c80527a540f143abf.jpg"
            alt="Cat lounging in cafe"
            className="rounded-2xl shadow-xl w-full"
          />
        </div>
      </div>
    </div>
  );
}
