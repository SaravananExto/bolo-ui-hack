import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { TranslationService } from '@bolo/core/i18n/services';
import { TranslatePipe } from '@bolo/shared/i18n/pipes';

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
  title = input<string>('');
  subtitle = input<string>('');
  buttonText = input<string>('');

  private translation = inject(TranslationService);

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

  switchLocale(locale: string) {
    void this.translation.switchLocale(locale);
  }
}
