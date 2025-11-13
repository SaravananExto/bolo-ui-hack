import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'ui-cmp-chat-window-greeting',
  standalone: true,
  imports: [MenuModule],
  templateUrl: './chat-window-greeting.html',
  styleUrl: './chat-window-greeting.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatWindowGreeting {}
