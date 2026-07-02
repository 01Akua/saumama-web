// Fotos de referencia (Unsplash) para el prototipo.
// En producción se reemplazan por fotografía propia de la fundación vía CMS.
const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMG = {
  heroRiver: u("photo-1501854140801-50d01698950b"),
  heroValley: u("photo-1470071459604-3b5ec3a7fe05"),
  forestSun: u("photo-1441974231531-c6227db76b6e", 1200),
  forestPath: u("photo-1502082553048-f009c37129b9", 800),
  leaves: u("photo-1518495973542-4542c06a5843", 800),
  mountain: u("photo-1469474968028-56623f02e42e", 1200),
  hills: u("photo-1497436072909-60f360e1d4b1", 800),
  lake: u("photo-1470770841072-f978cf4d019e", 800),
  field: u("photo-1500382017468-9049fed747ef", 800),
  seedling: u("photo-1542601906990-b4d3fb778b09", 1200),
};
