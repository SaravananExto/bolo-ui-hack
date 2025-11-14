import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ThemeService } from '@bolo/shared-core/theme/services/theme.service';
import { MenuDock, PrimarySidebar, SecondarySidebar } from '@bolo/ui/components';

@Component({
  imports: [RouterModule, PrimarySidebar, SecondarySidebar, MenuDock],
  standalone: true,
  selector: 'app-layout',
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout implements OnInit {
  themeService = inject(ThemeService);
  router = inject(Router);

  protected title = 'web';
  protected isMenuDockVisible = false;

  ngOnInit() {
    this.themeService.init();
  }

  onHistoryClicked(event: string) {
    this.router.navigate(['chat', 'history', `${event}`]);
  }

  navigateTo(event: string) {
    this.router.navigate([event]);
  }

  toggeleMenuDock() {
    this.isMenuDockVisible = !this.isMenuDockVisible;
  }
}
