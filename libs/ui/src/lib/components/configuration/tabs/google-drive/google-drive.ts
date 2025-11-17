import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '@bolo/shared-core/i18n/pipes/translate.pipe';
import { ButtonModule } from 'primeng/button';

import { ActionBar } from '../action-bar/action-bar';

@Component({
  selector: 'ui-cmp-google-drive-tab',
  standalone: true,
  imports: [ButtonModule, TranslatePipe, ActionBar],
  templateUrl: './google-drive.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoogleDriveTab {}
