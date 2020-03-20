import { Component, OnInit } from '@angular/core';
import { Certificado } from 'app/models/certificado';
import { ActivatedRoute, Router } from '@angular/router';
import { CertificadoService } from 'app/services/certificado.service';

@Component({
  selector: 'app-certificado-detail',
  templateUrl: './certificado-detail.component.html',
  styleUrls: ['./certificado-detail.component.scss']
})
export class CertificadoDetailComponent implements OnInit {

  id: number;
  certificado: Certificado;

    constructor(private route: ActivatedRoute,
      private router: Router,
      private certificadoService: CertificadoService ){ }
  
    ngOnInit() {
      this.certificado = new Certificado();
      this.id = this.route.snapshot.params['id'];
      this.findCertificado();
    }
    findCertificado(){
      this.certificadoService.getCertificado(this.id)
        .subscribe(data => {
          console.log(data)
          this.certificado = data;
        }, error => console.log(error));
    }
    
    list(){
      this.router.navigate(['list-certificado']);
    }

}
