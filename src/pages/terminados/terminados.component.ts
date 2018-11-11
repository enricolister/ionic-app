import { Component } from '@angular/core';
import { DeseosProvider } from '../../providers/deseos.provider';
import { Lista } from '../../models';
import { NavController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar.component';

@Component({
  selector: 'page-terminados',
  templateUrl: 'terminados.component.html'
})
export class TerminadosPage {

  constructor( public deseosProvider: DeseosProvider,
               private navCtrl: NavController) {

  }

  listaSeleccionada(lista: Lista) {
    this.navCtrl.push(AgregarPage, {
      titulo: lista.titulo,
      lista: lista
    });
  }

  borrarLista(lista: Lista) {
    this.deseosProvider.borrarLista(lista);
  }
}
