import { ScrollReveal } from "@/components/scroll-reveal";

export function Postres() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-4 md:px-12 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        {/* Dessert list */}
        <ScrollReveal className="order-2 md:order-1">
          <div>
            <h2 className="text-5xl font-extrabold tracking-tighter mb-12">
              FINAL DULCE
            </h2>
            <div className="space-y-12">
              <div className="group cursor-pointer card-subtle p-4 -mx-4 rounded-sm">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-2xl font-bold uppercase tracking-tight link-underline">
                    VOLCÁN DE CHOCOLATE
                  </h4>
                  <span className="text-primary font-bold">$240</span>
                </div>
                <p className="text-secondary text-sm leading-relaxed">
                  Cacao al 70%, centro líquido, helado de vainilla de Papantla y
                  sal de Maldon.
                </p>
              </div>
              <div className="group cursor-pointer card-subtle p-4 -mx-4 rounded-sm">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-2xl font-bold uppercase tracking-tight link-underline">
                    CHEESECAKE DE FRUTOS
                  </h4>
                  <span className="text-primary font-bold">$210</span>
                </div>
                <p className="text-secondary text-sm leading-relaxed">
                  Base de galleta artesanal, compota de frutos rojos del bosque
                  y menta fresca.
                </p>
              </div>
              <div className="group cursor-pointer card-subtle p-4 -mx-4 rounded-sm">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-2xl font-bold uppercase tracking-tight link-underline">
                    CREMA CATALANA
                  </h4>
                  <span className="text-primary font-bold">$180</span>
                </div>
                <p className="text-secondary text-sm leading-relaxed">
                  Clásico español con azúcar caramelizado al momento y un toque
                  de canela de Ceilán.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Dessert image */}
        <ScrollReveal className="order-1 md:order-2">
          <div className="relative card-lift">
            <div className="aspect-square bg-surface-container rotate-3 p-2 overflow-hidden">
              <div
                className="w-full h-full grayscale-[0.1] bg-cover bg-center img-zoom"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80')",
                }}
              />
            </div>
            <div className="absolute -top-10 -left-10 w-32 h-32 border-t-2 border-l-2 border-primary-container" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
