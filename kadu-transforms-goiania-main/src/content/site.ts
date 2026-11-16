/**
 * CONTEÚDO EDITÁVEL DO SITE
 * -------------------------
 * Todo o texto e links do site ficam neste arquivo.
 * Basta alterar os valores abaixo — nenhuma outra edição é necessária.
 */

// WhatsApp: apenas números, com código do país (55) + DDD (62)
export const whatsappNumber = "5562981238108";

export const whatsappMessage =
  "Olá, Kadu! Vim pelo site e gostaria de saber mais sobre os serviços e horários disponíveis.";

export const whatsappLink = (message: string = whatsappMessage) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export const instagramHandle = "@kadufurtadooficial";
export const instagramUrl = "https://www.instagram.com/kadufurtadooficial";

export const hero = {
  name: "Kadu Furtado",
  role: "Hair Stylist",
  tagline: "Beleza, técnica e personalidade em cada transformação.",
  location: "Goiânia • GO",
  primaryCta: "Agendar horário",
  secondaryCta: "Conheça meu trabalho",
};

export const about = {
  title: "Beleza começa com identidade.",
  paragraphs: [
    "Cada cabelo possui uma história, uma personalidade e possibilidades diferentes. O trabalho de Kadu Furtado une técnica, experiência e olhar individual para criar resultados que valorizam a beleza de cada cliente.",
  ],
};

export type Service = {
  name: string;
  description: string;
};

export const services: Service[] = [
  {
    name: "Corte",
    description: "Desenho de corte pensado para o formato do rosto e o estilo de cada cliente.",
  },
  {
    name: "Coloração",
    description: "Cor construída com equilíbrio de tom, brilho e naturalidade.",
  },
  {
    name: "Mechas / Iluminação",
    description: "Luz aplicada de forma personalizada para valorizar traços e movimento.",
  },
  {
    name: "Tratamentos",
    description: "Protocolos voltados à saúde, maleabilidade e brilho dos fios.",
  },
  {
    name: "Escova / Finalização",
    description: "Acabamento preciso para um resultado leve e duradouro.",
  },
  {
    name: "Transformação completa",
    description: "Avaliação personalizada e planejamento completo de mudança.",
  },
];

export const portfolioCategories = [
  "Todos",
  "Loiros",
  "Morenas iluminadas",
  "Transformações",
] as const;

export type PortfolioCategory = (typeof portfolioCategories)[number];

export type Work = { src: string; alt: string; category: PortfolioCategory };

export const differentials = [
  {
    title: "Atendimento personalizado",
    text: "Cada cabelo recebe uma análise individual.",
  },
  {
    title: "Técnica",
    text: "Procedimentos pensados para preservar beleza e saúde dos fios.",
  },
  {
    title: "Resultado",
    text: "Trabalhos desenvolvidos considerando estilo, rosto e personalidade.",
  },
  {
    title: "Experiência",
    text: "Do atendimento ao resultado final, cada detalhe importa.",
  },
];

export const biography = {
  eyebrow: "Biografia",
  title: "Kadu Furtado",
  highlights: "Mais de 20 anos de atuação",
  paragraphs: [
    "A história de Kadu Furtado com a beleza começou cedo. Aos 13 anos, em Brasília, ele deu seus primeiros passos dentro do salão de sua tia. Foi ali, entre atendimentos, técnicas e muito aprendizado, que descobriu o talento que mais tarde se transformaria em profissão.",
    "Com o passar dos anos, Kadu conquistou seu próprio espaço e construiu uma carreira marcada pela experiência e pelo aperfeiçoamento constante. Foi técnico da Joico por mais de 10 anos, período em que aprofundou seus conhecimentos em coloração, tratamentos e transformação capilar.",
    "Ao longo de sua trajetória, seu trabalho também chegou a nomes conhecidos do público. Já atendeu personalidades como Ellen Gazzaroli, além de ter sido cabeleireiro pessoal do cantor Leonardo, entre outros clientes.",
    "Hoje, com mais de 20 anos de atuação, Kadu divide sua trajetória profissional entre Goiânia e Brasília, carregando uma assinatura própria em seus trabalhos, principalmente quando o assunto é transformação e valorização da beleza através dos cabelos.",
    "Mais do que acompanhar tendências, sua carreira foi construída criando identidade em cada trabalho e conquistando clientes que atravessaram diferentes fases ao seu lado.",
  ],
  closing: "Kadu Furtado: mais de duas décadas transformando cabelos em identidade, confiança e presença.",
};

export const location = {
  title: "Atendimento em Goiânia",
  salon: "Fábrica de Beleza",
  address: "Av. Portugal, 1000 — St. Marista, Goiânia - GO, 74150-030",
  hours: "Segunda a sábado — horários sob agendamento",
  phone: "(62) 98123-8108",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Av.%20Portugal%2C%201000%20-%20Setor%20Marista%2C%20Goi%C3%A2nia%20-%20GO%2C%2074150-030&output=embed",
};

export const finalCta = {
  title: "Pronta para sua próxima transformação?",
  text: "Agende seu horário e descubra as possibilidades para o seu cabelo.",
  button: "Agendar meu horário",
};

export const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Transformações", href: "#transformacoes" },
  { label: "Biografia", href: "#biografia" },
  { label: "Contato", href: "#contato" },
];
