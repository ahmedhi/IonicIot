import { AppareilService } from './../../Services/appareils.service';
import { Appareil } from './../../models/Appareil';
import { Component } from '@angular/core' ;
import { NavController, ModalController, MenuController } from 'ionic-angular';
import { SingleAppareilPage } from './single-appareil/single-appareil';
import { AppareilFormPage } from './AppareilFormPage/appareil-form';

@Component({
    selector :'page-appareil',
    templateUrl : 'appareil.html'
})

export class AppareilPage {
    appareilsListe : Appareil[];
    
    constructor(private modalCtrl: ModalController,
                private appareilsService: AppareilService,
                public menuCtrl: MenuController,
                private navCtrl: NavController){

    }
    
    ionViewCanEnter(){
     this.appareilsListe = this.appareilsService.appareilsList.slice();
    }

    
    onLoadAppareil(index : number){
        let modal = this.modalCtrl.create(
          SingleAppareilPage,
          {
            index : index
          }
        );
        modal.present();
      }

    
      onToggleMenu(){
      this.menuCtrl.open();
    }
   
    onNewAppareil(){
      this.navCtrl.push(AppareilFormPage);
    }
    
    
}