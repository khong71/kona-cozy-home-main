import { Heart, ChevronLeft, ChevronRight, Star, Truck } from "lucide-react";
import { useState } from "react";
import sofaPuff from "@/assets/sofa-puff.jpg";
import sofaCloud from "@/assets/sofa-cloud.jpg";
import sofaCube from "@/assets/sofa-cube.jpg";
import sofaTerra from "@/assets/sofa-terra.jpg";

const HighlightProduct = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: "โซฟาทรงหมอนนั่งเดี่ยว PUFF",
      image: sofaPuff,
      originalPrice: 7150,
      salePrice: 4290,
      discount: 40,
      rating: 5,
      freeShipping: true,
    },
    {
      id: 2,
      name: "โซฟา KONA รุ่น CLOUD",
      image: sofaCloud,
      originalPrice: 17650,
      salePrice: 10590,
      discount: 40,
      rating: 5,
      freeShipping: true,
    },
    {
      id: 3,
      name: "โซฟาเตี้ยแบบโมริโซฟา รุ่น CUBE",
      image: sofaCube,
      originalPrice: 7650,
      salePrice: 4590,
      discount: 40,
      rating: 4,
      freeShipping: true,
    },
    {
      id: 4,
      name: "โซฟาปรับนอนได้ รุ่น TERRA",
      image: sofaTerra,
      originalPrice: 21650,
      salePrice: 12990,
      discount: 40,
      rating: 5,
      freeShipping: true,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          HIGHLIGHT <span className="text-primary">PRODUCT</span>
        </h2>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background shadow-md rounded-full p-2 hover:bg-secondary transition-colors -ml-4 hidden md:block"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background shadow-md rounded-full p-2 hover:bg-secondary transition-colors -mr-4 hidden md:block"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all"
              >
                {/* Image */}
                <div className="relative aspect-square bg-secondary/30 p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  <button className="absolute top-3 right-3 p-2 bg-background rounded-full shadow-sm hover:bg-secondary transition-colors opacity-0 group-hover:opacity-100">
                    <Heart className="h-4 w-4" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-4 space-y-2">
                  <h3 className="text-sm font-medium line-clamp-2 min-h-[40px]">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < product.rating
                            ? "text-primary fill-primary"
                            : "text-muted"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Price */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-[hsl(var(--sale))]">
                        ฿{product.salePrice.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-muted-foreground line-through">
                        ฿{product.originalPrice.toLocaleString()}
                      </span>
                      <span className="text-[hsl(var(--sale))] font-medium">
                        ลด {product.discount}%
                      </span>
                    </div>
                  </div>

                  {/* Free Shipping Badge */}
                  {product.freeShipping && (
                    <div className="flex items-center gap-1 text-xs text-primary">
                      <Truck className="h-3 w-3" />
                      <span>ส่งฟรี</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightProduct;
