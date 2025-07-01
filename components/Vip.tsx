'use client';

import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { FaCheck } from 'react-icons/fa';

type Package = {
  label: string;
  discount?: string;
  highlight?: string;
  price?: number;
  sale?: number;
};

type PackageCardProps = {
  label: string;
  discount?: string;
  highlight?: string;
  selected: boolean;
  onClick: () => void;
};

const packages: Package[] = [
  { label: '50 Likes', price: 3.99, sale: 1.99 },
  { label: '100', discount: '$3 OFF', price: 6.99, sale: 3.99 },
  { label: '250', discount: '$3 OFF', price: 10.99, sale: 7.99 },
  { label: '500', discount: '$5 OFF', price: 19.99, sale: 14.99 },
  { label: '1K', discount: '$12 OFF', highlight: 'BEST SELLING', price: 39.99, sale: 27.99 },
  { label: '2.5K', discount: '$33 OFF', price: 99.99, sale: 66.99 },
  { label: '5K', discount: '$80 OFF', price: 199.99, sale: 119.99 },
  { label: '10K', discount: '$260 OFF', price: 399.99, sale: 139.99 },
  { label: '20K', discount: '$510 OFF', highlight: 'BULK PRICE', price: 799.99, sale: 289.99 },
];

const notifications = [
  { likes: '50 Likes', time: '1 min ago' },
  { likes: '100 Likes', time: '2 min ago' },
  { likes: '250 Likes', time: '3 min ago' },
  { likes: '500 Likes', time: '5 min ago' },
];

