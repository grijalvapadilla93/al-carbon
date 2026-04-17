import { Icon } from "@/components/icon";
import { ScrollReveal } from "@/components/scroll-reveal";

export function Location() {
  return (
    <section id="contact" className="py-24 bg-surface-dim">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Info */}
          <ScrollReveal>
            <h2 className="text-5xl font-black text-on-surface uppercase mb-8 tracking-tighter">
              Encuéntranos
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <Icon
                  name="location_on"
                  className="text-primary-container text-3xl"
                />
                <div>
                  <h5 className="text-on-surface font-bold uppercase tracking-widest mb-1">
                    Ubicación
                  </h5>
                  <p className="text-secondary-dim">
                    Calle Principal 4-55, Zona 1
                    <br />
                    Jalapa, Guatemala
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <Icon
                  name="schedule"
                  className="text-primary-container text-3xl"
                />
                <div>
                  <h5 className="text-on-surface font-bold uppercase tracking-widest mb-1">
                    Horario
                  </h5>
                  <p className="text-secondary-dim">
                    Mar - Sáb: 12:00 PM - 11:00 PM
                    <br />
                    Dom: 12:00 PM - 6:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <Icon
                  name="call"
                  className="text-primary-container text-3xl"
                />
                <div>
                  <h5 className="text-on-surface font-bold uppercase tracking-widest mb-1">
                    Contacto
                  </h5>
                  <p className="text-secondary-dim">
                    +502 7922-0000
                    <br />
                    reservas@alcarbon.gt
                  </p>
                </div>
              </div>
            </div>

            {/* Social icons */}
            <div className="mt-12 flex gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-surface-high rounded-sm hover:bg-primary-container transition-colors cursor-pointer">
                <Icon name="share" />
              </div>
              <div className="w-12 h-12 flex items-center justify-center bg-surface-high rounded-sm hover:bg-primary-container transition-colors cursor-pointer">
                <Icon name="public" />
              </div>
            </div>
          </ScrollReveal>

          {/* Map placeholder */}
          <ScrollReveal stagger={1}>
            <div className="h-[500px] bg-surface-dim relative editorial-shadow grayscale contrast-125">
              <div className="absolute inset-0 bg-neutral-900 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center opacity-30"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80')",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <Icon
                      name="location_on"
                      className="text-primary-container text-5xl"
                      filled
                    />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary-light rounded-full animate-ping" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 bg-surface-highest/90 backdrop-blur-md p-6 border-l-4 border-primary-container">
                <p className="text-xs font-bold uppercase tracking-widest text-on-surface">
                  Indicaciones
                </p>
                <p className="text-secondary-dim text-sm">
                  Frente al Parque Central, Edificio Los Olivos.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
