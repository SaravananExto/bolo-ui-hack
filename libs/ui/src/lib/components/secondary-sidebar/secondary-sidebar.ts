import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'ui-cmp-secondary-sidebar',
  standalone: true,
  imports: [MenuModule, FormsModule],
  templateUrl: './secondary-sidebar.html',
  styleUrl: './secondary-sidebar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondarySidebar {
  items = [
    {
      label: 'New Conversation',
      icon: 'new-conversation-icon.svg',
    },
    {
      label: 'Configuration',
      icon: 'configuration-icon.svg',
    },
    {
      label: 'Datasets',
      icon: 'datasets-icon.svg',
    },
    {
      label: 'Document Learning',
      icon: 'document-learning-icon.svg',
    },
    {
      label: 'Document Manager',
      icon: 'document-manager-icon.svg',
    },
    {
      label: 'Job Status',
      icon: 'job-status-icon.svg',
    },
  ];
}
