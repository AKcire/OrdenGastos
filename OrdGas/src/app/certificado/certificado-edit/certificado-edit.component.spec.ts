import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoEditComponent } from './certificado-edit.component';

describe('CertificadoEditComponent', () => {
  let component: CertificadoEditComponent;
  let fixture: ComponentFixture<CertificadoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificadoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
