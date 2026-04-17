import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Promotions } from "@/components/promotions";
import { MenuBento } from "@/components/menu-bento";
import { Events } from "@/components/events";
import { SocialGallery } from "@/components/social-gallery";
import { Location } from "@/components/location";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Promotions />
        <MenuBento />
        <Events />
        <SocialGallery />
        <Location />
      </main>
      <Footer />
    </>
  );
}
