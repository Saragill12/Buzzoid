"use client";

import ServiceCard from "@/components/service-card";

const service = {
  id: "instagram-likes",
  title: "Buy Instagram Likes",
  rating: 5.0,
  counter: 8700,
  gradient: "from-orange-400 to-orange-600",
  features: [
    "Real likes from real Instagram users, keeping your account safe",
    "Choose 50 to 10,000 genuine Instagram likes",
    "Premium likes and instant, automatic likes available",
    "Lightning-fast delivery for reasonable prices",
    "Likes can be split between posts, free video views with all packages",
    "Personal data is always 100% secure",
    "24-hour customer support",
    "Powerful organic growth",
  ],
  cards: [
    {
      title: "Why Are Instagram Likes Important?",
      content:
        "Likes boost posts in the same way that followers boost accounts. IG content that's been liked by hundreds or thousands of users entices everyone who sees the post's high likes count to stop and see why the content is so popular. It's not only users who notice videos with large numbers of likes. Instagram's algorithms pay attention, too; they reward posts with large numbers of likes by giving them additional exposure across the platform. And more exposure means even higher levels of engagement.",
      image: "https://buzzoid.com/wp-content/themes/buzz/v3/card-i-pur_1-B_CDG1NQ.svg",
    },
    {
      title: "Key Reasons to Buy Instagram Likes",
      content:
        "Buying likes works much like buying followers. As the likes counter rises on your post, it attracts an influx of new viewers and likes, and it's likely to bring in new followers as well. It also signals the algorithms that your post deserves to be seen by a much larger audience. And with enough likes, your post's organic growth can soar to levels high enough to put you on the Instagram Explore page, where your exposure can explode. Buying likes for a post that's already popular can even help it become a viral sensation on the app.",
      image: "https://buzzoid.com/wp-content/themes/buzz/v3/card-i-pur_2-CrjJ3mpc.svg",
    },
  ],
};

export default function BuyInstagramLikes() {
  return (
    <section className="relative border-t border-gray-400/50 pt-6 pb-8 md:pt-12 md:pb-10">
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

      <div className="container mx-auto px-4 mb-8 mt-6 text-center md:mb-14 md:mt-10">
        <h2 className="text-4xl font-bold mb-4">
          Buzzoid's{" "}
          <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Likes Service</span>
        </h2>
        <p className="text-lg text-gray-600 mx-auto max-w-3xl">
          Give your Instagram posts the love they deserve. With Buzzoid's likes service, increase your engagement and unlock more visibility.
        </p>
      </div>

      <div className="container mx-auto px-4">
      <div className="container w-[70%] m mx-auto px-4">
          <ServiceCard service={service} />
        </div>
      </div>
    </section>
  );
}
