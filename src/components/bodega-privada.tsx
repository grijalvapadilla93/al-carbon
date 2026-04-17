import { ScrollReveal } from "@/components/scroll-reveal";

export function BodegaPrivada() {
  const wines = [
    {
      name: "OPUS ONE 2018",
      description:
        "Napa Valley. Notas de mora azul, casis y violetas frescas. Estructura imponente.",
      price: "$12,400",
    },
    {
      name: "RESERVA DE LA FAMILIA",
      description:
        "Valle de Guadalupe. Tempranillo y Cabernet. Roble francés, vainilla y tabaco.",
      price: "$2,850",
    },
    {
      name: "CHARDONNAY CRU",
      description:
        "Borgoña. Acidez vibrante, notas cítricas y un final mineral elegante.",
      price: "$1,920",
    },
    {
      name: "MALBEC RESERVA",
      description:
        "Mendoza. Ciruelas negras, chocolate y especias. Taninos sedosos.",
      price: "$1,650",
    },
    {
      name: "PINOT NOIR ELABORADO",
      description:
        "Casablanca. Frutos rojos frescos, tierra húmeda y sutiles notas florales.",
      price: "$1,480",
    },
  ];

  return (
    <section id="bodega" className="bg-surface-container-low py-24 px-4 md:px-8 md:px-6 md:px-16">
      <ScrollReveal>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold tracking-tighter mb-4">
              BODEGA PRIVADA
            </h2>
            <p className="text-xs tracking-widest text-primary uppercase">
              Curaduría por nuestro Sommelier
            </p>
          </div>

          <div className="space-y-12">
            {wines.map((wine, index) => (
              <ScrollReveal key={index}>
                <div className="flex flex-col md:flex-row justify-between items-baseline group card-subtle p-4 -mx-4 rounded-sm">
                  <div className="md:max-w-md">
                    <h3 className="text-2xl font-bold text-on-surface group-hover:text-primary transition-colors link-underline">
                      {wine.name}
                    </h3>
                    <p className="text-sm text-secondary italic">
                      {wine.description}
                    </p>
                  </div>
                  <div className="hidden md:block flex-grow border-b border-dotted border-outline-variant mx-4 opacity-30" />
                  <span className="text-xl font-bold text-secondary-fixed-dim">
                    {wine.price}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="border border-outline-variant/30 px-4 md:px-8 py-3 text-sm font-bold tracking-widest hover:bg-primary-container hover:border-primary-container transition-all duration-300 btn-press">
              SOLICITAR CARTA COMPLETA
            </button>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
