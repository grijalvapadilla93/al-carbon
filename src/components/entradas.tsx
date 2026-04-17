import { ScrollReveal } from "@/components/scroll-reveal";

export function Entradas() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-4 md:px-12 py-24">
      <ScrollReveal>
        <div className="mb-16">
          <h2 className="text-4xl font-extrabold tracking-tighter">
            PRÓLOGO: LAS ENTRADAS
          </h2>
          <div className="h-1 w-24 bg-primary-container mt-4" />
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Large carpaccio card */}
        <ScrollReveal className="md:col-span-2">
          <div className="bg-surface-container-low p-1 relative overflow-hidden group card-lift">
            <div
              className="w-full h-80 opacity-60 group-hover:opacity-80 transition-opacity bg-cover bg-center img-zoom"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=800&q=80')",
              }}
            />
            <div className="absolute bottom-6 left-6">
              <h4 className="text-2xl font-bold">CARPACCIO DE RES</h4>
              <p className="text-sm text-secondary-fixed-dim">
                Láminas de solomillo, trufa negra y parmesano 24 meses.
              </p>
              <span className="block mt-2 font-bold text-primary">$310</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Chicharrón */}
        <ScrollReveal className="md:col-span-1">
          <div className="bg-surface-container-high p-8 flex flex-col justify-end h-full min-h-[320px]">
            <h4 className="text-xl font-bold uppercase mb-2">
              CHICHARRÓN DE RIBEYE
            </h4>
            <p className="text-xs text-secondary-fixed-dim mb-4">
              Sobre guacamole rústico y tortillas de maíz criollo hechas a mano.
            </p>
            <span className="font-bold text-primary">$450</span>
          </div>
        </ScrollReveal>

        {/* Queso Fundido */}
        <ScrollReveal className="md:col-span-1">
          <div className="bg-surface-container-lowest border border-outline-variant/15 p-8 flex flex-col justify-between h-full min-h-[320px]">
            <span className="text-primary text-4xl">🔥</span>
            <div>
              <h4 className="text-xl font-bold uppercase mb-2">
                QUESO FUNDIDO
              </h4>
              <p className="text-xs text-secondary-fixed-dim">
                Mezcla de quesos regionales con chorizo de autor al mezcal.
              </p>
              <span className="block mt-2 font-bold text-primary">$280</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
