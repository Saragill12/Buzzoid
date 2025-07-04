// import { Button } from "@/components/ui/button"

// const instagramServices = [
//   "Buy Instagram Followers",
//   "Buy Instagram Likes",
//   "Buy Instagram Comments",
//   "Buy Instagram Views",
// ]

// const tiktokServices = ["Buy TikTok Likes", "Buy TikTok Views", "Buy TikTok Followers"]

// export default function GetStartedSection() {
//   return (
//     <section className="border-t border-gray-400/50 relative pt-6 pb-12 md:pt-20 md:pb-16">
//       <div className="absolute -top-4 left-1/2 -translate-x-1/2">
//         <svg width="32" height="39" viewBox="0 0 32 39" fill="none">
//           <g filter="url(#filter0_dddd_6_4716)">
//             <path
//               d="M15.5639 1.78599C15.8733 1.60736 16.2545 1.60736 16.5639 1.78599L27.5682 8.13931C27.8776 8.31794 28.0682 8.64807 28.0682 9.00534V21.712C28.0682 22.0692 27.8776 22.3994 27.5682 22.578L16.5639 28.9313C16.2545 29.11 15.8733 29.11 15.5639 28.9313L4.55964 22.578C4.25024 22.3994 4.05964 22.0692 4.05964 21.712V9.00534C4.05964 8.64807 4.25024 8.31794 4.55964 8.13931L15.5639 1.78599Z"
//               fill="#FCFBFD"
//             />
//           </g>
//         </svg>
//       </div>

//       <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-14 lg:gap-20">
//         <div className="text-center md:text-start lg:pr-16">
//           <h2 className="text-4xl font-bold mb-4 md:mt-0">
//             <span className="bg-gradient-to-r from-orange-400  ml-40 to-orange-600 bg-clip-text text-transparent">
//               Get Started Now
//             </span>
//           </h2>
//           <p className="text-gray-700 ml-40 mb-4">
//             And importantly, Buzzoid's real followers, likes, views, and comments are available at very reasonable
//             prices that are never higher than those charged by other reputable providers.
//           </p>
//           <p className="text-gray-600 ml-40 text-sm">
//             Honest, trustworthy, responsible, and powerful TikTok and Instagram growth is what we've specialized in for
//             more than a dozen years. We invite you to join our family of satisfied customers today!
//           </p>
//         </div>

//         <div>
//           <div className="flex flex-col gap-3 mx-auto items-center">
//             {instagramServices.map((service, index) => (
//               <Button
//                 key={service}
//                 className="w-full max-w-sm bg-gradient-to-r from-orange-400 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-all duration-300 hover:scale-105 flex items-center justify-between group"
//               >
//                 <span className="flex items-center">
//                   <span className="w-8 h-8 mr-3 bg-white/20 rounded-full flex items-center justify-center">
//                     <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
//                       <path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3.707 6.707l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L7 8.586l3.293-3.293a1 1 0 111.414 1.414z" />
//                     </svg>
//                   </span>
//                   {service}
//                 </span>
//                 <svg
//                   width="6"
//                   height="9"
//                   viewBox="0 0 6 9"
//                   fill="none"
//                   className="group-hover:translate-x-1 transition-transform"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     clipRule="evenodd"
//                     d="M3.3303 4.65733L0.474609 1.80164L1.70106 0.575195L5.78319 4.65733L1.70106 8.73947L0.474609 7.51302L3.3303 4.65733Z"
//                     fill="currentColor"
//                   />
//                 </svg>
//               </Button>
//             ))}
//           </div>

