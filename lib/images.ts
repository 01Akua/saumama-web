// Fotografía real de la Fundación Saumama (Sierra Nevada, Nabusimake,
// comunidad Arhuaca, la ceiba Samauma). Optimizada y servida localmente.
const isProd = process.env.NODE_ENV === "production";
const p = (f: string) => `${isProd ? "/saumama-web" : ""}/img/${f}`;

export const IMG = {
  // Héroes
  heroRiver: p("hero.webp"), // aldea Nabusimake — luminosa (feedback del cliente)
  heroValley: p("hero-nosotros.webp"), // Sierra Nevada de Santa Marta
  mountain: p("hero-proyectos.webp"), // bosque nublado
  // Secciones
  samauma: p("samauma.webp"), // la ceiba gigante real
  forestSun: p("proposito.webp"), // ceiba desde abajo
  historia: p("historia.webp"), // calle empedrada de Nabusimake
  enfoque: p("enfoque.webp"), // hoja con gotas
  donacion: p("donacion.webp"), // bosque en niebla
  seedling: p("cta.webp"), // reunión comunitaria en la maloca
  // Galería
  gal: [p("gal-1.webp"), p("gal-2.webp"), p("gal-3.webp"), p("gal-4.webp"), p("gal-5.webp")],
  // Proyectos
  proj: [p("proj-1.webp"), p("proj-2.webp"), p("proj-3.webp")],
  // Qué hacemos
  que: [p("que-1.webp"), p("que-2.webp"), p("que-3.webp"), p("que-4.webp")],
  // Blog
  blogGal: [
    p("blog-g1.webp"), p("blog-g2.webp"), p("blog-g3.webp"), p("blog-g4.webp"),
    p("blog-g5.webp"), p("blog-g6.webp"), p("blog-g7.webp"), p("blog-g8.webp"),
  ],
  blogPosts: [p("historia.webp"), p("cta.webp"), p("samauma.webp")],
  // Logo oficial
  logoWhite: p("logo-white.png"),
  logoGreen: p("logo-green.png"),
  logoNavWhite: p("logo-nav-white.png"),
  logoNavGreen: p("logo-nav-green.png"),
};

// TODO: confirmar URL definitiva de LinkedIn con la fundación
export const LINKEDIN_URL = "https://www.linkedin.com/company/saumama";
