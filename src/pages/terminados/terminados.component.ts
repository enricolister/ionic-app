import { Component } from '@angular/core';
import { DeseosProvider } from '../../providers/deseos.provider';
import { Lista } from '../../models';

@Component({
  selector: 'page-terminados',
  templateUrl: 'terminados.component.html'
})
export class TerminadosPage {

  constructor( public deseosProvider: DeseosProvider) {

  }

  listaSeleccionada(lista: Lista) {
    console.log(lista);
  }
}
