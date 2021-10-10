import { auth } from "./firebase";
import firebase from "firebase";
import axios from "axios";

class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(email, pass, cb) {
    return auth
      .signInWithEmailAndPassword(email, pass)
      .then((user) => {
        this.authenticated = true;
        return `http://localhost:8000/users/${email}`;
      })
      .catch((e) => {
        return e.message;
      });
  }

  signup(email, pass) {
    auth.createUserWithEmailAndPassword(email, pass);
  }
  logout(cb) {
    this.authenticated = false;
    cb();
  }
  isauthenticated() {
    return this.authenticated;
  }

  socialMediaAuth = (provider) => {
    return firebase
      .auth()
      .signInWithRedirect(provider)
      .then((res) => {
        return res.user;
      })
      .catch((err) => {
        return err;
      });
  };
}

export default new Auth();
