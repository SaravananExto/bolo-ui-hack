import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'ui-cmp-primary-sidebar',
  standalone: true,
  templateUrl: './primary-sidebar.html',
  styleUrl: './primary-sidebar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrimarySidebar {
  collapsed = signal(true);

  toggle() {
    this.collapsed.set(!this.collapsed());
  }
}
