import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppareilPage } from '../appareil/appareil';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onGoToAppareil() {
    this.navCtrl.push(AppareilPage);
  }
}
