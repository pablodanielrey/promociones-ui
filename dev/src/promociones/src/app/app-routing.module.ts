import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaComponent } from './promociones/lista/lista.component';
import { EliminarComponent } from './promociones/eliminar/eliminar.component';
import { RestaurarComponent } from './promociones/restaurar/restaurar.component';
import { AgregarComponent } from './promociones/agregar/agregar.component';

const routes: Routes = [
  { path: 'lista', component: ListaComponent },
  { path: 'eliminar/:id', component: EliminarComponent },
  { path: 'restaurar/:id', component: RestaurarComponent },
  { path: 'agregar', component: AgregarComponent },
  { path: '**', redirectTo: '/lista' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
