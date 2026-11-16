import { useMemo, useState } from "react";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { portfolioCategories, type PortfolioCategory, type Work } from "@/content/site";
import cliente1 from "@/assets/cliente-1.jpg.asset.json";
import cliente2 from "@/assets/cliente-2.jpg.asset.json";
import cliente3 from "@/assets/cliente-3.jpg.asset.json";
import cliente4 from "@/assets/cliente-4.jpg.asset.json";
import videoAsset from "@/assets/transformacao.mp4.asset.json";

/** Fotografias reais de clientes atendidas por Kadu Furtado. */
const works: Work[] = [
  {
    src: cliente1.url,
    alt: "Loiro iluminado com ondas e acabamento natural",
    category: "Loiros",
  },
  {
    src: cliente2.url,
    alt: "Loiro claro com ondas longas e brilho",
    category: "Loiros",
  },
  {
    src: cliente3.url,
    alt: "Morena iluminada com mechas caramelo",
    category: "Morenas iluminadas",
  },
  {
    src: cliente4.url,
    alt: "Transformação em loiro com movimento e luz",
    category: "Transformações",
  },
];

export function Portfolio() {
  const [filter, setFilter] = useState<PortfolioCategory>("Todos");
  const [lightbox, setLightbox] = useState<Work | null>(null);

  const visible = useMemo(
    () => (filter === "Todos" ? works : works.filter((w) => w.category === filter)),
    [filter],
  );

  return (
    <section id="transformacoes" className="bg-ink py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <p className="eyebrow text-champagne">Portfólio</p>
          <h2 className="mt-5 font-display text-5xl text-cream md:text-7xl">Transformações</h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
            {portfolioCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={cn(
                  "text-[11px] uppercase tracking-[0.2em] transition-colors",
                  filter === cat ? "text-champagne" : "text-cream/45 hover:text-cream",
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {visible.map((work, i) => (
            <Reveal key={work.src} delay={i * 60} className="mb-4 break-inside-avoid">
              <button
                type="button"
                onClick={() => setLightbox(work)}
                className="group block w-full overflow-hidden bg-cream/5"
                aria-label={`Ampliar: ${work.alt}`}
              >
                <img
                  src={work.src}
                  alt={work.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                />
                <span className="flex items-center justify-between px-1 py-3 text-[10px] uppercase tracking-[0.2em] text-cream/40 transition-colors group-hover:text-champagne">
                  {work.category}
                  <span className="opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    Ver
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80} className="mt-16">
          <p className="eyebrow text-champagne">Em movimento</p>
          <h3 className="mt-4 font-display text-3xl text-cream md:text-4xl">
            Transformação em vídeo
          </h3>
          <video
            src={videoAsset.url}
            controls
            playsInline
            preload="metadata"
            className="mt-8 max-h-[80svh] w-full bg-cream/5 object-contain"
          />
        </Reveal>
      </div>


      {lightbox && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            aria-label="Fechar"
            className="absolute right-5 top-5 text-cream/70 hover:text-champagne"
            onClick={() => setLightbox(null)}
          >
            <X className="size-7" />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-h-[88svh] w-auto max-w-full object-contain"
          />
        </div>
      )}
    </section>
  );
}
