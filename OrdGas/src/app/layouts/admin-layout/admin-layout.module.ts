import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import { InputMaskModule} from 'primeng/inputmask';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CertificadoAddComponent } from '../../certificado/certificado-add/certificado-add.component';
import { CertificadoDetailComponent } from '../../certificado/certificado-detail/certificado-detail.component';
import { CertificadoEditComponent } from '../../certificado/certificado-edit/certificado-edit.component';
import { CertificadoListComponent } from '../../certificado/certificado-list/certificado-list.component';
import { ContratoListComponent } from '../../contrato/contrato-list/contrato-list.component';
import { ContratoEditComponent } from '../../contrato/contrato-edit/contrato-edit.component';
import { ContratoAddComponent } from '../../contrato/contrato-add/contrato-add.component';
import { ContratoDetailComponent } from '../../contrato/contrato-detail/contrato-detail.component';
import { EmpleadoAddComponent } from '../../empleado/empleado-add/empleado-add.component';
import { EmpleadoDetailComponent } from '../../empleado/empleado-detail/empleado-detail.component';
import { EmpleadoEditComponent } from '../../empleado/empleado-edit/empleado-edit.component';
import { EmpleadoListComponent } from '../../empleado/empleado-list/empleado-list.component';
import { OrdenAddComponent } from '../../ordengasto/orden-add/orden-add.component';
import { OrdenDetailComponent } from '../../ordengasto/orden-detail/orden-detail.component';
import { OrdenEditComponent } from '../../ordengasto/orden-edit/orden-edit.component';
import { OrdenListComponent } from '../../ordengasto/orden-list/orden-list.component';
import { ProveedorAddComponent } from '../../proveedor/proveedor-add/proveedor-add.component';
import { ProveedorEditComponent } from '../../proveedor/proveedor-edit/proveedor-edit.component';
import { ProveedorListComponent } from '../../proveedor/proveedor-list/proveedor-list.component';
import { ProveedorDetailComponent } from '../../proveedor/proveedor-detail/proveedor-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    DialogModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    ToastModule,
    TableModule,
    TooltipModule,
    InputMaskModule
  ],
  declarations: [
    CertificadoAddComponent,
    CertificadoDetailComponent,
    CertificadoEditComponent,
    CertificadoListComponent,
    ContratoListComponent,
    ContratoEditComponent,
    ContratoAddComponent,
    ContratoDetailComponent,
    EmpleadoAddComponent,
    EmpleadoDetailComponent,
    EmpleadoEditComponent,
    EmpleadoListComponent,
    OrdenAddComponent,
    OrdenDetailComponent,
    OrdenEditComponent,
    OrdenListComponent,
    ProveedorAddComponent,
    ProveedorEditComponent,
    ProveedorListComponent,
    ProveedorDetailComponent,
  ]
})

export class AdminLayoutModule {}
