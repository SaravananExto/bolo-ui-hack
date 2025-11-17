import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  signal,
} from '@angular/core';
import { TranslatePipe } from '@bolo/shared-core/i18n/pipes/translate.pipe';
import { ButtonModule } from 'primeng/button';
import { TabsModule } from 'primeng/tabs';

import { GeneralTab } from './tabs/general/general';
import { GoogleDriveTab } from './tabs/google-drive/google-drive';
import { SharepointTab } from './tabs/sharepoint/sharepoint';

@Component({
  selector: 'ui-cmp-configuration-panel',
  standalone: true,
  imports: [TabsModule, ButtonModule, TranslatePipe, GeneralTab, GoogleDriveTab, SharepointTab],
  templateUrl: './configuration.html',
  styleUrl: './configuration.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Configuration {
  @Input() compact?: boolean;
  @Output() saved = new EventEmitter<void>();

  activeTab = signal<number>(0);
}
