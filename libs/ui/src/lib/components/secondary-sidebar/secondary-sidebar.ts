import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@bolo/shared-core/i18n/pipes';
import { TranslationService } from '@bolo/shared-core/i18n/services';
import { ThemeService } from '@bolo/shared-core/theme/services';
import {
  EXOSTEEL,
  GRAPHITE,
  JADEUS,
  ONYX,
  QUANTUM,
} from '@bolo/shared-core/theme/tokens/typography.token';
import { MenuModule } from 'primeng/menu';
import { PopoverModule } from 'primeng/popover';
import { SelectModule } from 'primeng/select';
import { UserProfile } from '../user-profile/user-profile';

@Component({
  selector: 'ui-cmp-secondary-sidebar',
  standalone: true,
  imports: [MenuModule, FormsModule, TranslatePipe, PopoverModule, SelectModule, UserProfile],
  templateUrl: './secondary-sidebar.html',
  styleUrl: './secondary-sidebar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondarySidebar {
  themeService = inject(ThemeService);
  private translation = inject(TranslationService);

  showUserProfile = false;

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
    {
      label: 'French',
      value: 'fr',
    },
    {
      label: 'Spanish',
      value: 'es',
    },
    {
      label: 'Kannada',
      value: 'kn',
    },
    {
      label: 'Tamil',
      value: 'ta',
    },
    {
      label: 'Telugu',
      value: 'te',
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
      value: GRAPHITE.name,
    },
    {
      label: 'Exosteel',
      value: EXOSTEEL.name,
    },
    {
      label: 'Jadeus',
      value: JADEUS.name,
    },
    {
      label: 'Onyx',
      value: ONYX.name,
    },
    {
      label: 'Quantum',
      value: QUANTUM.name,
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
  selectedThemeColor: string | undefined;
  selectedAccentColor: string | undefined;

  items = [
    { label: 'secondary.menu.newConversation', icon: 'new-conversation-icon.svg' },
    { label: 'secondary.menu.configuration', icon: 'configuration-icon.svg' },
    { label: 'secondary.menu.datasets', icon: 'datasets-icon.svg' },
    { label: 'secondary.menu.documentLearning', icon: 'document-learning-icon.svg' },
    { label: 'secondary.menu.documentManager', icon: 'document-manager-icon.svg' },
    { label: 'secondary.menu.jobStatus', icon: 'job-status-icon.svg' },
  ];

  ngOnInit() {
    this.selectedLanguage = this.translation.currentLocale;
  }

  changeTheme(name: string) {
    this.themeService.applyTheme(name);
  }

  switchLocale(locale: string) {
    void this.translation.switchLocale(locale);
  }

  getLangKey(lng: string): string {
    switch (lng) {
      case 'en':
        return 'english';
      case 'fr':
        return 'french';
      case 'es':
        return 'spanish';
      case 'kn':
        return 'kannada';
      case 'ta':
        return 'tamil';
      case 'te':
        return 'telugu';
      default:
        return lng;
    }
  }

  onUserProfileClick() {
    this.showUserProfile = !this.showUserProfile;
  }
}
