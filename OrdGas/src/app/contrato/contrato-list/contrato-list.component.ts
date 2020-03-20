import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contrato } from 'app/models/contrato';
import { Router } from '@angular/router';
import { ContratoService } from 'app/services/contrato.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contrato-list',
  templateUrl: './contrato-list.component.html',
  styleUrls: ['./contrato-list.component.scss']
})
export class ContratoListComponent implements OnInit {

  contratos: Observable<Contrato[]>;
  constructor(private router: Router,
    private http: HttpClient,
    private contratoService:ContratoService) { }

    ngOnInit() {
    
      this.reloadData();
    
    }
  
    reloadData() {
      this.contratos = this.contratoService.getContratosL();
    }
  
  
    deleteContrato(id: number) {
      this.contratoService.deleteContrato(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
    }
  
    contratoDetails(id: number){
      
      this.router.navigate(['detalle-contrato', id]);
    }
  
    contratoEdit(id: number){
      this.router.navigate(['editar-contrato', id]);
    }

}

