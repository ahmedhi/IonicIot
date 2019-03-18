import { TabsPage } from './../pages/tabs/tabs';
import { OptionsPage } from './../pages/options/options';
import { AppareilPage } from './../pages/appareil/appareil';
import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as firebase from 'firebase';
import { AuthPage } from '../pages/auth/auth';

@Component({
  templateUrl: 'app.html'
})


export class MyApp {
  tabsPage:any = TabsPage;
  optionPage:any = OptionsPage;
  authPage:any = AuthPage;
  isAuth: boolean ;
  @ViewChild('content') content: NavController;

  constructor(platform: Platform, 
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              public MenuCtrl: MenuController) {
    platform.ready().then(() => {
      let config = {
        apiKey: "AIzaSyDPzPR-Tj88v92BenioMzAeSpNJ8Ls_uVY",
        authDomain: "testionic-51035.firebaseapp.com",
        databaseURL: "https://testionic-51035.firebaseio.com",
        projectId: "testionic-51035",
        storageBucket: "testionic-51035.appspot.com",
        messagingSenderId: "401326393609"
      };
      firebase.initializeApp(config);
      firebase.auth().onAuthStateChanged(
        (user) => {
          if(user){
            this.isAuth = true;
            this.content.setRoot(TabsPage);
          }else {
            this.isAuth = false;
            this.content.setRoot(AuthPage, {mode: 'connect'});
          }
        }
      )
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onNavigate(page: any , data? : {}){
    this.content.setRoot(page, data ? data : null);
    this.MenuCtrl.close();
  }

  onDisconnect(){
    firebase.auth().signOut();
    this.MenuCtrl.close();
  }

}

