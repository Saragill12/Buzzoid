import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Ready from "@/components/Ready";
import Ready1 from "@/components/Ready1";
import Faq2 from "@/components/Faq2";
import CustomerReviews from "@/components/CustomerReviews";
import LikesPricing1 from "@/components/LikesPricing1";
const BuyInstagramLikes = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4"></h1>
        </div>
                <LikesPricing1 />
<Testimonials />
        <Ready />
        <Ready1 />
        <Faq2 />
        <CustomerReviews />
      </main>
      <Footer />
    </div>
  );
};

export default BuyInstagramLikes;
