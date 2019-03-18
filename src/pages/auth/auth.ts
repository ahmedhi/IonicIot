import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../Services/AuthService";
import { NavParams, MenuController, NavController } from "ionic-angular";
import { TabsPage } from '../tabs/tabs';

@Component({
    selector : 'page-auth',
    templateUrl : 'auth.html'
})

export class AuthPage implements OnInit{
    //Il y a deux modes de connexion new et connect
    mode : string;
    authForm: FormGroup;
    errorMessage : string ;

    constructor( private authService : AuthService,
                private formBuilder : FormBuilder,
                private NavParams : NavParams,
                private MenuCtrl : MenuController,
                private navCtrl : NavController){}

    ngOnInit(){
        //Lire la valeur de mode envoyer par la page précedente
        this.mode = this.NavParams.get('mode');
        this.initForm();
    }

    initForm(){
        this.authForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]]
        });
    }

    //Menu Lateral
    onToggleMenu(){
        this.MenuCtrl.open();
    }

    onSubmitForm(){
        const email = this.authForm.get('email').value ;
        const password = this.authForm.get('password').value;
        if( this.mode === 'new'){
            this.authService.signUpUser(email,password).then(
                () => {
                    this.navCtrl.setRoot(TabsPage);
                },
                (error) => {
                    this.errorMessage = error ;
                }
            );
        }
        else if (this.mode === 'connect'){
            this.authService.signInUser(email, password).then(
                () => {
                    this.navCtrl.setRoot(TabsPage);
                },
                (error) => {
                    this.errorMessage = error;
                }
            );
        }
    }

}