'use client';

import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { FaCheck, FaFireAlt } from "react-icons/fa";

const plans = {
  high: [
    { label: "50 Likes", basePrice: 3.99, discount: 2.0 },
    { label: "100 Likes", basePrice: 5.99, discount: 3.0 },
    { label: "500 Likes", basePrice: 9.99, discount: 5.0, tag: "BEST 🔥" },
  ],
  premium: [
    { label: "50 Likes", basePrice: 5.99, discount: 2.0 },
    { label: "100 Likes", basePrice: 9.99, discount: 4.0 },
    { label: "500 Likes", basePrice: 15.99, discount: 6.0, tag: "SUPER DEAL 🔥" },
  ],
};

export default function BuyLikesSection() {
  const [activeTab, setActiveTab] = useState('high');
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [currentNotification, setCurrentNotification] = useState(0);

  const calculateCurrentPrice = () =>
    selectedPlan ? (selectedPlan.basePrice - selectedPlan.discount).toFixed(2) : '0.00';

  const calculateSavedAmount = () =>
    selectedPlan ? selectedPlan.discount.toFixed(2) : '0.00';

  const boxClass = (type) =>
    `rounded-xl p-5 shadow border ${
      activeTab === type ? 'border-blue-500 bg-white' : 'border-gray-200 bg-gray-50'
    }`;

  const notifications = [
    { likes: '50 Likes', time: '1 min ago' },
    { likes: '100 Likes', time: '2 min ago' },
    { likes: '250 Likes', time: '3 min ago' },
    { likes: '500 Likes', time: '5 min ago' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNotification((prev) => (prev + 1) % notifications.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-b from-purple-50 to-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Buy Instagram Likes with{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Instant Delivery
            </span>{' '}
            🚀
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Buzzoid's Instagram likes rapidly and safely boost engagement with your account, bringing in more
            viewers and making your posts more popular!{' '}
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

          {/* Live Notifications */}
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

          <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg">
            <div className="w-10 h-6 bg-gray-900 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">Pay</span>
            </div>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="w-[330px] mx-auto rounded-2xl shadow-lg p-4 bg-white space-y-4">
          <div className="flex w-full bg-gray-100 rounded-xl p-1">
            <button
              onClick={() => setActiveTab('high')}
              className={`w-1/2 py-2 text-sm font-semibold rounded-xl transition-all ${
                activeTab === 'high'
                  ? 'bg-white border border-orange-500 text-orange-500'
                  : 'text-gray-600'
              }`}
            >
              High-Quality Likes
            </button>
            <button
              onClick={() => setActiveTab('premium')}
              className={`w-1/2 py-2 text-sm font-semibold rounded-xl relative transition-all ${
                activeTab === 'premium'
                  ? 'bg-white border border-blue-500 text-blue-500'
                  : 'text-gray-600'
              }`}
            >
              Premium Likes
              {activeTab !== 'premium' && (
                <span className="absolute -top-2 -right-2 text-[10px] bg-red-500 text-white px-1 rounded-full">
                  Recommended
                </span>
              )}
            </button>
          </div>

          {/* Plan Grid */}
          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            {plans[activeTab].map((plan, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedPlan(plan)}
                className={`p-1.5 rounded-xl border text-xs cursor-pointer
                  ${selectedPlan?.label === plan.label && selectedPlan?.basePrice === plan.basePrice
                    ? activeTab === 'high'
                      ? 'bg-orange-100 text-orange-600 font-semibold border-orange-500'
                      : 'bg-blue-100 text-blue-600 font-semibold border-blue-500'
                    : 'bg-gray-50 border-gray-200'
                  } hover:shadow-md transition`}
              >
                {plan.tag && (
                  <div className={`text-[10px] font-bold mb-1 px-1 rounded bg-green-500 text-white flex items-center justify-center gap-1`}>
                    {plan.tag.includes('🔥') && <FaFireAlt />}
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

          {/* Price & CTA */}
          <div className="text-center space-y-1">
            <div className="text-2xl font-bold text-gray-900">
              ${calculateCurrentPrice()}
              <span className="line-through text-gray-400 text-sm ml-2">
                ${selectedPlan?.basePrice.toFixed(2) ?? '0.00'}
              </span>
            </div>
            <button className="bg-gradient-to-r from-orange-400 to-red-500 text-white text-sm px-6 py-2 rounded-full font-semibold shadow hover:scale-105 transition">
              BUY NOW
            </button>
            {selectedPlan && (
              <div className="text-[12px] text-green-500 font-semibold">
                You Save ${calculateSavedAmount()}
              </div>
            )}
          </div>
        </div>

        {/* Feature Boxes */}
        <div className="grid md:grid-cols-2 gap-5 mt-10 w-full md:w-[70%] mx-auto">
          <div className={boxClass('high')}>
            <h3 className="text-lg font-semibold w-50 text-gray-900 mb-4">High Quality Likes</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2"><FaCheck className="text-green-500 mt-1" /><span><strong>REAL</strong> likes from <strong>REAL</strong> people</span></li>
              <li className="ml-6"><a href="#" className="text-blue-600 text-sm underline hover:text-blue-700 transition">What’s the difference?</a></li>
              <li className="flex items-start gap-2"><FaCheck className="text-green-500 mt-1" /><span>Guaranteed <strong>Instant Delivery</strong></span></li>
              <li className="flex items-start gap-2"><FaCheck className="text-green-500 mt-1" /><span>Option to <strong>split likes</strong> on multiple pictures</span></li>
              <li className="flex items-start gap-2"><FaCheck className="text-green-500 mt-1" /><span>Includes video views</span></li>
              <li className="flex items-start gap-2"><FaCheck className="text-green-500 mt-1" /><span><strong>No password</strong> required</span></li>
              <li className="flex items-start gap-2"><FaCheck className="text-green-500 mt-1" /><span>Fast Delivery (<strong>gradual or instant</strong>)</span></li>
              <li className="flex items-start gap-2"><FaCheck className="text-green-500 mt-1" /><span><strong>24/7</strong> support</span></li>
            </ul>
          </div>

          <div className={boxClass('premium')}>
            <div className="rounded-t-xl -mx-5 -mt-5 px-5 pt-5 pb-3 bg-gradient-to-br from-blue-400 to-indigo-600 text-white">
              <h3 className="text-lg font-semibold mb-1 flex items-center gap-1">
                Premium Likes <span className="text-blue-200 text-base">❓</span>
              </h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-700 mt-4">
              <li className="flex items-start gap-2"><FaCheck className="text-green-500 mt-1" /><span><strong>REAL</strong> likes from <strong>ACTIVE</strong> people</span></li>
              <li className="ml-6"><a href="#" className="text-blue-600 text-sm underline hover:text-blue-700 transition">What’s the difference?</a></li>
              <li className="flex items-start gap-2"><FaCheck className="text-green-500 mt-1" /><span>Increased chance to reach <strong>Explore Page</strong></span></li>
              <li className="flex items-start gap-2"><FaCheck className="text-green-500 mt-1" /><span>Guaranteed <strong>Instant Delivery</strong></span></li>
              <li className="flex items-start gap-2"><FaCheck className="text-green-500 mt-1" /><span>Option to <strong>split likes</strong> on multiple pictures</span></li>
              <li className="flex items-start gap-2"><FaCheck className="text-green-500 mt-1" /><span>Includes video views</span></li>
              <li className="flex items-start gap-2"><FaCheck className="text-green-500 mt-1" /><span><strong>No password</strong> required</span></li>
              <li className="flex items-start gap-2"><FaCheck className="text-green-500 mt-1" /><span>Fast Delivery (<strong>gradual or instant</strong>)</span></li>
              <li className="flex items-start gap-2"><FaCheck className="text-green-500 mt-1" /><span><strong>24/7</strong> support</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
