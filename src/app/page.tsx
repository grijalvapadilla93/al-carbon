"use client";

import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Promotions } from "@/components/promotions";
import { MenuBento } from "@/components/menu-bento";
import { Events } from "@/components/events";
import { CoverflowCarousel } from "@/components/coverflow-carousel";
// import { Testimonials } from "@/components/testimonials";
import { Location } from "@/components/location";
import { Footer } from "@/components/footer";
import { useEffect } from "react";

function scrollToHash(hash: string) {
  if (!hash) return;
  const el = document.querySelector(hash);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Home() {
  useEffect(() => {
    scrollToHash(window.location.hash);
  }, []);

  useEffect(() => {
    const onHashChange = () => scrollToHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <Promotions />
        <div className="section-divider" />
        <MenuBento />
        <div className="section-divider" />
        <Events />
        <div className="section-divider" />
        <CoverflowCarousel />
        <div className="section-divider" />
        {/* <Testimonials /> */}
        <Location />
      </main>
      <Footer />
    </>
  );
}
