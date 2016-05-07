import React from "react";
import Header from "./Header";
import Home from "./Home";
import BookDrawer from "./BookDrawer";

export default class App extends React.Component {

    constructor(props) {
        super(props);

        //Mock Data
        this.state = {
            "view": "HOME",
            "bookIdCounter": 4,
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

    addBook = (book) => {
        let {bookIdCounter} = this.state;
        book.id = `${bookIdCounter}`;
        this.state.books.push(book);
        bookIdCounter++;
        this.setState({bookIdCounter}); //This will trigger render call.
    }

    closeBookDrawer = () => {
        this.setState({view: "HOME"});
    }

    openBookDrawer = () => {
        this.setState({view: "ADD_BOOK"});
    }

    renderDrawer() {
        const {view} = this.state;
        if (view === "ADD_BOOK") {
            return <BookDrawer addBook={this.addBook} closeBookDrawer={this.closeBookDrawer}/>;
        }
    }

    render() {
        let {books} = this.state;

        return (
            <div className="book-store">
                <Header openBookDrawer={this.openBookDrawer}/>
                <Home books={books} deleteBook={this.deleteBook}/>
                <div>
                    {this.renderDrawer()}
                </div>
            </div>
        );
    }
}
