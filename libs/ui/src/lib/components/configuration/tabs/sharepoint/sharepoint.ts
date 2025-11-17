import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '@bolo/shared-core/i18n/pipes/translate.pipe';
import { ButtonModule } from 'primeng/button';

import { ActionBar } from '../action-bar/action-bar';

@Component({
  selector: 'ui-cmp-sharepoint-tab',
  standalone: true,
  imports: [ButtonModule, TranslatePipe, ActionBar],
  templateUrl: './sharepoint.html',
  styleUrl: './sharepoint.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharepointTab {}
