// Contenido del prototipo. En producción, este contenido vive en el CMS
// (panel administrativo) y se edita sin tocar código.

export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];

const es = {
  nav: {
    home: "Inicio",
    about: "Nosotros",
    what: "Qué hacemos",
    projects: "Proyectos",
    impact: "Impacto",
    news: "Noticias",
    contact: "Contacto",
    donate: "Dona ahora",
  },
  hero: {
    kicker: "Invirtiendo en naturaleza",
    title: "Conectamos naturaleza, comunidades e inversión sostenible",
    subtitle:
      "Diseñamos e implementamos proyectos de alto impacto que impulsan la conservación de la biodiversidad, el desarrollo comunitario y las soluciones climáticas en América Latina.",
    cta1: "Conoce más",
    cta2: "Nuestros proyectos",
    badge: "Soluciones basadas en la naturaleza para un futuro sostenible.",
  },
  stats: [
    { value: "10.000+", label: "Árboles sembrados" },
    { value: "25+", label: "Comunidades apoyadas" },
    { value: "5.000+", label: "Personas beneficiadas" },
    { value: "15+", label: "Proyectos ejecutados" },
  ],
  about: {
    kicker: "¿Quiénes somos?",
    title: "Trabajamos por un futuro sostenible",
    p1: "SAUMAMA Foundation es una organización comprometida con la conservación ambiental, el desarrollo sostenible y el bienestar social.",
    p2: "Conectamos comunidades, empresas e instituciones para diseñar e implementar proyectos que generen impacto real, transparente y duradero.",
    link: "Conoce más sobre nosotros",
  },
  pillars: {
    title: "Nuestros pilares",
    items: [
      {
        icon: "book",
        title: "Educación",
        text: "Impulsamos la educación ambiental y el desarrollo de conocimientos que fomentan la conciencia, el liderazgo y la acción responsable.",
      },
      {
        icon: "hands",
        title: "Impacto Social",
        text: "Trabajamos junto a comunidades para generar oportunidades, fortalecer capacidades y mejorar la calidad de vida mediante proyectos con impacto real y duradero.",
      },
      {
        icon: "leaf",
        title: "Conservación Ambiental",
        text: "Protegemos ecosistemas y promovemos prácticas sostenibles para preservar la biodiversidad y contribuir al equilibrio ambiental de las futuras generaciones.",
      },
    ],
  },
  experience: {
    title: "Nuestra experiencia",
    items: [
      {
        title: "Soluciones basadas en la naturaleza",
        text: "Diseñamos proyectos que generan beneficios ambientales, sociales y económicos duraderos, conservando ecosistemas y fortaleciendo territorios.",
      },
      {
        title: "Mercados de carbono y biodiversidad",
        text: "Conectamos iniciativas sostenibles con oportunidades de financiamiento internacional en mercados de carbono, biodiversidad y compensaciones ambientales.",
      },
      {
        title: "Participación comunitaria",
        text: "Trabajamos de la mano con comunidades locales, respetando sus saberes y construyendo modelos de beneficio compartido y equitativo.",
      },
      {
        title: "Monitoreo y transparencia",
        text: "Aplicamos tecnología de vanguardia — drones, satélites e IA — para medir, verificar y comunicar el impacto de cada proyecto de manera clara y confiable.",
      },
    ],
  },
  impact: {
    kicker: "Impacto que transforma",
    text: "Cada número representa historias, esfuerzo conjunto y un compromiso real con el planeta y las personas.",
    items: [
      { value: "120.000+", label: "Toneladas de CO₂ evitadas" },
      { value: "8.500+", label: "Hectáreas conservadas y restauradas" },
      { value: "15+", label: "Proyectos en ejecución en América Latina" },
      { value: "20+", label: "Aliados estratégicos e institucionales" },
    ],
  },
  allies: {
    title: "Aliados estratégicos",
    note: "Logos de referencia del prototipo — confirmar convenios reales antes de publicar.",
  },
  donation: {
    kicker: "Apoya nuestros proyectos",
    text: "Tu aporte contribuye al diseño e implementación de proyectos de alto impacto en conservación, restauración y desarrollo comunitario.",
    bullets: [
      { title: "100% seguro", text: "Plataformas de pago confiables" },
      { title: "Transparencia", text: "Reportes y resultados verificables" },
      { title: "Impacto real", text: "Beneficios para comunidades y ecosistemas" },
    ],
    button: "Realizar donación",
    redirect: "Serás redirigido a nuestra página segura de donaciones.",
    demoNote: "Prototipo — la pasarela de pago se conecta en la siguiente fase.",
    amounts: "Monto sugerido",
  },
  news: {
    kicker: "Noticias y actualidad",
    items: [
      {
        tag: "Proyecto",
        title: "Avances en restauración en Matavén",
        text: "Conoce los últimos avances de nuestro proyecto de restauración de bosques.",
      },
      {
        tag: "Noticia",
        title: "SAUMAMA en el Congreso de Restauración 2026",
        text: "Compartimos nuestra experiencia en soluciones basadas en la naturaleza en América Latina.",
      },
      {
        tag: "Publicación",
        title: "Reporte de impacto 2025",
        text: "Descarga nuestro reporte anual y conoce los resultados e historias que marcaron el 2025.",
      },
    ],
    readMore: "Leer más",
  },
  cta: {
    title: "Sé parte del cambio",
    text: "Tu apoyo hace posible que más comunidades y ecosistemas tengan un futuro sostenible.",
    button: "Colabora con SAUMAMA",
  },
  aboutPage: {
    kicker: "Quiénes somos",
    title: "Conservación, comunidad e inversión para un futuro sostenible",
    subtitle:
      "SAUMAMA Foundation conecta organizaciones, empresas e inversionistas con proyectos de alto impacto ambiental y social, promoviendo la conservación de ecosistemas y el desarrollo sostenible de las comunidades.",
    historyKicker: "Nuestra historia",
    historyTitle: "Una visión nacida para generar impacto real",
    historyText:
      "SAUMAMA Foundation surge con el propósito de impulsar iniciativas que integren conservación, restauración ecológica y desarrollo comunitario. Creemos que la sostenibilidad se construye mediante alianzas estratégicas y proyectos capaces de generar beneficios medibles para las personas y la naturaleza.",
    mission: {
      title: "Misión",
      text: "Impulsar proyectos de conservación y desarrollo sostenible mediante la articulación entre comunidades, organizaciones y aliados estratégicos, generando resultados medibles para los ecosistemas y las personas.",
    },
    vision: {
      title: "Visión",
      text: "Ser una organización referente en América Latina por promover soluciones basadas en la naturaleza y modelos de inversión sostenible que contribuyan a un futuro más equilibrado y resiliente.",
    },
    valuesTitle: "Nuestros valores",
    values: [
      { title: "Conservación", text: "Protegemos ecosistemas y promovemos soluciones sostenibles." },
      { title: "Transparencia", text: "Trabajamos con procesos claros y resultados verificables." },
      { title: "Impacto", text: "Generamos beneficios tangibles para las comunidades y la biodiversidad." },
      { title: "Colaboración", text: "Construimos alianzas para multiplicar el alcance de cada iniciativa." },
      { title: "Innovación", text: "Desarrollamos estrategias sostenibles con visión de largo plazo." },
    ],
    approachKicker: "Nuestro enfoque",
    approachTitle: "Cómo transformamos las ideas en impacto",
    approach: [
      { title: "Conservación y restauración", text: "Protegemos ecosistemas y recuperamos áreas estratégicas para preservar la biodiversidad." },
      { title: "Desarrollo comunitario", text: "Fortalecemos capacidades locales y promovemos oportunidades sostenibles." },
      { title: "Alianzas estratégicas", text: "Conectamos actores comprometidos con proyectos de alto impacto." },
      { title: "Medición y transparencia", text: "Monitoreamos resultados para asegurar beneficios verificables." },
    ],
    bigStats: [
      { value: "+25.000", label: "Hectáreas en conservación y restauración" },
      { value: "+15.000", label: "Personas y comunidades beneficiadas" },
      { value: "+40", label: "Proyectos impulsados en la región" },
      { value: "+60", label: "Aliados estratégicos comprometidos" },
    ],
    closing: "Construimos soluciones que benefician a las personas y a la naturaleza.",
  },
  projectsPage: {
    kicker: "Proyectos",
    title: "Proyectos que transforman territorios y fortalecen comunidades",
    subtitle:
      "Desarrollamos iniciativas de conservación, restauración y desarrollo sostenible que generan beneficios verificables para las personas, los ecosistemas y las futuras generaciones.",
    cta: "Explorar proyectos",
    featured: "Proyectos destacados",
    status: "En ejecución",
    viewProject: "Ver proyecto",
    projects: [
      {
        name: "Matavén",
        category: "Restauración y gobernanza comunitaria",
        text: "Iniciativa de restauración ecológica y fortalecimiento de la gobernanza comunitaria para la conservación de bosques y biodiversidad en el Vichada.",
        stats: [
          { value: "120K+", label: "Árboles restaurados" },
          { value: "2.500", label: "Hectáreas restauradas" },
          { value: "15", label: "Comunidades beneficiadas" },
        ],
      },
      {
        name: "Carbono Vivo",
        category: "Soluciones climáticas y restauración",
        text: "Proyectos de reducción de emisiones y restauración de ecosistemas que generan créditos de carbono para comunidades locales.",
        stats: [
          { value: "18", label: "Comunidades impactadas" },
          { value: "320", label: "Familias beneficiadas" },
          { value: "12", label: "Iniciativas productivas" },
        ],
      },
      {
        name: "Resguardo Kogui",
        category: "Conservación y cultura ancestral",
        text: "Protección de ecosistemas estratégicos y preservación de la cultura ancestral, trabajando de la mano con la comunidad Kogui en la Sierra Nevada.",
        stats: [
          { value: "300+", label: "Especies protegidas" },
          { value: "10", label: "Áreas de estudio" },
          { value: "5", label: "Años de monitoreo" },
        ],
      },
    ],
    howTitle: "Cómo trabajamos",
    howText: "Nuestro modelo garantiza proyectos sostenibles, transparentes y con impacto real en los territorios.",
    how: [
      { title: "Evaluación técnica", text: "Analizamos iniciativas con criterios científicos y estándares internacionales." },
      { title: "Participación comunitaria", text: "Construimos proyectos junto con las comunidades, respetando su conocimiento y cultura." },
      { title: "Financiamiento sostenible", text: "Conectamos iniciativas con mercados de carbono y biodiversidad y aliados estratégicos." },
      { title: "Monitoreo y trazabilidad", text: "Implementamos tecnología y verificación independiente para garantizar transparencia y resultados." },
    ],
    areasTitle: "Áreas de impacto",
    areasText: "Trabajamos en diferentes frentes para generar soluciones basadas en la naturaleza.",
    areas: ["Restauración ecológica", "Biodiversidad y fauna", "Carbono y clima", "Agroforestería y suelos", "Cacao sostenible", "Café sostenible"],
    whereTitle: "Dónde trabajamos",
    whereText: "Desarrollamos proyectos en regiones estratégicas de Colombia junto a comunidades y aliados locales.",
    regions: ["Vichada", "Sierra Nevada de Santa Marta", "Amazonía colombiana", "Guainía", "Caquetá"],
    whereNote: "Cada territorio es único; cada proyecto se diseña a la medida de sus necesidades y sueños.",
    safeguardsTitle: "Salvaguardas y transparencia",
    safeguardsText: "Aplicamos estándares internacionales para asegurar la integridad de nuestros proyectos y la confianza de nuestros aliados.",
    safeguards: [
      { title: "Gobernanza comunitaria", text: "Consentimiento libre, previo e informado y distribución justa de beneficios." },
      { title: "Integridad ambiental", text: "Impacto positivo neto en biodiversidad y gestión sostenible de los recursos." },
      { title: "Monitoreo tecnológico", text: "Uso de tecnología avanzada para medir, verificar y reportar impactos en tiempo real." },
      { title: "Estándares internacionales", text: "Alineados con VCS, Gold Standard y otros estándares de calidad global." },
    ],
    closing: "Cada proyecto es una oportunidad para regenerar territorios y construir un futuro sostenible.",
    closingCta1: "Conoce más sobre nuestros proyectos",
    closingCta2: "Contactar a SAUMAMA",
  },
  footer: {
    tagline: "Invertimos en la naturaleza, transformamos comunidades y construimos un futuro sostenible.",
    navTitle: "Navegación",
    resourcesTitle: "Recursos",
    resources: ["Política de privacidad", "Términos y condiciones", "Transparencia", "Reportes", "Preguntas frecuentes"],
    contactTitle: "Contáctanos",
    newsletterTitle: "Suscríbete a nuestro boletín",
    newsletterText: "Recibe noticias y actualizaciones sobre nuestros proyectos e impacto.",
    newsletterPlaceholder: "Tu correo electrónico",
    rights: "Todos los derechos reservados.",
    prototype: "Prototipo — no es el sitio oficial.",
  },
};

