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
    title: 'Individuals',
    description:
'Individuals want to build larger follower counts for a variety of reasons. Some are content creators who want bigger audiences to see the work they’ve spent days, weeks, or months producing. Others want to be able to interact with larger groups of people who share their interests or views. Still others simply want to impress friends or relatives, or to feel better about their reach on social media. Purchasing followers lets individual users rapidly achieve those goals.'  },
{
  image: "https://buzzoid.com/wp-content/themes/buzz/v3/bz_i_4.w400.q75-ng9Eqw2J.png",
  title: "Businesses",
  description: `Small businesses and large companies have found Instagram to be one of the best social platforms for interaction with their target audiences. An enormous number of businesses have found that having dedicated Instagram communities has allowed them to build brands and showcase products online.

While we do not offer the services on this page to businesses, our growth service is available!`
}
,
  {
    image: "https://buzzoid.com/wp-content/themes/buzz/v3/bz_i_5.w400.q75-OhC-8LRb.png",
    title: 'Influencers',
    description:
      `Instagram influencers already have large fan bases, but they’re always trying to grow their popularity and reach. Buzzoid’s growth service allows them to boost their visibility and social media presence, stimulating authentic engagement with their content and increasing their accounts’ credibility and importance even more.

We do not offer the services on this page to businesses or influencers, instead try our growth service.`
  }
];

const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* <h2 className="text-4xl font-semibold text-center mb-12">
          How it works
        </h2> */}
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
<div className="text-center text-base leading-snug">
  <p className="text-orange-500 font-medium">
    No matter why you want to boost your Instagram profile,
    you need more followers to do it. Buzzoid's
  </p>
  <p className="text-black">active Instagram followers and fast delivery times</p>
  <p className="text-black">jumpstart your organic growth, sending your</p>
  <p className="text-black">follower count soaring!</p>
</div>


      </div>
    </section>
  );
};

export default HowItWorksSection;
