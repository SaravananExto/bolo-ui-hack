import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

import * as locales from '../locales';

const LOCALES: Map<string, Record<string, string>> = new Map(Object.entries(locales));

@Injectable({ providedIn: 'root' })
export class MockTranslationApiService {
  getTranslations(locale: string) {
    const data = LOCALES.get(locale) ?? LOCALES.get('en');
    return of(data).pipe(delay(200));
  }
}
