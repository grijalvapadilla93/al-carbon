export function MenuHero() {
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full opacity-40 grayscale-[0.5] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1544025162-d76694265947?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-surface-dim" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <span className="block text-primary tracking-[0.3em] text-sm mb-4 uppercase hero-fade-up">
          Experiencia Al Carbón Reserve
        </span>
        <h1
          className="text-7xl md:text-9xl font-extrabold tracking-tighter text-on-surface mb-6 hero-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          LA CARTA
        </h1>
        <p
          className="text-xl md:text-2xl font-light text-secondary max-w-2xl mx-auto leading-relaxed italic hero-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          &ldquo;Donde el fuego susurra secretos a la carne y el humo se
          convierte en poesía.&rdquo;
        </p>
      </div>

      {/* Scroll indicator — bounce animation */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[10px] tracking-[0.2em] text-outline uppercase">Desliza</span>
        <div className="relative w-[1px] h-12 bg-gradient-to-b from-primary-container to-transparent">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary-container rounded-full animate-bounce" />
        </div>
      </div>
    </header>
  );
}
