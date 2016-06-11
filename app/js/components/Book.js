import React from "react";

export default class Book extends React.Component {

    constructor(){
        super();
        this.state = {"deleting": false};
    }
    handleBookDelete = (event) => {
        const {book} = this.props;
        event.stopPropagation();
        this.setState({"deleting": true});

        setTimeout(() => {
            this.setState({"deleting": false}, () => {
                this.props.deleteBook(book.id);
            });
        }, 3000);
    }
    render() {
        const {book, active} = this.props;
        const {deleting} = this.state;

        return (
            <tr data-book-id={book.id} onClick={this.props.onClick}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>
                    <button type="button" disabled={deleting} className={active? "btn btn-danger" : "hide"} onClick={this.handleBookDelete}>{deleting ? "Deleting...": "Delete"}</button>
                </td>
            </tr>
        );
    }
}
