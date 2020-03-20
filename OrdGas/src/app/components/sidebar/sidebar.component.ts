import { Component, OnInit } from '@angular/core';

declare const $: any;

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
 // { path: '/maps', title: 'Maps', icon: 'location_on', class: '' },
 { path: '/add-orden', title: 'Nueva orden', icon: 'library_add', class: '' },
 { path: '/list-orden', title: 'Lista de ordenes', icon: 'list', class: '' },
 { path: '/add-certificado', title: 'Nuevo certificado', icon: 'library_add', class: '' },
 { path: '/list-certificado', title: 'Lista de certificados', icon: 'list', class: '' },
 { path: '/add-proveedor', title: 'Nuevo proveedor', icon: 'library_add', class: '' },
 { path: '/list-proveedor', title: 'Lista de proveedores', icon: 'list', class: '' },
 { path: '/add-contrato', title: 'Nuevo contrato', icon: 'library_add', class: '' },
 { path: '/list-contrato', title: 'Lista de contratos', icon: 'list', class: '' },
 { path: '/add-empleado', title: 'Nuevo empleado', icon: 'library_add', class: '' },
 { path: '/list-empleado', title: 'Lista de empleados', icon: 'list', class: '' },
 
 
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  constructor() { }
  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}
