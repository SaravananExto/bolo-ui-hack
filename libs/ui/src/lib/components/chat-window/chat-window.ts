import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-cmp-chat-window',
  standalone: true,
  templateUrl: './chat-window.html',
  styleUrl: './chat-window.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatWindow {
  messages = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    botText: `Hello! How can I help you today? (#${i + 1})`,
    userText: `Hello. (#${i + 1})`,
  }));
}