//           <div className="flex flex-col gap-3 mx-auto items-center mt-5">
//             {tiktokServices.map((service, index) => (
//               <Button
//                 key={service}
//                 className="w-full max-w-sm bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-all duration-300 hover:scale-105 flex items-center justify-between group"
//               >
//                 <span className="flex items-center">
//                   <span className="w-8 h-8 mr-3 bg-white/20 rounded-full flex items-center justify-center">
//                     <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
//                       <path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3.707 6.707l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L7 8.586l3.293-3.293a1 1 0 111.414 1.414z" />
//                     </svg>
//                   </span>
//                   {service}
//                 </span>
//                 <svg
//                   width="6"
//                   height="9"
//                   viewBox="0 0 6 9"
//                   fill="none"
//                   className="group-hover:translate-x-1 transition-transform"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     clipRule="evenodd"
//                     d="M3.3303 4.65733L0.474609 1.80164L1.70106 0.575195L5.78319 4.65733L1.70106 8.73947L0.474609 7.51302L3.3303 4.65733Z"
//                     fill="currentColor"
//                   />
//                 </svg>
//               </Button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
'use client';

const services = [
  {
    label: 'BUY INSTAGRAM FOLLOWERS',
    icon: 'https://buzzoid.com/wp-content/themes/buzz/v3/btn_followers-BGEF5NRE.svg',
    gradient: 'from-[#ff8a3f] to-[#fd6575]',
  },
  {
    label: 'BUY INSTAGRAM COMMENTS',
    icon: 'https://buzzoid.com/wp-content/themes/buzz/v3/btn_views-Jm23bOBU.svg',
    gradient: 'from-[#ff8a3f] to-[#fd6575]',
  },
{
    label: 'BUY INSTAGRAM FOLLOWERS',
    icon: 'https://buzzoid.com/wp-content/themes/buzz/v3/btn_followers-BGEF5NRE.svg',
    gradient: 'from-[#ff8a3f] to-[#fd6575]',
  },
  {
    label: 'BUY INSTAGRAM COMMENTS',
    icon: 'https://buzzoid.com/wp-content/themes/buzz/v3/btn_views-Jm23bOBU.svg',
    gradient: 'from-[#ff8a3f] to-[#fd6575]',
  },{
    label: 'BUY INSTAGRAM FOLLOWERS',
    icon: 'https://buzzoid.com/wp-content/themes/buzz/v3/btn_followers-BGEF5NRE.svg',
    gradient: 'from-[#ff8a3f] to-[#fd6575]',
  },
  {
    label: 'BUY INSTAGRAM COMMENTS',
    icon: 'https://buzzoid.com/wp-content/themes/buzz/v3/btn_views-Jm23bOBU.svg',
    gradient: 'from-[#ff8a3f] to-[#fd6575]',
  },
 
];

export default function GetStartedSection() {
  return (
    <section className="flex flex-col md:flex-row items-start justify-center md:justify-between gap-8 px-4 py-12 max-w-6xl mx-auto">
      {/* Left Text Section */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-4xl font-bold text-orange-500">Get Started Now</h2>
        <p className="text-gray-800 text-lg">
          And importantly, Buzzoid’s real followers, likes, views, and comments are available at very reasonable prices
          that are never higher than those charged by other reputable providers.
        </p>
        <p className="text-gray-600 text-sm">
          Honest, trustworthy, responsible, and powerful TikTok and Instagram growth is what we’ve specialized in for
          more than a dozen years. We invite you to join our family of satisfied customers today!
        </p>
      </div>

      {/* Right Button List */}
      <div className="flex flex-col gap-4 md:w-1/2 ml-40 items-start">
        {services.map((service, index) => (
          <button
            key={index}
            className={`${
              service.customWidth || 'max-w-xs md:max-w-sm'
            } flex items-center justify-between px-5 py-3 rounded-2xl text-white font-semibold text-sm shadow-md transition-all duration-200 hover:scale-[1.03] bg-gradient-to-r ${service.gradient}`}
          >
            <div className="flex items-center gap-3">
              <img src={service.icon} alt="" className="w-8 h-8" />
              {service.label}
            </div>

            {/* Smaller white circular arrow */}
            <span className="w-5 h-5 flex items-center justify-center ml-4 rounded-full bg-white text-orange-900 text-[20px]  shadow-sm">
              ›
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
