import { IMG } from "@/lib/images";

// Logo oficial de la fundación (árbol Samauma con raíces + wordmark).
// Versión blanca para fondos verdes, verde bosque para fondos claros.
export function Logo({
  dark = false,
  horizontal = true,
  className = "h-12 w-auto",
}: {
  dark?: boolean;
  horizontal?: boolean;
  className?: string;
}) {
  const src = horizontal
    ? dark ? IMG.logoNavWhite : IMG.logoNavGreen
    : dark ? IMG.logoWhite : IMG.logoGreen;
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img src={src} alt="Saumama Foundation" className={className} />
  );
}
