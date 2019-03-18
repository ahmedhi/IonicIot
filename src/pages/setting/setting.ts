import { Component } from '@angular/core';
import { AppareilPage } from '../appareil/appareil';
import { IonicPage, NavController, NavParams, AlertController, MenuController } from 'ionic-angular';

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(private alertCtrl: AlertController,
              public menuCtrl: MenuController) {
  }

  onToggleLights() {
    let alerte = this.alertCtrl.create({
      title: 'Etes-vous certain(e) de vouloir continuer ?',
      subTitle: 'Cette action allumera ou éteindra toutes les lumieres de la maison !',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel'
        },
        {
          text: 'Confirmer',
          handler: () => console.log('Confirmé !')
        } 
      ]
    });
    alerte.present();
  }

  onToggleMenu(){
    this.menuCtrl.open();
  }

}
