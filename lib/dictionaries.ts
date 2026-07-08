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
    donate: "Contáctanos",
  },
  hero: {
    kicker: "Invertir en la naturaleza",
    title: "Conectamos naturaleza, comunidades e inversión sostenible",
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
    p1: "En Saumama desarrollamos soluciones basadas en la naturaleza que generan beneficios ambientales, sociales y económicos duraderos.",
    p2: "Trabajamos junto a comunidades, empresas e instituciones para estructurar proyectos transparentes, medibles y alineados con los estándares internacionales.",
    p3: "Incorporamos sistemas propios de monitoreo y trazabilidad que garantizan transparencia, confianza y verificación de impactos en cada fase del proyecto.",
    link: "Conoce nuestra historia y equipo",
  },
  whatWeDo: {
    kicker: "Qué hacemos",
    title: "Transformamos ideas en proyectos viables, escalables y medibles",
    items: [
      {
        title: "Estructuramos y evaluamos",
        text: "De la idea al proyecto viable, escalable y medible.",
      },
      {
        title: "Integramos salvaguardas",
        text: "Participación comunitaria real y beneficios compartidos.",
      },
      {
        title: "Alineamos con estándares",
        text: "Certificaciones internacionales que dan credibilidad.",
      },
      {
        title: "Facilitamos financiamiento",
        text: "Acceso a mercados de carbono y biodiversidad.",
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
    intro: "Acompañamos el desarrollo e implementación de proyectos de alto impacto, conectando conocimiento técnico, participación comunitaria y financiamiento estratégico — con salvaguardas, monitoreo verificable y beneficios duraderos para los territorios.",
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
  causes: {
    kicker: "Causas",
    title: "Los frentes en los que trabajamos",
    text: "Nuestras causas son los temas que defendemos; los proyectos son las iniciativas concretas que las hacen realidad en cada territorio.",
    items: [
      { title: "Restauración ecológica", text: "Recuperamos bosques y áreas estratégicas para devolverle vida al territorio." },
      { title: "Biodiversidad y fauna", text: "Protegemos especies y ecosistemas críticos con ciencia y saber local." },
      { title: "Carbono y clima", text: "Reducimos emisiones y conectamos el cuidado del bosque con los mercados de carbono." },
      { title: "Agroforestería y suelos", text: "Sistemas productivos que regeneran el suelo en lugar de agotarlo." },
      { title: "Cacao sostenible", text: "Cadenas de valor justas que premian el cacao que conserva el bosque." },
      { title: "Café sostenible", text: "Café de origen que sostiene a las familias y a la montaña que lo produce." },
    ],
  },
  projectsHome: {
    kicker: "Proyectos",
    title: "Iniciativas reales, en territorio",
    text: "Cada proyecto lleva nuestras causas al terreno, de la mano de las comunidades.",
    button: "Ver todos los proyectos",
  },
  regions: {
    kicker: "Dónde trabajamos",
    title: "Territorios que nos guían",
    text: "Cada territorio es único; cada proyecto se diseña a la medida de sus necesidades y sueños.",
    items: [
      { name: "Sierra Nevada de Santa Marta", note: "Pueblos Arhuaco y Kogui" },
      { name: "Vichada", note: "Matavén y la Orinoquía" },
      { name: "Amazonía colombiana", note: "Bosque en pie" },
      { name: "Guainía", note: "Selvas y ríos del oriente" },
      { name: "Caquetá", note: "Piedemonte amazónico" },
    ],
  },
  galleryHome: {
    kicker: "Trabajo en campo",
    title: "Así se ve nuestro trabajo",
    captions: [
      "Calles de Nabusimake, Sierra Nevada",
      "Autoridad arhuaca, guardián del territorio",
      "Encuentro comunitario en la maloca",
      "Ríos que nacen en la Sierra",
      "La ceiba, hermana de la Samauma",
    ],
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
    flow: {
      demoBanner: "SIMULACIÓN — así se verá el proceso real. No ingreses datos reales.",
      steps: ["Resumen", "Tus datos", "Pago"],
      summaryTitle: "Resumen de tu donación",
      summaryAmount: "Monto",
      summaryCurrency: "Moneda",
      summaryDestination: "Destino",
      summaryDestinationValue: "Proyectos de conservación y desarrollo comunitario",
      continue: "Continuar",
      back: "Atrás",
      donorTitle: "Datos del donante",
      nameLabel: "Nombre completo",
      namePlaceholder: "Tu nombre",
      emailLabel: "Correo electrónico",
      emailPlaceholder: "tucorreo@ejemplo.com",
      emailNote: "Aquí llegará tu recibo y el reporte de impacto.",
      payTitle: "Pago seguro",
      cardLabel: "Tarjeta de prueba",
      cardNote: "Campos de demostración — deshabilitados a propósito.",
      payButton: "Confirmar donación",
      processing: "Procesando tu donación…",
      successTitle: "¡Gracias por sembrar futuro!",
      successText: "Tu donación simulada fue registrada. En la versión real, recibirías tu recibo en",
      successImpact: "Tu aporte apoyaría proyectos con gobernanza comunitaria en la Sierra Nevada, el Vichada y más territorios.",
      close: "Cerrar",
      newDonation: "Hacer otra donación",
    },
  },
  contact: {
    kicker: "Ponte en contacto",
    title: "Déjanos tus datos",
    text: "¿Quieres conocer más sobre nuestros proyectos, explorar una alianza o sumarte al trabajo en territorio? Escríbenos y el equipo te responderá.",
    name: "Nombre completo",
    namePlaceholder: "Tu nombre",
    email: "Correo electrónico",
    emailPlaceholder: "tucorreo@ejemplo.com",
    message: "Mensaje",
    messagePlaceholder: "Cuéntanos en qué estás interesado…",
    submit: "Enviar mensaje",
    success: "¡Gracias! Recibimos tu mensaje y te responderemos pronto.",
    demoNote: "Prototipo — el envío real se conecta con el correo de la fundación en la versión final.",
    bullets: [
      { title: "Alianzas", text: "Empresas e instituciones que buscan proyectos de alto impacto" },
      { title: "Proyectos", text: "Comunidades y territorios con iniciativas por estructurar" },
      { title: "Talento", text: "Profesionales que quieren aportar a la misión" },
    ],
  },
  blog: {
    kicker: "Blog y actualidad",
    title: "Historias desde el territorio",
    text: "Avances de nuestros proyectos, aprendizajes y noticias desde las comunidades.",
    button: "Visita nuestro blog",
  },
  blogPage: {
    kicker: "Blog",
    title: "Historias desde el territorio",
    subtitle:
      "Crónicas, avances y aprendizajes de los proyectos que construimos junto a las comunidades. Únete y crece con nosotros.",
    featuredLabel: "Historia destacada",
    readMore: "Leer historia",
    readOn: "Leer en LinkedIn",
    follow: "Síguenos en LinkedIn",
    followText: "También publicamos cada avance en LinkedIn.",
    backToBlog: "Volver al blog",
    minRead: "min de lectura",
    posts: [
      {
        slug: "nabusimake-escuchar",
        tag: "Territorio",
        date: "Junio 2026",
        author: "Equipo Saumama",
        title: "Nabusimake: escuchar antes de estructurar",
        excerpt:
          "Visitamos la capital espiritual del pueblo Arhuaco en la Sierra Nevada. Antes de hablar de carbono o certificaciones, los proyectos empiezan caminando el territorio.",
        body: [
          "Llegar a Nabusimake no es fácil, y así debe ser. La capital espiritual del pueblo Arhuaco está protegida por horas de camino de montaña, y cada piedra del sendero recuerda que uno entra a un territorio que tiene sus propias reglas, sus propios tiempos y sus propias autoridades.",
          "Fuimos a escuchar. En Saumama creemos que ningún proyecto climático puede estructurarse desde un escritorio: antes de hablar de líneas base, certificaciones o créditos de carbono, hay que caminar el territorio y entender qué quieren sus habitantes para las próximas generaciones.",
          "Las conversaciones con las autoridades tradicionales confirmaron lo que guía nuestro trabajo: la gobernanza comunitaria no es un requisito de un estándar internacional — es la condición para que cualquier resultado sea duradero. El Consentimiento Previo, Libre e Informado no es un formulario: es un proceso de confianza que toma el tiempo que tenga que tomar.",
          "Volvimos con cuadernos llenos y con una certeza: los proyectos que vienen se diseñarán con la comunidad, a su ritmo y en su lengua. Esa es la diferencia entre estructurar un proyecto y sembrar uno.",
        ],
      },
      {
        slug: "consejos-juveniles",
        tag: "Comunidades",
        date: "Junio 2026",
        author: "Equipo Saumama",
        title: "Consejos juveniles: la próxima generación de guardianes",
        excerpt:
          "Acompañamos los espacios donde los jóvenes de las comunidades deciden cómo quieren cuidar su territorio. La gobernanza no se hereda sola: se construye.",
        body: [
          "En la maloca, las nuevas generaciones se reúnen para algo que pocas veces sale en los reportes de los proyectos climáticos: decidir. Decidir cómo quieren cuidar su territorio, qué saberes quieren conservar y qué herramientas nuevas quieren incorporar.",
          "Los consejos juveniles son la respuesta de las comunidades a una pregunta difícil: ¿quién sostiene un proyecto de conservación dentro de veinte años? La respuesta no está en los documentos técnicos — está en los jóvenes que hoy aprenden a leer el territorio con los mayores y a leer los contratos con nosotros.",
          "Nuestro papel es acompañar sin invadir: aportar herramientas técnicas cuando las piden, traducir el lenguaje de los mercados ambientales, y sobre todo, respetar que las decisiones se toman allá, en el círculo de la maloca, y no en una oficina en Bogotá.",
          "La sostenibilidad no se mide solo en toneladas de carbono: se mide en la capacidad de una comunidad para liderar, decidir y mantener sus proyectos a lo largo de generaciones. Los consejos juveniles son exactamente eso, en acción.",
        ],
      },
      {
        slug: "la-samauma",
        tag: "Proyectos",
        date: "Mayo 2026",
        author: "Adriana Gutiérrez",
        title: "La Samauma: el árbol que nos dio nombre",
        excerpt:
          "La ceiba gigante del Amazonas es símbolo de expansión, conexión y arraigo. Así inspira la forma en que estructuramos cada proyecto.",
        body: [
          "Saumama Foundation nace inspirada en la Samauma, la ceiba gigante del Amazonas, símbolo de expansión, conexión y arraigo. Su grandeza me recuerda que hay fuerzas vivas capaces de crecer más allá de cualquier límite.",
          "Al pensar en esa imagen, comprendí que una ceiba gigante no cabe en ninguna representación corporativa. Automáticamente vino a mi mente El Principito, cuando debía limpiar su pequeño planeta de los baobabs para evitar que crecieran tanto que lo destruyeran.",
          "Así quiero que sea Saumama: una institución que crezca con tal fuerza y amplitud que se convierta en un referente sólido, capaz de transformar territorios y comunidades, con raíces profundas y ramas que se extienden hacia el mundo.",
          "Cada proyecto que estructuramos sigue esa lógica: raíces profundas — gobernanza comunitaria, consentimiento, confianza — y ramas hacia el mundo: mercados, certificaciones, aliados internacionales. Sin raíces, las ramas se caen. Gracias por hacer parte de estos sueños.",
        ],
      },
    ],
    galleryTitle: "Galería del territorio",
    galleryText: "Momentos reales de nuestro trabajo con las comunidades en la Sierra Nevada y más allá.",
    community: {
      kicker: "Comunidad Saumama",
      title: "Crece con nosotros",
      text: "Únete a la comunidad: recibe las historias primero, entérate de convocatorias y acompaña los proyectos desde adentro.",
      emailPlaceholder: "Tu correo electrónico",
      button: "Unirme a la comunidad",
      joined: "¡Bienvenido a la comunidad! Te llegarán nuestras historias.",
      joinedDemo: "Registro simulado — en la versión final quedarás suscrito de verdad.",
      members: "personas ya hacen parte",
    },
    comments: {
      title: "Conversación",
      empty: "Sé la primera persona en comentar esta historia.",
      nameLabel: "Tu nombre",
      namePlaceholder: "¿Cómo te llamas?",
      textLabel: "Tu comentario",
      textPlaceholder: "Comparte tu opinión o pregunta…",
      submit: "Publicar comentario",
      moderation: "Tu comentario será visible cuando el equipo lo apruebe.",
      pending: "En revisión",
      demoNote: "Demo — los comentarios se guardan en este navegador y se moderan desde el panel admin.",
    },
  },
  cta: {
    title: "Sé parte del movimiento",
    text: "Saumama es movimiento, no discurso. Comparte tu talento, amplifica nuestra voz o súmate a iniciativas que generan impacto duradero.",
    button: "Ponte en contacto",
    contact: "Escríbenos un correo",
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
    teamIntro:
      "Nuestro equipo multidisciplinario integra experiencia en gobernanza, ecología, derecho e implementación de proyectos para desarrollar soluciones basadas en la naturaleza con altos estándares de integridad en diferentes regiones de Colombia.",
    alliesLine: "Aliados: construimos impacto duradero a través de la colaboración.",
    team: [
      { name: "Alexis Leroy", role: "Director de Proyectos y Liderazgo Estratégico", bio: "Desarrollo de proyectos y alianzas estratégicas." },
      { name: "Abraham Korman", role: "Asesor Senior — Social y Gobernanza", bio: "Gobernanza social y relacionamiento comunitario." },
      { name: "Adriana Gutiérrez", role: "Experta Legal — Regulación de Carbono y Tenencia de la Tierra", bio: "Regulación de carbono y cumplimiento ambiental." },
      { name: "Andrés Etter", role: "Experto en Ecosistemas y Ecología del Paisaje", bio: "Mapeo de ecosistemas críticos con enfoque de paisaje." },
      { name: "Andrés Herkrath", role: "Estructurador Financiero de Proyectos", bio: "Estrategias de inversión para proyectos ambientales." },
      { name: "Armando Sarmiento", role: "Gerente de Proyectos", bio: "Implementación de proyectos y gestión operativa." },
      { name: "Sandra Montenegro", role: "Experta Legal — Tenencia de la Tierra", bio: "Seguridad jurídica de la tierra para las comunidades." },
      { name: "Laura Tibavizco", role: "Consultora", bio: "Restauración, biodiversidad y criterios sociales." },
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
    featuredProject: {
      name: "El ancestro que seremos",
      category: "Restauración ecológica y agroforestal · ARR de alta integridad",
      stage: "En etapa de PDD",
      text: "Proyecto de restauración ecológica y agroforestal en la Sierra Nevada de Santa Marta que integra restauración, conservación de la biodiversidad y soluciones climáticas de largo plazo. Se desarrolla junto a cuatro comunidades indígenas en nueve cuencas, articulando el conocimiento ancestral con la restauración del territorio.",
      facts: [
        { label: "Ubicación", value: "Sierra Nevada de Santa Marta — La Guajira, Cesar y Magdalena" },
        { label: "Área potencial", value: "5.000 hectáreas" },
        { label: "Ecosistemas", value: "Del nivel del mar a los 5.776 msnm: bosques tropicales y cuencas estratégicas" },
        { label: "Comunidades", value: "Pueblos Kogui, Wiwa y Arhuaco — 4 comunidades, 9 cuencas" },
      ],
    },
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
    donate: "Contact us",
  },
  hero: {
    kicker: "Investing in nature",
    title: "Connecting nature, communities and sustainable investment",
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
    p1: "At Saumama, we develop nature-based solutions that generate long-term environmental, social and economic benefits.",
    p2: "We work alongside communities, companies and institutions to structure transparent, measurable projects aligned with international standards.",
    p3: "We deploy our own monitoring and traceability systems that guarantee transparency, trust and impact verification at every phase of the project.",
    link: "Discover our story and team",
  },
  whatWeDo: {
    kicker: "What we do",
    title: "We turn ideas into viable, scalable and measurable projects",
    items: [
      {
        title: "We structure and assess",
        text: "From idea to viable, scalable, measurable project.",
      },
      {
        title: "We integrate safeguards",
        text: "Real community participation and shared benefits.",
      },
      {
        title: "We align with standards",
        text: "International certifications that build credibility.",
      },
      {
        title: "We unlock financing",
        text: "Access to carbon and biodiversity markets.",
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
    intro: "We support the development and implementation of high-impact projects by connecting technical expertise, community engagement and strategic finance — with safeguards, verifiable monitoring and long-term territorial benefits.",
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
  causes: {
    kicker: "Causes",
    title: "The fronts we work on",
    text: "Our causes are the themes we stand for; our projects are the concrete initiatives that make them real in each territory.",
    items: [
      { title: "Ecological restoration", text: "We recover forests and strategic areas to bring the territory back to life." },
      { title: "Biodiversity & wildlife", text: "We protect species and critical ecosystems with science and local knowledge." },
      { title: "Carbon & climate", text: "We reduce emissions and connect forest care with carbon markets." },
      { title: "Agroforestry & soils", text: "Productive systems that regenerate the soil instead of depleting it." },
      { title: "Sustainable cocoa", text: "Fair value chains that reward cocoa that keeps the forest standing." },
      { title: "Sustainable coffee", text: "Origin coffee that sustains the families and the mountain that grows it." },
    ],
  },
  projectsHome: {
    kicker: "Projects",
    title: "Real initiatives, on the ground",
    text: "Every project takes our causes to the territory, hand in hand with communities.",
    button: "See all projects",
  },
  regions: {
    kicker: "Where we work",
    title: "Territories that guide us",
    text: "Every territory is unique; every project is designed to fit its needs and dreams.",
    items: [
      { name: "Sierra Nevada de Santa Marta", note: "Arhuaco and Kogui peoples" },
      { name: "Vichada", note: "Matavén and the Orinoquía" },
      { name: "Colombian Amazon", note: "Standing forest" },
      { name: "Guainía", note: "Eastern jungles and rivers" },
      { name: "Caquetá", note: "Amazon foothills" },
    ],
  },
  galleryHome: {
    kicker: "Field work",
    title: "This is what our work looks like",
    captions: [
      "Streets of Nabusimake, Sierra Nevada",
      "Arhuaco authority, guardian of the territory",
      "Community gathering at the maloca",
      "Rivers born in the Sierra",
      "The kapok, sister of the Samauma",
    ],
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
    flow: {
      demoBanner: "SIMULATION — this is how the real process will look. Do not enter real data.",
      steps: ["Summary", "Your details", "Payment"],
      summaryTitle: "Your donation summary",
      summaryAmount: "Amount",
      summaryCurrency: "Currency",
      summaryDestination: "Destination",
      summaryDestinationValue: "Conservation and community development projects",
      continue: "Continue",
      back: "Back",
      donorTitle: "Donor details",
      nameLabel: "Full name",
      namePlaceholder: "Your name",
      emailLabel: "Email address",
      emailPlaceholder: "you@example.com",
      emailNote: "Your receipt and impact report will arrive here.",
      payTitle: "Secure payment",
      cardLabel: "Test card",
      cardNote: "Demo fields — intentionally disabled.",
      payButton: "Confirm donation",
      processing: "Processing your donation…",
      successTitle: "Thank you for planting the future!",
      successText: "Your simulated donation was recorded. In the real version, your receipt would arrive at",
      successImpact: "Your contribution would support community-governed projects in the Sierra Nevada, Vichada and beyond.",
      close: "Close",
      newDonation: "Make another donation",
    },
  },
  contact: {
    kicker: "Get in touch",
    title: "Leave us your details",
    text: "Want to learn more about our projects, explore a partnership or join the work on the ground? Write to us and the team will get back to you.",
    name: "Full name",
    namePlaceholder: "Your name",
    email: "Email address",
    emailPlaceholder: "you@example.com",
    message: "Message",
    messagePlaceholder: "Tell us what you are interested in…",
    submit: "Send message",
    success: "Thank you! We received your message and will reply soon.",
    demoNote: "Prototype — real delivery connects to the foundation's email in the final version.",
    bullets: [
      { title: "Partnerships", text: "Companies and institutions looking for high-impact projects" },
      { title: "Projects", text: "Communities and territories with initiatives to structure" },
      { title: "Talent", text: "Professionals who want to contribute to the mission" },
    ],
  },
  blog: {
    kicker: "Blog & updates",
    title: "Stories from the territory",
    text: "Project updates, lessons learned and news from the communities.",
    button: "Visit our blog",
  },
  blogPage: {
    kicker: "Blog",
    title: "Stories from the territory",
    subtitle:
      "Chronicles, progress and lessons from the projects we build together with communities. Join us and grow with us.",
    featuredLabel: "Featured story",
    readMore: "Read story",
    readOn: "Read on LinkedIn",
    follow: "Follow us on LinkedIn",
    followText: "We also publish every update on LinkedIn.",
    backToBlog: "Back to blog",
    minRead: "min read",
    posts: [
      {
        slug: "nabusimake-escuchar",
        tag: "Territory",
        date: "June 2026",
        author: "Saumama Team",
        title: "Nabusimake: listening before structuring",
        excerpt:
          "We visited the spiritual capital of the Arhuaco people in the Sierra Nevada. Before talking about carbon or certifications, projects begin by walking the territory.",
        body: [
          "Reaching Nabusimake is not easy — and that is how it should be. The spiritual capital of the Arhuaco people is protected by hours of mountain trail, and every stone on the path reminds you that you are entering a territory with its own rules, its own rhythms and its own authorities.",
          "We went to listen. At Saumama we believe no climate project can be structured from a desk: before talking about baselines, certifications or carbon credits, you must walk the territory and understand what its people want for the generations to come.",
          "Conversations with the traditional authorities confirmed what guides our work: community governance is not a requirement of an international standard — it is the condition for any result to last. Free, Prior and Informed Consent is not a form: it is a process of trust that takes as long as it needs to take.",
          "We came back with full notebooks and one certainty: the projects ahead will be designed with the community, at their pace and in their language. That is the difference between structuring a project and planting one.",
        ],
      },
      {
        slug: "consejos-juveniles",
        tag: "Communities",
        date: "June 2026",
        author: "Saumama Team",
        title: "Youth councils: the next generation of guardians",
        excerpt:
          "We accompany the spaces where young people from the communities decide how they want to care for their territory. Governance is not inherited: it is built.",
        body: [
          "In the maloca, the new generations gather for something that rarely appears in climate project reports: deciding. Deciding how they want to care for their territory, which knowledge they want to preserve and which new tools they want to embrace.",
          "Youth councils are the communities' answer to a hard question: who sustains a conservation project twenty years from now? The answer is not in technical documents — it is in the young people who today learn to read the territory with their elders and to read contracts with us.",
          "Our role is to accompany without intruding: providing technical tools when asked, translating the language of environmental markets, and above all respecting that decisions are made there, in the circle of the maloca — not in an office in Bogotá.",
          "Sustainability is not measured only in tonnes of carbon: it is measured in a community's capacity to lead, decide and sustain its projects across generations. Youth councils are exactly that, in action.",
        ],
      },
      {
        slug: "la-samauma",
        tag: "Projects",
        date: "May 2026",
        author: "Adriana Gutiérrez",
        title: "The Samauma: the tree that gave us our name",
        excerpt:
          "The giant kapok of the Amazon symbolizes expansion, connection and rootedness. It inspires how we structure every project.",
        body: [
          "Saumama Foundation was born inspired by the Samauma, the giant kapok of the Amazon, a symbol of expansion, connection and rootedness. Its greatness reminds me that there are living forces capable of growing beyond any limit.",
          "Thinking of that image, I understood that a giant kapok does not fit in any corporate representation. The Little Prince immediately came to mind, having to clear his small planet of baobabs so they would not grow large enough to destroy it.",
          "That is how I want Saumama to be: an institution that grows with such strength and breadth that it becomes a solid reference, capable of transforming territories and communities, with deep roots and branches reaching out to the world.",
          "Every project we structure follows that logic: deep roots — community governance, consent, trust — and branches to the world: markets, certifications, international allies. Without roots, branches fall. Thank you for being part of these dreams.",
        ],
      },
    ],
    galleryTitle: "Territory gallery",
    galleryText: "Real moments from our work with communities in the Sierra Nevada and beyond.",
    community: {
      kicker: "Saumama Community",
      title: "Grow with us",
      text: "Join the community: get the stories first, hear about open calls and follow the projects from the inside.",
      emailPlaceholder: "Your email address",
      button: "Join the community",
      joined: "Welcome to the community! Our stories are on their way.",
      joinedDemo: "Simulated sign-up — in the final version you will be truly subscribed.",
      members: "people are already part of it",
    },
    comments: {
      title: "Conversation",
      empty: "Be the first to comment on this story.",
      nameLabel: "Your name",
      namePlaceholder: "What is your name?",
      textLabel: "Your comment",
      textPlaceholder: "Share your thoughts or questions…",
      submit: "Post comment",
      moderation: "Your comment will be visible once the team approves it.",
      pending: "Pending review",
      demoNote: "Demo — comments are stored in this browser and moderated from the admin panel.",
    },
  },
  cta: {
    title: "Be part of the movement",
    text: "Saumama is movement, not rhetoric. Share your talent, amplify our voice or join initiatives that create lasting impact.",
    button: "Get in touch",
    contact: "Send us an email",
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
    teamIntro:
      "Our multidisciplinary team combines expertise in governance, ecology, law and project implementation to develop high-integrity nature-based solutions across Colombia.",
    alliesLine: "Partners: building long-lasting impact through collaboration.",
    team: [
      { name: "Alexis Leroy", role: "Project Director & Engagement Leader", bio: "Project development and strategic partnerships." },
      { name: "Abraham Korman", role: "Senior Advisor — Social & Governance", bio: "Social governance and community engagement." },
      { name: "Adriana Gutiérrez", role: "Legal Expert — Carbon Regulation & Land Tenure", bio: "Carbon regulation and environmental compliance." },
      { name: "Andrés Etter", role: "Ecosystem & Landscape Ecology Expert", bio: "Critical-ecosystem mapping with a landscape approach." },
      { name: "Andrés Herkrath", role: "Financial Project Structurer", bio: "Investment strategies for environmental projects." },
      { name: "Armando Sarmiento", role: "Project Manager", bio: "Project implementation and operations." },
      { name: "Sandra Montenegro", role: "Legal Expert — Land Tenure", bio: "Legal certainty of land for communities." },
      { name: "Laura Tibavizco", role: "Consultant", bio: "Restoration, biodiversity and social criteria." },
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
    featuredProject: {
      name: "The Ancestor We Will Become",
      category: "Ecological restoration & agroforestry · High-integrity ARR",
      stage: "At PDD stage",
      text: "An ecological restoration and agroforestry project in the Sierra Nevada de Santa Marta integrating restoration, biodiversity conservation and long-term climate solutions. Developed in partnership with four Indigenous communities across nine watersheds, combining ancestral knowledge with landscape restoration.",
      facts: [
        { label: "Location", value: "Sierra Nevada de Santa Marta — La Guajira, Cesar and Magdalena" },
        { label: "Potential area", value: "5,000 hectares" },
        { label: "Ecosystems", value: "From sea level to 5,776 masl: tropical forests and strategic watersheds" },
        { label: "Communities", value: "Kogui, Wiwa and Arhuaco peoples — 4 communities, 9 watersheds" },
      ],
    },
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
