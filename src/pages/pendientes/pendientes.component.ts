import { Component } from '@angular/core';
import { DeseosProvider } from '../../app/providers/deseos.provider';

@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.component.html'
})
export class PendientesPage {

  constructor( public deseosProvider: DeseosProvider) {

  }
}
