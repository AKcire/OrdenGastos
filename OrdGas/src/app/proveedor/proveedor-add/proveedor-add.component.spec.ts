import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorAddComponent } from './proveedor-add.component';

describe('ProveedorAddComponent', () => {
  let component: ProveedorAddComponent;
  let fixture: ComponentFixture<ProveedorAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProveedorAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedorAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
