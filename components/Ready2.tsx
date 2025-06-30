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
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Benefits of Buying <span className="text-cyan-500">Instagram Followers</span>?
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
