import React from "react";
import Books from "./Books";
import Info from "./Info";

export default class Home extends React.Component {
    render() {
        /* Data passed by parent component can be received in child using 'props' */
        const {books, deleteBook, deletedBook} = this.props;
        return (
            <div>
                <Info book={deletedBook} />
                <Books books={books} deleteBook={deleteBook}/>
            </div>
        );
    }
}
