import { Component, OnInit } from '@angular/core';
import { Contrato } from 'app/models/contrato';
import { TipoOrden } from 'app/models/tipo-orden';
import { Orden } from 'app/models/orden';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { OrdenService } from 'app/services/orden.service';
import { ContratoService } from 'app/services/contrato.service';
import { TipoService } from 'app/services/tipo.service';

@Component({
  selector: 'app-orden-edit',
  templateUrl: './orden-edit.component.html',
  styleUrls: ['./orden-edit.component.scss']
})
export class OrdenEditComponent implements OnInit {
  contratos: Contrato[];
  ordenes: TipoOrden[];
    id: number;
    ordenGasto: Orden;
    
    
  
    constructor(
      private route: ActivatedRoute,
      private router:Router,
      private formBuilder: FormBuilder,
      private  ordenService: OrdenService,
      private contratoService: ContratoService,
      private tipoService: TipoService,
      ) {
        this.getContratos();
    this.getTipos();
       }
    ngOnInit() {
      this.ordenGasto = new Orden();
  
      this.id = this.route.snapshot.params['id'];
      
      this.ordenService.getOrdenGasto(this.id)
        .subscribe(data => {
          console.log(data)
          this.ordenGasto = data;
        }, error => console.log(error));
  
    }
    updateOrdenGasto() {
      this.ordenService.updateOrdenGasto(this.id, this.ordenGasto)
        .subscribe(data => console.log(data), error => console.log(error));
      this.ordenGasto = new Orden();
      this.gotoList();
    }
  
    onSubmit() {
      this.updateOrdenGasto();    
    }
  
    gotoList() {
      this.router.navigate(['list-orden']);
    }
    
    getContratos(){
      this.contratoService.getContratosList().subscribe((data:Contrato[])=>{
        this.contratos = data;
    }, (error)=>{
      alert('A ocurrido un error');
    });
    }
  
    getTipos(){
      this.tipoService.getTiposList().subscribe((data:TipoOrden[])=>{
        this.ordenes = data;
    }, (error)=>{
      alert('A ocurrido un error');
    });
    }
  }