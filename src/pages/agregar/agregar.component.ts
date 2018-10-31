import { Component } from '@angular/core';
import { DeseosProvider } from '../../providers/deseos.provider';
import { Lista } from '../../models';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.component.html'
})
export class AgregarPage {

  lista: Lista;

  constructor( public deseosProvider: DeseosProvider,
               private navParams: NavParams ) {

    const titulo = this.navParams.get('titulo');
    this.lista = new Lista (titulo);
  }

  listaSeleccionada(lista: Lista) {
    console.log(lista);
  }
}
