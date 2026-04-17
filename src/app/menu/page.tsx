import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MenuHero } from "@/components/menu-hero";
import { CarnesAutor } from "@/components/carnes-autor";
import { Entradas } from "@/components/entradas";
import { BodegaPrivada } from "@/components/bodega-privada";
import { Postres } from "@/components/postres";

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
