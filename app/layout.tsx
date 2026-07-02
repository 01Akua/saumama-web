import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SAUMAMA Foundation",
  description:
    "Conectamos naturaleza, comunidades e inversión sostenible en América Latina.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${jakarta.variable} h-full antialiased`}>
      <head>
        {/* Acorta el handshake con el CDN de imágenes del prototipo */}
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body className="grain flex min-h-full flex-col">{children}</body>
    </html>
  );
}
