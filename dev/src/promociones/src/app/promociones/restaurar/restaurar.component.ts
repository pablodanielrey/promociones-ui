import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { switchMap, flatMap } from 'rxjs/operators';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-restaurar',
  templateUrl: './restaurar.component.html',
  styleUrls: ['./restaurar.component.scss']
})
export class RestaurarComponent implements OnInit {

  promo_doc$: AngularFirestoreDocument;
  promo$: Observable<any>;

  constructor(private route: ActivatedRoute, private db: AngularFirestore) { }

  ngOnInit() {
    this.route.paramMap.subscribe(p => {
      let id = p.get('id');
      this.promo_doc$ = this.db.collection('promociones').doc(id);
      this.promo$ = this.promo_doc$.valueChanges(); 
    });
  }

  restaurar() {
    this.promo_doc$.update({eliminado: firebase.firestore.FieldValue.delete()});
  }

}
