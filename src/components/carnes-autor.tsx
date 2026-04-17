import { ScrollReveal } from "@/components/scroll-reveal";

export function CarnesAutor() {
  return (
    <section id="carnes" className="max-w-7xl mx-auto px-6 lg:px-4 md:px-12 py-24">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-5xl font-extrabold tracking-tighter mb-2">
              CARNES DE AUTOR
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
                className="w-full h-full grayscale-[0.2] transition-transform duration-700 group-hover:scale-105 bg-cover bg-center img-zoom"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80')",
                }}
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-surface-container p-8 md:p-12 editorial-shadow max-w-sm">
              <h3 className="text-3xl font-bold mb-2">TOMAHAWK RESERVE</h3>
              <p className="text-sm text-secondary-fixed-dim leading-relaxed mb-6">
                1.2kg de pura potencia. Madurado 60 días, sellado a fuego
                directo con leña de encino.
              </p>
              <div className="flex justify-between items-center border-t border-outline-variant/20 pt-4">
                <span className="text-xs tracking-widest text-primary uppercase">
                  DRY-AGED 60 DÍAS
                </span>
                <span className="text-2xl font-bold">$1,850</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Secondary List */}
        <div className="md:col-span-5 pt-20 space-y-16">
          <ScrollReveal>
            <div className="border-l-2 border-primary-container/30 pl-8">
              <h3 className="text-2xl font-bold mb-2 uppercase">
                RIBEYE BLACK ANGUS
              </h3>
              <p className="text-secondary mb-4 italic">
                500g de infiltración perfecta, marmoleo grado 7.
              </p>
              <span className="text-xl font-bold text-on-surface">$890</span>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="border-l-2 border-primary-container/30 pl-8">
              <h3 className="text-2xl font-bold mb-2 uppercase">
                PICAÑA DE LA CASA
              </h3>
              <p className="text-secondary mb-4 italic">
                Corte brasileño con costra de sal ahumada y chimichurri de
                habanero.
              </p>
              <span className="text-xl font-bold text-on-surface">$720</span>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="border-l-2 border-primary-container/30 pl-8">
              <h3 className="text-2xl font-bold mb-2 uppercase">
                VACÍO URUGUAYO
              </h3>
              <p className="text-secondary mb-4 italic">
                Textura firme y sabor intenso, terminado con mantequilla de
                romero.
              </p>
              <span className="text-xl font-bold text-on-surface">$640</span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
