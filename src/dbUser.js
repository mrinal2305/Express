import { App } from './base';
import "firebase/firebase-database";
import "firebase/firebase-storage";

class Database {

     // this.ref    = this.storage.ref().child('profilePhotos').listAll().then((data)=>{   // Accessing a folder
        //     // data.getDownloadURL().then(url => {console.log(url)});
        //     var arr = data.items;
        //     arr.forEach(child => {
        //         child.getDownloadURL().then(url => console.log(url)); //getting url of all images
        //     })
        // });

        // App.database().ref().child('users').on('value',snapshot => {
        //     snapshot.forEach(child => {
        //         console.log(child.key);         
        //     })
        // }); 

        // App.database().ref('users').orderByChild('phone').equalTo("+918709350903").on("child_added",snapshot => {
        //     console.log(snapshot.val())
        // })        

        // Query Successfully

        userMatch(phone){
            return App.database().ref('users').orderByChild('phone').equalTo(phone); // Query
        }

        userPhoto(key){
            var storage = App.storage('gs://express-b0920.appspot.com/');       
            return storage.ref('profilePhotos').child(key).getDownloadURL(); // Accessing a image url
        }

        userData(key){
            return App.database().ref('users').child(key);
        }
        
        userUpdate(key){
            return App.database().ref('users').child(key);
        }
  }
  
export default new Database();
  