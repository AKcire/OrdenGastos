import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenEditComponent } from './orden-edit.component';

describe('OrdenEditComponent', () => {
  let component: OrdenEditComponent;
  let fixture: ComponentFixture<OrdenEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdenEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
