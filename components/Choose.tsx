'use client';

import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

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
      'You don’t have to wait for your growth to start — your Insta followers arrive immediately! Buzzoid’s state-of-the-art system delivers powerful interactions as soon as you order!',
  },
  {
    icon: 'https://buzzoid.com/wp-content/themes/buzz/v3/high-quality-followers-BlJBbaCX.svg',
    title: '100% Real Likes',
    description: 'Only real follows from verified IG users will trigger substantial, long-lasting growth. We vet every follower we deliver to ensure that they’re authentic, active Instagram users!',
  },
  {
    icon: 'https://buzzoid.com/wp-content/themes/buzz/v3/customer-support-BHSltX_E.svg',
    title: '24/7 Customer Support',
    description: 'We pride ourselves on providing caring, knowledgeable customer support whenever you need it. Our experienced reps can quickly resolve issues and answer questions.',
  },
  {
    icon: 'https://buzzoid.com/wp-content/themes/buzz/v3/no-password-DTSMZC1w.svg',
    title: 'No Password Required',
    description: 'Your safety and security are a top priority at Buzzoid. We’ll never ask for your IG password. Transactions are encrypted and our platform is secure. Your personal info always stays safe!',
  },
  {
    icon: 'https://buzzoid.com/wp-content/themes/buzz/v3/trusted-D-DIAL7r.svg',
    title: 'Trusted Since 2012',
    description: 'Buzzoid has been the Instagram service of choice for millions of users for 12+ years. Our customers know our follower service keeps accounts safe and delivers impressive growth!',
  },
  {
    icon: 'https://buzzoid.com/wp-content/themes/buzz/v3/try-ai-bg-vxhAniif.svg', // background image pattern (optional)
    title: 'Want organic, Targeted followers?',
    description: '',
  },
];

const InfoSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-center text-2xl sm:text-3xl font-bold mb-12">
          <span className="text-black font-medium">Why Choose </span>
          <span className="bg-gradient-to-r from-orange-300 to-orange-600 text-transparent bg-clip-text">
            Buzzoid?
          </span>
        </h1>

        <div className="grid gap-6 md:grid-cols-3">
          {cardsData.map((card, idx) => {
            const isLast = idx === cardsData.length - 1;

            return isLast ? (
              // Final CTA styled box
    // Final CTA styled box
// Final CTA styled box
<div
  key={idx}
  className="relative flex flex-col items-center justify-center rounded-2xl text-center p-4 shadow-xl mx-auto w-full max-w-[240px] min-h-[200px]"
  style={{
    backgroundColor: '#5EE6FF',
    backgroundImage:
      'repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(0, 174, 255, 0.3) 20px, rgba(0, 174, 255, 0.3) 40px)',
  }}
>
  {/* NEW badge */}
  <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded font-semibold">
    NEW SERVICE
  </span>

  {/* CTA Text */}
  <h3 className="text-sm font-semibold text-gray-900 mb-3 leading-snug">
    {card.title}
  </h3>

  {/* CTA Button */}
  <button className="bg-lime-300 text-black text-sm font-bold px-4 py-2 rounded-md hover:opacity-90 transition flex items-center gap-2">
    Try AI Growth for Free <FaArrowRight className="text-xs" />
  </button>
</div>


            ) : (
              <div
                key={idx}
                className="bg-white rounded-2xl text-center shadow-xl hover:shadow-lg transition pt-6 max-w-sm mx-auto min-h-[260px]"
              >
                <img
                  src={card.icon}
                  alt={card.title}
                  className="h-20 object-contain object-center mx-auto mb-4"
                />
                <h3 className="font-semibold text-base mb-2 px-6">{`${idx + 1}. ${card.title}`}</h3>
                <p className="text-sm text-gray-600 px-6 mb-6">{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
