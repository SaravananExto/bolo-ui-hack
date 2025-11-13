import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'ui-cmp-primary-sidebar',
  standalone: true,
  imports: [MenuModule],
  templateUrl: './primary-sidebar.html',
  styleUrl: './primary-sidebar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrimarySidebar {
  collapsed = signal(true);

  items: MenuItem[] = [
    {
      items: [
        {
          label: 'Rename',
          icon: 'pen-icon.svg',
        },
        {
          label: 'Pin',
          icon: 'pin-icon.svg',
        },
        {
          label: 'Delete',
          icon: 'trash-icon.svg',
        },
      ],
    },
  ];

  toggle() {
    this.collapsed.set(!this.collapsed());
  }
}
