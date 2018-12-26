import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';


interface Promo {
  nombre: string;
  descripcion: string;
  eliminado: Date;
}

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  promociones$: Observable<any[]>;
  promociones_eliminadas$: Observable<any[]>;

  constructor(private router: Router, private db: AngularFirestore) { 
  }

  ngOnInit() {
    this.promociones$ = this.db.collection<Promo>('promociones').snapshotChanges().pipe(
      map(actions => 
        actions.map(
          a => {
            return {
              data: a.payload.doc.data(),
              id: a.payload.doc.id
            };
          }
        ).filter(d => d.data.eliminado == undefined)
      )
    );
    
    this.promociones_eliminadas$ = this.db.collection<Promo>('promociones').snapshotChanges().pipe(
      map(documents => 
        documents.map(
          d => {
            return {data: d.payload.doc.data(), id: d.payload.doc.id}
          }
        ).filter(d => d.data.eliminado != undefined)
      )
    );
  }

  comprar(pid) {
    this.router.navigate(['/sistema/eliminar/' + pid]);
  }

  
}
