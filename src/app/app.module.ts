import { OptionsPage } from './../pages/options/options';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AppareilPage} from '../pages/appareil/appareil';
import { SingleAppareilPage} from '../pages/appareil/single-appareil/single-appareil'
import { SettingPage } from '../pages/setting/setting';
import { TabsPage } from '../pages/tabs/tabs';
import { AppareilService } from '../Services/appareils.service';
import { AppareilFormPage } from '../pages/appareil/AppareilFormPage/appareil-form';
import { AuthService } from '../Services/AuthService';
import { AuthPage } from '../pages/auth/auth';

@NgModule({
  declarations: [ //Component
    MyApp,
    HomePage,
    AppareilPage,
    SingleAppareilPage,
    SettingPage,
    TabsPage,
    OptionsPage,
    AppareilFormPage,
    AuthPage
  ], //Module
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [ //Component
    MyApp,
    HomePage,
    AppareilPage,
    SingleAppareilPage,
    SettingPage,
    TabsPage,
    OptionsPage,
    AppareilFormPage,
    AuthPage
  ],
  providers: [ //Service
    AppareilService,
    StatusBar,
    SplashScreen,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
