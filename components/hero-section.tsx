"use client"
import { Card } from "@/components/ui/card"
import ServiceTabs from "@/components/service-tabs"
import NotificationSystem from "@/components/notification-system"
import StarRating from "@/components/star-rating"

export default function HeroSection() {
  return (
    // <section className="bg-gradient-to-b from-purple-50 via-blue-50 to-pink-50 overflow-hidden   pb-10 pt-4 md:pb-16 md:pt-12">
    // <section className="mt-20 bg-gradient-to-b from-purple-50 via-blue-50 to-pink-50 overflow-hidden pb-10 pt-4 md:pb-16 md:pt-12">
<section className="mt-20 bg-gradient-to-b from-purple-100 via-white via-10% to-white overflow-hidden mt-[-1%] pb-10 pt-4 md:pb-16 md:pt-12">

      <div className="container mx-auto  px-4 flex flex-col">
        <div className="text-center">
          {/* <h1 className="text-[clamp(1.75rem,0.942rem+3.801vw,3.375rem)] font-bold leading-tight"> */}
          <h1 className="text-[clamp(1.25rem,0.7rem+2.5vw,2.25rem)] mt-12 font-bold leading-tight">

            Buy Instagram and TikTok Followers and  <br/> Other Interactions
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              {" "}
              Delivered in Minutes!
            </span>
          </h1>
          <p className="text-lg text-gray-600 mx-auto max-w-xl mt-4">
            Count on Buzzoid's #1 ranked growth service to help you build a robust social media presence!
          </p>
        </div>

        <div className="mt-6 w-full md:mt-12">
          <Card className="shadow-lg border-gray-200/60 mx-auto flex max-w-[1000px] flex-col overflow-hidden rounded-2xl bg-gray-200">
            <ServiceTabs />

            <div className="bg-white">
              <div className="flex flex-wrap justify-center gap-y-3 items-center md:grid md:grid-cols-[1fr_auto_1fr] mx-auto mt-4 pb-4 md:pt-4 lg:px-24">
                <div className="relative pr-6 mr-6 leading-none">
                  <StarRating rating={5} size="lg" />
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-5 md:h-7 bg-gray-500/30"></span>
                </div>

                <div className="flex justify-center basis-full md:basis-auto">
                  <NotificationSystem />
                </div>

                <div className="flex relative md:ml-6 md:pl-6">
                  <span className="inline-flex rounded-lg border border-gray-500/30 px-3 py-1.5">
                    <span className="inline-block w-10 md:w-12">
                      <svg width="53" height="22" viewBox="0 0 53 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10.0512 3.12655C9.44356 3.84565 8.47126 4.41283 7.49896 4.3318C7.37742 3.3595 7.85344 2.32643 8.41049 1.68836C9.01818 0.94901 10.0816 0.422348 10.9425 0.381836C11.0438 1.39465 10.6488 2.3872 10.0512 3.12655ZM10.9324 4.52423C9.52458 4.44321 8.31934 5.32436 7.65088 5.32436C6.9723 5.32436 5.94936 4.56475 4.83527 4.585C3.38695 4.60526 2.03991 5.42564 1.30055 6.73216C-0.218663 9.34522 0.905558 13.2142 2.37413 15.3411C3.09323 16.3944 3.95412 17.549 5.08847 17.5085C6.16205 17.468 6.58743 16.8096 7.88383 16.8096C9.19035 16.8096 9.56509 17.5085 10.6994 17.4882C11.8743 17.468 12.6137 16.4349 13.3328 15.3816C14.1531 14.1865 14.4874 13.0217 14.5076 12.961C14.4874 12.9407 12.2389 12.0798 12.2187 9.48701C12.1984 7.31959 13.9911 6.28653 14.0721 6.22576C13.0593 4.7268 11.4793 4.56475 10.9324 4.52423Z"
                          fill="#3D4658"
                        />
                      </svg>
                    </span>
                  </span>
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-5 md:h-7 bg-gray-500/30 md:hidden"></span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
