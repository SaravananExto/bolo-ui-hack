import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-cmp-chat-window-content',
  standalone: true,
  imports: [],
  templateUrl: './chat-window-content.html',
  styleUrl: './chat-window-content.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatWindowContent {
  messages = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    botText: `Hello! How can I help you today? (#${i + 1})`,
    userText: `Hello. (#${i + 1})`,
  }));

  optionsOpen = false;

  toggleOptions() {
    this.optionsOpen = !this.optionsOpen;
  }
}
