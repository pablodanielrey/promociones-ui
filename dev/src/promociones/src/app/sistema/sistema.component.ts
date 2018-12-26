import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sistema',
  templateUrl: './sistema.component.html',
  styleUrls: ['./sistema.component.scss']
})
export class SistemaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
