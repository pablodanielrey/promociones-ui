import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

interface Categoria {
  nombre: string;
  icono: string;
}

@Component({
  selector: 'app-sistema',
  templateUrl: './sistema.component.html',
  styleUrls: ['./sistema.component.scss']
})
export class SistemaComponent implements OnInit {

  categorias$: Observable<Categoria[]>;

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.categorias$ = this.db.collection<Categoria>('categorias').valueChanges();
  }

  cerrar_menu(d) {
    d.toggle();
    console.log('cerrar_menu');
  }

  cambiar_tema(t) {
    console.log('cambiar -tema');
    console.log(t);
    localStorage.setItem('tema',t);
  }

}
