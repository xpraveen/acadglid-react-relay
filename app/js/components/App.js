import React from "react";
import Header from "./Header";
import Home from "./Home";
import BookDrawer from "./BookDrawer";

export default class App extends React.Component {
    render() {
        return (
            <div className="book-store">
                <Header/>
                <BookDrawer/>
                <Home/>
            </div>
        );
    }
}
