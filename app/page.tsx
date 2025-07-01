import HeroSection from "@/components/hero-section"
import LogoMarquee from "@/components/logo-marquee"
import ImageContentSection from "@/components/image-content-section"
import ServicesSection from "@/components/services-section"
import WhyBuzzoidSection from "@/components/why-buzzoid-section"
import GuaranteesSection from "@/components/guarantees-section"
import GetStartedSection from "@/components/get-started-section"
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import BuyInstagramLikes from "@/components/BuyInstagramLikes";
import Follower from '@/components/Follower'
export default function Home() {
  return (
    <main role="main" tabIndex={-1}>
      <Navbar/>
      <HeroSection />
      <LogoMarquee />
      <ImageContentSection />
      <ServicesSection />
      <BuyInstagramLikes />
      <Follower />
      <WhyBuzzoidSection />
      <GuaranteesSection />
      <GetStartedSection />
      <Footer />
    </main>
  )
}
