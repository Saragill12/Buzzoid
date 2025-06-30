'use client';

import Image from "next/image";

export default function ReadyToBuySection() {
  const features = [
    {
      number: "1.",
      title: "Instant Delivery Guaranteed",
      description:
        "Don't wait to get your likes. Orders typically process within minutes of purchase.",
      image: "https://buzzoid.com/wp-content/themes/buzz/v3/instant-delivery-CfkUYZYD.svg",
      // iconBg: "bg-purple-100",
    },
    {
      number: "2.",
      title: "100% Real Likes",
      description:
        "Get high quality, instant likes from real users with real accounts (no fake accounts).",
      image: "https://buzzoid.com/wp-content/themes/buzz/v3/high-quality-followers-BlJBbaCX.svg",
      // iconBg: "bg-blue-100",
    },
    {
      number: "3.",
      title: "24/7 Customer Support",
      description:
        "Nothing worse than dealing with bad customer support. We strive to provide quality service.",
      image: "https://buzzoid.com/wp-content/themes/buzz/v3/customer-support-BHSltX_E.svg",
      // iconBg: "bg-teal-100",
    },
  ];

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to buy <span className="text-cyan-500">Instagram Likes</span>?
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Buying likes for your Instagram posts is the best way to gain more engagement and success.
            <br />
            Improve your social media marketing strategy with Buzzoid.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 p-8 text-center hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image instead of icon */}
              <div
                className={`${feature.iconBg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.number} {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
