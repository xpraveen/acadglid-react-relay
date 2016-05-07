import React from "react";

export default class Book extends React.Component {

    handleBookDelete = (event) => {
        const {book} = this.props;

        event.stopPropagation();
        console.log("Delete book with id: ", book.id, " and name: ", book.title);
        this.props.deleteBook(book.id);
    }
    render() {
        const {book} = this.props;

        return (
            <tr>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>
                    <button type="button" className="btn btn-danger" onClick={this.handleBookDelete}>Delete</button>
                </td>
            </tr>
        );
    }
}
