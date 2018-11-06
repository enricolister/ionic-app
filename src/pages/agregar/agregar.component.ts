import { Component } from '@angular/core';
import { DeseosProvider } from '../../providers/deseos.provider';
import { Lista, ListaItem } from '../../models';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.component.html'
})
export class AgregarPage {

  lista: Lista;
  nombreItem: string = '';

  constructor( public deseosProvider: DeseosProvider,
               private navParams: NavParams ) {

    const titulo = this.navParams.get('titulo');
    if (this.navParams.get('lista')) {
      this.lista = this.navParams.get('lista');
    } else {
      this.lista = new Lista(titulo);
      this.deseosProvider.agregarLista(this.lista);
    }

  }

  agregarItem() {
    if (this.nombreItem.length === 0) {
      return;
    }
    const nuevoItem = new ListaItem(this.nombreItem);
    this.lista.items.push(nuevoItem);
    this.nombreItem = '';
  }

  actualizarTarea(item: ListaItem) {
    item.completado = !item.completado;
  }

  borrar(i: number) {
    this.lista.items.splice(i, 1);
  }
}
