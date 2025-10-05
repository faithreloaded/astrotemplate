export const LOCALES = ['es','en'] as const;
export type Locale = 'es' | 'en';
export const DEFAULT_LANG: Locale = 'es';

export function getLangFromUrl(url: URL): Locale {
  const m = url.pathname.match(/^\/(es|en)(\/|$)/i);
  if (m) return (m[1].toLowerCase()) as Locale;
  return DEFAULT_LANG;
}

export async function loadT(lang: Locale) {
  const mod = await import(`./${lang}.json`);
  const dict = (mod as any).default ?? mod;
  const t = (path: string) => path.split('.').reduce((o: any, k: string) => (o && o[k] !== undefined) ? o[k] : path, dict);
  return t as (path: string) => string;
}


