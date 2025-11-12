/* eslint-disable @nx/enforce-module-boundaries */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
// JSON imports (ensure resolveJsonModule in tsconfig.base.json)
import * as locales from '@bolo/shared/i18n/locales';

const LOCALES: Map<string, Record<string, string>> = new Map(Object.entries(locales));

@Injectable({ providedIn: 'root' })
export class MockTranslationApiService {
  getTranslations(locale: string) {
    const data = LOCALES.get(locale) ?? LOCALES.get('en');
    return of(data).pipe(delay(200));
  }
}
