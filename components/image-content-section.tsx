"use client";

import Image from "next/image";

export default function VisibilitySection() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        {/* First Block */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2
              className="text-[38px] ml-[34%] mt-5 leading-[55px] font-bold text-[#2c323e] mb-2"
              style={{
                fontFamily:
                  '"Rethink Sans", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
              }}
            >
              Social Media
            </h2>
            <h2
              className="text-[38px] ml-[34%] mt-[-3%] leading-[55px] font-bold text-[#2c323e] mb-6"
              style={{
                fontFamily:
                  '"Rethink Sans", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
              }}
            >
              Visibility
            </h2>

            <div className="space-y-2 ml-[34%] text-black text-lg">
              <p>Instagram and TikTok have become so</p>
              <p>popular worldwide that it's almost impossible</p>
              <p>for users to earn widespread visibility and</p>
              <p>interaction with the content that they create.</p>
            </div>

            <div className="mt-4 ml-[34%] space-y-2 text-gray-600 text-base">
              <p>But when users see accounts and posts with large</p>
              <p>numbers of followers, views, likes, and comments,</p>
              <p>they're likely to stop and see what the fuss is about.</p>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <Image
              src="https://buzzoid.com/wp-content/themes/buzz/v3/ic_1.w800.q50-CfqC3x_O.png"
              alt="Social Media Visibility"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
        </div>

        {/* Second Block (Image Left, Text Right) */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mt-16">
          {/* Image on Left */}
          <div className="lg:w-1/2 ml-20 flex justify-center">
            <Image
              src="https://buzzoid.com/wp-content/themes/buzz/v3/ic_2.w800.q50-ChRN7jqV.png"
              alt="Accelerated Profile Growth"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>

          {/* Text on Right */}
          <div className="lg:w-1/2">
            {/* <h2 className="text-2xl ml-30 sm:text-4xl md:text-4xl font-bold mb-2">
              Accelerated
            </h2>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-6">
              Profile Growth
            </h2> */}


       <h2
              className="text-[38px]  mt-5 leading-[55px] font-bold text-[#2c323e] mb-2"
              style={{
                fontFamily:
                  '"Rethink Sans", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
              }}
            >
Accelerated            </h2>
            <h2
              className="text-[38px]  mt-[-3%] leading-[55px] font-bold text-[#2c323e] mb-6"
              style={{
                fontFamily:
                  '"Rethink Sans", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
              }}
            >
              Profile Growth
            </h2>


            {/* <div className="space-y-2 text-gray-900 text-base sm:text-xl"> */}
            {/* <div className="space-y-2 ml-[34%] text-black text-lg"> */}

              {/* <p>That gets more and more people engaged</p>
              <p>with your Instagram and TikTok pages,</p>
              <p>making you more popular, more influential,</p>
              <p>and more important on the apps.</p>
            </div>

            <div className="mt-4 space-y-2 text-gray-600 text-base sm:text-xl">
              <p>Buzzoid can make it happen! Our IG or TikTok</p>
              <p>engagement packages arrive immediately, your</p>
              <p>account stays safe, and you see fast organic</p>
              <p>growth for your profile, pages, and posts!</p>
            </div> */}

 <div className="space-y-2  text-black text-lg">
              <p>That gets more and more people engaged</p>
              <p>with your Instagram and TikTok pages,</p>
              <p>making you more popular, more influential,</p>
              <p>and more important on the apps.</p>
            </div>

            <div className="mt-4 space-y-2 text-gray-600 text-base">
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
