import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './promociones/lista/lista.component';
import { AgregarComponent } from './promociones/agregar/agregar.component';
import { EliminarComponent } from './promociones/eliminar/eliminar.component';
import { RestaurarComponent } from './promociones/restaurar/restaurar.component';

import { SistemaComponent } from './sistema/sistema.component';

import { MyMaterialModule } from './material.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { CompradasComponent } from './promociones/compradas/compradas.component';
import { ComprarComponent } from './promociones/comprar/comprar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    AgregarComponent,
    EliminarComponent,
    RestaurarComponent,
    SistemaComponent,
    CompradasComponent,
    ComprarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyMaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
