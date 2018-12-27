import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompradasComponent } from './promociones/compradas/compradas.component';
import { ListaComponent } from './promociones/lista/lista.component';
import { EliminarComponent } from './promociones/eliminar/eliminar.component';
import { RestaurarComponent } from './promociones/restaurar/restaurar.component';
import { AgregarComponent } from './promociones/agregar/agregar.component';
import { ComprarComponent } from './promociones/comprar/comprar.component';

import { SistemaComponent } from './sistema/sistema.component';

const routes: Routes = [
  { path: 'sistema', component: SistemaComponent , children: [
    { path: 'lista/:categoria', component: ListaComponent },
    { path: 'compradas', component: CompradasComponent },
    { path: 'eliminar/:id', component: EliminarComponent },
    { path: 'restaurar/:id', component: RestaurarComponent },
    { path: 'agregar', component: AgregarComponent },
    { path: 'comprar/:id', component: ComprarComponent }
  ]},

  { path: '**', redirectTo: '/sistema' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
