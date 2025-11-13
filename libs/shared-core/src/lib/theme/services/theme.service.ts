import { Injectable, signal, Signal } from '@angular/core';

import {
  DEFAULT_THEME_NAME,
  EXOSTEEL,
  GRAPHITE,
  JADEUS,
  ONYX,
  QUANTUM,
  ThemeConfig,
} from '../tokens';
import { applyCssVariables, getSavedTheme, saveTheme } from '../utils';

const THEMES = new Map<string, ThemeConfig>([
  [QUANTUM.name, QUANTUM],
  [GRAPHITE.name, GRAPHITE],
  [EXOSTEEL.name, EXOSTEEL],
  [JADEUS.name, JADEUS],
  [ONYX.name, ONYX],
]);

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private _themeName = signal<string>(getSavedTheme() || DEFAULT_THEME_NAME);
  private _themeConfig = signal<ThemeConfig>(
    THEMES.get(this._themeName()) ?? THEMES.get(DEFAULT_THEME_NAME) ?? QUANTUM,
  );

  init(defaultName?: string) {
    const name = getSavedTheme() || defaultName || DEFAULT_THEME_NAME;
    this.applyTheme(name);
  }

  applyTheme(name: string) {
    if (!THEMES.has(name)) return;
    this._themeName.set(name);
    const config = THEMES.get(name) ?? THEMES.get(DEFAULT_THEME_NAME);
    if (config) {
      this._themeConfig.set(config);
      saveTheme(name);
      applyCssVariables(config.variables, document.documentElement);
    }
  }

  toggleTheme() {
    const keys = Array.from(THEMES.keys());
    const idx = keys.indexOf(this._themeName());
    const next = keys[(idx + 1) % keys.length];
    this.applyTheme(next);
  }

  getThemeSignal(): Signal<ThemeConfig> {
    return this._themeConfig.asReadonly();
  }

  currentThemeName(): string {
    return this._themeName();
  }
}
