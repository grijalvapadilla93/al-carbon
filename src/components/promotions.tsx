import { Icon } from "@/components/icon";
import { ScrollReveal } from "@/components/scroll-reveal";

export function Promotions() {
  return (
    <section id="promo" className="py-24 bg-surface-dim">
      <div className="max-w-7xl mx-auto px-8">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <span className="text-primary-container font-black text-sm uppercase tracking-[0.4em] mb-4 block">
              <span className="text-outline-variant/50 mr-3 font-mono text-xs">01</span>
              Experiencias Exclusivas
            </span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-on-surface uppercase">
              Oferta de la Semana
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main offer */}
          <ScrollReveal className="md:col-span-8">
            <div className="group grid grid-cols-1 md:grid-cols-12 gap-0 items-stretch bg-surface-low overflow-hidden editorial-shadow border border-outline-variant/10 hover:border-primary-container/20 transition-all duration-500 h-full">
              {/* Image */}
              <div className="md:col-span-7 relative min-h-[400px] overflow-hidden">
                <div
                  className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-surface-low/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Shimmer on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              </div>
              {/* Text */}
              <div className="md:col-span-5 p-10 md:p-14 flex flex-col justify-center bg-surface-high border-l border-outline-variant/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-container/0 to-primary-container/0 group-hover:from-primary-container/5 group-hover:to-transparent transition-all duration-700 pointer-events-none" />
                
                <span className="text-primary-container font-black text-xs uppercase tracking-[0.2em] mb-4">
                  Weekly Burn
                </span>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tighter text-on-surface mb-6 uppercase">
                  2x1 Mixología de Autor
                </h3>
                <p className="text-secondary-dim mb-8 leading-relaxed">
                  Todos los jueves a partir de las 19:00 hrs. Déjate seducir por
                  nuestras creaciones infusionadas con humo y esencias botánicas.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-4 text-primary-light font-bold uppercase tracking-[0.15em] text-sm group/link"
                >
                  <span className="relative">
                    Reservar mi lugar
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-primary-light group-hover/link:w-full transition-all duration-300" />
                  </span>
                  <Icon
                    name="arrow_forward"
                    className="group-hover/link:translate-x-2 transition-transform"
                  />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Side teaser */}
          <ScrollReveal className="md:col-span-4" stagger={2}>
            <div className="group relative h-full min-h-[400px] overflow-hidden border border-outline-variant/10 hover:border-primary-container/20 transition-all duration-500 editorial-shadow bg-surface-low">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=600&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-surface-dim/80 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-light/80 block mb-2">
                  Próximamente
                </span>
                <h3 className="text-2xl font-bold text-on-surface uppercase tracking-tight mb-3">
                  Noche de Jazz & Bourbon
                </h3>
                <p className="text-sm text-secondary-dim mb-6 leading-relaxed">
                  Cuarteto en vivo, menú de 4 tiempos y degustación de reservas.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-widest text-primary uppercase">
                    15 Oct
                  </span>
                  <a
                    href="#events"
                    className="inline-flex items-center gap-2 text-primary-light font-bold uppercase tracking-[0.15em] text-xs group/link"
                  >
                    Ver eventos
                    <Icon
                      name="arrow_forward"
                      className="group-hover/link:translate-x-1 transition-transform text-sm"
                    />
                  </a>
                </div>
              </div>

              {/* Shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
