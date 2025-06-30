"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button"; // Make sure this path is correct
import { Card } from "@/components/ui/card";     // Make sure this path is correct

export default function CustomerReviewsSection() {
  const [reviewRating, setReviewRating] = useState(0);

  return (
    <section className="py-16 bg-gradient-to-b from-[#EFF0FC] via-white to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Customer Feedback & Reviews</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Here at Buzzoid, we pride ourselves on exceptional service and affordable prices. Don't just take our
            word for it - check out what customers say about our Instagram likes below.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Review Form */}
          <Card className="p-6 bg-white border border-gray-200 rounded-lg shadow-md w-full">
            <h3 className="text-xl font-bold mb-4">Submit Your Review</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setReviewRating(star)}
                      className="p-1"
                    >
                      <Star
                        className={`w-5 h-5 ${
                          star <= reviewRating
                            ? "fill-orange-500 text-orange-500"
                            : "text-gray-300"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Review</label>
                <textarea
                  placeholder="Your review..."
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <Button className="w-full bg-gradient-to-r from-orange-300 to-red-500 text-white rounded-lg h-10 hover:from-orange-300 hover:to-red-600">
                Submit Review
              </Button>
            </form>
          </Card>

          {/* Reviews Display */}
          <div className="space-y-6">
            {[{
              review: "How did you make verified users with hundreds of thousands of followers to like my picture for such a cheap price? You should increase the prices on premium likes, seriously. I would be willing to pay way more for this service and keep the cheapskates out.",
              author: "Vlad P"
            }, {
              review: "They are good and real",
              author: "sagebonque"
            }, {
              review: "Actually worked and very professional.",
              author: "Harry"
            }].map((item, index) => (
              <Card key={index} className="p-6">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-green-500 text-green-500" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-3">"{item.review}"</blockquote>
                <cite className="text-gray-600 font-semibold">{item.author}</cite>
              </Card>
            ))}

            <Button variant="outline" className="w-full">
              Show All Reviews
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
