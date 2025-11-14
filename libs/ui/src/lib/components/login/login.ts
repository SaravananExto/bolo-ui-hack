import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@bolo/shared-core/i18n/pipes';
import { TranslationService } from '@bolo/shared-core/i18n/services';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

import { Button as UiElmButton } from '../../elements/button/button';
import { ResetPasswordComponent } from '../reset-password/reset-password';

@Component({
  selector: 'ui-cmp-login',
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    ResetPasswordComponent,
    UiElmButton,
    TranslatePipe,
    NgClass,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  langOptions = [
    { label: 'English', value: 'en' },
    { label: 'French', value: 'fr' },
    { label: 'Spanish', value: 'es' },
    { label: 'Kannada', value: 'kn' },
    { label: 'Tamil', value: 'ta' },
    { label: 'Telugu', value: 'te' },
  ];
  selectedLang = signal('en');
  showLangDropdown = signal(false);

  private translation = inject(TranslationService);
  username = input<string>('');
  password = input<string>('');
  showDialog = signal(false);
  showPassword = signal(false);
  showReset = signal(false);

  usernameValue = '';
  passwordValue = '';
  usernameError = signal('');
  passwordError = signal('');

  togglePassword() {
    this.showPassword.set(!this.showPassword());
  }

  openReset() {
    this.showReset.set(true);
  }

  closeReset() {
    this.showReset.set(false);
  }

  closeAllDialogs() {
    this.showDialog.set(false);
    this.showReset.set(false);
  }

  login() {
    this.usernameError.set('');
    this.passwordError.set('');
    if (this.usernameValue.trim() !== 'sterling.hill@gaeaglobal.com') {
      this.usernameError.set('Invalid username');
      return;
    }
    if (this.passwordValue !== 'Bolo@123') {
      this.passwordError.set('Wrong password');
      return;
    }
    // Success
    console.log('Login successful!');
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

  switchLocale(locale: string) {
    this.selectedLang.set(locale);
    void this.translation.switchLocale(locale);
  }
}
