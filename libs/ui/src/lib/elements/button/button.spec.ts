import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Button } from './button';

describe('Button', () => {
  let fixture: ComponentFixture<Button>;
  let component: Button;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Button],
    }).compileComponents();

    fixture = TestBed.createComponent(Button);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
