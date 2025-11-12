import { Pipe, PipeTransform, inject } from '@angular/core';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { TranslationService } from '@bolo/core/i18n/services';

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false, // signal reads trigger change detection
})
export class TranslatePipe implements PipeTransform {
  private t = inject(TranslationService);

  transform(key: string, fallback = ''): string {
    console.log('Translating key:', key);
    const value = this.t.instant(key, fallback);
    console.log('Translation result:', value);
    return value;
  }
}
