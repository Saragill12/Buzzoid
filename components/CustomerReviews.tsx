"use client"

import type React from "react"

import { useState } from "react"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function CustomerReviews() {
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    review: "",
  })

  const reviews = [
    {
      rating: 5,
      text: "How did you make verified users with hundreds of thousands of followers to like my picture for such a cheap price? You should increase the prices on premium likes, seriously. I would be willing to pay way more for this service and keep the cheapskates out.",
      author: "Vlad P",
    },
    {
      rating: 5,
      text: "They are good and real",
      author: "sagabongae",
    },
    {
      rating: 5,
      text: "Actually worked and very professional.",
      author: "Harry",
    },
    {
      rating: 5,
      text: "Awesome app and highly recommend",
      author: "Jose Fernandez",
    },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Review submitted:", { ...formData, rating })
    // Reset form
    setFormData({ name: "", email: "", review: "" })
    setRating(0)
  }

  const StarRating = ({
    rating: currentRating,
    interactive = false,
    size = "w-5 h-5",
  }: { rating: number; interactive?: boolean; size?: string }) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${size} ${
              star <= currentRating ? "fill-teal-500 text-teal-500" : "text-gray-300"
            } ${interactive ? "cursor-pointer hover:text-teal-400" : ""}`}
            onClick={interactive ? () => setRating(star) : undefined}
            onMouseEnter={interactive ? () => setHoveredRating(star) : undefined}
            onMouseLeave={interactive ? () => setHoveredRating(0) : undefined}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Customer Feedback & Reviews</h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
            Here at Buzzoid, we pride ourselves on exceptional service and affordable prices. Don't just take our word
            for it
            <br />- check out what customers say about our Instagram likes below
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Review Submission Form */}
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Submit Your Review</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                    required
                  />
                </div>

                {/* Rating */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                  <StarRating rating={hoveredRating || rating} interactive={true} />
                </div>

                {/* Review Text */}
                <div>
                  <label htmlFor="review" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Review
                  </label>
                  <textarea
                    id="review"
                    name="review"
                    value={formData.review}
                    onChange={handleInputChange}
                    placeholder="Your Review"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 text-lg"
                >
                  SUBMIT REVIEW
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Reviews Display */}
          <div className="space-y-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <StarRating rating={review.rating} />
                <p className="text-gray-700 mt-3 mb-3 leading-relaxed">"{review.text}"</p>
                <p className="text-gray-500 font-medium">{review.author}</p>
              </div>
            ))}

            {/* Show All Reviews Button */}
            <div className="text-center pt-4">
              <Button
                variant="outline"
                className="px-8 py-2 border-gray-300 text-gray-600 hover:bg-gray-50 bg-transparent"
              >
                SHOW ALL REVIEWS
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}