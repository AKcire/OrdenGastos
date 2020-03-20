import { Component, OnInit } from '@angular/core';
import { Empleado } from 'app/models/empleado';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoService } from 'app/services/empleado.service';

@Component({
  selector: 'app-empleado-detail',
  templateUrl: './empleado-detail.component.html',
  styleUrls: ['./empleado-detail.component.scss']
})
export class EmpleadoDetailComponent implements OnInit {

  id: number;
empleado: Empleado;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private empleadoService: EmpleadoService ){ }

  ngOnInit() {
    this.empleado = new Empleado();

    this.id = this.route.snapshot.params['id'];
    
    this.empleadoService.getEmpleado(this.id)
      .subscribe(data => {
        console.log(data)
        this.empleado = data;
      }, error => console.log(error));
  }
  list(){
    this.router.navigate(['list-empleado']);
  }

}