export type Dictionary = typeof es;

const en: Dictionary = {
  nav: {
    home: "Home",
    about: "About us",
    what: "What we do",
    projects: "Projects",
    impact: "Impact",
    news: "News",
    contact: "Contact",
    donate: "Donate now",
  },
  hero: {
    kicker: "Investing in nature",
    title: "Connecting nature, communities and sustainable investment",
    subtitle:
      "We design and implement high-impact projects that drive biodiversity conservation, community development and climate solutions across Latin America.",
    cta1: "Learn more",
    cta2: "Our projects",
    badge: "Nature-based solutions for a sustainable future.",
  },
  stats: [
    { value: "10,000+", label: "Trees planted" },
    { value: "25+", label: "Communities supported" },
    { value: "5,000+", label: "People benefited" },
    { value: "15+", label: "Projects delivered" },
  ],
  about: {
    kicker: "Who we are",
    title: "Working towards a sustainable future",
    p1: "SAUMAMA Foundation is an organization committed to environmental conservation, sustainable development and social well-being.",
    p2: "We connect communities, companies and institutions to design and implement projects that generate real, transparent and lasting impact.",
    link: "Learn more about us",
  },
  pillars: {
    title: "Our pillars",
    items: [
      {
        icon: "book",
        title: "Education",
        text: "We promote environmental education and knowledge that fosters awareness, leadership and responsible action.",
      },
      {
        icon: "hands",
        title: "Social Impact",
        text: "We work alongside communities to create opportunities, strengthen capacities and improve quality of life through projects with real, lasting impact.",
      },
      {
        icon: "leaf",
        title: "Environmental Conservation",
        text: "We protect ecosystems and promote sustainable practices to preserve biodiversity and contribute to the environmental balance of future generations.",
      },
    ],
  },
  experience: {
    title: "Our expertise",
    items: [
      {
        title: "Nature-based solutions",
        text: "We design projects that deliver lasting environmental, social and economic benefits, conserving ecosystems and strengthening territories.",
      },
      {
        title: "Carbon & biodiversity markets",
        text: "We connect sustainable initiatives with international financing opportunities in carbon, biodiversity and environmental offset markets.",
      },
      {
        title: "Community participation",
        text: "We work hand in hand with local communities, respecting their knowledge and building fair, shared-benefit models.",
      },
      {
        title: "Monitoring & transparency",
        text: "We apply cutting-edge technology — drones, satellites and AI — to measure, verify and communicate each project's impact clearly and reliably.",
      },
    ],
  },
  impact: {
    kicker: "Impact that transforms",
    text: "Every number represents stories, joint effort and a real commitment to the planet and its people.",
    items: [
      { value: "120,000+", label: "Tonnes of CO₂ avoided" },
      { value: "8,500+", label: "Hectares conserved and restored" },
      { value: "15+", label: "Projects underway in Latin America" },
      { value: "20+", label: "Strategic and institutional partners" },
    ],
  },
  allies: {
    title: "Strategic partners",
    note: "Prototype placeholder logos — confirm real partnerships before publishing.",
  },
  donation: {
    kicker: "Support our projects",
    text: "Your contribution helps design and implement high-impact conservation, restoration and community development projects.",
    bullets: [
      { title: "100% secure", text: "Trusted payment platforms" },
      { title: "Transparency", text: "Verifiable reports and results" },
      { title: "Real impact", text: "Benefits for communities and ecosystems" },
    ],
    button: "Donate",
    redirect: "You will be redirected to our secure donations page.",
    demoNote: "Prototype — the payment gateway is connected in the next phase.",
    amounts: "Suggested amount",
  },
  news: {
    kicker: "News & updates",
    items: [
      {
        tag: "Project",
        title: "Restoration progress in Matavén",
        text: "Discover the latest progress of our forest restoration project.",
      },
      {
        tag: "News",
        title: "SAUMAMA at the 2026 Restoration Congress",
        text: "We shared our experience in nature-based solutions across Latin America.",
      },
      {
        tag: "Publication",
        title: "2025 Impact Report",
        text: "Download our annual report and discover the results and stories that shaped 2025.",
      },
    ],
    readMore: "Read more",
  },
  cta: {
    title: "Be part of the change",
    text: "Your support makes it possible for more communities and ecosystems to have a sustainable future.",
    button: "Partner with SAUMAMA",
  },
  aboutPage: {
    kicker: "About us",
    title: "Conservation, community and investment for a sustainable future",
    subtitle:
      "SAUMAMA Foundation connects organizations, companies and investors with high environmental and social impact projects, promoting ecosystem conservation and sustainable community development.",
    historyKicker: "Our story",
    historyTitle: "A vision born to generate real impact",
    historyText:
      "SAUMAMA Foundation was created to drive initiatives that integrate conservation, ecological restoration and community development. We believe sustainability is built through strategic alliances and projects capable of generating measurable benefits for people and nature.",
    mission: {
      title: "Mission",
      text: "To drive conservation and sustainable development projects by connecting communities, organizations and strategic partners, generating measurable results for ecosystems and people.",
    },
    vision: {
      title: "Vision",
      text: "To be a leading organization in Latin America promoting nature-based solutions and sustainable investment models that contribute to a more balanced and resilient future.",
    },
    valuesTitle: "Our values",
    values: [
      { title: "Conservation", text: "We protect ecosystems and promote sustainable solutions." },
      { title: "Transparency", text: "We work with clear processes and verifiable results." },
      { title: "Impact", text: "We generate tangible benefits for communities and biodiversity." },
      { title: "Collaboration", text: "We build alliances to multiply the reach of every initiative." },
      { title: "Innovation", text: "We develop sustainable strategies with a long-term vision." },
    ],
    approachKicker: "Our approach",
    approachTitle: "How we turn ideas into impact",
    approach: [
      { title: "Conservation & restoration", text: "We protect ecosystems and recover strategic areas to preserve biodiversity." },
      { title: "Community development", text: "We strengthen local capacities and promote sustainable opportunities." },
      { title: "Strategic alliances", text: "We connect committed stakeholders with high-impact projects." },
      { title: "Measurement & transparency", text: "We monitor results to ensure verifiable benefits." },
    ],
    bigStats: [
      { value: "+25,000", label: "Hectares under conservation and restoration" },
      { value: "+15,000", label: "People and communities benefited" },
      { value: "+40", label: "Projects driven in the region" },
      { value: "+60", label: "Committed strategic partners" },
    ],
    closing: "We build solutions that benefit both people and nature.",
  },
  projectsPage: {
    kicker: "Projects",
    title: "Projects that transform territories and strengthen communities",
    subtitle:
      "We develop conservation, restoration and sustainable development initiatives that generate verifiable benefits for people, ecosystems and future generations.",
    cta: "Explore projects",
    featured: "Featured projects",
    status: "In progress",
    viewProject: "View project",
    projects: [
      {
        name: "Matavén",
        category: "Restoration & community governance",
        text: "Ecological restoration and community governance strengthening initiative for the conservation of forests and biodiversity in Vichada.",
        stats: [
          { value: "120K+", label: "Trees restored" },
          { value: "2,500", label: "Hectares restored" },
          { value: "15", label: "Communities benefited" },
        ],
      },
      {
        name: "Carbono Vivo",
        category: "Climate solutions & restoration",
        text: "Emission-reduction and ecosystem restoration projects that generate carbon credits for local communities.",
        stats: [
          { value: "18", label: "Communities impacted" },
          { value: "320", label: "Families benefited" },
          { value: "12", label: "Productive initiatives" },
        ],
      },
      {
        name: "Resguardo Kogui",
        category: "Conservation & ancestral culture",
        text: "Protection of strategic ecosystems and preservation of ancestral culture, working hand in hand with the Kogui community in the Sierra Nevada.",
        stats: [
          { value: "300+", label: "Species protected" },
          { value: "10", label: "Study areas" },
          { value: "5", label: "Years of monitoring" },
        ],
      },
    ],
    howTitle: "How we work",
    howText: "Our model guarantees sustainable, transparent projects with real impact in the territories.",
    how: [
      { title: "Technical assessment", text: "We analyze initiatives with scientific criteria and international standards." },
      { title: "Community participation", text: "We build projects together with communities, respecting their knowledge and culture." },
      { title: "Sustainable financing", text: "We connect initiatives with carbon and biodiversity markets and strategic partners." },
      { title: "Monitoring & traceability", text: "We implement technology and independent verification to guarantee transparency and results." },
    ],
    areasTitle: "Impact areas",
    areasText: "We work on different fronts to generate nature-based solutions.",
    areas: ["Ecological restoration", "Biodiversity & wildlife", "Carbon & climate", "Agroforestry & soils", "Sustainable cocoa", "Sustainable coffee"],
    whereTitle: "Where we work",
    whereText: "We develop projects in strategic regions of Colombia alongside communities and local partners.",
    regions: ["Vichada", "Sierra Nevada de Santa Marta", "Colombian Amazon", "Guainía", "Caquetá"],
    whereNote: "Every territory is unique; every project is designed to fit its needs and dreams.",
    safeguardsTitle: "Safeguards & transparency",
    safeguardsText: "We apply international standards to ensure the integrity of our projects and the trust of our partners.",
    safeguards: [
      { title: "Community governance", text: "Free, prior and informed consent and fair benefit distribution." },
      { title: "Environmental integrity", text: "Net positive impact on biodiversity and sustainable resource management." },
      { title: "Tech monitoring", text: "Advanced technology to measure, verify and report impacts in real time." },
      { title: "International standards", text: "Aligned with VCS, Gold Standard and other global quality standards." },
    ],
    closing: "Every project is an opportunity to regenerate territories and build a sustainable future.",
    closingCta1: "Learn more about our projects",
    closingCta2: "Contact SAUMAMA",
  },
  footer: {
    tagline: "We invest in nature, transform communities and build a sustainable future.",
    navTitle: "Navigation",
    resourcesTitle: "Resources",
    resources: ["Privacy policy", "Terms & conditions", "Transparency", "Reports", "FAQ"],
    contactTitle: "Contact us",
    newsletterTitle: "Subscribe to our newsletter",
    newsletterText: "Receive news and updates about our projects and impact.",
    newsletterPlaceholder: "Your email address",
    rights: "All rights reserved.",
    prototype: "Prototype — not the official website.",
  },
};

const dictionaries = { es, en };

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
