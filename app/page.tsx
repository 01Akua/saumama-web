// Raíz estática: redirige al idioma por defecto (ES).
export default function RootRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=./es/" />
      <p className="p-8 text-sm">
        Redirigiendo… <a href="./es/" className="underline">Ir al sitio</a>
      </p>
    </>
  );
}
