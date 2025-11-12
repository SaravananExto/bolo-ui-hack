import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TranslatePipe } from '@bolo/shared/i18n/pipes';

/**
 * Standalone, accessible, and reusable button component.
 * Accepts text and ariaLabel as signal-based inputs.
 */
@Component({
  selector: 'ui-elm-button',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './button.html',
  styleUrl: './button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Button {
  text = input<string>('');
  ariaLabel = input<string>('Button');
}
