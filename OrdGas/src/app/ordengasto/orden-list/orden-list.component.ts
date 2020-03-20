import { Component, OnInit } from '@angular/core';
import { Orden } from 'app/models/orden';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { OrdenService } from 'app/services/orden.service';

//import 'jspdf-autotable';

@Component({
  selector: 'app-orden-list',
  templateUrl: './orden-list.component.html',
  styleUrls: ['./orden-list.component.scss']
})
export class OrdenListComponent implements OnInit {

  ordenGastos: Observable<Orden[]>;
  
  constructor(
    private router: Router,
    private http: HttpClient,
    private ordenService: OrdenService
  ) { }


  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.ordenGastos = this.ordenService.getOrdenGastosList();
  }

  deleteOrdenGasto(id: number) {
    this.ordenService.deleteOrdenGasto(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  ordenGastoDetails(id: number) {

    this.router.navigate(['detalle-orden', id]);
  }

  ordenGastoEdit(id: number) {
    this.router.navigate(['editar-orden', id]);
  }

  
    
}
