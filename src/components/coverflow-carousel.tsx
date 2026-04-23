"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
    title: "Cena Familiar",
    description: "Noches de calidad en familia",
    rotation: -2,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=80",
    title: "Parrilla en Vivo",
    description: "El espectáculo del fuego y la brasa",
    rotation: 1.5,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80",
    title: "After Work",
    description: "Relájate después del trabajo",
    rotation: -1,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80",
    title: "Cena Degustación",
    description: "Menú de 7 tiempos maridado con vinos",
    rotation: 2,
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&q=80",
    title: "Cava Privada",
    description: "Selección exclusiva de vinos y destilados",
    rotation: -1.5,
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=1200&q=80",
    title: "Noche de Jazz",
    description: "Música en vivo todos los viernes",
    rotation: 1,
  },
];

export function CoverflowCarousel() {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollTo = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(index, slides.length - 1));
    setActive(clamped);
    const el = itemRefs.current[clamped];
    if (el && trackRef.current) {
      const track = trackRef.current;
      const scrollLeft =
        el.offsetLeft - track.clientWidth / 2 + el.clientWidth / 2;
      track.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  }, []);

  const handlePrev = () => scrollTo(active - 1);
  const handleNext = () => scrollTo(active + 1);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let timeout: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const center = track.scrollLeft + track.clientWidth / 2;
        let closest = 0;
        let minDiff = Infinity;
        itemRefs.current.forEach((el, i) => {
          if (!el) return;
          const elCenter = el.offsetLeft + el.clientWidth / 2;
          const diff = Math.abs(center - elCenter);
          if (diff < minDiff) {
            minDiff = diff;
            closest = i;
          }
        });
        setActive(closest);
      }, 80);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section id="gallery" className="py-24 bg-surface-dim overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        {/* Title */}
        <ScrollReveal>
          <div className="mb-16 text-center">
            <span className="text-primary-container font-black text-sm uppercase tracking-[0.3em] mb-4 block">
              <span className="text-outline-variant/50 mr-3 font-mono text-xs">04</span>
              Momentos
            </span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-on-surface uppercase">
              Galería
            </h2>
          </div>
        </ScrollReveal>

        {/* Carousel */}
        <ScrollReveal>
          <div className="relative py-8">
            {/* Track */}
            <div
              ref={trackRef}
              className="flex gap-6 md:gap-10 overflow-x-auto snap-x snap-mandatory pb-12 pt-4 coverflow-carousel-track"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {slides.map((slide, i) => {
                const isActive = i === active;
                return (
                  <div
                    key={slide.id}
                    ref={(el) => { itemRefs.current[i] = el; }}
                    className="relative flex-shrink-0 snap-center cursor-pointer transition-all duration-300"
                    style={{
                      transform: isActive
                        ? "rotate(0deg) scale(1.05)"
                        : `rotate(${slide.rotation}deg) scale(0.95)`,
                      opacity: isActive ? 1 : 0.55,
                      zIndex: isActive ? 10 : 1,
                    }}
                    onClick={() => setLightbox(slide.image)}
                  >
                    {/* Polaroid frame */}
                    <div
                      className={`bg-[#f0ece6] p-3 pb-16 md:p-4 md:pb-20 shadow-2xl transition-shadow duration-300 ${
                        isActive ? "shadow-[0_20px_50px_rgba(0,0,0,0.5)]" : "shadow-[0_8px_24px_rgba(0,0,0,0.3)]"
                      }`}
                      style={{
                        width: " clamp(280px, 75vw, 400px)",
                      }}
                    >
                      {/* Photo area */}
                      <div className="relative overflow-hidden bg-neutral-200 aspect-[4/5]">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          loading="lazy"
                        />
                        {/* Subtle film grain overlay */}
                        <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                          }}
                        />
                      </div>
                      {/* Caption */}
                      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 text-center">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500 mb-0.5">
                          {slide.description}
                        </p>
                        <h3 className="text-lg md:text-xl font-black text-neutral-800 uppercase tracking-tight">
                          {slide.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Arrows (desktop only) */}
            <button
              onClick={handlePrev}
              className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center bg-surface-dim/90 border border-outline-variant/20 text-on-surface hover:bg-surface-high hover:border-primary-container transition-all rounded-full backdrop-blur-sm z-20"
              aria-label="Anterior"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button
              onClick={handleNext}
              className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center bg-surface-dim/90 border border-outline-variant/20 text-on-surface hover:bg-surface-high hover:border-primary-container transition-all rounded-full backdrop-blur-sm z-20"
              aria-label="Siguiente"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </ScrollReveal>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`h-1.5 rounded-full transition-all duration-200 ${
                i === active
                  ? "w-8 bg-primary-container"
                  : "w-1.5 bg-outline-variant/40 hover:bg-outline-variant/70"
              }`}
              aria-label={`Ir a slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-8 cursor-pointer"
          onClick={() => setLightbox(null)}
        >
          <img
            src={lightbox}
            alt="Ampliada"
            className="max-w-full max-h-full object-contain"
          />
          <button className="absolute top-6 right-6 text-white/70 hover:text-white text-2xl font-light">
            ✕
          </button>
        </div>
      )}
    </section>
  );
}
