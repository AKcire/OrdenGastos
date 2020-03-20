import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoAddComponent } from './certificado-add.component';

describe('CertificadoAddComponent', () => {
  let component: CertificadoAddComponent;
  let fixture: ComponentFixture<CertificadoAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificadoAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
