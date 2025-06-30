"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TestimonialCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      text: "Instagram really helps to build our presence in social media. We were blown away by Buzzoid's speed and quality for likes and followers!",
      highlight: "We were blown away",
      author: "Chris Johnson",
    },
    {
      text: "The results exceeded our expectations completely. Amazing service quality and the delivery was incredibly fast for our Instagram growth!",
      highlight: "exceeded our expectations",
      author: "Sarah Mitchell",
    },
    {
      text: "Buzzoid transformed our social media strategy entirely. The engagement boost was immediate and the followers are genuinely active users!",
      highlight: "transformed our social media",
      author: "Mike Rodriguez",
    },
    {
      text: "Outstanding customer support and reliable service delivery. We saw remarkable growth in our Instagram presence within just days!",
      highlight: "remarkable growth",
      author: "Emma Thompson",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const renderTextWithHighlight = (text: string, highlight: string) => {
    const parts = text.split(highlight)
    if (parts.length === 1) return text

    return (
      <>
        {parts[0]}
        <span className="text-orange-500 font-medium">{highlight}</span>
        {parts[1]}
      </>
    )
  }

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto relative">
        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:bg-gray-50 rounded-full w-10 h-10"
          onClick={prevSlide}
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:bg-gray-50 rounded-full w-10 h-10"
          onClick={nextSlide}
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </Button>

        {/* Testimonial Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mx-16 text-center">
          <div className="mb-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              "
              {renderTextWithHighlight(
                testimonials[currentSlide].text,
                testimonials[currentSlide].highlight
              )}
              "
            </p>
          </div>

          <div className="text-gray-500 font-medium">
            {testimonials[currentSlide].author}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentSlide
                  ? "bg-gray-400"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
