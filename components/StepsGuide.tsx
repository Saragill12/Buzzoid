import React from "react";

const steps = [
  {
    img: "https://buzzoid.com/wp-content/themes/buzz/v3/public_profile-uGbtw58k.svg",
    title: "Use public profile",
    desc: "Make sure your Instagram profile is set to 'public' so you can receive your followers."
  },
  {
    img: "https://buzzoid.com/wp-content/themes/buzz/v3/desired_package-U3Gx-Gy1.svg",
    title: "Choose your desired package",
    desc: "You can order between 10–200,000 high-quality, authentic IG followers."
  },
  {
    img: "https://buzzoid.com/wp-content/themes/buzz/v3/purchase-Crg8awkx.svg",
    title: "More powerful growth",
    desc: "Order 500–20,000 active followers or 500–200,000 high-quality interactions for the ultimate in growth power."
  },
  {
    img: "https://buzzoid.com/wp-content/themes/buzz/v3/username-BGzxHx-P.svg",
    title: "Confirm Purchase",
    desc: "Click the 'buy now' button."
  },
  {
    img: "https://buzzoid.com/wp-content/themes/buzz/v3/create_account-DuCE26Yh.svg",
    title: "Enter username",
    desc: "Enter your Instagram username (so we know where to send your followers) and your email address (optional — so we can send you a receipt) and click “continue."
  },
  {
    img: "https://buzzoid.com/wp-content/themes/buzz/v3/increased_visibility-lVnFewnO.svg",
    title: "Create account or checkout as guest",
    desc: "You can either create a Buzzoid account for future purchases or check out as a guest."
  },
  {
    img: "https://buzzoid.com/wp-content/themes/buzz/v3/build_trust-DXyWI8eW.svg",
    title: "Pay securely",
    desc: "Choose your secure payment method. Payment options include debit and credit cards, PayPal, and crypto."
  },
  {
    img: "https://buzzoid.com/wp-content/themes/buzz/v3/attract_foll-CX7QaIzt.svg",
    title: "That's it!",
    desc: "Your new followers will be delivered instantly and your growth will be underway!"
  }
];

const HowItWorks = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
       <div className="absolute -top-4 left-1/2 -translate-x-1/2">
        <svg width="42" height="35" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#hex-shadow)">
            <path
              d="M16 2L28 9V23L16 30L4 23V9L16 2Z"
              fill="white"
            />
            <path
              d="M16 7L24 12V20L16 25L8 20V12L16 7Z"
              fill="#E4E4E7"  // light gray inner fill
            />
            <path
              d="M16 2L28 9V23L16 30L4 23V9L16 2Z"
              stroke="#E7EAF0"
              strokeOpacity="0.62"
              strokeWidth="0.5"
            />
          </g>
          <defs>
            <filter id="hex-shadow" x="0" y="0" width="32" height="36" filterUnits="userSpaceOnUse">
              <feOffset dy="0" />
              <feGaussianBlur stdDeviation="0.5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.2 0 0 0 0 0.3 0 0 0 0 0.4 0 0 0 0.1 0"
              />
              <feBlend mode="normal" in2="BackgroundImageFix" result="dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="dropShadow" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
      <h2 className="text-4xl font-bold text-center mb-6">
        
        How it <span className="text-blue-500">works</span>
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Ordering real followers from Buzzoid is easy on our state-of-the-art platform. We keep the
        process simple (it should take less than a minute), so you receive your purchased
        followers and start building a more powerful Instagram presence almost immediately.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="border rounded-xl bg-white shadow-sm p-6 hover:shadow-md transition text-center"
          >
            <div className="flex justify-center mb-4">
              <img src={step.img} alt={step.title} className="w-30 h-30 object-contain" />
            </div>
            <h4 className="font-semibold text-md mb-2">{step.title}</h4>
            <p className="text-sm text-gray-600">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
