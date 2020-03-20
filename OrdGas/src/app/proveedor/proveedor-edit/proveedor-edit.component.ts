import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'app/models/proveedor';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ProveedorService } from 'app/services/proveedor.service';

@Component({
  selector: 'app-proveedor-edit',
  templateUrl: './proveedor-edit.component.html',
  styleUrls: ['./proveedor-edit.component.scss']
})
export class ProveedorEditComponent implements OnInit {
  id: number;
  proveedor: Proveedor
  constructor( private route: ActivatedRoute,
    private router:Router,
    private formBuilder: FormBuilder,
    private  proveedorService: ProveedorService) { }

  ngOnInit() {
    this.proveedor = new Proveedor();

    this.id = this.route.snapshot.params['id'];
    
    this.proveedorService.getProveedor(this.id)
      .subscribe(data => {
        console.log(data)
        this.proveedor = data;
      }, error => console.log(error));
  }

  updateProveedor() {
    this.proveedorService.updateProveedor(this.id, this.proveedor)
      .subscribe(data => console.log(data), error => console.log(error));
    this.proveedor = new Proveedor();
    this.gotoList();
  }

  onSubmit() {
    this.updateProveedor();    
  }

  gotoList() {
    this.router.navigate(['list-proveedor']);
  }

}
