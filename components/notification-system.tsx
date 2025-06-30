"use client"

import { useState, useEffect } from "react"

const notifications = [
  { text: "1000 likes", time: "2 mins ago" },
  { text: "500 views", time: "6 mins ago" },
  { text: "1000 followers", time: "43 mins ago" },
  { text: "5000 followers", time: "28 mins ago" },
  { text: "500 followers", time: "19 mins ago" },
]

export default function NotificationSystem() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % notifications.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-12 md:h-14 rounded-xl bg-gradient-to-b from-emerald-100 to-emerald-50 px-3 xs:px-4 overflow-hidden">
      <div
        className="transition-transform duration-500 flex flex-col"
        style={{ transform: `translateY(-${currentIndex * 100}%)` }}
      >
        {notifications.map((notification, index) => (
          <div key={index} className="h-12 md:h-14 flex items-center justify-between text-sm px-2">
            <div className="flex items-center">
              <div className="relative">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75"></span>
                <span className="relative block w-2 h-2 rounded-full bg-emerald-500"></span>
              </div>
              <span className="ml-2">
                <span className="font-semibold">{notification.text}</span> delivered
              </span>
            </div>
            <div className="flex items-center text-xs text-gray-600">
              <svg width="12" height="9" viewBox="0 0 12 9" fill="none" className="mr-1">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.9436 0.563382C11.4318 1.05154 11.4318 1.84299 10.9436 2.33115L5.5712 7.70357C5.08305 8.19172 4.29161 8.19172 3.80345 7.70358L0.799179 4.69944C0.311014 4.21129 0.310997 3.41984 0.799143 2.93167C1.28729 2.44351 2.07874 2.44349 2.56691 2.93164L4.68729 5.05193L9.17585 0.563382C9.664 0.0752268 10.4555 0.0752268 10.9436 0.563382Z"
                  fill="currentColor"
                />
              </svg>
              <span>{notification.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
