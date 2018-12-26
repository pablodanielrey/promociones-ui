import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { switchMap, flatMap } from 'rxjs/operators';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';


@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.scss']
})
export class EliminarComponent implements OnInit {

  //promo$: BehaviorSubject<AngularFirestoreDocument> = new BehaviorSubject(null);
  promo_doc$: AngularFirestoreDocument;
  promo$: Observable<any>;

  constructor(private route: ActivatedRoute, private db: AngularFirestore, private location: Location) { }

  ngOnInit() {
    this.route.paramMap.subscribe(p => {
      let id = p.get('id');
      this.promo_doc$ = this.db.collection('promociones').doc(id);
      this.promo$ = this.promo_doc$.valueChanges(); 
      //this.eliminar();
    });

  }

  eliminar() {
    this.promo_doc$.update({eliminado: new Date()});
    this.location.back();
  }
}
