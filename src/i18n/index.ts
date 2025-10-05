export const LOCALES = ['es','en'] as const;
export type Locale = 'es' | 'en';
export const DEFAULT_LANG: Locale = 'es';

export function getLangFromUrl(url: URL): Locale {
  const m = url.pathname.match(/^\/(es|en)(\/|$)/i);
  if (m) return (m[1].toLowerCase()) as Locale;
  return DEFAULT_LANG;
}

// Importaciones estáticas para evitar problemas de build
import esTranslations from './es.json';
import enTranslations from './en.json';

const translations = {
  es: esTranslations,
  en: enTranslations
};

export async function loadT(lang: Locale) {
  const dict = translations[lang];
  const t = (path: string) => path.split('.').reduce((o: any, k: string) => (o && o[k] !== undefined) ? o[k] : path, dict);
  return t as (path: string) => string;
}


