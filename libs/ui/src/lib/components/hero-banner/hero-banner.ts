import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { TranslatePipe } from '@bolo/shared-core/i18n/pipes';
import { TranslationService } from '@bolo/shared-core/i18n/services';
import { ThemeService } from '@bolo/shared-core/theme/services/theme.service';
import {
  EXOSTEEL,
  GRAPHITE,
  JADEUS,
  ONYX,
  QUANTUM,
} from '@bolo/shared-core/theme/tokens/typography.token';

import { Button } from '../../elements/button/button';

/**
 * Responsive, device-compatible hero banner component using TailwindCSS.
 * Accepts title, subtitle, and buttonText as signal-based inputs for flexible reuse.
 */
@Component({
  selector: 'ui-cmp-hero-banner',
  standalone: true,
  imports: [Button, TranslatePipe],
  templateUrl: './hero-banner.html',
  styleUrl: './hero-banner.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroBanner {
  title = input<string>('hero.title');
  subtitle = input<string>('hero.subtitle');

  themeService = inject(ThemeService);

  // Theme names from ThemeConfig tokens
  themeNames = [QUANTUM.name, GRAPHITE.name, EXOSTEEL.name, JADEUS.name, ONYX.name];

  currentTheme = this.themeService.currentThemeName.bind(this.themeService);

  changeTheme(target: EventTarget | null) {
    const name =
      target && typeof target === 'object' && 'value' in target
        ? (target as HTMLSelectElement).value
        : null;
    if (name) {
      this.themeService.applyTheme(name);
    }
  }

  private translation = inject(TranslationService);

  switchLocale(locale: string) {
    void this.translation.switchLocale(locale);
  }

  getLangKey(lng: string): string {
    switch (lng) {
      case 'en':
        return 'english';
      case 'fr':
        return 'french';
      case 'es':
        return 'spanish';
      case 'kn':
        return 'kannada';
      case 'ta':
        return 'tamil';
      case 'te':
        return 'telugu';
      default:
        return lng;
    }
  }
}
