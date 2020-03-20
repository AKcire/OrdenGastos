import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { OrdenService } from 'app/services/orden.service';
import { ContratoService } from 'app/services/contrato.service';
import { Contrato } from 'app/models/contrato';
import { Orden } from 'app/models/orden';
import { TipoOrden } from 'app/models/tipo-orden';
import { TipoService } from 'app/services/tipo.service';


@Component({
  selector: 'app-orden-add',
  templateUrl: './orden-add.component.html',
  styleUrls: ['./orden-add.component.scss']
})
export class OrdenAddComponent implements OnInit {
  contratos: Contrato[];
  tpo:TipoOrden[];

  ordenGasto: Orden = new Orden();

  submitted = false;

  show_fecha: boolean = true;
  show_mes: boolean = true;
  show_dias_ini: boolean = true;
  show_dias_fin: boolean = true;
  show_contrato: boolean = true;
  show_numero_orden: boolean = true;
  show_instalacion: boolean = true;
  show_cantidad: boolean = true;
  show_precio_unitario: boolean = true;
  show_otro_impuesto: boolean = true;
  show_iva: boolean = true;
  show_saldo: boolean = true;
  show_tipo: boolean = true;


  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private ordenService: OrdenService,
    private contratoService: ContratoService,
    private tipoService: TipoService,
  ) {
    this.getContratos();
    this.getTipos();
  }
  ngOnInit() {
  }


  newOrdenGasto(): void {
    this.submitted = false;
    this.ordenGasto = new Orden();
  }

  save() {
    this.ordenService.createOrdenGasto(this.ordenGasto)
      .subscribe();
    this.ordenGasto = new Orden();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['list-orden']);
  }

  getContratos() {
    this.contratoService.getContratosList().subscribe((data: Contrato[]) => {
      this.contratos = data;
    }, (error) => {
      alert('A ocurrido un error al traer los contratos');
    });
  }
  getTipos(){
    this.tipoService.getTiposList().subscribe((data: TipoOrden[]) =>{
      this.tpo = data;
    });
  }
  ocultar() {
    this.show_fecha = true;
    this.show_mes = true;
    this.show_dias_ini = true;
    this.show_dias_fin = true;
    this.show_contrato = true;
    this.show_numero_orden = true;
    this.show_instalacion = true;
    this.show_cantidad = true;
    this.show_precio_unitario = true;
    this.show_otro_impuesto = true;
    this.show_iva = true;
    this.show_saldo = true;
    this.show_tipo = true;

  }

  formMensualidad() {
    this.show_contrato = !this.show_contrato;
    this.show_numero_orden = !this.show_numero_orden;
    this.show_fecha = !this.show_fecha;
    this.show_mes = !this.show_mes;
    this.show_instalacion = !this.show_instalacion;
    this.show_cantidad = !this.show_cantidad;
    this.show_precio_unitario = !this.show_precio_unitario;
    this.show_otro_impuesto = !this.show_otro_impuesto;
    this.show_iva = !this.show_iva;
    this.show_tipo = !this.show_tipo;


  }



  formDias() {
    this.show_contrato = !this.show_contrato;
    this.show_numero_orden = !this.show_numero_orden;
    this.show_fecha = !this.show_fecha;
    this.show_mes = !this.show_mes;
    this.show_instalacion = !this.show_instalacion;
    this.show_cantidad = !this.show_cantidad;
    this.show_precio_unitario = !this.show_precio_unitario;
    this.show_otro_impuesto = !this.show_otro_impuesto;
    this.show_iva = !this.show_iva;
    this.show_dias_ini = !this.show_dias_ini;
    this.show_dias_fin = !this.show_dias_fin;
    this.show_tipo = !this.show_tipo;

  }

  formContado() {
    this.show_contrato = !this.show_contrato;
    this.show_numero_orden = !this.show_numero_orden;
    this.show_fecha = !this.show_fecha;
    this.show_mes = !this.show_mes;
    this.show_instalacion = !this.show_instalacion;
    this.show_cantidad = !this.show_cantidad;
    this.show_precio_unitario = !this.show_precio_unitario;
    this.show_otro_impuesto = !this.show_otro_impuesto;
    this.show_iva = !this.show_iva;
    this.show_tipo = !this.show_tipo;

  }
}
