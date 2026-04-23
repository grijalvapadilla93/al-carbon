import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MenuHero } from "@/components/menu-hero";
import { CarnesAutor } from "@/components/carnes-autor";
import { Entradas } from "@/components/entradas";
import { BodegaPrivada } from "@/components/bodega-privada";
import { Postres } from "@/components/postres";

export const metadata: Metadata = {
  title: "La Carta | Al Carbón — Carnes Maduradas, Vinos & Postres",
  description:
    "Descubre nuestra selección de cortes Prime madurados 45-60 días, entradas artesanales, bodega privada y postres de autor. Reserva tu experiencia en Jalapa, Guatemala.",
  openGraph: {
    title: "La Carta | Al Carbón",
    description: "Carnes maduradas, vinos exclusivos y postres artesanales.",
    type: "website",
  },
};

export default function MenuPage() {
  return (
    <>
      <Navbar />
      <main>
        <MenuHero />
        <CarnesAutor />
        <Entradas />
        <BodegaPrivada />
        <Postres />
      </main>
      <Footer />
    </>
  );
}
