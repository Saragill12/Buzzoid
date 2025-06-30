import Navbar from "@/components/Navbar";
import LikesPricing from "@/components/LikesPricing";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Ready from "@/components/Ready";
import Ready1 from "@/components/Ready1";
import Faq from "@/components/Faq";
import CustomerReviews from "@/components/CustomerReviews";

const BuyInstagramLikes = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4"></h1>
         
        </div>
        <LikesPricing />
        <Testimonials />
        <Ready />
        <Ready1 />
        <Faq />
        <CustomerReviews />
      </main>
      <Footer />
    </div>
  );
};

export default BuyInstagramLikes;
