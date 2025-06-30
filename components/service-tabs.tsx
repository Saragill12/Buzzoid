"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Counter from "@/components/counter"

const services = {
  instagram: {
    name: "Instagram Services",
    icon: (
      <svg version="1.1" viewBox="0 0 551.034 551.034" className="w-full h-full">
        <defs>
          <linearGradient id="instagram-gradient" x1="275.517" y1="4.5714" x2="275.517" y2="549.7202">
            <stop offset="0" stopColor="#e09b3d" />
            <stop offset="0.3" stopColor="#c74c4d" />
            <stop offset="0.6" stopColor="#c21975" />
            <stop offset="1" stopColor="#7024c4" />
          </linearGradient>
        </defs>
        <path
          fill="url(#instagram-gradient)"
          d="M386.878,0H164.156C73.64,0,0,73.64,0,164.156v222.722c0,90.516,73.64,164.156,164.156,164.156h222.722c90.516,0,164.156-73.64,164.156-164.156V164.156C551.033,73.64,477.393,0,386.878,0z M495.6,386.878c0,60.045-48.677,108.722-108.722,108.722H164.156c-60.045,0-108.722-48.677-108.722-108.722V164.156c0-60.046,48.677-108.722,108.722-108.722h222.722c60.045,0,108.722,48.676,108.722,108.722L495.6,386.878L495.6,386.878z"
        />
        <path
          fill="url(#instagram-gradient)"
          d="M275.517,133C196.933,133,133,196.933,133,275.516s63.933,142.517,142.517,142.517S418.034,354.1,418.034,275.516S354.101,133,275.517,133z M275.517,362.6c-48.095,0-87.083-38.988-87.083-87.083s38.989-87.083,87.083-87.083c48.095,0,87.083,38.988,87.083,87.083C362.6,323.611,323.611,362.6,275.517,362.6z"
        />
        <circle fill="url(#instagram-gradient)" cx="418.306" cy="134.072" r="34.149" />
      </svg>
    ),
    rating: 5.0,
    counter: 3450,
    services: ["Buy Instagram Followers", "Buy Instagram Likes", "Buy Instagram Views", "Buy Instagram Comments"],
  },
  tiktok: {
    name: "TikTok Services",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="w-full h-full">
        <path
          d="M8.45095 19.7926C8.60723 18.4987 9.1379 17.7743 10.1379 17.0317C11.5688 16.0259 13.3561 16.5948 13.3561 16.5948V13.2197C13.7907 13.2085 14.2254 13.2343 14.6551 13.2966V17.6401C14.6551 17.6401 12.8683 17.0712 11.4375 18.0775C10.438 18.8196 9.90623 19.5446 9.7505 20.8385C9.74562 21.5411 9.87747 22.4595 10.4847 23.2536C10.3345 23.1766 10.1815 23.0889 10.0256 22.9905C8.68807 22.0923 8.44444 20.7449 8.45095 19.7926Z"
          fill="#EE1D52"
        />
        <path
          d="M22.0352 6.97898C21.0509 5.90039 20.6786 4.81139 20.5441 4.04639H21.7823C21.7823 4.04639 21.5354 6.05224 23.3347 8.02482L23.3597 8.05134C22.8747 7.7463 22.43 7.38624 22.0352 6.97898Z"
          fill="#EE1D52"
        />
        <path
          d="M28 10.0369V14.293C28 14.293 26.42 14.2312 25.2507 13.9337C23.6179 13.5176 22.5685 12.8795 22.5685 12.8795C22.5685 12.8795 21.8436 12.4245 21.785 12.3928V21.1817C21.785 21.6711 21.651 22.8932 21.2424 23.9125C20.709 25.246 19.8859 26.1212 19.7345 26.3001C19.7345 26.3001 18.7334 27.4832 16.9672 28.28C15.3752 28.9987 13.9774 28.9805 13.5596 28.9987C13.5596 28.9987 11.1434 29.0944 8.96915 27.6814C8.49898 27.3699 8.06011 27.0172 7.6582 26.6277L7.66906 26.6355C9.84383 28.0485 12.2595 27.9528 12.2595 27.9528C12.6779 27.9346 14.0756 27.9528 15.6671 27.2341C17.4317 26.4374 18.4344 25.2543 18.4344 25.2543C18.5842 25.0754 19.4111 24.2001 19.9423 22.8662C20.3498 21.8474 20.4849 20.6247 20.4849 20.1354V11.3475C20.5435 11.3797 21.2679 11.8347 21.2679 11.8347C21.2679 11.8347 22.3179 12.4734 23.9506 12.8889C25.1204 13.1864 26.7 13.2483 26.7 13.2483V9.91314C27.2404 10.0343 27.7011 10.0671 28 10.0369Z"
          fill="#EE1D52"
        />
        <path
          d="M26.7009 9.91314V13.2472C26.7009 13.2472 25.1213 13.1853 23.9515 12.8879C22.3188 12.4718 21.2688 11.8337 21.2688 11.8337C21.2688 11.8337 20.5444 11.3787 20.4858 11.3464V20.1364C20.4858 20.6258 20.3518 21.8484 19.9432 22.8672C19.4098 24.2012 18.5867 25.0764 18.4353 25.2553C18.4353 25.2553 17.4337 26.4384 15.668 27.2352C14.0765 27.9539 12.6788 27.9357 12.2604 27.9539C12.2604 27.9539 9.84473 28.0496 7.66995 26.6366L7.6591 26.6288C7.42949 26.4064 7.21336 26.1717 7.01177 25.9257C6.31777 25.0795 5.89237 24.0789 5.78547 23.7934C5.78529 23.7922 5.78529 23.791 5.78547 23.7898C5.61347 23.2937 5.25209 22.1022 5.30147 20.9482C5.38883 18.9122 6.10507 17.6625 6.29444 17.3494C6.79597 16.4957 7.44828 15.7318 8.22233 15.0919C8.90538 14.5396 9.6796 14.1002 10.5132 13.7917C11.4144 13.4295 12.3794 13.2353 13.3565 13.2197V16.5948C13.3565 16.5948 11.5691 16.028 10.1388 17.0317C9.13879 17.7743 8.60812 18.4987 8.45185 19.7926C8.44534 20.7449 8.68897 22.0923 10.0254 22.991C10.1813 23.0898 10.3343 23.1775 10.4845 23.2541C10.7179 23.5576 11.0021 23.8221 11.3255 24.0368C12.631 24.8632 13.7249 24.9209 15.1238 24.3842C16.0565 24.0254 16.7586 23.2167 17.0842 22.3206C17.2888 21.7611 17.2861 21.1978 17.2861 20.6154V4.04639H20.5417C20.6763 4.81139 21.0485 5.90039 22.0328 6.97898C22.4276 7.38624 22.8724 7.7463 23.3573 8.05134C23.5006 8.19955 24.2331 8.93231 25.1734 9.38216C25.6596 9.61469 26.1722 9.79285 26.7009 9.91314Z"
          fill="#000000"
        />
      </svg>
    ),
    rating: 5.0,
    counter: 2720,
    services: ["Buy TikTok Followers", "Buy TikTok Likes", "Buy TikTok Views"],
  },
  youtube: {
    name: "YouTube Services",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="w-full h-full">
        <path
          fill="red"
          d="M14.712 4.633a1.754 1.754 0 00-1.234-1.234C12.382 3.11 8 3.11 8 3.11s-4.382 0-5.478.289c-.6.161-1.072.634-1.234 1.234C1 5.728 1 8 1 8s0 2.283.288 3.367c.162.6.635 1.073 1.234 1.234C3.618 12.89 8 12.89 8 12.89s4.382 0 5.478-.289a1.754 1.754 0 001.234-1.234C15 10.272 15 8 15 8s0-2.272-.288-3.367z"
        />
        <path fill="#ffffff" d="M6.593 10.11l3.644-2.098-3.644-2.11v4.208z" />
      </svg>
    ),
    rating: 5.0,
    counter: 1560,
    services: ["Buy YouTube Views", "Buy YouTube Subscribers", "Buy YouTube Likes"],
  },
}

