import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslatePipe } from '@bolo/shared-core/i18n/pipes';
import { TranslationService } from '@bolo/shared-core/i18n/services';
import { TableComponent } from '@bolo/ui/elements';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { Tooltip } from 'primeng/tooltip';

@Component({
  selector: 'lib-document-manager',
  imports: [TranslatePipe, BreadcrumbModule, Tooltip, TableComponent],
  templateUrl: './document-manager.html',
  styleUrl: './document-manager.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentManager implements OnInit {
  private router = inject<Router>(Router);
  private translateSvc = inject(TranslationService);
  public breadCrumbItems: MenuItem[] = [];

  ngOnInit(): void {
    this.loadTranslation();
    this.breadCrumbItems.push({
      label: 'All Folders',
      icon: '',
      url: '/chat/document-manager',
      target: '_self',
    });
  }

  loadTranslation() {
    const currentLocale = this.translateSvc.currentLocale;
    this.translateSvc.switchLocale(currentLocale);
  }

  navigateToChat() {
    this.router.navigate(['chat']);
  }

  get data() {
    return this.rowData.map(i => {
      return { ...i, actions: '' };
    });
  }

  get headers() {
    return this.column;
  }

  private column = [
    { field: 'name', header: 'Name', icon: 'pi pi-folder' },
    { field: 'scope', header: 'Scope' },
    { field: 'status', header: 'Status' },
    { field: 'version', header: 'Version' },
    { field: 'size', header: 'Size' },
    { field: 'createdOn', header: 'Created On' },
    { field: 'createdBy', header: 'Created By' },
    { field: 'updatedOn', header: 'Updated On' },
    { field: 'actions', header: 'Actions', nofilter: true, icon: 'pi pi-cog' },
  ];

  private rowData = [
    {
      name: 'Sterling Public',
      scope: 'public',
      status: '',
      version: '',
      size: '12 items',
      createdOn: '10/3/25, 9:27 AM',
      createdBy: 'sterling.hill@paesglobal.com',
      updatedOn: '',
    },
    {
      name: 'Bulk Extraction East',
      scope: 'public',
      status: '',
      version: '',
      size: '34 items',
      createdOn: '10/8/25, 11:10 AM',
      createdBy: 'sterling.hill@paesglobal.com',
      updatedOn: '',
    },
    {
      name: 'Bulk Extraction North',
      scope: 'public',
      status: '',
      version: '',
      size: '34 items',
      createdOn: '10/8/25, 11:10 AM',
      createdBy: 'sterling.hill@paesglobal.com',
      updatedOn: '',
    },
    {
      name: 'Mobile Folder',
      scope: 'public',
      status: '',
      version: '',
      size: '2 items',
      createdOn: '10/8/25, 11:10 AM',
      createdBy: 'sterling.hill@paesglobal.com',
      updatedOn: '',
    },
    {
      name: 'Inspection Request One',
      scope: 'public',
      status: '',
      version: '',
      size: '65 items',
      createdOn: '10/8/25, 11:10 AM',
      createdBy: 'sterling.hill@paesglobal.com',
      updatedOn: '',
    },
    {
      name: 'Inspection Request Two',
      scope: 'public',
      status: '',
      version: '',
      size: '65 items',
      createdOn: '10/8/25, 11:10 AM',
      createdBy: 'sterling.hill@paesglobal.com',
      updatedOn: '',
    },
    {
      name: 'Regg T.25',
      scope: 'public',
      status: '',
      version: '',
      size: '5 items',
      createdOn: '10/8/25, 11:10 AM',
      createdBy: 'sterling.hill@paesglobal.com',
      updatedOn: '',
    },
    {
      name: 'Transmittal Distribution Form A1',
      scope: 'public',
      status: '',
      version: '',
      size: '20 items',
      createdOn: '10/8/25, 11:10 AM',
      createdBy: 'sterling.hill@paesglobal.com',
      updatedOn: '',
    },
    {
      name: 'Transmittal Distribution Form A2',
      scope: 'public',
      status: '',
      version: '',
      size: '20 items',
      createdOn: '10/8/25, 11:10 AM',
      createdBy: 'sterling.hill@paesglobal.com',
      updatedOn: '',
    },
    {
      name: 'MIR',
      scope: 'public',
      status: '',
      version: '',
      size: '2 items',
      createdOn: '10/8/25, 11:10 AM',
      createdBy: 'sterling.hill@paesglobal.com',
      updatedOn: '',
    },
  ];
}
