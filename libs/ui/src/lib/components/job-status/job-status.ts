import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslatePipe } from '@bolo/shared-core/i18n/pipes';
import { TranslationService } from '@bolo/shared-core/i18n/services';

import { TableComponent } from '../../elements/table/table-component';

@Component({
  selector: 'ui-cmp-job-status',
  imports: [TranslatePipe, TableComponent],
  templateUrl: './job-status.html',
  styleUrl: './job-status.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobStatus implements OnInit {
  private router = inject<Router>(Router);
  private translateSvc = inject(TranslationService);

  ngOnInit(): void {
    this.loadTranslation();
  }

  loadTranslation() {
    const currentLocale = this.translateSvc.currentLocale;
    this.translateSvc.switchLocale(currentLocale);
  }

  navigateToChat() {
    this.router.navigate(['chat']);
  }

  get data() {
    return this.rowData;
  }

  get headers() {
    return this.column;
  }

  private column = [
    { field: 'name', header: 'Name' },
    { field: 'status', header: 'Status', cellStyling: { type: 'tag' } },
    { field: 'createdAt', header: 'Created On' },
    { field: 'createdBy', header: 'Created By' },
    { field: 'description', header: 'Description' },
    { field: 'errorMsg', header: 'Error Message' },
  ];

  private rowData = [
    {
      name: 'motorcycles.xlsx',
      status: 'In Progress',
      createdAt: '10/9/25, 3:41 PM',
      createdBy: 'sterling.hill@paesglobal.com',
      description: 'Importing data...',
      errorMsg: 'a',
    },
    {
      name: 'cars.xlsx',
      status: 'Completed',
      createdAt: '10/8/25, 10:14 AM',
      createdBy: 'sterling.hill@paesglobal.com',
      description: 'Content search upload of 1 document',
      errorMsg: '',
    },
    {
      name: 'vehicle_super_show_2025.pdf',
      status: 'Completed',
      createdAt: '10/8/25, 10:23 AM',
      createdBy: 'sterling.hill@paesglobal.com',
      description: 'Content search upload of 1 document',
      errorMsg: '',
    },
    {
      name: 'super_boat_001.jpg',
      status: 'Failed',
      createdAt: '10/8/25, 11:10 AM',
      createdBy: 'sterling.hill@paesglobal.com',
      description: 'Error',
      errorMsg: 'exprind-21-shart-002-00-vrad.mongodb upload timed out',
    },
  ];
}
