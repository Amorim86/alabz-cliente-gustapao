import Header from "../components/Header";
import HeroSection from "../components/sections/HeroSection";
import TrustBanner from "../components/sections/TrustBanner";
import ProductsShowcase from "../components/sections/ProductsShowcase";
import ExperienceBlock from "../components/sections/ExperienceBlock";
import OrdersSection from "../components/sections/OrdersSection";
import DeliveryPickup from "../components/sections/DeliveryPickup";
import SocialProof from "../components/sections/SocialProof";
import InstagramGallery from "../components/sections/InstagramGallery";
import Location from "../components/sections/Location";
import FinalCTA from "../components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <TrustBanner />
      <ProductsShowcase />
      <ExperienceBlock />
      <OrdersSection />
      <DeliveryPickup />
      <SocialProof />
      <InstagramGallery />
      <Location />
      <FinalCTA />
    </>
  );
}
