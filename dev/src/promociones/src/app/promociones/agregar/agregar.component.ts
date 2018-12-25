import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { v4 as uuid } from 'uuid';

interface Promo {
  nombre: string;
  descripcion: string;
}



@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private db: AngularFirestore) { 
    this.form = fb.group({
      nombre: [''],
      descripcion: ['']
    });
  }

  ngOnInit() {
  }

  crear() {
    let promo = this.form.value;
    console.log(promo);
    promo['id'] = uuid();
    this.db.collection<Promo>('promociones').add(promo).then(v => {
      this.form.setValue({nombre:'',descripcion:''});
    });
  }
}
