import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TranslatePipe } from '@bolo/shared-core/i18n/pipes';
import { ButtonModule } from 'primeng/button';

/**
 * Standalone, accessible, and reusable button component.
 * Accepts text and ariaLabel as signal-based inputs.
 */
@Component({
  selector: 'ui-elm-button',
  standalone: true,
  imports: [TranslatePipe, ButtonModule],
  templateUrl: './button.html',
  styleUrl: './button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Button {
  text = input<string>('');
  ariaLabel = input<string>('Button');
}
