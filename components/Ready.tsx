'use client';

import React from 'react';


type HowItWorksCard = {
  image: string;
  title: string;
  description: string;
};

const howItWorksData: HowItWorksCard[] = [
  {
    image: "https://buzzoid.com/wp-content/themes/buzz/v3/bz_i_4.w400.q75-ng9Eqw2J.png",
    title: 'Instant delivery guaranteed',
    description:
      'You will typically start seeing Instagram views, Likes, and Followers within minutes of purchasing, thanks to our quick delivery.',
  },
  {
    image: "https://buzzoid.com/wp-content/themes/buzz/v3/bz_i_5.w400.q75-OhC-8LRb.png",
    title: 'Our guarantee',
    description:
      'We want to leave a lasting impression on our clients. If you aren’t satisfied with the quality or delivery of your order, tell us. We’ll refund any order that isn’t fulfilled.',
  },
  {
    image: "https://buzzoid.com/wp-content/themes/buzz/v3/bz_i_5.w400.q75-OhC-8LRb.png",
    title: '24/7 customer support',
    description:
      'Our dedicated support staff is always available. If you have any questions about our services or experience any problems with your order, please don’t hesitate to contact us.',
  },
];

const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center mb-12">
          How it works
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {howItWorksData.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm text-center shadow-xl hover:shadow transition"
            >
              <img
                src={card.image}
                alt={card.title}
                className="mx-auto mb-4 h-36 w-full object-cover object-bottom"
              />
              <h3 className="text-lg font-semibold mb-2 px-6">{card.title}</h3>
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

export default HowItWorksSection;
