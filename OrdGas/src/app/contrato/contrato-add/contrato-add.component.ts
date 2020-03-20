import { Component, OnInit } from '@angular/core';
import { Empleado } from 'app/models/empleado';
import { Proveedor } from 'app/models/proveedor';
import { Contrato } from 'app/models/contrato';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ContratoService } from 'app/services/contrato.service';
import { ProveedorService } from 'app/services/proveedor.service';
import { EmpleadoService } from 'app/services/empleado.service';

@Component({
  selector: 'app-contrato-add',
  templateUrl: './contrato-add.component.html',
  styleUrls: ['./contrato-add.component.scss']
})
export class ContratoAddComponent implements OnInit {
  empleados: Empleado[];
  proveedores:Proveedor[];
    contrato: Contrato = new Contrato();
    submitted = false;
     
  
    constructor(
      private router: Router,
      private formBuilder: FormBuilder,
      private contratoService: ContratoService,
      private proveedorService: ProveedorService,
      private empleadoService: EmpleadoService,
    ) {
      this.getEmpleados();
      this.getProveedores();
    }
  
    ngOnInit() {
    }
  
    
  newContrato(): void {
    this.submitted = false;
    this.contrato = new Contrato();
  }
  
  save() {
    this.contratoService.createContrato(this.contrato)
      .subscribe();
    this.contrato = new Contrato();
    this.gotoList();
  }
  
  onSubmit() {
    this.submitted = true;
    this.save();    
  }
  
  gotoList() {
    this.router.navigate(['list-contrato']);
  }
    
  
    getProveedores(){
      this.proveedorService.getProveedoresList().subscribe((data:Proveedor[])=>{
        this.proveedores = data;
    }, (error)=>{
      alert('A ocurrido un error');
    });
    }
    getEmpleados(){
      this.empleadoService.getEmpleadosList().subscribe((data:Empleado[])=>{
        this.empleados = data;
    }, (error)=>{
      alert('A ocurrido un error');
    });
    }
  }
  