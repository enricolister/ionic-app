import { Component } from '@angular/core';
import { DeseosProvider } from '../../providers/deseos.provider';
import { Lista } from '../../models';

@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.component.html'
})
export class PendientesPage {

  constructor( public deseosProvider: DeseosProvider) {

  }

  listaSeleccionada(lista: Lista) {
    console.log(lista);
  }
}
