import React from "react";
import Relay from "react-relay";
import ReactDOM from "react-dom";
//import App from "./components/App";
import Hello from "./components/Hello";
import BookStoreRoute from "./routes/BookStoreRoute";

import "!style!css!sass!../sass/app.scss";

ReactDOM.render(<Relay.RootContainer Component={Hello} route={new BookStoreRoute()}/>, document.getElementById("app"));
