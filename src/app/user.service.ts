declare var firebase: any;
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

const USERNAME = "userName";
const PASSWORD = "passWord";


@Injectable()
export class UserService {
	private user :any;

  constructor(private http_: Http) {
    
  }

  getSecret(){
    this.user.getToken().then((token: string) => {
    var headers = new Headers();

    headers.set('authorization', ('Bearer '+ token));

    this.http_.get("https://us-central1-my-awful-project-fd9a2.cloudfunctions.net/authorizedHello/0", {
      headers: headers
    }).subscribe(
    (response: any)=> alert(response));
    });
  
  }

  login(username: any, password: any) {
 
  let self = this;

  firebase.auth().signInWithEmailAndPassword(username, password).then(function(user: any) {
  self.user = user;
  self.getSecret();
  });
    
  	// var getUser = firebase.database().ref().child('user')
   //      .orderByChild(USERNAME).equalTo(username).limitToFirst(1);
   //  getUser.once("value").then((result: any)=> {
   //    console.log(result);

   //    if(result.exists()) {
   //      var user = result.val();

   //      // Get user by the first key returned by Firebase
   //      user = user[Object.keys(user)[0]];
   //      if(user[PASSWORD] !== password) {
   //        return;
   //      }

   //      this.user = result.val();
   //    }
   //  } );
    
  }

  register(username: any, password: any){
     if(!username.length){
      alert("fuck off");
      return null;
    }

    return firebase.auth().createUserWithEmailAndPassword(username, password);

    /*
    this.user = username;
    var newPostKey = firebase.database().ref().child('user').push().key;
    var userData = {
      [USERNAME]: username, [PASSWORD]: password
    };

    var updates = {};
    updates['/user/' + newPostKey] = userData;

    return firebase.database().ref().update(updates);*/
  }

  getUser(){
  	return this.user;
  }
}
