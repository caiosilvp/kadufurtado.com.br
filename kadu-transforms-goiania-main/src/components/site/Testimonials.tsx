import { Reveal } from "./Reveal";
import kaduBio from "@/assets/kadu-bio.png.asset.json";
import { biography } from "@/content/site";

const bioImg = kaduBio.url;

export function Testimonials() {
  return (
    <section id="biografia" className="bg-ink py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid gap-14 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-5">
            <img
              src={bioImg}
              alt="Kadu Furtado, Hair Stylist com mais de 20 anos de atuação"
              width={1060}
              height={1484}
              loading="lazy"
              decoding="async"
              className="w-full object-cover"
            />
          </Reveal>

          <div className="md:col-span-7 md:self-center">
            <Reveal>
              <p className="eyebrow text-champagne">{biography.eyebrow}</p>
              <h2 className="mt-5 font-display text-4xl leading-[1.05] text-cream md:text-6xl">
                {biography.title}
              </h2>
              <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-champagne/70">
                {biography.highlights}
              </p>
              <div className="mt-8 max-w-xl">
                <div className="hairline" />
              </div>
              <div className="mt-8 max-w-xl space-y-6">
                {biography.paragraphs.map((p) => (
                  <p key={p} className="text-sm leading-relaxed text-cream/70 md:text-base">
                    {p}
                  </p>
                ))}
              </div>
              <p className="mt-10 max-w-xl font-display text-xl leading-snug text-champagne md:text-2xl">
                {biography.closing}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
