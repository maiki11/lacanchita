
// src/app/providers/af.ts
import { Injectable } from "@angular/core";
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
@Injectable()
export class AF {
  constructor(public af: AngularFireAuth, public db: AngularFireDatabase) { }
  login() {
    return this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  /**
  * Logs the user in using their Email/Password combo
  * @param email
  * @param password
  * @returns {firebase.Promise<FirebaseAuthState>}
  */
  loginwithemail(email, password) {
    return this.af.auth.signInWithEmailAndPassword(email,password)
  }
  logout() {
    this.af.auth.signOut();
  }
  /**
   * Calls the AngularFire2 service to register a new user
   * @param model
   * @returns {firebase.Promise<void>}
   */
  registerUser(email, password) {
    console.log(email)
    return this.af.auth.createUserWithEmailAndPassword(
      email,
      password
    );
  }
  /**
   * Saves information to display to screen when user is logged in
   * @param uid
   * @param model
   * @returns {firebase.Promise<void>}
   */
  saveUserInfoFromForm(uid, name, email) {
    return this.db.database.ref('registeredUsers/' + uid).set({
      name: name,
      email: email
    });
  }
  

}