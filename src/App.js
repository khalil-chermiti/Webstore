import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.comp";

let hatsPage = () => <h1>hello boy</h1>;

function App() {
  
  // making a router for menu Items 
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route path="/hats" component={hatsPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
