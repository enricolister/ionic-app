import { Component } from '@angular/core';
import { DeseosProvider } from '../../providers/deseos.provider';
import { Lista } from '../../models';
import { NavController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar.component';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.component.html'
})
export class PendientesPage {

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

  agregarLista() {
    //this.navCtrl.push(AgregarPage);
    const alerta = this.alertCtrl.create({
      title: 'Nueva lista',
      message: "Ingresa el nombre para la nueva lista",
      inputs: [
        {
          name: 'titulo',
          placeholder: 'Nombre de la lista'
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
          text: 'Agregar',
          handler: data => {
            if (data.titulo.length === 0) {
              return;
            }
            this.navCtrl.push(AgregarPage, {
              titulo: data.titulo
            })
          }
        }
      ]
    });
    alerta.present();
  }
}
