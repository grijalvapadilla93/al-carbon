import { ScrollReveal } from "@/components/scroll-reveal";

const carnes = [
  {
    name: "Ribeye Black Angus",
    desc: "500g de infiltración perfecta, marmoleo grado 7.",
    price: "Q 890",
    img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&q=80",
  },
  {
    name: "Picaña de la Casa",
    desc: "Corte brasileño con costra de sal ahumada y chimichurri de habanero.",
    price: "Q 720",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80",
  },
  {
    name: "Vacío Uruguayo",
    desc: "Textura firme y sabor intenso, terminado con mantequilla de romero.",
    price: "Q 640",
    img: "https://images.unsplash.com/photo-1558030006-450675393462?w=400&q=80",
  },
];

export function CarnesAutor() {
  return (
    <section id="carnes" className="max-w-7xl mx-auto px-6 md:px-12 py-24">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-5xl font-extrabold tracking-tighter mb-2 uppercase">
              Carnes de Autor
            </h2>
            <div className="h-1 w-24 bg-primary-container" />
          </div>
          <p className="text-secondary max-w-md text-right font-light">
            Cortes seleccionados de las mejores ganaderías, madurados en cámara
            de sal durante 45 a 60 días.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Large Feature - Tomahawk */}
        <ScrollReveal className="md:col-span-7">
          <div className="group relative card-lift">
            <div className="aspect-[4/5] overflow-hidden">
              <div
                className="w-full h-full grayscale-[0.2] transition-transform duration-700 group-hover:scale-105 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80')",
                }}
              />
            </div>
            <div className="absolute bottom-0 right-0 md:-bottom-8 md:-right-8 bg-surface p-6 md:p-10 editorial-shadow max-w-sm border border-outline-variant/10">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 uppercase tracking-tight">
                Tomahawk Reserve
              </h3>
              <p className="text-sm text-secondary leading-relaxed mb-6">
                1.2kg de pura potencia. Madurado 60 días, sellado a fuego
                directo con leña de encino.
              </p>
              <div className="flex justify-between items-center border-t border-outline-variant/20 pt-4">
                <span className="text-xs tracking-widest text-primary uppercase">
                  Dry-Aged 60 Días
                </span>
                <span className="text-2xl font-bold">Q 1,850</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Secondary List with images */}
        <div className="md:col-span-5 pt-8 md:pt-20 space-y-10">
          {carnes.map((c, i) => (
            <ScrollReveal key={i}>
              <div className="group flex gap-5 items-start border-l-2 border-primary-container/30 pl-6 hover:border-primary-container transition-colors duration-300">
                {/* Thumbnail */}
                <div className="flex-shrink-0 w-20 h-20 overflow-hidden rounded-sm">
                  <div
                    className="w-full h-full bg-cover bg-center grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${c.img}')` }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-bold uppercase tracking-tight">
                    {c.name}
                  </h3>
                  <p className="text-secondary mb-2 italic text-sm leading-relaxed">
                    {c.desc}
                  </p>
                  <span className="text-lg font-bold text-on-surface">{c.price}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
