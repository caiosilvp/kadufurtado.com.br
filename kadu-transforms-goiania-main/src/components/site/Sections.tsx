import { Reveal } from "./Reveal";
import aboutImg from "@/assets/about-loira.png.asset.json";
import ctaImg from "@/assets/cta.jpg";
import cliente1 from "@/assets/cliente-1.jpg.asset.json";
import cliente2 from "@/assets/cliente-2.jpg.asset.json";
import cliente3 from "@/assets/cliente-3.jpg.asset.json";
import cliente4 from "@/assets/cliente-4.jpg.asset.json";
import {
  about,
  differentials,
  finalCta,
  instagramHandle,
  instagramUrl,
  location,
  services,
  whatsappLink,
} from "@/content/site";

export function About() {
  return (
    <section id="sobre" className="bg-background py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-12 md:px-10">
        <Reveal className="md:col-span-5">
          <img
            src={aboutImg.url}
            alt="Cliente loira com cabelo ondulado e acabamento natural"
            width={847}
            height={842}
            loading="lazy"
            decoding="async"
            className="w-full object-cover"
          />
        </Reveal>
        <div className="md:col-span-6 md:col-start-7 md:self-center">
          <Reveal>
            <p className="eyebrow text-muted-foreground">Sobre Kadu</p>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] md:text-6xl">{about.title}</h2>
            <div className="mt-8 max-w-md">
              <div className="hairline" />
            </div>
            {about.paragraphs.map((p) => (
              <p key={p} className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="servicos" className="bg-secondary py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <p className="eyebrow text-muted-foreground">Serviços</p>
          <h2 className="mt-5 font-display text-4xl md:text-6xl">Experiências &amp; Serviços</h2>
        </Reveal>

        <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.name} delay={i * 60} className="bg-background">
              <article className="group flex h-full flex-col justify-between p-8 transition-colors duration-500 hover:bg-card md:p-10">
                <div>
                  <h3 className="eyebrow text-foreground">{service.name}</h3>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
                <div className="mt-10">
                  <a
                    href={whatsappLink(
                      `Olá, Kadu! Vim pelo site e gostaria de agendar: ${service.name}.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block border-b border-foreground/25 pb-1 text-[11px] uppercase tracking-[0.2em] transition-colors hover:border-accent hover:text-accent"
                  >
                    Quero agendar
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-xs text-muted-foreground">
          Cada serviço passa por avaliação individual do cabelo. Valores sob consulta pelo WhatsApp.
        </p>

      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section className="bg-background py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <h2 className="max-w-2xl font-display text-4xl leading-[1.05] md:text-6xl">
            Mais que um horário no salão.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <div className="hairline" />
              <h3 className="mt-6 eyebrow text-foreground">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const feed = [cliente1.url, cliente2.url, cliente3.url, cliente4.url];

export function Instagram() {
  return (
    <section className="bg-secondary py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-muted-foreground">Instagram</p>
            <h2 className="mt-5 font-display text-4xl md:text-6xl">{instagramHandle}</h2>
            <p className="mt-5 max-w-md text-sm text-muted-foreground">
              Acompanhe novos trabalhos, transformações e bastidores.
            </p>
          </div>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start border border-foreground/20 px-8 py-4 text-[11px] uppercase tracking-[0.2em] transition-colors hover:bg-foreground hover:text-primary-foreground"
          >
            Seguir no Instagram
          </a>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
          {feed.map((src, i) => (
            <Reveal key={`${src}-${i}`} delay={i * 40}>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block aspect-square overflow-hidden bg-muted"
              >
                <img
                  src={src}
                  alt="Trabalho publicado no Instagram de Kadu Furtado"
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 md:py-40">
      <img
        src={ctaImg}
        alt="Interior de salão minimalista"
        width={1600}
        height={912}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 size-full object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-ink/55" />
      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-10">
        <Reveal>
          <h2 className="font-display text-4xl leading-[1.05] text-cream md:text-6xl">
            {finalCta.title}
          </h2>
          <p className="mx-auto mt-6 max-w-md text-sm text-cream/70 md:text-base">
            {finalCta.text}
          </p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-block bg-cream px-12 py-5 text-[11px] uppercase tracking-[0.25em] text-ink transition-colors hover:bg-champagne"
          >
            {finalCta.button}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function Location() {
  return (
    <section id="contato" className="bg-background py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-2 md:px-10">
        <Reveal>
          <p className="eyebrow text-muted-foreground">Localização</p>
          <h2 className="mt-5 font-display text-4xl md:text-6xl">{location.title}</h2>
          <dl className="mt-12 space-y-8">
            {[
              ["Salão", location.salon],
              ["Endereço", location.address],
              ["Horário", location.hours],
              ["Telefone / WhatsApp", location.phone],
            ].map(([label, value]) => (
              <div key={label}>
                <div className="hairline" />
                <dt className="mt-4 eyebrow text-muted-foreground">{label}</dt>
                <dd className="mt-2 text-base">{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={80} className="min-h-[320px]">
          {location.mapsEmbedUrl ? (
            <iframe
              title="Mapa do atendimento em Goiânia"
              src={location.mapsEmbedUrl}
              loading="lazy"
              className="size-full min-h-[320px] border-0"
            />
          ) : (
            <div className="flex size-full min-h-[320px] items-center justify-center bg-secondary p-8 text-center">
              <p className="max-w-xs text-sm text-muted-foreground">
                Google Maps será exibido aqui quando o endereço oficial for informado.
              </p>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink pb-10 pt-20">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-4xl text-cream md:text-5xl">Kadu Furtado</p>
            <p className="mt-3 eyebrow text-cream/50">Hair Stylist • Goiânia</p>
          </div>
          <div className="flex gap-8">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] uppercase tracking-[0.2em] text-cream/70 transition-colors hover:text-champagne"
            >
              Instagram
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] uppercase tracking-[0.2em] text-cream/70 transition-colors hover:text-champagne"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/10 pt-6 text-[11px] text-cream/35 sm:flex-row sm:justify-between">
          <p>© 2026 Kadu Furtado. Todos os direitos reservados.</p>
          <p>Desenvolvido por JCR Agency</p>
        </div>
      </div>
    </footer>
  );
}
