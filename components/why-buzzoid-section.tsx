import Image from "next/image";

export default function WhyBuzzoidSection() {
  return (
    <section className="border-t border-gray-400/50 relative pt-6 pb-4 md:pt-12">
      {/* Hex icon */}
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

      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Why{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Buzzoid?
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're not the only provider offering Instagram and TikTok interactions for sale. We're the best, though, and
            we want you to feel comfortable trying our services.
          </p>
        </div>

        {/* First Block: Text Left, Image Right */}
        <div className="flex flex-col ml-[18%] lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-[38px] leading-[55px] font-bold text-[#2c323e] mb-2 font-serif">
              Social Media
            </h2>
            <h2 className="text-[38px] -mt-3 leading-[55px] font-bold text-[#2c323e] mb-6 font-serif">
              Visibility
            </h2>

            <div className="space-y-2 text-black text-lg">
              <p>Instagram and TikTok have become so</p>
              <p>popular worldwide that it's almost impossible</p>
              <p>for users to earn widespread visibility and</p>
              <p>interaction with the content that they create.</p>
            </div>

            <div className="mt-4 space-y-2 text-gray-600 text-base">
              <p>But when users see accounts and posts with large</p>
              <p>numbers of followers, views, likes, and comments,</p>
              <p>they're likely to stop and see what the fuss is about.</p>
            </div>
          </div>

          <div className="lg:w-1/2 -ml-60 flex justify-center">
            <Image
              src="https://buzzoid.com/wp-content/themes/buzz/v3/ic_1.w800.q50-CfqC3x_O.png"
              alt="Social Media Visibility"
              width={250}
              height={250}
              className="object-contain"
            />
          </div>
        </div>

        {/* Second Block: Image Left, Text Right */}
        <div className="flex flex-col  lg:flex-row items-center gap-12 mt-16">
          <div className="lg:w-1/2 ml-20 flex justify-center">
            <Image
              src="https://buzzoid.com/wp-content/themes/buzz/v3/ic_2.w800.q50-ChRN7jqV.png"
              alt="Accelerated Profile Growth"
              width={250}
              height={250}
              className="object-contain"
            />
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-[38px] ml-[8%] leading-[55px] font-bold text-[#2c323e] mb-2 font-serif">
              Accelerated
            </h2>
            <h2 className="text-[38px] -mt-3 ml-[8%] leading-[55px] font-bold text-[#2c323e] mb-6 font-serif">
              Profile Growth
            </h2>

            <div className="space-y-2 ml-[8%] text-black text-lg">
              <p>That gets more and more people engaged</p>
              <p>with your Instagram and TikTok pages,</p>
              <p>making you more popular, more influential,</p>
              <p>and more important on the apps.</p>
            </div>

            <div className="mt-4 space-y-2 ml-[8%] text-gray-600 text-base">
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
