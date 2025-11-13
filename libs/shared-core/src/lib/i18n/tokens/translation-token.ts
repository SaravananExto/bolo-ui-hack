import { InjectionToken } from '@angular/core';

export const TRANSLATION_LOCALE = new InjectionToken<string>('TRANSLATION_LOCALE', {
  providedIn: 'root',
  factory: () => 'en',
});
