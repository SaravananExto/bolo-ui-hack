import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocumentLearning } from './document-learning';

describe('DocumentLearning', () => {
  let component: DocumentLearning;
  let fixture: ComponentFixture<DocumentLearning>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentLearning],
    }).compileComponents();

    fixture = TestBed.createComponent(DocumentLearning);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
