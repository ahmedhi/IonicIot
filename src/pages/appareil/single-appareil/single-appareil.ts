import { AppareilService } from './../../../Services/appareils.service';
import { Appareil } from './../../../models/Appareil';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'page-single-appareil',
  templateUrl: 'single-appareil.html',
})
export class SingleAppareilPage implements OnInit{
  index: number ;
  appareil: Appareil;

  constructor(public viewCtrl: ViewController, 
              public navParams: NavParams ,
              public appareilsService: AppareilService) {
  }

  ngOnInit(){
    this.index = this.navParams.get('index');
    this.appareil = this.appareilsService.appareilsList[this.index]; 
  }

  dismissModal(){
    this.viewCtrl.dismiss();
  }

  onToggleAppareil(){
    this.appareil.isOn = !this.appareil.isOn ;
  }

  onDeleteHours(){
    this.appareil.startTime = '';
    this.appareil.endTime = '';
    this.dismissModal();
  }

  onSubmitForm( form : NgForm){
    console.log(form.value);
    this.dismissModal();
  }
  
}
