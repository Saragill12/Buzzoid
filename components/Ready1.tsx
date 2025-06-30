'use client';

import React from 'react';

type CardType = {
  icon: string;
  title: string;
  description: string;
};

const cardsData: CardType[] = [
  {
    icon: 'https://buzzoid.com/wp-content/themes/buzz/v3/instant-delivery-CfkUYZYD.svg',
    title: 'Instant Delivery Guaranteed',
    description:
      'Genuine comments tailored to your content by smart algorithms.',
  },
  {
    icon: 'https://buzzoid.com/wp-content/themes/buzz/v3/high-quality-followers-BlJBbaCX.svg',
    title: '100% Real Likes',
    description:
      'More comments mean higher visibility and algorithm push.',
  },
  {
    icon: 'https://buzzoid.com/wp-content/themes/buzz/v3/customer-support-BHSltX_E.svg',
    title: '24/7 Customer Support',
    description:
      'Top creators rely on our IG comment strategies.',
  },
];

const InfoSection: React.FC = () => {
  const title = 'Ready to buy';
  const highlight = 'Instagram Likes?';
  const subtitle =
    "Buying likes for your Instagram posts is the best way to gain more engagement and success. Improve your social media marketing strategy with Buzzoid.";
  const fromInsta = true;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center mb-12">
          {title}{' '}
          <span
            className={`${
              fromInsta
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600'
                : 'text-gradient'
            }`}
          >
            {highlight}
          </span>
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          {subtitle}
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {cardsData.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl text-center shadow-xl hover:shadow-lg transition pt-6"
            >
              <img
                src={card.icon}
                alt={card.title}
                className="h-20 object-contain object-center mx-auto mb-4"
              />
              <h3 className="font-semibold text-base mb-2 px-6">
                {`${idx + 1}. ${card.title}`}
              </h3>
              <p className="text-sm text-gray-600 px-6 mb-6">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
