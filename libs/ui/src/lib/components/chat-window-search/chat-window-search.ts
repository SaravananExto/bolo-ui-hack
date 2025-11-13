import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'ui-cmp-chat-window-search',
  standalone: true,
  imports: [MenuModule],
  templateUrl: './chat-window-search.html',
  styleUrl: './chat-window-search.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatWindowSearch {
  items = [
    {
      label: 'Upload a file',
      icon: 'upload-file-icon.svg',
    },
    {
      label: 'Upload an image',
      icon: 'image-icon.svg',
    },
    {
      label: 'Upload to bolo Drive',
      icon: 'drive-icon.svg',
    },
    {
      label: 'Connect Microsoft OneDrive',
      icon: 'connect-icon.svg',
    },
    {
      label: 'Connect Google Drive',
      icon: 'connect-icon.svg',
    },
  ];
}
