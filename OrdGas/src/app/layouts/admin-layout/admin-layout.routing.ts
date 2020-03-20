import { Routes } from '@angular/router';
import { CertificadoAddComponent } from 'app/certificado/certificado-add/certificado-add.component';
import { CertificadoEditComponent } from 'app/certificado/certificado-edit/certificado-edit.component';
import { CertificadoDetailComponent } from 'app/certificado/certificado-detail/certificado-detail.component';
import { CertificadoListComponent } from 'app/certificado/certificado-list/certificado-list.component';
import { ContratoAddComponent } from 'app/contrato/contrato-add/contrato-add.component';
import { ContratoListComponent } from 'app/contrato/contrato-list/contrato-list.component';
import { ContratoDetailComponent } from 'app/contrato/contrato-detail/contrato-detail.component';
import { ContratoEditComponent } from 'app/contrato/contrato-edit/contrato-edit.component';
import { ProveedorListComponent } from 'app/proveedor/proveedor-list/proveedor-list.component';
import { ProveedorDetailComponent } from 'app/proveedor/proveedor-detail/proveedor-detail.component';
import { ProveedorEditComponent } from 'app/proveedor/proveedor-edit/proveedor-edit.component';
import { ProveedorAddComponent } from 'app/proveedor/proveedor-add/proveedor-add.component';
import { EmpleadoAddComponent } from 'app/empleado/empleado-add/empleado-add.component';
import { EmpleadoEditComponent } from 'app/empleado/empleado-edit/empleado-edit.component';
import { EmpleadoListComponent } from 'app/empleado/empleado-list/empleado-list.component';
import { OrdenAddComponent } from 'app/ordengasto/orden-add/orden-add.component';
import { OrdenEditComponent } from 'app/ordengasto/orden-edit/orden-edit.component';
import { OrdenDetailComponent } from 'app/ordengasto/orden-detail/orden-detail.component';
import { OrdenListComponent } from 'app/ordengasto/orden-list/orden-list.component';

export const AdminLayoutRoutes: Routes = [
    //{ path: 'maps',           component: MapsComponent },
    { path: 'add-certificado',         component: CertificadoAddComponent },
    { path: 'editar-certificado/:id',  component: CertificadoEditComponent },
    { path: 'detalle-certificado/:id', component: CertificadoDetailComponent },
    { path: 'list-certificado',        component: CertificadoListComponent },

    { path: 'add-contrato',            component: ContratoAddComponent },
    { path: 'editar-contrato/:id',     component: ContratoEditComponent },
    { path: 'detalle-contrato/:id',    component: ContratoDetailComponent},
    { path: 'list-contrato',           component: ContratoListComponent },

    { path: 'add-empleado',            component: EmpleadoAddComponent},
    { path: 'editar-empleado/:id',     component: EmpleadoEditComponent},
    { path: 'detalle-empleado/:id',    component: EmpleadoEditComponent},
    { path: 'list-empleado',           component: EmpleadoListComponent},

    { path: 'add-proveedor',           component: ProveedorAddComponent},
    { path: 'editar-proveedor/:id',    component: ProveedorEditComponent},
    { path: 'detalle-proveedor/:id',   component: ProveedorDetailComponent},
    { path: 'list-proveedor',          component: ProveedorListComponent},

    { path: 'add-orden',               component: OrdenAddComponent},
    { path: 'editar-orden/:id',        component: OrdenEditComponent},
    { path: 'detalle-orden/:id',       component: OrdenDetailComponent},
    { path: 'list-orden',              component: OrdenListComponent},
];
