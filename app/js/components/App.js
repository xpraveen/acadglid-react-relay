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
                    "title": "Prisoner of Azkaban"
                }
            ]
        };
    }

    deleteBook = (id) => {
        let {books} = this.state;
        for (let i = 0; i < books.length; i++) {
            if (books[i].id === id) {
                books.splice(i, 1);
                this.setState({books});
            }
        }
    }
    render() {
        let {books} = this.state;

        return (
            <div className="book-store">
                <Header/> {/*<BookDrawer/>*/
                /*Comment this out, we don't need it now.*/
            } < Home books = {
                books
            }
            deleteBook = {
                this.deleteBook
            } /> </div}
        );
    }
}
