"use client";

import Image from "next/image";

export default function VisibilitySection() {
  return (
    <section className="bg-gradient-to-b from-purple-50 to-white py-12">
      <div className="container mx-auto px-4">
        {/* First Block */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 w-full">
            <h2
              className="text-[32px] sm:text-[34px] md:text-[36px] lg:text-[38px] leading-[50px] font-bold text-[#2c323e] mb-2 text-center lg:text-left lg:ml-[34%] mt-5"
              style={{
                fontFamily:
                  '"Rethink Sans", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
              }}
            >
              Social Media
            </h2>
            <h2
              className="text-[32px] sm:text-[34px] md:text-[36px] lg:text-[38px] leading-[50px] font-bold text-[#2c323e] mb-6 text-center lg:text-left lg:ml-[34%] -mt-2"
              style={{
                fontFamily:
                  '"Rethink Sans", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
              }}
            >
              Visibility
            </h2>

            <div className="space-y-2 text-black text-base sm:text-lg text-center lg:text-left lg:ml-[34%]">
              <p>Instagram and TikTok have become so</p>
              <p>popular worldwide that it's almost impossible</p>
              <p>for users to earn widespread visibility and</p>
              <p>interaction with the content that they create.</p>
            </div>

            <div className="mt-4 space-y-2 text-gray-600 text-sm sm:text-base text-center lg:text-left lg:ml-[34%]">
              <p>But when users see accounts and posts with large</p>
              <p>numbers of followers, views, likes, and comments,</p>
              <p>they're likely to stop and see what the fuss is about.</p>
            </div>
          </div>

          <div className="lg:w-1/2 w-full flex justify-center">
            <Image
              src="https://buzzoid.com/wp-content/themes/buzz/v3/ic_1.w800.q50-CfqC3x_O.png"
              alt="Social Media Visibility"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
        </div>

        {/* Second Block */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mt-16">
          {/* Image Left */}
          <div className="lg:w-1/2 w-full ml-20 flex justify-center lg:justify-start lg:ml-60">
            <Image
              src="https://buzzoid.com/wp-content/themes/buzz/v3/ic_2.w800.q50-ChRN7jqV.png"
              alt="Accelerated Profile Growth"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>

          {/* Text Right */}
          <div className="lg:w-1/2 w-full">
            <h2
              className="text-[32px] sm:text-[34px]  md:text-[36px] lg:text-[38px] leading-[50px] font-bold text-[#2c323e] mb-2 text-center lg:text-left mt-5"
              style={{
                fontFamily:
                  '"Rethink Sans", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
              }}
            >
              Accelerated
            </h2>
            <h2
              className="text-[32px] sm:text-[34px] md:text-[36px] lg:text-[38px] leading-[50px] font-bold text-[#2c323e] mb-6 text-center lg:text-left -mt-2"
              style={{
                fontFamily:
                  '"Rethink Sans", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
              }}
            >
              Profile Growth
            </h2>

            <div className="space-y-2 text-black text-base sm:text-lg text-center lg:text-left">
              <p>That gets more and more people engaged</p>
              <p>with your Instagram and TikTok pages,</p>
              <p>making you more popular, more influential,</p>
              <p>and more important on the apps.</p>
            </div>

            <div className="mt-4 space-y-2 text-gray-600 text-sm sm:text-base text-center lg:text-left">
              <p>Buzzoid can make it happen! Our IG or TikTok</p>
              <p>engagement packages arrive immediately, your</p>
              <p>account stays safe, and you see fast organic</p>
              <p>growth for your profile, pages, and posts!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
