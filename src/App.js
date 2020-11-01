import React from "react";
import { Route, Switch } from "react-router-dom";

import './app.css'
import Homepage from "./pages/homepage/homepage.comp";
import Shoplist from "./pages/shop/shop.comp" ;


function App() {
  
  // making a router for menu Items 
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route path="/shop" component={Shoplist}></Route>
      </Switch>
    </div>
  );
}

export default App;
