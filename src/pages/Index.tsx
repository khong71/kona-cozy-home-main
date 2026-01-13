import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import HeroBanner from "@/components/sections/HeroBanner";
import NowTrendy from "@/components/sections/NowTrendy";
import HomeInspirations from "@/components/sections/HomeInspirations";
import CompressSofa from "@/components/sections/CompressSofa";
import HealingFurniture from "@/components/sections/HealingFurniture";
import HighlightProduct from "@/components/sections/HighlightProduct";
import FindInspiration from "@/components/sections/FindInspiration";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <main>
        <HeroBanner />
        <NowTrendy />
        <HomeInspirations />
        <CompressSofa />
        <HealingFurniture />
        <HighlightProduct />
        <FindInspiration />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
