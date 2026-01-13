import { Truck } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroBanner = () => {
  const colorSwatches = [
    { color: "bg-amber-200", name: "ครีม" },
    { color: "bg-yellow-400", name: "เหลือง" },
    { color: "bg-orange-500", name: "ส้ม" },
    { color: "bg-green-600", name: "เขียว" },
    { color: "bg-gray-400", name: "เทา" },
    { color: "bg-pink-400", name: "ชมพู" },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Hero Image */}
      <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
        <img
          src={heroBanner}
          alt="KONA Furniture Collection"
          className="w-full h-full object-cover"
        />
        
        {/* Overlay Content */}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/20 to-transparent">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-lg">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background leading-tight mb-4 drop-shadow-lg">
                ผู้นำเฟอร์นิเจอร์คุณภาพ
                <br />
                <span className="text-primary">อันดับ 1</span> ของเมืองไทย
              </h1>
            </div>
          </div>
        </div>

        {/* KONA Badge */}
        <div className="absolute top-8 right-8 md:top-12 md:right-12">
          <div className="bg-primary w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-primary-foreground font-bold text-lg md:text-xl">KONA</span>
          </div>
        </div>

        {/* Free Shipping Box */}
        <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 hidden sm:block">
          <div className="bg-background rounded-lg p-4 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="bg-primary p-2 rounded-full">
                <Truck className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-bold text-sm">FREE SHIPPING</p>
                <p className="text-xs text-muted-foreground">สั่งซื้อขั้นต่ำ ฿1,500</p>
              </div>
            </div>
          </div>
        </div>

        {/* LINE Badge */}
        <div className="absolute bottom-8 left-8 md:bottom-12 md:left-auto md:right-48 hidden sm:block">
          <div className="bg-[#06C755] rounded-lg p-3 shadow-lg">
            <p className="text-background text-xs font-medium">LINE Official</p>
            <p className="text-background text-sm font-bold">@KONA</p>
          </div>
        </div>
      </div>

      {/* Color Swatches */}
      <div className="bg-secondary py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 md:gap-6 overflow-x-auto">
            {colorSwatches.map((swatch) => (
              <button
                key={swatch.name}
                className="flex flex-col items-center gap-1 min-w-fit group"
              >
                <div
                  className={`w-8 h-8 md:w-10 md:h-10 rounded-full ${swatch.color} ring-2 ring-transparent group-hover:ring-primary transition-all shadow-sm`}
                />
                <span className="text-xs text-muted-foreground">{swatch.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
