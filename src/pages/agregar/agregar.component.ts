import { Component } from '@angular/core';
import { DeseosProvider } from '../../providers/deseos.provider';
import { Lista } from '../../models';

@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.component.html'
})
export class AgregarPage {

  constructor( public deseosProvider: DeseosProvider) {

  }

  listaSeleccionada(lista: Lista) {
    console.log(lista);
  }
}
