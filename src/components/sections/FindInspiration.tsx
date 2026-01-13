import findInspiration from "@/assets/find-inspiration1.jpg";
import { Badge } from "@/components/ui/badge";

const FindInspiration = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          FIND YOUR <span className="text-primary">INSPIRATION</span>
        </h2>

        <div className="bg-background rounded-xl overflow-hidden shadow-lg">
          <div className="grid md:grid-cols-2">
            {/* Image */}
            <div className="relative h-64 md:h-auto">
              <img
                src={findInspiration}
                alt="Find Your Inspiration"
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-[hsl(var(--sale))] text-[hsl(var(--sale-foreground))]">
                New Arrival
              </Badge>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-serif italic mb-6">
                A Perfect Blend of Comfort and Style
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  ในการเลือกเฟอร์นิเจอร์ตกแต่งบ้านให้ตอบโจทย์ กับไลฟ์สไตล์การใช้งานที่ดีขาด 
                  นอกจากความสวยงามของดีไซน์ ยังต้องตอบโจทย์การใช้งานที่เหมาะสมด้วย
                </p>
                <p>
                  สิ่งไม่ว่าจะเป็นที่นั่ง โซฟา โต๊ะทำงาน เตียงนอน หรือชั้นวางของสักชิ้น 
                  และการจัดสรรการดูแลสลามเรียบร้อยของสินค้าที่คุณในอนาคตด้านหน้าของคุณ
                </p>
              </div>
              <button className="mt-6 text-primary font-medium hover:underline self-start">
                ดูสินค้าทั้งหมด →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindInspiration;
