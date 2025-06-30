"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
    )
  }

  const faqItems = [
    {
      question: "Can buying likes cost me my Instagram account?",
      answer:
        "No, buying likes from Buzzoid is completely safe. We use real accounts and gradual delivery methods that comply with Instagram's terms of service.",
    },
    {
      question: "Will buying likes increase my view count, too?",
      answer:
        "Yes, increased likes often lead to higher visibility and more organic views as Instagram's algorithm favors posts with higher engagement.",
    },
    {
      question: "Which likes package should I choose?",
      answer:
        "Choose based on your current follower count and engagement rate. Start with smaller packages and scale up as needed for the best results.",
    },
    {
      question: "What does 'splitting likes' mean?",
      answer:
        "Splitting likes means distributing your purchased likes across multiple posts instead of putting them all on one post for more natural growth.",
    },
    {
      question: "Are premium likes worth their extra cost?",
      answer:
        "Premium likes come from more active accounts with profile pictures and posts, providing better long-term engagement and authenticity.",
    },
    {
      question: "Does Instagram know that I've purchased likes?",
      answer:
        "When done properly with gradual delivery and real accounts like ours, Instagram cannot detect purchased likes from organic engagement.",
    },
    {
      question: "What is your automatic likes service?",
      answer:
        "Our automatic service delivers likes to your new posts automatically without needing to place individual orders each time.",
    },
    {
      question: "Why should I choose Buzzoid?",
      answer:
        "Buzzoid offers real likes, instant delivery, 24/7 support, money-back guarantee, and has served over 1,000 daily customers successfully.",
    },
    {
      question: "How quickly does this work?",
      answer:
        "Most orders start processing within minutes, and you'll typically see likes appearing on your posts within 1-15 minutes of purchase.",
    },
    {
      question: "What if I have a question you haven't answered?",
      answer:
        "Contact our 24/7 customer support team through live chat, email, or phone. We're always here to help with any questions or concerns.",
    },
    {
      question: "I only have to order likes? There's nothing else I have to do?",
      answer:
        "That's correct! Just provide your Instagram post URL, complete your order, and we handle everything else. No passwords or additional steps required.",
    },
  ]

  const FAQItem = ({
    item,
    index,
    originalIndex,
  }: {
    item: any
    index: number
    originalIndex: number
  }) => {
    const isOpen = openItems.includes(originalIndex)

    return (
      <div className="bg-white rounded-lg border border-gray-200 mb-4">
        <button
          onClick={() => toggleItem(originalIndex)}
          className="w-full p-4 text-left flex justify-between items-center hover:text-gray-900 transition-colors duration-200"
        >
          <span className="text-gray-800 font-medium pr-4">{item.question}</span>
          {isOpen ? (
            <Minus className="w-5 h-5 text-gray-500 flex-shrink-0" />
          ) : (
            <Plus className="w-5 h-5 text-gray-500 flex-shrink-0" />
          )}
        </button>
        {isOpen && (
          <div className="px-4 pb-4">
            <p className="text-gray-600 leading-relaxed">{item.answer}</p>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
        {/* ✅ LEFT: Title */}
        <div className="w-full lg:w-1/3">
          <h2 className="text-4xl font-bold text-gray-900 leading-snug">
            <span className="text-orange-500">Buy Instagram Likes</span> Easily With Buzzoid
          </h2>
        </div>

        {/* ✅ RIGHT: FAQs */}
        <div className="w-full lg:w-2/3">
          {faqItems.map((item, index) => (
            <FAQItem key={index} item={item} index={index} originalIndex={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
