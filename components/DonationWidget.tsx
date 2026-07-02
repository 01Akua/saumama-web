"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/dictionaries";

const CURRENCIES = {
  USD: { symbol: "$", amounts: [10, 25, 50, 100] },
  EUR: { symbol: "€", amounts: [10, 25, 50, 100] },
  COP: { symbol: "$", amounts: [20000, 50000, 100000, 250000] },
  CLP: { symbol: "$", amounts: [5000, 10000, 25000, 50000] },
} as const;

type Currency = keyof typeof CURRENCIES;

export function DonationWidget({ dict }: { dict: Dictionary }) {
  const [currency, setCurrency] = useState<Currency>("USD");
  const [amount, setAmount] = useState<number>(CURRENCIES.USD.amounts[1]);
  const [donated, setDonated] = useState(false);

  const fmt = (n: number) =>
    `${CURRENCIES[currency].symbol}${n.toLocaleString(currency === "USD" || currency === "EUR" ? "en-US" : "es-CO")}`;

  return (
    <div id="donar" className="rounded-2xl border border-gold-500/40 bg-forest-900 p-6 text-cream-100 shadow-2xl sm:p-8">
      <h3 className="text-sm font-semibold tracking-[0.2em] text-gold-400 uppercase">
        {dict.donation.kicker}
      </h3>

      {/* Selector de moneda */}
      <div className="mt-5 grid grid-cols-4 overflow-hidden rounded-lg border border-cream-100/20 text-sm font-semibold">
        {(Object.keys(CURRENCIES) as Currency[]).map((c) => (
          <button
            key={c}
            onClick={() => {
              setCurrency(c);
              setAmount(CURRENCIES[c].amounts[1]);
              setDonated(false);
            }}
            className={`py-2.5 transition-colors ${
              currency === c ? "bg-gold-500 text-forest-950" : "hover:bg-forest-800"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <p className="mt-5 text-sm leading-relaxed text-cream-100/85">{dict.donation.text}</p>

      {/* Montos sugeridos */}
      <p className="mt-5 text-xs tracking-widest text-cream-100/60 uppercase">{dict.donation.amounts}</p>
      <div className="mt-2 grid grid-cols-4 gap-2">
        {CURRENCIES[currency].amounts.map((a) => (
          <button
            key={a}
            onClick={() => setAmount(a)}
            className={`rounded-md border py-2 text-sm transition-colors ${
              amount === a
                ? "border-gold-500 bg-gold-500/15 text-gold-400"
                : "border-cream-100/20 hover:border-gold-500/60"
            }`}
          >
            {fmt(a)}
          </button>
        ))}
      </div>

      <ul className="mt-6 space-y-3">
        {dict.donation.bullets.map((b) => (
          <li key={b.title} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gold-500/60 text-gold-400">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3 w-3">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="text-sm">
              <strong className="font-semibold">{b.title}</strong>
              <span className="text-cream-100/70"> — {b.text}</span>
            </span>
          </li>
        ))}
      </ul>

      <button
        onClick={() => setDonated(true)}
        className="mt-6 w-full rounded-lg bg-gold-500 py-3.5 font-semibold text-forest-950 transition-colors hover:bg-gold-400"
      >
        {dict.donation.button} · {fmt(amount)} ↗
      </button>

      <p className="mt-3 text-center text-xs text-cream-100/60">
        {donated ? dict.donation.demoNote : dict.donation.redirect}
      </p>
    </div>
  );
}
