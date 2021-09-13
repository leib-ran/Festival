import { auth } from "./firebase";
import firebase from "firebase";

class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(email, pass, cb) {
    return auth
      .signInWithEmailAndPassword(email, pass)
      .then((user) => {
        console.log(user);
        this.authenticated = true;
        cb();
        return "";
      })
      .catch((e) => {
        console.log(e.message);
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
        console.log(res);
        return res.user;
      })
      .catch((err) => {
        console.log(err);

        return err;
      });
  };
}

export default new Auth();
