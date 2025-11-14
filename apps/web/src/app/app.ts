import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from '@bolo/shared-core/theme/services/theme.service';

@Component({
  imports: [RouterModule],
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  // Inject ThemeService for global theme management
  themeService = inject(ThemeService);

  protected title = 'web';

  ngOnInit() {
    // Initialize theme on app bootstrap
    this.themeService.init();
  }
}
