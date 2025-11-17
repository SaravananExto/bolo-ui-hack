import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@bolo/shared-core/i18n/pipes/translate.pipe';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TabsModule } from 'primeng/tabs';

@Component({
  selector: 'ui-cmp-user-profile',
  standalone: true,
  imports: [TabsModule, SelectModule, InputTextModule, FormsModule, TranslatePipe],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.scss',
})
export class UserProfile {
  value = '';
}
