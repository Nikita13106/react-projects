import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-pink-100 via-yellow-50 to-pink-200 min-h-screen text-gray-800">
      {/* 🐱 Carousel Section */}
      <div className="max-w-4xl mx-auto px-4">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={4000}
          className="rounded-xl overflow-hidden shadow-xl"
        >
          <div>
            <img
              src="https://cdn.mos.cms.futurecdn.net/yYVaUkExVF6XLjW3id64jS-1200-80.png"
              alt="Cat Cafe 1"
              className="object-cover w-full h-[200px] sm:h-[300px] md:h-[400px]"
            />
            <p className="legend">Sip & Purr at our Cat Café!</p>
          </div>
          <div>
            <img
              src="https://static.vecteezy.com/system/resources/previews/031/692/857/large_2x/cats-in-a-cafe-cats-gathering-in-a-cafe-with-foods-ai-generative-photo.jpg"
              alt="Cat Cafe 2"
              className="object-cover w-full h-[200px] sm:h-[300px] md:h-[400px]"
            />
            <p className="legend">Meet our cozy feline friends 🐾</p>
          </div>
          <div>
            <img
              src="https://i.ytimg.com/vi/7OwCmp-yv1Y/maxresdefault.jpg"
              alt="Cat Cafe 3"
              className="object-cover w-full h-[200px] sm:h-[300px] md:h-[400px]"
            />
            <p className="legend">Cappuccino with Cattitude ☕</p>
          </div>
        </Carousel>
      </div>

      {/* 🐾 Main Content */}
      <div className="max-w-4xl mx-auto text-center p-6 sm:p-8 md:p-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-600 mb-6">
          🐱 Welcome to Cat Café 
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-8 leading-relaxed">
          Experience the purr-fect blend of cozy cafés and cute cats. Whether
          you're here for cuddles, coffee, or curiosity — we’ve got something
          for every cat lover!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-10 px-4">
          <SectionCard
            title="🐾 Meet the Cats"
            desc="From fluffy Persians to playful Tabbies — discover the personalities of our café's resident cats!"
          />
          <SectionCard
            title="☕ Café Menu"
            desc="Savor a delicious cup of coffee, tea, or pastry while relaxing with our furry companions."
          />
          <SectionCard
            title="😻 Cat Facts & Tips"
            desc="Fun facts and handy care tips to make your feline friendships even stronger."
          />
          <SectionCard
            title="📸 Moments Gallery"
            desc="A cozy collection of café snapshots and adorable cat pictures shared by our visitors."
          />
        </div>
      </div>
    </div>
  );
}

function SectionCard({ title, desc }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-5 transition hover:scale-[1.03] hover:shadow-lg">
      <h2 className="text-lg sm:text-xl font-semibold text-pink-500">{title}</h2>
      <p className="text-gray-600 mt-2 text-sm sm:text-base">{desc}</p>
    </div>
  );
}

