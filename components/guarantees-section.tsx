import Image from "next/image"

export default function GuaranteesSection() {
  const guarantees = [
    {
      title: "Real Social Media Engagement",
      description:
"All of our Instagram and TikTok follows, likes, views, and comments come from the highest-quality active users. Since they’re real interactions, they stick in your account for the long term and always keep your account safe from the penalties or removal that often come with the fake followers, likes, or views sold by other, disreputable vendors.",
      icon: "https://buzzoid.com/wp-content/themes/buzz/v3/increased_visibility-lVnFewnO.svg?height=100&width=100",
    },
    {
      title: "Commitment to Security",
      description:
        "We go the extra mile to ensure that all of our customers' personal and financial data stay safe as well, with secure servers and encrypted transactions guaranteeing that personal information always stays private.",
      icon: "https://buzzoid.com/wp-content/themes/buzz/v3/moneyback_guarantee-GPtxb47V.svg?height=100&width=100",
    },
    {
      title: "Premium Customer Experience",
      description:
"It’s important to us that Buzzoid’s service is as high-quality as our interactions. Our delivery is immediate, customers can choose from a large menu of options and features that match any account size, there is a wide range of payment options, and our around-the-clock customer support team is knowledgeable, helpful, courteous, and always happy to answer questions or solve occasional problems.",
      icon: "https://buzzoid.com/wp-content/themes/buzz/v3/customer-support-BHSltX_E.svg?height=100&width=100",
    },
  ]

  return (
    <section className="relative mt-20 pb-14 md:pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Guarantees</h2>
          <p className="text-lg text-gray-600">
            At Buzzoid, we also pride ourselves on quality, security, and service.
          </p>
        </div>

<div className="grid sm:grid-cols-3 w-[78%] ml-[12%] gap-6 items-start sm:items-stretch mt-8 md:mt-10">
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
className="bg-white rounded-xl h-[105%] p-6 shadow-lg border border-gray-300 hover:shadow-xl transition-shadow"
            >
              <div className="mb-6 ">
                <Image
                  src={guarantee.icon || "/placeholder.svg"}
                  alt={guarantee.title}
                  width={60}
                  height={60}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl  font-semibold mb-4 text-center">{guarantee.title}</h3>
              <p className="text-gray-600 text-sm text-center">{guarantee.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}