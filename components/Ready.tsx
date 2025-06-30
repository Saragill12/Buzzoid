'use client';

import Image from 'next/image';

export default function HowItWorks() {
  const features = [
    {
      title: "Instant delivery guaranteed",
      description:
        "You will typically start seeing Likes, Followers, and Views within minutes of purchasing.",
      // bgColor: "bg-gradient-to-br from-pink-200 to-purple-200",
      image: "https://buzzoid.com/wp-content/themes/buzz/v3/bz_i_4.w400.q75-ng9Eqw2J.png", // ⬅️ Add your actual image path here
    },
    {
      title: "Our guarantee",
      description:
        "We want to leave a lasting impression on our clients. If you aren't satisfied with the quality or delivery of your order, tell us. We'll refund any order that isn't fulfilled.",
      // bgColor: "bg-gradient-to-br from-orange-200 to-yellow-200",
      image: "https://buzzoid.com/wp-content/themes/buzz/v3/bz_i_5.w400.q75-OhC-8LRb.png",
    },
    {
      title: "24/7 customer support",
      description:
        "Our dedicated support staff is always available. If you have any questions about our services or experience any problems with your order, please don't hesitate to contact us.",
      // bgColor: "bg-gradient-to-br from-teal-200 to-cyan-200",
      image: "https://buzzoid.com/wp-content/themes/buzz/v3/bz_i_6.w400.q75-BEIXGmgo.png",
    },
  ];

  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          How it works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className={`${feature.bgColor} rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center overflow-hidden`}
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
