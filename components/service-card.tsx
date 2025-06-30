import { Button } from "@/components/ui/button";
import StarRating from "@/components/star-rating";
import Counter from "@/components/counter";
import ExpandableCard from "@/components/expandable-card";

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    rating: number;
    counter: number;
    gradient: string;
    features: string[];
    cards: Array<{
      title: string;
      content: string;
      image: string;
    }>;
  };
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    // <div className={`bg-gradient-to-r ${service.gradient} rounded-2xl p-1 md:p-0 md:bg-none`}>
      <div className=" overflow-hidden">

      {/* <div className="bg-white rounded-2xl md:rounded-none md:bg-gradient-to-r md:from-transparent md:to-transparent overflow-hidden"> */}
       <div className="bg-gradient-to-b from-[#E6E6FA]  via-white to-[#E6E6FA] rounded-2xl overflow-hidden">

        {/* ✨ This is the main layout direction flip */}
        <div className="flex flex-col lg:flex-row-reverse">
          {/* LEFT on desktop (Buy section) */}
          <div className="lg:w-1/2 p-6 lg:p-12">
            <div className="inline-flex items-center text-xs font-semibold mb-4">
              <div className="shrink-0 inline-flex items-center gap-1.5 rounded-full border border-gray-400/50 bg-white px-2 py-1 shadow-sm">
                <StarRating rating={service.rating} size="sm" />
                <span>{service.rating}</span>
              </div>
              <Counter
                value={service.counter}
                suffix="+"
                className="items-center rounded-r-full bg-gray-400 bg-opacity-20 px-2 py-1 text-gray-500"
              />
            </div>

            <h2 className="text-3xl font-bold mb-6">{service.title}</h2>

            <ul className="space-y-3 mb-8">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="shrink-0 inline-flex w-5 h-5 items-center justify-center rounded-full bg-white border border-gray-400/30 text-orange-500 shadow-sm mt-0.5">
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.9436 0.563382C11.4318 1.05154 11.4318 1.84299 10.9436 2.33115L5.5712 7.70357C5.08305 8.19172 4.29161 8.19172 3.80345 7.70358L0.799179 4.69944C0.311014 4.21129 0.310997 3.41984 0.799143 2.93167C1.28729 2.44351 2.07874 2.44349 2.56691 2.93164L4.68729 5.05193L9.17585 0.563382C9.664 0.0752268 10.4555 0.0752268 10.9436 0.563382Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              className={`w-full bg-gradient-to-r ${service.gradient} text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity`}
            >
              {service.title}
            </Button>
          </div>

          {/* RIGHT on desktop (Card section) */}
          <div className="lg:w-1/2 p-6 lg:p-12">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {service.cards.map((card, index) => (
                <ExpandableCard key={index} card={card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
