import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'ui-cmp-not-found',
  standalone: true,
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFound {
  // Signal-based output for Go Home button (Angular 20)
  goHome = output<void>();

  // Optional: message input for customization
  message = input<string>('Oops! Page not found.');

  onGoHome() {
    this.goHome.emit();
  }
}
