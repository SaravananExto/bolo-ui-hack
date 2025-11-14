import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@bolo/shared-core/i18n/pipes';
import { MenuModule } from 'primeng/menu';
import { PopoverModule } from 'primeng/popover';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'ui-cmp-secondary-sidebar',
  standalone: true,
  imports: [MenuModule, FormsModule, TranslatePipe, PopoverModule, SelectModule],
  templateUrl: './secondary-sidebar.html',
  styleUrl: './secondary-sidebar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondarySidebar {
  companies = [
    {
      label: 'Exto',
      value: 'exto',
    },
    {
      label: 'Bolo',
      value: 'bolo',
    },
  ];

  languages = [
    {
      label: 'English',
      value: 'en',
    },
  ];

  dateFormats = [
    {
      label: ' MM/DD/YYYY',
      value: 'mm-dd-yyyy',
    },
  ];

  themeColors = [
    {
      label: 'Graphite',
      value: 'graphite',
    },
  ];

  accentColors = [
    {
      label: 'Blue',
      value: 'blue',
    },
  ];

  selectedCompany = 'bolo';
  selectedLanguage = 'en';
  selectedDateFormat = 'mm-dd-yyyy';
  selectedThemeColor: any;
  selectedAccentColor: any;

  items = [
    { label: 'secondary.menu.newConversation', icon: 'new-conversation-icon.svg' },
    { label: 'secondary.menu.configuration', icon: 'configuration-icon.svg' },
    { label: 'secondary.menu.datasets', icon: 'datasets-icon.svg' },
    { label: 'secondary.menu.documentLearning', icon: 'document-learning-icon.svg' },
    { label: 'secondary.menu.documentManager', icon: 'document-manager-icon.svg' },
    { label: 'secondary.menu.jobStatus', icon: 'job-status-icon.svg' },
  ];
}
