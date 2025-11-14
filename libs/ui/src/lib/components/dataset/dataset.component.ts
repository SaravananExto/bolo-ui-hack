import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslatePipe } from '@bolo/shared-core/i18n/pipes';
import { TranslationService } from '@bolo/shared-core/i18n/services';
import { TableComponent } from '@bolo/ui/elements';
import { Tooltip } from 'primeng/tooltip';

@Component({
  selector: 'app-dataset.component',
  imports: [TableComponent, Tooltip, TranslatePipe],
  templateUrl: './dataset.component.html',
  styleUrl: './dataset.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatasetComponent implements OnInit {
  private router = inject<Router>(Router);
  private translateSvc = inject(TranslationService);

  ngOnInit(): void {
    this.loadTranslation();
  }

  loadTranslation() {
    const currentLocale = this.translateSvc.currentLocale;
    this.translateSvc.switchLocale(currentLocale);
  }

  get data(): Record<string, any>[] {
    return this.sampleRows;
  }

  get cols(): { field: string; header: string }[] {
    return this.columns;
  }

  navigateToChat() {
    this.router.navigate(['']);
  }
  private sampleRows: Record<string, any>[] = [
    {
      name: 'Resident ID Main',
      tableName: 'custom_xyz_resident',
      createdOn: '10/9/25, 4:16 PM',
      createdBy: 'sterling.hill@gaeglobal.com',
      updatedOn: '11/3/25, 4:16 PM',
      updatedBy: 'sterling.hill@gaeglobal.com',
      description:
        'The Resident Main ID table serves as the main repository for storing resident identifiers and related metadata.',
    },
    {
      name: 'Billing Main',
      tableName: 'custom_xyz_billing',
      createdOn: '10/8/25, 10:14 AM',
      createdBy: 'sterling.hill@gaeglobal.com',
      updatedOn: '11/4/25, 10:14 AM',
      updatedBy: 'sterling.hill@gaeglobal.com',
      description:
        'The Billing Main table serves as the main repository for storing billing records, invoices and payment status.',
    },
    {
      name: 'Passport Main',
      tableName: 'custom_xyz_passport',
      createdOn: '10/8/25, 10:23 AM',
      createdBy: 'sterling.hill@gaeglobal.com',
      updatedOn: '11/6/25, 10:23 AM',
      updatedBy: 'sterling.hill@gaeglobal.com',
      description:
        'The Passport Main table serves as the main repository for storing passport and travel document information for profile verification.',
    },
    {
      name: 'Sales Main',
      tableName: 'custom_xyz_sales',
      createdOn: '10/8/25, 11:10 AM',
      createdBy: 'sterling.hill@gaeglobal.com',
      updatedOn: '11/9/25, 11:10 AM',
      updatedBy: 'sterling.hill@gaeglobal.com',
      description:
        'The Sales Main table serves as the main repository for storing sales transactions and related order details.',
    },
  ];

  private columns = [
    { field: 'name', header: 'Name' },
    { field: 'tableName', header: 'Table Name' },
    { field: 'createdOn', header: 'Created On' },
    { field: 'createdBy', header: 'Created By' },
    { field: 'updatedOn', header: 'Updated On' },
    { field: 'updatedBy', header: 'Updated By' },
    { field: 'description', header: 'Desription' },
  ];
}
