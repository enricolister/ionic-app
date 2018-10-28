import { Component } from '@angular/core';
import { DeseosProvider } from '../../providers/deseos.provider';
import { Lista } from '../../models';
import { NavController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar.component';

@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.component.html'
})
export class PendientesPage {

  constructor( public deseosProvider: DeseosProvider,
               private navCtrl: NavController) {

  }

  listaSeleccionada(lista: Lista) {
    console.log(lista);
  }

  agregarLista() {
    this.navCtrl.push(AgregarPage);
  }
}
