import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '@bolo/shared-core/i18n/pipes';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'ui-cmp-chat-window-search',
  standalone: true,
  imports: [MenuModule, TranslatePipe],
  templateUrl: './chat-window-search.html',
  styleUrl: './chat-window-search.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatWindowSearch {
  items = [
    { label: 'chat.menu.uploadFile', icon: 'upload-file-icon.svg' },
    { label: 'chat.menu.uploadImage', icon: 'image-icon.svg' },
    { label: 'chat.menu.uploadDrive', icon: 'drive-icon.svg' },
    { label: 'chat.menu.connectOneDrive', icon: 'connect-icon.svg' },
    { label: 'chat.menu.connectGoogleDrive', icon: 'connect-icon.svg' },
  ];
}
