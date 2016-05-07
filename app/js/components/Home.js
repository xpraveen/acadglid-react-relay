import React from "react";
import Books from "./Books";

export default class Home extends React.Component {
    render() {
        /* Data passed by parent component can be received in child using 'props' */
        const {books, deleteBook} = this.props;

        return (
            <div>
                <Books books={books} deleteBook={deleteBook}/>
            </div>
        );
    }
}
