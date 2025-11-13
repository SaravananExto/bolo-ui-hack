import { inject, Injectable, signal, Signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';

import { MockTranslationApiService } from '../mocks/translation.mock-api';
import { TRANSLATION_LOCALE } from '../tokens';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private api = inject(MockTranslationApiService);
  private defaultLocale = inject(TRANSLATION_LOCALE);

  // signals: reactive, Angular 20 friendly
  private _locale = signal<string>(this.defaultLocale);
  readonly locale: Signal<string> = this._locale;

  // current translations for the active locale as a Map
  private _current = signal<Map<string, string>>(new Map());
  readonly translations = this._current;

  // map-based cache: Map<locale, Map<k,v>>
  private cache = new Map<string, Map<string, string>>();

  constructor() {
    // eager load default locale
    void this.loadTranslations(this._locale());
  }

  async loadTranslations(locale: string): Promise<Map<string, string>> {
    if (this.cache.has(locale)) {
      const map = this.cache.get(locale);
      if (map) {
        this._current.set(map);
        this._locale.set(locale);
        return map;
      }
      return new Map();
    }

    const resp = await firstValueFrom(this.api.getTranslations(locale));
    const translations = new Map<string, string>(Object.entries(resp ?? {}));
    this.cache.set(locale, translations);
    this._current.set(translations);
    this._locale.set(locale);
    return translations;
  }

  // synchronous lookup (safe — uses current signal snapshot)
  translate(key: string, fallback = ''): string {
    console.log('TranslationService translate called with key:', key);
    const map = this._current();
    const value = map.has(key) ? (map.get(key) ?? fallback) || key : fallback || key;
    // Debug log for translation lookup
    console.log(`[i18n] translate: key="${key}", value="${value}", locale="${this._locale()}"`, {
      map,
    });
    return value;
  }

  // synchronous helper used by templates/services
  instant(key: string, fallback = ''): string {
    return this.translate(key, fallback);
  }

  async switchLocale(locale: string): Promise<Map<string, string>> {
    return this.loadTranslations(locale);
  }

  get currentLocale(): string {
    return this._locale();
  }
}
