import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '@bolo/shared-core/i18n/pipes';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'ui-cmp-chat-window-greeting',
  standalone: true,
  imports: [MenuModule, TranslatePipe],
  templateUrl: './chat-window-greeting.html',
  styleUrl: './chat-window-greeting.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatWindowGreeting {}
