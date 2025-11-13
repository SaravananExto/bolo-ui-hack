import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@bolo/shared-core/i18n/pipes';

@Component({
  selector: 'ui-cmp-reset-password',
  standalone: true,
  imports: [NgIf, FormsModule, TranslatePipe],
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResetPasswordComponent {
  emailValue = '';
  showDialog = signal(false);

  @Output() returnToLogin = new EventEmitter<void>();
  @Output() closeAll = new EventEmitter<void>();

  // State for messages and disabling
  status = signal<'idle' | 'success' | 'error'>('idle');

  get isDisabled() {
    return this.status() !== 'idle';
  }

  onReturnToLoginClick(event: Event) {
    event.preventDefault();
    this.returnToLogin.emit();
  }

  onCloseAllClick(event: Event) {
    event.preventDefault();
    this.closeAll.emit();
  }

  onSendResetLink() {
    if (this.emailValue.trim() === 'sterling.hill@gaeaglobal.com') {
      this.status.set('success');
    } else {
      this.status.set('error');
    }
  }

  get message() {
    if (this.status() === 'success') {
      return "We've sent your reset link. If you don't see it right away, please be sure to check your Junk or Spam folder.";
    } else if (this.status() === 'error') {
      return "We couldn't find an account associated with this email. Please sign up or reach out to Customer Support for assistance.";
    }
    return '';
  }
}
