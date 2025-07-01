import React from "react";

const comparisonData = [
  {
    label: "Bot Followers",
    buzz: "None",
    other: "Often use bots",
    icon: "/icons/bot.png"
  },
  {
    label: "Pricing",
    buzz: "Transparent",
    other: "Hidden fees",
    icon: "/icons/pricing.png"
  },
  {
    label: "Support",
    buzz: "24/7 US-based",
    other: "Limited",
    icon: "/icons/support.png"
  },
  {
    label: "Payment",
    buzz: "All major cards",
    other: "Limited options",
    icon: "/icons/payment.png"
  },
  {
    label: "Delivery",
    buzz: "Fastest",
    other: "Often slow",
    icon: "/icons/delivery.png"
  },
  {
    label: "Login Info",
    buzz: "Not required",
    other: "Often required",
    icon: "/icons/login.png"
  },
  {
    label: "Established",
    buzz: "Since 2012",
    other: "Often newer",
    icon: "/icons/established.png"
  },
  {
    label: "Account Safety",
    buzz: "Guaranteed safe",
    other: "Often risky",
    icon: "/icons/safety.png"
  }
];

const HowWeCompare = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">How We Compare</h2>

      <div className="grid grid-cols-3 text-sm text-center border rounded-xl overflow-hidden">
        <div className="bg-gray-50">
          {comparisonData.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-4 py-5 border-b border-gray-200"
            >
              <img src={item.icon} alt="" className="w-5 h-5" />
              <span className="text-gray-800 font-medium">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="border-x border-orange-400 bg-white shadow-inner">
          <div className="flex justify-center items-center px-4 py-4 border-b border-orange-200">
            <img
              src="/icons/buzzoid-logo.png"
              alt="buzzoid"
              className="w-5 h-5 mr-2"
            />
            <span className="font-bold text-gray-900">buzzoid</span>
          </div>
          {comparisonData.map((item, i) => (
            <div
              key={i}
              className="flex justify-center items-center px-4 py-5 border-b border-orange-100"
            >
              <img
                src="/icons/check-orange.png"
                alt="check"
                className="w-4 h-4 mr-2"
              />
              <span className="text-gray-800 font-medium">{item.buzz}</span>
            </div>
          ))}
        </div>

        <div className="bg-gray-50">
          <div className="flex justify-center items-center px-4 py-4 border-b border-gray-200">
            <button className="text-gray-500 font-semibold bg-gray-100 px-4 py-1 rounded-md cursor-default">
              Others
            </button>
          </div>
          {comparisonData.map((item, i) => (
            <div
              key={i}
              className="flex justify-center items-center px-4 py-5 border-b border-gray-200"
            >
              <img
                src="/icons/cross.png"
                alt="cross"
                className="w-4 h-4 mr-2"
              />
              <span className="text-gray-500">{item.other}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeCompare;
