import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandIntro from "@/components/BrandIntro";
import FeaturedCollection from "@/components/FeaturedCollection";
import LifestyleSection from "@/components/LifestyleSection";
import CustomShade from "@/components/CustomShade";
import ShopByStyle from "@/components/ShopByStyle";
import StorySection from "@/components/StorySection";
import NotMassProduced from "@/components/NotMassProduced";
import FeaturedPiece from "@/components/FeaturedPiece";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import EmailCTA from "@/components/EmailCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-ivory">
      <Header />
      <main>
        <Hero />
        <BrandIntro />
        <FeaturedCollection />
        <LifestyleSection />
        <CustomShade />
        <ShopByStyle />
        <StorySection />
        <NotMassProduced />
        <FeaturedPiece />
        <Reviews />
        <Gallery />
        <FAQ />
        <EmailCTA />
      </main>
      <Footer />
    </div>
  );
}
