import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'ui-elm-table',
  imports: [CommonModule, TableModule, TooltipModule, PaginatorModule, ButtonModule],
  templateUrl: './table-component.html',
  styleUrl: './table-component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  @Input() rows: Record<string, any>[] = [];
  @Input() headers: Record<string, string>[] = [];

  get columns(): Record<string, string>[] {
    return this.headers;
  }

  get data(): Record<string, any>[] {
    return this.rows;
  }
}
