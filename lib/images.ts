// Fotografía real de la Fundación Saumama (Sierra Nevada, Nabusimake,
// comunidad Arhuaca, la ceiba Samauma). Optimizada y servida localmente.
const isProd = process.env.NODE_ENV === "production";
const p = (f: string) => `${isProd ? "/saumama-web" : ""}/img/${f}`;

export const IMG = {
  // Héroes
  heroRiver: p("hero.jpg"), // aldea Nabusimake — luminosa (feedback del cliente)
  heroValley: p("hero-nosotros.jpg"), // Sierra Nevada de Santa Marta
  mountain: p("hero-proyectos.jpg"), // bosque nublado
  // Secciones
  samauma: p("samauma.jpg"), // la ceiba gigante real
  forestSun: p("proposito.jpg"), // ceiba desde abajo
  historia: p("historia.jpg"), // calle empedrada de Nabusimake
  enfoque: p("enfoque.jpg"), // hoja con gotas
  donacion: p("donacion.jpg"), // bosque en niebla
  seedling: p("cta.jpg"), // reunión comunitaria en la maloca
  // Galería
  gal: [p("gal-1.jpg"), p("gal-2.jpg"), p("gal-3.jpg"), p("gal-4.jpg"), p("gal-5.jpg")],
  // Proyectos
  proj: [p("proj-1.jpg"), p("proj-2.jpg"), p("proj-3.jpg")],
  // Qué hacemos
  que: [p("que-1.jpg"), p("que-2.jpg"), p("que-3.jpg"), p("que-4.jpg")],
  // Blog
  blogGal: [
    p("blog-g1.jpg"), p("blog-g2.jpg"), p("blog-g3.jpg"), p("blog-g4.jpg"),
    p("blog-g5.jpg"), p("blog-g6.jpg"), p("blog-g7.jpg"), p("blog-g8.jpg"),
  ],
  blogPosts: [p("historia.jpg"), p("cta.jpg"), p("samauma.jpg")],
  // Logo oficial
  logoWhite: p("logo-white.png"),
  logoGreen: p("logo-green.png"),
  logoNavWhite: p("logo-nav-white.png"),
  logoNavGreen: p("logo-nav-green.png"),
};

// TODO: confirmar URL definitiva de LinkedIn con la fundación
export const LINKEDIN_URL = "https://www.linkedin.com/company/saumama";
