import React from "react";
import Relay from "react-relay";
import ReactDOM from "react-dom";
import App from "./components/App";
import BookStoreRoute from "./routes/BookStoreRoute";

import "!style!css!sass!../sass/app.scss";

ReactDOM.render(
    <Relay.RootContainer renderLoading={() => {
    return (
        <div>Loading...</div>
    );
}} Component={App} route={new BookStoreRoute()}/>, document.getElementById("app"));
