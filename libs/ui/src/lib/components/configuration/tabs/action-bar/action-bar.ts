import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '@bolo/shared-core/i18n/pipes/translate.pipe';

@Component({
  selector: 'ui-cmp-action-bar',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './action-bar.html',
  styleUrl: './action-bar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionBar {}
