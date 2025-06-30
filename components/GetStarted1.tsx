'use client';

import { Button } from "@/components/ui/button";

const instagramServices = [
  "Buy Instagram Followers",
  "Buy Instagram Likes",
  "Buy Instagram Comments",
];

export default function GetStartedSection() {
  return (
    <section className="border-t border-gray-400/50 relative pt-6 pb-12 md:pt-20 md:pb-16">
      {/* Center Floating Icon */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
        <svg width="32" height="39" viewBox="0 0 32 39" fill="none">
          <g filter="url(#filter0_dddd_6_4716)">
            <path
              d="M15.5639 1.78599C15.8733 1.60736 16.2545 1.60736 16.5639 1.78599L27.5682 8.13931C27.8776 8.31794 28.0682 8.64807 28.0682 9.00534V21.712C28.0682 22.0692 27.8776 22.3994 27.5682 22.578L16.5639 28.9313C16.2545 29.11 15.8733 29.11 15.5639 28.9313L4.55964 22.578C4.25024 22.3994 4.05964 22.0692 4.05964 21.712V9.00534C4.05964 8.64807 4.25024 8.31794 4.55964 8.13931L15.5639 1.78599Z"
              fill="#FCFBFD"
            />
          </g>
        </svg>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">

            Boost Your Instagram Presence
          </span>
        </h2>

        {/* Paragraphs */}
        <p className="text-gray-700 mb-4 max-w-2xl mx-auto">

            For even stronger growth, check out our additional services. They trigger higher engagement rates designed to help users expand their audience and even reach the Instagram Explore page regularly:
        </p>
        {/* <p className="text-gray-600 text-sm max-w-2xl mx-auto">
          Honest, trustworthy, responsible, and powerful TikTok and Instagram growth is what we've specialized in for
          more than a dozen years. We invite you to join our family of satisfied customers today!
        </p> */}

        {/* Buttons */}
        <div className="flex flex-col gap-3 items-center mt-8">
          {instagramServices.map((service) => (
            <Button
              key={service}
              className="w-full max-w-sm bg-gradient-to-r from-orange-400 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-all duration-300 hover:scale-105 flex items-center justify-between group"
            >
              <span className="flex items-center">
                <span className="w-8 h-8 mr-3 bg-white/20 rounded-full flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3.707 6.707l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L7 8.586l3.293-3.293a1 1 0 111.414 1.414z" />
                  </svg>
                </span>
                {service}
              </span>
              <svg
                width="6"
                height="9"
                viewBox="0 0 6 9"
                fill="none"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.3303 4.65733L0.474609 1.80164L1.70106 0.575195L5.78319 4.65733L1.70106 8.73947L0.474609 7.51302L3.3303 4.65733Z"
                  fill="currentColor"
                />
              </svg>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
