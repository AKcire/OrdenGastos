import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoDetailComponent } from './certificado-detail.component';

describe('CertificadoDetailComponent', () => {
  let component: CertificadoDetailComponent;
  let fixture: ComponentFixture<CertificadoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificadoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
