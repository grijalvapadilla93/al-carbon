import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-surface-dim px-8 text-center">
      <span className="text-[120px] md:text-[180px] font-black text-surface-high leading-none tracking-tighter select-none">
        404
      </span>
      <h1 className="text-3xl md:text-5xl font-black text-on-surface uppercase tracking-tighter mb-4 -mt-8">
        Página no encontrada
      </h1>
      <p className="text-secondary-dim max-w-md mb-10">
        La página que buscas no existe o ha sido movida. Vuelve al inicio para continuar tu experiencia.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-3 bg-primary-container text-on-surface px-8 py-4 font-black uppercase tracking-wider text-sm rounded-sm hover:brightness-125 transition-all btn-press"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
