import { Icon } from "@/components/icon";
import { ScrollReveal } from "@/components/scroll-reveal";

export function Promotions() {
  return (
    <section className="py-24 bg-surface-dim">
      <div className="max-w-7xl mx-auto px-8">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <span className="text-primary-container font-black text-sm uppercase tracking-[0.4em] mb-4 block">
              Experiencias Exclusivas
            </span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-on-surface uppercase">
              Ofertas Disponibles
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-stretch bg-surface-low overflow-hidden editorial-shadow border border-outline-variant/10">
            {/* Image */}
            <div className="md:col-span-7 relative min-h-[400px]">
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80')",
                }}
              />
            </div>
            {/* Text */}
            <div className="md:col-span-5 p-12 md:p-20 flex flex-col justify-center bg-surface-high border-l border-outline-variant/10">
              <span className="text-primary-container font-black text-xs uppercase tracking-[0.2em] mb-4">
                Weekly Burn
              </span>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-on-surface mb-6 uppercase">
                2x1 Mixología de Autor
              </h3>
              <p className="text-secondary-dim mb-8 leading-relaxed">
                Todos los jueves a partir de las 19:00 hrs. Déjate seducir por
                nuestras creaciones infusionadas con humo y esencias botánicas.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-4 text-primary-light font-bold uppercase tracking-widest text-sm group"
              >
                Reservar mi lugar
                <Icon
                  name="arrow_forward"
                  className="group-hover:translate-x-2 transition-transform"
                />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
