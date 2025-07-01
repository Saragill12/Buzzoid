'use client';
import Image from 'next/image';

export default function WhyBuzzoidSection() {
  return (
    <section className="border-t border-gray-400/50 mt-10 relative pt-6 pb-4 md:pt-12">
      {/* Hex icon */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
        <svg width="42" height="35" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#hex-shadow)">
            <path d="M16 2L28 9V23L16 30L4 23V9L16 2Z" fill="white" />
            <path d="M16 7L24 12V20L16 25L8 20V12L16 7Z" fill="#E4E4E7" />
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

      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Why{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Buzzoid?
            </span>
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            We're not the only provider offering Instagram and TikTok interactions for sale. We're the best, though, and
            we want you to feel comfortable trying our services.
          </p>
        </div>

        {/* First Block */}
        <div className="flex flex-col ml-[10%] lg:flex-row  items-center gap-8">
          <div className="lg:w-1/2">
            <h2 className="text-[26px] leading-[36px] ml-20 font-bold text-[#2c323e] mb-1 font-serif">
              Industry-Leading
            </h2>
            <h2 className="text-[26px] -mt-2 leading-[36px]  ml-20 font-bold text-[#2c323e] mb-4 font-serif">
              Services
            </h2>

            <div className="space-y-1 text-black ml-20 text-sm leading-relaxed">
              <p>Buzzoid has been delivering high-quality,</p>
              <p>real Instagram followers, likes, and video</p>
              <p>views for more than a dozen years, and</p>
              <p>we’ve been the top-ranked Instagram service</p>
              <p>provider ever since. We’ve also been</p>
              <p>featured as a trusted IG service in</p>
              <p>publications like Men’s Journal, US Weekly,</p>
              <p>and 303 Magazine.</p>
            </div>

            <div className="mt-3 space-y-1 ml-20 text-gray-600 text-sm">
              <p>When TikTok was first open for American and</p>
              <p>European signups, we added TikTok services to our</p>
              <p>menu almost immediately and rapidly became the</p>
              <p>highest-rated TikTok provider as well.</p>
            </div>
          </div>

          <div className="lg:w-1/2 -ml-40 flex justify-center">
            <Image
              src="https://buzzoid.com/wp-content/themes/buzz/v3/ic_3.w800.q50-GVybWzQe.png"
              alt="Social Media Visibility"
              width={250}
              height={250}
              className="object-contain"
            />
          </div>
        </div>

        {/* Second Block */}
        <div className="flex flex-col lg:flex-row items-center gap-8 mt-14">
          <div className="lg:w-1/2 ml-20 flex justify-center">
            <Image
              src="https://buzzoid.com/wp-content/themes/buzz/v3/ic_4.w800.q50-az_dmH0i.png"
              alt="Accelerated Profile Growth"
              width={250}
              height={250}
              className="object-contain"
            />
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-[26px] ml-[8%] leading-[36px] font-bold text-[#2c323e] mb-1 font-serif">
              Trusted Growth
            </h2>
            <h2 className="text-[26px] -mt-2 ml-[8%] leading-[36px] font-bold text-[#2c323e] mb-4 font-serif">
              Experts
            </h2>

            <div className="space-y-1 ml-[8%] text-black text-sm leading-relaxed">
              <p>Since we began operations, we’ve helped</p>
              <p>countless users grow their social media</p>
              <p>presence across platforms, delivering billions</p>
              <p>of Instagram interactions and hundreds of</p>
              <p>thousands of TikTok engagements. Our</p>
              <p>diverse community includes individual</p>
              <p>content creators and everyday users looking</p>
              <p>to expand their reach and connect with</p>
              <p>others who share their interests.</p>
            </div>

            <div className="mt-3 space-y-1 ml-[8%] text-gray-600 text-sm">
              <p>They all trust Buzzoid because we deliver the best</p>
              <p>results available from any social media service</p>
              <p>provider. That’s all thanks to our expert and</p>
              <p>experienced staff, who understand the fastest and</p>
              <p>most effective ways to generate organic account</p>
              <p>growth, safely and according to all apps’ terms and</p>
              <p>conditions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
