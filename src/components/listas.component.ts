import { Component, Input } from '@angular/core';
import { DeseosProvider } from '../providers/deseos.provider';
import { Lista } from '../models';
import { NavController, AlertController, ItemSliding } from 'ionic-angular';
import { AgregarPage } from '../pages/agregar/agregar.component';

@Component({
  selector: 'app-listas',
  templateUrl: 'listas.component.html'
})
export class ListasComponent {

  @Input() completada: boolean = false;

  constructor( public deseosProvider: DeseosProvider,
               private navCtrl: NavController,
               private alertCtrl: AlertController) {

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

  editarLista(lista: Lista, slidingItem: ItemSliding) {
    slidingItem.close();
     const alerta = this.alertCtrl.create({
      title: 'Editar nombre',
      message: "Editar el nombre de la lista",
      inputs: [
        {
          name: 'titulo',
          placeholder: 'Nombre de la lista',
          value: lista.titulo
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancelado');
          }
        },
        {
          text: 'Guardar',
          handler: data => {
            if (data.titulo.length === 0) {
              return;
            }
           lista.titulo = data.titulo;
            this.deseosProvider.guardarStorage();
          }
        }
      ]
    });
    alerta.present();
  }
}
