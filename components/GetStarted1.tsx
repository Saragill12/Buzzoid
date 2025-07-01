'use client';

const services = [
  {
    label: 'BUY INSTAGRAM FOLLOWERS',
    icon: 'https://buzzoid.com/wp-content/themes/buzz/v3/btn_followers-BGEF5NRE.svg',
    gradient: 'from-[#ff8a3f] to-[#fd6575]',
  },
  {
    label: 'BUY INSTAGRAM LIKES',
    icon: 'https://buzzoid.com/wp-content/themes/buzz/v3/btn_likes-DS7VWetq.svg',
    gradient: 'from-[#ff8a3f] to-[#fd6575]',
  },
  {
    label: 'BUY INSTAGRAM COMMENTS',
    icon: 'https://buzzoid.com/wp-content/themes/buzz/v3/btn_views-Jm23bOBU.svg',
    gradient: 'from-[#ff8a3f] to-[#fd6575]',
  },
  // {
  //   label: 'BUY INSTAGRAM VIEWS',
  //   icon: 'https://buzzoid.com/wp-content/themes/buzz/v3/btn_likes-DS7VWetq.svg',
  //   gradient: 'from-[#ff8a3f] to-[#fd6575]',
  // },
  // {
  //   label: 'BUY TIKTOK LIKES',
  //   icon: 'https://buzzoid.com/wp-content/themes/buzz/v3/btn_followers-BGEF5NRE.svg',
  //   gradient: 'from-[#ff8a3f] to-[#fd6575]',
  // },
  // {
  //   label: 'BUY TIKTOK VIEWS',
  //   icon: 'https://buzzoid.com/wp-content/themes/buzz/v3/btn_views-Jm23bOBU.svg',
  //   gradient: 'from-[#ff8a3f] to-[#fd6575]',
  // },
];

export default function GetStartedSection() {
  return (
    <section className="pt-12 pb-20 px-4 max-w-4xl mx-auto text-center">
      {/* Header */}
      <h2 className="text-4xl font-bold mb-4">
        <span className="text-black">Boost Your</span>
        <span className="bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text">
Instagram Presence        </span>
      </h2>

      {/* Paragraphs */}
      <p className="text-gray-800 text-lg mb-3">
For even stronger growth, check out our additional services. They trigger higher engagement rates designed to help users expand their audience and even reach the Instagram Explore page regularly:

      </p>
      {/* <p className="text-gray-600 text-sm mb-10 max-w-2xl mx-auto">
        Honest, trustworthy, responsible, and powerful TikTok and Instagram growth is what we've specialized in for
        more than a dozen years. We invite you to join our family of satisfied customers today!
      </p> */}

      {/* Buttons */}
      <div className="flex flex-col items-center gap-4">
        {services.map((service, index) => (
          <button
            key={index}
            className={`w-full max-w-sm flex items-center justify-between px-5 py-3 rounded-2xl text-white font-semibold text-sm shadow-md transition-all duration-200 hover:scale-[1.03] bg-gradient-to-r ${service.gradient}`}
          >
            <div className="flex items-center gap-3">
              <img src={service.icon} alt="" className="w-6 h-6" />
              {service.label}
            </div>

            <span className="w-5 h-5 flex items-center justify-center ml-4 rounded-full bg-white text-orange-900 text-[14px] shadow-sm">
              ›
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
