import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-cmp-secondary-sidebar',
  standalone: true,
  templateUrl: './secondary-sidebar.html',
  styleUrl: './secondary-sidebar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondarySidebar {}
