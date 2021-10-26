import React from "react";
import SignIn from "../SignIn";
const Header = () => {
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <h1 className="header-text">Fakeshop</h1>
        <SignIn />
      </div>
    </div>
  );
};
export default Header;
