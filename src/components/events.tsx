import { ScrollReveal } from "@/components/scroll-reveal";

const events = [
  {
    day: "15",
    month: "OCTUBRE",
    title: "Noche de Jazz & Bourbon",
    description:
      "Cuarteto en vivo y degustación de destilados americanos de la reserva Al Carbón.",
    time: null,
    soldOut: true,
  },
  {
    day: "22",
    month: "OCTUBRE",
    title: "Cata: Malbec & Fuego",
    description:
      "Maridaje de 4 tiempos con nuestro Sommelier de la casa. Selección de bodegas boutique.",
    time: "20:00 HRS",
    soldOut: false,
  },
  {
    day: "31",
    month: "OCTUBRE",
    title: "Mystic Night: BBQ Edition",
    description:
      "Menú especial de temporada con técnicas de ahumado ancestral en nuestra terraza.",
    time: "21:00 HRS",
    soldOut: false,
  },
];

export function Events() {
  return (
    <section id="events" className="py-24 bg-surface-dim border-t border-outline-variant/10">
      <div className="max-w-6xl mx-auto px-8">
        <ScrollReveal>
          <h2 className="text-5xl md:text-6xl font-black text-on-surface text-center mb-16 uppercase tracking-tighter">
            <span className="text-outline-variant/50 mr-3 font-mono text-3xl md:text-4xl align-middle">03</span>
            <span className="align-middle">Próximos Eventos</span>
          </h2>
        </ScrollReveal>

        <div className="space-y-4">
          {events.map((event, i) => (
            <ScrollReveal key={i} stagger={i + 1}>
              <div className="group flex flex-col md:flex-row items-center py-10 md:py-8 bg-gradient-to-r from-surface-low via-surface to-surface-low border border-outline-variant/25 shadow-xl shadow-black/50 hover:shadow-2xl hover:shadow-black/60 hover:border-primary-container/25 transition-all duration-500 px-6 md:px-10 gap-6 rounded-sm">
                {/* Date */}
                <div className="flex-shrink-0 w-full md:w-32 text-center md:text-left">
                  <span className="block text-4xl font-black text-primary-container leading-none">
                    {event.day}
                  </span>
                  <span className="text-sm uppercase tracking-wider text-on-surface-variant font-bold">
                    {event.month}
                  </span>
                </div>

                {/* Info */}
                <div className="flex-grow text-center md:text-left">
                  <h4 className="text-2xl font-extrabold text-on-surface uppercase mb-2">
                    {event.title}
                  </h4>
                  <p className="text-secondary-dim text-base max-w-xl">
                    {event.description}
                  </p>
                </div>

                {/* Action */}
                <div className="flex flex-col items-center md:items-end gap-3 min-w-[180px]">
                  {event.soldOut ? (
                    <div className="flex flex-col items-center md:items-end gap-2">
                      <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-wider text-outline px-4 py-2 bg-surface-high rounded-sm">
                        <span className="w-2 h-2 rounded-full bg-outline" />
                        AGOTADO
                      </span>
                      <span className="text-xs text-secondary-dim">
                        Lista de espera disponible
                      </span>
                    </div>
                  ) : (
                    <>
                      <span className="text-sm font-black uppercase tracking-wider text-on-surface">
                        {event.time}
                      </span>
                      <button className="bg-primary-container text-on-surface px-4 md:px-8 py-3 font-black uppercase tracking-wider text-sm rounded-sm hover:shadow-[0_0_25px_rgba(139,0,0,0.4)] transition-all w-full editorial-shadow btn-press">
                        Reservar
                      </button>
                    </>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
