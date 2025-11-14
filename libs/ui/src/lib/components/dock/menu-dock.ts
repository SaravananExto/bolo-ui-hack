import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Dock } from 'primeng/dock';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'ui-cmp-menu-dock',
  imports: [Dock, TooltipModule],
  templateUrl: './menu-dock.html',
  styleUrl: './menu-dock.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuDock {
  navigateTo = output<string>();

  position: 'left' | 'right' | 'top' | 'bottom' = 'bottom';

  items: MenuItem[] = [
    {
      label: 'New Conversation',
      icon: 'assets/icons/new-conversation-icon.svg',
      command: event => {
        this.navigateTo.emit('chat');
      },
    },
    {
      label: 'Configuration',
      icon: 'assets/icons/configuration-icon.svg',
    },
    {
      label: 'Datasets',
      icon: 'assets/icons/datasets-icon.svg',
      command: () => {
        this.navigateTo.emit('chat/datasets');
      },
    },
    {
      label: 'Jobs',
      icon: 'assets/icons/job-status-icon.svg',
    },
    {
      label: 'Document Learning',
      icon: 'assets/icons/document-learning-icon.svg',
      command: () => {
        this.navigateTo.emit('chat/document-learning');
      },
    },
    {
      label: 'Document Manager',
      icon: 'assets/icons/document-manager-icon.svg',
    },
  ];
}
