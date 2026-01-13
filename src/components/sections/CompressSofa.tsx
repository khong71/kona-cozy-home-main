import { Button } from "@/components/ui/button";
import sofaPuff from "@/assets/sofa-puff.jpg";
import sofaCozy from "@/assets/sofa-cozy.jpg";
import sofaCube from "@/assets/sofa-cube.jpg";
import sofaDot from "@/assets/sofa-dot.jpg";
import sofaLuno from "@/assets/sofa-luno.jpg";
import sofaRibbon from "@/assets/sofa-ribbon.jpg";
import sofaPuffDuo from "@/assets/sofa-puff-duo.jpg";
import sofaCozyDuo from "@/assets/sofa-cozy-duo.jpg";
import sofaTerra from "@/assets/sofa-terra.jpg";
import sofaCloud from "@/assets/sofa-cloud.jpg";
import sofaFamily from "@/assets/sofa-family.jpg";

const CompressSofa = () => {
  const sofas = [
    { name: "PUFF", image: sofaPuff },
    { name: "COZY", image: sofaCozy },
    { name: "CUBE", image: sofaCube },
    { name: "DOT", image: sofaDot },
    { name: "LUNO", image: sofaLuno },
    { name: "RIBBON", image: sofaRibbon },
    { name: "PUFF DUO", image: sofaPuffDuo },
    { name: "COZY DUO", image: sofaCozyDuo },
    { name: "TERRA", image: sofaTerra },
    { name: "CLOUD", image: sofaCloud },
    { name: "FAMILY", image: sofaFamily },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          COMPRESS <span className="text-primary">SOFA</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {sofas.map((sofa) => (
            <div
              key={sofa.name}
              className="group cursor-pointer"
            >
              <div className="relative bg-secondary/50 rounded-lg p-4 aspect-square flex items-center justify-center overflow-hidden transition-all duration-300 hover:shadow-lg hover:bg-secondary">
                <img
                  src={sofa.image}
                  alt={sofa.name}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <p className="text-center mt-3 font-medium text-sm group-hover:text-primary transition-colors">
                {sofa.name}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button variant="default" size="lg" className="rounded-full px-10">
            SEE MORE
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CompressSofa;
