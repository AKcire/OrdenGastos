import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'app/models/proveedor';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ProveedorService } from 'app/services/proveedor.service';

@Component({
  selector: 'app-proveedor-add',
  templateUrl: './proveedor-add.component.html',
  styleUrls: ['./proveedor-add.component.scss']
})
export class ProveedorAddComponent implements OnInit {

  proveedor: Proveedor = new Proveedor();
  submitted = false;
   

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private proveedorService: ProveedorService
  ) {}

  ngOnInit() {
  }

  
newProveedor(): void {
  this.submitted = false;
  this.proveedor = new Proveedor();
}

save() {
  this.proveedorService.createProveedor(this.proveedor)
    .subscribe();
  this.proveedor = new Proveedor();
  this.gotoList();
}

onSubmit() {
  this.submitted = true;
  this.save();    
}

gotoList() {
  this.router.navigate(['list-proveedor']);
}
  

}
