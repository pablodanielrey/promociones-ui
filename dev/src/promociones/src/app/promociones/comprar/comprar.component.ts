import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { switchMap, flatMap } from 'rxjs/operators';

import { AngularFirestore, AngularFirestoreDocument, DocumentData } from '@angular/fire/firestore';

import { Promo, Compra } from '../../entidades/promociones';
import { detachEmbeddedView } from '@angular/core/src/view';


@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.scss']
})
export class ComprarComponent implements OnInit {

  promo_doc$: AngularFirestoreDocument;
  promo$: Observable<DocumentData>;
  promo: Promo;

  constructor(private route: ActivatedRoute, 
              private db: AngularFirestore, 
              private location: Location) { }

  ngOnInit() {
    this.route.paramMap.subscribe(p => {
      let id = p.get('id');
      this.promo_doc$ = this.db.collection<Promo>('promociones').doc<Promo>(id);
      this.promo$ = this.promo_doc$.valueChanges();
      this.promo$.subscribe(d => {
        this.promo = <Promo>d;
        this.comprar();
      });
    });    
  }

  comprar() {
    let c = {
      nombre: this.promo.nombre,
      descripcion: this.promo.descripcion,
      comprado: new Date(),
      entregado: null,
      categoria: this.promo.categoria,
      imagen: this.promo.imagen,
      cantidad: 1
    }
    this.db.collection('compras').add(c);
    this.location.back();
  }

}
