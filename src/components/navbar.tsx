"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@/components/icon";

export function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Menú", href: "/menu" },
    { name: "Reservaciones", href: "/#contact" },
    { name: "Experiencia", href: "/#events" },
    { name: "Social", href: "/#social" },
    { name: "Contacto", href: "/#contact" },
  ];

  // Cerrar menú móvil al volver con back/forward (bfcache)
  useEffect(() => {
    const onPageshow = (e: PageTransitionEvent) => {
      if (e.persisted) {
        setOpen(false);
      }
    };
    window.addEventListener("pageshow", onPageshow);
    return () => window.removeEventListener("pageshow", onPageshow);
  }, []);

  const handleNav = (e: React.MouseEvent, href: string) => {
    setOpen(false);
    if (href.startsWith("/#")) {
      const hash = href.slice(1); // "#contact"
      if (typeof window !== "undefined") {
        if (window.location.pathname !== "/") {
          // En otra página: navegación completa
          window.location.href = href;
        } else {
          // En la home: scroll suave, actualizar URL sin recargar
          e.preventDefault();
          window.history.pushState(null, "", hash);
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }
      }
      return;
    }
    if (href.startsWith("#")) return;
    e.preventDefault();
    router.push(href);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 md:px-8 py-4 md:py-6 bg-neutral-950/80 backdrop-blur-xl">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity duration-300">
          <img
            src="/logo.jpg"
            alt="Al Carbón Logo"
            className="h-8 md:h-10 w-auto"
          />
          <span className="text-lg md:text-2xl font-black tracking-tighter text-neutral-100 uppercase">
            Al Carbón
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((item, i) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNav(e, item.href)}
              className={`font-semibold tracking-tight transition-all duration-300 link-underline ${
                i === 0
                  ? "text-primary-light"
                  : "text-neutral-400 hover:text-primary-light"
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/50279220000?text=Hola! Me gustaría hacer una reserva en Al Carbón"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 font-bold rounded-sm text-sm hover:brightness-110 active:scale-95 transition-all btn-press"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
          <a
            href="/#contact"
            className="bg-primary-container text-primary-light px-6 py-2 font-bold rounded-sm uppercase tracking-wider text-sm hover:brightness-110 active:scale-95 transition-all btn-press"
          >
            Reservar Mesa
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-none p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-[2px] bg-orange-400 transition-all duration-300 ${
              open ? "rotate-45 translate-y-[5.5px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-orange-400 transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-orange-400 transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-[5.5px]" : ""
            }`}
          />
        </button>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-neutral-950/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {links.map((item, i) => (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => handleNav(e, item.href)}
            className="text-2xl font-bold text-neutral-100 hover:text-orange-400 transition-colors duration-300"
            style={{
              transform: open ? "translateY(0)" : "translateY(20px)",
              opacity: open ? 1 : 0,
              transition: `all 0.4s cubic-bezier(0.22, 1, 0.36, 1) ${i * 80}ms`,
            }}
          >
            {item.name}
          </a>
        ))}

        <div className="flex flex-col items-center gap-4 mt-8">
          <a
            href="https://wa.me/50279220000?text=Hola! Me gustaría hacer una reserva en Al Carbón"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 font-bold rounded-sm text-sm btn-press"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
          <a
            href="/#contact"
            onClick={() => setOpen(false)}
            className="bg-primary-container text-primary-light px-8 py-3 font-bold rounded-sm uppercase tracking-wider text-sm btn-press"
          >
            Reservar Mesa
          </a>
        </div>
      </div>
    </>
  );
}
