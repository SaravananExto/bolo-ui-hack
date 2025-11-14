import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDock } from './menu-dock';

describe('MenuDock', () => {
  let component: MenuDock;
  let fixture: ComponentFixture<MenuDock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuDock],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuDock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
