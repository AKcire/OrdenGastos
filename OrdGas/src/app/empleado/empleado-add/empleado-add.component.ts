import { Component, OnInit } from '@angular/core';
import { Empleado } from 'app/models/empleado';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { EmpleadoService } from 'app/services/empleado.service';

@Component({
  selector: 'app-empleado-add',
  templateUrl: './empleado-add.component.html',
  styleUrls: ['./empleado-add.component.scss']
})
export class EmpleadoAddComponent implements OnInit {
  empleado: Empleado = new Empleado();
  submitted = false;
   

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private empleadoService: EmpleadoService
  ) {}

  ngOnInit() {
  }

  
newEmpleado(): void {
  this.submitted = false;
  this.empleado = new Empleado();
}

save() {
  this.empleadoService.createEmpleado(this.empleado)
    .subscribe( );
  this.empleado = new Empleado();
  this.gotoList();
}

onSubmit() {
  this.submitted = true;
  this.save();    
}

gotoList() {
  this.router.navigate(['list-empleado']);
}
  

}
