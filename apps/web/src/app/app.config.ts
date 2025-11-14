import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { primengConfig } from '@bolo/ui/primeng';
import { providePrimeNG } from 'primeng/config';

import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideAnimationsAsync(), // this is deprecated but needed for primeng animations
    providePrimeNG(primengConfig), //reverting the sync process of loading the primeng assests as factory method has issues
  ],
};
