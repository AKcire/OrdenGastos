import { Component, OnInit } from '@angular/core';
import { Empleado } from 'app/models/empleado';
import { Proveedor } from 'app/models/proveedor';
import { Contrato } from 'app/models/contrato';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ContratoService } from 'app/services/contrato.service';
import { ProveedorService } from 'app/services/proveedor.service';
import { EmpleadoService } from 'app/services/empleado.service';

@Component({
  selector: 'app-contrato-edit',
  templateUrl: './contrato-edit.component.html',
  styleUrls: ['./contrato-edit.component.scss']
})
export class ContratoEditComponent implements OnInit {

  empleados: Empleado[];
  proveedores:Proveedor[];
id: number;
contrato: Contrato;
  constructor( private route: ActivatedRoute,
    private router:Router,
    private formBuilder: FormBuilder,
    private  contratoService: ContratoService,
    private proveedorService: ProveedorService,
      private empleadoService: EmpleadoService,
      ) {
        this.getEmpleados();
      this.getProveedores();
       }

  ngOnInit() {
    this.contrato = new Contrato();

    this.id = this.route.snapshot.params['id'];
    
    this.contratoService.getContrato(this.id)
      .subscribe(data => {
        console.log(data)
        this.contrato = data;
      }, error => console.log(error));
  }
  updateContrato() {
    this.contratoService.updateContrato(this.id, this.contrato)
      .subscribe(data => console.log(data), error => console.log(error));
    this.contrato = new Contrato();
    this.gotoList();
  }

  onSubmit() {
    this.updateContrato();    
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
