import inspiration1 from "@/assets/inspiration-1.png";
import inspiration2 from "@/assets/inspiration-2.png";
import inspiration3 from "@/assets/inspiration-3(2).jpg";
import inspiration4 from "@/assets/inspiration-4(2).jpg";

const HomeInspirations = () => {
  const inspirations = [
    { image: inspiration1, label: "ห้องนั่งเล่น" },
    { image: inspiration2, label: "ห้องนอน" },
    { image: inspiration3, label: "ห้องทำงาน" },
    { image: inspiration4, label: "มุมพักผ่อน" },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          HOME <span className="text-primary">INSPIRATIONS</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {inspirations.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-background font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeInspirations;
