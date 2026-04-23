"use client";

import { useRef, useEffect } from "react";

interface Ember {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  life: number;
  decay: number;
  hue: number;
  wobble: number;
  wobbleSpeed: number;
  reset: (initial?: boolean) => void;
  update: () => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
}

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Ember canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const c = canvas;
    const context = ctx;

    function resize() {
      c.width = c.offsetWidth;
      c.height = c.offsetHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    const isMobile = window.innerWidth < 768;
    const emberCount = isMobile ? 60 : 120;

    class EmberClass implements Ember {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      life: number;
      decay: number;
      hue: number;
      wobble: number;
      wobbleSpeed: number;

      constructor(initial = false) {
        this.x = Math.random() * c.width;
        this.y = initial ? Math.random() * c.height : c.height + 10;
        this.size = Math.random() * 2.5 + 0.5;
        this.speedY = Math.random() * 1.5 + 0.8;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.life = initial ? Math.random() : 1;
        this.decay = Math.random() * 0.006 + 0.003;
        this.hue = Math.random() * 30 + 10;
        this.wobble = Math.random() * Math.PI * 2;
        this.wobbleSpeed = Math.random() * 0.05 + 0.02;
      }

      reset(_initial = false) {
        this.x = Math.random() * c.width;
        this.y = c.height + 10;
        this.size = Math.random() * 2.5 + 0.5;
        this.speedY = Math.random() * 1.5 + 0.8;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.life = 1;
        this.decay = Math.random() * 0.006 + 0.003;
        this.hue = Math.random() * 30 + 10;
        this.wobble = Math.random() * Math.PI * 2;
        this.wobbleSpeed = Math.random() * 0.05 + 0.02;
      }

      update() {
        this.wobble += this.wobbleSpeed;
        this.x += this.speedX + Math.sin(this.wobble) * 0.5;
        this.y -= this.speedY;
        this.life -= this.decay;
        if (this.life <= 0 || this.y < -10) this.reset();
      }

      draw(context: CanvasRenderingContext2D) {
        const alpha = this.life * (this.y < 100 ? this.y / 100 : 1);
        context.save();
        context.globalAlpha = Math.max(0, alpha);
        context.fillStyle = `hsl(${this.hue}, 90%, ${50 + this.life * 30}%)`;
        context.shadowBlur = 6;
        context.shadowColor = `hsl(${this.hue}, 90%, 60%)`;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
        context.restore();
      }
    }

    const embers: Ember[] = Array.from({ length: emberCount }, () => new EmberClass(true));

    let animationId: number;
    function animate() {
      context.clearRect(0, 0, c.width, c.height);
      embers.forEach((e) => {
        e.update();
        e.draw(context);
      });
      animationId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-surface-dim">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source src="/brasas.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-surface-dim/60" />
      </div>

      {/* Fallback gradient behind canvas */}
      <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 via-transparent to-orange-950/10 z-[1] pointer-events-none" />

      {/* Vignette — empuja atención al centro */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(0,0,0,0.5) 100%)",
        }}
      />

      {/* Ember canvas overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-[2]"
      />

      {/* Content con animaciones CSS puras */}
      <div className="relative z-10 text-center px-4 max-w-5xl">
        {/* Location tag — fade-up 300ms delay */}
        <span
          className="text-xs uppercase tracking-[0.3em] text-primary-light mb-6 block font-medium hero-content"
          style={{ opacity: 0, animation: "heroFadeUp 0.7s 0.3s forwards" }}
        >
          Jalapa, Guatemala
        </span>

        {/* Subtitle — fade-up 600ms delay */}
        <p
          className="text-xl md:text-2xl text-secondary-dim mb-2 font-light tracking-widest uppercase hero-content"
          style={{ opacity: 0, animation: "heroFadeUp 0.7s 0.6s forwards" }}
        >
          Sabor que Enciende los Sentidos
        </p>

        {/* Title — simple fade-up + stagger letters CSS */}
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-on-surface mb-8 uppercase leading-[0.9]">
          AL{" "}
          <span className="inline-flex">
            <span className="hero-letter-1 inline-block">C</span>
            <span className="hero-letter-2 inline-block">A</span>
            <span className="hero-letter-3 inline-block">R</span>
            <span className="hero-letter-4 inline-block">B</span>
            <span className="hero-letter-5 inline-block">Ó</span>
            <span className="hero-letter-6 inline-block">N</span>
          </span>
        </h1>

        {/* Description — fade-up 900ms delay */}
        <p
          className="text-lg md:text-xl text-secondary-dim/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed hero-content"
          style={{ opacity: 0, animation: "heroFadeUp 0.7s 0.9s forwards" }}
        >
          La maestría del fuego y la selección de cortes más exclusiva de la
          región. Una experiencia nocturna de prestigio.
        </p>

        {/* CTA buttons — slide-up 20px, 1200ms delay */}
        <div
          className="flex flex-col md:flex-row items-center justify-center gap-6 hero-content"
          style={{
            opacity: 0,
            animation: "slideUp 0.7s 1.2s forwards",
          }}
        >
          <a
            href="/menu"
            className="bg-gradient-to-r from-primary-container to-primary-hover text-on-surface px-4 md:px-10 py-4 font-bold rounded-sm text-lg tracking-[0.15em] uppercase hover:shadow-[0_0_30px_rgba(139,0,0,0.35)] transition-all btn-press inline-block"
          >
            Explorar Menú
          </a>
          <a
            href="/menu#bodega"
            className="border border-outline-variant/30 text-on-surface px-4 md:px-10 py-4 font-bold rounded-sm text-lg tracking-[0.15em] uppercase hover:bg-surface-high transition-all btn-ghost inline-block"
          >
            Nuestra Cava
          </a>
        </div>
      </div>
    </section>
  );
}
