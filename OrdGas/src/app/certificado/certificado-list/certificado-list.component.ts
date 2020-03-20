import { Component, OnInit } from '@angular/core';
import { Certificado } from 'app/models/certificado';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CertificadoService } from 'app/services/certificado.service';

@Component({
  selector: 'app-certificado-list',
  templateUrl: './certificado-list.component.html',
  styleUrls: ['./certificado-list.component.scss']
})
export class CertificadoListComponent implements OnInit {

  certificados: Observable<Certificado[]>;
  constructor(private router: Router,
    private http: HttpClient,  
    private certificadoService:CertificadoService) { }


  ngOnInit() {
  
    this.reloadData();
  
  }

  reloadData() {
    this.certificados = this.certificadoService.getCertificadosL();
    
  }


  deleteCertificado(id: number) {
    this.certificadoService.deleteCertificado(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  certificadoDetails(id: number){
    
    this.router.navigate(['detalle-certificado', id]);
  }

  certificadoEdit(id: number){
    this.router.navigate(['editar-certificado', id]);
  }

}
