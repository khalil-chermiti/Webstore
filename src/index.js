import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom" ;
import App from "./App";

ReactDOM.render(
    /* here we wrapped the app component in a BrowserRouter 
    so we get access to react router features*/
    <BrowserRouter>
        <App />
    </BrowserRouter>            
, document.getElementById("root")
);