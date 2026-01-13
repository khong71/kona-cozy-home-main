import healingSection from "@/assets/healing-section.jpg";
import healingRoom2 from "@/assets/healing-room-2.jpg";

const HealingFurniture = () => {
  const tabs = [
    { label: "Minimal Style", active: false },
    { label: "Trendy ไอเดียแต่งบ้าน", active: true },
    { label: "Cozy Style", active: false },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                tab.active
                  ? "bg-primary text-primary-foreground"
                  : "bg-background border border-border hover:border-primary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif italic text-foreground">
              Healing Furniture
              <br />
              <span className="text-primary">Selections</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              คัดสรรเฟอร์นิเจอร์คุณภาพที่จะช่วยเติมความสุขและความอบอุ่นให้กับทุกมุมของบ้าน 
              สร้างพื้นที่พักผ่อนที่เหมาะกับไลฟ์สไตล์ของคุณ
            </p>
          </div>

          {/* Right Images */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src={healingSection}
              alt="Healing Furniture"
              className="w-full h-48 md:h-64 object-cover rounded-lg shadow-md"
            />
            <img
              src={healingRoom2}
              alt="Cozy Room"
              className="w-full h-48 md:h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealingFurniture;
