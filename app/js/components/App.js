import React from "react";
import Header from "./Header";
import Home from "./Home";
//import BookDrawer from "./BookDrawer";

export default class App extends React.Component {

    constructor(props) {
        super(props);

        //Mock Data
        this.state = {
            "books": [
                {
                    "id": "1",
                    "title": "Philosopher's Stone"
                }, {
                    "id": "2",
                    "title": "Chamber of Secrets"
                }, {
                    "id": "3",
                    "title": "Prisoner of Azkaban",
                    "isNew": true
                }
            ]
        };
    }

    render() {
        let {books} = this.state;

        return (
            <div className="book-store">
                <Header/>
                <Home books={books}/>
            </div>
        );
    }
}
