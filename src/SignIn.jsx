import React from "react";
import "./App.css";
import { firebase } from "./Firebase/firebase";

const SignIn = () => {
  const SignInWithFirebase = () => {
    var google_provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(google_provider)
      .then((re) => {
        console.log(re);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <button className="custom-btn" onClick={SignInWithFirebase}>
      Sign In with Google
    </button>
  );
};

export default SignIn;
