export function formatKey(key: string): string {
  return key.trim().toLowerCase().replace(/\s+/g, '.');
}

export function fallbackLocale(locales: string[], preferred: string): string {
  return locales.includes(preferred) ? preferred : locales[0];
}
