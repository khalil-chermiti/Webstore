import React from "react";
import { Route, Switch } from "react-router-dom";

import "./app.css";
import Header from "./components/header/header.comp";
import Homepage from "./pages/homepage/homepage.comp";
import Shoplist from "./pages/shop/shop.comp";
import singInOut from "./pages/sign-in-out/sign-in-out.comp";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = { currentUser: null };
  }

  // setting the unsubscribe from auth to null
  unsubscribeFromAuth = null;

  // when component will set user if it is signed in
  // and return a unsubscribe funcion
  // the unSubscribeFromAuth will get that function .
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  // when component will unmount the unsubscribe function we'll be invoked
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  // making a router for menu Items
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route path="/shop" component={Shoplist}></Route>
          <Route path="/signin" component={singInOut}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
