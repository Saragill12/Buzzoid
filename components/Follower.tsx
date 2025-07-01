"use client";

import { useState } from "react";
import { Star, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CustomCheckIcon = () => (
  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-white border border-gray-300 text-orange-500 shadow mt-0.5">
    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.9436 0.563382C11.4318 1.05154 11.4318 1.84299 10.9436 2.33115L5.5712 7.70357C5.08305 8.19172 4.29161 8.19172 3.80345 7.70358L0.799179 4.69944C0.311014 4.21129 0.310997 3.41984 0.799143 2.93167C1.28729 2.44351 2.07874 2.44349 2.56691 2.93164L4.68729 5.05193L9.17585 0.563382C9.664 0.0752268 10.4555 0.0752268 10.9436 0.563382Z"
        fill="currentColor"
      />
    </svg>
  </span>
);

export default function InstagramFollowersPage() {
  const [showWhyImportant, setShowWhyImportant] = useState(false);
  const [showKeyReasons, setShowKeyReasons] = useState(false);

  return (
    <div
      className="relative bg-gradient-to-b from-[#F2E5FF] to-white p-6 md:p-8 rounded-2xl mt-10 shadow-xl w-[70%] mx-auto overflow-hidden
      [&::after]:content-[''] [&::after]:absolute [&::after]:bottom-[-40px] [&::after]:left-0 [&::after]:w-full [&::after]:h-32
      [&::after]:bg-white [&::after]:blur-3xl [&::after]:z-[-1]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Card 1: Why Instagram Followers Important */}
        <Card className="bg-white/90 backdrop-blur-sm w-[70%] min-h-[470px] ml-3 border border-gray-500 rounded-2xl shadow-sm flex flex-col">
          <CardContent className="p-6 text-center flex flex-col h-full">
            <img
              src="https://buzzoid.com/wp-content/themes/buzz/v3/card-i-blue_1-Bg0IFn5q.svg"
              alt="Why Instagram Followers Important"
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <h3 className="text-base font-bold text-gray-800 mb-3 leading-tight">
              Why Are Instagram <br /> Followers Important?
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              A high follower count is the number one sign that an Instagram user is popular and influential. And when surfers see that an account has a lot of followers, they understand that the user’s content has attracted large audiences
            </p>
            {showWhyImportant && (
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                — and is worth watching. Followers matter for another reason, too. The Instagram algorithms award large audiences to content posted by the platform’s most popular accounts. The more followers you have, the more visibility your posts will receive and the more new followers you’ll gain.
              </p>
            )}
            <button
              onClick={() => setShowWhyImportant(!showWhyImportant)}
              className="mx-auto w-9 h-9 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-100 transition-colors"
            >
              <ChevronDown
                className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${showWhyImportant ? "rotate-180" : ""}`}
              />
            </button>
          </CardContent>
        </Card>

        {/* Card 2: Key Reasons to Buy Instagram Followers */}
        <Card className="bg-white/90 backdrop-blur-sm w-[70%] min-h-[470px] -ml-24 rounded-2xl shadow-sm border-0 flex flex-col">
          <CardContent className="p-6 text-center flex flex-col h-full">
            <img
              src="https://buzzoid.com/wp-content/themes/buzz/v3/card-i-blue_2-BzB1QbZC.svg"
              alt="Key Reasons to Buy Followers"
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <h3 className="text-base font-bold text-gray-800 mb-3 leading-tight">
              Key Reasons to Buy <br /> Instagram Followers
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Your purchased followers will boost your Insta follower count. That provides users with an immediate signal that your account is important, and tells them it will be worth their time to stop and view
            </p>
            {showKeyReasons && (
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                New Buzzoid followers tell the system’s algorithms that your account is becoming more popular and deserves to be given greater visibility in random users’ feeds. Larger audiences trigger the powerful organic growth that makes you important on the app.
              </p>
            )}
            <button
              onClick={() => setShowKeyReasons(!showKeyReasons)}
              className="mx-auto w-9 h-9 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-100 transition-colors"
            >
              <ChevronDown
                className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${showKeyReasons ? "rotate-180" : ""}`}
              />
            </button>
          </CardContent>
        </Card>

        {/* Column 3: Buy Instagram Followers */}
        <div className="p-6 flex flex-col justify-between ml-[-56%] min-h-[470px] ">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-4 h-4 fill-green-500 text-green-500" />
              <span className="text-sm font-semibold text-gray-800">5.0</span>
              <span className="text-sm text-gray-500">10,450+</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Buy Instagram Followers</h2>
            <div className="space-y-3 mb-6 text-sm text-left">
              {[
                "100% legitimate followers that keep your account safe",
                "Packages of 10-200,000 real followers available",
                "Premium and VIP follower upgrades available",
                "Immediate delivery",
                "Very affordable prices",
                "Safe and secure ordering process",
                "Safe ordering process",
                "24/7 support",
                "Unparalleled results"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CustomCheckIcon />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <Button
            className="w-full text-white font-bold py-3 rounded-lg text-sm"
            style={{
              background: "linear-gradient(135deg, #FF8C42 0%, #FF6B35 100%)",
              boxShadow: "0 4px 15px rgba(255, 107, 53, 0.3)"
            }}
          >
            BUY INSTAGRAM FOLLOWERS
          </Button>
        </div>
      </div>
    </div>
  );
}
