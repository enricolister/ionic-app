import { Injectable } from '@angular/core';
import { Lista } from '../models'; //this works because of the index file in the models folder

@Injectable()
export class DeseosProvider {

  listas: Lista[] = [];

  constructor() {

    this.cargarStorage();
    /*const lista1 = new Lista('Recolectar piedras del infinito');
    const lista2 = new Lista('Heroes a vencer');

    this.listas.push(lista1, lista2);*/
  }

  agregarLista(lista: Lista) {
    this.listas.push(lista);
    this.guardarStorage();
  }

  guardarStorage() {
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  cargarStorage() {
    if (localStorage.getItem('data')) {
      this.listas = JSON.parse(localStorage.getItem('data'));
    } else {
      this.listas = [];
    }

  }
}
