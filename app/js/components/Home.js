import React from "react";
import Relay from "react-relay";
import Books from "./Books";

class Home extends React.Component {
    render() {
        /* Data passed by parent component can be received in child using 'props' */
        const {bookStore, deleteBook, showSuccess} = this.props;

        return (
            <div className="container">
                <Books bookStore={bookStore} deleteBook={deleteBook} showSuccess={showSuccess}/>
            </div>
        );
    }
}

export default Relay.createContainer(Home, {
    fragments: {
        bookStore: () => Relay.QL `
        fragment on BookStore {
            ${Books.getFragment("bookStore")}
        }
        `
    }
});
