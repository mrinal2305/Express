import { App } from './base';
import "firebase/auth"; 
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'


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
        Swal.fire(                           // Very Useful during development Swal or (Sweet Alert)
          'Good job!',
          'You are now Logged in',
          'success'
        )
      })
      .catch((err)=>{
        Swal.fire({
          title: 'Error!',
          text: err,
          icon: 'error',
          confirmButtonText: 'Ok'
        })
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
  
  export default new Auth()