import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SmoothScroll } from "@/components/SmoothScroll";
import { getDictionary, locales, type Locale } from "@/lib/dictionaries";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = getDictionary(lang);
  return {
    title: "SAUMAMA Foundation",
    description: dict.hero.subtitle,
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = getDictionary(lang);
  return (
    <>
      <SmoothScroll />
      <Header lang={lang} dict={dict} />
      <main className="flex-1">{children}</main>
      <Footer lang={lang} dict={dict} />
    </>
  );
}
