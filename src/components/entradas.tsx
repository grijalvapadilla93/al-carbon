import { ScrollReveal } from "@/components/scroll-reveal";

const entradas = [
  {
    name: "Carpaccio de Res",
    desc: "Láminas de solomillo, trufa negra y parmesano 24 meses.",
    price: "Q 310",
    img: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&q=80",
    span: "md:col-span-2",
  },
  {
    name: "Chicharrón de Ribeye",
    desc: "Sobre guacamole rústico y tortillas de maíz criollo.",
    price: "Q 450",
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
    span: "md:col-span-1",
  },
  {
    name: "Queso Fundido",
    desc: "Mezcla de quesos regionales con chorizo de autor al mezcal.",
    price: "Q 280",
    img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=400&q=80",
    span: "md:col-span-1",
  },
];

export function Entradas() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
      <ScrollReveal>
        <div className="mb-16">
          <h2 className="text-4xl font-extrabold tracking-tighter uppercase">
            Prólogo: Las Entradas
          </h2>
          <div className="h-1 w-24 bg-primary-container mt-4" />
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {entradas.map((e, i) => (
          <ScrollReveal key={i} className={e.span}>
            <div className="relative overflow-hidden group card-lift h-full min-h-[320px]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 bg-surface-high"
                  style={{ backgroundImage: `url('${e.img}')` }}
                />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h4 className={`font-bold text-white drop-shadow-lg uppercase tracking-tight ${i === 0 ? "text-2xl" : "text-xl"}`}>
                  {e.name}
                </h4>
                <p className="text-sm text-white/80 drop-shadow mt-1">
                  {e.desc}
                </p>
                <span className="block mt-3 font-bold text-primary-light">{e.price}</span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
