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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RestaurarComponent } from './promociones/restaurar/restaurar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    AgregarComponent,
    EliminarComponent,
    RestaurarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
