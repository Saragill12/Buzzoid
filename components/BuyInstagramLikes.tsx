"use client";
import { useState } from 'react'; // Import useState

export default function InstagramFollowersCard() {
  // State for controlling the expansion of each "read more" section
  const [isWhyImportantExpanded, setIsWhyImportantExpanded] = useState(false);
  const [isKeyReasonsExpanded, setIsKeyReasonsExpanded] = useState(false);

  // SVG for a chevron-down icon inside a circle
  const CircularChevronDownIcon = ({ isExpanded }) => (
    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm ml-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-4 w-4 text-blue-600 transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );

  const whyImportantFullText = "A high follower count is the number one sign that an Instagram user is popular and influential. And when surfers see that an account has a lot of followers, they understand that the user's content has attracted large audiences — and is worth watching. This signals to potential followers and brands that your content is valuable and engaging, leading to organic growth and opportunities for collaborations. A larger following also boosts your content's visibility in Instagram's algorithms, pushing it to a wider audience.";
  const whyImportantTruncatedText = "A high follower count is the number one sign that an Instagram user is popular and influential. And when surfers see that an account has a lot of followers, they understand that the user's content has attracted large audiences — and is worth watching.";

  const keyReasonsFullText = "Your purchased followers will boost your Insta follower count. That provides users with an immediate signal that your account is important, and tells them it will be worth their time to stop and view the content you've posted. Just as it tells them why your content is worth watching, it also signals to Instagram's algorithm that your profile is popular, leading to increased organic reach and potential viral exposure for your posts.";
  const keyReasonsTruncatedText = "Your purchased followers will boost your Insta follower count. That provides users with an immediate signal that your account is important, and tells them it will be worth their time to stop and view the content you've posted. Just as it tells them why your";


  return (
    <section className="bg-gradient-to-b from-[#e0f2ff] to-white p-6 md:p-10 rounded-2xl shadow-xl max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Column 1: Why Are Instagram Followers Important? */}
        <div className="bg-white rounded-xl w-[85%] ml-10 p-6 flex flex-col items-center text-center shadow-lg border border-gray-100">
          <div className="mb-4">
            <img src="https://buzzoid.com/wp-content/themes/buzz/v3/card-i-blue_1-Bg0IFn5q.svg" alt="Why Important" className="h-32 w-auto" />
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Why Are Instagram Followers Important?
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            {isWhyImportantExpanded ? whyImportantFullText : whyImportantTruncatedText}
          </p>
          <div
            className="mt-auto text-sm text-blue-600 cursor-pointer flex items-center justify-center"
            onClick={() => setIsWhyImportantExpanded(!isWhyImportantExpanded)}
          >
            {isWhyImportantExpanded ? '...read less' : '...read more'}
            <CircularChevronDownIcon isExpanded={isWhyImportantExpanded} />
          </div>
        </div>

        {/* Column 2: Key Reasons to Buy Instagram Followers */}
        <div className="bg-white rounded-xl p-6 flex w-[85%] flex-col items-center text-center shadow-lg border border-gray-100">
          <div className="mb-4">
            <img src="https://buzzoid.com/wp-content/themes/buzz/v3/card-i-blue_2-BzB1QbZC.svg" alt="Key Reasons" className="h-32 w-auto" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Key Reasons to Buy Instagram Followers
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            {isKeyReasonsExpanded ? keyReasonsFullText : keyReasonsTruncatedText}
          </p>
          <div
            className="mt-auto text-sm text-blue-600 cursor-pointer flex items-center justify-center"
            onClick={() => setIsKeyReasonsExpanded(!isKeyReasonsExpanded)}
          >
            {isKeyReasonsExpanded ? '...read less' : '...read more'}
            <CircularChevronDownIcon isExpanded={isKeyReasonsExpanded} />
          </div>
        </div>

        {/* Column 3: Buy Instagram Followers CTA (Original position) */}
        <div className=" flex flex-col items-start">
          <div className="flex items-center mb-4">
            <span className="text-yellow-400 text-lg mr-2">⭐</span>
            <span className="text-gray-700 font-semibold text-base">5.0</span>
            <span className="text-gray-500 ml-1 text-sm">10,450+</span>
          </div>
         <h2 className="text-2xl font-bold text-gray-800 mb-6">
  Buy Instagram Followers
</h2>

          <ul className="text-gray-700 space-y-3 mb-8 w-full">
            <li className="flex items-center text-sm">
              <span className="text-green-500 mr-2">✔</span>
              100% legitimate followers that keep your account safe
            </li>
            <li className="flex items-center text-sm">
              <span className="text-green-500 mr-2">✔</span>
              Packages of 10-200,000 real followers available
            </li>
            <li className="flex items-center text-sm">
              <span className="text-green-500 mr-2">✔</span>
              Premium and VIP follower upgrades available
            </li>
            <li className="flex items-center text-sm">
              <span className="text-green-500 mr-2">✔</span>
              Immediate delivery
            </li>
            <li className="flex items-center text-sm">
              <span className="text-green-500 mr-2">✔</span>
              Very affordable prices
            </li>
            <li className="flex items-center text-sm">
              <span className="text-green-500 mr-2">✔</span>
              Safe and secure ordering process
            </li>
            <li className="flex items-center text-sm">
              <span className="text-green-500 mr-2">✔</span>
              24/7 customer support
            </li>
            <li className="flex items-center text-sm">
              <span className="text-green-500 mr-2">✔</span>
              Unparalleled results
            </li>
          </ul>
          <button className="w-full inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:opacity-90 transition duration-300">
            BUY INSTAGRAM FOLLOWERS
          </button>
        </div>
      </div>
    </section>
  );
}