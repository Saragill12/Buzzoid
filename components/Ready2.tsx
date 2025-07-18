'use client';

import Image from "next/image";

export default function ReadyToBuySection() {
  const features = [
    {
      number: "1.",
      title: "Increased Visibility",
      description:
        "The system’s algorithms give the greatest exposure to the most popular Instagram accounts. Since Buzzoid followers are all real people with real accounts on the app, they instantly make you more popular — creating more visibility for your Instagram pages and attracting a large number of followers who’ve never seen your content before.",
      image: "https://buzzoid.com/wp-content/themes/buzz/v3/increased_visibility-lVnFewnO.svg",
    },
    {
      number: "2.",
      title: "Build Trust",
      description:
        "A high follower count signals credibility to new visitors. When they see your photos or videos in their feeds, they’ll look for “social proof” that your account is popular and reputable. Having lots of followers proves that many other Instagram users already trust your account and like your content. Users who discover your photos and videos will feel confident that they can trust you, too.",
      image: "https://buzzoid.com/wp-content/themes/buzz/v3/build_trust-DXyWI8eW.svg",
    },
    {
      number: "3.",
      title: "Attract Organic Followers",
      description:
        "As your follower count grows, more people will see your Instagram posts and they’ll be inclined to follow you naturally. As long as you’re producing compelling, high-quality content, your new audience will want to see more of what you create — so they’ll hit the “follow” button and boost your organic popularity even more. Buying active followers is the fast and effective way to generate Instagram growth.",
      image: "https://buzzoid.com/wp-content/themes/buzz/v3/attract_foll-CX7QaIzt.svg",
    },
  ];

  return (
    <div className="py-14 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
         <div className="absolute -top-4 left-1/2 -translate-x-1/2">
        <svg width="42" height="35" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#hex-shadow)">
            <path
              d="M16 2L28 9V23L16 30L4 23V9L16 2Z"
              fill="white"
            />
            <path
              d="M16 7L24 12V20L16 25L8 20V12L16 7Z"
              fill="#E4E4E7"  // light gray inner fill
            />
            <path
              d="M16 2L28 9V23L16 30L4 23V9L16 2Z"
              stroke="#E7EAF0"
              strokeOpacity="0.62"
              strokeWidth="0.5"
            />
          </g>
          <defs>
            <filter id="hex-shadow" x="0" y="0" width="32" height="36" filterUnits="userSpaceOnUse">
              <feOffset dy="0" />
              <feGaussianBlur stdDeviation="0.5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.2 0 0 0 0 0.3 0 0 0 0 0.4 0 0 0 0.1 0"
              />
              <feBlend mode="normal" in2="BackgroundImageFix" result="dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="dropShadow" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Benefits of Buying <span className="bg-gradient-to-r from-[#FFAA04] to-[#FF5C00] bg-clip-text text-transparent"></span>
          </h2>
          <p className="text-gray-600 text-base max-w-3xl mx-auto leading-relaxed">
            Instagram has nearly 2.5 billion active users, making it an incredibly powerful place to be seen.
            But with so many Instagram accounts uploading content every day, it's become a challenge
            to be noticed. Buying Buzzoid's IG followers triggers powerful organic growth, helping you break out
            of the crowd and become popular on the Gram.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 p-4 text-center hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>

              <h3 className="text-base font-semibold text-gray-800 mb-2">
                {feature.number} {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-snug">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
