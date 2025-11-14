import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslatePipe } from '@bolo/shared-core/i18n/pipes';
import { TranslationService } from '@bolo/shared-core/i18n/services';
import { TableComponent } from '@bolo/ui/elements';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'lib-document-learning',
  imports: [ButtonModule, TableComponent, TranslatePipe],
  templateUrl: './document-learning.html',
  styleUrl: './document-learning.scss',
})
export class DocumentLearning implements OnInit {
  private router = inject<Router>(Router);
  private translateSvc = inject(TranslationService);

  ngOnInit(): void {
    this.loadTranslation();
  }

  loadTranslation() {
    const currentLocale = this.translateSvc.currentLocale;
    this.translateSvc.switchLocale(currentLocale);
  }

  get data() {
    return this.rowData;
  }

  get headers() {
    return this.columns;
  }

  navigateToChat() {
    this.router.navigate(['']);
  }

  private columns = [
    { field: 'primaryCategory', header: 'Primary Category' },
    { field: 'secondaryCategory', header: 'Secondary Category' },
    { field: 'name', header: 'Name' },
  ];

  private rowData = [
    {
      primaryCategory: 'srinidhi restaurant bill',
      secondaryCategory: 'bill',
      name: 'Srinidhi bill.pdf',
    },
    {
      primaryCategory: 'transmittal',
      secondaryCategory: 'transmittal',
      name: 'TRANSMITTAL.pdf',
    },
    {
      primaryCategory: 'project_a_submittal',
      secondaryCategory: 'project_a_submittal',
      name: '2024.08.09_R1029-CSCEC-MAR-TG-ST-0007-00 - Standard Threaded Coupler A2 series – Emirates Specialties Co. LLC_CODE B.pdf',
    },
    {
      primaryCategory: 'ncr',
      secondaryCategory: 'non-conformance report (ncr)',
      name: '2024.08.20 - R1029-NCR-CV-0012-Rev.01 - Water Leakage in Pile Cap F-FPC42_Corrective Action (1).pdf',
    },
    {
      primaryCategory: 'construction',
      secondaryCategory: 'inspection request',
      name: 'R1029-CSCEC-WIR-ST-0846-00 - Completion of Top Layer Reinforcement T1 to T2 at MGM2_CODE B (1).pdf',
    },
    {
      primaryCategory: 'construction ncr',
      secondaryCategory: 'non-conformance report (ncr)',
      name: 'R1029-NCR-CV-0012-00_Water Leakage in Pile Cap F-FPC42_CLOSE-OUT (5).pdf',
    },
    {
      primaryCategory: 'manufacturing',
      secondaryCategory: 'raw material',
      name: '100-0000 WPL03608 (1).pdf',
    },
    {
      primaryCategory: 'inspection request',
      secondaryCategory: 'r1029-cscec-wir-cv',
      name: 'R1029-CSCEC-WIR-CV-0003-00 - Civil_Arch Works at Consultant Office_CODE C.pdf',
    },
    {
      primaryCategory: 'early warning notification',
      secondaryCategory: 'r1029-kci-ewn-cscec',
      name: 'R1029-KCI-EWN-CSCEC-0001-00_Contractor’s Submittals pursuant to SC-1 & SC-2.1.pdf',
    },
  ];
}
