"use client";

import { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { Star } from "lucide-react";

const LikesPricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [currentNotification, setCurrentNotification] = useState(0);

  const notifications = [
    { likes: "50 Likes", time: "1 min ago" },
    { likes: "100 Likes", time: "2 min ago" },
    { likes: "250 Likes", time: "3 min ago" },
    { likes: "500 Likes", time: "5 min ago" },
  ];

  const plans = [
    { label: "50 Likes", basePrice: 3.99, discount: 0, tag: null },
    { label: "100", basePrice: 7.99, discount: 3, tag: null },
    { label: "250", basePrice: 15.99, discount: 3, tag: null },
    { label: "500", basePrice: 29.99, discount: 5, tag: null },
    { label: "1K", basePrice: 49.99, discount: 12, tag: "BEST SELLING" },
    { label: "2.5K", basePrice: 99.99, discount: 33, tag: null },
    { label: "5K", basePrice: 179.99, discount: 80, tag: null },
    { label: "10K", basePrice: 399.99, discount: 260, tag: null },
    { label: "20K", basePrice: 699.99, discount: 510, tag: "BULK PRICE 🔥" },
  ];

  useEffect(() => {
    setSelectedPlan(plans[0]);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNotification((prev) => (prev + 1) % notifications.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const calculateCurrentPrice = () => {
    if (!selectedPlan) return "0.00";
    return (selectedPlan.basePrice - selectedPlan.discount).toFixed(2);
  };

  const calculateSavedAmount = () => {
    if (!selectedPlan) return "0.00";
    return selectedPlan.discount.toFixed(2);
  };

  return (
    <main className="pt-24">
      <section className="bg-gradient-to-b from-purple-50 to-white py-12 mt-[-12%] md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
         <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center">
  Buy Instagram Views with{" "}
  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
    Instant Delivery
  </span>
</h1>
<div className="text-3xl mt-2 text-center">🚀</div>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Buzzoid's Instagram likes rapidly and safely boost engagement with your account, bringing in more
              viewers and making your posts more popular!{" "}
              <span className="text-green-500 font-semibold">Rated best site for Instagram growth!</span>
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-green-500 text-green-500" />
                ))}
              </div>
              <span className="text-gray-600 font-semibold">5.0</span>
            </div>

            <div className="bg-gradient-to-b from-green-100 to-green-50 rounded-xl px-4 py-3 h-12 overflow-hidden">
              <div
                className="transition-transform duration-500 ease-in-out"
                style={{ transform: `translateY(-${currentNotification * 48}px)` }}
              >
                {notifications.map((notification, index) => (
                  <div key={index} className="h-12 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm">
                        <span className="font-semibold">{notification.likes}</span> delivered
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-600">
                      <FaCheck className="w-3 h-3" />
                      {notification.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="w-[330px] mx-auto rounded-2xl shadow-lg p-4 bg-white space-y-4 mb-12">
            {/* Plan Options */}
            <div className="grid grid-cols-3 gap-3 text-center">
              {plans.map((plan, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedPlan(plan)}
                  className={`p-2 rounded-xl border cursor-pointer ${
                    selectedPlan?.label === plan.label && selectedPlan?.basePrice === plan.basePrice
                      ? "bg-orange-100 text-orange-600 font-semibold border-orange-500"
                      : "bg-gray-50 border-gray-200"
                  } hover:shadow-md transition`}
                >
                  {plan.tag && (
                    <div className="text-[10px] font-bold mb-1 px-1 rounded bg-green-500 text-white">
                      {plan.tag}
                    </div>
                  )}
                  <div className="text-sm font-medium">{plan.label}</div>
                  {plan.discount > 0 && (
                    <div className="text-[10px] text-gray-500">${plan.discount} OFF</div>
                  )}
                </div>
              ))}
            </div>

            {/* Price Info */}
            <div className="text-center space-y-1">
              <div className="text-2xl font-bold text-gray-900">
                ${calculateCurrentPrice()}
                <span className="line-through text-gray-400 text-sm ml-2">
                  ${selectedPlan ? selectedPlan.basePrice.toFixed(2) : "0.00"}
                </span>
              </div>
              <button className="bg-gradient-to-r from-orange-400 to-red-500 text-white text-sm px-6 py-2 rounded-full font-semibold shadow hover:scale-105 transition">
                BUY NOW
              </button>
              {selectedPlan && selectedPlan.discount > 0 && (
                <div className="text-[12px] text-green-500 font-semibold">
                  You Save ${calculateSavedAmount()}
                </div>
              )}
            </div>
          </div>

          {/* Features for High Quality Likes */}
<div className="w-[180px] md:w-[220px] h-[250px] mx-auto bg-white rounded-2xl p-4 border border-gray-300 shadow flex flex-col">
  <h3 className="w-full text-center text-sm md:text-base font-semibold text-white mb-4 py-2 rounded-md bg-gradient-to-br from-gray-400 to-black">
    High Quality Likes
  </h3>
  <ul className="space-y-3 text-xs md:text-sm text-gray-700 flex-grow">
    {[
      "Orders start in 60 seconds",
      "No password required",
      "Fast Delivery (gradual or instant)",
      "24/7 support",
    ].map((text, i) => (
      <li className="flex items-start gap-2" key={i}>
        <FaCheck className="text-green-500 mt-1" />
        <span>{text}</span>
      </li>
    ))}
    <li className="ml-6">
      <a
        href="#"
        className="text-blue-600 text-xs underline hover:text-blue-700 transition"
      >
        What’s the difference?
      </a>
    </li>
  </ul>
</div>




          {/* Total Delivered */}
          <div className="text-center text-2xl md:text-3xl font-bold mt-16">
            <div>We have proudly delivered over</div>
            <div className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
              9,840,561,378 likes
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LikesPricing;
