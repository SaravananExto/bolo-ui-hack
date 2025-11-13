import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from '@bolo/shared-core/theme/services';

@Component({
  imports: [RouterModule],
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private themeService = inject(ThemeService);

  protected title = 'web';

  ngOnInit() {
    this.themeService.init();
  }
}
