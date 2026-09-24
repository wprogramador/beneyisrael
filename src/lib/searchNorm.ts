// Normalización para búsqueda de texto bíblico (español y hebreo).
// Módulo puro: seguro para importar en servidor y en cliente.

// Marcas hebreas: cantillación (0591–05AF), puntos vocálicos (05B0–05BD),
// 05BF, 05C1–05C2, 05C4–05C5, 05C7. Se eliminan para comparar "plano".
const HEBREW_MARKS = /[\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7]/g
// Puntuación hebrea: maqaf (־), paseq (׀), sof pasuq (׃), nun hafujá (׆).
const HEBREW_PUNCT = /[\u05BE\u05C0\u05C3\u05C6]/g
// Letras finales → forma regular (para que "מלך" coincida con "מלכ").
const FINAL_FORMS: Record<string, string> = {
  '\u05DA': '\u05DB', // ך → כ
  '\u05DD': '\u05DE', // ם → מ
  '\u05DF': '\u05E0', // ן → נ
  '\u05E3': '\u05E4', // ף → פ
  '\u05E5': '\u05E6', // ץ → צ
}

/** Normaliza un texto para búsqueda: sin tildes (es), sin vocales ni
 *  cantillación (he), sin puntuación hebrea, finales unificadas, minúsculas. */
export function normalizeForSearch(s: string): string {
  let out = s
  out = out.replace(HEBREW_MARKS, '').replace(HEBREW_PUNCT, ' ')
  for (const [final, regular] of Object.entries(FINAL_FORMS)) {
    out = out.split(final).join(regular)
  }
  // Tildes y diacríticos latinos: NFD separa la letra de la marca y se elimina.
  out = out.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  return out.toLowerCase().trim()
}
