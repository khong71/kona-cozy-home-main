import trendyRoom from "@/assets/trendy-room.jpg";
const NowTrendy = () => {
  return <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img alt="Trendy Living Room" className="w-full rounded-lg shadow-lg" src="/lovable-uploads/4eb1e22a-25bc-4737-a2ed-d01feda5d320.png" />
            <div className="absolute -bottom-4 -right-4 bg-primary w-20 h-20 rounded-full hidden md:flex items-center justify-center shadow-lg">
              <span className="text-primary-foreground font-bold text-sm text-center leading-tight">
                NEW<br />2026
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              NOW <span className="text-primary">TRENDY</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                การตกแต่งบ้านเพื่อชีวิตที่ดี (Healing Home) เติมความสุข ความอบอุ่น 
                และพลังบวกให้ทุกวัน พร้อมก้าวเข้าสู่ปี 2026 อย่างมีสไตล์
              </p>
              <p>
                Happy New Home, Happy New You! การดูแลบ้านก็คือการดูแลตัวเรา 
                การเปลี่ยนแปลงเล็ก ๆ น้อย ๆ ไปจนถึงการเปลี่ยนแปลงใหญ่ ๆ 
                คือสิ่งที่จะทำให้บ้านกลายเป็น Home Sanctuary 
                ที่พร้อมเติมพลังบวกให้คุณทุกวัน
              </p>
            </div>
            <button className="text-primary font-medium hover:underline">
              อ่านเพิ่มเติม →
            </button>
          </div>
        </div>
      </div>
    </section>;
};
export default NowTrendy;