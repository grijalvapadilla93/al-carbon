import { ScrollReveal } from "@/components/scroll-reveal";

const wines = [
  {
    name: "Opus One 2018",
    description:
      "Napa Valley. Notas de mora azul, casis y violetas frescas. Estructura imponente.",
    price: "Q 12,400",
  },
  {
    name: "Reserva de la Familia",
    description:
      "Valle de Guadalupe. Tempranillo y Cabernet. Roble francés, vainilla y tabaco.",
    price: "Q 2,850",
  },
  {
    name: "Chardonnay Cru",
    description:
      "Borgoña. Acidez vibrante, notas cítricas y un final mineral elegante.",
    price: "Q 1,920",
  },
  {
    name: "Malbec Reserva",
    description:
      "Mendoza. Ciruelas negras, chocolate y especias. Taninos sedosos.",
    price: "Q 1,650",
  },
  {
    name: "Pinot Noir Elaborado",
    description:
      "Casablanca. Frutos rojos frescos, tierra húmeda y sutiles notas florales.",
    price: "Q 1,480",
  },
];

export function BodegaPrivada() {
  return (
    <section id="bodega" className="bg-surface-low py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold tracking-tighter mb-4 uppercase">
              Bodega Privada
            </h2>
            <p className="text-xs tracking-widest text-primary uppercase">
              Curaduría por nuestro Sommelier
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Wine list */}
          <div className="md:col-span-7 space-y-0 divide-y divide-outline-variant/10">
            {wines.map((wine, index) => (
              <ScrollReveal key={index}>
                <div className="flex flex-col md:flex-row md:items-center justify-between py-8 group card-subtle px-4 -mx-4 rounded-sm gap-2 md:gap-0">
                  <div className="md:max-w-md">
                    <h3 className="text-xl md:text-2xl font-bold text-on-surface group-hover:text-primary transition-colors">
                      {wine.name}
                    </h3>
                    <p className="text-sm text-secondary italic mt-1">
                      {wine.description}
                    </p>
                  </div>
                  <span className="text-xl font-bold text-secondary-fixed-dim md:text-right whitespace-nowrap">
                    {wine.price}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Image */}
          <ScrollReveal className="md:col-span-5">
            <div className="relative card-lift sticky top-24">
              <div className="aspect-[3/4] overflow-hidden border border-outline-variant/10">
                <div
                  className="w-full h-full bg-cover bg-center grayscale-[0.3] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80')",
                  }}
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-surface p-6 border border-outline-variant/10 editorial-shadow max-w-xs">
                <p className="text-xs tracking-widest text-primary uppercase mb-2">
                  Más de 120 etiquetas
                </p>
                <p className="text-sm text-secondary leading-relaxed">
                  Desde bodegas boutique hasta grandes reservas internacionales.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-16 text-center">
          <button className="border border-outline-variant/30 px-8 py-3 text-sm font-bold tracking-widest hover:bg-primary-container hover:border-primary-container hover:text-on-surface transition-all duration-300 btn-press uppercase">
            Solicitar Carta Completa
          </button>
        </div>
      </div>
    </section>
  );
}
