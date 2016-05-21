import React from "react";
import Relay from "react-relay";

export default class Book extends React.Component {

    render() {
        const {book, index} = this.props;

        return (
            <tr>
                <td>{index}</td>
                <td>{book.title}</td>
                <td>
                    <button type="button" className="btn btn-danger" onClick={this.handleBookDelete}>Delete</button>
                </td>
            </tr>
        );
    }
}

export default Relay.createContainer(Book, {
    fragments: {
        book: () => Relay.QL `
        fragment book on Book {
            title
        }
        `
    }
});
