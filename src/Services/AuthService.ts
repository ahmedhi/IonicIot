import * as firebase from 'firebase';

export class AuthService{
    isAuth = false ;

    constructor(){
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.isAuth = true;
            }
            else {
                this.isAuth = false;
            }
        });
    }

    //Connexion NewUser
    signUpUser( email : string, password : string){
        return new Promise((resolve , reject) =>{
            firebase.auth().createUserWithEmailAndPassword(email, password).then(
                (user) =>{
                    resolve(user);
                },
                (error) => {
                    reject(error);
                }
            );
        });
    }

    //Connexion Normal
    signInUser( email: string , password : string){
        return new Promise((resolve , reject) => {
            firebase.auth().signInWithEmailAndPassword(email , password).then(
                (user) => {
                    resolve(user);
                },
                (error) => {
                    reject(error);
                }
            );
        });
    }

    //Deconnexion
    signOut(){
        firebase.auth().signOut();
    }



}