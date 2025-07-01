'use client';

import React, { useState } from 'react';
import { Star } from 'lucide-react';

const ReviewSection: React.FC = () => {
  const [rating, setRating] = useState<number>(0);

  const reviews = [
    {
      review: '“They are good and real”',
      author: 'Sagebonque',
    },
    {
      review: '“Actually worked and very professional.”',
      author: 'Harry',
    },
    {
      review: '“Awesome app and highly recommend”',
      author: 'Jose Fernandez',
    },
    {
      review: '“Highly recommend this platform.”',
      author: 'Tina',
    },
  ];

  return (
    <div className="bg-[#f4f6ff]">
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
      <section className="py-16 custom-container">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center heading mb-4">
            Customer Reviews & Feedback{' '}
            <span role="img" aria-label="smile">
              
            </span>
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
            We’re proud to have so many Buzzoid customers come back over and
            over again when they want to buy followers and other TikTok
            engagements. Here’s what just a few of our repeat clients have to
            say.
          </p>

          <div className="grid md:grid-cols-5 gap-8 items-start">
            {/* Left Form */}
            <div className="col-span-2 p-6 rounded-lg shadow-md bg-white">
              <h3 className="text-lg font-semibold mb-4">Submit Your Review</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium">Your name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full border rounded px-3 py-2 mt-1 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full border rounded px-3 py-2 mt-1 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Rating</label>
                  <div className="flex items-center space-x-1 mt-1">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <Star
                        key={num}
                        className={`w-5 h-5 cursor-pointer ${
                          num <= rating ? 'text-orange-400' : 'text-gray-300'
                        }`}
                        onClick={() => setRating(num)}
                        fill={num <= rating ? '#fb923c' : 'none'}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium">
                    Your Review
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Your Review"
                    className="w-full border rounded px-3 py-2 mt-1 text-sm"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 rounded bg-orange-300 to  bg-orange-gradient text-white font-semibold "
                >
                  SUBMIT REVIEW
                </button>
              </form>
            </div>

            {/* Right Testimonials */}
            <div className="col-span-3 ml-40 grid gap-6">
              {reviews.map((item, index) => (
                <div key={index} className=" ">
                  <div className="mb-2 flex">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="inline-block w-4 h-4 bg-green-500 rounded text-white text-xs font-bold text-center mr-1"
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <blockquote className="text-gray-700 text-sm leading-relaxed mb-1">
                    {item.review}
                  </blockquote>
                  <p className="text-xs text-gray-400">— {item.author}</p>
                </div>
              ))}
              <button className="w-full text-center py-2 bg-gray-200 text-sm font-medium rounded-full mt-4">
                SHOW ALL REVIEWS
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewSection;
