import { Component, OnInit } from '@angular/core';
import { Empleado } from 'app/models/empleado';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { EmpleadoService } from 'app/services/empleado.service';

@Component({
  selector: 'app-empleado-edit',
  templateUrl: './empleado-edit.component.html',
  styleUrls: ['./empleado-edit.component.scss']
})
export class EmpleadoEditComponent implements OnInit {

  id: number;
  empleado: Empleado;
  constructor(private route: ActivatedRoute,
    private router:Router,
    private formBuilder: FormBuilder,
    private  empleadoService: EmpleadoService) { }

  ngOnInit() {
    this.empleado = new Empleado();
    this.id = this.route.snapshot.params['id'];

    this.empleadoService.getEmpleado(this.id)
      .subscribe(data => {
        console.log(data)
        this.empleado = data;
      }, error => console.log(error));
  }
  updateEmpleado() {
    this.empleadoService.updateEmpleado(this.id, this.empleado)
      .subscribe(data => console.log(data), error => console.log(error));
    this.empleado = new Empleado();
    this.gotoList();
  }

  onSubmit() {
    this.updateEmpleado();    
  }

  gotoList() {
    this.router.navigate(['list-empleado']);
  }
}
