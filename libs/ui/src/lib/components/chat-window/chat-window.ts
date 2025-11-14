import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { TranslatePipe } from '@bolo/shared-core/i18n/pipes';
import { ThemeService } from '@bolo/shared-core/theme/services';

import { ChatWindowContent } from '../chat-window-content/chat-window-content';
import { ChatWindowSearch } from '../chat-window-search/chat-window-search';

@Component({
  selector: 'ui-cmp-chat-window',
  standalone: true,
  imports: [ChatWindowContent, ChatWindowSearch, TranslatePipe],
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
