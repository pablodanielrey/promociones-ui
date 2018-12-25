import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  promociones$: Observable<any[]>;

  constructor(private router: Router, private db: AngularFirestore) { 
  }

  ngOnInit() {
    this.promociones$ = this.db.collection('promociones').snapshotChanges().pipe(map(actions => actions.map(
      a => {
        return {
          data: a.payload.doc.data(),
          id: a.payload.doc.id
        };
      }
    )));
  }

  
}
