import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

import { Compra } from '../../entidades/promociones';

@Component({
  selector: 'app-compradas',
  templateUrl: './compradas.component.html',
  styleUrls: ['./compradas.component.scss']
})
export class CompradasComponent implements OnInit {

  promociones$: Observable<any[]>;

  constructor(private router: Router, 
              private route: ActivatedRoute,
              private db: AngularFirestore) { 
  }

  ngOnInit() {
    this.promociones$ = this.db.collection<Compra>('compras').snapshotChanges().pipe(
      map(actions => 
        actions.map(
          a => {
            return {
              data: a.payload.doc.data(),
              id: a.payload.doc.id
            };
          }
        ).filter(d => d.data.entregado == null)
      )
    );
  }

  entregado(compra) {
    this.db.collection('compras').doc(compra.id).update({entregado: new Date()});
  }

}
