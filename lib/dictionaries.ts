// Contenido del sitio — fuente: "SAUMAMA 3.docx.pdf" (documento oficial de la fundación).
// En producción, este contenido vive en el CMS (panel administrativo).

export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];

const es = {
  nav: {
    home: "Inicio",
    about: "Nosotros",
    projects: "Proyectos y servicios",
    blog: "Blog",
    donate: "Dona ahora",
  },
  hero: {
    kicker: "Invertir en la naturaleza",
    title: "Cuidamos el territorio. Y hacemos que ese cuidado valga para todos.",
    subtitle:
      "Proyectos con impacto real y beneficios duraderos para la sociedad, las comunidades, la naturaleza y las empresas.",
    cta2: "Nuestros proyectos",
  },
  manifesto: {
    quote:
      "Saumama es el puente que convierte los desafíos climáticos en prosperidad para las comunidades que cuidan la naturaleza y la sociedad que la necesita.",
    line: "Sin comunidades no hay futuro. Con ellas, el planeta tiene esperanza.",
  },
  stats: [
    { value: "100+", label: "Proyectos revisados y evaluados" },
    { value: "30+", label: "Años de experiencia del equipo" },
    { value: "80+", label: "Publicaciones científicas" },
    { value: "3", label: "Proyectos de alta calidad en curso" },
  ],
  about: {
    kicker: "Propósito",
    title: "¿Por qué existimos?",
    p1: "Somos una fundación dedicada al desarrollo, evaluación y mejora de proyectos de alto impacto alineados con los ODS, para generar beneficios sociales, ambientales, económicos y culturales tangibles.",
    p2: "Impulsamos soluciones basadas en la naturaleza para la adaptación y mitigación climática, la conservación de la biodiversidad y el desarrollo resiliente, articulando comunidades, empresas, inversionistas, financiadores e instituciones.",
    p3: "Incorporamos sistemas propios de monitoreo y trazabilidad que garantizan transparencia, confianza y verificación de impactos en cada fase del proyecto.",
    link: "Conoce nuestra historia y equipo",
  },
  whatWeDo: {
    kicker: "Qué hacemos",
    title: "Transformamos ideas en proyectos viables, escalables y medibles",
    items: [
      {
        title: "Estructuramos y evaluamos",
        text: "Fortalecemos iniciativas sostenibles de empresas, comunidades, organizaciones e inversionistas, transformando ideas y oportunidades en proyectos viables, escalables y con impacto medible.",
      },
      {
        title: "Integramos salvaguardas",
        text: "Promovemos una participación comunitaria efectiva: diálogo, construcción de confianza y modelos de distribución de beneficios acordes con las necesidades y cosmovisión de cada territorio.",
      },
      {
        title: "Alineamos con estándares",
        text: "Acompañamos los proyectos en su alineación con certificaciones internacionales, fortaleciendo su credibilidad y reconocimiento ante aliados, financiadores, compradores e inversionistas.",
      },
      {
        title: "Facilitamos financiamiento",
        text: "Abrimos acceso a mercados ambientales — carbono, biodiversidad y otros esquemas de compensación — maximizando los beneficios para todos los actores y los ODS.",
      },
    ],
  },
  businessLines: {
    kicker: "Líneas de negocio",
    title: "Soluciones de valor",
    items: [
      {
        title: "Estrategia Climática y ESG",
        text: "Reportes y divulgación, licenciamiento ambiental, due diligence, salvaguardias y capacitación para empresas minero-energéticas, puertos, infraestructura, agroindustria y manufactura.",
        tags: ["Reportes ESG", "Due diligence", "Salvaguardias", "Capacitación"],
      },
      {
        title: "Reducción de Emisiones y Finanzas Sostenibles",
        text: "Scope 3, modelación GEI, eficiencia energética, estructuración financiera y búsqueda de financiación para empresas con metas de descarbonización en su cadena de valor.",
        tags: ["Scope 3", "Modelación GEI", "Estructuración financiera", "Monitoreo"],
      },
      {
        title: "Soluciones Basadas en la Naturaleza y Activos Ambientales",
        text: "Carbono, biodiversidad, restauración, agroforestería, mejoramiento de suelos, cacao y café sostenibles, y comercialización de créditos y productos sostenibles.",
        tags: ["Carbono", "Biodiversidad", "Restauración", "Cacao y café sostenible"],
      },
    ],
  },
  services: {
    kicker: "Servicios",
    title: "Cómo generamos valor",
    items: [
      {
        title: "Evaluación y mejora de proyectos climáticos",
        text: "Calificamos e identificamos iniciativas ODS con altos co-beneficios, evaluando su alineación con mercados, salvaguardas y certificaciones (VCS, Gold Standard, CCB).",
        benefit: "Identificación de alto retorno social y ambiental",
      },
      {
        title: "Due diligence",
        text: "Evaluación científico-técnica del comportamiento de GEI y del potencial de mitigación. Puente técnico de gestión fiduciaria y seguimiento.",
        benefit: "Confianza y credibilidad internacional",
      },
      {
        title: "Modelación del potencial de mitigación",
        text: "Estructuramos proyectos climáticos y economías verdes: línea base, proyecciones y estudios de eficiencia energética en la cadena de valor.",
        benefit: "Preparación técnica y acceso a mercados",
      },
      {
        title: "Proyectos en cadenas de valor",
        text: "Evaluamos oportunidades con enfoque de paisaje: conectividad ecológica, multifuncionalidad del territorio y cosmovisión comunitaria.",
        benefit: "Credibilidad y valor agregado integral",
      },
      {
        title: "Aceleración de productos sostenibles",
        text: "Promoción de productos sostenibles y acciones de desarrollo para las comunidades que los producen.",
        benefit: "Desarrollo sostenible comunitario",
      },
    ],
  },
  impact: {
    kicker: "Nuestro enfoque",
    text: "La sostenibilidad no se mide únicamente en toneladas de carbono o árboles plantados, sino en la capacidad de las comunidades para liderar, decidir y mantener los proyectos a lo largo de generaciones.",
  },
  standards: {
    title: "Estándares y metodologías internacionales",
    items: ["VCS", "Gold Standard", "ICVCM", "CCB", "REDD+", "ODS"],
  },
  donation: {
    kicker: "Apoya nuestros proyectos",
    sectionTitle: "Tu aporte transforma territorios",
    sectionText:
      "Detrás de cada proyecto hay comunidades que lideran, deciden y sostienen el cuidado del territorio. Dona de forma segura en tu moneda y recibe reportes verificables del impacto de tu contribución.",
    text: "Tu aporte contribuye al diseño e implementación de proyectos de alto impacto en conservación, restauración y desarrollo comunitario.",
    bullets: [
      { title: "100% seguro", text: "Plataformas de pago confiables" },
      { title: "Transparencia total", text: "Informes públicos y verificación independiente" },
      { title: "Impacto real", text: "Beneficios para comunidades y ecosistemas" },
    ],
    button: "Realizar donación",
    redirect: "Serás redirigido a nuestra página segura de donaciones.",
    demoNote: "Prototipo — la pasarela de pago se conecta en la siguiente fase.",
    amounts: "Monto sugerido",
  },
  blog: {
    kicker: "Blog y actualidad",
    title: "Historias desde el territorio",
    text: "Publicamos avances de nuestros proyectos, aprendizajes y noticias en LinkedIn.",
    button: "Síguenos en LinkedIn",
  },
  cta: {
    title: "Sé parte del movimiento",
    text: "Saumama es movimiento, no discurso. Comparte tu talento, amplifica nuestra voz o súmate a iniciativas que generan impacto duradero.",
    button: "Colabora con Saumama",
  },
  aboutPage: {
    kicker: "Nosotros",
    title: "El trabajo comunitario no es un accesorio: es el corazón de cualquier proyecto climático",
    subtitle:
      "La Fundación Saumama nació para articular proyectos comunitarios y ambientales bajo estándares de transparencia y gobernanza indígena.",
    historyKicker: "Nuestra historia",
    historyTitle: "Una brecha que decidimos cerrar",
    historyP1:
      "En nuestro recorrido profesional descubrimos una oportunidad decisiva: cerrar la brecha entre los costos de estructuración de los proyectos y los criterios de inversión con que se evalúa su potencial. Las etapas tempranas — organización comunitaria, construcción de confianza, acuerdos de gobernanza y preparación técnica — reciben poca atención y financiamiento, a pesar de ser la base que reduce riesgos y permite que los proyectos climáticos escalen.",
    historyP2:
      "Desde sus inicios, nuestro foco ha sido visibilizar a las personas que hacen posibles los proyectos en territorio. Para ello se definió una estructura inicialmente ad honorem, temporal y escalable, que refleja el compromiso genuino de sus miembros con la sostenibilidad y la equidad.",
    mission: {
      title: "Misión",
      text: "Conectamos comunidades, empresas, inversionistas y territorios para convertir los grandes desafíos ambientales y sociales en oportunidades de transformación regenerativa sostenible. Diseñamos proyectos que integran conservación, producción y bienestar, creando puentes hacia financiamiento, mercados responsables y conocimiento técnico de vanguardia.",
    },
    vision: {
      title: "Visión 2030",
      text: "Ser líder en América Latina en el diseño e implementación de soluciones basadas en la naturaleza, y consolidarnos como referente regional en certificaciones de carbono y biodiversidad, con participación activa de actores locales, innovación tecnológica y estándares internacionales reconocidos.",
    },
    teamKicker: "Equipo",
    teamTitle: "Las personas detrás de Saumama",
    team: [
      {
        name: "Abraham Korman",
        role: "Cofundador — Director de Estrategia Climática y Soluciones Basadas en Naturaleza",
        bio: "Ha estado en todos los frentes de la transición energética y ambiental de Colombia: estructuró los primeros PPAs del país en los años 90, lideró la masificación del gas natural para el Gobierno colombiano y construyó marcos ESG en grandes proyectos mineros cuando ese lenguaje aún no existía en la región. En Conservación Internacional Colombia su visión encontró forma — y Saumama comenzó a gestarse.",
      },
      {
        name: "Armando Sarmiento",
        role: "Economía Territorial · Geoinformática · Ordenamiento del Paisaje",
        bio: "Economista y Magíster en Hidrosistemas de la Javeriana. Dirigió desde 1992 el Departamento de Ecología y Territorio de esa universidad y ha liderado su Centro de Investigaciones en Geoinformática. Más de treinta años estudiando las transformaciones del uso del suelo. En Saumama lidera el análisis económico territorial y el modelamiento espacial.",
      },
      {
        name: "Andrés Etter",
        role: "Ecología del Paisaje · SIG · Ecosistemas Críticos",
        bio: "Doctor en Ecología (U. de Queensland), pionero en Colombia del uso de SIG, sensores remotos y Big Data para la conservación. Más de 80 publicaciones científicas y décadas de campo en la Amazonía y los Llanos. Premio Nacional Alejandro Ángel Escobar 2004 en Medio Ambiente. En Saumama lidera el marco de gestión del conocimiento con enfoque de paisaje.",
      },
      {
        name: "Laura Tibavisco",
        role: "Ecología · Restauración de Ecosistemas · Finanzas para la Biodiversidad",
        bio: "Ecóloga de la Javeriana con estudios en desarrollo sostenible en Linköping University (Suecia). En Conservation International Colombia analizó estándares de créditos de biodiversidad y construyó criterios sociales para su implementación. Aporta la pregunta que el equipo necesita: ¿cómo hacemos que esto funcione para las próximas décadas?",
      },
      {
        name: "Adriana Gutiérrez",
        role: "Equipo Saumama",
        bio: "Parte del equipo fundador que hace posible la articulación de los proyectos de Saumama en territorio.",
      },
    ],
    logoKicker: "Inspiración",
    logoTitle: "La Samauma: la ceiba gigante del Amazonas",
    logoText:
      "Saumama nace inspirada en la Samauma, símbolo de expansión, conexión y arraigo. Queremos ser como ella: una institución con raíces profundas y ramas que se extienden hacia el mundo, capaz de crecer con tal fuerza que transforme territorios y comunidades.",
    closing: "Cuidamos el territorio. Conectamos su valor con quienes lo aman y quienes lo necesitan.",
  },
  projectsPage: {
    kicker: "Proyectos y servicios",
    title: "Proyectos reales que nacen de las comunidades",
    subtitle:
      "En Saumama no hablamos de promesas: hablamos de proyectos que hacen posible enfrentar el cambio climático con gobernanza sólida.",
    cta: "Explorar proyectos",
    featured: "Proyectos de alta calidad en curso",
    status: "En curso",
    projects: [
      {
        name: "Matavén / Mediamos",
        category: "REDD+ y gobernanza comunitaria",
        text: "Proyecto de alta calidad en el Vichada: conservación de bosques con gobernanza comunitaria sólida y distribución justa de beneficios.",
      },
      {
        name: "Resguardo Kogui",
        category: "Conservación y cultura ancestral",
        text: "Protección de ecosistemas estratégicos y preservación de la cultura ancestral, de la mano de la comunidad Kogui en la Sierra Nevada.",
      },
      {
        name: "Carbono Vivo",
        category: "REDD+ y restauración",
        text: "Reducción de emisiones y restauración de ecosistemas que generan créditos de carbono con participación comunitaria plena.",
      },
    ],
    safeguardsKicker: "Salvaguardas ambientales y sociales",
    safeguardsTitle: "Compromiso ético con estándares internacionales",
    safeguards: [
      {
        title: "Gobernanza y participación comunitaria",
        text: "Consentimiento Previo, Libre e Informado (CPLI), distribución justa de beneficios y un mecanismo de quejas accesible, confidencial y culturalmente apropiado.",
      },
      {
        title: "Integridad ambiental",
        text: "Impacto neto positivo en biodiversidad, gestión sostenible de recursos con enfoque de paisaje y respaldo en la mejor evidencia científica y el conocimiento tradicional local.",
      },
      {
        title: "Confianza y calidad",
        text: "Adherencia estricta a estándares internacionales (ICVCM, VCS, Gold Standard), transparencia total con verificación independiente y monitoreo con drones, satélites e IA.",
      },
      {
        title: "Alianzas estratégicas",
        text: "Con fundaciones, empresas y entidades con historia de trabajo serio, gobierno claro y disposición a mejorar continuamente.",
      },
    ],
    closing: "Cuidamos el territorio. Convertimos ese cuidado en valor para comunidades y empresas.",
    closingCta1: "Conoce al equipo",
    closingCta2: "Colabora con Saumama",
  },
  footer: {
    tagline: "Invertir en la naturaleza, transformar comunidades y personas.",
    navTitle: "Navegación",
    resourcesTitle: "Recursos",
    resources: ["Política de privacidad", "Términos y condiciones", "Transparencia", "Informes públicos"],
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
    projects: "Projects & services",
    blog: "Blog",
    donate: "Donate now",
  },
  hero: {
    kicker: "Investing in nature",
    title: "We care for the territory. And we make that care count for everyone.",
    subtitle:
      "Projects with real impact and lasting benefits for society, communities, nature and business.",
    cta2: "Our projects",
  },
  manifesto: {
    quote:
      "Saumama is the bridge that turns climate challenges into prosperity for the communities that care for nature and the society that needs it.",
    line: "Without communities there is no future. With them, the planet has hope.",
  },
  stats: [
    { value: "100+", label: "Projects reviewed and assessed" },
    { value: "30+", label: "Years of team experience" },
    { value: "80+", label: "Scientific publications" },
    { value: "3", label: "High-quality projects underway" },
  ],
  about: {
    kicker: "Purpose",
    title: "Why we exist",
    p1: "We are a foundation dedicated to developing, evaluating and improving high-impact projects aligned with the SDGs, generating tangible social, environmental, economic and cultural benefits.",
    p2: "We drive nature-based solutions for climate adaptation and mitigation, biodiversity conservation and resilient development, connecting communities, companies, investors, funders and institutions.",
    p3: "We deploy our own monitoring and traceability systems that guarantee transparency, trust and impact verification at every phase of the project.",
    link: "Discover our story and team",
  },
  whatWeDo: {
    kicker: "What we do",
    title: "We turn ideas into viable, scalable and measurable projects",
    items: [
      {
        title: "We structure and assess",
        text: "We strengthen sustainable initiatives from companies, communities, organizations and investors, turning ideas and opportunities into viable, scalable projects with measurable impact.",
      },
      {
        title: "We integrate safeguards",
        text: "We foster effective community participation: dialogue, trust-building and benefit-sharing models aligned with the needs and worldview of each territory.",
      },
      {
        title: "We align with standards",
        text: "We guide projects towards international certifications, strengthening their credibility and recognition among partners, funders, buyers and investors.",
      },
      {
        title: "We unlock financing",
        text: "We open access to environmental markets — carbon, biodiversity and other offset schemes — maximizing benefits for all stakeholders and the SDGs.",
      },
    ],
  },
  businessLines: {
    kicker: "Business lines",
    title: "Value solutions",
    items: [
      {
        title: "Climate Strategy & ESG",
        text: "ESG reporting and disclosure, environmental licensing, due diligence, safeguards and training for mining & energy, ports, infrastructure, agribusiness and manufacturing.",
        tags: ["ESG reporting", "Due diligence", "Safeguards", "Training"],
      },
      {
        title: "Emissions Reduction & Sustainable Finance",
        text: "Scope 3, GHG modelling, energy efficiency, financial structuring and funding sourcing for companies with decarbonization targets across their value chain.",
        tags: ["Scope 3", "GHG modelling", "Financial structuring", "Monitoring"],
      },
      {
        title: "Nature-Based Solutions & Environmental Assets",
        text: "Carbon, biodiversity, restoration, agroforestry, soil improvement, sustainable cocoa and coffee, and trading of credits and sustainable products.",
        tags: ["Carbon", "Biodiversity", "Restoration", "Sustainable cocoa & coffee"],
      },
    ],
  },
  services: {
    kicker: "Services",
    title: "How we create value",
    items: [
      {
        title: "Climate project evaluation and improvement",
        text: "We qualify and identify SDG initiatives with high co-benefits, assessing alignment with markets, safeguards and certifications (VCS, Gold Standard, CCB).",
        benefit: "High social and environmental return identified",
      },
      {
        title: "Due diligence",
        text: "Scientific-technical assessment of GHG behaviour and mitigation potential. Technical bridge for fiduciary management and follow-up.",
        benefit: "International trust and credibility",
      },
      {
        title: "Mitigation potential modelling",
        text: "We structure climate projects and green economies: baselines, projections and value-chain energy efficiency studies.",
        benefit: "Technical readiness and market access",
      },
      {
        title: "Value chain projects",
        text: "We assess opportunities with a landscape approach: ecological connectivity, territorial multifunctionality and community worldview.",
        benefit: "Comprehensive credibility and added value",
      },
      {
        title: "Sustainable product acceleration",
        text: "Promotion of sustainable products and development actions for the communities that produce them.",
        benefit: "Community-driven sustainable development",
      },
    ],
  },
  impact: {
    kicker: "Our approach",
    text: "Sustainability is not measured only in tonnes of carbon or trees planted, but in the capacity of communities to lead, decide and sustain projects across generations.",
  },
  standards: {
    title: "International standards and methodologies",
    items: ["VCS", "Gold Standard", "ICVCM", "CCB", "REDD+", "SDGs"],
  },
  donation: {
    kicker: "Support our projects",
    sectionTitle: "Your contribution transforms territories",
    sectionText:
      "Behind every project there are communities leading, deciding and sustaining the care of their territory. Donate securely in your currency and receive verifiable impact reports.",
    text: "Your contribution helps design and implement high-impact conservation, restoration and community development projects.",
    bullets: [
      { title: "100% secure", text: "Trusted payment platforms" },
      { title: "Full transparency", text: "Public reports and independent verification" },
      { title: "Real impact", text: "Benefits for communities and ecosystems" },
    ],
    button: "Donate",
    redirect: "You will be redirected to our secure donations page.",
    demoNote: "Prototype — the payment gateway is connected in the next phase.",
    amounts: "Suggested amount",
  },
  blog: {
    kicker: "Blog & updates",
    title: "Stories from the territory",
    text: "We share project updates, lessons learned and news on LinkedIn.",
    button: "Follow us on LinkedIn",
  },
  cta: {
    title: "Be part of the movement",
    text: "Saumama is movement, not rhetoric. Share your talent, amplify our voice or join initiatives that create lasting impact.",
    button: "Partner with Saumama",
  },
  aboutPage: {
    kicker: "About us",
    title: "Community work is not an accessory: it is the heart of any climate project",
    subtitle:
      "Fundación Saumama was born to articulate community and environmental projects under standards of transparency and indigenous governance.",
    historyKicker: "Our story",
    historyTitle: "A gap we decided to close",
    historyP1:
      "Throughout our careers we found a decisive opportunity: closing the gap between project structuring costs and the investment criteria used to assess their potential. Early stages — community organization, trust-building, governance agreements and technical preparation — receive little attention and funding, despite being the foundation that reduces risk and allows climate projects to scale.",
    historyP2:
      "From the beginning, our focus has been making visible the people who make projects possible on the ground. We adopted an initially pro-bono, temporary and scalable structure that reflects our members' genuine commitment to sustainability and equity.",
    mission: {
      title: "Mission",
      text: "We connect communities, companies, investors and territories to turn major environmental and social challenges into opportunities for sustainable regenerative transformation. We design projects that integrate conservation, production and well-being, building bridges to financing, responsible markets and cutting-edge technical knowledge.",
    },
    vision: {
      title: "Vision 2030",
      text: "To lead Latin America in the design and implementation of nature-based solutions, and become a regional benchmark in carbon and biodiversity certifications, with active local participation, technological innovation and recognized international standards.",
    },
    teamKicker: "Team",
    teamTitle: "The people behind Saumama",
    team: [
      {
        name: "Abraham Korman",
        role: "Co-founder — Director of Climate Strategy & Nature-Based Solutions",
        bio: "He has been on every front of Colombia's energy and environmental transition: structured the country's first PPAs in the 90s, led the national rollout of natural gas for the Colombian Government and built ESG frameworks in major mining projects before that language existed in the region. At Conservation International Colombia his vision took shape — and Saumama began to emerge.",
      },
      {
        name: "Armando Sarmiento",
        role: "Territorial Economics · Geoinformatics · Landscape Planning",
        bio: "Economist with a Master's in Hydrosystems from Javeriana University. He led its Department of Ecology and Territory since 1992 and its Geoinformatics Research Centre. Over thirty years studying land-use transformations. At Saumama he leads territorial economic analysis and spatial modelling.",
      },
      {
        name: "Andrés Etter",
        role: "Landscape Ecology · GIS · Critical Ecosystems",
        bio: "PhD in Ecology (University of Queensland), a pioneer in Colombia of GIS, remote sensing and Big Data for conservation. Over 80 scientific publications and decades of fieldwork in the Amazon and the Llanos. 2004 Alejandro Ángel Escobar National Award in Environment. At Saumama he leads the landscape-approach knowledge framework.",
      },
      {
        name: "Laura Tibavisco",
        role: "Ecology · Ecosystem Restoration · Biodiversity Finance",
        bio: "Ecologist from Javeriana with sustainable development studies at Linköping University (Sweden). At Conservation International Colombia she analyzed biodiversity credit standards and built social criteria for their implementation. She brings the question the team needs: how do we make this work for decades to come?",
      },
      {
        name: "Adriana Gutiérrez",
        role: "Saumama Team",
        bio: "Part of the founding team that makes the articulation of Saumama's projects on the ground possible.",
      },
    ],
    logoKicker: "Inspiration",
    logoTitle: "The Samauma: the giant kapok tree of the Amazon",
    logoText:
      "Saumama is inspired by the Samauma, a symbol of expansion, connection and rootedness. We want to be like her: an institution with deep roots and branches reaching out to the world, capable of growing with such strength that it transforms territories and communities.",
    closing: "We care for the territory. We connect its value with those who love it and those who need it.",
  },
  projectsPage: {
    kicker: "Projects & services",
    title: "Real projects born from communities",
    subtitle:
      "At Saumama we don't talk about promises: we talk about projects that make facing climate change possible, with solid governance.",
    cta: "Explore projects",
    featured: "High-quality projects underway",
    status: "Underway",
    projects: [
      {
        name: "Matavén / Mediamos",
        category: "REDD+ & community governance",
        text: "High-quality project in Vichada: forest conservation with solid community governance and fair benefit distribution.",
      },
      {
        name: "Resguardo Kogui",
        category: "Conservation & ancestral culture",
        text: "Protection of strategic ecosystems and preservation of ancestral culture, hand in hand with the Kogui community in the Sierra Nevada.",
      },
      {
        name: "Carbono Vivo",
        category: "REDD+ & restoration",
        text: "Emission reductions and ecosystem restoration generating carbon credits with full community participation.",
      },
    ],
    safeguardsKicker: "Environmental and social safeguards",
    safeguardsTitle: "An ethical commitment to international standards",
    safeguards: [
      {
        title: "Governance and community participation",
        text: "Free, Prior and Informed Consent (FPIC), fair benefit distribution and an accessible, confidential and culturally appropriate grievance mechanism.",
      },
      {
        title: "Environmental integrity",
        text: "Net positive impact on biodiversity, sustainable resource management with a landscape approach, and grounding in the best science and local traditional knowledge.",
      },
      {
        title: "Trust and quality",
        text: "Strict adherence to international standards (ICVCM, VCS, Gold Standard), full transparency with independent verification, and monitoring with drones, satellites and AI.",
      },
      {
        title: "Strategic alliances",
        text: "With foundations, companies and institutions with a track record of serious work, clear governance and willingness to keep improving.",
      },
    ],
    closing: "We care for the territory. We turn that care into value for communities and companies.",
    closingCta1: "Meet the team",
    closingCta2: "Partner with Saumama",
  },
  footer: {
    tagline: "Investing in nature, transforming communities and people.",
    navTitle: "Navigation",
    resourcesTitle: "Resources",
    resources: ["Privacy policy", "Terms & conditions", "Transparency", "Public reports"],
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
