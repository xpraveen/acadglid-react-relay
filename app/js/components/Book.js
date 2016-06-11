import React from "react";

export default class Book extends React.Component {

    handleBookDelete = (event) => {
        const {book} = this.props;
        event.stopPropagation();
        this.props.deleteBook(book.id);
    }
    render() {
        const {book, active} = this.props;

        return (
            <tr data-book-id={book.id} onClick={this.props.onClick}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>
                    <button type="button" className={active? "btn btn-danger" : "hide"} onClick={this.handleBookDelete}>Delete</button>
                </td>
            </tr>
        );
    }
}
