import React from "react";
import { firebase } from "./Firebase/firebase";
const SignOut = () => {
  const out = () => {
    firebase.auth().signOut();
  };
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <h1 className="header-text">Fakeshop</h1>
        <button className="custom-btn" onClick={out}>
          Sign Out
        </button>
      </div>
    </div>
  );
};
export default SignOut;
