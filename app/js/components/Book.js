import React from "react";
import Relay from "react-relay";
import DeleteBookMutation from "../mutations/DeleteBookMutation";

export default class Book extends React.Component {

    deleteBook(event, id) {
        event.stopPropagation();
        console.log("Deleting Book with id: ", id);

        const onSuccess = (response) => {
            console.log("Mutation successful!: response: ", response);
        };
        const onFailure = (transaction) => {
            let error = transaction.getError() || new Error("Mutation failed.");
            console.error(error);
        };

        const mutation = new DeleteBookMutation({id: id, bookStore: this.props.bookStore});

        Relay.Store.commitUpdate(mutation, {onFailure, onSuccess});
    }

    render() {
        const {index, book, filterBy} = this.props;
        let {id, title, author} = book;
        const regEx = new RegExp(filterBy,"i");

        title = title.replace(regEx, `<b>${filterBy}</b>`);
        author = author.replace(regEx, `<b>${filterBy}</b>`);

        /*
         * We should not use  dangerouslySetInnerHTML, find out why on online doc!!
         * In real code, try to use utlity provided by various library to encode string properly.
         */
        return (
            <tr>
                <td>{index}</td>
                <td><div dangerouslySetInnerHTML={{__html: title}} /></td>
                <td><div dangerouslySetInnerHTML={{__html: author}} /></td>
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
            title,
            author
        }
        `
    }
});
