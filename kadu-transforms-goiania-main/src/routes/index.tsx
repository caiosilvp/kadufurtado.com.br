import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Portfolio } from "@/components/site/Portfolio";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Testimonials } from "@/components/site/Testimonials";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import {
  About,
  Experience,
  FinalCta,
  Footer,
  Instagram,
  Location,
  Services,
} from "@/components/site/Sections";

const title = "Kadu Furtado | Hair Stylist em Goiânia";
const description =
  "Conheça o trabalho de Kadu Furtado, Hair Stylist em Goiânia. Cortes, coloração, transformações e serviços personalizados. Agende seu horário.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HairSalon",
          name: "Kadu Furtado — Hair Stylist",
          description,
          areaServed: "Goiânia, GO",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Goiânia",
            addressRegion: "GO",
            addressCountry: "BR",
          },
          sameAs: ["https://www.instagram.com/kadufurtadooficial"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <BeforeAfter />
        <Experience />
        <Testimonials />
        <Instagram />
        <FinalCta />
        <Location />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
