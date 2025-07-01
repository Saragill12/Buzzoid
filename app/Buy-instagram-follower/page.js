 import Navbar from "@/components/Navbar";
import LikesPricing from "@/components/LikesPricing";
import Footer from "@/components/Footer";
import LogoMarquee from "@/components/logo-marquee"
import Choose from '@/components/Choose'
import StepsGuide from '@/components/StepsGuide'
import Ready2 from '@/components/Ready2'
import CustomerReviews from "@/components/CustomerReviews";
import Faq1 from '@/components/Faq1'
import CompareTable from '@/components/CompareTable'
import FollowerMatter from '@/components/FollowerMatter'
import Ready3 from '@/components/Ready3'
import FollowerMatter1 from '@/components/FollowerMatter1'
import GetStarted1 from '@/components/GetStarted1'
import Vip from "@/components/Vip";
const BuyInstagramfollower = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4"></h1>
         
        </div>
        <Vip/>
    <LogoMarquee />
    <Choose/>
    <StepsGuide/>
    <Ready2/>
    <CustomerReviews/>
    <Faq1/>
    {/* <CompareTable/> */}
    <FollowerMatter/>
    <Ready3/>
    <FollowerMatter1/>
    <GetStarted1/>
      </main>
      <Footer />
    </div>
  );
};

export default BuyInstagramfollower;
