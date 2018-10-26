import { Injectable } from '@angular/core';
import { Lista } from '../models'; //this works because of the index file in the models folder

@Injectable()
export class DeseosProvider {

  listas: Lista[] = [];

  constructor() {
    const lista1 = new Lista('Recolectar piedras del infinito');
    const lista2 = new Lista('Heroes a vencer');

    this.listas.push(lista1, lista2);
  }
}
