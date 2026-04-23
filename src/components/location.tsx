import { Icon } from "@/components/icon";
import { ScrollReveal } from "@/components/scroll-reveal";

export function Location() {
  return (
    <section id="contact" className="py-24 bg-surface-dim">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch">
          {/* Info */}
          <ScrollReveal className="flex flex-col justify-center">
            <h2 className="text-5xl font-black text-on-surface uppercase mb-8 tracking-tighter">
              <span className="text-outline-variant/50 mr-3 font-mono text-3xl align-middle">05</span>
              <span className="align-middle">Encuéntranos</span>
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 flex items-center justify-center bg-surface-high rounded-sm group-hover:bg-primary-container/20 transition-colors border border-outline-variant/20 shadow-lg shadow-black/30">
                  <Icon
                    name="location_on"
                    className="text-primary-container text-2xl"
                  />
                </div>
                <div>
                  <h5 className="text-on-surface font-bold uppercase tracking-wider mb-1 text-sm">
                    Ubicación
                  </h5>
                  <p className="text-secondary-dim leading-relaxed">
                    Calle Principal 4-55, Zona 1
                    <br />
                    Jalapa, Guatemala
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 flex items-center justify-center bg-surface-high rounded-sm group-hover:bg-primary-container/20 transition-colors border border-outline-variant/20 shadow-lg shadow-black/30">
                  <Icon
                    name="schedule"
                    className="text-primary-container text-2xl"
                  />
                </div>
                <div>
                  <h5 className="text-on-surface font-bold uppercase tracking-wider mb-1 text-sm">
                    Horario
                  </h5>
                  <p className="text-secondary-dim leading-relaxed">
                    Mar - Sáb: 12:00 PM - 11:00 PM
                    <br />
                    Dom: 12:00 PM - 6:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 flex items-center justify-center bg-surface-high rounded-sm group-hover:bg-primary-container/20 transition-colors border border-outline-variant/20 shadow-lg shadow-black/30">
                  <Icon
                    name="call"
                    className="text-primary-container text-2xl"
                  />
                </div>
                <div>
                  <h5 className="text-on-surface font-bold uppercase tracking-wider mb-1 text-sm">
                    Contacto
                  </h5>
                  <p className="text-secondary-dim leading-relaxed">
                    +502 7922-0000
                    <br />
                    reservas@alcarbon.gt
                  </p>
                </div>
              </div>
            </div>

            {/* Social icons */}
            <div className="mt-12 flex gap-3">
              <a
                href="#"
                className="w-12 h-12 flex items-center justify-center bg-surface-high rounded-sm hover:bg-primary-container hover:text-white transition-all duration-300 group border border-outline-variant/20 shadow-lg shadow-black/30"
                aria-label="Compartir"
              >
                <Icon name="share" className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="w-12 h-12 flex items-center justify-center bg-surface-high rounded-sm hover:bg-primary-container hover:text-white transition-all duration-300 group border border-outline-variant/20 shadow-lg shadow-black/30"
                aria-label="Web"
              >
                <Icon name="public" className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </ScrollReveal>

          {/* Google Maps embed */}
          <ScrollReveal stagger={1} className="h-full min-h-[400px]">
            <div className="h-full w-full relative rounded-sm overflow-hidden border border-outline-variant/10 editorial-shadow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15439.123456789!2d-89.988!3d14.634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDM4JzAyLjQiTiA4OcKwNTknMTYuOCJX!5e0!3m2!1ses!2sgt!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Al Carbón"
                className="absolute inset-0"
              />
              {/* Overlay pin */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative">
                  <Icon
                    name="location_on"
                    className="text-primary-container text-5xl drop-shadow-lg"
                    filled
                  />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary-light rounded-full animate-ping" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
