"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import { Icon } from "@/components/icon";

const testimonials = [
  {
    name: "María Fernanda López",
    role: "Cliente frecuente — Ciudad de Guatemala",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    stars: 5,
    text: "La maduración de 45 días se nota en cada bocado. El sabor es profundo, la atención impecable. Sin duda, el mejor restaurante de carnes que he visitado en Guatemala.",
  },
  {
    name: "Carlos Figueroa",
    role: "Food blogger — Antigua",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    stars: 5,
    text: "El ambiente, la selección de vinos y el conocimiento del personal hacen de Al Carbón una experiencia única. La cava privada es imperdible. Altamente recomendado.",
  },
  {
    name: "Ana Lucía Pérez",
    role: "Empresaria — Jalapa",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    stars: 5,
    text: "Cada visita es una celebración. Los cortes premium son excepcionales y el servicio supera todas las expectativas. Mi lugar favorito para cenar con clientes.",
  },
];

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <Icon
      name={filled ? "star" : "star_border"}
      className={filled ? "text-[#C4622D]" : "text-outline"}
    />
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-surface-dim testimonials-section">
      <div className="max-w-6xl mx-auto px-8">
        {/* Section title */}
        <ScrollReveal>
          <div className="mb-16 text-center">
            <span className="text-primary-container font-black text-sm uppercase tracking-[0.4em] mb-4 block">
              Voces
            </span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-on-surface uppercase">
              Lo que dicen nuestros comensales
            </h2>
          </div>
        </ScrollReveal>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <ScrollReveal key={i} stagger={i + 1}>
              <div className="testimonial-card flex flex-col gap-6">
                {/* Avatar + name + role */}
                <div className="flex items-start gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="testimonial-avatar"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="testimonial-name text-lg leading-tight">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-secondary-dim/70 uppercase tracking-wider mt-1">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Stars */}
                <div className="testimonial-stars flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <StarIcon key={j} filled={j < testimonial.stars} />
                  ))}
                </div>

                {/* Quote */}
                <p className="testimonial-text leading-relaxed text-sm md:text-base">
                  "{testimonial.text}"
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
