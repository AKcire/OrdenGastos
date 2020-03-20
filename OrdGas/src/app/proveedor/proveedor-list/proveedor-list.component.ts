import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'app/models/proveedor';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProveedorService } from 'app/services/proveedor.service';

@Component({
  selector: 'app-proveedor-list',
  templateUrl: './proveedor-list.component.html',
  styleUrls: ['./proveedor-list.component.scss']
})
export class ProveedorListComponent implements OnInit {

  
  proveedores: Observable<Proveedor[]>;

  constructor(
    private router: Router,
    private http: HttpClient,
    private proveedorService: ProveedorService
  ) { }


  ngOnInit() {
    
    this.reloadData();
  
  }

  reloadData() {
    this.proveedores = this.proveedorService.getProveedoresList();
    
  }


  deleteProveedor(id: number) {
    this.proveedorService.deleteProveedor(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  proveedorDetails(id: number){
    
    this.router.navigate(['detalle-proveedor', id]);
  }

  proveedorEdit(id: number){
    this.router.navigate(['editar-proveedor', id]);
  }

     
}
