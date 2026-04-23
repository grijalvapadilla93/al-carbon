import { ScrollReveal } from "@/components/scroll-reveal";

export function MenuBento() {
  return (
    <section className="py-24 bg-surface-dim">
      <div className="max-w-7xl mx-auto px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-secondary-dim font-medium uppercase tracking-[0.2em] text-xs mb-2 block">
                <span className="text-outline-variant/50 mr-3 font-mono text-xs">02</span>
                Criterio Culinario
              </span>
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-on-surface uppercase">
                La Carta
              </h2>
            </div>
            <a
              href="/menu"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-primary-container to-primary-hover text-on-surface px-8 py-4 font-black uppercase tracking-[0.15em] text-sm rounded-sm hover:shadow-[0_0_30px_rgba(139,0,0,0.35)] transition-all duration-300 btn-press shadow-lg shadow-primary-container/20"
            >
              <span>Ver Menú Completo</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Carnes de Autor - Large */}
          <ScrollReveal className="md:col-span-2">
            <div className="group relative h-[500px] bg-surface overflow-hidden card-lift border border-outline-variant/25 shadow-2xl shadow-black/60">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60 img-zoom"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-surface-dim/40 to-transparent" />
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
                  className="text-xs uppercase tracking-[0.15em] text-primary-light hover:text-white transition-colors"
                >
                  Explorar Cortes →
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Vinos */}
          <ScrollReveal stagger={1}>
            <div className="group relative h-[500px] bg-gradient-to-b from-surface-high to-surface overflow-hidden card-lift border border-outline-variant/25 shadow-2xl shadow-black/60">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-50 img-zoom"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-surface-dim/40 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <h3 className="text-3xl font-bold text-on-surface mb-2 uppercase">
                  Vinos
                </h3>
                <p className="text-secondary-dim mb-4">
                  Etiquetas exclusivas de Argentina, Chile y el Viejo Mundo.
                </p>
                <a
                  href="/menu#bodega"
                  className="text-xs uppercase tracking-[0.15em] text-primary-light hover:text-white transition-colors"
                >
                  Ver Cava →
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
