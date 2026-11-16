import heroAsset from "@/assets/kadu-hero.png.asset.json";
import { hero, whatsappLink } from "@/content/site";

const heroImg = heroAsset.url;

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[100svh] overflow-hidden bg-ink">
      <img
        src={heroImg}
        alt="Kadu Furtado, Hair Stylist em Goiânia"
        width={1240}
        height={1240}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 size-full object-cover object-[50%_18%] opacity-80 md:object-[60%_25%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-24 pt-32 md:px-10 md:pb-28">
        <p className="eyebrow text-champagne">{hero.location}</p>
        <h1 className="mt-5 font-display text-[15vw] leading-[0.9] text-cream sm:text-[11vw] lg:text-[8.5vw]">
          {hero.name}
        </h1>
        <div className="mt-6 max-w-xl">
          <div className="hairline" />
          <p className="mt-6 eyebrow text-cream/80">{hero.role}</p>
          <p className="mt-4 text-base leading-relaxed text-cream/70 md:text-lg">{hero.tagline}</p>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cream px-9 py-4 text-center text-xs uppercase tracking-[0.22em] text-ink transition-colors hover:bg-champagne"
          >
            {hero.primaryCta}
          </a>
          <a
            href="#transformacoes"
            className="border border-cream/30 px-9 py-4 text-center text-xs uppercase tracking-[0.22em] text-cream transition-colors hover:border-champagne hover:text-champagne"
          >
            {hero.secondaryCta}
          </a>
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3">
        <span className="text-[9px] uppercase tracking-[0.3em] text-cream/50">Role</span>
        <span className="h-12 w-px overflow-hidden bg-cream/20">
          <span className="block h-12 w-px animate-[scrollHint_2.4s_ease-in-out_infinite] bg-champagne" />
        </span>
      </div>

      <style>{`@keyframes scrollHint{0%{transform:translateY(-100%)}60%,100%{transform:translateY(100%)}}`}</style>
    </section>
  );
}
