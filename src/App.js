import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./containers/Header";
import ProductDetails from "./containers/ProductDetails";
import ProductListing from "./containers/ProductListing";
import React, { useState } from "react";
import { firebase } from "./Firebase/firebase";
import SignOut from "./SignOut";

function App() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(true);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      return setIsUserSignedIn(true);
    }
    setIsUserSignedIn(false);
  });
  if (isUserSignedIn === true) {
    return (
      <div className="App">
        <Router>
          <SignOut />
          <Switch>
            <Route path="/" exact component={ProductListing} />
            <Route
              path="/product/:productId"
              exact
              component={ProductDetails}
            />
            <Route>404 Not Found!</Route>
          </Switch>
        </Router>
      </div>
    );
  } else {
    return <Header />;
  }
}

export default App;
