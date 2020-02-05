import { App } from './base';
import "firebase/firebase-database";
import "firebase/firebase-storage";

class Database {
    storage = App.storage('gs://express-b0920.appspot.com/');       

    userMatch(phone){
        return App.database().ref('drivers').orderByChild('phone').equalTo(phone); // Query
    }

    userData(key){
        return App.database().ref('drivers').child(key);
    }

    userUpdate(key){
        return App.database().ref('drivers').child(key);
    }

    userDocument(key){
        return this.storage.ref().child('documents').child(key).listAll();
    }
}

export default new Database();