const PackageCard: React.FC<PackageCardProps> = ({
  label,
  discount,
  highlight,
  selected,
  onClick,
}) => (
  <div
    onClick={onClick}
    className={`relative w-full border rounded-xl text-center py-4 cursor-pointer transition-all ${
      selected ? 'border-pink-500 shadow-md' : 'border-gray-200 hover:border-pink-400'
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

const PackagesSection: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [currentNotification, setCurrentNotification] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'high' | 'active' | 'vip'>('active');

  const selectedPackage = packages[selectedIndex];
  const basePrice = selectedPackage.price ?? 3.99;
  const salePrice = selectedPackage.sale ?? 1.99;
  const discountAmount = (basePrice - salePrice).toFixed(2);

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
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center">
          Buy Instagram Likes with{' '}
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Instant Delivery
          </span>
        </h1>
        <div className="text-3xl mt-2 text-center">🚀</div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Buzzoid's Instagram likes rapidly and safely boost engagement with your account, bringing in more
          viewers and making your posts more popular!{' '}
          <span className="text-green-500 font-semibold">Rated best site for Instagram growth!</span>
        </p>
      </div>

      {/* Stars + Notification */}
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

      {/* Tabs */}
      <div className="max-w-md mx-auto py-8">
        <div className="flex items-center gap-4 text-sm font-semibold rounded-lg overflow-hidden">
          <button
            onClick={() => setActiveTab('high')}
            className={`flex-1 h-20 px-4 py-2 rounded-t-2xl border border-gray-300 border-b-0 ${
              activeTab === 'high' ? 'text-black bg-white' : 'text-gray-500 bg-gray-100'
            }`}
          >
            High-Quality
          </button>

          <button
            onClick={() => setActiveTab('active')}
            className={`flex-1 h-20 px-4 py-2 rounded-t-2xl border border-gray-300 border-b-0 ${
              activeTab === 'active' ? 'text-white' : 'text-gray-500 bg-gray-100'
            }`}
            style={
              activeTab === 'active'
                ? { backgroundImage: 'linear-gradient(to right, #296FF9, #59CEFC)' }
                : undefined
            }
          >
            Active
          </button>

     <button
  onClick={() => setActiveTab('vip')}
  className={`flex-1 h-20 px-4 py-2 rounded-t-2xl border border-gray-300 border-b-0 ${
    activeTab === 'vip' ? 'text-white' : 'text-gray-500 bg-gray-100'
  }`}
  style={
    activeTab === 'vip'
      ? { backgroundImage: 'linear-gradient(to right, #952EFF, rgba(149, 46, 255, 0))' }
      : undefined
  }
>
  VIP
</button>

        </div>

        {/* Package Cards */}
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
              <span className="text-pink-600">${salePrice.toFixed(2)}</span>{' '}
              <span className="line-through text-gray-400 text-sm">${basePrice.toFixed(2)}</span>
            </p>
            <button className="w-full mt-4 bg-gradient-to-r from-orange-400 to-pink-500 text-white py-3 rounded-xl font-bold shadow-md hover:opacity-90 transition">
              BUY NOW
            </button>
            <p className="text-sm text-orange-500 mt-2">You Save ${discountAmount}</p>
          </div>
        </section>
      </div>

      {/* Feature Boxes */}
      <div className="grid md:grid-cols-3 gap-4  mt-10 w-full md:max-w-2xl mx-auto">
        <div
          className={`w-full p-3 rounded-xl shadow border ${
            activeTab === 'high' ? 'border-red-500 bg-white' : 'border-gray-200 bg-gray-50'
          }`}
        >
          <h3 className="text-md font-semibold rounded-t-xl h-[80px] text-gray-900 mb-3">High Quality Followers</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2"><FaCheck className="text-green-500 mt-1" />REAL users</li>
            <li className="flex items-start gap-2"><FaCheck className="text-green-500 mt-1" />Instant Delivery</li>
            <li className="flex items-start gap-2"><FaCheck className="text-green-500 mt-1" />Split Likes Option</li>
            <li className="flex items-start gap-2"><FaCheck className="text-green-500 mt-1" />Split Likes Option</li>
          </ul>
        </div>

        <div
          className={`w-full p-3 rounded-xl shadow border ${
            activeTab === 'active' ? 'border-blue-500 bg-white' : 'border-gray-200 bg-gray-50'
          }`}
        >
          <div className="rounded-t-xl -mx-3 -mt-3 px-3 pt-3 pb-2 text-white"
            style={{ backgroundImage: 'linear-gradient(to bottom right, #296FF9, #59CEFC)' }}>
            <h3 className="text-md font-semibold mb-1 flex items-center gap-1">
              Active Followers <span className="text-blue-200 text-base">❓</span>
            </h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-700 mt-3">
            <li className="flex items-start gap-2"><FaCheck className="text-green-500 mt-1" />Higher engagement</li>
            <li className="flex items-start gap-2"><FaCheck className="text-green-500 -mt-1" />Explore Page Reach</li>
                        <li className="flex items-start gap-2"><FaCheck className="text-green-500 mt-1" />Guaranteed delivery</li>
            <li className="flex items-start gap-2"><FaCheck className="text-green-500 mt-1" />30 day refills</li>
            <li className="flex items-start gap-2"><FaCheck className="text-green-500 mt-1" />No password required</li>
            <li className="flex items-start gap-2"><FaCheck className="text-green-500 mt-1" />24/7 support</li>

                  </ul>
        </div>

        <div
          className={`w-full p-3 rounded-xl shadow border ${
            activeTab === 'vip' ? 'border-purple-600 bg-white' : 'border-gray-200 bg-gray-50'
          }`}
        >
          <div className="rounded-t-xl -mx-3 -mt-3 px-3 pt-3 pb-2 text-white"
style={{ backgroundImage: 'linear-gradient(to bottom right, #952EFF, rgba(149, 46, 255, 0))' }}>
            <h3 className="text-md font-semibold mb-1 flex items-center gap-1">
              Exclusive / VIP <span className="text-yellow-100 text-base">⭐</span>
            </h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-700 mt-3">
            <li className="flex items-start gap-2"><FaCheck className="text-green-500 mt-1" />Manual review</li>
            <li className="flex items-start gap-2"><FaCheck className="text-green-500 mt-1" />Highest trust score</li>
             <li className="flex items-start gap-2"><FaCheck className="text-green-500 mt-1" />Manual review</li>
            <li className="flex items-start gap-2"><FaCheck className="text-green-500 mt-1" />Highest trust score</li> <li className="flex items-start gap-2"><FaCheck className="text-green-500 mt-1" />Manual review</li>
            <li className="flex items-start gap-2"><FaCheck className="text-green-500 mt-1" />Highest trust score</li>
                        <li className="flex items-start gap-2"><FaCheck className="text-green-500 mt-1" />Highest trust score</li>

          </ul>
        </div>
      </div>

      {/* Delivery count */}
      <div className="text-center text-2xl md:text-3xl  font-bold mt-16 leading-snug">
        <div>We have proudly delivered over</div>
        <div className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
          9,840,561,378 likes
        </div>
      </div>
    </div>
  );
};

export default PackagesSection;
