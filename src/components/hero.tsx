export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-surface-dim">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full opacity-40 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1544025162-d76694265947?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-surface-dim/60" />
      </div>

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
