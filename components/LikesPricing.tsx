'use client';

import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { FaCheck } from 'react-icons/fa';

type Package = {
  label: string;
  discount?: string;
  highlight?: string;
};

type PackageCardProps = {
  label: string;
  discount?: string;
  highlight?: string;
  selected: boolean;
  onClick: () => void;
};

const packages: Package[] = [
  { label: '50 Likes' },
  { label: '100', discount: '$3 OFF' },
  { label: '250', discount: '$3 OFF' },
  { label: '500', discount: '$5 OFF' },
  { label: '1K', discount: '$12 OFF', highlight: 'BEST SELLING' },
  { label: '2.5K', discount: '$33 OFF' },
  { label: '5K', discount: '$80 OFF' },
  { label: '10K', discount: '$260 OFF' },
  { label: '20K', discount: '$510 OFF', highlight: 'BULK PRICE' },
];

const notifications = [
  { likes: '50 Likes', time: '1 min ago' },
  { likes: '100 Likes', time: '2 min ago' },
  { likes: '250 Likes', time: '3 min ago' },
  { likes: '500 Likes', time: '5 min ago' },
];

const boxClass = (type: string) =>
  `rounded-xl p-3 shadow border ${
    type === 'high' ? 'border-blue-500 bg-white' : 'border-gray-200 bg-gray-50'
  }`;

const PackageCard: React.FC<PackageCardProps> = ({
  label,
  discount,
  highlight,
  selected,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative w-full border rounded-xl text-center py-4 cursor-pointer transition-all ${
        selected
          ? 'border-pink-500 shadow-md'
          : 'border-gray-200 hover:border-pink-400'
      }`}
    >
      {highlight && (
        <span
          className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-semibold px-2 py-0.5 rounded-full text-white ${
            highlight === 'BEST SELLING' ? 'bg-green-500' : 'bg-black'
          }`}
        >
          {highlight}
        </span>
      )}
      <p className="text-lg font-semibold">{label}</p>
      {discount && <p className="text-xs text-orange-500 mt-1">{discount}</p>}
    </div>
  );
};

type PackagesSectionProps = {
  fromInsta?: boolean;
};

const PackagesSection: React.FC<PackagesSectionProps> = ({ fromInsta = true }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [currentNotification, setCurrentNotification] = useState<number>(0);
  const activeTab = 'high'; // assuming fixed for now as original logic depends on more state

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNotification((prev) => (prev + 1) % notifications.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Heading */}
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

      {/* Stars + Notification + Trust */}
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

        <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg">
          <div className="w-10 h-6 bg-gray-900 rounded flex items-center justify-center">
            <span className="text-white text-xs font-bold">Pay</span>
          </div>
        </div>
      </div>

      {/* Tab + Package Cards */}
      <div className="max-w-md  mx-auto py-8">
        {fromInsta && (
          <div className="flex items-center gap-8 text-sm font-semibold rounded-lg overflow-hidden">
            
            <button className="flex-1 h-20 px-4 py-2 rounded-t-2xl bg-white border border-gray-300 border-b-0">
              High-Quality Likes
            </button>
            <button className="flex-1 px-4 h-20 py-2 rounded-t-2xl border border-gray-300 border-b-0 bg-gradient-to-r from-blue-500 to-pink-500 text-white relative">
              Premium Likes
            </button>
          </div>
        )}
        <section className="rounded-b-2xl shadow-xl p-6 border border-gray-300 border-t-0">
          <div className="grid grid-cols-3 gap-4">
            {packages.map((pkg, index) => (
              <PackageCard
                key={index}
                {...pkg}
                selected={index === selectedIndex}
                onClick={() => setSelectedIndex(index)}
              />
            ))}
          </div>

          <div className="text-center mt-6">
            <p className="text-2xl font-bold text-gray-900">
              <span className="text-pink-600">$1.99</span>{' '}
              <span className="line-through text-gray-400 text-sm">$3.99</span>
            </p>
            <button className="w-full mt-4 bg-gradient-to-r from-orange-400 to-pink-500 text-white py-3 rounded-xl font-bold shadow-md hover:opacity-90 transition">
              BUY NOW
            </button>
            <p className="text-sm text-orange-500 mt-2">You Save $2.00</p>
          </div>

          {/* Quality Boxes */}
          <div className="grid md:grid-cols-2 gap-4 mt-10 w-full md:max-w-2xl mx-auto">
            {/* High Quality Box */}
            <div className={boxClass('high') + ' w-full md:w-[240px]'}>
              <h3 className="text-md font-semibold text-gray-900 mb-3">High Quality Likes</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-500 mt-1" />
                  <span><strong>REAL</strong> likes from <strong>REAL</strong> people</span>
                </li>
                <li className="ml-6"><a href="#" className="text-blue-600 text-sm underline hover:text-blue-700 transition">What’s the difference?</a></li>
                <li className="flex items-start gap-2"><FaCheck className="text-green-500 mt-1" /><span>Guaranteed <strong>Instant Delivery</strong></span></li>
                <li className="flex items-start gap-2"><FaCheck className="text-green-500 mt-1" /><span>Option to <strong>split likes</strong></span></li>
                <li className="flex items-start gap-2"><FaCheck className="text-green-500 mt-1" /><span>Includes video views</span></li>
                <li className="flex items-start gap-2"><FaCheck className="text-green-500 mt-1" /><span><strong>No password</strong> required</span></li>
                <li className="flex items-start gap-2"><FaCheck className="text-green-500 mt-1" /><span>Fast Delivery (<strong>gradual or instant</strong>)</span></li>
                <li className="flex items-start gap-2"><FaCheck className="text-green-500 mt-1" /><span><strong>24/7</strong> support</span></li>
              </ul>
            </div>

            {/* Premium Box */}
            <div className={boxClass('premium') + ' w-full md:w-[240px]'}>
              <div className="rounded-t-xl -mx-3 -mt-3 px-3 pt-3 pb-2 bg-gradient-to-br from-blue-400 to-indigo-600 w-[120px] text-white">
                <h3 className="text-md font-semibold mb-1 flex items-center gap-1">
                  Premium Likes <span className="text-blue-200 text-base">❓</span>
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mt-3">
                <li className="flex items-start gap-2"><FaCheck className="text-green-500 mt-1" /><span><strong>REAL</strong> likes from <strong>ACTIVE</strong> people</span></li>
                <li className="ml-6"><a href="#" className="text-blue-600 text-sm underline hover:text-blue-700 transition">What’s the difference?</a></li>
                <li className="flex items-start gap-2"><FaCheck className="text-green-500 mt-1" /><span>Increased chance to reach <strong>Explore Page</strong></span></li>
                <li className="flex items-start gap-2"><FaCheck className="text-green-500 mt-1" /><span>Guaranteed <strong>Instant Delivery</strong></span></li>
                <li className="flex items-start gap-2"><FaCheck className="text-green-500 mt-1" /><span>Option to <strong>split likes</strong></span></li>
                <li className="flex items-start gap-2"><FaCheck className="text-green-500 mt-1" /><span>Includes video views</span></li>
                <li className="flex items-start gap-2"><FaCheck className="text-green-500 mt-1" /><span><strong>No password</strong> required</span></li>
                <li className="flex items-start gap-2"><FaCheck className="text-green-500 mt-1" /><span>Fast Delivery (<strong>gradual or instant</strong>)</span></li>
                <li className="flex items-start gap-2"><FaCheck className="text-green-500 mt-1" /><span><strong>24/7</strong> support</span></li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PackagesSection;
