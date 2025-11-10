import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { Button } from '../../elements/button/button';

/**
 * Responsive, device-compatible hero banner component using TailwindCSS.
 * Accepts title, subtitle, and buttonText as signal-based inputs for flexible reuse.
 */
@Component({
  selector: 'ui-cmp-hero-banner',
  standalone: true,
  imports: [Button],
  templateUrl: './hero-banner.html',
  styleUrl: './hero-banner.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroBanner {
  title = input<string>('');
  subtitle = input<string>('');
  buttonText = input<string>('');
}
