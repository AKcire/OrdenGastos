import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'app/models/proveedor';
import { ActivatedRoute, Router } from '@angular/router';
import { ProveedorService } from 'app/services/proveedor.service';

@Component({
  selector: 'app-proveedor-detail',
  templateUrl: './proveedor-detail.component.html',
  styleUrls: ['./proveedor-detail.component.scss']
})
export class ProveedorDetailComponent implements OnInit {
 
  id: number;
  proveedor: Proveedor;
    constructor(private route: ActivatedRoute,
      private router: Router,
      private proveedorService: ProveedorService ){ }
  
    ngOnInit() {
      this.proveedor = new Proveedor();
  
      this.id = this.route.snapshot.params['id'];
      
      this.proveedorService.getProveedor(this.id)
        .subscribe(data => {
          console.log(data)
          this.proveedor = data;
        }, error => console.log(error));
    }
    list(){
      this.router.navigate(['list-proveedor']);
    }
  }
  