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

  // Always scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Narrow the type for closures
    const c = canvas;
    const context = ctx;

    function resize() {
      c.width = c.offsetWidth;
      c.height = c.offsetHeight;
    }
    resize();
    window.addEventListener("resize", resize);

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

    const embers: Ember[] = Array.from({ length: 120 }, () => new EmberClass(true));

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

      {/* Ember canvas overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <span className="text-xs uppercase tracking-[0.3em] text-primary-light mb-6 block font-medium hero-fade-up">
          Jalapa, Guatemala
        </span>
        <p
          className="text-xl md:text-2xl text-secondary-dim mb-2 font-light tracking-widest uppercase hero-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          Sabor que Enciende los Sentidos
        </p>
        <h1
          className="text-6xl md:text-8xl font-black tracking-tighter text-on-surface mb-8 uppercase leading-[0.9] hero-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          AL{" "}
          <span className="text-primary-container">CARBÓN</span>
        </h1>
        <p
          className="text-lg md:text-xl text-secondary-dim/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed hero-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          La maestría del fuego y la selección de cortes más exclusiva de la
          región. Una experiencia nocturna de prestigio.
        </p>
        <div
          className="flex flex-col md:flex-row items-center justify-center gap-6 hero-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="/menu"
            className="bg-gradient-to-r from-primary-container to-primary-hover text-on-surface px-4 md:px-10 py-4 font-bold rounded-sm text-lg tracking-widest uppercase hover:brightness-125 transition-all btn-press inline-block"
          >
            Explorar Menú
          </a>
          <a
            href="/menu#bodega"
            className="border border-outline-variant/30 text-on-surface px-4 md:px-10 py-4 font-bold rounded-sm text-lg tracking-widest uppercase hover:bg-surface-high transition-all btn-ghost inline-block"
          >
            Nuestra Cava
          </a>
        </div>
      </div>
    </section>
  );
}
