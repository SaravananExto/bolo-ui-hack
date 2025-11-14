import { ChangeDetectionStrategy, Component, EventEmitter, Output, signal } from '@angular/core';
import { TranslatePipe } from '@bolo/shared-core/i18n/pipes';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'ui-cmp-primary-sidebar',
  standalone: true,
  imports: [MenuModule, TranslatePipe],
  templateUrl: './primary-sidebar.html',
  styleUrl: './primary-sidebar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrimarySidebar {
  collapsed = signal(true);

  @Output() historyClicked = new EventEmitter<string>();

  items: MenuItem[] = [
    {
      items: [
        {
          label: 'sidebar.menu.rename',
          icon: 'pen-icon.svg',
        },
        {
          label: 'sidebar.menu.pin',
          icon: 'pin-icon.svg',
        },
        {
          label: 'sidebar.menu.delete',
          icon: 'trash-icon.svg',
        },
      ],
    },
  ];

  toggle() {
    this.collapsed.set(!this.collapsed());
  }

  onHistoryClick() {
    this.historyClicked.emit('123567');
  }
}
