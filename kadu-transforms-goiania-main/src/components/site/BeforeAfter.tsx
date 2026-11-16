import { useCallback, useRef, useState } from "react";

import { Reveal } from "./Reveal";
import before1 from "@/assets/before-loira.jpg.asset.json";
import after1 from "@/assets/after-ruivo.jpg.asset.json";

/** Adicionar novas transformações reais aqui. */
const pairs = [
  {
    label: "Transformação: do loiro ao ruivo",
    before: before1.url,
    after: after1.url,
    alt: "Comparativo antes e depois — loiro para ruivo",
  },
];

function Slider({
  before,
  after,
  alt,
}: {
  before: string;
  after: string;
  alt: string;
}) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = useCallback((clientX: number) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos(Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100)));
  }, []);

  return (
    <div
      ref={ref}
      className="relative aspect-[4/3] w-full cursor-ew-resize select-none overflow-hidden bg-ink"
      onPointerDown={(e) => {
        dragging.current = true;
        move(e.clientX);
      }}
      onPointerMove={(e) => dragging.current && move(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      onPointerLeave={() => (dragging.current = false)}
    >
      <img
        src={after}
        alt={`${alt} — depois`}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img
          src={before}
          alt={`${alt} — antes`}
          loading="lazy"
          decoding="async"
          className="size-full object-cover"
        />
      </div>

      <span className="pointer-events-none absolute left-4 top-4 eyebrow text-cream/80">Antes</span>
      <span className="pointer-events-none absolute right-4 top-4 eyebrow text-cream/80">
        Depois
      </span>

      <div
        className="pointer-events-none absolute inset-y-0 w-px bg-champagne"
        style={{ left: `${pos}%` }}
      >
        <span className="absolute left-1/2 top-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-champagne bg-ink/60 text-[10px] tracking-[0.15em] text-champagne backdrop-blur-sm">
          ‹ ›
        </span>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        aria-label="Comparar antes e depois"
        onChange={(e) => setPos(Number(e.target.value))}
        className="absolute inset-x-0 bottom-0 h-10 w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}

export function BeforeAfter() {
  return (
    <section className="bg-background py-24 md:py-36">
      <div className="mx-auto max-w-5xl px-5 md:px-10">
        <Reveal>
          <p className="eyebrow text-muted-foreground">Antes &amp; Depois</p>
          <h2 className="mt-5 max-w-xl font-display text-4xl md:text-6xl">
            Resultados que falam por si.
          </h2>
        </Reveal>

        <div className="mt-14 space-y-14">
          {pairs.map((pair, i) => (
            <Reveal key={pair.label} delay={i * 80}>
              <Slider before={pair.before} after={pair.after} alt={pair.alt} />
              <p className="mt-4 eyebrow text-muted-foreground">{pair.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
