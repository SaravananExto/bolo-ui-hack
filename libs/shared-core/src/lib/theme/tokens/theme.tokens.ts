import { InjectionToken } from '@angular/core';

export const ACTIVE_THEME = new InjectionToken<string>('ACTIVE_THEME');
export interface ThemeConfig {
  name: string;
  variables: Record<string, string>;
}
export const DEFAULT_THEME_NAME = 'QUANTUM';
