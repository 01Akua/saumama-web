export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      {/* Árbol estilizado, como el isotipo del mockup */}
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-full border ${
          dark ? "border-gold-500/60 text-gold-500" : "border-forest-800/40 text-forest-800"
        }`}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
          <path d="M12 21v-8m0 0c-3-1-5-3.5-5-7 0-1 .2-2 .5-2.8C9 4.5 10.5 6 12 6s3-1.5 4.5-2.8c.3.8.5 1.8.5 2.8 0 3.5-2 6-5 7z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className={`leading-tight ${dark ? "text-cream-50" : "text-forest-900"}`}>
        <span className="block font-display text-lg font-semibold tracking-[0.18em]">SAUMAMA</span>
        <span className={`block text-[9px] tracking-[0.42em] ${dark ? "text-gold-400" : "text-gold-600"}`}>
          FOUNDATION
        </span>
      </span>
    </span>
  );
}
