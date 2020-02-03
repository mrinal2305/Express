import { App } from './base';
import withFirebaseAuth from 'react-with-firebase-auth'
import "firebase/auth";

class Auth {

    constructor() {
      this.authenticated = true;
    }
  
    login(cb,user) {
      var email    = user.username;
      var password = user.password;

      App.auth().signInWithEmailAndPassword(email,password)
      .then((user)=>{
        this.authenticated = true;
        cb();
      })
      .catch((err)=>{
         alert(err);
      })
    }
  
    logout(cb) {
      App.auth().signOut();
      this.authenticated = false;
      cb();
    }
  
    isAuthenticated() {
      return this.authenticated;
    }
  }
  
  export default new Auth();
  