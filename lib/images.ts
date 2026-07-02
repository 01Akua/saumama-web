// Fotos de referencia (Unsplash) para el prototipo.
// En producción se reemplazan por fotografía propia de la fundación vía CMS.
// Anchos ajustados al tamaño real de render + compresión agresiva (q=55-60).
const u = (id: string, w: number, q = 60) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const IMG = {
  // Fondos de hero (pantalla completa, detrás de overlay oscuro → q bajo)
  heroRiver: u("photo-1501854140801-50d01698950b", 1400, 55),
  heroValley: u("photo-1470071459604-3b5ec3a7fe05", 1400, 55),
  mountain: u("photo-1469474968028-56623f02e42e", 1400, 55),
  seedling: u("photo-1542601906990-b4d3fb778b09", 1200, 55),
  // Imágenes de contenido (render máx ~600px)
  forestSun: u("photo-1441974231531-c6227db76b6e", 1000),
  forestPath: u("photo-1502082553048-f009c37129b9", 560),
  leaves: u("photo-1518495973542-4542c06a5843", 560),
  hills: u("photo-1497436072909-60f360e1d4b1", 560),
  lake: u("photo-1470770841072-f978cf4d019e", 560),
  field: u("photo-1500382017468-9049fed747ef", 560),
};
