import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroBanner } from '@bolo/ui/components';

import { NxWelcome } from './nx-welcome';

@Component({
  imports: [NxWelcome, RouterModule, HeroBanner],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'web';
}
