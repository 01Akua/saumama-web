"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { Dictionary } from "@/lib/dictionaries";

/**
 * Flujo de donación SIMULADO (demo para el cliente).
 * Resumen → datos del donante → pago de prueba → confirmación.
 * Los campos de tarjeta están deshabilitados a propósito: nadie debe
 * ingresar datos reales en un prototipo.
 */
export function DonationModal({
  dict,
  amountLabel,
  onClose,
}: {
  dict: Dictionary;
  amountLabel: string;
  onClose: () => void;
}) {
  const f = dict.donation.flow;
  const [step, setStep] = useState(0); // 0,1,2 pasos · 3 procesando · 4 éxito
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Bloquear scroll + cerrar con Escape
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const pay = () => {
    setStep(3);
    setTimeout(() => setStep(4), 1800);
  };

  // Portal a <body>: el widget vive dentro de contenedores con transform
  // (Reveal), y un ancestro transformado rompe position:fixed.
  return createPortal(
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-forest-950/80 px-4 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
    >
      <div className="modal-in w-full max-w-md overflow-hidden rounded-3xl bg-cream-50 shadow-2xl">
        {/* Banner de simulación */}
        <div className="bg-forest-950 px-5 py-2 text-center text-[11px] font-bold tracking-wider text-cream-100/90">
          {f.demoBanner}
        </div>

        {/* Indicador de pasos */}
        {step < 3 && (
          <div className="flex items-center justify-center gap-2 px-6 pt-6">
            {f.steps.map((label, i) => (
              <div key={label} className="flex items-center gap-2">
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-colors duration-300 ${
                    i <= step ? "bg-forest-900 text-cream-50" : "bg-cream-200 text-forest-800/50"
                  }`}
                >
                  {i + 1}
                </span>
                <span className={`text-xs font-semibold ${i <= step ? "text-forest-900" : "text-forest-800/50"}`}>
                  {label}
                </span>
                {i < f.steps.length - 1 && <span className="h-px w-5 bg-cream-200" />}
              </div>
            ))}
          </div>
        )}

        <div className="p-7">
          {/* Paso 1: resumen */}
          {step === 0 && (
            <div>
              <h3 className="font-display text-2xl font-semibold text-forest-900">{f.summaryTitle}</h3>
              <dl className="mt-5 space-y-3 rounded-2xl border border-cream-200 bg-cream-100 p-5 text-sm">
                <div className="flex justify-between">
                  <dt className="text-forest-800/70">{f.summaryAmount}</dt>
                  <dd className="font-display text-xl font-semibold text-forest-900">{amountLabel}</dd>
                </div>
                <div className="flex justify-between border-t border-cream-200 pt-3">
                  <dt className="text-forest-800/70">{f.summaryDestination}</dt>
                  <dd className="max-w-[55%] text-right font-semibold text-forest-900">
                    {f.summaryDestinationValue}
                  </dd>
                </div>
              </dl>
              <button
                onClick={() => setStep(1)}
                className="mt-6 w-full cursor-pointer rounded-full bg-forest-900 py-3.5 font-semibold text-cream-50 transition-colors hover:bg-forest-800"
              >
                {f.continue} →
              </button>
            </div>
          )}

          {/* Paso 2: datos del donante */}
          {step === 1 && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setStep(2);
              }}
            >
              <h3 className="font-display text-2xl font-semibold text-forest-900">{f.donorTitle}</h3>
              <label className="mt-5 block">
                <span className="text-xs font-semibold tracking-wider text-forest-800/70 uppercase">
                  {f.nameLabel}
                </span>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={f.namePlaceholder}
                  className="mt-1.5 w-full rounded-xl border border-cream-200 bg-white px-4 py-3 text-sm text-forest-950 outline-none focus:border-forest-700"
                />
              </label>
              <label className="mt-4 block">
                <span className="text-xs font-semibold tracking-wider text-forest-800/70 uppercase">
                  {f.emailLabel}
                </span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={f.emailPlaceholder}
                  className="mt-1.5 w-full rounded-xl border border-cream-200 bg-white px-4 py-3 text-sm text-forest-950 outline-none focus:border-forest-700"
                />
                <span className="mt-1.5 block text-xs text-forest-800/60">{f.emailNote}</span>
              </label>
              <div className="mt-6 flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(0)}
                  className="cursor-pointer rounded-full border border-cream-200 px-6 py-3 font-semibold text-forest-800 transition-colors hover:border-forest-800"
                >
                  ← {f.back}
                </button>
                <button
                  type="submit"
                  className="flex-1 cursor-pointer rounded-full bg-forest-900 py-3 font-semibold text-cream-50 transition-colors hover:bg-forest-800"
                >
                  {f.continue} →
                </button>
              </div>
            </form>
          )}

          {/* Paso 3: pago simulado */}
          {step === 2 && (
            <div>
              <h3 className="flex items-center gap-2 font-display text-2xl font-semibold text-forest-900">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5 text-forest-700">
                  <path d="M12 2l7 4v5c0 5-3 8.5-7 11-4-2.5-7-6-7-11V6l7-4z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {f.payTitle}
              </h3>
              <div className="mt-5 rounded-2xl bg-forest-900 p-5 text-cream-50">
                <p className="text-xs tracking-widest text-cream-100/60 uppercase">{f.cardLabel}</p>
                <p className="mt-3 font-mono text-lg tracking-[0.2em]">4242 4242 4242 4242</p>
                <div className="mt-3 flex justify-between font-mono text-sm text-cream-100/80">
                  <span>12/29</span>
                  <span>CVC ···</span>
                </div>
              </div>
              <p className="mt-2 text-center text-xs text-forest-800/60 italic">{f.cardNote}</p>
              <div className="mt-5 flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="cursor-pointer rounded-full border border-cream-200 px-6 py-3 font-semibold text-forest-800 transition-colors hover:border-forest-800"
                >
                  ← {f.back}
                </button>
                <button
                  onClick={pay}
                  className="flex-1 cursor-pointer rounded-full bg-forest-900 py-3 font-semibold text-cream-50 transition-colors hover:bg-forest-800"
                >
                  {f.payButton} · {amountLabel}
                </button>
              </div>
            </div>
          )}

          {/* Procesando */}
          {step === 3 && (
            <div className="flex flex-col items-center py-10">
              <span className="spinner h-12 w-12 rounded-full border-4 border-cream-200 border-t-forest-800" />
              <p className="mt-5 font-semibold text-forest-900">{f.processing}</p>
            </div>
          )}

          {/* Éxito */}
          {step === 4 && (
            <div className="flex flex-col items-center py-4 text-center">
              <svg viewBox="0 0 64 64" className="h-20 w-20">
                <circle cx="32" cy="32" r="29" fill="none" stroke="#496640" strokeWidth="3" className="check-circle" />
                <path d="M20 33l9 9 16-18" fill="none" stroke="#2c493d" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="check-mark" />
              </svg>
              <h3 className="mt-4 font-display text-2xl font-semibold text-forest-900">{f.successTitle}</h3>
              <p className="mt-3 text-sm leading-relaxed text-forest-800/80">
                {f.successText} <strong className="text-forest-900">{email || "tu correo"}</strong>.
              </p>
              <p className="mt-3 rounded-xl bg-cream-100 px-4 py-3 text-sm text-forest-800/80">
                {f.successImpact}
              </p>
              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => setStep(0)}
                  className="cursor-pointer rounded-full border border-cream-200 px-6 py-3 text-sm font-semibold text-forest-800 transition-colors hover:border-forest-800"
                >
                  {f.newDonation}
                </button>
                <button
                  onClick={onClose}
                  className="cursor-pointer rounded-full bg-forest-900 px-8 py-3 text-sm font-semibold text-cream-50 transition-colors hover:bg-forest-800"
                >
                  {f.close}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
