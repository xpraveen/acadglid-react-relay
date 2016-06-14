import React from "react";
import Relay from "react-relay";
import DeleteBookMutation from "../mutations/DeleteBookMutation";

export default class Book extends React.Component {

    deleteBook(event, id) {
        event.stopPropagation();
        console.log("Deleting Book with id: ", id);

        const {book} = this.props;
        const {title} = book;

        const onSuccess = (response) => {
            console.log("Mutation successful!: response: ", response);
            this.props.showMessage({msg: `Book ${title} has been deleted!`, type: "success"});
        };
        const onFailure = (transaction) => {
            let error = transaction.getError() || new Error("Mutation failed.");
            console.error(error);
            this.props.showMessage({msg: "Oops!.....Can't delete Book now!", type: "error"});
        };

        if (confirm("Do you really want to delete this Book?")) {
            const mutation = new DeleteBookMutation({id: id, bookStore: this.props.bookStore});
            Relay.Store.commitUpdate(mutation, {onFailure, onSuccess});
        }
    }

    render() {
        const {index, book} = this.props;
        const {id, title} = book;
        return (
            <tr>
                <td>{index}</td>
                <td>{title}</td>
                <td>
                    <button type="button" className="btn btn-danger" onClick={(event) => this.deleteBook(event, id)}>Delete</button>
                </td>
            </tr>
        );
    }
}

export default Relay.createContainer(Book, {
    fragments: {

        bookStore: () => Relay.QL `
            fragment on BookStore{
                id
            }
        `,

        book: () => Relay.QL `
        fragment book on Book {
            id,
            title
        }
        `
    }
});
