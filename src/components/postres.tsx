import { ScrollReveal } from "@/components/scroll-reveal";

const desserts = [
  {
    name: "Volcán de Chocolate",
    desc: "Cacao al 70%, centro líquido, helado de vainilla de Papantla y sal de Maldon.",
    price: "Q 240",
    img: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=200&q=80",
  },
  {
    name: "Cheesecake de Frutos",
    desc: "Base de galleta artesanal, compota de frutos rojos del bosque y menta fresca.",
    price: "Q 210",
    img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=200&q=80",
  },
  {
    name: "Crema Catalana",
    desc: "Clásico español con azúcar caramelizado al momento y un toque de canela de Ceilán.",
    price: "Q 180",
    img: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=200&q=80",
  },
];

export function Postres() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Dessert list with images */}
        <ScrollReveal className="order-2 md:order-1">
          <div>
            <h2 className="text-5xl font-extrabold tracking-tighter mb-12 uppercase">
              Final Dulce
            </h2>
            <div className="space-y-8">
              {desserts.map((d, i) => (
                <div
                  key={i}
                  className="group cursor-pointer card-subtle p-4 -mx-4 rounded-sm flex gap-5 items-start"
                >
                  {/* Thumbnail */}
                  <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden rounded-sm">
                    <div
                      className="w-full h-full bg-cover bg-center grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url('${d.img}')` }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline mb-1 gap-4">
                      <h4 className="text-lg md:text-xl font-bold uppercase tracking-tight link-underline">
                        {d.name}
                      </h4>
                      <span className="text-primary font-bold text-lg whitespace-nowrap">
                        {d.price}
                      </span>
                    </div>
                    <p className="text-secondary text-sm leading-relaxed">
                      {d.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Dessert image */}
        <ScrollReveal className="order-1 md:order-2">
          <div className="relative card-lift">
            <div className="aspect-square bg-surface-low p-2 overflow-hidden border border-outline-variant/10">
              <div
                className="w-full h-full grayscale-[0.1] bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80')",
                }}
              />
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-primary-container" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-primary-container" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
