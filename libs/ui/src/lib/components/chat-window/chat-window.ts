import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ThemeService } from '@bolo/shared-core/theme/services';

@Component({
  selector: 'ui-cmp-chat-window',
  standalone: true,
  templateUrl: './chat-window.html',
  styleUrl: './chat-window.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatWindow {
  themeService = inject(ThemeService);
  themeName = signal(this.themeService.currentThemeName());

  setTheme(target: EventTarget | null) {
    const name =
      target && typeof target === 'object' && 'value' in target
        ? (target as HTMLSelectElement).value
        : null;
    if (name) {
      this.themeService.applyTheme(name);
      this.themeName.set(name);
    }
  }
}
