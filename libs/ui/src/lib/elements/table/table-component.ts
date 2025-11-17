import { ChangeDetectionStrategy, Component, inject, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@bolo/shared-core/i18n/pipes';
import { TranslationService } from '@bolo/shared-core/i18n/services';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'ui-elm-table',
  imports: [
    TableModule,
    TooltipModule,
    ButtonModule,
    SelectModule,
    FormsModule,
    TranslatePipe,
    TagModule,
  ],
  templateUrl: './table-component.html',
  styleUrl: './table-component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit {
  @Input() rows: Record<string, any>[] = [];
  @Input() headers: Record<string, any>[] = [];

  private translateSvc = inject(TranslationService);

  ngOnInit(): void {
    this.loadTranslation();
  }

  loadTranslation() {
    const currentLocale = this.translateSvc.currentLocale;
    this.translateSvc.switchLocale(currentLocale);
  }

  currentPage = 1;
  rowsPerPage = 5;
  get totalRows() {
    return this.rows.length;
  }
  get totalPages() {
    return Math.max(1, Math.ceil(this.totalRows / this.rowsPerPage));
  }
  get pagedData() {
    const start = (this.currentPage - 1) * this.rowsPerPage;
    return this.rows.slice(start, start + this.rowsPerPage);
  }

  get columns(): Record<string, string>[] {
    return this.headers;
  }

  paginationOption = [
    { label: 5, value: 5 },
    { label: 10, value: 10 },
    { label: 50, value: 50 },
    { label: 80, value: 80 },
  ];

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
  onRowsPerPageChange() {
    this.currentPage = 1;
  }

  checkStyling(column: Record<string, any>) {
    if (column['cellStyling']) {
      return true;
    }
    return false;
  }

  getSeverity(status: string) {
    switch (status) {
      case 'Completed':
        return 'success';
      case 'Failed':
        return 'danger';
      case 'In Progress':
        return 'warn';
      default:
        return null;
    }
  }

  checkIcon(col: Record<string, any>) {
    if (col['icon']) {
      return true;
    }
    return false;
  }
}
