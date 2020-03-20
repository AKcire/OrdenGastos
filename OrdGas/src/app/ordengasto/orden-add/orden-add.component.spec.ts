import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenAddComponent } from './orden-add.component';

describe('OrdenAddComponent', () => {
  let component: OrdenAddComponent;
  let fixture: ComponentFixture<OrdenAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdenAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
