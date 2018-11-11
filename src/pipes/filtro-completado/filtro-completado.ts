import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../../models/lista.model';

/**
 * Generated class for the FiltroCompletadoPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'filtroCompletado',
  pure: false, // così il return del pipe sarà aggiornato in ogni posto dove viene usato indipementemente da dove si produce un cambiamento che lo interessa
})
export class FiltroCompletadoPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(listas: Lista[], completada: boolean) {
    return listas.filter( lista => {
      return lista.terminada === completada
    });
  }
}
