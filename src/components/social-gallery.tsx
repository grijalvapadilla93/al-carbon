import { ScrollReveal } from "@/components/scroll-reveal";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    alt: "Interior del restaurante",
    className: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&q=80",
    alt: "Vino tinto",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80",
    alt: "Plato gourmet",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
    alt: "Terraza nocturna",
    className: "col-span-2",
  },
];

export function SocialGallery() {
  return (
    <section id="social" className="py-24 bg-surface-dim overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[800px]">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`${img.className} relative overflow-hidden group`}
              >
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${img.src}')` }}
                />
                <div className="absolute inset-0 bg-surface-dim/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-12 text-center">
          <p className="font-heading font-bold text-2xl text-on-surface-variant italic">
            #AlCarbonJalapa
          </p>
        </div>
      </div>
    </section>
  );
}
