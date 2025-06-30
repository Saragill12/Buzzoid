"use client";

import React, { useEffect, useState } from "react";

const steps = [
  {
    step: "1",
    title: "Use public profile",
    img: "https://buzzoid.com/wp-content/themes/buzz/v3/public_profile-uGbtw58k.svg",
    desc: "Make sure your Instagram profile is set to “public” so you can receive your followers.",
  },
  {
    step: "2",
    title: "Choose your desired package",
    img: "https://buzzoid.com/wp-content/themes/buzz/v3/desired_package-U3Gx-Gy1.svg",
    desc: "You can order between 10–200,000 high-quality, authentic IG followers.",
  },
  {
    step: "3",
    title: "Confirm Purchase",
    img: "https://buzzoid.com/wp-content/themes/buzz/v3/purchase-Crg8awkx.svg",
    desc: 'Click the “buy now” button.',
  },
  {
    step: "4",
    title: "Enter username",
    img: "https://buzzoid.com/wp-content/themes/buzz/v3/username-BGzxHx-P.svg",
    desc: "Enter your Instagram username and your email address (optional) so we can send you a receipt.",
  },
  {
    step: "5",
    title: "Create account or checkout as guest",
    img: "https://buzzoid.com/wp-content/themes/buzz/v3/create_account-DuCE26Yh.svg",
    desc: "You can either create a Buzzoid account for future purchases or check out as a guest.",
  },
  {
    step: "6",
    title: "Pay securely",
    img: "https://buzzoid.com/wp-content/themes/buzz/v3/pay_securely-CGq61gtV.svg",
    desc: "Choose your secure payment method. Payment options include debit/credit cards, PayPal, and crypto.",
  },
  {
    step: "7",
    title: "That’s it!",
    img: "https://buzzoid.com/wp-content/themes/buzz/v3/pay_securely-CGq61gtV.svg",
    desc: "Your new followers will be delivered instantly and your growth will be underway!",
  },
  {
    step: "",
    title: "",
    img: "https://buzzoid.com/wp-content/themes/buzz/v3/done-C2aTj84N.svg",
    desc: (
      <span>
        For more powerful growth, you can order between{" "}
        <strong className="text-orange-500">500–20,000 active followers</strong>; these are premium followers who post
        regularly and carry more weight with the Instagram algorithms.
        <br />
        <br />
        Or you can order our highest-quality interactions, between{" "}
        <strong className="text-orange-500">500–20,000 VIP followers</strong>, for the ultimate in growth power.
      </span>
    ),
  },
];

export default function StepsGuide() {
  const [highlightStep, setHighlightStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightStep((prev) => (prev + 1) % steps.length);
    }, 1000); // Change arrow highlight every second
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-4 gap-5">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl border border-gray-200 p-5 text-center flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer"
          >
            {step.step && (
              <div className="text-sm font-bold text-gray-700 flex items-center gap-2 mb-2">
                <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center">
                  {step.step}
                </div>
                <span className="text-lg">
                  <span
                    className={`${
                      highlightStep === idx ? "text-orange-500 animate-pulse" : "text-gray-300"
                    }`}
                  >
                    &gt;&gt;&gt;
                  </span>
                </span>
              </div>
            )}

            <div className="mb-3">
              <img
                src={step.img}
                alt={step.title}
                className="w-12 h-12 object-contain mx-auto"
              />
            </div>

            <h3 className="font-semibold text-base text-gray-800 mb-2 text-center">
              {step.title}
            </h3>
            <p className="text-sm text-gray-600 text-center">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
