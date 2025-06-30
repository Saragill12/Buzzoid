"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface ExpandableCardProps {
  card: {
    title: string
    content: string
    image: string
  }
}

export default function ExpandableCard({ card }: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="group/card cursor-pointer  transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-6">
        <div className="mb-4">
          <img src={card.image || "/placeholder.svg"} alt={card.title} className="w-full h-32 object-contain" />
        </div>

        <h3 className="text-lg font-semibold mb-3">{card.title}</h3>

        <p className={`text-gray-600 text-sm leading-relaxed ${isExpanded ? "" : "line-clamp-4"}`}>{card.content}</p>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
          aria-label={isExpanded ? "Collapse text" : "Expand text"}
        >
          <span className={`transform transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}>
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.814697 2.40758L2.58246 0.639801L7.93936 5.99665L13.2962 0.639805L15.064 2.40757L7.93936 9.53217L0.814697 2.40758Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </button>
      </CardContent>
    </Card>
  )
}
