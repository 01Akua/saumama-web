"use client";

import Anthropic from "@anthropic-ai/sdk";

/**
 * Traducción del panel administrativo — escalera de métodos:
 *
 * 1. Traductor integrado del navegador (Chrome 138+): GRATIS, local,
 *    sin clave y sin internet. Método por defecto del prototipo.
 * 2. MyMemory (api.mymemory.translated.net): GRATIS, sin clave
 *    (límite diario razonable). Respaldo si el navegador no soporta 1.
 * 3. Claude (opcional): solo si el admin guardó una clave API — mejor
 *    calidad editorial. En producción vivirá en el servidor del CMS.
 */

export const API_KEY_STORAGE = "saumama-anthropic-key";

export function getStoredApiKey(): string {
  try {
    return localStorage.getItem(API_KEY_STORAGE) ?? "";
  } catch {
    return "";
  }
}

export function setStoredApiKey(key: string) {
  try {
    if (key) localStorage.setItem(API_KEY_STORAGE, key);
    else localStorage.removeItem(API_KEY_STORAGE);
  } catch {}
}

type Lang = "es" | "en";
export type TranslateResult = {
  fields: Record<string, string>;
  method: "navegador" | "MyMemory" | "IA (Claude)";
};

// ── 1. Traductor integrado del navegador (Chrome) ─────────────────
type BrowserTranslator = { translate(text: string): Promise<string> };
type TranslatorAPI = {
  create(opts: { sourceLanguage: string; targetLanguage: string }): Promise<BrowserTranslator>;
};

async function translateWithBrowser(
  fields: Record<string, string>,
  from: Lang,
  to: Lang
): Promise<Record<string, string> | null> {
  const Translator = (globalThis as { Translator?: TranslatorAPI }).Translator;
  if (!Translator) return null;
  try {
    const t = await Translator.create({ sourceLanguage: from, targetLanguage: to });
    const out: Record<string, string> = {};
    for (const [k, v] of Object.entries(fields)) {
      out[k] = v.trim() ? await t.translate(v) : v;
    }
    return out;
  } catch {
    return null; // modelo no disponible/descarga rechazada → siguiente método
  }
}

// ── 2. MyMemory (gratis, sin clave) ────────────────────────────────
async function translateWithMyMemory(
  fields: Record<string, string>,
  from: Lang,
  to: Lang
): Promise<Record<string, string>> {
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(fields)) {
    if (!v.trim()) {
      out[k] = v;
      continue;
    }
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(v)}&langpair=${from}|${to}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`MyMemory ${res.status}`);
    const data = (await res.json()) as { responseData?: { translatedText?: string } };
    const text = data.responseData?.translatedText;
    if (!text) throw new Error("MyMemory sin resultado");
    out[k] = text;
  }
  return out;
}

// ── 3. Claude (opcional, con clave) ────────────────────────────────
async function translateWithClaude(
  fields: Record<string, string>,
  from: Lang,
  to: Lang,
  apiKey: string
): Promise<Record<string, string>> {
  const client = new Anthropic({ apiKey, dangerouslyAllowBrowser: true });
  const keys = Object.keys(fields);
  const schema = {
    type: "object" as const,
    properties: Object.fromEntries(keys.map((k) => [k, { type: "string" as const }])),
    required: keys,
    additionalProperties: false as const,
  };
  const langName = { es: "español", en: "inglés" };
  const response = await client.messages.create({
    model: "claude-opus-4-8",
    max_tokens: 4096,
    system:
      "Eres el traductor editorial de Saumama Foundation, una fundación de conservación ambiental, " +
      "soluciones basadas en la naturaleza y desarrollo comunitario en América Latina (Sierra Nevada, " +
      "comunidades Arhuaca y Kogui, mercados de carbono). Traduces textos de marketing de su sitio web. " +
      "Reglas: conserva el tono cálido, directo y profesional; adapta las expresiones con naturalidad; " +
      "mantén nombres propios (Saumama, Samauma, Nabusimake, Matavén) y términos técnicos establecidos " +
      "(REDD+, Scope 3, ODS↔SDGs, CPLI↔FPIC). Responde únicamente con el JSON pedido.",
    messages: [
      {
        role: "user",
        content:
          `Traduce cada valor del siguiente JSON de ${langName[from]} a ${langName[to]}. ` +
          `Devuelve un JSON con exactamente las mismas claves:\n\n${JSON.stringify(fields, null, 2)}`,
      },
    ],
    output_config: { format: { type: "json_schema", schema } },
  });
  const block = response.content.find((b) => b.type === "text");
  if (!block || block.type !== "text") throw new Error("Respuesta vacía");
  return JSON.parse(block.text) as Record<string, string>;
}

// ── Escalera: gratis primero, IA solo si hay clave ─────────────────
export async function translateFields(
  fields: Record<string, string>,
  from: Lang,
  to: Lang,
  apiKey?: string
): Promise<TranslateResult> {
  // Clave configurada → mejor calidad
  if (apiKey) {
    return { fields: await translateWithClaude(fields, from, to, apiKey), method: "IA (Claude)" };
  }
  // Gratis y local
  const browser = await translateWithBrowser(fields, from, to);
  if (browser) return { fields: browser, method: "navegador" };
  // Gratis por red, sin clave
  return { fields: await translateWithMyMemory(fields, from, to), method: "MyMemory" };
}
