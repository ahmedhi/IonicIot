import { Component } from '@angular/core';
import { AppareilPage } from '../appareil/appareil';
import { SettingPage } from '../setting/setting'; 

@Component({
    selector : 'page-tabs',
    templateUrl : 'tabs.html'
})

export class TabsPage {
    appareilPage = AppareilPage;
    settingPage = SettingPage;
}