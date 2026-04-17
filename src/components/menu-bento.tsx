import { ScrollReveal } from "@/components/scroll-reveal";

export function MenuBento() {
  return (
    <section className="py-24 bg-surface-dim">
      <div className="max-w-7xl mx-auto px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-secondary-dim font-medium uppercase tracking-[0.2em] text-xs mb-2 block">
                Criterio Culinario
              </span>
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-on-surface uppercase">
                La Carta
              </h2>
            </div>
            <a
              href="/menu"
              className="text-primary-container border-b-2 border-primary-container pb-1 font-black uppercase tracking-widest text-sm hover:brightness-125 transition-all duration-300 link-underline"
            >
              Ver Menú Completo
            </a>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Carnes de Autor - Large */}
          <ScrollReveal className="md:col-span-2">
            <div className="group relative h-[500px] bg-surface overflow-hidden card-lift">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60 img-zoom"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dim to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <h3 className="text-3xl font-bold text-on-surface mb-2 uppercase">
                  Carnes de Autor
                </h3>
                <p className="text-secondary-dim mb-4 max-w-md">
                  Selección Prime madurada por 45 días en cámara de sal del
                  Himalaya.
                </p>
                <a
                  href="/menu#carnes"
                  className="text-xs uppercase tracking-widest text-primary-light"
                >
                  Explorar Cortes
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Vinos */}
          <ScrollReveal stagger={1}>
            <div className="group relative h-[500px] bg-surface-high overflow-hidden card-lift">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-50 img-zoom"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dim to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <h3 className="text-3xl font-bold text-on-surface mb-2 uppercase">
                  Vinos
                </h3>
                <p className="text-secondary-dim mb-4">
                  Etiquetas exclusivas de Argentina, Chile y el Viejo Mundo.
                </p>
                <a
                  href="/menu#bodega"
                  className="text-xs uppercase tracking-widest text-primary-light"
                >
                  Ver Cava
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
