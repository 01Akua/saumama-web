"use client";

import Anthropic from "@anthropic-ai/sdk";

/**
 * Traducción con IA (Claude) para el panel administrativo.
 *
 * En este prototipo estático la llamada sale directo del navegador con la
 * clave que el administrador guarda en SU navegador (localStorage) — nunca
 * se sube al repositorio ni al servidor. En producción, esta llamada vivirá
 * en el backend del CMS y la clave será del servidor.
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

/**
 * Traduce un mapa { ruta: texto } de un idioma al otro conservando el tono
 * editorial de la fundación. Devuelve el mapa con las mismas claves.
 */
export async function translateFields(
  fields: Record<string, string>,
  from: "es" | "en",
  to: "es" | "en",
  apiKey: string
): Promise<Record<string, string>> {
  const client = new Anthropic({
    apiKey,
    dangerouslyAllowBrowser: true, // clave del propio admin, almacenada solo en su navegador
  });

  // Esquema dinámico: mismas claves de entrada, todas requeridas
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
      "Reglas: conserva el tono cálido, directo y profesional; adapta las expresiones con naturalidad " +
      "(no traducción literal); mantén nombres propios (Saumama, Samauma, Nabusimake, Matavén), " +
      "términos técnicos establecidos (REDD+, Scope 3, ODS↔SDGs, CPLI↔FPIC) y el formato del texto. " +
      "Responde únicamente con el JSON pedido.",
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
  if (!block || block.type !== "text") throw new Error("Respuesta vacía del traductor");
  return JSON.parse(block.text) as Record<string, string>;
}
