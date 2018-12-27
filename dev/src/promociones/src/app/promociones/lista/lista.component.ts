import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

import { Promo } from '../../entidades/promociones';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  promociones$: Observable<any[]>;
  promociones_eliminadas$: Observable<any[]>;

  constructor(private router: Router, 
              private route: ActivatedRoute,
              private db: AngularFirestore) { 
  }

  ngOnInit() {
    this.route.paramMap.subscribe(ps => {
      let categoria = ps.get('categoria');
      this.promociones$ = this.db.collection<Promo>('promociones').snapshotChanges().pipe(
        map(actions => 
          actions.map(
            a => {
              return {
                data: a.payload.doc.data(),
                id: a.payload.doc.id
              };
            }
          ).filter(d => d.data.eliminado == undefined && d.data.categoria == categoria)
        )
      );
      
      /*
      this.promociones_eliminadas$ = this.db.collection<Promo>('promociones').snapshotChanges().pipe(
        map(documents => 
          documents.map(
            d => {
              return {data: d.payload.doc.data(), id: d.payload.doc.id}
            }
          ).filter(d => d.data.eliminado != undefined)
        )
      );
      */
 
    });

  }

  comprar(pid) {
    this.router.navigate(['/sistema/comprar/' + pid]);
  }

  
}