export default function ServiceTabs() {
  const [activeTab, setActiveTab] = useState("instagram")

  return (
    <>
      <div role="tablist" className="relative grid h-16 grid-cols-3 sm:h-20">
        {Object.entries(services).map(([key, service], index) => (
          <div
            key={key}
            role="tab"
            aria-selected={activeTab === key}
            className={`group/tab relative cursor-pointer ${activeTab === key ? "active" : ""}`}
            onClick={() => setActiveTab(key)}
          >
            <div className="relative z-[1] flex h-full flex-col items-center justify-center gap-x-2 gap-y-1 px-4 md:flex-row lg:gap-x-4">
              <div className="shrink-0 w-8 h-8">{service.icon}</div>
              <div className="flex flex-col gap-y-1.5">
                <div className="hidden whitespace-nowrap text-sm font-medium text-gray-700 group-[.active]/tab:font-semibold sm:block">
                  {service.name}
                  {key === "youtube" && (
                    <span className="ml-1.5 h-4 rounded-full bg-gradient-to-r from-pink-400 to-red-500 px-1.5 text-[10px] font-bold uppercase leading-4 text-white">
                      NEW
                    </span>
                  )}
                </div>
                <div className="hidden md:block">
                  <div className="inline-flex items-center text-xs font-semibold">
                    <div className="shrink-0 inline-flex items-center gap-1.5 rounded-full border border-gray-400/50 bg-white px-2 py-1 shadow-sm">
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                        <path
                          d="M1.13889 5.66053C0.705409 5.22261 0.956153 4.47778 1.56621 4.39118L4.3102 4.00163C4.55596 3.96674 4.76851 3.81244 4.8778 3.58956L6.10512 1.08674C6.38135 0.523439 7.18608 0.528536 7.45515 1.09529L8.65196 3.61619C8.75836 3.84032 8.96879 3.99727 9.21396 4.03536L11.9523 4.46081C12.5612 4.55542 12.8021 5.30355 12.3628 5.73572L10.3475 7.71845C10.1745 7.88865 10.0946 8.13208 10.1331 8.3717L10.5845 11.1794C10.6834 11.7945 10.0323 12.2547 9.48544 11.9563L7.07414 10.6402C6.85338 10.5197 6.5869 10.518 6.36458 10.6356L3.93775 11.9194C3.38697 12.2108 2.74182 11.7419 2.84891 11.1281L3.33717 8.32956C3.37889 8.09046 3.30224 7.84595 3.13148 7.67346L1.13889 5.66053Z"
                          fill="#38C793"
                        />
                      </svg>
                      <span>{service.rating}</span>
                    </div>
                    <Counter
                      value={service.counter}
                      suffix="+"
                      className="items-center rounded-r-full bg-gray-400 bg-opacity-20 px-2 py-1 text-gray-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {activeTab === key && (
              <div aria-hidden="true" className="absolute inset-0 z-0">
                <svg
                  width="354"
                  height="80"
                  viewBox="0 0 354 80"
                  preserveAspectRatio="none"
                  fill="none"
                  className={`absolute inset-0 w-full h-full ${
                    index === 0 ? "right-0" : index === 1 ? "left-1/2 -translate-x-1/2" : "left-0"
                  }`}
                >
                  <path
                    d={
                      index === 0
                        ? "M0 0C0 0 178.748 0 243.656 0C308.564 0 286.595 80 354 80C332.031 80 0 80 0 80V0Z"
                        : index === 1
                          ? "M242.279 0.748047C258.48 0.748047 269.284 5.73701 277.413 13.2346C285.527 20.7189 290.963 30.6931 296.45 40.6152C301.946 50.553 307.494 60.442 315.839 67.8544C324.171 75.2551 335.306 80.1996 352 80.1996V80.4738C352 80.7483 351.998 80.748 351.996 80.748H0.00425697C0.00174284 80.748 0 80.7483 0 80.4738V80.1996C16.6937 80.1996 27.829 75.2551 36.1608 67.8544C44.5058 60.442 50.0544 50.553 55.5502 40.6152C61.0373 30.6931 66.4732 20.7189 74.5874 13.2346C82.7161 5.73701 93.5204 0.748047 109.721 0.748047H242.279Z"
                          : "M354 0C354 0 175.252 0 110.344 0C45.4358 0 67.4048 80 -8.74087e-06 80C21.969 80 354 80 354 80V0Z"
                    }
                    fill="white"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="relative  overflow-hidden bg-white rounded-b-2xl">
        <div className="bg-white p-4 xs:pt-8 lg:px-24 lg:py-10">
          <div
            className={`grid items-center gap-3 ${
              activeTab === "instagram" ? "grid-cols-1 sm:grid-cols-2" : "mx-auto max-w-sm grid-cols-1"
            }`}
          >
            {services[activeTab as keyof typeof services].services.map((service, index) => (
              <Button
                key={service}
                className={`w-full min-h-12 ${
                  activeTab === "tiktok"
                    ? "bg-gradient-to-r from-purple-500 to-pink-500"
                    : activeTab === "youtube"
                      ? "bg-gradient-to-r from-red-300 to-red-600"
                      // : "bg-orange-600 hover:bg-orange-300"
                     : "bg-gradient-to-r from-orange-400 to-red-500"

                } text-white font-medium transition-all duration-300 hover:scale-105`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {service}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
