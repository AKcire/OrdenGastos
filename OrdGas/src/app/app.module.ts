import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import {
  AgmCoreModule
} from '@agm/core';


import { HttpClientModule } from '@angular/common/http';
//import { DeviceDetectorModule } from 'ngx-device-detector';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FieldsetModule } from 'primeng/fieldset';
import { InputMaskModule } from 'primeng/inputmask';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ProveedorService } from './services/proveedor.service';
import { EmpleadoService } from './services/empleado.service';
import { ContratoService } from './services/contrato.service';
import { CertificadoService } from './services/certificado.service';
import { OrdenService } from './services/orden.service';
import { TipoService } from './services/tipo.service';
import { TestComponent } from './test/test.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FieldsetModule,
    NgxSpinnerModule,
    ButtonModule,
    ToastModule,
    DialogModule,
    TableModule,
    TooltipModule,
    InputMaskModule,
    //DeviceDetectorModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    TestComponent,
  ],
  providers: [
    ProveedorService, 
    EmpleadoService,
    ContratoService, 
    CertificadoService, 
    OrdenService,
    TipoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
