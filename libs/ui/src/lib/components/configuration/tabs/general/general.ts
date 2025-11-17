import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe } from '@bolo/shared-core/i18n/pipes/translate.pipe';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';

import { ActionBar } from '../action-bar/action-bar';

@Component({
  selector: 'ui-cmp-general-tab',
  standalone: true,
  imports: [
    SelectModule,
    CheckboxModule,
    InputTextModule,
    TranslatePipe,
    ReactiveFormsModule,
    ActionBar,
  ],
  templateUrl: './general.html',
  styleUrl: './general.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GeneralTab {
  datasourceOptions = [
    { label: 'Datasource 1', value: 'ds1' },
    { label: 'Datasource 2', value: 'ds2' },
  ];
  llmOptions = [
    { label: 'GPT-4', value: 'gpt4' },
    { label: 'Gemini', value: 'gemini' },
  ];

  configCheckboxes = [
    'configuration.settings',
    'configuration.conversation',
    'configuration.conversationBar',
    'configuration.datasets',
    'configuration.documentLearning',
    'configuration.documentManager',
    'configuration.imageLearning',
    'configuration.jobStatus',
    'configuration.photos',
    'configuration.schedule',
  ];

  form = new FormGroup({
    selectedDatasource: new FormControl('ds1'),
    selectedLLM: new FormControl('gpt4'),
    logoSource: new FormControl(''),
    showInSidebar: new FormControl(false),
    // Dynamically add checkbox controls
    ...Object.fromEntries(
      (this.configCheckboxes as string[]).map(key => [key, new FormControl(false)]),
    ),
  });

  // Example translation keys for checkboxes and inputs:
  // configuration.settings, configuration.conversation, configuration.conversationBar, etc.
}
