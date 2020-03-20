import { Component, OnInit } from '@angular/core';
import { Empleado } from 'app/models/empleado';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EmpleadoService } from 'app/services/empleado.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.scss']
})
export class EmpleadoListComponent implements OnInit {

  empleados: Observable<Empleado[]>;
  constructor(private router: Router,
    private http: HttpClient,
    private empleadoService:EmpleadoService) { }

    ngOnInit() {
      this.reloadData();
    }
  
    reloadData() {
      this.empleados = this.empleadoService.getEmpleadosList();
    }
  
  
    deleteEmpleado(id: number) {
      this.empleadoService.deleteEmpleado(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
    }
  
    empleadoDetails(id: number){
      
      this.router.navigate(['detalle-empleado', id]);
    }
  
    empleadoEdit(id: number){
      this.router.navigate(['editar-empleado', id]);
    }

}

