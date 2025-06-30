'use client';

import React, { useState } from "react";

const features = [
  {
    title: "Instant delivery guaranteed",
    description:
      "You don’t have to wait for your growth to start — your Insta followers arrive immediately! Buzzoid’s state-of-the-art system delivers powerful interactions as soon as you order!",
    img: "https://buzzoid.com/wp-content/themes/buzz/v3/instant-delivery-CfkUYZYD.svg",
  },
  {
    title: "High-quality, real followers",
    description:
      "Only real follows from verified IG users will trigger substantial, long-lasting growth. We vet every follower we deliver to ensure that they’re authentic, active Instagram users!",
    img: "https://buzzoid.com/wp-content/themes/buzz/v3/high-quality-followers-BlJBbaCX.svg",
  },
  {
    title: "24/7 customer support team",
    description:
      "We pride ourselves on providing caring, knowledgeable customer support whenever you need it. Our experienced reps can quickly resolve issues and answer questions.",
    img: "https://buzzoid.com/wp-content/themes/buzz/v3/customer-support-BHSltX_E.svg",
  },
  {
    title: "No password required",
    description:
      "Your safety and security are a top priority at Buzzoid. We’ll never ask for your IG password. Transactions are encrypted and our platform is secure. Your personal info always stays safe!",
    img: "https://buzzoid.com/wp-content/themes/buzz/v3/no-password-DTSMZC1w.svg",
  },
  {
    title: "Trusted since 2012",
    description:
      "Buzzoid has been the Instagram service of choice for millions of users for 12+ years. Our customers know our follower service keeps accounts safe and delivers impressive growth!",
    img: "https://buzzoid.com/wp-content/themes/buzz/v3/trusted-D-DIAL7r.svg",
  },
];

export default function FeaturesSection() {
  const [moveLeft, setMoveLeft] = useState(false);

  return (
    <section className="px-4 py-12 max-w-7xl mx-auto">
      {/* Heading */}
    <h1 className="text-center text-2xl sm:text-3xl font-bold mb-10">
  <span className="text-black font-medium">Why Choose </span>
  <span className="bg-gradient-to-r from-orange-300 to-orange-600 text-transparent bg-clip-text">Buzzoid?</span>
</h1>


      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-6 text-center flex flex-col items-center"
          >
            <div className="mb-4">
              <img src={feature.img} alt={feature.title} className="w-12 h-12 object-contain" />
            </div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}

        {/* Promotional Card */}
        <div
          onClick={() => setMoveLeft(true)}
          className="bg-gradient-to-br from-blue-400 to-cyan-400 text-black rounded-xl p-6 flex flex-col justify-between relative overflow-hidden cursor-pointer"
        >
          <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full absolute top-3 right-3">
            NEW SERVICE
          </span>
          <div className="text-xl font-semibold mb-4 z-10 relative">
            Want organic, Targeted followers?
          </div>
          <button className="bg-yellow-300 hover:bg-yellow-400 text-black font-medium py-2 px-4 rounded w-fit z-10 relative">
            Try AI Growth for Free →
          </button>

          <img
            src="https://buzzoid.com/wp-content/themes/buzz/v3/try-ai-bg-vxhAniif.svg"
            alt="AI Growth"
            className={`absolute bottom-0 right-0 w-24 md:w-32 transition-transform duration-700 ${
              moveLeft ? '-translate-x-10' : ''
            }`}
          />
        </div>
      </div>
    </section>
  );
}
