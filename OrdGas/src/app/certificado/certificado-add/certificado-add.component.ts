import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Certificado } from 'app/models/certificado';
import { CertificadoService } from 'app/services/certificado.service';
import { ContratoService } from 'app/services/contrato.service';
import { Contrato } from 'app/models/contrato';

@Component({
  selector: 'app-certificado-add',
  templateUrl: './certificado-add.component.html',
  styleUrls: ['./certificado-add.component.scss']
})
export class CertificadoAddComponent implements OnInit {
  contratos: Contrato[];
  certificado: Certificado = new Certificado();
  submitted = false;
   

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private certificadoService: CertificadoService,
    private contratoService: ContratoService,
  ) {}

  ngOnInit() {
    this.getContratos();
  }

  
newCertificado(): void {
  this.submitted = false;
  this.certificado = new Certificado();
}

save() {
  this.certificadoService.createCertificado(this.certificado)
    .subscribe();
  this.certificado = new Certificado();
  this.gotoList();
}

onSubmit() {
  this.submitted = true;
  this.save();    
}

gotoList() {
  this.router.navigate(['list-certificado']);
}
 
getContratos() {
  this.contratoService.getContratosList().subscribe((data: Contrato[]) => {
    this.contratos = data;
  }, (error) => {
    alert('A ocurrido un error al traer los contratos');
  });
}
}
